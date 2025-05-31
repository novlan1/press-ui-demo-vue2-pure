const { execCommand } = require('t-comm');
const { initWithPressUI } = require('../../src/press-ui/script/watch/init');


function main() {
  initWithPressUI([
    'packages',
    'pages',
    'utils',
  ]);
  execCommand('rm -rf src/packages/press-hor-swiper-light', process.cwd(), 'inherit');

  // 需要删除 press-ui 原项目的 postcss.config.js，否则编译器会找 uni-app 相关的依赖，报错
  execCommand('rm -rf src/press-ui/postcss.config.js', process.cwd(), 'inherit')
}


main();
