(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52412ed3"],{"1cfb":function(t,e,i){"use strict";i.d(e,"e",(function(){return s})),i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return f})),i.d(e,"a",(function(){return d}));var a=i("5e66"),o=(i("b4ca"),i("414c"),i("e8e7"),i("881c")),r=i("7616"),n=i("7bbb");function s(){if(Object(r["b"])()){var t=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),e=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height);return{windowWidth:t,windowHeight:e,windowTop:0,windowBottom:0}}var i=uni.getSystemInfoSync(),a=i.windowWidth,o=i.windowHeight,n=i.windowTop,s=i.windowBottom;return{windowWidth:a,windowHeight:o,windowTop:n,windowBottom:s}}function l(){if(Object(r["b"])())return 0;var t=Object(n["a"])(),e=t.statusBarHeight;return e}function c(t,e){return new Promise((function(i){var a=Object(o["a"])(e),r=t.$el;if(r){var n=r.querySelector(a);return n||i({}),void i({scrollHeight:n.scrollHeight,scrollTop:n.scrollTop})}uni.createSelectorQuery().in(t).select(a).fields({scrollOffset:!0},(function(t){i(t)})).exec()}))}function f(t,e){return new Promise((function(i){var a=t.$el;if(a){var o=a.querySelector(e);o||i({});var r=o.getBoundingClientRect();i(r)}else uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return i(t[0])}))}))}function d(t,e){return new Promise((function(i){var o=t.$el;if(o){var r=o.querySelectorAll(e),n=Object(a["a"])(r).map((function(t){return t.getBoundingClientRect()}));i(n)}else uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i(t[0])}))}))}},"2fb0":function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));var a=i("fbf6"),o=i("7616"),r=i("4fd9");function n(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];a["b"]||t.addEventListener(e,i,!!r["b"]&&{capture:!1,passive:o})}function s(t,e,i){a["b"]||t.removeEventListener(e,i)}function l(t){return c(t).value||""}function c(t){var e,i,a;return Object(o["b"])()?{value:(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"",scrollTop:null===t||void 0===t||null===(i=t.target)||void 0===i?void 0:i.scrollTop,scrollHeight:null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.scrollHeight}:t.detail}},"363e":function(t,e,i){var a=i("ee2b");e=a(!1),e.push([t.i,".press-cell--clickable[data-v-6e085afb]{cursor:pointer}",""]),t.exports=e},"424e":function(t,e,i){var a=i("363e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("c69b").default;o("03aac9fc",a,!0,{sourceMap:!1,shadowMode:!1})},"495f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.cellClass,style:t.customStyle,attrs:{"hover-class":["press-cell--hover",t.hoverClass],"hover-stay-time":"70"},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[t.icon?i("PressIconPlus",{class:[t.leftIconBaseClass],attrs:{name:t.icon,"custom-class":t.leftIconCustomClass}}):t._t("icon"),i("div",{staticClass:"press-cell__title",class:t.titleClass,style:t.cTitleStyle},[t.title?[t._v(" "+t._s(t.title)+" ")]:t._t("title"),t.label||t.useLabelSlot?i("div",{staticClass:"press-cell__label",class:t.labelClass},[t.useLabelSlot?t._t("label"):t.label?[t._v(" "+t._s(t.label)+" ")]:t._e()],2):t._e()],2),i("div",{staticClass:"press-cell__value",class:t.valueClass},[t.value||0===t.value?[t._v(" "+t._s(t.value)+" ")]:t._t("default")],2),t.isLink?i("PressIconPlus",{class:[t.rightIconBaseClass],attrs:{name:t.arrowDirection?"arrow-"+t.arrowDirection:"arrow","custom-class":t.rightIconCustomClass}}):t._t("right-icon"),t._t("extra")],2)},o=[],r=i("69b0"),n=(i("2aaa"),i("ee26")),s=i("9157"),l=i("7616"),c=i("feb9"),f=i("b954");function d(t){return Object(c["b"])([{"max-width":Object(f["a"])(t.titleWidth),"min-width":Object(f["a"])(t.titleWidth)},t.titleStyle])}var p={titleStyle:d},b=i("c17b"),h=i("2fb0"),u={name:"PressCell",components:{PressIconPlus:n["a"]},options:Object(r["a"])(Object(r["a"])({},b["b"]),{},{styleIsolation:"shared"}),mixins:[s["a"]],props:Object(r["a"])({titleClass:{type:String,default:""},labelClass:{type:String,default:""},valueClass:{type:String,default:""},rightIconClass:{type:String,default:""},hoverClass:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:""},label:{type:String,default:""},center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleWidth:{type:String,default:""},customStyle:{type:String,default:""},arrowDirection:{type:String,default:""},useTitleSlot:Boolean,useLabelSlot:Boolean,border:{type:Boolean,default:!0},type:{type:String,default:""},titleStyle:{type:String,default:""}},b["c"]),emits:["click"],computed:{cellClass:function(){var t=this.size,e=this.center,i=this.required,a=this.border,o=this.isLink,r=this.clickable,n=this.customClass,s=this.type;return"".concat(n," ").concat(l["a"].bem2("cell",[t,{center:e,required:i,borderless:!a,clickable:o||r,"e-sport":"e-sport"===s}]))},cTitleStyle:function(){var t=this.titleWidth,e=this.titleStyle;return p.titleStyle({titleWidth:t,titleStyle:e})},leftIconBaseClass:function(){return"press-cell__left-icon"},leftIconCustomClass:function(){var t="";return t},rightIconBaseClass:function(){return"press-cell__right-icon"},rightIconCustomClass:function(){var t=this.rightIconClass;return t}},mounted:function(){},methods:{onClick:function(t){this.$emit("click",Object(h["a"])(t)),this.jumpLink()}}},v=u,g=(i("b93c"),i("e256"),i("2777")),x=Object(g["a"])(v,a,o,!1,null,"6e085afb",null);e["a"]=x.exports},"4fd9":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=!1;try{var o={};Object.defineProperty(o,"passive",{get:function(){return a=!0,!0}}),window.addEventListener("test-passive",(function(){}),o)}catch(s){}var r=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!a&&{passive:t}},n=r()},5229:function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return f}));i("cdf1");var a=i("7bbb");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=t.split("."),a=e.split("."),o=Math.max(i.length,a.length);while(i.length<o)i.push("0");while(a.length<o)a.push("0");for(var r=0;r<o;r++){var n=parseInt(i[r],10),s=parseInt(a[r],10);if(n>s)return 1;if(n<s)return-1}return 0}function r(t){var e=Object(a["a"])();return o(e.SDKVersion,t)>=0}function n(){return r("2.9.3")}function s(){return r("2.10.3")}function l(){return r("2.4.0")}function c(){return r("2.9.0")}function f(){var t=!1;return t}},6792:function(t,e,i){var a=i("ee2b");e=a(!1),e.push([t.i,'.van-ellipsis[data-v-6e085afb]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-6e085afb]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-6e085afb],.van-multi-ellipsis--l3[data-v-6e085afb]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-6e085afb]{-webkit-line-clamp:3}.van-clearfix[data-v-6e085afb]:after{clear:both;content:"";display:table}.van-hairline[data-v-6e085afb],.van-hairline--bottom[data-v-6e085afb],.van-hairline--left[data-v-6e085afb],.van-hairline--right[data-v-6e085afb],.van-hairline--surround[data-v-6e085afb],.van-hairline--top[data-v-6e085afb],.van-hairline--top-bottom[data-v-6e085afb]{position:relative}.van-hairline--bottom[data-v-6e085afb]:after,.van-hairline--left[data-v-6e085afb]:after,.van-hairline--right[data-v-6e085afb]:after,.van-hairline--surround[data-v-6e085afb]:after,.van-hairline--top-bottom[data-v-6e085afb]:after,.van-hairline--top[data-v-6e085afb]:after,.van-hairline[data-v-6e085afb]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-6e085afb]:after{border-top-width:1px}.van-hairline--left[data-v-6e085afb]:after{border-left-width:1px}.van-hairline--right[data-v-6e085afb]:after{border-right-width:1px}.van-hairline--bottom[data-v-6e085afb]:after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-6e085afb]:after{border-width:1px 0}.van-hairline--surround[data-v-6e085afb]:after{border-width:1px}.press-ellipsis[data-v-6e085afb]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-6e085afb]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-6e085afb],.press-multi-ellipsis--l3[data-v-6e085afb]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-6e085afb]{-webkit-line-clamp:3}.press-clearfix[data-v-6e085afb]:after{clear:both;content:"";display:table}.press-hairline[data-v-6e085afb],.press-hairline--bottom[data-v-6e085afb],.press-hairline--left[data-v-6e085afb],.press-hairline--right[data-v-6e085afb],.press-hairline--surround[data-v-6e085afb],.press-hairline--top[data-v-6e085afb],.press-hairline--top-bottom[data-v-6e085afb]{position:relative}.press-hairline--bottom[data-v-6e085afb]:after,.press-hairline--left[data-v-6e085afb]:after,.press-hairline--right[data-v-6e085afb]:after,.press-hairline--surround[data-v-6e085afb]:after,.press-hairline--top-bottom[data-v-6e085afb]:after,.press-hairline--top[data-v-6e085afb]:after,.press-hairline[data-v-6e085afb]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-6e085afb]:after{border-top-width:1px}.press-hairline--left[data-v-6e085afb]:after{border-left-width:1px}.press-hairline--right[data-v-6e085afb]:after{border-right-width:1px}.press-hairline--bottom[data-v-6e085afb]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-6e085afb]:after{border-width:1px 0}.press-hairline--surround[data-v-6e085afb]:after{border-width:1px}.press-cell--e-sport[data-v-6e085afb]{--cell-background-color:hsla(0,0%,100%,0.85);--cell-active-color:#f5f6fa;--cell-height:1.12rem;--cell-line-height:unset;--cell-vertical-padding:0.32rem;--cell-horizontal-padding:0.32rem;--cell-text-color:#09134e;--cell-font-size:0.32rem;--cell-value-font-size:0.28rem;--cell-value-color:#9299c6;--cell-label-font-size:0.2rem;--cell-label-color:#9299c6;--cell-label-margin-top:0;--cell-icon-size:0.24rem;--cell-right-icon-color:#9299c6}.press-cell[data-v-6e085afb]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:var(--cell-vertical-padding,10px) var(--cell-horizontal-padding,16px);font-size:var(--cell-font-size,14px);line-height:var(--cell-line-height,24px);height:var(--cell-height,auto);color:var(--cell-text-color,#323233);background-color:var(--cell-background-color,#fff)}.press-cell[data-v-6e085afb],.press-cell[data-v-6e085afb]:after{-webkit-box-sizing:border-box;box-sizing:border-box}.press-cell[data-v-6e085afb]:after{position:absolute;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.press-cell--borderless[data-v-6e085afb]:after{display:none}.press-cell-group[data-v-6e085afb]{background-color:var(--cell-background-color,#fff)}.press-cell__label[data-v-6e085afb]{margin-top:var(--cell-label-margin-top,3px);font-size:var(--cell-label-font-size,12px);line-height:var(--cell-label-line-height,18px);color:var(--cell-label-color,#969799)}.press-cell__value[data-v-6e085afb]{overflow:hidden;text-align:right;vertical-align:middle;color:var(--cell-value-color,#969799);font-size:var(--cell-value-font-size,12px)}.press-cell__title[data-v-6e085afb],.press-cell__value[data-v-6e085afb]{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:var(--cell-line-height,24px)}.press-cell__title[data-v-6e085afb]:empty,.press-cell__value[data-v-6e085afb]:empty{display:none}.press-cell__left-icon[data-v-6e085afb],.press-cell__right-icon[data-v-6e085afb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:var(--cell-line-height,24px);font-size:var(--cell-icon-size,16px)}.press-cell__left-icon[data-v-6e085afb]{margin-right:var(--padding-base,4px);vertical-align:middle;line-height:var(--cell-line-height,24px)}.press-cell__right-icon[data-v-6e085afb]{margin-left:var(--padding-base,4px);color:var(--cell-right-icon-color,#969799);line-height:var(--cell-line-height,24px)}.press-cell--clickable.press-cell--hover[data-v-6e085afb],.press-cell--clickable[data-v-6e085afb]:active{background-color:var(--cell-active-color,#f2f3f5)}.press-cell--required[data-v-6e085afb]{overflow:visible}.press-cell--required[data-v-6e085afb]:before{position:absolute;content:"*";left:var(--padding-xs,8px);font-size:var(--cell-font-size,14px);color:var(--cell-required-color,#ee0a24)}.press-cell--center[data-v-6e085afb]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-cell--large[data-v-6e085afb]{padding-top:var(--cell-large-vertical-padding,12px);padding-bottom:var(--cell-large-vertical-padding,12px)}.press-cell--large .press-cell__title[data-v-6e085afb]{font-size:var(--cell-large-title-font-size,16px)}.press-cell--large .press-cell__value[data-v-6e085afb]{font-size:var(--cell-large-value-font-size,16px)}.press-cell--large .press-cell__label[data-v-6e085afb]{font-size:var(--cell-large-label-font-size,14px)}',""]),t.exports=e},"7bbb":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return l})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return f}));i("f1f0"),i("414c"),i("79cc");var a=i("5229"),o=i("7616"),r=i("264a");i.d(e,"d",(function(){return r["e"]}));var n={};function s(){try{var t;Object.keys(n).length||"undefined"===typeof uni||"function"!==typeof(null===(t=uni)||void 0===t?void 0:t.getSystemInfoSync)||(n=uni.getSystemInfoSync())}catch(e){console.log("[getSystemInfoSync] err",e)}return n}function l(t){return setTimeout((function(){t()}),1e3/30)}function c(t,e){Object(a["d"])()&&t.groupSetData?t.groupSetData(e):e()}function f(t){var e=t.selector,i=t.callback,a=t.options;if(Object(o["b"])()){var r=new IntersectionObserver(i,a),n=document.querySelectorAll(e);return n.forEach((function(t){r.observe(t)})),!0}return!1}},"881c":function(t,e,i){"use strict";i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return n}));i("e8e7"),i("745e"),i("1699");var a=/scroll|auto|overlay/i;function o(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var o=window.getComputedStyle(i),r=o.overflowY;if(a.test(r))return i;i=i.parentNode}return e}function r(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function n(t){var e=t;return t.startsWith("#")||(e="#".concat(t)),e="".concat(e," > .uni-scroll-view > .uni-scroll-view"),e}},9157:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("cdf1");var a=i("7616"),o={props:{url:{type:String,default:""},linkType:{type:String,default:"navigateTo"}},methods:{jumpLink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"url",e=this[t];if(e){var i,o;if(Object(a["b"])())return void(null===(i=this.$router)||void 0===i||null===(o=i.push)||void 0===o||o.call(i,e));var r=this.linkType||"navigateTo";"navigateTo"===r&&getCurrentPages().length>9?uni.redirectTo({url:e}):uni[r]({url:e})}}}}},b93c:function(t,e,i){"use strict";i("f12b")},bf97:function(t,e,i){"use strict";i("c896")},c896:function(t,e,i){var a=i("f5e0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("c69b").default;o("d0693530",a,!0,{sourceMap:!1,shadowMode:!1})},d442:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"press-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?i("div",{staticClass:"press-fab",class:{"press-fab--leftBottom":t.leftBottom,"press-fab--rightBottom":t.rightBottom,"press-fab--leftTop":t.leftTop,"press-fab--rightTop":t.rightTop},style:{right:t.btnSwitchPos.x+"px",bottom:t.btnSwitchPos.y+"px"}},[i("div",{staticClass:"press-fab__content",class:{"press-fab__content--left":"left"===t.horizontal,"press-fab__content--right":"right"===t.horizontal,"press-fab__content--flexDirection":"vertical"===t.direction,"press-fab__content--flexDirectionStart":t.flexDirectionStart,"press-fab__content--flexDirectionEnd":t.flexDirectionEnd,"press-fab__content--other-platform":!t.isAndroidNVue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("div",{staticClass:"press-fab__item press-fab__item--first"}):t._e(),t._l(t.content,(function(e,a){return i("div",{key:a,staticClass:"press-fab__item",class:{"press-fab__item--active":t.isShow},on:{click:function(i){return t.onItemClick(a,e)}}},[i("img",{staticClass:"press-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"aspectFit"}}),i("span",{staticClass:"press-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(" "+t._s(e.text)+" ")])])})),t.flexDirectionEnd||t.horizontalRight?i("div",{staticClass:"press-fab__item press-fab__item--first"}):t._e()],2)]):t._e(),i("div",{staticClass:"press-fab__circle press-fab__plus",class:{"press-fab__content--other-platform":!t.isAndroidNVue},style:{"background-color":t.styles.buttonColor,right:t.btnSwitchPos.x+"px",bottom:t.btnSwitchPos.y+"px"},on:{click:t.onClick,touchstart:t.onTouchStart,touchend:t.onTouchEnd,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onTouchMove(e)}}},[t._t("default",[i("press-icon-plus",{staticClass:"press-fab-circle-icon",class:{"press-fab__plus--active":t.isShow&&t.content.length>0},attrs:{name:"cross",color:t.styles.iconColor,size:t.styles.iconFontSize}})])],2)])},o=[],r=i("9b85"),n=(i("948b"),i("1cfb")),s=i("ee26"),l={name:"PressFab",components:{PressIconPlus:s["a"]},props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0},top:{type:Number,default:0},bottomThreshold:{type:Number,default:20},initX:{type:Number,default:12},initY:{type:Number,default:62}},emits:["fabClick","trigger"],data:function(){var t="other",e={hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0};return{fabShow:!1,isShow:!1,isAndroidNVue:"android"===t,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",iconFontSize:32},btnSwitchPos:{x:0,y:0},fabSize:{width:55,height:55},switchPos:e}},computed:{contentWidth:function(){return"".concat(55*(this.content.length+1)+15,"px")},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler:function(t){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern),this.btnSwitchPos={x:this.initX,y:this.initY},this.switchPos.x=this.btnSwitchPos.x,this.switchPos.y=this.btnSwitchPos.y},mounted:function(){var t=this;Object(n["b"])(this,".press-fab__plus").then((function(e){t.fabSize.width=e.width,t.fabSize.height=e.height}))},methods:{getSwitchButtonSafeAreaXY:function(t,e){var i=this.fabSize,a=this.top,o=this.bottomThreshold,r=Object(n["e"])(),s=r.windowWidth,l=r.windowHeight,c=r.windowTop,f=r.windowBottom,d=s,p=l-a;return t+i.width>d&&(t=d-i.width),e+i.height-c>p&&(e=p-i.height+c),t<0&&(t=0),e<o+f&&(e=o+f),[t,e]},onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},onItemClick:function(t,e){this.isShow&&this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin},onTouchStart:function(t){this.switchPos.startX=t.touches[0].pageX,this.switchPos.startY=t.touches[0].pageY},onTouchEnd:function(){this.switchPos.hasMoved&&(this.switchPos.startX=0,this.switchPos.startY=0,this.switchPos.hasMoved=!1,this.setSwitchPosition(this.switchPos.endX,this.switchPos.endY))},onTouchMove:function(t){if(!(t.touches.length<=0)){var e=t.touches[0].pageX-this.switchPos.startX,i=t.touches[0].pageY-this.switchPos.startY,a=Math.floor(this.switchPos.x-e),o=Math.floor(this.switchPos.y-i),n=this.getSwitchButtonSafeAreaXY(a,o),s=Object(r["a"])(n,2);a=s[0],o=s[1],this.btnSwitchPos.x=a,this.btnSwitchPos.y=o,this.switchPos.endX=a,this.switchPos.endY=o,this.switchPos.hasMoved=!0,t.preventDefault(),t.stopPropagation()}},setSwitchPosition:function(t,e){var i=this.getSwitchButtonSafeAreaXY(t,e),a=Object(r["a"])(i,2);t=a[0],e=a[1],this.switchPos.x=t,this.switchPos.y=e,this.btnSwitchPos.x=t,this.btnSwitchPos.y=e}}},c=l,f=(i("bf97"),i("2777")),d=Object(f["a"])(c,a,o,!1,null,"05c30e67",null);e["a"]=d.exports},e256:function(t,e,i){"use strict";i("424e")},f12b:function(t,e,i){var a=i("6792");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("c69b").default;o("6cfb4a71",a,!0,{sourceMap:!1,shadowMode:!1})},f5e0:function(t,e,i){var a=i("ee2b");e=a(!1),e.push([t.i,".press-cursor-point[data-v-05c30e67]{cursor:pointer}.press-fab[data-v-05c30e67]{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:10;border-radius:45px;-webkit-box-shadow:0 1px 5px 2px rgba(0,0,0,.3);box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.press-fab--active[data-v-05c30e67]{opacity:1}.press-fab--leftBottom[data-v-05c30e67]{bottom:30px;bottom:calc(30px + var(--window-bottom))}.press-fab--leftBottom[data-v-05c30e67],.press-fab--leftTop[data-v-05c30e67]{left:15px;left:calc(15px + var(--window-left))}.press-fab--leftTop[data-v-05c30e67]{top:30px;top:calc(30px + var(--window-top))}.press-fab--rightBottom[data-v-05c30e67]{bottom:30px;bottom:calc(30px + var(--window-bottom))}.press-fab--rightBottom[data-v-05c30e67],.press-fab--rightTop[data-v-05c30e67]{right:15px;right:calc(15px + var(--window-right))}.press-fab--rightTop[data-v-05c30e67]{top:30px;top:calc(30px + var(--window-top))}.press-fab__circle[data-v-05c30e67]{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:45px;z-index:11}.press-fab__circle--leftBottom[data-v-05c30e67]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.press-fab__circle--leftTop[data-v-05c30e67]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.press-fab__circle--rightBottom[data-v-05c30e67]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.press-fab__circle--rightTop[data-v-05c30e67]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.press-fab__circle--left[data-v-05c30e67]{left:0}.press-fab__circle--right[data-v-05c30e67]{right:0}.press-fab__circle--top[data-v-05c30e67]{top:0}.press-fab__circle--bottom[data-v-05c30e67]{bottom:0}.press-fab__plus[data-v-05c30e67]{font-weight:700}.press-fab__plus--active[data-v-05c30e67]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.press-fab .press-fab-circle-icon[data-v-05c30e67]{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.press-fab__content[data-v-05c30e67]{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-radius:55px;overflow:hidden;-webkit-transition-property:width,height;transition-property:width,height;-webkit-transition-duration:.2s;transition-duration:.2s;width:55px;border-color:#ddd;border-width:1rpx;border-style:solid}.press-fab__content--other-platform[data-v-05c30e67]{border-width:0;-webkit-box-shadow:0 1px 5px 2px rgba(0,0,0,.3);box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.press-fab__content--left[data-v-05c30e67]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.press-fab__content--right[data-v-05c30e67]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.press-fab__content--flexDirection[data-v-05c30e67]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.press-fab__content--flexDirection[data-v-05c30e67],.press-fab__content--flexDirectionStart[data-v-05c30e67]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.press-fab__content--flexDirectionStart[data-v-05c30e67]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.press-fab__content--flexDirectionEnd[data-v-05c30e67]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.press-fab__content--flexDirectionEnd[data-v-05c30e67],.press-fab__item[data-v-05c30e67]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.press-fab__item[data-v-05c30e67]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:55px;height:55px;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.press-fab__item--active[data-v-05c30e67]{opacity:1}.press-fab__item-image[data-v-05c30e67]{width:20px;height:20px;margin-bottom:4px}.press-fab__item-text[data-v-05c30e67]{color:#fff;font-size:12px;line-height:12px;margin-top:2px}.press-fab__item--first[data-v-05c30e67]{width:55px}",""]),t.exports=e}}]);