(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9854"],{"32fe":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-wrap"},[t._l(t.demoList,(function(e,n){return o("demo-block",{key:n,attrs:{title:e.title}},t._l(e.list,(function(e){return o("PressCell",{key:e.title,attrs:{title:e.title,"is-link":""},on:{click:function(o){return t.onShowActionSheet(e.type)}}})})),1)})),o("PressActionSheet",{attrs:{show:t.show,actions:t.curActions,"cancel-text":t.cancelText,description:t.description,title:t.title},on:{close:t.onClose,select:t.onSelect,getuserinfo:t.onGetUserInfo,cancel:t.onClose}}),o("PressActionSheet",{attrs:{show:t.showCustom,title:t.t("title")},on:{close:t.onClose,select:t.onSelect,cancel:t.onClose}},[o("div",{staticStyle:{padding:"16px"}},[t._v(" "+t._s(t.t("content"))+" ")])])],2)},i=[],s=(o("745f"),o("9135"),o("58d1")),c=o("8366");var a={i18n:{"zh-CN":{custom:"自定义",option1:"选项一",option2:"选项二",option3:"选项三",subname:"描述信息",showCancel:"展示取消按钮",buttonText:"弹出菜单",customPanel:"自定义面板",description:"这是一段描述信息",optionStatus:"选项状态",coloredOption:"着色选项",disabledOption:"禁用选项",showDescription:"展示描述信息",wxOpen:"微信开放能力",qqOpen:"QQ开放能力",alipayOpen:"支付宝开放能力",mpOpen:"小程序开放能力",getUserInfo:"获取用户信息"},"en-US":{custom:"Custom",option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description",wxOpen:"Wechat Open API",qqOpen:"QQ Open API",alipayOpen:"Alipay Open API",mpOpen:"Mini Program Open API",getUserInfo:"Get User Info"}},components:{PressActionSheet:s["a"],PressCell:c["a"]},data:function(){var t=[{title:this.t("basicUsage"),list:[{title:this.t("check"),type:"basic"}]},{title:this.t("custom"),list:[{title:this.t("optionStatus"),type:"status"},{title:this.t("showCancel"),type:"cancel"},{title:this.t("showDescription"),type:"description"},{title:this.t("customPanel"),type:"title"}]}];return{demoList:t,show:!1,showCustom:!1,cancelText:"",description:"",title:"",curActions:[]}},computed:{actions:function(){return[{name:this.t("option1")},{name:this.t("option2")},{name:this.t("option3"),subname:this.t("subname"),openType:"share"}]}},mounted:function(){this.curActions=this.actions},methods:{onShowActionSheet:function(t){var e=[{name:this.t("coloredOption"),color:"#ee0a24"},{loading:!0},{name:this.t("disabledOption"),disabled:!0}],o=[{name:this.t("getUserInfo"),color:"#07c160",openType:"getUserInfo"}],n="",i="",s=[],c="";switch(t){case"title":return void(this.showCustom=!0);case"basic":s=this.actions;break;case"wxOpen":s=o,c=this.t("title");break;case"status":s=e;break;case"cancel":s=this.actions,n=this.t("cancel");break;case"description":s=this.actions,i=this.t("description");break;default:}this.show=!0,this.cancelText=n,this.description=i,this.curActions=s,this.title=c},onClose:function(){this.show=!1,this.showCustom=!1},onSelect:function(t){console.log("onSelect.e",t)},onGetUserInfo:function(t){console.log("onGetUserInfo.e",t)}}},l=a,p=o("33b6"),r=Object(p["a"])(l,n,i,!1,null,"cfc4c108",null);e["default"]=r.exports}}]);