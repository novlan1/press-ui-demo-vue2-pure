'use strict';
const { merge } = require('webpack-merge');
const { getWebpackBaseConfig } = require('plugin-light/lib/webpack-base-config');
const { GenVersionWebPlugin } = require('plugin-light/lib/plugin');
const { BUILD_NAME_MAP  } = require('t-comm/lib/v-console/config');

// const LOADER_IFDEF = 'plugin-light/lib/loader/ifdef-loader';
// const INJECT_DYNAMIC_STYLE_WEB = 'plugin-light/lib/loader/inject-dynamic-style-web';

process.env.UNI_PLATFORM = 'h5';

module.exports = merge(getWebpackBaseConfig({
  terserPureFuncs: [],
  useXSS: false,
  isUseVueLoader: false,
  lessAlias: true,
  // handleIfDefFiles: /(press-ui|component).*(\.vue|\.ts|\.js|\.css|\.scss)$/,
}), {
  productionSourceMap: true,
  transpileDependencies: ['press-ui', '@zebra-ui/swiper'],
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool('hidden-module-source-map'); // 对外隐藏map信息、使用源码定位出错位置
    } else {
      config.devtool('eval-source-map'); // 生成速度更快
    }

    // config
    //   .module
    //   .rule('ifdef-loader')
    // // 根据项目实际配置文件类型
    //   .test(/(press-ui|packages|pages|utils).*(\.vue|\.ts|\.js|\.css|\.scss)$/)
    // // 不要配成下面这样，会卡住
    // // .test(/\.vue|\.ts|\.js|\.css|\.scss$/)
    //   .use(LOADER_IFDEF)
    //   .loader(LOADER_IFDEF)
    //   .options({
    //     context: { H5: true, VUE2: true },
    //     type: ['css', 'js', 'html'],
    //   })
    //   .end();

    config
      .plugin('gen-version-web')
      .use(new GenVersionWebPlugin({
        buildName: BUILD_NAME_MAP.build,
        commitName: BUILD_NAME_MAP.commit,
        delay: 0,
      }))
      .end();

    // config.module
    //   .rule('inject-dynamic-style-web')
    //   .test(/(css\/base\.scss)$/)
    //   .use(INJECT_DYNAMIC_STYLE_WEB)
    //   .loader(INJECT_DYNAMIC_STYLE_WEB)
    //   .options({
    //     topElement: '.demo-wrap',
    //     platforms: ['h5'],
    //   })
    //   .end();
  },
});
