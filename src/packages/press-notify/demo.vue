<template>
  <div class="demo-wrap">
    <!-- #ifndef H5 -->
    <PressNotify
      id="press-notify"
    />
    <!-- #endif -->


    <demo-block :title="t('basicUsage')">
      <PressCell
        :title="t('basicUsage')"
        is-link
        @click="showNotify(t('content'))"
      />
    </demo-block>

    <demo-block :title="t('notifyType')">
      <PressCell
        :title="t('primary')"
        is-link
        @click="showNotify({ type: 'primary', message: t('content') })"
      />
      <PressCell
        :title="t('success')"
        is-link
        @click="showNotify({ type: 'success', message: t('content') })"
      />
      <PressCell
        :title="t('danger')"
        is-link
        @click="showNotify({ type: 'danger', message:t('content') })"
      />
      <PressCell
        :title="t('warning')"
        is-link
        @click="showNotify({ type: 'warning', message: t('content')})"
      />
    </demo-block>

    <demo-block :title="t('customNotify')">
      <PressCell
        :title="t('customColor')"
        is-link
        @click="showNotify({
          message: t('customColor'),
          color: '#ad0000',
          background: '#ffe1e1',
        })"
      />

      <PressCell
        :title="t('customDuration')"
        is-link
        @click="showNotify({
          message: t('customDuration'),
          duration: 1000,
        })"
      />
    </demo-block>
  </div>
</template>
<script>
import PressCell from 'press-ui/press-cell/press-cell.vue';
import { showNotify } from 'press-ui/press-notify/';
import PressNotify from 'press-ui/press-notify/press-notify.vue';


export default {
  i18n: {
    'zh-CN': {
      primary: '主要通知',
      success: '成功通知',
      danger: '危险通知',
      warning: '警告通知',
      content: '通知内容',
      notifyType: '通知类型',
      customColor: '自定义颜色',
      customNotify: '自定义配置',
      componentCall: '组件调用',
      customDuration: '自定义时长',
    },
    'en-US': {
      primary: 'Primary',
      success: 'Success',
      danger: 'Danger',
      warning: 'Warning',
      content: 'Notify Message',
      notifyType: 'Notify Type',
      customColor: 'Custom Color',
      customNotify: 'Custom Notify',
      componentCall: 'Component Call',
      customDuration: 'Custom Duration',
    },
  },

  components: {
    PressNotify,
    PressCell,
  },
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    showNotify(options) {
      // #ifndef H5
      if (process.env.UNI_PLATFORM !== 'h5') {
        showNotify(options);
        return;
      }
      // #endif

      let cOptions = options;
      if (typeof options !== 'object') {
        cOptions = { message: options };
      }
      showNotify({
        ...cOptions,
        top: 44,
      });
    },
  },
};
</script>
<style scoped lang="scss">
</style>
