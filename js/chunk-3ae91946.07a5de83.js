(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae91946"],{"0521":function(t,e,n){"use strict";n("1fcf")},"1fcf":function(t,e,n){var i=n("fbb1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("c69b").default;o("0ed0e098",i,!0,{sourceMap:!1,shadowMode:!1})},3964:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("3849");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"4e29":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return b})),n.d(e,"a",(function(){return h}));var i=n("9c63"),o=n("4455"),r=(n("25f7"),n("8999"),n("0c4e"),n("080f"),n("d4ae")),a=n("b32d"),c=n("5f90"),s=n("6b17"),l=n("6f7c");function u(t){var e=Object(s["a"])(),n=e.top,i=void 0===n?0:n;return Object(a["b"])()||Object(l["b"])()?t-i:t}function f(){if(Object(a["b"])()){var t=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),e=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height),n=Object(s["a"])(),i=n.top,o=n.bottom;return e-=i,e-=o,{windowWidth:t,windowHeight:e,windowTop:i,windowBottom:o}}var r=Object(c["f"])(),l=r.windowWidth,u=r.windowHeight,f=r.windowTop,d=r.windowBottom;return{windowWidth:l,windowHeight:u,windowTop:f,windowBottom:d}}function d(){if(Object(a["b"])())return 0;var t=Object(c["f"])(),e=t.statusBarHeight;return e}function p(t,e){return new Promise((function(n){var i=Object(r["a"])(e),o=t.$el;if(o){var a=o.querySelector(i);return a||n({}),void n({scrollHeight:a.scrollHeight,scrollTop:a.scrollTop})}uni.createSelectorQuery().in(t).select(i).fields({scrollOffset:!0},(function(t){n(t)})).exec()}))}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(i){var r=null===t||void 0===t?void 0:t.$el,a=null===r||void 0===r?void 0:r.querySelector(e);if(!a&&n&&(a=document.querySelector(e)),a){var c=a.getBoundingClientRect()||{},l=Object(s["a"])(),u=l.top,f={left:c.left,right:c.right,width:c.width,height:c.height,x:c.x,y:c.y,top:c.top,bottom:c.bottom};f=Object(o["a"])(Object(o["a"])({},f),{},{top:c.top-u,bottom:c.bottom-u}),i(f)}else i({})}))}function h(t,e){return new Promise((function(n){var o=t.$el;if(o){var r=o.querySelectorAll(e),a=Object(i["a"])(r).map((function(t){return t.getBoundingClientRect()}));n(a)}else uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n(t[0])}))}))}},"5f90":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return p}));n("cfff"),n("06e6");var i={},o={};function r(){try{Object.keys(i).length||"undefined"===typeof uni||("function"===typeof uni.getAppBaseInfo?i=uni.getAppBaseInfo():"function"===typeof uni.getSystemInfoSync&&(i=uni.getSystemInfoSync()))}catch(t){console.log("[getAppBaseInfo] err",t)}return i}function a(){try{Object.keys(o).length||"undefined"===typeof uni||("function"===typeof uni.getWindowInfo?o=uni.getWindowInfo():"function"===typeof uni.getSystemInfoSync&&(o=uni.getSystemInfoSync()))}catch(t){console.log("[getAppBaseInfo] err",t)}return o}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("."),i=e.split("."),o=Math.max(n.length,i.length);while(n.length<o)n.push("0");while(i.length<o)i.push("0");for(var r=0;r<o;r++){var a=parseInt(n[r],10),c=parseInt(i[r],10);if(a>c)return 1;if(a<c)return-1}return 0}function s(t){var e=r();return c(e.SDKVersion,t)>=0}function l(){return s("2.9.3")}function u(){return s("2.10.3")}function f(){return s("2.4.0")}function d(){return s("2.9.0")}function p(){var t=!1;return t}},6951:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var i=n("fadf"),o=n("b32d"),r=n("f36e");function a(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];i["b"]||t.addEventListener(e,n,!!r["b"]&&{capture:!1,passive:o})}function c(t,e,n){i["b"]||t.removeEventListener(e,n)}function s(t){return l(t).value||""}function l(t){var e,n,i;return Object(o["b"])()?{value:(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"",scrollTop:null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.scrollTop,scrollHeight:null===t||void 0===t||null===(i=t.target)||void 0===i?void 0:i.scrollHeight}:t.detail}},"9b11":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));n("8999"),n("b41b"),n("6058"),n("093a");var i=n("5f90"),o=n("b32d"),r=n("7d0d");function a(t){return setTimeout((function(){t()}),1e3/30)}function c(t,e){Object(i["d"])()&&t.groupSetData?t.groupSetData(e):e()}function s(t){var e=t.selector,n=t.callback,i=t.options;if(Object(o["b"])()){var r=new IntersectionObserver(n,i),a=document.querySelectorAll(e);return a.forEach((function(t){r.observe(t)})),!0}return!1}n.d(e,"c",(function(){return r["g"]}))},ae2f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-notice-bar-index"},[t.show?n("div",{class:t.noticeBarClass,style:t.noticeBarStyle,on:{click:t.onClick}},[t.leftIcon?n("PressIconPlus",{class:[t.leftIconClass],attrs:{name:t.leftIcon,"custom-class":t.leftIconCustomClass}}):t._t("left-icon"),n("div",{staticClass:"press-notice-bar__wrap"},[n("div",{class:"press-notice-bar__content "+(!1!==t.scrollable||t.wrapable?"":"press-ellipsis"),style:t.animationStyle},[t._v(" "+t._s(t.text)+" "),t.text?t._e():t._t("default")],2)]),"closeable"===t.mode?n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"cross"},on:{click:t.onClickIcon}}):"link"===t.mode?[t.isNotInUni?n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}}):n("navigator",{attrs:{url:t.url,"open-type":t.openType}},[n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}})],1)]:t._t("right-icon")],2):t._e()])},o=[],r=n("4455"),a=(n("e087"),n("30b9"),n("a88c"),n("4849")),c=n("9b11"),s=n("b32d"),l=n("7b68");function u(t){return Object(l["b"])({color:t.color,"background-color":t.backgroundColor,background:t.background})}var f={rootStyle:u},d=n("d94d"),p=n("6951"),b=n("bb29"),h=(n("8999"),n("45be"),n("15ea"),n("4e29"));function v(t){var e=t.contentSelect,n=void 0===e?".press-notice-bar__content":e,i=t.wrapSelector,o=void 0===i?".press-notice-bar__wrap":i,r=t.context,a=t.speed,s=void 0===a?60:a,l=t.scrollable,u=void 0===l||l;return new Promise((function(t,e){Object(c["d"])((function(){Promise.all([Object(h["c"])(r,n),Object(h["c"])(r,o)]).then((function(n){var i=Object(b["a"])(n,2),o=i[0],r=i[1];if(null!=o&&null!=r&&o.width&&r.width&&!1!==u){if(u||r.width<o.width){var a=(r.width+o.width)/s*1e3;t({wrapWidth:r.width,contentWidth:o.width,duration:a})}}else e()})).catch((function(t){e(t)}))}))}))}var m={name:"PressNoticeBar",options:Object(r["a"])(Object(r["a"])({},d["b"]),{},{styleIsolation:"shared"}),components:{PressIconPlus:a["a"]},props:Object(r["a"])({text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean},d["c"]),emits:["close","click"],data:function(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:Object(s["b"])()}},computed:{noticeBarClass:function(){var t=this.mode,e=this.wrapable,n=this.customClass;return"".concat(n," ").concat(s["a"].bem2("notice-bar",{withicon:t,wrapable:e}))},noticeBarStyle:function(){var t=this.color,e=this.backgroundColor,n=this.background;return f.rootStyle({color:t,backgroundColor:e,background:n})},animationStyle:function(){var t=this.animationDuration,e=this.delay,n=this.translateX,i=["transform: translateX(".concat(n,"px);"),"transition: -webkit-transform ".concat(t,"ms linear ").concat(e,"ms, transform ").concat(t,"ms linear ").concat(e,"ms;"),"transform-origin: 50% 50% 0px;"].join(" ");return i},leftIconClass:function(){return"press-notice-bar__left-icon"},leftIconCustomClass:function(){var t="";return t},rightIconClass:function(){return"press-notice-bar__right-icon"},rightIconCustomClass:function(){var t="";return t}},watch:{text:{handler:function(){this.init()}},speed:{handler:function(){this.init()}}},created:function(){},mounted:function(){this.init()},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){this.timer&&clearTimeout(this.timer)},init:function(){var t=this,e=this.speed,n=this.scrollable;v({contentSelect:".press-notice-bar__content",wrapSelector:".press-notice-bar__wrap",context:this,speed:e,scrollable:n}).then((function(e){var n=e.wrapWidth,i=e.contentWidth,o=e.duration;t.wrapWidth=n,t.contentWidth=i,t.duration=o,t.scroll(!0)})).catch((function(){}))},scroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=e?0:this.wrapWidth,this.animationDuration=0,Object(c["d"])((function(){t.translateX=-t.contentWidth,t.animationDuration=t.duration})),this.timer=setTimeout((function(){t.scroll()}),this.duration)},onClickIcon:function(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",Object(p["a"])(t)))},onClick:function(t){this.$emit("click",t)}}},g=m,w=(n("0521"),n("33b6")),y=Object(w["a"])(g,i,o,!1,null,"6f923496",null);e["a"]=y.exports},b5a2:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return i}))},bb29:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("b5a2");n("745f"),n("9135"),n("14c4"),n("cfff"),n("8999"),n("45be"),n("15ea");function o(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,c=[],s=!0,l=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=r.call(n)).done)&&(c.push(i.value),c.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=n["return"]&&(a=n["return"](),Object(a)!==a))return}finally{if(l)throw o}}return c}}var r=n("8364"),a=n("3964");function c(t,e){return Object(i["a"])(t)||o(t,e)||Object(r["a"])(t,e)||Object(a["a"])()}},d4ae:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));n("0c4e"),n("fec7"),n("4498");var i=/scroll|auto|overlay/i;function o(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var o=window.getComputedStyle(n),r=o.overflowY;if(i.test(r))return n;n=n.parentNode}return e}function r(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function a(t){var e=t;return t.startsWith("#")||(e="#".concat(t)),e="".concat(e," > .uni-scroll-view > .uni-scroll-view"),e}},fbb1:function(t,e,n){var i=n("ee2b");e=i(!1),e.push([t.i,".press-ellipsis[data-v-6f923496]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-6f923496],.press-multi-ellipsis--l3[data-v-6f923496]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-6f923496]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-6f923496]{-webkit-line-clamp:3}.press-notice-bar[data-v-6f923496]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:var(--notice-bar-height,40px);padding:var(--notice-bar-padding,0 16px);font-size:var(--notice-bar-font-size,14px);color:var(--notice-bar-text-color,#ed6a0c);line-height:var(--notice-bar-line-height,24px);background-color:var(--notice-bar-background-color,#fffbe8)}.press-notice-bar--withicon[data-v-6f923496]{position:relative;padding-right:40px}.press-notice-bar--wrapable[data-v-6f923496]{height:auto;padding:var(--notice-bar-wrapable-padding,8px 16px)}.press-notice-bar--wrapable .press-notice-bar__wrap[data-v-6f923496]{height:auto}.press-notice-bar--wrapable .press-notice-bar__content[data-v-6f923496]{position:relative;white-space:normal}.press-notice-bar__left-icon[data-v-6f923496]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;vertical-align:middle}.press-notice-bar__left-icon[data-v-6f923496],.press-notice-bar__right-icon[data-v-6f923496]{font-size:var(--notice-bar-icon-size,16px);min-width:var(--notice-bar-icon-min-width,22px)}.press-notice-bar__right-icon[data-v-6f923496]{position:absolute;top:10px;right:15px}.press-notice-bar__wrap[data-v-6f923496]{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;height:var(--notice-bar-line-height,24px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-notice-bar__content[data-v-6f923496]{position:absolute;white-space:nowrap}.press-notice-bar__content.press-ellipsis[data-v-6f923496]{max-width:100%}",""]),t.exports=e}}]);