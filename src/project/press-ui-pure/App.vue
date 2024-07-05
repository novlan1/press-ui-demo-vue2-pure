<template>
  <div
    id="app"
    style="height:100%;"
  >
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  mounted() {

  },
};
</script>
<style lang="scss" src="src/utils/style/demo.scss"></style>
<style>
html {
  --window-top: 44px;
}
</style>
