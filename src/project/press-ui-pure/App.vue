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
import { setLang } from 'src/utils/i18n/i18n';

export default {
  data() {
    return {};
  },
  mounted() {
    setLang();
  },
};
</script>
<style lang="scss" src="src/utils/style/demo.scss"></style>
<style>
html {
  --window-top: 44px;
}
</style>
