const { execCommand } = require('t-comm');
const { initWithPressUI } = require('../../src/press-ui/packages/press-ui/script/watch/init');


function main() {
  initWithPressUI();
  execCommand('rm -rf src/packages/press-hor-swiper-light', process.cwd(), 'inherit');
}


main();
