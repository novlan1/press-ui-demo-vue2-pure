(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bd6c2d9"],{"088d":function(t,e,n){"use strict";n("a107")},1095:function(t,e,n){var i=n("ee2b");e=i(!1),e.push([t.i,".press-sticky[data-v-3fef2b5c]{position:relative}.press-sticky-wrap--fixed[data-v-3fef2b5c]{position:fixed;right:0;left:0}",""]),t.exports=e},"23c4":function(t,e,n){var i=n("ee2b");e=i(!1),e.push([t.i,".press-ellipsis[data-v-6dfa8edd]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-6dfa8edd],.press-multi-ellipsis--l3[data-v-6dfa8edd]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-6dfa8edd]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-6dfa8edd]{-webkit-line-clamp:3}.press-notice-bar[data-v-6dfa8edd]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:var(--notice-bar-height,40px);padding:var(--notice-bar-padding,0 16px);font-size:var(--notice-bar-font-size,14px);color:var(--notice-bar-text-color,#ed6a0c);line-height:var(--notice-bar-line-height,24px);background-color:var(--notice-bar-background-color,#fffbe8)}.press-notice-bar--withicon[data-v-6dfa8edd]{position:relative;padding-right:40px}.press-notice-bar--wrapable[data-v-6dfa8edd]{height:auto;padding:var(--notice-bar-wrapable-padding,8px 16px)}.press-notice-bar--wrapable .press-notice-bar__wrap[data-v-6dfa8edd]{height:auto}.press-notice-bar--wrapable .press-notice-bar__content[data-v-6dfa8edd]{position:relative;white-space:normal}.press-notice-bar__left-icon[data-v-6dfa8edd]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;vertical-align:middle}.press-notice-bar__left-icon[data-v-6dfa8edd],.press-notice-bar__right-icon[data-v-6dfa8edd]{font-size:var(--notice-bar-icon-size,16px);min-width:var(--notice-bar-icon-min-width,22px)}.press-notice-bar__right-icon[data-v-6dfa8edd]{position:absolute;top:10px;right:15px}.press-notice-bar__wrap[data-v-6dfa8edd]{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;height:var(--notice-bar-line-height,24px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-notice-bar__content[data-v-6dfa8edd]{position:absolute;white-space:nowrap}.press-notice-bar__content.press-ellipsis[data-v-6dfa8edd]{max-width:100%}",""]),t.exports=e},3258:function(t,e,n){"use strict";var i=n("d088"),r=n("9f44"),o=n("b7a1"),a=/"/g,c=i("".replace);t.exports=function(t,e,n,i){var s=o(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+c(o(i),a,"&quot;")+'"'),l+">"+s+"</"+e+">"}},3964:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("3849");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"3a20":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("7ef5"),r=0;function o(t){var e="binded_".concat(r);function n(){var n=this;n[e]||(t.call(n,i["d"],!0),n[e]=!0)}function o(){var n=this;n[e]&&(t.call(n,i["c"],!1),n[e]=!1)}return r+=1,{mounted:n,activated:n,deactivated:o,beforeDestroy:o}}},"51a1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-notice-bar-index"},[t.show?n("div",{class:t.noticeBarClass,style:t.noticeBarStyle,on:{click:t.onClick}},[t.leftIcon?n("PressIconPlus",{class:[t.leftIconClass],attrs:{name:t.leftIcon,"custom-class":t.leftIconCustomClass}}):t._t("left-icon"),n("div",{staticClass:"press-notice-bar__wrap"},[n("div",{class:"press-notice-bar__content "+(!1!==t.scrollable||t.wrapable?"":"press-ellipsis"),style:t.animationStyle},[t._v(" "+t._s(t.text)+" "),t.text?t._e():t._t("default")],2)]),"closeable"===t.mode?n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"cross"},on:{click:t.onClickIcon}}):"link"===t.mode?[t.isNotInUni?n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}}):n("navigator",{attrs:{url:t.url,"open-type":t.openType}},[n("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}})],1)]:t._t("right-icon")],2):t._e()])},r=[],o=n("bb29"),a=n("4455"),c=(n("e087"),n("30b9"),n("a88c"),n("8999"),n("45be"),n("15ea"),n("ce2b")),s=n("b803"),l=n("866d"),u=n("4662"),d=n("1ca6");function f(t){return Object(d["b"])({color:t.color,"background-color":t.backgroundColor,background:t.background})}var h={rootStyle:f},p=n("e51d"),b=n("7ef5"),v={name:"PressNoticeBar",options:Object(a["a"])(Object(a["a"])({},p["b"]),{},{styleIsolation:"shared"}),components:{PressIconPlus:c["a"]},props:Object(a["a"])({text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean},p["c"]),emits:["close","click"],data:function(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:Object(u["b"])()}},computed:{noticeBarClass:function(){var t=this.mode,e=this.wrapable,n=this.customClass;return"".concat(n," ").concat(u["a"].bem2("notice-bar",{withicon:t,wrapable:e}))},noticeBarStyle:function(){var t=this.color,e=this.backgroundColor,n=this.background;return h.rootStyle({color:t,backgroundColor:e,background:n})},animationStyle:function(){var t=this.animationDuration,e=this.delay,n=this.translateX,i=["transform: translateX(".concat(n,"px);"),"transition: -webkit-transform ".concat(t,"ms linear ").concat(e,"ms, transform ").concat(t,"ms linear ").concat(e,"ms;"),"transform-origin: 50% 50% 0px;"].join(" ");return i},leftIconClass:function(){return"press-notice-bar__left-icon"},leftIconCustomClass:function(){var t="";return t},rightIconClass:function(){return"press-notice-bar__right-icon"},rightIconCustomClass:function(){var t="";return t}},watch:{text:{handler:function(){this.init()}},speed:{handler:function(){this.init()}}},created:function(){},mounted:function(){this.init()},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){this.timer&&clearTimeout(this.timer)},init:function(){var t=this;Object(s["d"])((function(){Promise.all([Object(l["c"])(t,".press-notice-bar__content"),Object(l["c"])(t,".press-notice-bar__wrap")]).then((function(e){var n=Object(o["a"])(e,2),i=n[0],r=n[1],a=t.speed,c=t.scrollable;if(null!=i&&null!=r&&i.width&&r.width&&!1!==c&&(c||r.width<i.width)){var s=(r.width+i.width)/a*1e3;t.wrapWidth=r.width,t.contentWidth=i.width,t.duration=s,t.scroll(!0)}}))}))},scroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=e?0:this.wrapWidth,this.animationDuration=0,Object(s["d"])((function(){t.translateX=-t.contentWidth,t.animationDuration=t.duration})),this.timer=setTimeout((function(){t.scroll()}),this.duration)},onClickIcon:function(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",Object(b["a"])(t)))},onClick:function(t){this.$emit("click",t)}}},m=v,g=(n("088d"),n("33b6")),w=Object(g["a"])(m,i,r,!1,null,"6dfa8edd",null);e["a"]=w.exports},"64bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"sticky",staticClass:"press-sticky",class:t.customClass,style:t.containerStyle},[n("div",{class:t.wrapClass,style:t.wrapStyle},[t._t("default")],2)])])},r=[],o=n("bb29");n("3849");var a=n("4455"),c=(n("a88c"),n("06e6"),n("8999"),n("45be"),n("d9a8"),n("b41b"),n("6058"),n("44d4"),n("093a"),n("15ea"),n("4662")),s=n("1ca6"),l=n("42f6");function u(t){return Object(s["b"])({height:t.fixed?Object(l["a"])(t.height):"","z-index":t.zIndex})}function d(t){return Object(s["b"])({transform:t.transform?"translate3d(0, ".concat(t.transform,"px, 0)"):"",top:t.fixed?Object(l["a"])(t.offsetTop):"","z-index":t.zIndex})}var f={containerStyle:u,wrapStyle:d},h=n("866d"),p=n("b803"),b=n("457e");n("0cda"),n("cfff"),n("0c65");function v(){var t=getCurrentPages();return t[t.length-1]}function m(t){var e=v(),n=e.pressPageScroller,i=void 0===n?[]:n;i.forEach((function(e){"function"===typeof e&&e(t)}))}var g=function(t){return{created:function(){var e=v();Object(b["e"])(e)&&(Array.isArray(e.pressPageScroller)?e.pressPageScroller.push(t.bind(this)):e.pressPageScroller="function"===typeof e.onPageScroll?[e.onPageScroll.bind(e),t.bind(this)]:[t.bind(this)],e.onPageScroll=m)},destroy:function(){var e,n=v();Object(b["e"])(n)&&(n.pressPageScroller=(null===(e=n.pressPageScroller)||void 0===e?void 0:e.filter((function(e){return e!==t})))||[])}}},w=n("3a20"),y=n("c776"),x=n("e51d"),S=".press-sticky",O=(g((function(t){null===this.scrollTop&&this.onScroll(t)})),{name:"PressSticky",options:Object(a["a"])({},x["b"]),mixins:[Object(w["a"])((function(t){this.scroller||(this.scroller=Object(y["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),t(this.scroller,"touchmove",this.onScroll,!0),this.onScroll()}))],props:Object(a["a"])(Object(a["a"])({},x["c"]),{},{zIndex:{type:Number,default:99},offsetTop:{type:Number,default:0},disabled:{type:Boolean},container:{type:[Function,null],default:null},scrollTop:{type:[Number,null],default:null}}),emits:["scroll"],data:function(){return{height:0,fixed:!1,transform:0,scrollTopData:this.scrollTop}},computed:{containerStyle:function(){var t=this.fixed,e=this.height,n=this.zIndex,i=f.containerStyle({fixed:t,height:e,zIndex:n});return i},wrapStyle:function(){var t=this.fixed,e=this.offsetTop,n=this.transform,i=this.zIndex,r=f.wrapStyle({fixed:t,offsetTop:e,transform:n,zIndex:i});return r},wrapClass:function(){var t=this.fixed;return c["a"].bem2("sticky-wrap",{fixed:t})}},watch:{offsetTop:{handler:function(){this.onScroll()}},disabled:{handler:function(){this.onScroll()}},container:{handler:function(){this.onScroll()}},scrollTop:{handler:function(t){this.onScroll({scrollTop:t}),this.scrollTopData=t}}},created:function(){},mounted:function(){this.scrollTopData=this.scrollTop,this.onScroll()},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(n){e[n]=t[n]}))},onScroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.scrollTop,i=this.container,r=this.offsetTop,a=this.disabled;a?this.setDataAfterDiff({fixed:!1,transform:0}):(this.scrollTopData=n||this.scrollTopData,"function"===typeof i&&i()?Promise.all([Object(h["c"])(this,S),this.getContainerRect()]).then((function(e){var n=Object(o["a"])(e,2),i=n[0],a=n[1];i&&a&&r+i.height>a.height+a.top?t.setDataAfterDiff({fixed:!1,transform:a.height-i.height}):i&&r>=i.top?t.setDataAfterDiff({fixed:!0,height:i.height,transform:0}):t.setDataAfterDiff({fixed:!1,transform:0})})).catch((function(t){console.warn("error",t)})):Object(h["c"])(this,S).then((function(e){Object(b["e"])(e)&&(r>=e.top?(t.setDataAfterDiff({fixed:!0,height:e.height}),t.transform=0):t.setDataAfterDiff({fixed:!1}))})))},setDataAfterDiff:function(t){var e=this;Object(p["c"])((function(){var n=Object.keys(t).reduce((function(n,i){return t[i]!==e[i]&&(n[i]=t[i]),n}),{});Object.keys(n).length>0&&e.setData(n),e.$emit("scroll",{scrollTop:e.scrollTopData,isFixed:t.fixed||e.fixed})}))},getContainerRect:function(){var t,e=this.container(),n=e.getBoundingClientRect();return t=Promise.resolve(n),t}}}),j=O,k=(n("a325"),n("33b6")),_=Object(k["a"])(j,i,r,!1,null,"3fef2b5c",null);e["a"]=_.exports},"7ef5":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var i=n("457e"),r=n("4662"),o=n("9203");function a(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];i["b"]||t.addEventListener(e,n,!!o["b"]&&{capture:!1,passive:r})}function c(t,e,n){i["b"]||t.removeEventListener(e,n)}function s(t){return l(t).value||""}function l(t){var e,n,i;return Object(r["b"])()?{value:(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"",scrollTop:null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.scrollTop,scrollHeight:null===t||void 0===t||null===(i=t.target)||void 0===i?void 0:i.scrollHeight}:t.detail}},"866d":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return b}));var i=n("9c63"),r=n("4455"),o=(n("25f7"),n("8999"),n("0c4e"),n("080f"),n("c776")),a=n("4662"),c=n("179e"),s=n("18e2"),l=n("0829");function u(t){var e=Object(s["a"])(),n=e.top,i=void 0===n?0:n;return Object(a["b"])()||Object(l["b"])()?t-i:t}function d(){if(Object(a["b"])()){var t=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),e=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height),n=Object(s["a"])(),i=n.top,r=n.bottom;return e-=i,e-=r,{windowWidth:t,windowHeight:e,windowTop:i,windowBottom:r}}var o=Object(c["f"])(),l=o.windowWidth,u=o.windowHeight,d=o.windowTop,f=o.windowBottom;return{windowWidth:l,windowHeight:u,windowTop:d,windowBottom:f}}function f(){if(Object(a["b"])())return 0;var t=Object(c["f"])(),e=t.statusBarHeight;return e}function h(t,e){return new Promise((function(n){var i=Object(o["a"])(e),r=t.$el;if(r){var a=r.querySelector(i);return a||n({}),void n({scrollHeight:a.scrollHeight,scrollTop:a.scrollTop})}uni.createSelectorQuery().in(t).select(i).fields({scrollOffset:!0},(function(t){n(t)})).exec()}))}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(i){var o=null===t||void 0===t?void 0:t.$el,a=null===o||void 0===o?void 0:o.querySelector(e);if(!a&&n&&(a=document.querySelector(e)),a){var c=a.getBoundingClientRect()||{},l=Object(s["a"])(),u=l.top,d={left:c.left,right:c.right,width:c.width,height:c.height,x:c.x,y:c.y,top:c.top,bottom:c.bottom};d=Object(r["a"])(Object(r["a"])({},d),{},{top:c.top-u,bottom:c.bottom-u}),i(d)}else i({})}))}function b(t,e){return new Promise((function(n){var r=t.$el;if(r){var o=r.querySelectorAll(e),a=Object(i["a"])(o).map((function(t){return t.getBoundingClientRect()}));n(a)}else uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n(t[0])}))}))}},8700:function(t,e,n){"use strict";function i(){return{data:function(){var t=!1;return{showHeader:!t}},mounted:function(){this.showHeader||this.setHeaderStyle("none")},methods:{onToggleShowHeader:function(){this.showHeader=!this.showHeader;var t="none";this.showHeader&&(t="block"),this.setHeaderStyle(t)},setHeaderStyle:function(t){var e=document.querySelector("uni-page-head")||document.querySelector(".uni-page-head-wrap");e&&(e.style.display=t)}}}}n.d(e,"a",(function(){return i}))},a107:function(t,e,n){var i=n("23c4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("c69b").default;r("5dc65e78",i,!0,{sourceMap:!1,shadowMode:!1})},a325:function(t,e,n){"use strict";n("a87d")},a87d:function(t,e,n){var i=n("1095");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("c69b").default;r("0807981e",i,!0,{sourceMap:!1,shadowMode:!1})},af55:function(t,e,n){"use strict";var i=n("a56e");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b5a2:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return i}))},b803:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));n("8999"),n("b41b"),n("6058"),n("093a");var i=n("179e"),r=n("4662"),o=n("4211");function a(t){return setTimeout((function(){t()}),1e3/30)}function c(t,e){Object(i["d"])()&&t.groupSetData?t.groupSetData(e):e()}function s(t){var e=t.selector,n=t.callback,i=t.options;if(Object(r["b"])()){var o=new IntersectionObserver(n,i),a=document.querySelectorAll(e);return a.forEach((function(t){o.observe(t)})),!0}return!1}n.d(e,"c",(function(){return o["f"]}))},bb29:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("b5a2");n("745f"),n("9135"),n("14c4"),n("cfff"),n("8999"),n("45be"),n("15ea");function r(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o,a,c=[],s=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=o.call(n)).done)&&(c.push(i.value),c.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=n["return"]&&(a=n["return"](),Object(a)!==a))return}finally{if(l)throw r}}return c}}var o=n("8364"),a=n("3964");function c(t,e){return Object(i["a"])(t)||r(t,e)||Object(o["a"])(t,e)||Object(a["a"])()}},c776:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));n("0c4e"),n("fec7"),n("4498");var i=/scroll|auto|overlay/i;function r(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var r=window.getComputedStyle(n),o=r.overflowY;if(i.test(o))return n;n=n.parentNode}return e}function o(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function a(t){var e=t;return t.startsWith("#")||(e="#".concat(t)),e="".concat(e," > .uni-scroll-view > .uni-scroll-view"),e}},d9a8:function(t,e,n){"use strict";var i=n("c71e"),r=n("3258"),o=n("af55");i({target:"String",proto:!0,forced:o("fixed")},{fixed:function(){return r(this,"tt","","")}})}}]);