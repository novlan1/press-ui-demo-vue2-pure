import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueLazyLoad from 'vue-lazyload';

import { startApp } from 't-comm/lib/vue-start/vue-start';
import App from './App';
import routerMap from './router';
import config from './config.js';
import { projectMixins } from './mixins/projectMixins.js';

import { initDemoI18n } from 'press-ui/locale/demo-lang';
import { initPureDemoMixin } from 'src/utils/mixin/pure-mixin';
import { initPureAdapter } from 'press-ui/common/pure/adapter';


const beforeStart = function () {};

initPureAdapter();
initPureDemoMixin();
initDemoI18n();


startApp({
  App,
  Vue,
  VueRouter,
  Router: VueRouter,
  VueLazyLoad,
  Vuex,

  routerMap,
  projectMixins,
  beforeStart,
  config,
});
