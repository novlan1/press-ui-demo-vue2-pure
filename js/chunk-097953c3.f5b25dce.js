(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-097953c3"],{"201a":function(n,t,e){"use strict";e("2ca4")},"228a":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:n.t("basicUsage")}},[e("PressLink",{attrs:{text:n.t("openDocs"),href:"https://novlan1.github.io/press-ui/"},on:{click:n.click}})],1),e("demo-block",{attrs:{title:n.t("underline")}},[e("PressLink",{attrs:{underline:"",text:n.t("openDocs"),href:"https://novlan1.github.io/press-ui/"},on:{click:n.click}})],1),e("demo-block",{attrs:{title:n.t("customColor")}},[e("PressLink",{attrs:{text:n.t("openDocs"),color:"#19be6b",href:"https://novlan1.github.io/press-ui/"},on:{click:n.click}})],1)],1)},o=[],u=e("ea61"),c={i18n:{"zh-CN":{openDocs:"打开 Press UI 文档",underline:"下划线",customColor:"自定义颜色"},"en-US":{openDocs:"Go to Press UI docs",underline:"Underline",customColor:"Custom Color"}},components:{PressLink:u["a"]},data:function(){return{}},methods:{click:function(){console.log("[click]")}}},i=c,a=(e("201a"),e("2777")),f=Object(a["a"])(i,r,o,!1,null,"57f9cf1c",null);t["default"]=f.exports},"2ca4":function(n,t,e){var r=e("9b89");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var o=e("c69b").default;o("3d9ecee5",r,!0,{sourceMap:!1,shadowMode:!1})},"2ead":function(n,t,e){var r=e("ee2b");t=r(!1),t.push([n.i,".press-link[data-v-38eaaf43]{line-height:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex:1;flex:1}",""]),n.exports=t},"3eed":function(n,t,e){"use strict";e("8234")},"4b70":function(n,t,e){"use strict";e.d(t,"e",(function(){return c})),e.d(t,"b",(function(){return i})),e.d(t,"d",(function(){return a})),e.d(t,"a",(function(){return f})),e.d(t,"c",(function(){return s}));e("cdf1");var r=e("a6bd");function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=n.split("."),r=t.split("."),o=Math.max(e.length,r.length);while(e.length<o)e.push("0");while(r.length<o)r.push("0");for(var u=0;u<o;u++){var c=parseInt(e[u],10),i=parseInt(r[u],10);if(c>i)return 1;if(c<i)return-1}return 0}function u(n){var t=Object(r["a"])();return o(t.SDKVersion,n)>=0}function c(){return u("2.9.3")}function i(){return u("2.10.3")}function a(){return u("2.4.0")}function f(){return u("2.9.0")}function s(){var n=!1;return n}},8234:function(n,t,e){var r=e("2ead");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var o=e("c69b").default;o("d2d288f0",r,!0,{sourceMap:!1,shadowMode:!1})},"9b36":function(n,t,e){"use strict";e.d(t,"b",(function(){return m})),e.d(t,"c",(function(){return y})),e.d(t,"d",(function(){return g}));e("f1f0"),e("414c"),e("79cc");var r=e("b67b"),o=(e("2aaa"),e("06dc"),e("b4ca"),e("cdf1"),"van-"),u="press-";function c(n,t,e){return n=e+n,t=t.map((function(t){return"".concat(n,"--").concat(t)})),t.unshift(n),t.join(" ")}function i(n,t){t&&("string"===typeof t||"number"===typeof t?n.push(t):Array.isArray(t)?t.forEach((function(t){i(n,t)})):"object"===Object(r["a"])(t)&&Object.keys(t).forEach((function(e){t[e]&&n.push(e)})))}function a(n,t){var e=[];return i(e,t),c(n,e,o)}function f(n,t){var e=[];return i(e,t),c(n,e,u)}function s(n,t,e){if(!e)return f(n,t);var r=[];i(r,t);var o=c(n,r,e),a=c(n,r,u);return"".concat(o," ").concat(a)}e("fa2d");function l(n){var t=Object(r["a"])(n);return"boolean"===t||"number"===t||"string"===t||"undefined"===t||null===n}function d(n,t){return 2===t.length?n(t[0],t[1]):1===t.length?n(t[0]):n()}function p(n){if(1===n.length&&l(n[0]))return n[0];for(var t={},e=0;e<n.length;e++)t["key".concat(e)]=n[e];return JSON.stringify(t)}function b(n){var t={};return function(){var e=p(arguments);return void 0===t[e]&&(t[e]=d(n,arguments)),t[e]}}var h=e("a451"),v=b(a),m=function(){return"undefined"===typeof uni};t["a"]={bem:v,memoize:b,addUnit:h["a"],bem2:f,bem3:s};function y(n,t){if(n>=0&&t>0&&t>=n){var e=t-n+1;return Math.floor(Math.random()*e+n)}return 0}function g(n,t){Object.keys(t).forEach((function(e){n.style[e]=t[e]}))}},"9b89":function(n,t,e){var r=e("ee2b");t=r(!1),t.push([n.i,".demo-wrap[data-v-57f9cf1c]  .section-content{margin:0 20px}",""]),n.exports=t},a451:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return c}));e("948b"),e("e8e7"),e("745e");var r=e("eaec"),o=/^-?\d+(\.\d+)?$/;function u(n){if(null!=n)return o.test("".concat(n))?"".concat(n,"px"):n}function c(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(r["f"])(n)?t?"".concat(n,"px"):Number(n):/(rpx|upx)$/.test(n)?t?"".concat(uni.upx2px(parseInt(n,10)),"px"):Number(uni.upx2px(parseInt(n,10))):t?"".concat(parseInt(n,10),"px"):parseInt(n,10)}},a6bd:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"e",(function(){return a})),e.d(t,"b",(function(){return f})),e.d(t,"c",(function(){return s}));e("f1f0"),e("414c"),e("79cc");var r=e("4b70"),o=e("9b36"),u=e("c073");e.d(t,"d",(function(){return u["e"]}));var c={};function i(){try{var n;Object.keys(c).length||"undefined"===typeof uni||"function"!==typeof(null===(n=uni)||void 0===n?void 0:n.getSystemInfoSync)||(c=uni.getSystemInfoSync())}catch(t){console.log("[getSystemInfoSync] err",t)}return c}function a(n){return setTimeout((function(){n()}),1e3/30)}function f(n,t){Object(r["d"])()&&n.groupSetData?n.groupSetData(t):t()}function s(n){var t=n.selector,e=n.callback,r=n.options;if(Object(o["b"])()){var u=new IntersectionObserver(e,r),c=document.querySelectorAll(t);return c.forEach((function(n){u.observe(n)})),!0}return!1}},bd53:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("8bbf"),o=e.n(r),u=o.a},c073:function(n,t,e){"use strict";e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return a})),e.d(t,"a",(function(){return f})),e.d(t,"c",(function(){return s})),e.d(t,"h",(function(){return l})),e.d(t,"g",(function(){return d})),e.d(t,"b",(function(){return p})),e.d(t,"i",(function(){return b})),e.d(t,"f",(function(){return h}));var r=e("5e66"),o=e("2cd2"),u=(e("2aaa"),e("226c"),e("414c"),e("79cc"),e("bd53"));function c(n){var t=n;return Array.isArray(t)||(t=[n]),t}function i(n,t){var e=c(n);e.forEach((function(n){var t=n.name,e=n.prop;u["a"].prototype[t]=e}))}function a(n){u["a"].nextTick(n)}function f(n,t){var e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=new(u["a"].extend(t))({el:n,propsData:r}),e}function s(){var n;return n=u["a"].prototype.$isServer,n}function l(n){return{provide:function(){return Object(o["a"])({},n,this)}}}function d(n){return{inject:Object(o["a"])({},n,{default:null})}}function p(n){n.$forceUpdate()}var b={props:{value:{type:[String,Boolean],default:""}},computed:{realModelValue:function(){var n="";return n=this.value,n}},methods:{emitModelValue:function(n){this.$emit("input",n)}}};function h(n){u["a"].config.ignoredElements=[].concat(Object(r["a"])(u["a"].config.ignoredElements||[]),Object(r["a"])(n))}},ea61:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{staticClass:"press-link",style:n.linkStyle,on:{click:function(t){return t.stopPropagation(),n.openLink(t)}}},[n._v(" "+n._s(n.text)+" ")])},o=[],u=(e("948b"),{props:{customStyle:{type:String,default:""},color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:15},underline:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""},text:{type:String,default:""}}}),c=e("a451"),i=e("f4d4"),a=(e("a6bd"),{name:"PressLink",mixins:[u],emits:["click"],computed:{linkStyle:function(){var n={color:this.color,fontSize:Object(c["a"])(this.fontSize),lineHeight:Object(c["a"])(Object(c["b"])(this.fontSize)+2),textDecoration:this.underline?"underline":"none"};return Object(i["b"])([n,this.customStyle])}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}}),f=a,s=(e("3eed"),e("2777")),l=Object(s["a"])(f,r,o,!1,null,"38eaaf43",null);t["a"]=l.exports},eaec:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return c})),e.d(t,"e",(function(){return i})),e.d(t,"i",(function(){return f})),e.d(t,"j",(function(){return s})),e.d(t,"k",(function(){return l})),e.d(t,"h",(function(){return d})),e.d(t,"f",(function(){return p})),e.d(t,"g",(function(){return b})),e.d(t,"l",(function(){return h})),e.d(t,"c",(function(){return v})),e.d(t,"d",(function(){return m}));var r=e("b67b"),o=(e("8b4b"),e("f1f0"),e("414c"),e("e8e7"),e("745e"),e("6905"),e("e6c9"),e("f74f"),e("c073")),u="undefined"!==typeof window,c=Object(o["c"])();function i(n){return void 0!==n&&null!==n}function a(n){return"function"===typeof n}function f(n){return null!==n&&"object"===Object(r["a"])(n)}function s(n){return null!==n&&"object"===Object(r["a"])(n)&&!Array.isArray(n)}function l(n){return s(n)&&a(n.then)&&a(n.catch)}function d(n){var t=Object(r["a"])(n);return null!==n&&("object"===t||"function"===t)}function p(n){return/^\d+(\.\d+)?$/.test(n)}function b(n){return/^\d+(\.\d+)?$/.test(n)}function h(n){return/^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(n)}function v(n){0}function m(n){var t=/^[\u4e00-\u9fa5]+$/gi;return t.test(n)}},f4d4:function(n,t,e){"use strict";e.d(t,"b",(function(){return o}));e("0508"),e("06dc"),e("b4ca"),e("f1f0"),e("414c"),e("e8e7"),e("e6c9");function r(n){var t=/[A-Z]/g,e=n.replace(t,(function(n){return"-".concat(n)})).toLowerCase();return e}function o(n){return void 0===n?"":Array.isArray(n)?n.filter((function(n){return null!=n&&""!==n})).map((function(n){return o(n)})).join(";"):"string"===typeof n?n:Object.keys(n).filter((function(t){return null!=n[t]&&""!==n[t]})).map((function(t){return[r(t),[n[t]]].join(":")})).join(";")}t["a"]=o}}]);