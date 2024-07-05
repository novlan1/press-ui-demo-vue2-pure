<template>
  <div class="page-wrap">
    <PressHeader />

    <div class="uni-page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import PressHeader from './header.vue';

export default {
  name: 'PressWrap',
  components: {
    PressHeader,
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.page-wrap {
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.uni-page-wrapper {
  flex: 1;
  height: calc(100% - 44px);
  height: calc(100% - 44px - constant(safe-area-inset-top));
  height: calc(100% - 44px - env(safe-area-inset-top));
  overflow: auto;
}
</style>
