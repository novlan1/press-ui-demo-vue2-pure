(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b103677e"],{"0b75":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PressTransition",{attrs:{mode:"fade",show:t.show,duration:t.fade?t.durationTime:0,"custom-style":"display: inline-block;"+t.transitionStyle}},[a("div",{staticClass:"press-image",style:t.wrapStyle,on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[t.isError?t._e():[t.isNotInUni?a("InnerImage",{staticClass:"press-image__image",style:{borderRadius:t.round?"10000px":t.addUnit(t.radius),width:t.addUnit(t.width),height:t.addUnit(t.height)},attrs:{src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad},on:{error:t.onErrorHandler,load:t.onLoadHandler}}):t._e(),t.isNotInUni?t._e():a("image",{staticClass:"press-image__image",style:{borderRadius:t.round?"10000px":t.addUnit(t.radius),width:t.addUnit(t.width),height:t.addUnit(t.height)},attrs:{src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad},on:{error:t.onErrorHandler,load:t.onLoadHandler}})],t.showLoading&&t.loading?a("div",{staticClass:"press-image__loading",style:{borderRadius:t.round?"50%":t.addUnit(t.radius),backgroundColor:t.backgroundColor,width:t.addUnit(t.width),height:t.addUnit(t.height)}},[t._t("loading",[a("PressIconPlus",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})])],2):t._e(),t.showError&&t.isError&&!t.loading?a("div",{staticClass:"press-image__error",style:{borderRadius:t.round?"50%":t.addUnit(t.radius),width:t.addUnit(t.width),height:t.addUnit(t.height)}},[t._t("error",[a("PressIconPlus",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})])],2):t._e()],2)])},r=[],n=a("69b0"),o=(a("948b"),{props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},width:{type:[String,Number],default:300},height:{type:[String,Number],default:225},round:{type:Boolean,default:!1},radius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"photo-fail"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},backgroundColor:{type:String,default:"#f3f4f6"},customStyle:{type:String,default:""},transitionStyle:{type:String,default:""}}}),s=a("4c47"),c=a("53c7"),d=a("d2e1"),l=a("207f"),u=a("52f7"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isVue2?a("uni-image",t._g({},t.$listeners),[a("div",{ref:"content",style:t.style}),"widthFix"===t.mode||"heightFix"===t.mode?a("div",{ref:"sensor",on:{resize:function(e){return t._fixSize()}}}):t._e()]):a("uni-image",t._b({},"uni-image",t.$attrs,!1),[a("div",{ref:"content",style:t.style}),"widthFix"===t.mode||"heightFix"===t.mode?a("div",{ref:"sensor",on:{resize:function(e){return t._fixSize()}}}):t._e()])},h=[],p=a("b67b"),v=a("f22d");function g(t){return("undefined"===typeof navigator||Object(p["a"])(navigator))&&"Google Inc."===navigator.vendor&&t>10&&(t=2*Math.round(t/2)),t}Object(d["b"])()&&Object(v["e"])(["uni-image"],app);var m={name:"Image",props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},lazyLoad:{type:[Boolean,String],default:!1},draggable:{type:Boolean,default:!1}},data:function(){return{originalWidth:0,originalHeight:0,originalStyle:{width:"",height:""},contentPath:""}},computed:{isVue2:function(){var t=!0;return t},ratio:function(){return this.originalWidth&&this.originalHeight?this.originalWidth/this.originalHeight:0},style:function(){var t="auto",e="",a="no-repeat";switch(this.mode){case"aspectFit":t="contain",e="center center";break;case"aspectFill":t="cover",e="center center";break;case"widthFix":case"heightFix":t="100% 100%";break;case"top":e="center top";break;case"bottom":e="center bottom";break;case"center":e="center center";break;case"left":e="left center";break;case"right":e="right center";break;case"top left":e="left top";break;case"top right":e="right top";break;case"bottom left":e="left bottom";break;case"bottom right":e="right bottom";break;default:t="100% 100%",e="0% 0%";break}return{"background-image":this.contentPath?'url("'.concat(this.contentPath,'")'):"none","background-position":e,"background-size":t,"background-repeat":a}}},watch:{src:function(){this._loadImage()},mode:function(t,e){"widthFix"!==e&&"heightFix"!==e||this._resetSize(),"widthFix"!==t&&"heightFix"!==t||this._fixSize()},contentPath:function(t){!t&&this.__img&&(this.__img.remove(),delete this.__img)}},mounted:function(){this.originalStyle.width=this.$el.style.width||"",this.originalStyle.height=this.$el.style.height||"",this._loadImage()},beforeDestroy:function(){this._clearImage()},methods:{_fixSize:function(){if(this.ratio){var t=this.$el;if("widthFix"===this.mode){var e=t.offsetWidth;e&&(t.style.height="".concat(g(e/this.ratio),"px"))}else if("heightFix"===this.mode){var a=t.offsetHeight;a&&(t.style.width="".concat(g(a*this.ratio),"px"))}}window.dispatchEvent(new CustomEvent("updateview"))},_resetSize:function(){this.$el.style.width=this.originalStyle.width,this.$el.style.height=this.originalStyle.height},_resetData:function(){this.originalWidth=0,this.originalHeight=0,this.contentPath=""},_loadImage:function(){var t=this,e=this.src;if(e){this._img=this._img||new Image;var a=this._img;a.onload=function(i){t._img=null,t.originalWidth=a.width;var r=t.originalWidth;t.originalHeight=a.height;var n=t.originalHeight;t._fixSize(),t.contentPath=e,a.draggable=t.draggable,t.__img&&t.__img.remove(),t.__img=a,t.$el.appendChild(a),t.$emit("load",i,{width:r,height:n})},a.onerror=function(e){t._img=null,t._resetData(),t.$emit("error",e,{errMsg:"GET ".concat(t.src," 404 (Not Found)")})},a.src=e}else this._clearImage(),this._resetData()},_clearImage:function(){var t=this._img;t&&(t.onload=null,t.onerror=null,this._img=null)}}},b=m,y=(a("f501"),a("2777")),w=Object(y["a"])(b,f,h,!1,null,"6b697055",null),k=w.exports,_={name:"PressImage",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:l["a"],PressTransition:u["a"],InnerImage:k},mixins:[o],emits:["click","error","load"],data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1,isNotInUni:Object(d["b"])()}},computed:{wrapStyle:function(){var t={};t.width=Object(s["a"])(this.width),t.height=Object(s["a"])(this.height),t.borderRadius=this.round?"10000px":Object(s["a"])(this.radius),t.overflow=this.radius>0?"hidden":"visible";var e=Object(c["a"])([Object(n["a"])(Object(n["a"])({},t),this.backgroundStyle),this.customStyle]);return e}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):this.isError=!0}}},mounted:function(){this.show=!0},methods:{addUnit:s["a"],onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(t){this.loading=!1,this.isError=!1,this.$emit("load",t),this.removeBgColor()},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}},S=_,x=(a("8de3"),Object(y["a"])(S,i,r,!1,null,"08d65088",null));e["a"]=x.exports},"2a64":function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return l}));a("cdf1");var i=a("699c");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t.split("."),i=e.split("."),r=Math.max(a.length,i.length);while(a.length<r)a.push("0");while(i.length<r)i.push("0");for(var n=0;n<r;n++){var o=parseInt(a[n],10),s=parseInt(i[n],10);if(o>s)return 1;if(o<s)return-1}return 0}function n(t){var e=Object(i["a"])();return r(e.SDKVersion,t)>=0}function o(){return n("2.9.3")}function s(){return n("2.10.3")}function c(){return n("2.4.0")}function d(){return n("2.9.0")}function l(){var t=!1;return t}},"3f49":function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,'.press-ellipsis[data-v-15136fc6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-15136fc6]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-15136fc6],.press-multi-ellipsis--l3[data-v-15136fc6]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-15136fc6]{-webkit-line-clamp:3}.press-clearfix[data-v-15136fc6]:after{clear:both;content:"";display:table}.press-hairline[data-v-15136fc6],.press-hairline--bottom[data-v-15136fc6],.press-hairline--left[data-v-15136fc6],.press-hairline--right[data-v-15136fc6],.press-hairline--surround[data-v-15136fc6],.press-hairline--top[data-v-15136fc6],.press-hairline--top-bottom[data-v-15136fc6]{position:relative}.press-hairline--bottom[data-v-15136fc6]:after,.press-hairline--left[data-v-15136fc6]:after,.press-hairline--right[data-v-15136fc6]:after,.press-hairline--surround[data-v-15136fc6]:after,.press-hairline--top-bottom[data-v-15136fc6]:after,.press-hairline--top[data-v-15136fc6]:after,.press-hairline[data-v-15136fc6]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-15136fc6]:after{border-top-width:1px}.press-hairline--left[data-v-15136fc6]:after{border-left-width:1px}.press-hairline--right[data-v-15136fc6]:after{border-right-width:1px}.press-hairline--bottom[data-v-15136fc6]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-15136fc6]:after{border-width:1px 0}.press-hairline--surround[data-v-15136fc6]:after{border-width:1px}.press-transition[data-v-15136fc6]{-webkit-transition-timing-function:ease;transition-timing-function:ease}.press-fade-enter-active[data-v-15136fc6],.press-fade-leave-active[data-v-15136fc6]{-webkit-transition-property:opacity;transition-property:opacity}.press-fade-enter[data-v-15136fc6],.press-fade-leave-to[data-v-15136fc6]{opacity:0}.press-fade-down-enter-active[data-v-15136fc6],.press-fade-down-leave-active[data-v-15136fc6],.press-fade-left-enter-active[data-v-15136fc6],.press-fade-left-leave-active[data-v-15136fc6],.press-fade-right-enter-active[data-v-15136fc6],.press-fade-right-leave-active[data-v-15136fc6],.press-fade-up-enter-active[data-v-15136fc6],.press-fade-up-leave-active[data-v-15136fc6]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.press-fade-up-enter[data-v-15136fc6],.press-fade-up-leave-to[data-v-15136fc6]{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.press-fade-down-enter[data-v-15136fc6],.press-fade-down-leave-to[data-v-15136fc6]{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.press-fade-left-enter[data-v-15136fc6],.press-fade-left-leave-to[data-v-15136fc6]{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.press-fade-right-enter[data-v-15136fc6],.press-fade-right-leave-to[data-v-15136fc6]{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.press-slide-down-enter-active[data-v-15136fc6],.press-slide-down-leave-active[data-v-15136fc6],.press-slide-left-enter-active[data-v-15136fc6],.press-slide-left-leave-active[data-v-15136fc6],.press-slide-right-enter-active[data-v-15136fc6],.press-slide-right-leave-active[data-v-15136fc6],.press-slide-up-enter-active[data-v-15136fc6],.press-slide-up-leave-active[data-v-15136fc6]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.press-slide-up-enter[data-v-15136fc6],.press-slide-up-leave-to[data-v-15136fc6]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.press-slide-down-enter[data-v-15136fc6],.press-slide-down-leave-to[data-v-15136fc6]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.press-slide-left-enter[data-v-15136fc6],.press-slide-left-leave-to[data-v-15136fc6]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.press-slide-right-enter[data-v-15136fc6],.press-slide-right-leave-to[data-v-15136fc6]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.press-overlay[data-v-15136fc6]{background-color:var(--overlay-background-color,rgba(0,0,0,.7));height:100%;left:0;position:fixed;top:0;width:100%}',""]),t.exports=e},"52f7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("div",{class:t.transitionClass,style:t.rootStyle,on:{transitionend:t.onTransitionEnd,click:t.onClick,touchmove:t.onTouchmove}},[t._t("default")],2):t._e()},r=[],n=a("69b0"),o=(a("2aaa"),a("f1f0"),a("414c"),a("79cc"),a("53c7"));function s(t){return Object(o["b"])([{"-webkit-transition-duration":"".concat(t.currentDuration,"ms"),"transition-duration":"".concat(t.currentDuration,"ms")},t.display?null:"display: none",t.customStyle])}var c={rootStyle:s},d=a("9cc5"),l=a("9411"),u={name:"PressTransition",mixins:[Object(d["a"])(!0)],props:Object(n["a"])({overlay:{type:Boolean,default:!1},enterClass:{type:String,default:""},enterActiveClass:{type:String,default:""},enterToClass:{type:String,default:""},leaveClass:{type:String,default:""},leaveActiveClass:{type:String,default:""},leaveToClass:{type:String,default:""}},l["c"]),emits:["click","touchmove","before-enter","enter","after-enter","before-leave","leave","after-leave"],data:function(){return{classes:""}},options:Object(n["a"])(Object(n["a"])({},l["b"]),{},{styleIsolation:"shared"}),computed:{rootStyle:function(){var t=this.currentDuration,e=this.display,a=this.customStyle,i=c.rootStyle({currentDuration:t,display:e,customStyle:a});return i},transitionClass:function(){var t=this.customClass,e=this.overlay,a=this.classes;return"press-transition ".concat(a," ").concat(t," ").concat(e?"press-overlay":"")}},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(a){e[a]=t[a]}))},onClick:function(){this.$emit("click")},onTouchmove:function(t){this.$emit("touchmove",t)}}},f=u,h=(a("bfc1"),a("2777")),p=Object(h["a"])(f,i,r,!1,null,"15136fc6",null);e["a"]=p.exports},"699c":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return l}));a("f1f0"),a("414c"),a("79cc");var i=a("2a64"),r=a("d2e1"),n=a("f22d");a.d(e,"d",(function(){return n["d"]}));var o={};function s(){try{var t;Object.keys(o).length||"undefined"===typeof uni||"function"!==typeof(null===(t=uni)||void 0===t?void 0:t.getSystemInfoSync)||(o=uni.getSystemInfoSync())}catch(e){console.log("[getSystemInfoSync] err",e)}return o}function c(t){return setTimeout((function(){t()}),1e3/30)}function d(t,e){Object(i["d"])()&&t.groupSetData?t.groupSetData(e):e()}function l(t){var e=t.selector,a=t.callback,i=t.options;if(Object(r["b"])()){var n=new IntersectionObserver(a,i),o=document.querySelectorAll(e);return o.forEach((function(t){n.observe(t)})),!0}return!1}},"7dae":function(t,e,a){var i=a("9e4a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("c69b").default;r("46d89cad",i,!0,{sourceMap:!1,shadowMode:!1})},"8de3":function(t,e,a){"use strict";a("7dae")},"9cc5":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("2aaa"),a("226c"),a("948b");var i=a("699c"),r=a("dfba"),n=function(t,e){var a=e.enterClass,i=e.enterActiveClass,r=e.enterToClass,n=e.leaveClass,o=e.leaveActiveClass,s=e.leaveToClass;return{enter:"press-".concat(t,"-enter press-").concat(t,"-enter-active ").concat(a," ").concat(i),"enter-to":"press-".concat(t,"-enter-to press-").concat(t,"-enter-active ").concat(r," ").concat(i),leave:"press-".concat(t,"-leave press-").concat(t,"-leave-active ").concat(n," ").concat(o),"leave-to":"press-".concat(t,"-leave-to press-").concat(t,"-leave-active ").concat(s," ").concat(o)}};function o(t){return{props:{customStyle:String,show:{type:Boolean,default:t},duration:{type:[Number,Object,null],default:300},name:{type:String,default:"fade"}},data:function(){return{type:"",inited:!1,display:!1,dataName:this.name}},watch:{show:{handler:function(){this.observeShow.apply(this,arguments)}},name:{handler:function(t){this.dataName=t}}},mounted:function(){!0===this.show&&this.observeShow(!0,!1)},methods:{observeShow:function(t,e){t!==e&&(t?this.enter():this.leave())},enter:function(){var t=this,e=this.duration,a=this.dataName,o=n(a,this),s=Object(r["h"])(e)?e.enter:e;this.status="enter",this.$emit("before-enter"),Object(i["e"])((function(){"enter"===t.status&&(t.$emit("enter"),t.setData({inited:!0,display:!0,classes:o.enter,currentDuration:s}),Object(i["e"])((function(){"enter"===t.status&&(t.transitionEnded=!1,t.setData({classes:o["enter-to"]}))})))}))},leave:function(){var t=this;if(this.display){var e=this.duration,a=this.dataName,o=n(a,this),s=Object(r["h"])(e)?e.leave:e;this.status="leave",this.$emit("before-leave"),Object(i["e"])((function(){"leave"===t.status&&(t.$emit("leave"),t.setData({classes:o.leave,currentDuration:s}),Object(i["e"])((function(){"leave"===t.status&&(t.transitionEnded=!1,setTimeout((function(){return t.onTransitionEnd()}),s),t.setData({classes:o["leave-to"]}))})))}))}},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-".concat(this.status));var t=this.show,e=this.display;!t&&e&&this.setData({display:!1})}}}}}},"9e4a":function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,".press-image[data-v-08d65088]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.press-image__image[data-v-08d65088]{width:100%;height:100%}.press-image__error[data-v-08d65088],.press-image__loading[data-v-08d65088]{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#f3f4f6;color:#909193;font-size:23px}",""]),t.exports=e},"9f2d":function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,"uni-image[data-v-6b697055]{display:inline-block;overflow:hidden;position:relative}uni-image[hidden][data-v-6b697055]{display:none}uni-image>div[data-v-6b697055],uni-image>img[data-v-6b697055]{width:100%;height:100%}uni-image>img[data-v-6b697055]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;display:block;position:absolute;top:0;left:0;opacity:0}uni-image>.uni-image-will-change[data-v-6b697055]{will-change:transform}",""]),t.exports=e},a914:function(t,e,a){var i=a("9f2d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("c69b").default;r("5ddaf250",i,!0,{sourceMap:!1,shadowMode:!1})},bfc1:function(t,e,a){"use strict";a("ec7d")},ec7d:function(t,e,a){var i=a("3f49");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("c69b").default;r("0368e9f6",i,!0,{sourceMap:!1,shadowMode:!1})},f22d:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"b",(function(){return f})),a.d(e,"h",(function(){return h})),a.d(e,"e",(function(){return p}));var i=a("5e66"),r=a("2cd2"),n=(a("2aaa"),a("226c"),a("414c"),a("79cc"),a("516d"));function o(t){var e=t;return Array.isArray(e)||(e=[t]),e}function s(t,e){var a=o(t);a.forEach((function(t){var e=t.name,a=t.prop;n["a"].prototype[e]=a}))}function c(t){n["a"].nextTick(t)}function d(t,e){var a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a=new(n["a"].extend(e))({el:t,propsData:i}),a}function l(t){return{provide:function(){return Object(r["a"])({},t,this)}}}function u(t){return{inject:Object(r["a"])({},t,{default:null})}}function f(t){t.$forceUpdate()}var h={props:{value:{type:[String,Boolean],default:""}},computed:{realModelValue:function(){var t="";return t=this.value,t}},methods:{emitModelValue:function(t){this.$emit("input",t)}}};function p(t){n["a"].config.ignoredElements=[].concat(Object(i["a"])(n["a"].config.ignoredElements||[]),Object(i["a"])(t))}},f501:function(t,e,a){"use strict";a("a914")}}]);