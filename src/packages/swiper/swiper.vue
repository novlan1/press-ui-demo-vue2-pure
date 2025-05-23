<script>
import { baseMixin } from '../mixins/base/index';
import touchTrack from '../mixins/touch-track/index';

import { deepCloneVNodes, SWIPER_PROPS } from './utils';


const __PLATFORM__ = 'h5';

export default {
  name: 'Swiper',
  mixins: [touchTrack, baseMixin],
  props: {
    ...SWIPER_PROPS,
  },
  emits: [
    'update:current',
    'update:currentItemId',
    'change',
    'animationfinish',
    'transition',
  ],
  data() {
    return {
      currentSync: Math.round(this.current) || 0,
      currentItemIdSync: this.currentItemId || '',
      userTracking: false,
      currentChangeSource: '',
      items: [],

      isNavigationAuto: false,
      hideNavigation: false,
      prevDisabled: false,
      nextDisabled: false,
    };
  },
  computed: {
    intervalNumber() {
      const interval = Number(this.interval);
      return isNaN(interval) ? 5e3 : interval;
    },
    durationNumber() {
      const duration = Number(this.duration);
      return isNaN(duration) ? 500 : duration;
    },
    displayMultipleItemsNumber() {
      const displayMultipleItems = Math.round(this.displayMultipleItems);
      return isNaN(displayMultipleItems) ? 1 : displayMultipleItems;
    },
    slidesStyle() {
      let style = {};
      if (this.nextMargin || this.previousMargin) {
        style = this.vertical ? {
          left: 0,
          right: 0,
          top: this._upx2px(this.previousMargin),
          bottom: this._upx2px(this.nextMargin),
        } : {
          top: 0,
          bottom: 0,
          left: this._upx2px(this.previousMargin),
          right: this._upx2px(this.nextMargin),
        };
      }
      return style;
    },
    slideFrameStyle() {
      const value = `${Math.abs(100 / this.displayMultipleItemsNumber)}%`;
      return {
        width: this.vertical ? '100%' : value,
        height: !this.vertical ? '100%' : value,
      };
    },
    swiperEnabled() {
      return this.items.length > this.displayMultipleItemsNumber;
    },
    circularEnabled() {
      return this.circular && this.swiperEnabled;
    },
  },
  watch: {
    vertical() {
      this._resetLayout();
    },
    circular() {
      this._resetLayout();
    },
    intervalNumber() {
      if (this._timer) {
        this._cancelSchedule();
        this._scheduleAutoplay();
      }
    },
    current() {
      this._currentCheck();
    },
    currentSync(val, oldVal) {
      this._currentChanged(val, oldVal);
      this.$emit('update:current', val);
      this._setNavigationState();
    },
    currentItemId() {
      this._currentCheck();
    },
    currentItemIdSync(val) {
      this.$emit('update:currentItemId', val);
    },
    displayMultipleItemsNumber() {
      this._resetLayout();
    },
    navigation: {
      immediate: true,
      handler(val) {
        this.isNavigationAuto = val === 'auto';
        this.hideNavigation = val !== true || this.isNavigationAuto;
        this._navigationSwiperAddMouseEvent();
      },
    },
    items() {
      this._setNavigationState();
    },
    swiperEnabled(val) {
      if (!val) {
        this.prevDisabled = true;
        this.nextDisabled = true;
        this.isNavigationAuto && (this.hideNavigation = true);
      }
    },
  },
  created() {
    this._invalid = true;
    this._viewportPosition = 0;
    this._viewportMoveRatio = 1;
    this._animating = null;
    this._requestedAnimation = false;
    this._userDirectionChecked = false;
    this._contentTrackViewport = 0;
    this._contentTrackSpeed = 0;
    this._contentTrackT = 0;
  },
  mounted() {
    this._currentCheck();
    this.touchTrack(this.$refs.slidesWrapper, '_handleContentTrack', true);
    this._resetLayout();
    this.$watch(() => this.autoplay && !this.userTracking, this._inintAutoplay);
    this._inintAutoplay(this.autoplay && !this.userTracking);
    this.$watch('items.length', this._resetLayout);
    this._navigationSwiperAddMouseEvent();
  },
  beforeDestroy() {
    this._cancelSchedule();
    cancelAnimationFrame(this._animationFrame);
  },
  methods: {
    _inintAutoplay(enable) {
      if (enable) {
        this._scheduleAutoplay();
      } else {
        this._cancelSchedule();
      }
    },
    /**
     * 页面变更检查和同步
     */
    _currentCheck() {
      let current = -1;
      if (this.currentItemId) {
        for (let i = 0, { items } = this; i < items.length; i++) {
          const { componentInstance } = items[i];
          if (componentInstance && componentInstance.itemId === this.currentItemId) {
            current = i;
            break;
          }
        }
      }
      if (current < 0) {
        current = Math.round(this.current) || 0;
      }
      current = current < 0 ? 0 : current;
      if (this.currentSync !== current) {
        this.currentChangeSource = '';
        this.currentSync = current;
      }
    },
    _itemReady(vnode, callback) {
      if (vnode.componentInstance && vnode.componentInstance._isMounted) {
        callback();
      } else {
        vnode._callbacks = vnode._callbacks || [];
        vnode._callbacks.push(callback);
      }
    },
    /**
     * 当前页面变更
     */
    _currentChanged(current, history) {
      const source = this.currentChangeSource;
      this.currentChangeSource = '';
      if (!source) {
        const { length } = this.items;
        this._animateViewport(current, '', this.circularEnabled && history + ((length - current) % length) > length / 2 ? 1 : 0);
      }
      const item = this.items[current];
      if (item) {
        this._itemReady(item, () => {
          this.currentItemIdSync = item.componentInstance.itemId || '';
          const currentItemId = this.currentItemIdSync;

          this.$trigger('change', {}, {
            current: this.currentSync,
            currentItemId,
            source,
          });
        });
      }
    },
    /**
     * 自动播放
     */
    _scheduleAutoplay() {
      const self = this;
      this._cancelSchedule();
      function timer() {
        self._timer = null;
        self.currentChangeSource = 'autoplay';
        if (self.circularEnabled) {
          self.currentSync = self._normalizeCurrentValue(self.currentSync + 1);
        } else {
          self.currentSync = self.currentSync + self.displayMultipleItemsNumber < self.items.length
            ? self.currentSync + 1 : 0;
        }
        self._animateViewport(self.currentSync, 'autoplay', self.circularEnabled ? 1 : 0);
        self._timer = setTimeout(timer, self.intervalNumber);
      }
      if (!(!this._isMounted || this._invalid || this.items.length <= this.displayMultipleItemsNumber)) {
        this._timer = setTimeout(timer, this.intervalNumber);
      }
    },
    /**
     * 清除定时器
     */
    _cancelSchedule() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    },
    /**
     * 检查当前页值
     */
    _normalizeCurrentValue(current) {
      const { length } = this.items;
      if (!length) {
        return -1;
      }
      const index = ((Math.round(current) % length) + length) % length;
      if (this.circularEnabled) {
        if (length <= this.displayMultipleItemsNumber) {
          return 0;
        }
      } else if (index > length - this.displayMultipleItemsNumber) {
        return length - this.displayMultipleItemsNumber;
      }
      return index;
    },
    _upx2px(val) {
      if (/\d+[ur]px$/i.test(val)) {
        val.replace(/\d+[ur]px$/i, text => `${uni.upx2px(parseFloat(text))}px`);
      }
      return val || '';
    },
    /**
     * 重新布局
     */
    _resetLayout() {
      if (this._isMounted) {
        this._cancelSchedule();
        this._endViewportAnimation();
        const { items } = this;

        for (let i = 0; i < items.length; i++) {
          this._updateItemPos(i, i);
        }
        this._viewportMoveRatio = 1;
        if (this.displayMultipleItemsNumber === 1 && items.length) {
          const itemRect = items[0].componentInstance.$el.getBoundingClientRect();
          const slideFrameRect = this.$refs.slideFrame.getBoundingClientRect();
          this._viewportMoveRatio = itemRect.width / slideFrameRect.width;
          if (!(this._viewportMoveRatio > 0 && this._viewportMoveRatio < 1)) {
            this._viewportMoveRatio = 1;
          }
        }
        const position = this._viewportPosition;
        this._viewportPosition = -2;
        const current = this.currentSync;
        if (current >= 0) {
          this._invalid = false;
          if (this.userTracking) {
            this._updateViewport(position + current - this._contentTrackViewport);
            this._contentTrackViewport = current;
          } else {
            this._updateViewport(current);
            if (this.autoplay) {
              this._scheduleAutoplay();
            }
          }
        } else {
          this._invalid = true;
          this._updateViewport(-this.displayMultipleItemsNumber - 1);
        }
      }
    },
    _checkCircularLayout(e) {
      if (!this._invalid) {
        for (let { items } = this, n = items.length, i = e + this.displayMultipleItemsNumber, r = 0; r < n; r++) {
          const item = items[r];
          const { _position } = item;
          const s = Math.floor(e / n) * n + r;
          const l = s + n;
          const c = s - n;
          const u = Math.max(e - (s + 1), s - i, 0);
          const d = Math.max(e - (l + 1), l - i, 0);
          const h = Math.max(e - (c + 1), c - i, 0);
          const p = Math.min(u, d, h);
          const f = [s, l, c][[u, d, h].indexOf(p)];
          if (_position !== f) {
            this._updateItemPos(r, f);
          }
        }
      }
    },
    _updateItemPos(current, position) {
      const x = this.vertical ? '0' : `${100 * position}%`;
      const y = this.vertical ? `${100 * position}%` : '0';
      const transform = `translate(${x}, ${y}) translateZ(0)`;
      const item = this.items[current];
      this._itemReady(item, () => {
        const el = item.componentInstance.$el;
        el.style['-webkit-transform'] = transform;
        el.style.transform = transform;
        el._position = position;
      });
    },
    _updateViewport(index) {
      if (!(Math.floor(2 * this._viewportPosition) === Math.floor(2 * index)
         && Math.ceil(2 * this._viewportPosition) === Math.ceil(2 * index)
      )) {
        if (this.circularEnabled) {
          this._checkCircularLayout(index);
        }
      }

      const x = this.vertical ? '0' : `${100 * -index * this._viewportMoveRatio}%`;
      const y = this.vertical ? `${100 * -index * this._viewportMoveRatio}%` : '0';
      const transform = `translate(${x}, ${y}) translateZ(0)`;
      const { slideFrame } = this.$refs;
      if (slideFrame) {
        slideFrame.style['-webkit-transform'] = transform;
        slideFrame.style.transform = transform;
      }
      this._viewportPosition = index;
      if (!this._transitionStart) {
        if (index % 1 === 0) {
          return;
        }
        this._transitionStart = index;
      }
      index -= Math.floor(this._transitionStart);
      if (index <= -(this.items.length - 1)) {
        index += this.items.length;
      } else if (index >= this.items.length) {
        index -= this.items.length;
      }
      index = this._transitionStart % 1 > 0.5 || this._transitionStart < 0 ? index - 1 : index;
      this.$trigger('transition', {}, {
        dx: this.vertical ? 0 : index * slideFrame.offsetWidth,
        dy: this.vertical ? index * slideFrame.offsetHeight : 0,
      });
    },
    _animateFrameFuncProto() {
      if (!this._animating) {
        this._requestedAnimation = false;
        return;
      }
      const { _animating } = this;
      const { toPos } = _animating;
      const { acc } = _animating;
      const { endTime } = _animating;
      const { source } = _animating;
      const time = endTime - Date.now();
      if (time <= 0) {
        this._updateViewport(toPos);
        this._animating = null;
        this._requestedAnimation = false;
        this._transitionStart = null;
        const item = this.items[this.currentSync];
        if (item) {
          this._itemReady(item, () => {
            const currentItemId = item.componentInstance.itemId || '';
            this.$trigger('animationfinish', {}, {
              current: this.currentSync,
              currentItemId,
              source,
            });
          });
        }
        return;
      }
      const s = acc * time * time / 2;
      const l = toPos + s;
      this._updateViewport(l);
      this._animationFrame = requestAnimationFrame(this._animateFrameFuncProto.bind(this));
    },
    _animateViewport(current, source, n) {
      this._cancelViewportAnimation();
      const duration = this.durationNumber;
      const { length } = this.items;
      let position = this._viewportPosition;
      if (this.circularEnabled) {
        if (n < 0) {
          for (; position < current;) {
            position += length;
          }
          for (; position - length > current;) {
            position -= length;
          }
        } else if (n > 0) {
          for (; position > current;) {
            position -= length;
          }
          for (; position + length < current;) {
            position += length;
          }
          if (position + length - current < current - position) {
            position += length;
          }
        } else {
          for (; position + length < current;) {
            position += length;
          }
          for (; position - length > current;) {
            position -= length;
          }
          if (position + length - current < current - position) {
            position += length;
          }
        }
      } else if (source === 'click') {
        current = current + this.displayMultipleItemsNumber - 1 < length ? current : 0;
      }

      this._animating = {
        toPos: current,
        acc: 2 * (position - current) / (duration * duration),
        endTime: Date.now() + duration,
        source,
      };
      if (!this._requestedAnimation) {
        this._requestedAnimation = true;
        this._animationFrame = requestAnimationFrame(this._animateFrameFuncProto.bind(this));
      }
    },
    _cancelViewportAnimation() {
      this._animating = null;
    },
    /**
     * 结束动画
     */
    _endViewportAnimation() {
      if (this._animating) {
        this._updateViewport(this._animating.toPos);
        this._animating = null;
      }
    },
    _handleTrackStart() {
      this._cancelSchedule();
      this._contentTrackViewport = this._viewportPosition;
      this._contentTrackSpeed = 0;
      this._contentTrackT = Date.now();
      this._cancelViewportAnimation();
    },
    _handleTrackMove(data) {
      const self = this;
      const contentTrackT = this._contentTrackT;
      this._contentTrackT = Date.now();
      const { length } = this.items;
      const other = length - this.displayMultipleItemsNumber;
      function calc(val) {
        return 0.5 - 0.25 / (val + 0.5);
      }

      function move(oldVal, newVal) {
        let val = self._contentTrackViewport + oldVal;
        self._contentTrackSpeed = 0.6 * self._contentTrackSpeed + 0.4 * newVal;
        if (!self.circularEnabled) {
          if (val < 0 || val > other) {
            if (val < 0) {
              val = -calc(-val);
            } else {
              if (val > other) {
                val = other + calc(val - other);
              }
            }
            self._contentTrackSpeed = 0;
          }
        }
        self._updateViewport(val);
      }
      const time = (this._contentTrackT - contentTrackT) || 1;
      if (this.vertical) {
        move(-data.dy / this.$refs.slideFrame.offsetHeight, -data.ddy / time);
      } else {
        move(-data.dx / this.$refs.slideFrame.offsetWidth, -data.ddx / time);
      }
    },
    _handleTrackEnd(isCancel) {
      this.userTracking = false;
      const t = this._contentTrackSpeed / Math.abs(this._contentTrackSpeed);
      let n = 0;
      if (!isCancel && Math.abs(this._contentTrackSpeed) > 0.2) {
        n = 0.5 * t;
      }
      const current = this._normalizeCurrentValue(this._viewportPosition + n);
      if (isCancel) {
        this._updateViewport(this._contentTrackViewport);
      } else {
        this.currentChangeSource = 'touch';
        this.currentSync = current;
        this._animateViewport(current, 'touch', n !== 0 ? n : current === 0 && (this.circularEnabled && this._viewportPosition >= 1) ? 1 : 0);
      }
    },
    _handleContentTrack(e) {
      if (this.disableTouch || !this.items.length) {
        return;
      }
      if (!this._invalid) {
        if (e.detail.state === 'start') {
          this.userTracking = true;
          this._userDirectionChecked = false;
          return this._handleTrackStart();
        }
        // fixed by xxxxxx
        if (e.detail.state === 'end') {
          return this._handleTrackEnd(false);
        }
        if (e.detail.state === 'cancel') {
          return this._handleTrackEnd(true);
        }
        if (this.userTracking) {
          if (!this._userDirectionChecked) {
            this._userDirectionChecked = true;
            const t = Math.abs(e.detail.dx);
            const n = Math.abs(e.detail.dy);
            if (t >= n && this.vertical) {
              this.userTracking = false;
            } else {
              if (t <= n && !this.vertical) {
                this.userTracking = false;
              }
            }
            if (!this.userTracking) {
              if (this.autoplay) {
                this._scheduleAutoplay();
              }
              return;
            }
          }
          this._handleTrackMove(e.detail);
          return false;
        }
      }
    },
    /**
     * navigation
     */
    _onSwiperDotClick(index) {
      this._animateViewport(
        (this.currentSync = index),
        (this.currentChangeSource = 'click'),
        this.circularEnabled ? 1 : 0,
      );
    },
    _navigationClick($event, type, disabled) {
      $event.stopPropagation();

      if (disabled) return;

      const swiperItemLength = this.items.length;
      let _current = this.currentSync;

      switch (type) {
        case 'prev':
          _current -= 1;
          if (_current < 0 && this.circularEnabled) {
            _current = swiperItemLength - 1;
          }
          break;
        case 'next':
          _current += 1;
          if (_current >= swiperItemLength && this.circularEnabled) {
            _current = 0;
          }
          break;
      }

      this._onSwiperDotClick(_current);
    },
    _navigationMouseMove(e) {
      clearTimeout(this.hideNavigationTimer);

      const { clientX, clientY } = e;
      const {
        left,
        right,
        top,
        bottom,
        width,
        height,
      } = this.$refs.slidesWrapper.getBoundingClientRect();

      let hide = false;
      if (this.vertical) {
        hide = !(clientY - top < height / 3 || bottom - clientY < height / 3);
      } else {
        hide = !(clientX - left < width / 3 || right - clientX < width / 3);
      }

      if (hide) {
        this.hideNavigationTimer = setTimeout(() => {
          this.hideNavigation = hide;
        }, 300);
        return;
      }

      this.hideNavigation = hide;
    },
    _navigationMouseOut() {
      this.hideNavigation = true;
    },
    _navigationSwiperAddMouseEvent() {
      if (__PLATFORM__ === 'h5') {
        const rootRef = this.$refs.slidesWrapper;
        if (rootRef) {
          rootRef.removeEventListener('mousemove', this._navigationMouseMove);
          rootRef.removeEventListener('mouseleave', this._navigationMouseOut);

          if (this.isNavigationAuto) {
            rootRef.addEventListener('mousemove', this._navigationMouseMove);
            rootRef.addEventListener('mouseleave', this._navigationMouseOut);
          }
        }
      }
    },
    _navigationHover(event, type) {
      const target = event.currentTarget;
      if (!target) return;
      target.style.backgroundColor =        type === 'over' ? this.navigationActiveColor : '';
    },
    _setNavigationState() {
      const swiperItemLength = this.items.length;
      const notCircular = !this.circularEnabled;

      this.prevDisabled = this.currentSync === 0 && notCircular;
      this.nextDisabled =        (this.currentSync === swiperItemLength - 1 && notCircular)
        || (notCircular
          && this.currentSync + this.displayMultipleItemsNumber >= swiperItemLength);
    },
  },
  render(createElement) {
    const slidesDots = [];
    const swiperItems = [];
    if (this.$slots.default) {
      deepCloneVNodes(this.$slots.default, createElement).forEach((vnode) => {
        // 修改点 v-uni-swiper-item => swiper-item
        if (vnode.componentOptions && vnode.componentOptions.tag === 'swiper-item') {
          swiperItems.push(vnode);
        }
      });
    }
    for (let index = 0, { length } = swiperItems; index < length; index++) {
      const { currentSync } = this;
      slidesDots.push(createElement('div', {
        on: {
          click: () => this._onSwiperDotClick(index),
        },
        class: {
          'uni-swiper-dot': true,
          'uni-swiper-dot-active': (index < currentSync + this.displayMultipleItemsNumber && index >= currentSync) || (index < currentSync + this.displayMultipleItemsNumber - length),
        },
        style: {
          background: index === currentSync ? this.indicatorActiveColor : this.indicatorColor,
        },
      }));
    }
    this.items = swiperItems;
    const slidesWrapperChild = [createElement('div', {
      ref: 'slides',
      style: this.slidesStyle,
      class: 'uni-swiper-slides',
    }, [
      createElement('div', {
        ref: 'slideFrame',
        class: 'uni-swiper-slide-frame',
        style: this.slideFrameStyle,
      }, swiperItems),
    ])];
    if (this.indicatorDots) {
      slidesWrapperChild.push(createElement('div', {
        ref: 'slidesDots',
        class: ['uni-swiper-dots', this.vertical ? 'uni-swiper-dots-vertical' : 'uni-swiper-dots-horizontal'],
      }, slidesDots));
    }

    if (__PLATFORM__ === 'h5') {
      if (this.navigation) {
        const navigationClass = {
          'uni-swiper-navigation-hide': this.hideNavigation,
          'uni-swiper-navigation-vertical': this.vertical,
        };

        const iconElement = createElement(
          'i',
          {
            domProps: {
              innerHTML: '&#xe601;',
            },
            class: 'uni-btn-icon',
            style: { color: this.navigationColor, fontSize: '26px' },
          },
        );

        const navigationEvent = {
          mouseover: event => this._navigationHover(event, 'over'),
          mouseout: event => this._navigationHover(event, 'out'),
        };

        slidesWrapperChild.push(
          createElement(
            'div',
            {
              on: {
                click: e => this._navigationClick(e, 'prev', this.prevDisabled),
                ...navigationEvent,
              },
              class: [
                'uni-swiper-navigation',
                'uni-swiper-navigation-prev',
                {
                  'uni-swiper-navigation-disabled': this.prevDisabled,
                  ...navigationClass,
                },
              ],
            },
            [iconElement],
          ),
          createElement(
            'div',
            {
              on: {
                click: e => this._navigationClick(e, 'next', this.nextDisabled),
                ...navigationEvent,
              },
              class: [
                'uni-swiper-navigation',
                'uni-swiper-navigation-next',
                {
                  'uni-swiper-navigation-disabled': this.nextDisabled,
                  ...navigationClass,
                },
              ],
            },
            [iconElement],
          ),
        );
      }
    }

    return createElement('uni-swiper', {
      on: this.$listeners,
    }, [createElement('div', {
      ref: 'slidesWrapper',
      class: 'uni-swiper-wrapper',
    }, slidesWrapperChild)]);
  },
};
</script>
<style scoped lang="scss" src="./css/index.scss">
</style>
