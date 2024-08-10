(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0133569f"],{"25f1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-code-input",on:{click:t.clickWrap}},[t._l(t.codeLength,(function(e,r){return n("div",{key:r,staticClass:"press-code-input__item",style:[t.itemStyle(r)]},[t.dot&&t.codeArray.length>r?n("div",{staticClass:"press-code-input__item__dot"}):n("span",{style:{fontSize:t.addUnit(t.fontSize),fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(" "+t._s(t.codeArray[r]||"")+" ")]),"line"===t.mode?n("div",{staticClass:"press-code-input__item__line",style:[t.lineStyle]}):t._e(),t.isFocus&&t.codeArray.length===r?n("div",{staticClass:"press-code-input__item__cursor",style:{backgroundColor:t.color}}):t._e()])})),n("input",{class:["press-code-input__input",{"press-code-input__input--disabled":t.disabledKeyboard}],style:{height:t.addUnit(t.size)},attrs:{disabled:t.disabledKeyboard,type:"number",focus:t.focus,maxlength:t.maxLength,adjustPosition:t.adjustPosition},domProps:{value:t.inputValue},on:{input:t.inputHandler,focus:function(e){t.isFocus=!0},blur:function(e){t.isFocus=!1},click:t.clickInput}})],2)},i=[],o=(n("2aaa"),n("948b"),n("e8e7"),n("e6c9"),n("4c47")),c=(n("745e"),n("2b28")),a={props:{adjustPosition:{type:Boolean,default:!0},maxLength:{type:[String,Number],default:6},dot:{type:Boolean,default:!1},mode:{type:String,default:"box"},hairline:{type:Boolean,default:!1},space:{type:[String,Number],default:10},value:{type:[String,Number],default:""},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:18},size:{type:[String,Number],default:35},disabledKeyboard:{type:Boolean,default:!1},borderColor:{type:String,default:"#c9cacc"},disabledDot:{type:Boolean,default:!0}}};function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c["c"]("".concat(t))?e?"".concat(t,"px"):Number(t):/(rpx|upx)$/.test("".concat(t))?e?"".concat(uni.upx2px(parseInt("".concat(t))),"px"):Number(uni.upx2px(parseInt("".concat(t)))):e?"".concat(parseInt("".concat(t)),"px"):parseInt("".concat(t))}var s=n("699c"),d={name:"PressCodeInput",mixins:[a],emits:["change","finish","input","click","click-input"],data:function(){return{inputValue:"",isFocus:this.focus}},computed:{codeLength:function(){var t=new Array(Number(this.maxLength));return t},itemStyle:function(){var t=this;return function(e){var n={width:Object(o["a"])(t.size),height:Object(o["a"])(t.size)};return"box"===t.mode&&(n.border="".concat(t.hairline?.5:1,"px solid ").concat(t.borderColor),0===u(t.space)&&(0===e&&(n.borderTopLeftRadius="3px",n.borderBottomLeftRadius="3px"),e===t.codeLength.length-1&&(n.borderTopRightRadius="3px",n.borderBottomRightRadius="3px"),e!==t.codeLength.length-1&&(n.borderRight="none"))),e!==t.codeLength.length-1?n.marginRight=Object(o["a"])(t.space):n.marginRight=0,n}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var t={};return t.height=this.hairline?"2px":"4px",t.width=Object(o["a"])(this.size),t.backgroundColor=this.borderColor,t}},watch:{value:{immediate:!0,handler:function(t){this.inputValue=String(t).substring(0,this.maxLength)||""}}},methods:{addUnit:o["a"],inputHandler:function(t){var e=this,n=t.detail||t.target,r=n.value;this.inputValue=r,this.disabledDot&&Object(s["d"])((function(){e.inputValue=r.replace(".","")})),this.$emit("change",r),this.$emit("input",r),String(r).length>=Number(this.maxLength)&&this.$emit("finish",r)},clickWrap:function(){this.$emit("click")},clickInput:function(){this.$emit("click-input")}}},l=d,p=(n("9651"),n("2777")),f=Object(p["a"])(l,r,i,!1,null,"55a0d062",null);e["a"]=f.exports},"291e":function(t,e,n){"use strict";var r=n("4088"),i=n("61db"),o=n("b15a"),c=n("cc40"),a=n("960e"),u=n("9d48"),s=n("c5ba"),d=n("e0a5").f,l=n("7487"),p=n("8403"),f=n("88f1"),h=n("7abc"),b=n("6610"),g=n("4ec8"),v=n("1b66"),m=n("5b46"),y=n("35e4"),x=n("f522").enforce,_=n("6379"),k=n("0529"),S=n("b387"),w=n("5ecb"),j=k("match"),E=i.RegExp,I=E.prototype,R=i.SyntaxError,O=o(I.exec),A=o("".charAt),C=o("".replace),L=o("".indexOf),B=o("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,z=/a/g,D=new E($)!==$,T=b.MISSED_STICKY,V=b.UNSUPPORTED_Y,M=r&&(!D||T||S||w||m((function(){return z[j]=!1,E($)!==$||E(z)===z||"/a/i"!==String(E($,"i"))}))),P=function(t){for(var e,n=t.length,r=0,i="",o=!1;r<=n;r++)e=A(t,r),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),i+=e):i+="[\\s\\S]":i+=e+A(t,++r);return i},K=function(t){for(var e,n=t.length,r=0,i="",o=[],c=s(null),a=!1,u=!1,d=0,l="";r<=n;r++){if(e=A(t,r),"\\"===e)e+=A(t,++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:O(N,B(t,r+1))&&(r+=2,u=!0),i+=e,d++;continue;case">"===e&&u:if(""===l||y(c,l))throw new R("Invalid capture group name");c[l]=!0,o[o.length]=[l,d],u=!1,l="";continue}u?l+=e:i+=e}return[i,o]};if(c("RegExp",M)){for(var U=function(t,e){var n,r,i,o,c,s,d=l(I,this),b=p(t),g=void 0===e,v=[],m=t;if(!d&&b&&g&&t.constructor===U)return t;if((b||l(I,t))&&(t=t.source,g&&(e=h(m))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),m=t,S&&"dotAll"in $&&(r=!!e&&L(e,"s")>-1,r&&(e=C(e,/s/g,""))),n=e,T&&"sticky"in $&&(i=!!e&&L(e,"y")>-1,i&&V&&(e=C(e,/y/g,""))),w&&(o=K(t),t=o[0],v=o[1]),c=a(E(t,e),d?this:I,U),(r||i||v.length)&&(s=x(c),r&&(s.dotAll=!0,s.raw=U(P(t),n)),i&&(s.sticky=!0),v.length&&(s.groups=v)),t!==m)try{u(c,"source",""===m?"(?:)":m)}catch(y){}return c},F=d(E),q=0;F.length>q;)g(U,E,F[q++]);I.constructor=U,U.prototype=I,v(i,"RegExp",U,{constructor:!0})}_("RegExp")},"2a64":function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return d}));n("cdf1");var r=n("699c");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("."),r=e.split("."),i=Math.max(n.length,r.length);while(n.length<i)n.push("0");while(r.length<i)r.push("0");for(var o=0;o<i;o++){var c=parseInt(n[o],10),a=parseInt(r[o],10);if(c>a)return 1;if(c<a)return-1}return 0}function o(t){var e=Object(r["a"])();return i(e.SDKVersion,t)>=0}function c(){return o("2.9.3")}function a(){return o("2.10.3")}function u(){return o("2.4.0")}function s(){return o("2.9.0")}function d(){var t=!1;return t}},"2b28":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return a}));n("b67b"),n("f1f0"),n("414c"),n("291e"),n("5654"),n("e8e7"),n("5fb0"),n("745e"),n("6905"),n("e6c9");function r(t){return/^[+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t)}function i(t){return"[object Object]"===Object.prototype.toString.call(t)}function o(t){return"function"===typeof t}function c(t){return i(t)&&o(t.then)&&o(t.catch)}function a(t){var e=t.split("?")[0],n=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;return n.test(e)}function u(t){var e=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;return e.test(t)}},5654:function(t,e,n){"use strict";var r=n("4088"),i=n("b387"),o=n("0d4b"),c=n("192c"),a=n("f522").get,u=RegExp.prototype,s=TypeError;r&&i&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!a(this).dotAll;throw new s("Incompatible receiver, RegExp required")}}})},"5fb0":function(t,e,n){"use strict";var r=n("4088"),i=n("6610").MISSED_STICKY,o=n("0d4b"),c=n("192c"),a=n("f522").get,u=RegExp.prototype,s=TypeError;r&&i&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!a(this).sticky;throw new s("Incompatible receiver, RegExp required")}}})},"699c":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return d}));n("f1f0"),n("414c"),n("79cc");var r=n("2a64"),i=n("d2e1"),o=n("f22d");n.d(e,"d",(function(){return o["d"]}));var c={};function a(){try{var t;Object.keys(c).length||"undefined"===typeof uni||"function"!==typeof(null===(t=uni)||void 0===t?void 0:t.getSystemInfoSync)||(c=uni.getSystemInfoSync())}catch(e){console.log("[getSystemInfoSync] err",e)}return c}function u(t){return setTimeout((function(){t()}),1e3/30)}function s(t,e){Object(r["d"])()&&t.groupSetData?t.groupSetData(e):e()}function d(t){var e=t.selector,n=t.callback,r=t.options;if(Object(i["b"])()){var o=new IntersectionObserver(n,r),c=document.querySelectorAll(e);return c.forEach((function(t){o.observe(t)})),!0}return!1}},"6beb":function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".press-code-input[data-v-55a0d062]{overflow:hidden}.press-code-input[data-v-55a0d062],.press-code-input__item[data-v-55a0d062]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.press-code-input__item[data-v-55a0d062]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-code-input__item__text[data-v-55a0d062]{font-size:15px;color:#606266}.press-code-input__item__dot[data-v-55a0d062]{width:7px;height:7px;border-radius:100px;background-color:#606266}.press-code-input__item__line[data-v-55a0d062]{position:absolute;bottom:0;height:4px;border-radius:100px;width:40px;background-color:#606266}.press-code-input__item__cursor[data-v-55a0d062]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:1px;height:40%;-webkit-animation:press-cursor-flicker-data-v-55a0d062 1s infinite;animation:press-cursor-flicker-data-v-55a0d062 1s infinite}.press-code-input__input[data-v-55a0d062]{position:absolute;left:-750px;width:1500px;top:0;background-color:transparent;text-align:left;border:0;outline:none}.press-code-input__input--disabled[data-v-55a0d062]{pointer-events:none}@-webkit-keyframes press-cursor-flicker-data-v-55a0d062{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes press-cursor-flicker-data-v-55a0d062{0%{opacity:0}50%{opacity:1}to{opacity:0}}",""]),t.exports=e},8324:function(t,e,n){var r=n("6beb");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("c69b").default;i("614353fe",r,!0,{sourceMap:!1,shadowMode:!1})},9651:function(t,e,n){"use strict";n("8324")},f22d:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"h",(function(){return f})),n.d(e,"e",(function(){return h}));var r=n("5e66"),i=n("2cd2"),o=(n("2aaa"),n("226c"),n("414c"),n("79cc"),n("516d"));function c(t){var e=t;return Array.isArray(e)||(e=[t]),e}function a(t,e){var n=c(t);n.forEach((function(t){var e=t.name,n=t.prop;o["a"].prototype[e]=n}))}function u(t){o["a"].nextTick(t)}function s(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=new(o["a"].extend(e))({el:t,propsData:r}),n}function d(t){return{provide:function(){return Object(i["a"])({},t,this)}}}function l(t){return{inject:Object(i["a"])({},t,{default:null})}}function p(t){t.$forceUpdate()}var f={props:{value:{type:[String,Boolean],default:""}},computed:{realModelValue:function(){var t="";return t=this.value,t}},methods:{emitModelValue:function(t){this.$emit("input",t)}}};function h(t){o["a"].config.ignoredElements=[].concat(Object(r["a"])(o["a"].config.ignoredElements||[]),Object(r["a"])(t))}}}]);