(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3859"],{2973:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:t.t("basicUsage")}},[e("press-steps",{attrs:{steps:t.steps,active:t.active}}),e("PressButton",{attrs:{type:"e-sport-primary","custom-style":"margin: 8px 0 8px 0;"},on:{click:t.onNextStep}},[t._v(" "+t._s(t.t("nextStep"))+" ")])],1),e("demo-block",{attrs:{title:t.t("customStyle")}},[e("press-steps",{attrs:{steps:t.steps,active:t.active,"active-icon":"success","active-color":"#38f"}})],1),e("demo-block",{attrs:{title:t.t("customIcon")}},[e("press-steps",{attrs:{steps:t.stepsCustom,active:t.active}})],1),e("demo-block",{attrs:{title:t.t("title3")}},[e("press-steps",{attrs:{steps:t.steps,active:t.active,direction:"vertical","active-color":"#ee0a24"}})],1)],1)},c=[],a=e("235b"),o=e("96b1"),p={i18n:{"zh-CN":{nextStep:"下一步",step1:"买家下单",step2:"商家接单",step3:"买家提货",step4:"交易完成",title2:"描述信息",title3:"竖向步骤条",status1:"【城市】物流状态1",status2:"【城市】物流状态",status3:"快件已发货",customStyle:"自定义样式",customIcon:"自定义图标"},"en-US":{nextStep:"Next Step",step1:"Step1",step2:"Step2",step3:"Step3",step4:"Step4",title2:"Description",title3:"Vertical Steps",status1:"【City】Status1",status2:"【City】Status2",status3:"【City】Status3",customStyle:"Custom Style",customIcon:"Custom Icon"}},components:{PressSteps:a["a"],PressButton:o["a"]},data:function(){return{steps:[{text:this.t("step1"),desc:this.t("title2")},{text:this.t("step2"),desc:this.t("title2")},{text:this.t("step3"),desc:this.t("title2")},{text:this.t("step4"),desc:this.t("title2")}],stepsCustom:[{text:this.t("step1"),desc:this.t("title2"),inactiveIcon:"location-o",activeIcon:"success"},{text:this.t("step2"),desc:this.t("title2"),inactiveIcon:"like-o",activeIcon:"plus"},{text:this.t("step3"),desc:this.t("title2"),inactiveIcon:"star-o",activeIcon:"cross"},{text:this.t("step4"),desc:this.t("title2"),inactiveIcon:"phone-o",activeIcon:"fail"}],active:1}},methods:{onNextStep:function(){this.active!==this.steps.length-1?this.active+=1:this.active=0}}},n=p,l=e("2777"),r=Object(l["a"])(n,i,c,!1,null,"07185ed6",null);s["default"]=r.exports}}]);