(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a54b1b44"],{"01d5":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return v}));var r=n("5e66"),a=n("2cd2"),i=(n("2aaa"),n("226c"),n("414c"),n("79cc"),n("74d0"));function c(e){var t=e;return Array.isArray(t)||(t=[e]),t}function o(e,t){var n=c(e);n.forEach((function(e){var t=e.name,n=e.prop;i["a"].prototype[t]=n}))}function s(e){i["a"].nextTick(e)}function u(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=new(i["a"].extend(t))({el:e,propsData:r}),n}function d(){var e;return e=i["a"].prototype.$isServer,e}function f(e){return{provide:function(){return Object(a["a"])({},e,this)}}}function l(e){return{inject:Object(a["a"])({},e,{default:null})}}function p(e){e.$forceUpdate()}var b={props:{value:{type:[String,Boolean],default:""}},computed:{realModelValue:function(){var e="";return e=this.value,e}},methods:{emitModelValue:function(e){this.$emit("input",e)}}};function v(e,t){i["a"].config.ignoredElements=[].concat(Object(r["a"])(i["a"].config.ignoredElements||[]),Object(r["a"])(e))}},"06a0":function(e,t,n){var r=n("1dd1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("c69b").default;a("0e168e04",r,!0,{sourceMap:!1,shadowMode:!1})},"0dd9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"iconfont",class:["icon-"+e.type,e.customClass,e.customPrefix,e.customPrefix?e.type:""],style:{"font-size":e.iconSize},on:{click:e.onClick}})},a=[],i=(n("948b"),n("e8e7"),n("745e"),function(e){var t=/^[0-9]*$/g;return"number"===typeof e||t.test(e)?"".concat(e,"px"):e}),c={name:"PressIcon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customPrefix:{type:String,default:""},customClass:{type:String,default:""}},emits:["click"],data:function(){return{}},computed:{iconSize:function(){return i(this.size)}},methods:{onClick:function(){this.$emit("click")}}},o=c,s=(n("d3d4"),n("2777")),u=Object(s["a"])(o,r,a,!1,null,"7dd6543c",null);t["a"]=u.exports},"1a5d":function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){var r=document.getElementById("#clipboard");null===r||void 0===r||r.remove();var a=document.createElement("textarea");a.id="#clipboard",a.style.position="fixed",a.style.top="-9999px",a.style.zIndex="-9999",document.body.appendChild(a),a.value="".concat(e),a.select(),a.setSelectionRange(0,a.value.length);var i=document.execCommand("Copy",!1);a.blur(),i?t():n()}))}Object.defineProperty(t,"__esModule",{value:!0}),t.clipboardWeb=r},"1c49":function(e,t,n){"use strict";n("2969")},"1dd1":function(e,t,n){var r=n("ee2b");t=r(!1),t.push([e.i,".press-icon-music[data-v-3cc46a43]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.press-icon-music__bar-0[data-v-3cc46a43]{-webkit-animation:playing1-data-v-3cc46a43 .3s linear infinite alternate;animation:playing1-data-v-3cc46a43 .3s linear infinite alternate}.press-icon-music__bar-1[data-v-3cc46a43]{-webkit-animation:playing2-data-v-3cc46a43 .3s linear infinite alternate;animation:playing2-data-v-3cc46a43 .3s linear infinite alternate}.press-icon-music__bar-2[data-v-3cc46a43]{-webkit-animation:playing1-data-v-3cc46a43 .3s linear .15s infinite alternate;animation:playing1-data-v-3cc46a43 .3s linear .15s infinite alternate}.press-icon-music__bar-3[data-v-3cc46a43]{-webkit-animation:playing1-data-v-3cc46a43 .3s linear infinite alternate;animation:playing1-data-v-3cc46a43 .3s linear infinite alternate}.press-icon-music__bar-4[data-v-3cc46a43]{-webkit-animation:playing2-data-v-3cc46a43 .3s linear infinite alternate;animation:playing2-data-v-3cc46a43 .3s linear infinite alternate}@-webkit-keyframes playing1-data-v-3cc46a43{0%{height:25%}to{height:80%}}@keyframes playing1-data-v-3cc46a43{0%{height:25%}to{height:80%}}@-webkit-keyframes playing2-data-v-3cc46a43{0%{height:80%}to{height:25%}}@keyframes playing2-data-v-3cc46a43{0%{height:80%}to{height:25%}}",""]),e.exports=t},2969:function(e,t,n){var r=n("8967");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("c69b").default;a("5bc9aeb2",r,!0,{sourceMap:!1,shadowMode:!1})},"4e97":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n("5e66"),a=(n("b4ca"),n("414c"),n("e8e7"),n("b103")),i=n("6738"),c=n("7fb7");function o(){if(Object(i["b"])()){var e=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),t=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height);return{windowWidth:e,windowHeight:t,windowTop:0,windowBottom:0}}var n=uni.getSystemInfoSync(),r=n.windowWidth,a=n.windowHeight,c=n.windowTop,o=n.windowBottom;return{windowWidth:r,windowHeight:a,windowTop:c,windowBottom:o}}function s(){if(Object(i["b"])())return 0;var e=Object(c["a"])(),t=e.statusBarHeight;return t}function u(e,t){return new Promise((function(n){var r=Object(a["a"])(t),i=e.$el;if(i){var c=i.querySelector(r);return c||n({}),void n({scrollHeight:c.scrollHeight,scrollTop:c.scrollTop})}uni.createSelectorQuery().in(e).select(r).fields({scrollOffset:!0},(function(e){n(e)})).exec()}))}function d(e,t){return new Promise((function(n){var r=e.$el;if(r){var a=r.querySelector(t);a||n({});var i=a.getBoundingClientRect();n(i)}else uni.createSelectorQuery().in(e).select(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(e[0])}))}))}function f(e,t){return new Promise((function(n){var a=e.$el;if(a){var i=a.querySelectorAll(t),c=Object(r["a"])(i).map((function(e){return e.getBoundingClientRect()}));n(c)}else uni.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n(e[0])}))}))}},"55cd":function(e,t,n){var r=n("842b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("c69b").default;a("f6b63376",r,!0,{sourceMap:!1,shadowMode:!1})},6738:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return x}));n("f1f0"),n("414c"),n("79cc");var r=n("b67b"),a=(n("2aaa"),n("06dc"),n("b4ca"),n("cdf1"),"van-"),i="press-";function c(e,t,n){return e=n+e,t=t.map((function(t){return"".concat(e,"--").concat(t)})),t.unshift(e),t.join(" ")}function o(e,t){t&&("string"===typeof t||"number"===typeof t?e.push(t):Array.isArray(t)?t.forEach((function(t){o(e,t)})):"object"===Object(r["a"])(t)&&Object.keys(t).forEach((function(n){t[n]&&e.push(n)})))}function s(e,t){var n=[];return o(n,t),c(e,n,a)}function u(e,t){var n=[];return o(n,t),c(e,n,i)}function d(e,t,n){if(!n)return u(e,t);var r=[];o(r,t);var a=c(e,r,n),s=c(e,r,i);return"".concat(a," ").concat(s)}n("fa2d");function f(e){var t=Object(r["a"])(e);return"boolean"===t||"number"===t||"string"===t||"undefined"===t||null===e}function l(e,t){return 2===t.length?e(t[0],t[1]):1===t.length?e(t[0]):e()}function p(e){if(1===e.length&&f(e[0]))return e[0];for(var t={},n=0;n<e.length;n++)t["key".concat(n)]=e[n];return JSON.stringify(t)}function b(e){var t={};return function(){var n=p(arguments);return void 0===t[n]&&(t[n]=l(e,arguments)),t[n]}}var v=n("afc9"),m=b(s),h=function(){return"undefined"===typeof uni};t["a"]={bem:m,memoize:b,addUnit:v["a"],bem2:u,bem3:d};function g(e,t){if(e>=0&&t>0&&t>=e){var n=t-e+1;return Math.floor(Math.random()*n+e)}return 0}function x(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}},"6e26":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return d}));n("69b0"),n("f1f0"),n("414c");var r=n("c1b0"),a="functional";var i={customClass:{type:String,default:""}},c={multipleSlots:!0,addGlobalClass:!0};function o(e){var t=Object.keys(e).reduce((function(t,n){return t[n]=u(e,n),t}),{});return t}function s(e,t){return e&&t?Object.keys(t).reduce((function(n,r){var a=t[r];return e[r]&&(n[a]=n[r]),n}),e):{}}function u(e,t){var n,r=null===(n=e[t])||void 0===n?void 0:n.default;return"function"===typeof r&&(r=r()),r}function d(e){var t=e.isFunctionMode,n=e.functionModeData,a=e.allProps,i=e.propsKeyMap,c=void 0===i?{}:i,o=e.context,s=e.key;if(!t){var d=c[s];if(d){var l=u(a,d),p=u(a,s);return Object(r["d"])(o[s],p)?Object(r["d"])(o[d],l)?f(o,s):f(o,d):f(o,s)}return f(o,s)}return f(n,s)}function f(e,t){for(var n=t.split("."),r=e,a=0;a<n.length;a++)if(r=r[n[a]],void 0===r)return;return r}},"743d":function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){wx?wx.setClipboardData({data:"".concat(e),success:function(){t()},fail:function(e){console.log(e),n()}}):n()}))}Object.defineProperty(t,"__esModule",{value:!0}),t.clipboardMp=r},"74d0":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("8bbf"),a=n.n(r),i=a.a},"842b":function(e,t,n){var r=n("ee2b");t=r(!1),t.push([e.i,'.icon-empty[data-v-7dd6543c]:before{content:""}@font-face{font-family:iconfont;src:url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.eot?t=13a02cbb9e9c634e54e36069099a2d1e);src:url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.eot?t=13a02cbb9e9c634e54e36069099a2d1e#iefix) format("embedded-opentype"),url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.woff?t=13a02cbb9e9c634e54e36069099a2d1e) format("woff2"),url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.woff?t=13a02cbb9e9c634e54e36069099a2d1e) format("woff"),url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.ttf?t=13a02cbb9e9c634e54e36069099a2d1e) format("truetype"),url(https://image-1251917893.file.myqcloud.com/Esports/iconfont/iconfont.svg?t=13a02cbb9e9c634e54e36069099a2d1e#iconfont) format("svg")}.iconfont[data-v-7dd6543c]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#5e6d82;display:inline-block}',""]),e.exports=t},"86c8":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"l",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h}));var r=n("b67b"),a=(n("8b4b"),n("f1f0"),n("414c"),n("e8e7"),n("745e"),n("6905"),n("e6c9"),n("f74f"),n("01d5")),i="undefined"!==typeof window,c=Object(a["c"])();function o(e){return void 0!==e&&null!==e}function s(e){return"function"===typeof e}function u(e){return null!==e&&"object"===Object(r["a"])(e)}function d(e){return null!==e&&"object"===Object(r["a"])(e)&&!Array.isArray(e)}function f(e){return d(e)&&s(e.then)&&s(e.catch)}function l(e){var t=Object(r["a"])(e);return null!==e&&("object"===t||"function"===t)}function p(e){return/^\d+(\.\d+)?$/.test(e)}function b(e){return/^\d+(\.\d+)?$/.test(e)}function v(e){return/^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(e)}function m(e){0}function h(e){var t=/^[\u4e00-\u9fa5]+$/gi;return t.test(e)}},"87a4":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-icon-music",style:e.rootStyle},e._l(e.barList,(function(t,r){return n("div",{key:r,class:["press-icon-music__bar","press-icon-music__bar-"+r],style:e.barStyle})})),0)},a=[],i=(n("2aaa"),n("d014"),n("948b"),n("faa0"),n("ae2e")),c={name:"PressIconMusic",props:{width:{type:String,default:"40px"},height:{type:String,default:"50px"},number:{type:Number,default:3},color:{type:String,default:"#2979ff"}},emits:[],data:function(){return{}},computed:{barList:function(){return Array.from({length:this.number})},rootStyle:function(){return Object(i["b"])([{width:this.width,height:this.height}])},barStyle:function(){var e=this.width,t=this.number,n=this.color;return Object(i["b"])([{backgroundColor:n,width:"calc(".concat(e," / ").concat(+t+1,")")}])}},methods:{}},o=c,s=(n("b6fd"),n("2777")),u=Object(s["a"])(o,r,a,!1,null,"3cc46a43",null);t["a"]=u.exports},8967:function(e,t,n){var r=n("ee2b");t=r(!1),t.push([e.i,".press-card[data-v-3afc7864]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;-webkit-box-flex:1;-ms-flex:1;flex:1}.press-card .press-card__cover[data-v-3afc7864]{position:relative;margin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;overflow:hidden;border-radius:4px}.press-card .press-card__cover .press-card__cover-image[data-v-3afc7864]{-webkit-box-flex:1;-ms-flex:1;flex:1;vertical-align:middle}.press-card .press-card__header[data-v-3afc7864]{border-bottom:1px solid #ebeef5;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;padding:10px}.press-card .press-card__header[data-v-3afc7864],.press-card .press-card__header .press-card__header-box[data-v-3afc7864]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;align-items:center;overflow:hidden}.press-card .press-card__header .press-card__header-box[data-v-3afc7864]{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center}.press-card .press-card__header .press-card__header-avatar[data-v-3afc7864]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.press-card .press-card__header .press-card__header-avatar .press-card__header-avatar-image[data-v-3afc7864]{-webkit-box-flex:1;-ms-flex:1;flex:1;width:40px;height:40px}.press-card .press-card__header .press-card__header-content[data-v-3afc7864]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}.press-card .press-card__header .press-card__header-content .press-card__header-content-title[data-v-3afc7864]{font-size:15px;color:#3a3a3a}.press-card .press-card__header .press-card__header-content .press-card__header-content-subtitle[data-v-3afc7864]{font-size:12px;margin-top:5px;color:#909399}.press-card .press-card__header .press-card__header-extra[data-v-3afc7864]{line-height:12px}.press-card .press-card__header .press-card__header-extra .press-card__header-extra-text[data-v-3afc7864]{font-size:12px;color:#909399}.press-card .press-card__content[data-v-3afc7864]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.press-card .press-card__actions[data-v-3afc7864]{font-size:12px}.press-card--border[data-v-3afc7864]{border:1px solid #ebeef5}.press-card--shadow[data-v-3afc7864]{position:relative;-webkit-box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2);box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.press-card--full[data-v-3afc7864]{margin:0;border-left-width:0;border-radius:0}.press-card--full[data-v-3afc7864]:after{border-radius:0}.press-ellipsis[data-v-3afc7864]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""]),e.exports=t},"977a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-card",class:{"press-card--full":e.isFull,"press-card--shadow":e.isShadow,"press-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?n("div",{staticClass:"press-card__cover"},[n("img",{staticClass:"press-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){return e.onClick("cover")}}})]):e._e()]),e._t("title",[e.title||e.extra?n("div",{staticClass:"press-card__header"},[n("div",{staticClass:"press-card__header-box",on:{click:function(t){return e.onClick("title")}}},[e.thumbnail?n("div",{staticClass:"press-card__header-avatar"},[n("img",{staticClass:"press-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})]):e._e(),n("div",{staticClass:"press-card__header-content"},[n("span",{staticClass:"press-card__header-content-title press-ellipsis"},[e._v(" "+e._s(e.title)+" ")]),e.title&&e.subTitle?n("span",{staticClass:"press-card__header-content-subtitle press-ellipsis"},[e._v(" "+e._s(e.subTitle)+" ")]):e._e()])]),n("div",{staticClass:"press-card__header-extra",on:{click:function(t){return e.onClick("extra")}}},[n("span",{staticClass:"press-card__header-extra-text"},[e._v(" "+e._s(e.extra)+" ")])])]):e._e()]),n("div",{staticClass:"press-card__content",style:{padding:e.padding},on:{click:function(t){return e.onClick("content")}}},[e._t("default")],2),n("div",{staticClass:"press-card__actions",on:{click:function(t){return e.onClick("actions")}}},[e._t("actions")],2)],2)},a=[],i={name:"PressCard",props:{title:{type:String,default:""},subTitle:{type:String,default:""},extra:{type:String,default:""},thumbnail:{type:String,default:""},cover:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},padding:{type:String,default:"10px"}},emits:["click"],methods:{onClick:function(e){this.$emit("click",e)}}},c=i,o=(n("1c49"),n("2777")),s=Object(o["a"])(c,r,a,!1,null,"3afc7864",null);t["a"]=s.exports},ae2e:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));n("0508"),n("06dc"),n("b4ca"),n("f1f0"),n("414c"),n("e8e7"),n("e6c9");function r(e){var t=/[A-Z]/g,n=e.replace(t,(function(e){return"-".concat(e)})).toLowerCase();return n}function a(e){return void 0===e?"":Array.isArray(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return a(e)})).join(";"):"string"===typeof e?e:Object.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[r(t),[e[t]]].join(":")})).join(";")}t["a"]=a},afc9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));n("948b"),n("e8e7"),n("745e");var r=n("86c8"),a=/^-?\d+(\.\d+)?$/;function i(e){if(null!=e)return a.test("".concat(e))?"".concat(e,"px"):e}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(r["f"])(e)?t?"".concat(e,"px"):Number(e):/(rpx|upx)$/.test(e)?t?"".concat(uni.upx2px(parseInt(e,10)),"px"):Number(uni.upx2px(parseInt(e,10))):t?"".concat(parseInt(e,10),"px"):parseInt(e,10)}},b103:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));n("e8e7"),n("745e"),n("1699");var r=/scroll|auto|overlay/i;function a(e,t){void 0===t&&(t=window);var n=e;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==t){var a=window.getComputedStyle(n),i=a.overflowY;if(r.test(i))return n;n=n.parentNode}return t}function i(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function c(e){var t=e;return e.startsWith("#")||(t="#".concat(e)),t="".concat(t," > .uni-scroll-view > .uni-scroll-view"),t}},b6fd:function(e,t,n){"use strict";n("06a0")},c1b0:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n("9b85"),a=n("b67b"),i=(n("d014"),n("7144"),n("b4ca"),n("fa2d"),n("99d3"),n("ecf7"),n("1d8c"),n("f1f0"),n("414c"),n("291e"),n("5654"),n("e8e7"),n("5fb0"),n("6905"),n("87b1"),n("af77"),n("faa0"),n("e6c9"),n("55b6"),n("2f84"),n("9de4"),n("4943"),n("acdd"),n("6f6d"),n("7a58"),n("c046"),n("79cc"),n("7475"),n("86c8"));var c=Object.prototype.hasOwnProperty;function o(e,t){return c.call(e,t)}function s(e,t,n){var r=t[n];Object(i["e"])(r)&&(c.call(e,n)&&Object(i["i"])(r)?e[n]=u(Object(e[n]),t[n]):e[n]=r)}function u(e,t){return Object.keys(t).forEach((function(n){s(e,t,n)})),e}var d=function e(t,n){var r=t instanceof Object,a=n instanceof Object;if(!r||!a)return t===n;if(Object.keys(t).length!==Object.keys(n).length)return!1;for(var i in t){var c="[object Object]"==Object.prototype.toString.call(t[i]),o="[object Object]"==Object.prototype.toString.call(n[i]),s="[object Array]"==Object.prototype.toString.call(t[i]);if(c&&o)return e(t[i],n[i]);if(s){if(t[i].toString()!=n[i].toString())return!1}else if(t[i]!==n[i])return!1}return!0};function f(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null===e||"object"!==Object(a["a"])(e))return e;if(n.has(e))return n.get(e);if(e instanceof Date)t=new Date(e.getTime());else if(e instanceof RegExp)t=new RegExp(e);else if(e instanceof Map)t=new Map(Array.from(e,(function(e){var t=Object(r["a"])(e,2),a=t[0],i=t[1];return[a,f(i,n)]})));else if(e instanceof Set)t=new Set(Array.from(e,(function(e){return f(e,n)})));else if(Array.isArray(e))t=e.map((function(e){return f(e,n)}));else if("[object Object]"===Object.prototype.toString.call(e)){t=Object.create(Object.getPrototypeOf(e)),n.set(e,t);for(var i=0,c=Object.entries(e);i<c.length;i++){var o=Object(r["a"])(c[i],2),s=o[0],u=o[1];t[s]=f(u,n)}}else t=Object.assign({},e);return n.set(e,t),t}},d3d4:function(e,t,n){"use strict";n("55cd")},e4a0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("743d"),a=n("1a5d");t.clipboardMp=r.clipboardMp,t.clipboardWeb=a.clipboardWeb}}]);