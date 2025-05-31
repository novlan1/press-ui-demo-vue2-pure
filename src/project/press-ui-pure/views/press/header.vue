<template>
  <div
    v-if="!hideNavigator"
    class="uni-page-head-wrap"
  >
    <div
      class="uni-page-head"
      style="background-color: rgb(247, 248, 250); color: rgb(0, 0, 0);"
    >
      <div
        class="uni-page-head-hd"
        @click.stop="onBack"
      >
        <div class="uni-page-head-btn">
          <PressIconPlus
            v-if="showBack"
            name="arrow-left"
            style="color: rgb(0, 0, 0); font-size: 22px;"
          />
        </div><div class="uni-page-head-ft" />
      </div><div class="uni-page-head-bd">
        <div
          class="uni-page-head__title"
          style="font-size: 16px; opacity: 1;"
        >
          <!----> {{ title }}
        </div>
      </div><!---->
      <div class="uni-page-head-ft" />
    </div>

    <div class="uni-placeholder" />
  </div>
</template>
<script>
import PressIconPlus from 'press-ui/press-icon-plus/press-icon-plus.vue';

export default {
  components: {
    PressIconPlus,
  },
  props: {
  },
  data() {
    return {

    };
  },
  computed: {
    showBack() {
      const res = this.$route.meta.showBack;
      if (res === undefined) return true;
      return res;
    },
    title() {
      return this.$route.meta.title;
    },
    hideNavigator() {
      return this.$route.meta.hideNavigator || false;
    },
  },
  mounted() {
    console.log('[route]', this.$route);
  },
  methods: {
    onBack() {
      if (!this.showBack) return;
      this.$router.back();
    },
  },
};
</script>
<style scoped lang="scss">
.uni-page-head {
  width: 100%;
  position: fixed;
  left: var(--window-left);
  right: var(--window-right);
  height: 44px;
  height: calc(44px + constant(safe-area-inset-top));
  height: calc(44px + env(safe-area-inset-top));
  padding: 7px 3px;
  padding-top: calc(7px + constant(safe-area-inset-top));
  padding-top: calc(7px + env(safe-area-inset-top));
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 998;
  color: #fff;
  background-color: #000;
  -webkit-transition-property: all;
  transition-property: all;

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .uni-page-head-hd {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 16px;
    margin-left: 4px;
  }

  .uni-head-hd {
    position: absolute;
    left: 70px;
    right: 70px;
    min-width: 0;
    display: flex;
    justify-content: center;
  }

  .uni-head-ft {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    font-size: 13px;
  }
}

.uni-placeholder {
  width: 100%;
  height: 44px;
  height: calc(44px + constant(safe-area-inset-top));
  height: calc(44px + env(safe-area-inset-top));
}
</style>
