(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439741a2"],{"0374":function(e,t,i){var n=i("ee2b");t=n(!1),t.push([e.i,".press-switch[data-v-e4952fd4]{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;width:var(--switch-width,2em);height:var(--switch-height,1em);background-color:var(--switch-background-color,#fff);border:var(--switch-border,1px solid rgba(0,0,0,.1));border-radius:var(--switch-node-size,1em);-webkit-transition:background-color var(--switch-transition-duration,.3s);transition:background-color var(--switch-transition-duration,.3s)}.press-switch__node[data-v-e4952fd4]{position:absolute;top:var(--switch-node-top,0);left:var(--switch-node-left,0);border-radius:100%;z-index:var(--switch-node-z-index,1);width:var(--switch-node-size,1em);height:var(--switch-node-size,1em);background-color:var(--switch-node-background-color,#fff);-webkit-box-shadow:var(--switch-node-box-shadow,0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05));box-shadow:var(--switch-node-box-shadow,0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05));-webkit-transition:var(--switch-transition-duration,.3s) cubic-bezier(.3,1.05,.4,1.05);transition:var(--switch-transition-duration,.3s) cubic-bezier(.3,1.05,.4,1.05)}[data-v-e4952fd4] .press-switch__loading{position:absolute!important;top:25%;left:25%;width:50%;height:50%}.press-switch--on[data-v-e4952fd4]{background-color:var(--switch-on-background-color,#1989fa)}.press-switch--on .press-switch__node[data-v-e4952fd4]{-webkit-transform:translateX(calc(var(--switch-width, 2em) - var(--switch-node-size, 1em) - var(--switch-node-left, 0px)*2));transform:translateX(calc(var(--switch-width, 2em) - var(--switch-node-size, 1em) - var(--switch-node-left, 0px)*2))}.press-switch--disabled[data-v-e4952fd4]{opacity:var(--switch-disabled-opacity,.4)}",""]),e.exports=t},"0e74":function(e,t,i){"use strict";var n=i("b422"),c=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!c&&+c[1]},"0f1e":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("4455"),c=i("1787"),o=i("98e6"),a=i("4bbb"),r={};Object(o["b"])()&&(r={ScrollView:c["a"]},Object(a["h"])(["uni-scroll-view"],app));var l={components:Object(n["a"])({},r)}},1513:function(e,t,i){var n=i("ee2b");t=n(!1),t.push([e.i,".press-switch--e-sport[data-v-e4952fd4]{--switch-width:.88rem;--switch-height:.48rem;--switch-border:none;--switch-on-background-color:#5bbdfa;--switch-background-color:#dfe2ea;--switch-node-size:.4rem;--switch-node-top:.04rem;--switch-node-left:.04rem}",""]),e.exports=t},"1e23":function(e,t,i){var n=i("ee2b");t=n(!1),t.push([e.i,".press-list--hor[data-v-57edcfb5]  .press-list__layout{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.press-list--hor .press-list__finished[data-v-57edcfb5],.press-list--hor .press-list__loading[data-v-57edcfb5]{min-width:100px;height:100%}.press-list__finished[data-v-57edcfb5],.press-list__loading[data-v-57edcfb5]{width:100%;height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#969799;font-size:14px}.press-list__placeholder[data-v-57edcfb5]{height:0;pointer-events:none}",""]),e.exports=t},2278:function(e,t,i){var n=i("1513");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("c69b").default;c("330d4db6",n,!0,{sourceMap:!1,shadowMode:!1})},"258b":function(e,t,i){"use strict";var n=i("3352"),c=Math.floor,o=function(e,t){var i=e.length;if(i<8){var a,r,l=1;while(l<i){r=l,a=e[l];while(r&&t(e[r-1],a)>0)e[r]=e[--r];r!==l++&&(e[r]=a)}}else{var s=c(i/2),u=o(n(e,0,s),t),d=o(n(e,s),t),p=u.length,f=d.length,h=0,b=0;while(h<p||b<f)e[h+b]=h<p&&b<f?t(u[h],d[b])<=0?u[h++]:d[b++]:h<p?u[h++]:d[b++]}return e};e.exports=o},"2f2d":function(e,t,i){"use strict";i("2278")},"32ff":function(e,t,i){"use strict";i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return l}));i("8999"),i("b41b"),i("6058"),i("093a");var n=i("1fbe"),c=i("98e6"),o=i("4bbb");function a(e){return setTimeout((function(){e()}),1e3/30)}function r(e,t){Object(n["d"])()&&e.groupSetData?e.groupSetData(t):t()}function l(e){var t=e.selector,i=e.callback,n=e.options;if(Object(c["b"])()){var o=new IntersectionObserver(i,n),a=document.querySelectorAll(t);return a.forEach((function(e){o.observe(e)})),!0}return!1}i.d(t,"c",(function(){return o["g"]}))},"4fff":function(e,t,i){"use strict";i("60a8")},"516c":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i("8999");var n=i("1521"),c=["showTitle","closeIcon","arrowIcon","title","button","borderButton","zIndex","popupClass","closeOnClickOverlay","customStyle"].reduce((function(e,t){return e[t]=n["b"][t],e}),{})},"543f":function(e,t,i){"use strict";var n,c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("PressPopup",{attrs:{"is-show":e.innerShow,"show-title":e.getPropOrData("showTitle"),"close-icon":e.getPropOrData("closeIcon"),"arrow-icon":e.getPropOrData("arrowIcon"),title:e.getPropOrData("title"),button:e.getPropOrData("button"),"border-button":e.getPropOrData("borderButton"),"z-index":e.getPropOrData("zIndex"),"popup-class":e.getPropOrData("popupClass"),"close-on-click-overlay":e.getPropOrData("closeOnClickOverlay"),"custom-style":e.getPropOrData("customStyle"),"async-confirm":e.onAsyncConfirm},on:{confirm:e.confirm,cancel:e.cancel}},[e._l(e.computedCellList,(function(t,n){return i("div",{key:n,staticClass:"press-popup-cell__item",class:{"press-popup-cell__item--switch":t.type===e.POPUP_CELL_TPE_MAP.SWITCH,"press-popup-cell__item--checkbox":t.type===e.POPUP_CELL_TPE_MAP.CHECKBOX,"press-popup-cell__item--button":t.type===e.POPUP_CELL_TPE_MAP.BUTTON},on:{click:function(i){return i.stopPropagation(),e.onClickCell(t,n)}}},[t.type===e.POPUP_CELL_TPE_MAP.BUTTON?i("div",[e._v(" "+e._s(t.label)+" ")]):[i("div",{staticClass:"press-popup-cell__label"},[i("div",{staticClass:"press-popup-cell__title"},[e._v(" "+e._s(t.label)+" ")]),t.description&&t.description.length?i("div",{staticClass:"press-popup-cell__description-wrap"},e._l(t.description,(function(n,c){return i("span",{key:n.uniqueKey},[i("span",{class:{"press-popup-cell__description":!0,"press-popup-cell__description--light":n.light},on:{click:function(i){return i.stopPropagation(),e.onClickDescription(n,c,t)}}},[e._v(" "+e._s(n.content)+" ")])])})),0):e._e()]),i("div",{staticClass:"press-popup-cell__value"},[t.type===e.POPUP_CELL_TPE_MAP.SWITCH?i("PressSwitch",{attrs:{"custom-class":"press-switch--e-sport",open:t.open,disabled:t.disabled||!1},on:{change:function(t){return e.onSwitchChange(t,n)}}}):t.type===e.POPUP_CELL_TPE_MAP.TAB?i("div",{staticClass:"press-popup-cell__tabs"},e._l(t.tabList,(function(c,o){return i("div",{key:c.uniqueKey,staticClass:"press-popup-cell__tab",class:{"press-popup-cell__tab--active":t.active===c.value},on:{click:function(i){return i.stopPropagation(),e.onTabChange(t,n,c,o)}}},[e._v(" "+e._s(c.label)+" ")])})),0):t.type===e.POPUP_CELL_TPE_MAP.CHECKBOX?i("div",{staticClass:"press-popup-cell__checkbox",class:{"press-popup-cell__checkbox--checked":e.checkedIndexList.indexOf(n)>-1},on:{click:function(i){return i.stopPropagation(),e.onCheckboxChange(t,n)}}}):[e._v(" "+e._s(t.value)+" "),i("div",{staticClass:"iconfont icon-back"})]],2)]],2)})),e.getPropOrData("tip")?i("div",{staticClass:"press-popup-cell__tip"},[e._v(" "+e._s(e.getPropOrData("tip"))+" ")]):e._e(),e.getPropOrData("bottomButton")?i("div",{staticClass:"press-popup-cell__bottom-button",on:{click:function(t){return t.stopPropagation(),e.onClickBottomButton(t)}}},[e._v(" "+e._s(e.getPropOrData("bottomButton"))+" ")]):e._e()],2)},o=[],a=i("4455"),r=(i("745f"),i("9135"),i("e087"),i("0cda"),i("25f7"),i("f7a4"),i("8999"),i("b41b"),i("0c65"),i("080f"),i("cef2")),l=i("83d8"),s=i("516c"),u=i("fa56"),d={SWITCH:"switch",CHECKBOX:"checkbox",BUTTON:"button",TAB:"tab",CELL:"cell"},p=Object(a["a"])(Object(a["a"])({},s["a"]),{},{tip:{type:String,default:""},cellList:{type:Array,default:function(){return[]}}}),f={name:"PressPopupCell",options:{virtualHost:!0},components:{PressPopup:r["a"],PressSwitch:l["a"]},mixins:[Object(u["a"])(p)],props:{},emits:["click","cancel","confirm"],data:function(){return n=this,{POPUP_CELL_TPE_MAP:d,checkedIndexList:[]}},computed:{computedCellList:function(){var e=this.getPropOrData("cellList")||[];return e.map((function(e,t){return"string"===typeof e.description?Object(a["a"])(Object(a["a"])({},e),{},{description:[{light:!1,content:e.description,uniqueKey:"".concat(t,"-desc-0")}]}):Object(a["a"])(Object(a["a"])({},e),{},{tabList:(e.tabList||[]).map((function(e,i){return Object(a["a"])(Object(a["a"])({},e),{},{uniqueKey:"".concat(t,"-tab-").concat(i)})})),description:(e.description||[]).map((function(e,i){return Object(a["a"])(Object(a["a"])({},e),{},{uniqueKey:"".concat(t,"-desc-").concat(i)})}))})}))}},watch:{cellList:{handler:function(){this.getCheckedList()},immediate:!0,deep:!0},functionModeData:{handler:function(){this.getCheckedList()},immediate:!0,deep:!0}},methods:{getCheckedList:function(){n=this;var e=this.getPropOrData("cellList")||[],t=e.map((function(e,t){return Object(a["a"])(Object(a["a"])({},e),{},{index:t})})).filter((function(e){return e.checked})).map((function(e){return e.index}));this.checkedIndexList=t},emitClick:function(e){var t=e.shouldEmitClick,i=void 0===t||t,n=e.item,c=e.index,o=e.options,r=void 0===o?{}:o,l=n.click,s=Object(a["a"])({item:n,index:c,context:this},r);"function"===typeof l&&l(s),i&&this.$emit("click",s)},onTabChange:function(e,t,i,n){this.emitClick({item:e,index:t,options:{tabItem:i,tabIndex:n}})},onClickDescription:function(e,t){this.emitClick({shouldEmitClick:!1,item:e,index:t,options:{}})},onCheckboxChange:function(e,t){var i=this.checkedIndexList.indexOf(t)>-1;this.emitClick({item:e,index:t,options:{value:!i}})},onSwitchChange:function(e,t){this.emitClick({item:this.computedCellList[t],index:t,options:{value:e}})},onClickCell:function(e,t){var i=e.click,n=this.checkedIndexList,c={item:e,index:t,context:this};if(e.type===d.CHECKBOX){var o=n.indexOf(t)>-1;c.value=o,this.checkedIndexList=o?n.filter((function(e){return e!==t})):n.concat([t]).sort()}"function"===typeof i&&i(c),this.$emit("click",c)},onClickBottomButton:function(){this.$emit("cancel",{context:this}),this.promiseCallback("cancel")},confirm:function(){this.$emit("confirm",{context:this}),this.promiseCallback("confirm",{checkedIndexList:this.checkedIndexList})},cancel:function(){this.$emit("cancel",{context:this}),this.promiseCallback("cancel",{checkedIndexList:this.checkedIndexList})},onAsyncConfirm:function(){var e=n.getPropOrData("asyncConfirm");return!e||e({checkedIndexList:n.checkedIndexList,context:n})}}},h=f,b=(i("4fff"),i("33b6")),v=Object(b["a"])(h,c,o,!1,null,"03c5c034",null);t["a"]=v.exports},"60a8":function(e,t,i){var n=i("bd97");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("c69b").default;c("326209c8",n,!0,{sourceMap:!1,shadowMode:!1})},"61b7":function(e,t,i){"use strict";var n=i("a0aa"),c=i("1985"),o=i("d088"),a=i("bb03"),r=i("6550"),l=i("e3af"),s=i("77e4"),u=i("b60e").f,d=i("cf5d"),p=i("aeb1"),f=i("b7a1"),h=i("226b"),b=i("18ee"),v=i("7788"),g=i("7e7c"),m=i("a56e"),_=i("2161"),x=i("f9c3").enforce,k=i("af99"),w=i("6244"),y=i("be56"),C=i("2f03"),P=w("match"),O=c.RegExp,S=O.prototype,L=c.SyntaxError,E=o(S.exec),I=o("".charAt),j=o("".replace),T=o("".indexOf),D=o("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,A=/a/g,z=/a/g,B=new O(A)!==A,R=b.MISSED_STICKY,U=b.UNSUPPORTED_Y,V=n&&(!B||R||y||C||m((function(){return z[P]=!1,O(A)!==A||O(z)===z||"/a/i"!==String(O(A,"i"))}))),N=function(e){for(var t,i=e.length,n=0,c="",o=!1;n<=i;n++)t=I(e,n),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),c+=t):c+="[\\s\\S]":c+=t+I(e,++n);return c},$=function(e){for(var t,i=e.length,n=0,c="",o=[],a=s(null),r=!1,l=!1,u=0,d="";n<=i;n++){if(t=I(e,n),"\\"===t)t+=I(e,++n);else if("]"===t)r=!1;else if(!r)switch(!0){case"["===t:r=!0;break;case"("===t:if(c+=t,"?:"===D(e,n+1,n+3))continue;E(M,D(e,n+1))&&(n+=2,l=!0),u++;continue;case">"===t&&l:if(""===d||_(a,d))throw new L("Invalid capture group name");a[d]=!0,o[o.length]=[d,u],l=!1,d="";continue}l?d+=t:c+=t}return[c,o]};if(a("RegExp",V)){for(var K=function(e,t){var i,n,c,o,a,s,u=d(S,this),b=p(e),v=void 0===t,g=[],m=e;if(!u&&b&&v&&e.constructor===K)return e;if((b||d(S,e))&&(e=e.source,v&&(t=h(m))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),m=e,y&&"dotAll"in A&&(n=!!t&&T(t,"s")>-1,n&&(t=j(t,/s/g,""))),i=t,R&&"sticky"in A&&(c=!!t&&T(t,"y")>-1,c&&U&&(t=j(t,/y/g,""))),C&&(o=$(e),e=o[0],g=o[1]),a=r(O(e,t),u?this:S,K),(n||c||g.length)&&(s=x(a),n&&(s.dotAll=!0,s.raw=K(N(e),i)),c&&(s.sticky=!0),g.length&&(s.groups=g)),e!==m)try{l(a,"source",""===m?"(?:)":m)}catch(_){}return a},H=u(O),q=0;H.length>q;)v(K,O,H[q++]);S.constructor=K,K.prototype=S,g(c,"RegExp",K,{constructor:!0})}k("RegExp")},"6bfe":function(e,t,i){var n=i("ee2b");t=n(!1),t.push([e.i,".demo-container[data-v-4eeba94e]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:6px;overflow:auto}.demo-wrap--hor .list__wrap[data-v-4eeba94e]{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.demo-wrap--hor .list__item[data-v-4eeba94e]{min-width:100px;border-right:1px solid #f5f6fa;height:100%}.list__item[data-v-4eeba94e]{width:100%;height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #f5f6fa;background:#fff;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box}",""]),e.exports=t},"73cb":function(e,t,i){var n=i("6bfe");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("c69b").default;c("9edd26d8",n,!0,{sourceMap:!1,shadowMode:!1})},8036:function(e,t,i){"use strict";i.d(t,"d",(function(){return b})),i.d(t,"a",(function(){return v})),i.d(t,"c",(function(){return g})),i.d(t,"p",(function(){return m})),i.d(t,"r",(function(){return _})),i.d(t,"q",(function(){return x})),i.d(t,"o",(function(){return k})),i.d(t,"n",(function(){return w})),i.d(t,"i",(function(){return C})),i.d(t,"k",(function(){return P})),i.d(t,"h",(function(){return O})),i.d(t,"j",(function(){return S})),i.d(t,"f",(function(){return L})),i.d(t,"b",(function(){return E})),i.d(t,"e",(function(){return I})),i.d(t,"g",(function(){return j})),i.d(t,"l",(function(){return T})),i.d(t,"m",(function(){return D}));var n=i("4455"),c=(i("0cda"),i("490c"),i("25f7"),i("8999"),i("45be"),i("b41b"),i("0c65"),i("080f"),i("55cc")),o=(i("250c"),i("0c4e"),i("8c11"),i("4498"),i("12ef"));i("e087");function a(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(e){var c=(null===(i=e.$vm)||void 0===i?void 0:i[n])||e[n];return"function"===typeof c?c(t):void 0}}var r="showDialog";function l(){var e=getCurrentPages();return e[e.length-1]}function s(e,t,i){var n=e.$children;if(n){var o,a=Object(c["a"])(n);try{for(a.s();!(o=a.n()).done;){var r=o.value;if(r.$attrs[t]===i)return r}}catch(f){a.e(f)}finally{a.f()}var l,u=Object(c["a"])(n);try{for(u.s();!(l=u.n()).done;){var d=l.value,p=s(d,t,i);if(p)return p}}catch(f){u.e(f)}finally{u.f()}}}function u(e,t){var i,n;if(t&&e){if("function"===typeof t)return t(e);var c=t;if(c.match(/^[^\w]/)&&(c=c.slice(1)),null!==(i=e.$refs)&&void 0!==i&&i[c])return e.$refs[c];if(Object(o["b"])()){var a=t.startsWith("#")?"id":"class",r=s(e,a,c);if(r)return r}if("function"===typeof(null===e||void 0===e?void 0:e.$selectComponent)){var l,u=null===e||void 0===e||null===(l=e.$selectComponent)||void 0===l?void 0:l.call(e,t);return u}return null===e||void 0===e||null===(n=e.selectComponent)||void 0===n?void 0:n.call(e,t)}}function d(e){return new Promise((function(t,i){var c=e.context||l(),o=e.dialog;o||(o=u(c,e.selector));var s=Object(n["a"])({callback:function(e,n){"confirm"===e?t(n):i(n)}},e);delete s.dialog,delete s.context;var d=e.showFunction||r;a(o,s,d)}))}var p=i("f374"),f=31536e6,h=9e5,b={POPUP_CELL:"press-popup-cell-functional",POPUP_CELL_2:"press-popup-cell-functional-2",PICKER:"press-picker-functional",DATE_TIME_PICKER:"press-datetime-picker-popup-functional"},v={ON_TIME_START:"ON_TIME_START",LAST_READY_TIME:"LAST_READY_TIME"},g={ON_TIME_START:{MIN:Date.now(),MAX:Date.now()+f},LATEST_READY:{MIN:Date.now()-f,MAX:Date.now()+f}};function m(e){return d(Object(n["a"])({selector:"#".concat(b.POPUP_CELL)},e))}function _(e){d(Object(n["a"])({selector:"#".concat(b.POPUP_CELL)},e)).then((function(e){var t=e||{},i=t.context,n=void 0===i?{}:i;n.closeDialog()})).catch((function(e){var t=e||{},i=t.context,n=void 0===i?{}:i;n.closeDialog()}))}function x(e){return d(Object(n["a"])({selector:"#".concat(b.POPUP_CELL_2)},e))}function k(e){return d(Object(n["a"])({selector:"#".concat(b.PICKER)},e))}function w(e){return d(Object(n["a"])({selector:"#".concat(b.DATE_TIME_PICKER)},e))}function y(e){return parseInt("".concat(e/1e3/60),10)}function C(){var e=Date.now()+h;while(y(e)%5!==0)e+=6e4;return parseInt("".concat(e/1e3),10)}function P(e,t){var i="";return i=1==e?"人满开赛":2==e?"手动开赛":Object(p["a"])(t,"M/d hh:mm开赛"),i}function O(e){var t="";return t=e?Object(p["a"])(e,"M/d hh:mm"):"不启用",t}function S(){return Array.from({length:13}).map((function(e,t){return t<2?null:5*t})).filter((function(e){return e})).map((function(e){return{value:e,label:"".concat(e,"分钟")}}))}var L=[{label:"一局胜负",value:1},{label:"三局两胜",value:3},{label:"五局三胜",value:5},{label:"七局四胜",value:7}],E=["","一局胜负","","三局两胜","","五局三胜","","七局四胜"],I=["各禁4英雄","不禁用英雄","","各禁2英雄","各禁3英雄"],j=[{label:"不禁用英雄",value:1},{label:"各禁2英雄",value:3},{label:"各禁3英雄",value:4},{label:"各禁4英雄",value:0}];function T(e){return e?Object(p["a"])(e,"M/d hh:mm 截止上场"):"不启用"}function D(e){return Object(p["a"])(e,"M/d hh:mm")}},"83d8":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.switchClass,style:e.switchStyle,on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[i("div",{staticClass:"press-switch__node ",class:e.nodeClass},[e.loading?i("PressLoading",{attrs:{color:e.loadingColor,"custom-class":"press-switch__loading"}}):e._e()],1)])},c=[],o=i("4455"),a=(i("e087"),i("c35c")),r=i("98e6"),l=i("7122"),s=i("adaf");function u(e){var t=e.checked===e.activeValue?e.activeColor:e.inactiveColor;return Object(l["b"])({"font-size":Object(s["a"])(e.size),"background-color":t})}var d="#1989fa",p="#969799";function f(e){return e.checked===e.activeValue?e.activeColor||d:e.inactiveColor||p}var h={rootStyle:u,loadingColor:f},b=i("38d4"),v={name:"PressSwitch",options:Object(o["a"])(Object(o["a"])({},b["b"]),{},{styleIsolation:"shared"}),components:{PressLoading:a["a"]},field:!0,props:Object(o["a"])({open:{type:[Boolean,null],default:null},checked:{type:Boolean,default:!1},loading:Boolean,disabled:Boolean,activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},size:{type:String,default:"30"},activeValue:{type:Boolean,default:!0},inactiveValue:{type:Boolean,default:!1},nodeClass:{type:String,default:""}},b["c"]),emits:["click","input","change","onSwitchChange"],computed:{realChecked:function(){var e=this.open,t=this.checked;return"boolean"===typeof e?e:t},switchClass:function(){var e=this.realChecked,t=this.activeValue,i=this.disabled,n=this.customClass;return"".concat(r["a"].bem2("switch",{on:e===t,disabled:i})," ").concat(n)},switchStyle:function(){var e=this.size,t=this.realChecked,i=this.activeColor,n=this.inactiveColor,c=this.activeValue;return h.rootStyle({size:e,checked:t,activeColor:i,inactiveColor:n,activeValue:c})},loadingColor:function(){var e=this.realChecked,t=this.activeColor,i=this.inactiveColor,n=this.activeValue;return h.loadingColor({checked:e,activeColor:t,inactiveColor:i,activeValue:n})}},methods:{onClick:function(){var e=this.activeValue,t=this.inactiveValue,i=this.disabled,n=this.loading,c=this.realChecked===e,o=c?t:e;this.$emit("click",c),i||n||(this.$emit("input",o),this.$emit("change",o),this.$emit("onSwitchChange",o))}}},g=v,m=(i("8f6d"),i("2f2d"),i("33b6")),_=Object(m["a"])(g,n,c,!1,null,"e4952fd4",null);t["a"]=_.exports},"8f6d":function(e,t,i){"use strict";i("c2e5")},9768:function(e,t,i){"use strict";i("73cb")},"9bb6":function(e,t,i){"use strict";var n=i("a0aa"),c=i("be56"),o=i("8d15"),a=i("1aee"),r=i("f9c3").get,l=RegExp.prototype,s=TypeError;n&&c&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!r(this).dotAll;throw new s("Incompatible receiver, RegExp required")}}})},ac56:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-wrap demo-wrap--gray demo-wrap--flex",class:e.listLocal.vertical?"":"demo-wrap--hor"},[i("demo-block",{attrs:{title:e.t("basicUsage"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[i("PressCell",{attrs:{title:e.t("custom"),"is-link":""},on:{click:e.onShowBasicPopupCell}})],1),i("div",{staticClass:"demo-container"},[i("PressList",{attrs:{finished:e.finished,"immediate-check":e.immediateCheck,vertical:e.listLocal.vertical,"finished-text":"没有更多了","auto-check-scroller":e.listLocal.autoCheckScroller,"custom-style":e.listStyle},on:{load:e.load,scroll:e.scroll},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[i("div",{staticClass:"list__wrap",style:e.wrapStyle},[i("div",{style:e.hiddenUpPartStyle}),e._l(e.showingData,(function(t){return i("div",{key:t.value,staticClass:"list__item"},[e._v(" "+e._s(t.label)+" ")])}))],2)])],1),i("PressPopupCell",{ref:e.FUNCTIONAL_ID_MAP.POPUP_CELL,attrs:{id:e.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"}}),i("PressPicker",{ref:e.FUNCTIONAL_ID_MAP.PICKER,attrs:{id:e.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"}})],1)},c=[],o=i("9c63"),a=i("4455"),r=(i("e087"),i("490c"),i("25f7"),i("250c"),i("8999"),i("45be"),i("080f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-view",{class:e.scrollViewClass,style:e.scrollViewStyle,attrs:{id:e.SCROLL_VIEW_ID,"scroll-y":e.vertical,"scroll-x":!e.vertical,"scroll-with-animation":e.scrollWithAnimation,"scroll-anchoring":e.scrollAnchoring,enhanced:e.enhanced,"enable-flex":e.enableFlex,"enable-passive":e.enablePassive,"lower-threshold":e.offset,"scroll-into-view":e.scrollToElementById,"scroll-top":e.scrollTop,"scroll-left":e.scrollLeft},on:{scrolltolower:e.scrollToLower,scroll:e.scroll}},[i("div",{staticClass:"press-list__layout"},[e._t("default"),e.innerLoading?e._t("loading",[i("div",{staticClass:"press-list__loading",style:e.loadingStyle},[i("PressLoadingPlus",{attrs:{vertical:!e.vertical,size:e.loadingSize}},[e._v(" "+e._s(e.loadingText)+" ")])],1)]):e._e(),e.finishedText&&e.finished?e._t("finished",[i("div",{staticClass:"press-list__finished",style:e.finishedStyle},[i("div",[e._v(" "+e._s(e.finishedText)+" ")])])]):e._e(),i("div",{staticClass:"press-list__placeholder"})],2)])}),l=[],s=(i("30b9"),i("a88c"),i("15ea"),i("38d4")),u=i("c35c"),d=i("e086"),p=i("a2c0"),f="scrollViewId",h=i("4bbb"),b=i("32ff"),v=i("cde1"),g=i("0f1e"),m=Object(p["a"])(f),_={name:"PressList",options:Object(a["a"])({},s["b"]),components:{PressLoadingPlus:u["a"]},mixins:[h["k"],Object(v["a"])((function(e){this.autoCheckScroller&&(this.scroller||(this.scroller=Object(p["c"])(this.$el)),e(this.scroller,"scroll",this.onScroll,!0),e(this.scroller,"touchmove",this.onScroll,!0),this.onScroll())})),g["a"]],props:Object(a["a"])(Object(a["a"])({offset:{type:[Number,String],default:50},finished:{type:Boolean,default:!1},finishedText:{type:String,default:""},loadingText:{type:String,default:"加载中..."},immediateCheck:{type:Boolean,default:!0},enableFlex:{type:Boolean,default:!1},enhanced:{type:Boolean,default:!1},scrollWithAnimation:{type:Boolean,default:!1},enablePassive:{type:Boolean,default:!1},scrollAnchoring:{type:Boolean,default:!1},scrollToElementById:{type:String,default:""},vertical:{type:Boolean,default:!0},loadingStyle:{type:String,default:""},loadingSize:{type:String,default:"20px"},finishedStyle:{type:String,default:""},autoCheckScroller:{type:Boolean,default:!1},scrollLeft:{type:[Number,String],default:0},scrollTop:{type:[Number,String],default:0}},s["c"]),{},{customStyle:{type:String,default:""}}),emits:["scroll","input","load","update:modelValue"],data:function(){return{innerLoading:this.realModelValue,SCROLL_VIEW_ID:f,scrollerHeight:0}},computed:{scrollViewClass:function(){return["press-list",this.vertical?"press-list--vertical":"press-list--hor",this.customClass].join(" ")},scrollViewStyle:function(){return"height: 100%; ".concat(this.customStyle,";")}},watch:{realModelValue:{handler:function(e){this.innerLoading=e,this.check()}},finished:"check"},mounted:function(){this.immediateCheck&&this.check()},updated:function(){},methods:{getScrollerHeight:function(){var e=this;this.scrollerHeight||Object(d["c"])(this,m).then((function(t){e.scrollerHeight=t.height}))},scroll:function(e){this.getScrollerHeight(),this.$emit("scroll",e,this.scrollerHeight),this.check()},scrollToLower:function(){this.emitInput()},emitInput:function(){this.innerLoading||this.finished||(this.innerLoading=!0,this.emitModelValue(!0),this.$emit("load"))},check:function(){var e=this;Object(b["c"])((function(){e.innerCheck()}))},innerCheck:function(){this.autoCheckScroller||this.commonCheck()},commonCheck:function(e){var t=this,i=this.offset;this.innerLoading||this.finished||Promise.all([Object(d["c"])(this,".press-list__placeholder"),Object(d["c"])(this,m)]).then((function(n){var c=n[0],o=n[1];if(void 0===e&&(e=o),!t.innerLoading&&!t.finished){var a=e.bottom-e.top;if(a){var r=c.bottom-e.bottom;t.vertical||(r=c.right-e.right);var l=r<=i;l&&t.emitInput()}}})).catch((function(){})).finally((function(){}))},onScroll:function(){var e,t=this.scroller,i=this.autoCheckScroller;i&&(null!==t&&void 0!==t&&t.getBoundingClientRect&&(e=t.getBoundingClientRect()),this.commonCheck(e))}}},x=_,k=(i("ad3e"),i("33b6")),w=Object(k["a"])(x,r,l,!1,null,"57edcfb5",null),y=w.exports,C=i("543f"),P=i("fce1"),O=i("8366"),S=i("8036"),L=(i("cfff"),i("b41b"),i("44d4"),{pageSize:20,total:300,delay:200,vertical:!0,autoCheckScroller:!0}),E=Array.from({length:5}).map((function(e,t){return Math.pow(10,t)})).reduce((function(e,t){for(var i=1;i<10;i++)e.push(t*i);return e}),[]).map((function(e){return{label:e,value:e}})),I=E.reduce((function(e,t){return e[t.value]=t.label,e}),{}),j=Array.from({length:1e3}).map((function(e,t){return{label:"".concat(100*(t+1),"ms"),value:100*(t+1)}})),T=j.reduce((function(e,t){return e[t.value]=t.label,e}),{});function D(e){var t=e.context,i=e.callback;Object(S["r"])({context:t,title:"自定义设置",closeIcon:!0,cellList:[{label:"每次加载数量",value:I[L.pageSize],click:function(e){var n=e.context;n.closeDialog(),Object(S["o"])({title:"每次加载数量",closeIcon:!0,list:E,current:{value:L.pageSize},context:t}).then((function(e){var n=e.item;L.pageSize=n.value,t.onGTip("设置成功"),"function"===typeof i.changePageSize&&i.changePageSize.call(t,n.value)})).catch((function(){}))}},{label:"列表总数",value:I[L.total],click:function(e){var n=e.context;n.closeDialog(),Object(S["o"])({title:"列表总数",closeIcon:!0,list:E,current:{value:L.total},context:t}).then((function(e){var n=e.item;L.total=n.value,t.onGTip("设置成功"),"function"===typeof i.changeTotal&&i.changeTotal.call(t,n.value)})).catch((function(){}))}},{label:"数据请求时间",value:T[L.delay],click:function(e){var n=e.context;n.closeDialog(),Object(S["o"])({title:"数据请求时间",closeIcon:!0,list:j,current:{value:L.delay},context:t}).then((function(e){var n=e.item;L.delay=n.value,t.onGTip("设置成功"),"function"===typeof i.changeDelay&&i.changeDelay.call(t,n.value)})).catch((function(){}))}},{label:"是否竖向滚动",type:"switch",open:L.vertical,click:function(e){var n=e.context;n.closeDialog(),L.vertical=!L.vertical,t.onGTip("设置成功"),"function"===typeof i.changeDirection&&i.changeDirection.call(t,L.vertical)}},{label:"自动检测 Scroller",type:"switch",open:L.autoCheckScroller,click:function(e){var n=e.context;n.closeDialog(),L.autoCheckScroller=!L.autoCheckScroller,"function"===typeof i.changeAutoCheckScroller&&i.changeAutoCheckScroller.call(t,L.autoCheckScroller)}}]})}var M=i("459b"),A=50,z=500,B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return{data:function(){return{currentIndex:0,useVirtualList:!0}},computed:{upMissed:function(){var t=this.currentIndex;return Math.max(0,t-e)},showingData:function(){var t=this.currentIndex,i=this.upMissed,n=this.list,c=this.useVirtualList;return c?n.slice(i,t+e).map((function(e,t){return Object(a["a"])(Object(a["a"])({},e),{},{uniqueKey:t+i})})):n},hiddenUpPartStyle:function(){var e=this.upMissed,t=this.useVirtualList;if(!t)return"";var i="height: ".concat(e*A,"px;");return i},wrapStyle:function(){var e=this.list,t=this.useVirtualList;return t?"height: ".concat(e.length*A,"px;"):""}},methods:{updateCurrentIndex:function(e,t){var i=Object(M["a"])(e),n=i.scrollTop,c=i.scrollHeight;if(!(n<0)&&!(t+n>c)){var o=Math.round(n/A);this.currentIndex=o}}}}};function R(e){var t=e.length,i=e.delay,n=e.beforeLength;return new Promise((function(e){setTimeout((function(){e({data:Array.from({length:t}).map((function(e,t){var i=t+n+1;return i<10&&(i="0".concat(i)),{label:i,value:i}}))})}),i||0)}))}var U={i18n:{"zh-CN":{custom:"自定义"},"en-US":{custom:"Custom"}},components:{PressList:y,PressPopupCell:C["a"],PressPicker:P["a"],PressCell:O["a"]},mixins:[B()],data:function(){var e=Object(a["a"])({},L),t="";return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",loading:!1,finished:!1,immediateCheck:!0,list:[],FUNCTIONAL_ID_MAP:S["d"],listLocal:e,listStyle:t}},computed:{},watch:{listLocal:{handler:function(e){e.vertical||(this.useVirtualList=!1)},deep:!0}},mounted:function(){},methods:{load:function(){console.log("[load]"),this.onFetchData()},scroll:function(e,t){this.updateCurrentIndex(e,t)},onFetchData:function(e){var t,i=this,n=this.listLocal,c=n.total,a=n.pageSize,r=n.delay;R({delay:r,length:a,beforeLength:e?0:(null===(t=this.list)||void 0===t?void 0:t.length)||0}).then((function(t){var n=t.data,a=e?n:[].concat(Object(o["a"])(i.list),Object(o["a"])(n));a.length>c&&(a=a.slice(0,c)),i.list=a,console.log("[current total]",a.length),i.loading=!1,i.finished=i.list.length>=c})).catch((function(){}))},onShowBasicPopupCell:function(){D({context:this,callback:{changeTotal:this.changeTotal,changePageSize:this.changePageSize,changeDelay:this.changeDelay,changeDirection:this.changeDirection,changeAutoCheckScroller:this.changeAutoCheckScroller}})},changePageSize:function(e){this.listLocal=Object(a["a"])(Object(a["a"])({},this.listLocal),{},{pageSize:e}),this.generateData()},changeTotal:function(e){this.listLocal=Object(a["a"])(Object(a["a"])({},this.listLocal),{},{total:e}),this.generateData()},changeDelay:function(e){this.listLocal=Object(a["a"])(Object(a["a"])({},this.listLocal),{},{delay:e}),this.generateData()},changeDirection:function(e){this.listLocal=Object(a["a"])(Object(a["a"])({},this.listLocal),{},{vertical:e}),this.generateData()},changeAutoCheckScroller:function(e){this.listLocal=Object(a["a"])(Object(a["a"])({},this.listLocal),{},{autoCheckScroller:e}),this.list=[],this.generateData()},generateData:function(){this.loading=!0,this.onFetchData(!0)}}},V=U,N=(i("9768"),Object(k["a"])(V,n,c,!1,null,"4eeba94e",null));t["default"]=N.exports},ad3e:function(e,t,i){"use strict";i("c9a3")},bd97:function(e,t,i){var n=i("ee2b");t=n(!1),t.push([e.i,'.press-popup-cell__item[data-v-03c5c034]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .32rem 0 .32rem;height:1.12rem}.press-popup-cell__item--switch[data-v-03c5c034]{height:1.56rem}.press-popup-cell__item--checkbox[data-v-03c5c034]{height:auto}.press-popup-cell__item--checkbox .press-popup-cell__description-wrap[data-v-03c5c034]{font-size:.24rem;margin-top:.08rem;line-height:.4rem;height:.4rem}.press-popup-cell__item--button[data-v-03c5c034]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.32rem;font-weight:400}.press-popup-cell__label[data-v-03c5c034]{font-size:.32rem;color:#09134e;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:.36rem 0}.press-popup-cell__title[data-v-03c5c034]{line-height:.48rem;height:.48rem}.press-popup-cell__description-wrap[data-v-03c5c034]{font-size:.2rem;color:#9299c6;line-height:.5rem}.press-popup-cell__description--light[data-v-03c5c034]{color:#1181d7;margin:0 .04rem}.press-popup-cell__value[data-v-03c5c034]{font-size:.24rem;color:#9299c6;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-popup-cell__checkbox[data-v-03c5c034]{width:.4rem;height:.4rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/select-new.png) no-repeat;background-size:100%}.press-popup-cell__checkbox--checked[data-v-03c5c034]{background-image:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/selected-new.png)}.press-popup-cell__tip[data-v-03c5c034]{padding:.32rem 0;color:#bfc3e1;font-size:.24rem;text-align:center;position:relative;margin:0 .32rem}.press-popup-cell__tip[data-v-03c5c034]:before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background-color:#eef0f6;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.press-popup-cell__tabs[data-v-03c5c034]{width:2.76rem;padding-bottom:0!important;padding-top:0!important;height:.52rem;background:#dfe2ea;border-radius:.08rem}.press-popup-cell__tab[data-v-03c5c034],.press-popup-cell__tabs[data-v-03c5c034]{display:-webkit-box;display:-ms-flexbox;display:flex}.press-popup-cell__tab[data-v-03c5c034]{width:1.36rem;font-size:.2rem;font-weight:400;color:#09134e;border-radius:.04rem;height:.44rem;margin:.04rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.press-popup-cell__tab--active[data-v-03c5c034]{background:#fff}.press-popup-cell__bottom-button[data-v-03c5c034]{height:.88rem;line-height:.88rem;background:#eef0f6;border-radius:.08rem;font-weight:400;font-size:.32rem;text-align:center;margin:.32rem .4rem .4rem}.icon-back[data-v-03c5c034]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}',""]),e.exports=t},bfc8:function(e,t,i){"use strict";var n=i("b422");e.exports=/MSIE|Trident/.test(n)},c2e5:function(e,t,i){var n=i("0374");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("c69b").default;c("f77c836a",n,!0,{sourceMap:!1,shadowMode:!1})},c9a3:function(e,t,i){var n=i("1e23");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=i("c69b").default;c("2df3d0b9",n,!0,{sourceMap:!1,shadowMode:!1})},cde1:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("1239"),c=0;function o(e){var t="binded_".concat(c);function i(){var i=this;i[t]||(e.call(i,n["d"],!0),i[t]=!0)}function o(){var i=this;i[t]&&(e.call(i,n["c"],!1),i[t]=!1)}return c+=1,{mounted:i,activated:i,deactivated:o,beforeDestroy:o}}},f076:function(e,t,i){"use strict";var n=i("a0aa"),c=i("18ee").MISSED_STICKY,o=i("8d15"),a=i("1aee"),r=i("f9c3").get,l=RegExp.prototype,s=TypeError;n&&c&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!r(this).sticky;throw new s("Incompatible receiver, RegExp required")}}})},f29c:function(e,t,i){"use strict";var n=i("b422"),c=n.match(/firefox\/(\d+)/i);e.exports=!!c&&+c[1]},f374:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("e087"),i("250c"),i("61b7"),i("9bb6"),i("0c4e"),i("f076"),i("9566"),i("8c11"),i("7215");function n(e,t,i){var n,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e)return i||"";var o=new Date;10==="".concat(e).length&&(e*=1e3),o.setTime(e);var a={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()},r=/(y+)/;c&&(r=new RegExp("(?:^|(?:[^".concat(c,"y]))(y+)")));var l=t.match(r);for(var s in null!==(n=l)&&void 0!==n&&n[1]&&(t=t.replace(l[1],"".concat(o.getFullYear()).slice(4-l[1].length))),a){var u,d=new RegExp("(".concat(s,")"));if(c&&(d=new RegExp("(?:^|(?:[^".concat(c).concat(s[0],"]))(").concat(s,")"))),l=t.match(d),null!==(u=l)&&void 0!==u&&u[1]){var p=l,f=p.index,h=void 0===f?0:f,b=c?h+l[0].length-l[1].length:h,v="".concat(a[s]),g=l[1].length,m=1===g?v:"00".concat(v).slice("".concat(v).length);t=t.slice(0,b)+m+t.slice(b+g)}}return c&&(t=t.replace(new RegExp(c,"g"),"")),t}},f7a4:function(e,t,i){"use strict";var n=i("c71e"),c=i("d088"),o=i("2cad"),a=i("55ff"),r=i("a282"),l=i("5de2"),s=i("b7a1"),u=i("a56e"),d=i("258b"),p=i("4518"),f=i("f29c"),h=i("bfc8"),b=i("c8ab"),v=i("0e74"),g=[],m=c(g.sort),_=c(g.push),x=u((function(){g.sort(void 0)})),k=u((function(){g.sort(null)})),w=p("sort"),y=!u((function(){if(b)return b<70;if(!(f&&f>3)){if(h)return!0;if(v)return v<603;var e,t,i,n,c="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(n=0;n<47;n++)g.push({k:t+n,v:i})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}})),C=x||!k||!w||!y,P=function(e){return function(t,i){return void 0===i?-1:void 0===t?1:void 0!==e?+e(t,i)||0:s(t)>s(i)?1:-1}};n({target:"Array",proto:!0,forced:C},{sort:function(e){void 0!==e&&o(e);var t=a(this);if(y)return void 0===e?m(t):m(t,e);var i,n,c=[],s=r(t);for(n=0;n<s;n++)n in t&&_(c,t[n]);d(c,P(e)),i=r(c),n=0;while(n<i)t[n]=c[n++];while(n<s)l(t,n++);return t}})}}]);