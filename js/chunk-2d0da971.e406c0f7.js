(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da971"],{"6bf5":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demo-wrap"},[s("PressCell",{attrs:{title:e.t("basicUsage")}},[s("PressStepper",{attrs:{value:e.value},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("step")}},[s("PressStepper",{attrs:{value:e.value,step:2},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("range")}},[s("PressStepper",{attrs:{value:e.value,min:5,max:8},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("integer")}},[s("PressStepper",{attrs:{value:e.value,integer:""},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("disabled")}},[s("PressStepper",{attrs:{disabled:"",value:e.value},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("closeLongPress")}},[s("PressStepper",{attrs:{"long-press":!1,value:e.value},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("decimalLength")}},[s("PressStepper",{attrs:{step:.2,"decimal-length":1,value:e.value},on:{change:e.onChange}})],1),s("PressCell",{attrs:{title:e.t("asyncChange")}},[s("PressStepper",{attrs:{"async-change":"",value:e.asyncValue},on:{change:e.onSyncChange}})],1),s("PressCell",{attrs:{title:e.t("customSize")}},[s("PressStepper",{attrs:{"input-width":"40px","button-size":"32px",value:e.value},on:{change:e.onChange}})],1)],1)},a=[],l=s("0c65d"),r=s("8c2b"),o=s("8366"),c={i18n:{"zh-CN":{step:"步长设置",range:"限制输入范围",integer:"限制输入整数",roundTheme:"圆角风格",asyncChange:"异步变更",customSize:"自定义大小",disableInput:"禁用输入框",decimalLength:"固定小数位数",closeLongPress:"关闭长按"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",asyncChange:"Async Change",customSize:"Custom Size",disableInput:"Disable Input",decimalLength:"Decimal Length",closeLongPress:"Close Long Press"}},components:{PressStepper:l["a"],PressToast:r["a"],PressCell:o["a"]},data:function(){return{value:1,asyncValue:1}},methods:{onChange:function(e){console.log("onChange.val",e)},onSyncChange:function(e){var t=this;this.$toast.loading({duration:1e3}),setTimeout((function(){console.log("onSyncChange.val",e),t.asyncValue=e}),1e3)}}},g=c,i=s("33b6"),u=Object(i["a"])(g,n,a,!1,null,"6aa10945",null);t["default"]=u.exports}}]);