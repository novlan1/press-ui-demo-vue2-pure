(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a02691"],{"0b0a":function(e,o,t){var a=t("50ab");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("c69b").default;n("21c32a66",a,!0,{sourceMap:!1,shadowMode:!1})},"117f":function(e,o,t){"use strict";t("3a8d")},"1ec9":function(e,o,t){var a=t("ee2b");o=a(!1),o.push([e.i,".press-number-keyboard__delete-icon[data-v-367e8872]{height:var(--keyboard-button-font-size,22px)}",""]),e.exports=o},"1f8d":function(e,o,t){"use strict";t("d9b8")},"378e":function(e,o,t){var a=t("ee2b");o=a(!1),o.push([e.i,".press-number-keyboard[data-v-2be3f5b8]{background-color:var(--keyboard-background-color,#f2f3f5)}.press-number-keyboard--safe[data-v-2be3f5b8]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.press-number-keyboard__toolbar[data-v-2be3f5b8]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:var(--keyboard-toolbar-height,44px);margin-bottom:var(--keyboard-toolbar-margin-bottom,-12px);line-height:var(--keyboard-toolbar-height,44px)}.press-number-keyboard__cancel[data-v-2be3f5b8],.press-number-keyboard__confirm[data-v-2be3f5b8]{-webkit-box-flex:0;-ms-flex:none;flex:none;position:absolute;padding:var(--keyboard-action-padding,0 16px);font-size:var(--keyboard-action-font-size,14px);line-height:var(--keyboard-toolbar-height,44px);background-color:var(--keyboard-background-color,#f2f3f5);border:0}.press-number-keyboard__cancel[data-v-2be3f5b8]:after,.press-number-keyboard__confirm[data-v-2be3f5b8]:after{border-style:none}.press-number-keyboard__cancel--hover[data-v-2be3f5b8],.press-number-keyboard__cancel[data-v-2be3f5b8]:active,.press-number-keyboard__confirm--hover[data-v-2be3f5b8],.press-number-keyboard__confirm[data-v-2be3f5b8]:active{opacity:.7}.press-number-keyboard__confirm[data-v-2be3f5b8]{right:0;color:var(--keyboard-confirm-action-color,#576b95)}.press-number-keyboard__cancel[data-v-2be3f5b8]{left:0;color:var(--keyboard-cancel-action-color,#969799)}.press-number-keyboard__title[data-v-2be3f5b8]{-webkit-box-flex:initial;-ms-flex:initial;flex:initial;margin:auto;text-align:center;font-size:var(--keyboard-title-font-size,16px);line-height:var(--keyboard-toolbar-height,44px);color:var(--keyboard-title-color,#646566);text-wrap:nowrap}.press-number-keyboard__pad[data-v-2be3f5b8]{display:grid;place-content:stretch;place-items:stretch;grid-template-columns:repeat(3,1fr);grid-template-rows:none;grid-auto-flow:dense;grid-auto-rows:var(--keyboard-button-height,48px);gap:var(--keyboard-button-gap,8px);padding:var(--keyboard-padding,12px 8px)}.press-number-keyboard__pad--accounting[data-v-2be3f5b8]{grid-template-columns:repeat(4,1fr)}.press-number-keyboard__button[data-v-2be3f5b8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;font-size:var(--keyboard-button-font-size,22px);line-height:var(--keyboard-button-font-size,22px);background-color:var(--keyboard-button-background-color,#fff);border:0}.press-number-keyboard__button[data-v-2be3f5b8]:after{border-style:none}.press-number-keyboard__button--hover[data-v-2be3f5b8],.press-number-keyboard__button[data-v-2be3f5b8]:active{background-color:var(--keyboard-button-active-color,#ebedf0)}.press-number-keyboard__button--wide[data-v-2be3f5b8]{grid-column:span 2/span 2}.press-number-keyboard__button--confirm[data-v-2be3f5b8]{color:#fff;background-color:#1989fa;border:0}.press-number-keyboard__button--confirm-hover[data-v-2be3f5b8],.press-number-keyboard__button--confirm[data-v-2be3f5b8]:active{opacity:.7}.press-number-keyboard__button--place-right[data-v-2be3f5b8]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;grid-column:-2/-1;grid-row:span 2/span 2}.press-number-keyboard__delete-icon[data-v-2be3f5b8]{height:var(--keyboard-button-font-size,22px)}",""]),e.exports=o},"3a8d":function(e,o,t){var a=t("378e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("c69b").default;n("1ce65fef",a,!0,{sourceMap:!1,shadowMode:!1})},"50ab":function(e,o,t){var a=t("ee2b");o=a(!1),o.push([e.i,".demo-wrap[data-v-0b8772e2]{padding-bottom:300px}",""]),e.exports=o},"644b":function(e,o,t){"use strict";t("0b0a")},c1d3:function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"demo-wrap"},[t("demo-block",{attrs:{title:e.t("basicUsage")}},[t("press-cell",{attrs:{title:e.t("number"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("number")}}}),t("press-cell",{attrs:{title:e.t("accounting"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("accounting")}}}),t("press-cell",{attrs:{title:e.t("card"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("card")}}})],1),t("demo-block",{attrs:{title:e.t("custom")}},[t("press-cell",{attrs:{title:e.t("withToolbar"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("toolbar")}}}),t("press-cell",{attrs:{title:e.t("withTitle"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("title")}}}),t("press-cell",{attrs:{title:e.t("decimalMark"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("decimalMark")}}}),t("press-cell",{attrs:{title:e.t("random"),"is-link":""},on:{click:function(o){return e.onShowKeyboard("random")}}})],1),t("demo-block",{attrs:{title:e.t("bindValue")}},[t("press-field",{attrs:{label:e.t("bindLabel"),value:e.bindValue,"model-value":e.bindValue,readonly:"",clickable:!0,placeholder:e.t("input"),"always-embed":!0},on:{click:function(o){return e.onShowKeyboard("bindValue")},"click-input":function(o){return e.onShowKeyboard("bindValue")}}})],1),t("demo-block",{attrs:{title:e.t("codeValue")}},[t("press-cell",{on:{click:function(o){return e.onShowKeyboard("codeValue")}}},[t("press-code-input",{attrs:{"max-length":6,value:e.codeValue,"disabled-keyboard":!0}})],1)],1),t("press-number-keyboard",{attrs:{mode:e.mode,show:e.show,toolbar:e.toolbar,title:e.title,"decimal-mark":e.decimalMark,random:e.random},on:{change:e.onChange,backspace:e.onBackspace,cancel:e.onCancel,confirm:e.onConfirm,close:e.onClose}}),t("press-number-keyboard",{attrs:{mode:e.mode,show:e.showBindDemo,toolbar:e.toolbar,title:e.title,"decimal-mark":e.decimalMark,random:e.random,"max-length":6},on:{cancel:e.onCloseBindDemo,confirm:e.onCloseBindDemo,close:e.onCloseBindDemo},model:{value:e.bindValue,callback:function(o){e.bindValue=o},expression:"bindValue"}}),t("press-number-keyboard",{attrs:{mode:e.mode,show:e.showCodeDemo,toolbar:e.toolbar,title:e.title,"decimal-mark":e.decimalMark,random:e.random,"max-length":6},on:{cancel:e.onCloseCodeDemo,confirm:e.onCloseCodeDemo,close:e.onCloseCodeDemo,change:e.onChangeCode},model:{value:e.codeValue,callback:function(o){e.codeValue=o},expression:"codeValue"}})],1)},n=[],r=t("4b62"),s=t("ad77"),c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("press-popup",{attrs:{show:e.show,"z-index":e.zIndex,position:"bottom",round:e.roundComputed,"overlay-style":"background-color: transparent;","safe-area-inset-bottom":!1},on:{close:e.onClose}},[t("div",{class:e.wrapClass},[e.toolbar?t("div",{staticClass:"press-number-keyboard__toolbar"},[e.cancelButtonText?t("button",{staticClass:"press-number-keyboard__cancel",attrs:{"hover-class":"press-number-keyboard__cancel--hover","data-action":"cancel"},on:{click:e.onActionClick}},[e._v(" "+e._s(e.cancelButtonText)+" ")]):e._e(),t("div",{staticClass:"press-number-keyboard__title"},[e._v(" "+e._s(e.title)+" ")]),e.confirmButtonText?t("button",{staticClass:"press-number-keyboard__confirm",attrs:{"hover-class":"press-number-keyboard__confirm--hover","data-action":"confirm"},on:{click:e.onActionClick}},[e._v(" "+e._s(e.confirmButtonText)+" ")]):e._e()]):e._e(),t("div",{class:e.padClass},[e._l(e.keys,(function(o,a){return t("button",{key:o,class:e.getButtonClass(o,a),attrs:{"hover-class":"press-number-keyboard__button--hover"},on:{click:function(t){return e.onKeyboardClick(o)}}},[e._v(" "+e._s(o)+" ")])})),t("button",{class:e.getButtonClass("backspace"),attrs:{"hover-class":"press-number-keyboard__button--hover"},on:{touchstart:function(o){return o.stopPropagation(),e.onBackspaceStart(o)},touchend:e.onBackspaceEnd}},[t("delete-icon",{staticClass:"press-number-keyboard__delete-icon"})],1),"accounting"===e.mode?t("button",{class:e.getButtonClass("confirm"),attrs:{"hover-class":"press-number-keyboard__button--confirm-hover","data-action":"confirm"},on:{click:e.onActionClick}},[e._v(" "+e._s(e.confirmButtonText)+" ")]):e._e()],2)])])},i=[],l=t("69b0"),b=(t("7144"),t("cdf1"),t("4920"),t("948b"),t("414c"),t("7475"),t("6dbd")),d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("svg",{staticClass:"press-number-keyboard__delete-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 22"}},[t("path",{attrs:{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"}})])},u=[],m={name:"DeleteIcon"},f=m,p=(t("1f8d"),t("2777")),h=Object(p["a"])(f,d,u,!1,null,"367e8872",null),k=h.exports,y=t("b304"),v=t("638a"),g=t("fff6"),_=t("0753"),w={name:"PressNumberKeyboard",options:Object(l["a"])(Object(l["a"])({},y["b"]),{},{styleIsolation:"shared"}),components:{PressPopup:b["a"],DeleteIcon:k},mixins:[g["j"]],props:Object(l["a"])(Object(l["a"])({},y["c"]),{},{mode:{type:String,default:"number"},show:{type:Boolean,default:!1},toolbar:{type:Boolean,default:!1},cancelButtonText:{type:String,default:""},confirmButtonText:{type:String,default:Object(_["b"])("confirm")},title:{type:String,default:""},decimalMark:{type:String,default:"."},random:{type:Boolean,default:!1},maxLength:{type:Number,default:-1},zIndex:{type:Number,default:100},round:{type:Boolean,default:!1},safeAreaInsetBottom:{type:Boolean,default:!0}}),emits:["change","backspace","close","cancel","confirm","update:modelValue"],data:function(){return{timer:null,refreshKeyOrder:1}},computed:{roundComputed:function(){return this.round||this.toolbar},keys:function(){var e;switch(this.mode){case"number":e=[1,2,3,4,5,6,7,8,9,0];break;case"accounting":e=[1,2,3,4,5,6,7,8,9,0,this.decimalMark];break;case"card":e=[1,2,3,4,5,6,7,8,9,"X",0];break;default:e=[]}return this.refreshKeyOrder,this.random&&(e=this.shuffleArray(e)),e},wrapClass:function(){return v["a"].bem2("number-keyboard",{safe:this.safeAreaInsetBottom})},padClass:function(){return v["a"].bem2("number-keyboard__pad",this.mode)}},watch:{show:function(e){this.random&&e&&(this.refreshKeyOrder=1===this.refreshKeyOrder?2:1)}},mounted:function(){},beforeDestroy:function(){},methods:{shuffleArray:function(e){for(var o=e,t=o.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=o[t];o[t]=o[a],o[a]=n}return o},getButtonClass:function(e,o){var t=[e];switch(this.mode){case"number":o===this.keys.length-1&&t.push("wide");break;case"accounting":["backspace","confirm"].includes(e)?t.push("place-right"):o===this.keys.length-2&&t.push("wide");break;case"card":break}return v["a"].bem2("number-keyboard__button",t)},onKeyboardClick:function(e){this.maxLength>=0&&this.realModelValue.length>=this.maxLength||(this.emitModelValue(this.realModelValue+e),this.$emit("change",e))},onBackspaceStart:function(){var e=this;this.onBackspaceEnd(),this.onBackspaceClick(),this.timer=setInterval((function(){e.onBackspaceClick()}),250)},onBackspaceEnd:function(){clearInterval(this.timer),this.timer=null},onBackspaceClick:function(){this.$emit("backspace"),this.emitModelValue(this.realModelValue.slice(0,this.realModelValue.length-1))},onClose:function(){this.$emit("close")},onActionClick:function(e){var o=e.currentTarget.dataset.action;this.$emit(o)}}},x=w,C=(t("117f"),Object(p["a"])(x,c,i,!1,null,"2be3f5b8",null)),B=C.exports,M={i18n:{"zh-CN":{number:"数字键盘",accounting:"带小数点的数字键盘",card:"身份证键盘",custom:"自定义",withToolbar:"展示顶部栏",withTitle:"展示标题",decimalMark:"自定义小数点",random:"打乱顺序",bindValue:"配合输入框使用",bindLabel:"双向绑定",input:"点此输入",codeValue:"配合验证码输入使用"},"en-US":{number:"Number Keyboard",accounting:"Number Keyboard with Decimal Mark",card:"Identity Number Keyboard",custom:"Custom",withToolbar:"Show Toolbar",withTitle:"Show Title",decimalMark:"Custom Separator Mark",random:"Randomized",bindValue:"Use with Field",bindLabel:"Bind Value",input:"Click to Input",codeValue:"Use with CodeInput"}},components:{PressField:r["a"],PressCodeInput:s["a"],PressNumberKeyboard:B},data:function(){return{mode:"number",show:!1,showBindDemo:!1,showCodeDemo:!1,toolbar:!1,title:"",decimalMark:".",random:!1,bindValue:"",codeValue:""}},methods:{onShowKeyboard:function(e){var o="number",t=!0,a=!1,n=!1,r=!1,s="",c=".",i=!1;switch(e){case"number":break;case"accounting":o="accounting";break;case"card":o="card";break;case"toolbar":r=!0;break;case"title":r=!0,s="数字键盘";break;case"decimalMark":o="accounting",c=",";break;case"random":i=!0;break;case"bindValue":t=!1,a=!0;break;case"codeValue":t=!1,n=!0;break}this.mode=o,this.show=t,this.showBindDemo=a,this.showCodeDemo=n,this.toolbar=r,this.title=s,this.decimalMark=c,this.random=i},onChange:function(e){console.log("[onChange] ".concat(e)),this.onGTip("".concat(e))},onBackspace:function(){console.log("[onBackspace]"),this.onGTip("backspace")},onClose:function(){console.log("[onClose]"),this.show=!1},onCancel:function(){console.log("[onCancel]"),this.show=!1},onConfirm:function(){console.log("[onConfirm]"),this.show=!1},onCloseBindDemo:function(){this.showBindDemo=!1},onCloseCodeDemo:function(){this.showCodeDemo=!1},onChangeCode:function(e){console.log("[onChange] value: ",e)}}},V=M,K=(t("644b"),Object(p["a"])(V,a,n,!1,null,"0b8772e2",null));o["default"]=K.exports},d9b8:function(e,o,t){var a=t("1ec9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("c69b").default;n("28aa641c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);