const { execCommand } = require('t-comm');
const { initWithPressUI } = require('../../src/press-ui/script/watch/init');


function main() {
  initWithPressUI([
  'pages',
  'utils',
  ]);
  execCommand('rm -rf src/packages/press-hor-swiper-light', process.cwd(), 'inherit');
  execCommand('rm -rf src/press-ui/postcss.config.js', process.cwd(), 'inherit')
}


main();
