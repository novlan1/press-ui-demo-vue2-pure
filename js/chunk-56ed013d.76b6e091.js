(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56ed013d"],{"0ed8":function(t,e,i){var n=i("37da");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("c69b").default;a("5bfb27ea",n,!0,{sourceMap:!1,shadowMode:!1})},2452:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={itemId:{type:String,default:""}}},3166:function(t,e,i){"use strict";i("0ed8")},"37da":function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,"uni-swiper-item[data-v-2e28c144]{display:block;overflow:hidden;will-change:transform;position:absolute;width:100%;height:100%;cursor:-webkit-grab;cursor:grab}uni-swiper-item[hidden][data-v-2e28c144]{display:none}",""]),t.exports=e},"3e99":function(t,e,i){"use strict";i.d(e,"a",(function(){return nt}));var n=i("69b0"),a=i("9bfa"),r=(i("2aaa"),i("cdf1"),i("948b"),i("414c"),i("e8e7"),i("745e"),i("e6c9"),i("79cc"),function(t,e,i,n){t.addEventListener(e,(function(t){"function"===typeof i&&!1===i(t)&&(t.preventDefault(),t.stopPropagation())}),{capture:n,passive:!1})}),o={beforeDestroy:function(){document.removeEventListener("mousemove",this.__mouseMoveEventListener),document.removeEventListener("mouseup",this.__mouseUpEventListener)},methods:{touchTrack:function(t,e,i){var n,a,o,s=this,c=this,u=0,l=0,h=0,p=0,d=function(t,i,n,a){if(!1===c[e]({target:t.target,currentTarget:t.currentTarget,preventDefault:t.preventDefault.bind(t),stopPropagation:t.stopPropagation.bind(t),touches:t.touches,changedTouches:t.changedTouches,detail:{state:i,x:n,y:a,dx:n-u,dy:a-l,ddx:n-h,ddy:a-p,timeStamp:t.timeStamp}}))return!1},f=null;r(t,"touchstart",(function(t){if(a=!0,1===t.touches.length&&!f)return f=t,h=t.touches[0].pageX,u=h,p=t.touches[0].pageY,l=p,d(t,"start",u,l)})),r(t,"mousedown",(function(t){if(o=!0,!a&&!f)return f=t,h=t.pageX,u=h,p=t.pageY,l=p,d(t,"start",u,l)})),r(t,"touchmove",(function(t){if(1===t.touches.length&&f){var e=d(t,"move",t.touches[0].pageX,t.touches[0].pageY);return h=t.touches[0].pageX,p=t.touches[0].pageY,e}})),this.__clickEventListener=function(t){t.preventDefault(),t.stopPropagation()};var v=this.__clickEventListener;this.__mouseMoveEventListener=function(t){if(!a&&o&&f){!n&&(Math.abs(h-u)>2||Math.abs(p-l)>2)&&(document.addEventListener("click",v,!0),n=!0);var e=d(t,"move",t.pageX,t.pageY);return h=t.pageX,p=t.pageY,e}};var m=this.__mouseMoveEventListener;document.addEventListener("mousemove",m),r(t,"touchend",(function(t){if(0===t.touches.length&&f)return a=!1,f=null,d(t,"end",t.changedTouches[0].pageX,t.changedTouches[0].pageY)})),this.__mouseUpEventListener=function(t){if(o=!1,!a&&f)return n&&setTimeout((function(){document.removeEventListener("click",s.__clickEventListener,!0),n=!1}),0),f=null,d(t,"end",t.pageX,t.pageY)};var g=this.__mouseUpEventListener;document.addEventListener("mouseup",g),r(t,"touchcancel",(function(t){if(f){a=!1;var e=f;return f=null,d(t,i?"cancel":"end",e.touches[0].pageX,e.touches[0].pageY)}}))}}},s=(i("7144"),i("1699"),i("1b08"),{"css.var":"--a:0","css.env":"top:env(a)","css.constant":"top:constant(a)"});function c(t){return window.CSS&&CSS.supports&&(CSS.supports(t)||CSS.supports.apply(CSS,t.split(":")))}function u(t){return!!s[t]&&c(s[t])}i("ca48"),i("f1f0");var l,h,p=i("8aed"),d=["top","left","right","bottom"],f={},v=[];function m(){return h="CSS"in window&&"function"===typeof CSS.supports?CSS.supports("top: env(safe-area-inset-top)")?"env":CSS.supports("top: constant(safe-area-inset-top)")?"constant":"":"",h}function g(t,e){var i=t.style;Object.keys(e).forEach((function(t){var n=e[t];i[t]=n}))}var _=[];function w(t){t?_.push(t):_.forEach((function(t){t()}))}function b(){if(h="string"===typeof h?h:m(),h){var t=document.createElement("div");g(t,{position:"absolute",left:"0",top:"0",width:"0",height:"0",zIndex:"-1",overflow:"hidden",visibility:"hidden"}),d.forEach((function(i){e(t,i)})),document.body.appendChild(t),w(),l=!0}else d.forEach((function(t){f[t]=0}));function e(t,e){var i=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),o=100,s=1e4,c={position:"absolute",width:"".concat(o,"px"),height:"200px",boxSizing:"border-box",overflow:"hidden",paddingBottom:"".concat(h,"(safe-area-inset-").concat(e,")")};g(i,c),g(n,c),g(a,{transition:"0s",animation:"none",width:"400px",height:"400px"}),g(r,{transition:"0s",animation:"none",width:"250%",height:"250%"}),i.appendChild(a),n.appendChild(r),t.appendChild(i),t.appendChild(n),w((function(){n.scrollTop=s,i.scrollTop=s;var t=i.scrollTop,a=n.scrollTop;function r(){this.scrollTop!==(this===i?t:a)&&(n.scrollTop=s,i.scrollTop=s,t=i.scrollTop,a=n.scrollTop,k(e))}i.addEventListener("scroll",r,p["a"]),n.addEventListener("scroll",r,p["a"])}));var u=getComputedStyle(i);Object.defineProperty(f,e,{configurable:!0,get:function(){return parseFloat(u.paddingBottom)}})}}function y(t){return l||b(),f[t]}var S=[];function k(t){S.length||setTimeout((function(){var t={};S.forEach((function(e){t[e]=f[e]})),S.length=0,v.forEach((function(e){e(t)}))}),0),S.push(t)}function x(t){m()&&(l||b(),"function"===typeof t&&v.push(t))}function M(t){var e=v.indexOf(t);e>=0&&v.splice(e,1)}var T={get support(){return 0!=("string"===typeof h?h:m()).length},get top(){return y("top")},get left(){return y("left")},get right(){return y("right")},get bottom(){return y("bottom")},onChange:x,offChange:M},I=44;function C(){if(u("css.var")){var t=document.documentElement.style,e=parseInt((t.getPropertyValue("--window-top").match(/\d+/)||["0"])[0],10),i=parseInt((t.getPropertyValue("--window-bottom").match(/\d+/)||["0"])[0],10),n=parseInt((t.getPropertyValue("--window-left").match(/\d+/)||["0"])[0],10),a=parseInt((t.getPropertyValue("--window-right").match(/\d+/)||["0"])[0],10),r=parseInt((t.getPropertyValue("--top-window-height").match(/\d+/)||["0"])[0],10);return{top:(e?e+T.top:0)+(r||0),bottom:i?i+T.bottom:0,left:n?n+T.left:0,right:a?a+T.right:0}}var o=0,s=0,c=getCurrentPages();if(c.length){var l=c[c.length-1].$parent.$parent,h=l.navigationBar.type;o="default"===h||"float"===h?I:0}return{top:o,bottom:s,left:0,right:0}}function E(t){return t.mp=Object.assign({"@warning":"mp is deprecated"},t),t._processed=!0,t}i("fa2d");var N=/-(\w)/g;function $(t){return t.replace(N,(function(t,e){return e.toUpperCase()}))}function L(t){var e={},i=t.__vue__;function n(t,i){var n=t.$attrs;for(var a in n)if(a.startsWith("data-")){var r=$(a.substr(5).toLowerCase()),o=n[a];e[r]=i?o:e[r]||o}}if(i){var a=i;while(a&&a.$el===t)n(a),a=a.$children[0];var r=i.$parent;while(r&&r.$el===t)n(r,!0),r=r.$parent}else e=Object.assign({},t.dataset,t.__uniDataset);return P(e)}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=JSON.parse(JSON.stringify(t)),i=Object.keys(e),n=i.length;if(n)for(var a=0;a<n;a++){var r=i[a],o=r.length;"v"!==r.substr(0,1)||9!==o&&10!==o||delete e[r]}return e}function A(t,e){var i={id:t.id,offsetLeft:t.offsetLeft,offsetTop:t.offsetTop,dataset:L(t)};return e&&Object.assign(i,e),i}function V(t){if(t){for(var e=[],i=C(),n=i.top,a=0;a<t.length;a++){var r=t[a];e.push({identifier:r.identifier,pageX:r.pageX,pageY:r.pageY-n,clientX:r.clientX,clientY:r.clientY-n,force:r.force||0})}return e}return[]}function D(t){return t.startsWith("mouse")||["contextmenu"].includes(t)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(e._processed)return e.type=i.type||t,e;if("click"===t){var r=C(),o=r.top;i={x:e.x,y:e.y-o},e.changedTouches=[{force:1,identifier:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY}],e.touches=e.changedTouches}var s=E({type:i.type||t,timeStamp:e.timeStamp||0,detail:i,target:A(n,i),currentTarget:A(a,!1,!0),touches:e instanceof Event||e instanceof CustomEvent?V(e.touches):e.touches,changedTouches:e instanceof Event||e instanceof CustomEvent?V(e.changedTouches):e.changedTouches,preventDefault:function(){},stopPropagation:function(){}});if(D(t)){var c=C(),u=c.top;s.pageX=e.pageX,s.pageY=e.pageY-u,s.clientX=e.clientX,s.clientY=e.clientY-u}return s}var Y,X,F={methods:{$trigger:function(t,e,i){this.$emit(t,O.call(this,t,e,i,this.$el,this.$el))}}},j=i("94a5"),R="h5",B={name:"Swiper",mixins:[o,F],props:Object(n["a"])({},j["a"]),emits:["update:current","update:currentItemId","change","animationfinish","transition"],data:function(){return{currentSync:Math.round(this.current)||0,currentItemIdSync:this.currentItemId||"",userTracking:!1,currentChangeSource:"",items:[],isNavigationAuto:!1,hideNavigation:!1,prevDisabled:!1,nextDisabled:!1}},computed:{intervalNumber:function(){var t=Number(this.interval);return isNaN(t)?5e3:t},durationNumber:function(){var t=Number(this.duration);return isNaN(t)?500:t},displayMultipleItemsNumber:function(){var t=Math.round(this.displayMultipleItems);return isNaN(t)?1:t},slidesStyle:function(){var t={};return(this.nextMargin||this.previousMargin)&&(t=this.vertical?{left:0,right:0,top:this._upx2px(this.previousMargin),bottom:this._upx2px(this.nextMargin)}:{top:0,bottom:0,left:this._upx2px(this.previousMargin),right:this._upx2px(this.nextMargin)}),t},slideFrameStyle:function(){var t="".concat(Math.abs(100/this.displayMultipleItemsNumber),"%");return{width:this.vertical?"100%":t,height:this.vertical?t:"100%"}},swiperEnabled:function(){return this.items.length>this.displayMultipleItemsNumber},circularEnabled:function(){return this.circular&&this.swiperEnabled}},watch:{vertical:function(){this._resetLayout()},circular:function(){this._resetLayout()},intervalNumber:function(){this._timer&&(this._cancelSchedule(),this._scheduleAutoplay())},current:function(){this._currentCheck()},currentSync:function(t,e){this._currentChanged(t,e),this.$emit("update:current",t),this._setNavigationState()},currentItemId:function(){this._currentCheck()},currentItemIdSync:function(t){this.$emit("update:currentItemId",t)},displayMultipleItemsNumber:function(){this._resetLayout()},navigation:{immediate:!0,handler:function(t){this.isNavigationAuto="auto"===t,this.hideNavigation=!0!==t||this.isNavigationAuto,this._navigationSwiperAddMouseEvent()}},items:function(){this._setNavigationState()},swiperEnabled:function(t){t||(this.prevDisabled=!0,this.nextDisabled=!0,this.isNavigationAuto&&(this.hideNavigation=!0))}},created:function(){this._invalid=!0,this._viewportPosition=0,this._viewportMoveRatio=1,this._animating=null,this._requestedAnimation=!1,this._userDirectionChecked=!1,this._contentTrackViewport=0,this._contentTrackSpeed=0,this._contentTrackT=0},mounted:function(){var t=this;this._currentCheck(),this.touchTrack(this.$refs.slidesWrapper,"_handleContentTrack",!0),this._resetLayout(),this.$watch((function(){return t.autoplay&&!t.userTracking}),this._inintAutoplay),this._inintAutoplay(this.autoplay&&!this.userTracking),this.$watch("items.length",this._resetLayout),this._navigationSwiperAddMouseEvent()},beforeDestroy:function(){this._cancelSchedule(),cancelAnimationFrame(this._animationFrame)},methods:{_inintAutoplay:function(t){t?this._scheduleAutoplay():this._cancelSchedule()},_currentCheck:function(){var t=-1;if(this.currentItemId)for(var e=0,i=this.items;e<i.length;e++){var n=i[e].componentInstance;if(n&&n.itemId===this.currentItemId){t=e;break}}t<0&&(t=Math.round(this.current)||0),t=t<0?0:t,this.currentSync!==t&&(this.currentChangeSource="",this.currentSync=t)},_itemReady:function(t,e){t.componentInstance&&t.componentInstance._isMounted?e():(t._callbacks=t._callbacks||[],t._callbacks.push(e))},_currentChanged:function(t,e){var i=this,n=this.currentChangeSource;if(this.currentChangeSource="",!n){var a=this.items.length;this._animateViewport(t,"",this.circularEnabled&&e+(a-t)%a>a/2?1:0)}var r=this.items[t];r&&this._itemReady(r,(function(){i.currentItemIdSync=r.componentInstance.itemId||"";var t=i.currentItemIdSync;i.$trigger("change",{},{current:i.currentSync,currentItemId:t,source:n})}))},_scheduleAutoplay:function(){var t=this;function e(){t._timer=null,t.currentChangeSource="autoplay",t.circularEnabled?t.currentSync=t._normalizeCurrentValue(t.currentSync+1):t.currentSync=t.currentSync+t.displayMultipleItemsNumber<t.items.length?t.currentSync+1:0,t._animateViewport(t.currentSync,"autoplay",t.circularEnabled?1:0),t._timer=setTimeout(e,t.intervalNumber)}this._cancelSchedule(),!this._isMounted||this._invalid||this.items.length<=this.displayMultipleItemsNumber||(this._timer=setTimeout(e,this.intervalNumber))},_cancelSchedule:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_normalizeCurrentValue:function(t){var e=this.items.length;if(!e)return-1;var i=(Math.round(t)%e+e)%e;if(this.circularEnabled){if(e<=this.displayMultipleItemsNumber)return 0}else if(i>e-this.displayMultipleItemsNumber)return e-this.displayMultipleItemsNumber;return i},_upx2px:function(t){return/\d+[ur]px$/i.test(t)&&t.replace(/\d+[ur]px$/i,(function(t){return"".concat(uni.upx2px(parseFloat(t)),"px")})),t||""},_resetLayout:function(){if(this._isMounted){this._cancelSchedule(),this._endViewportAnimation();for(var t=this.items,e=0;e<t.length;e++)this._updateItemPos(e,e);if(this._viewportMoveRatio=1,1===this.displayMultipleItemsNumber&&t.length){var i=t[0].componentInstance.$el.getBoundingClientRect(),n=this.$refs.slideFrame.getBoundingClientRect();this._viewportMoveRatio=i.width/n.width,this._viewportMoveRatio>0&&this._viewportMoveRatio<1||(this._viewportMoveRatio=1)}var a=this._viewportPosition;this._viewportPosition=-2;var r=this.currentSync;r>=0?(this._invalid=!1,this.userTracking?(this._updateViewport(a+r-this._contentTrackViewport),this._contentTrackViewport=r):(this._updateViewport(r),this.autoplay&&this._scheduleAutoplay())):(this._invalid=!0,this._updateViewport(-this.displayMultipleItemsNumber-1))}},_checkCircularLayout:function(t){if(!this._invalid)for(var e=this.items,i=e.length,n=t+this.displayMultipleItemsNumber,a=0;a<i;a++){var r=e[a],o=r._position,s=Math.floor(t/i)*i+a,c=s+i,u=s-i,l=Math.max(t-(s+1),s-n,0),h=Math.max(t-(c+1),c-n,0),p=Math.max(t-(u+1),u-n,0),d=Math.min(l,h,p),f=[s,c,u][[l,h,p].indexOf(d)];o!==f&&this._updateItemPos(a,f)}},_updateItemPos:function(t,e){var i=this.vertical?"0":"".concat(100*e,"%"),n=this.vertical?"".concat(100*e,"%"):"0",a="translate(".concat(i,", ").concat(n,") translateZ(0)"),r=this.items[t];this._itemReady(r,(function(){var t=r.componentInstance.$el;t.style["-webkit-transform"]=a,t.style.transform=a,t._position=e}))},_updateViewport:function(t){Math.floor(2*this._viewportPosition)===Math.floor(2*t)&&Math.ceil(2*this._viewportPosition)===Math.ceil(2*t)||this.circularEnabled&&this._checkCircularLayout(t);var e=this.vertical?"0":"".concat(100*-t*this._viewportMoveRatio,"%"),i=this.vertical?"".concat(100*-t*this._viewportMoveRatio,"%"):"0",n="translate(".concat(e,", ").concat(i,") translateZ(0)"),a=this.$refs.slideFrame;if(a&&(a.style["-webkit-transform"]=n,a.style.transform=n),this._viewportPosition=t,!this._transitionStart){if(t%1===0)return;this._transitionStart=t}t-=Math.floor(this._transitionStart),t<=-(this.items.length-1)?t+=this.items.length:t>=this.items.length&&(t-=this.items.length),t=this._transitionStart%1>.5||this._transitionStart<0?t-1:t,this.$trigger("transition",{},{dx:this.vertical?0:t*a.offsetWidth,dy:this.vertical?t*a.offsetHeight:0})},_animateFrameFuncProto:function(){var t=this;if(this._animating){var e=this._animating,i=e.toPos,n=e.acc,a=e.endTime,r=e.source,o=a-Date.now();if(o<=0){this._updateViewport(i),this._animating=null,this._requestedAnimation=!1,this._transitionStart=null;var s=this.items[this.currentSync];s&&this._itemReady(s,(function(){var e=s.componentInstance.itemId||"";t.$trigger("animationfinish",{},{current:t.currentSync,currentItemId:e,source:r})}))}else{var c=n*o*o/2,u=i+c;this._updateViewport(u),this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this))}}else this._requestedAnimation=!1},_animateViewport:function(t,e,i){this._cancelViewportAnimation();var n=this.durationNumber,a=this.items.length,r=this._viewportPosition;if(this.circularEnabled)if(i<0){for(;r<t;)r+=a;for(;r-a>t;)r-=a}else if(i>0){for(;r>t;)r-=a;for(;r+a<t;)r+=a;r+a-t<t-r&&(r+=a)}else{for(;r+a<t;)r+=a;for(;r-a>t;)r-=a;r+a-t<t-r&&(r+=a)}else"click"===e&&(t=t+this.displayMultipleItemsNumber-1<a?t:0);this._animating={toPos:t,acc:2*(r-t)/(n*n),endTime:Date.now()+n,source:e},this._requestedAnimation||(this._requestedAnimation=!0,this._animationFrame=requestAnimationFrame(this._animateFrameFuncProto.bind(this)))},_cancelViewportAnimation:function(){this._animating=null},_endViewportAnimation:function(){this._animating&&(this._updateViewport(this._animating.toPos),this._animating=null)},_handleTrackStart:function(){this._cancelSchedule(),this._contentTrackViewport=this._viewportPosition,this._contentTrackSpeed=0,this._contentTrackT=Date.now(),this._cancelViewportAnimation()},_handleTrackMove:function(t){var e=this,i=this._contentTrackT;this._contentTrackT=Date.now();var n=this.items.length,a=n-this.displayMultipleItemsNumber;function r(t){return.5-.25/(t+.5)}function o(t,i){var n=e._contentTrackViewport+t;e._contentTrackSpeed=.6*e._contentTrackSpeed+.4*i,e.circularEnabled||(n<0||n>a)&&(n<0?n=-r(-n):n>a&&(n=a+r(n-a)),e._contentTrackSpeed=0),e._updateViewport(n)}var s=this._contentTrackT-i||1;this.vertical?o(-t.dy/this.$refs.slideFrame.offsetHeight,-t.ddy/s):o(-t.dx/this.$refs.slideFrame.offsetWidth,-t.ddx/s)},_handleTrackEnd:function(t){this.userTracking=!1;var e=this._contentTrackSpeed/Math.abs(this._contentTrackSpeed),i=0;!t&&Math.abs(this._contentTrackSpeed)>.2&&(i=.5*e);var n=this._normalizeCurrentValue(this._viewportPosition+i);t?this._updateViewport(this._contentTrackViewport):(this.currentChangeSource="touch",this.currentSync=n,this._animateViewport(n,"touch",0!==i?i:0===n&&this.circularEnabled&&this._viewportPosition>=1?1:0))},_handleContentTrack:function(t){if(!this.disableTouch&&this.items.length&&!this._invalid){if("start"===t.detail.state)return this.userTracking=!0,this._userDirectionChecked=!1,this._handleTrackStart();if("end"===t.detail.state)return this._handleTrackEnd(!1);if("cancel"===t.detail.state)return this._handleTrackEnd(!0);if(this.userTracking){if(!this._userDirectionChecked){this._userDirectionChecked=!0;var e=Math.abs(t.detail.dx),i=Math.abs(t.detail.dy);if((e>=i&&this.vertical||e<=i&&!this.vertical)&&(this.userTracking=!1),!this.userTracking)return void(this.autoplay&&this._scheduleAutoplay())}return this._handleTrackMove(t.detail),!1}}},_onSwiperDotClick:function(t){this._animateViewport(this.currentSync=t,this.currentChangeSource="click",this.circularEnabled?1:0)},_navigationClick:function(t,e,i){if(t.stopPropagation(),!i){var n=this.items.length,a=this.currentSync;switch(e){case"prev":a-=1,a<0&&this.circularEnabled&&(a=n-1);break;case"next":a+=1,a>=n&&this.circularEnabled&&(a=0);break}this._onSwiperDotClick(a)}},_navigationMouseMove:function(t){var e=this;clearTimeout(this.hideNavigationTimer);var i=t.clientX,n=t.clientY,a=this.$refs.slidesWrapper.getBoundingClientRect(),r=a.left,o=a.right,s=a.top,c=a.bottom,u=a.width,l=a.height,h=!1;h=this.vertical?!(n-s<l/3||c-n<l/3):!(i-r<u/3||o-i<u/3),h?this.hideNavigationTimer=setTimeout((function(){e.hideNavigation=h}),300):this.hideNavigation=h},_navigationMouseOut:function(){this.hideNavigation=!0},_navigationSwiperAddMouseEvent:function(){if("h5"===R){var t=this.$refs.slidesWrapper;t&&(t.removeEventListener("mousemove",this._navigationMouseMove),t.removeEventListener("mouseleave",this._navigationMouseOut),this.isNavigationAuto&&(t.addEventListener("mousemove",this._navigationMouseMove),t.addEventListener("mouseleave",this._navigationMouseOut)))}},_navigationHover:function(t,e){var i=t.currentTarget;i&&(i.style.backgroundColor="over"===e?this.navigationActiveColor:"")},_setNavigationState:function(){var t=this.items.length,e=!this.circularEnabled;this.prevDisabled=0===this.currentSync&&e,this.nextDisabled=this.currentSync===t-1&&e||e&&this.currentSync+this.displayMultipleItemsNumber>=t}},render:function(t){var e=this,i=[],a=[];this.$slots.default&&Object(j["b"])(this.$slots.default,t).forEach((function(t){t.componentOptions&&"swiper-item"===t.componentOptions.tag&&a.push(t)}));for(var r=function(n){var a=e.currentSync;i.push(t("div",{on:{click:function(){return e._onSwiperDotClick(n)}},class:{"uni-swiper-dot":!0,"uni-swiper-dot-active":n<a+e.displayMultipleItemsNumber&&n>=a||n<a+e.displayMultipleItemsNumber-s},style:{background:n===a?e.indicatorActiveColor:e.indicatorColor}}))},o=0,s=a.length;o<s;o++)r(o);this.items=a;var c=[t("div",{ref:"slides",style:this.slidesStyle,class:"uni-swiper-slides"},[t("div",{ref:"slideFrame",class:"uni-swiper-slide-frame",style:this.slideFrameStyle},a)])];if(this.indicatorDots&&c.push(t("div",{ref:"slidesDots",class:["uni-swiper-dots",this.vertical?"uni-swiper-dots-vertical":"uni-swiper-dots-horizontal"]},i)),"h5"===R&&this.navigation){var u={"uni-swiper-navigation-hide":this.hideNavigation,"uni-swiper-navigation-vertical":this.vertical},l=t("i",{domProps:{innerHTML:"&#xe601;"},class:"uni-btn-icon",style:{color:this.navigationColor,fontSize:"26px"}}),h={mouseover:function(t){return e._navigationHover(t,"over")},mouseout:function(t){return e._navigationHover(t,"out")}};c.push(t("div",{on:Object(n["a"])({click:function(t){return e._navigationClick(t,"prev",e.prevDisabled)}},h),class:["uni-swiper-navigation","uni-swiper-navigation-prev",Object(n["a"])({"uni-swiper-navigation-disabled":this.prevDisabled},u)]},[l]),t("div",{on:Object(n["a"])({click:function(t){return e._navigationClick(t,"next",e.nextDisabled)}},h),class:["uni-swiper-navigation","uni-swiper-navigation-next",Object(n["a"])({"uni-swiper-navigation-disabled":this.nextDisabled},u)]},[l]))}return t("uni-swiper",{on:this.$listeners},[t("div",{ref:"slidesWrapper",class:"uni-swiper-wrapper"},c)])}},z=B,W=(i("e619"),i("2777")),q=Object(W["a"])(z,Y,X,!1,null,"64d6a1f2",null),H=q.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-swiper-item",t._g({},t.$listeners),[t._t("default")],2)},U=[],Z=i("2452"),G={name:"SwiperItem",props:Object(n["a"])({},Z["a"]),mounted:function(){var t=this.$el;t.style.position="absolute",t.style.width="100%",t.style.height="100%";var e=this.$vnode._callbacks;e&&e.forEach((function(t){t()}))}},K=G,Q=(i("3166"),Object(W["a"])(K,J,U,!1,null,"2e28c144",null)),tt=Q.exports,et=i("b300"),it={};Object(a["b"])()&&(it={Swiper:H,SwiperItem:tt},Object(et["e"])(["uni-swiper","uni-swiper-item"]));var nt={components:Object(n["a"])({},it)}},"8aed":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var n=!1;try{var a={};Object.defineProperty(a,"passive",{get:function(){return n=!0,!0}}),window.addEventListener("test-passive",(function(){}),a)}catch(s){}var r=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!n&&{passive:t}},o=r()},"94a5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));i("b4ca"),i("948b");function n(t,e){function i(t){var n,a=null===(n=t.children)||void 0===n?void 0:n.map(i),r=e(t.tag,t.data,a);return r.text=t.text,r.isComment=t.isComment,r.componentOptions=t.componentOptions,r.elm=t.elm,r.context=t.context,r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r}return"function"===typeof t.map?t.map(i):t}var a={indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1},navigation:{type:[Boolean,String],default:!1},navigationColor:{type:String,default:"#fff"},navigationActiveColor:{type:String,default:"rgba(53, 53, 53, 0.6)"}}},a1f3:function(t,e,i){var n=i("c032");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("c69b").default;a("3c0a687f",n,!0,{sourceMap:!1,shadowMode:!1})},c032:function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,"uni-swiper[data-v-64d6a1f2]{display:block;height:150px}uni-swiper[hidden][data-v-64d6a1f2]{display:none}uni-swiper .uni-swiper-wrapper[data-v-64d6a1f2]{overflow:hidden;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}uni-swiper .uni-swiper-slides[data-v-64d6a1f2]{position:absolute;left:0;top:0;right:0;bottom:0}uni-swiper .uni-swiper-slide-frame[data-v-64d6a1f2]{position:absolute;left:0;top:0;width:100%;height:100%;will-change:transform}uni-swiper .uni-swiper-dots[data-v-64d6a1f2]{position:absolute;font-size:0}uni-swiper .uni-swiper-dots-horizontal[data-v-64d6a1f2]{left:50%;bottom:10px;text-align:center;white-space:nowrap;-webkit-transform:translate(-50%);transform:translate(-50%)}uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot[data-v-64d6a1f2]{margin-right:8px}uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot[data-v-64d6a1f2]:last-child{margin-right:0}uni-swiper .uni-swiper-dots-vertical[data-v-64d6a1f2]{right:10px;top:50%;text-align:right;-webkit-transform:translateY(-50%);transform:translateY(-50%)}uni-swiper .uni-swiper-dots-vertical .uni-swiper-dot[data-v-64d6a1f2]{display:block;margin-bottom:9px}uni-swiper .uni-swiper-dots-vertical .uni-swiper-dot[data-v-64d6a1f2]:last-child{margin-bottom:0}uni-swiper .uni-swiper-dot[data-v-64d6a1f2]{display:inline-block;width:8px;height:8px;cursor:pointer;-webkit-transition-property:background-color;transition-property:background-color;-webkit-transition-timing-function:ease;transition-timing-function:ease;background:rgba(0,0,0,.3);border-radius:50%}uni-swiper .uni-swiper-dot-active[data-v-64d6a1f2]{background-color:#000}uni-swiper .uni-swiper-navigation[data-v-64d6a1f2]{width:26px;height:26px;cursor:pointer;position:absolute;top:50%;margin-top:-13px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .2s;transition:all .2s;border-radius:50%;opacity:1}uni-swiper .uni-swiper-navigation-disabled[data-v-64d6a1f2]{opacity:.35;cursor:not-allowed}uni-swiper .uni-swiper-navigation-hide[data-v-64d6a1f2]{opacity:0;cursor:auto;pointer-events:none}uni-swiper .uni-swiper-navigation-prev[data-v-64d6a1f2]{left:10px}uni-swiper .uni-swiper-navigation-prev i[data-v-64d6a1f2]{margin-left:-1px;left:10px}uni-swiper .uni-swiper-navigation-prev.uni-swiper-navigation-vertical[data-v-64d6a1f2]{top:18px;left:50%;margin-left:-13px}uni-swiper .uni-swiper-navigation-prev.uni-swiper-navigation-vertical i[data-v-64d6a1f2]{-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-left:auto;margin-top:-2px}uni-swiper .uni-swiper-navigation-next[data-v-64d6a1f2]{right:10px}uni-swiper .uni-swiper-navigation-next i[data-v-64d6a1f2]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}uni-swiper .uni-swiper-navigation-next.uni-swiper-navigation-vertical[data-v-64d6a1f2]{top:auto;bottom:5px;left:50%;margin-left:-13px}uni-swiper .uni-swiper-navigation-next.uni-swiper-navigation-vertical i[data-v-64d6a1f2]{margin-top:2px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}",""]),t.exports=e},e619:function(t,e,i){"use strict";i("a1f3")}}]);