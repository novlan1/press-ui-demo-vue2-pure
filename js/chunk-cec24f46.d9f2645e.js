(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cec24f46"],{"55c8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("basicUsage")}},[i("PressCell",{attrs:{title:t.t("basicUsage"),"is-link":""},on:{click:function(e){return t.onShowPicker("normal")}}}),i("PressCell",{attrs:{title:t.t("topTip"),"is-link":""},on:{click:function(e){return t.onShowPicker("tip")}}}),i("PressCell",{attrs:{title:t.t("longList"),"is-link":""},on:{click:function(e){return t.onShowPicker("long")}}}),i("PressCell",{attrs:{title:t.t("horizontal"),"is-link":""},on:{click:function(e){return t.onShowPicker("horizontal")}}})],1),i("demo-block",{attrs:{title:t.t("functional")}},[i("PressCell",{attrs:{title:t.t("check"),"is-link":""},on:{click:t.onShowFunctionalPicker}})],1),t.curPicker.show?i("PressPicker",{attrs:{title:t.curPicker.title,"show-back-arrow":t.curPicker.showBackArrow,list:t.curPicker.selectList,tip:t.curPicker.tip,current:t.curPicker.selectItem,horizontal:t.curPicker.horizontal,"virtual-list-threshold":30},on:{onClickConfirm:t.curPicker.onClickConfirm,onRemove:t.curPicker.onRemove}}):t._e(),i("PressPicker",{ref:t.PRESS_PICKER_ID,attrs:{id:t.PRESS_PICKER_ID,mode:"functional"}})],1)},o=[],c=i("4455"),r=(i("e087"),i("490c"),i("25f7"),i("45be"),i("080f"),i("1f4d")),l=i("4378"),a=i("8fef"),s="press-picker-functional",u={i18n:{"zh-CN":{topTip:"顶部提示",longList:"超长列表",functional:"函数式调用",horizontal:"横版",tipContent:"创建比赛后，可按比赛轮次精确设置。",addVirtualTeam:"添加虚拟队伍",addTeam:function(t){return"添加".concat(t,"队")}},"en-US":{topTip:"Top Tips",longList:"Super Long List",functional:"Functional Mode",horizontal:"Horizontal",tipContent:"Can be set precisely according to the round of the game",addVirtualTeam:"Add Virtual Team",addTeam:function(t){return"Add ".concat(t," Teams")}}},options:{styleIsolation:"shared"},components:{PressPicker:r["a"],PressCell:l["a"]},data:function(){var t=this,e=[{label:this.t("bo1"),value:1},{label:this.t("bo3"),value:3},{label:this.t("bo5"),value:5},{label:this.t("bo7"),value:7},{label:this.t("bo9"),value:9}],i=Array.from({length:8e3}).map((function(e,i){return{label:t.t("addTeam",i+1),value:i+1}})),n={onClickConfirm:function(e){t.onSuccessTip(e),t.curPicker.show=!1,t.pickerOption[t.curType]&&(t.pickerOption[t.curType].selectItem={value:e.value})},onRemove:function(){t.onTip("cancel"),t.curPicker.show=!1}};return{customStyle:"padding:0;",PICKER_BO_LIST:e,pickerOption:{normal:{title:this.t("wayToWin"),tip:"",selectList:e,selectItem:{label:e[3].label,value:7},horizontal:!1},tip:{title:this.t("wayToWin"),tip:this.t("tipContent"),selectList:e,selectItem:{label:e[1].label,value:3},horizontal:!1},long:{title:this.t("addVirtualTeam"),tip:"",selectList:i,selectItem:{value:1},horizontal:!1},horizontal:{title:this.t("wayToWin"),tip:"",selectList:e,selectItem:{label:e[3].label,value:7},horizontal:!0}},PRESS_PICKER_ID:s,pressPickerFunctionalData:{},curPicker:Object(c["a"])({},n),curType:""}},computed:{},methods:{onShowPicker:function(t){this.onGHideToast(),this.curType=t,this.curPicker=Object(c["a"])(Object(c["a"])(Object(c["a"])({},this.curPicker),this.pickerOption[t]),{},{show:!0})},onConfirm:function(){},onTip:function(t){this.onGTip(t)},onSuccessTip:function(t){var e=t.label,i=t.value;this.curPicker.show=!1,this.onTip("value: ".concat(i,", label: ").concat(e))},onShowFunctionalPicker:function(){var t=this,e=this.PICKER_BO_LIST;a["b"].call(this,{context:this,selector:"#".concat(s),list:e,arrowIcon:!0,current:{label:e[1].label,value:3},title:this.t("wayToWin"),tip:this.t("tipContent")}).then((function(e){var i=e.item;t.onSuccessTip(i)})).catch((function(){t.onTip("cancel")}))}}},f=u,h=i("33b6"),p=Object(h["a"])(f,n,o,!1,null,null,null);e["default"]=p.exports},"8fef":function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return f}));var n=i("4455"),o=i("55cc"),c=(i("250c"),i("8999"),i("0c4e"),i("8c11"),i("4498"),i("f3a5")),r=i("9846"),l="showDialog";function a(){var t=getCurrentPages();return t[t.length-1]}function s(t,e,i){var n=t.$children;if(n){var c,r=Object(o["a"])(n);try{for(r.s();!(c=r.n()).done;){var l=c.value;if(l.$attrs[e]===i)return l}}catch(p){r.e(p)}finally{r.f()}var a,u=Object(o["a"])(n);try{for(u.s();!(a=u.n()).done;){var f=a.value,h=s(f,e,i);if(h)return h}}catch(p){u.e(p)}finally{u.f()}}}function u(t,e){var i,n;if(e&&t){if("function"===typeof e)return e(t);var o=e;if(o.match(/^[^\w]/)&&(o=o.slice(1)),null!==(i=t.$refs)&&void 0!==i&&i[o])return t.$refs[o];if(Object(c["b"])()){var r=e.startsWith("#")?"id":"class",l=s(t,r,o);if(l)return l}if("function"===typeof(null===t||void 0===t?void 0:t.$selectComponent)){var a,u=null===t||void 0===t||null===(a=t.$selectComponent)||void 0===a?void 0:a.call(t,e);return u}return null===t||void 0===t||null===(n=t.selectComponent)||void 0===n?void 0:n.call(t,e)}}function f(t){return new Promise((function(e,i){var o=t.context||a(),c=t.dialog;c||(c=u(o,t.selector));var s=Object(n["a"])({callback:function(t,n){"confirm"===t?e(n):i(n)}},t);delete s.dialog,delete s.context;var f=t.showFunction||l;Object(r["a"])(c,s,f)}))}},9846:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("e087");function n(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(t){var o=(null===(i=t.$vm)||void 0===i?void 0:i[n])||t[n];return"function"===typeof o?o(e):void 0}}}}]);