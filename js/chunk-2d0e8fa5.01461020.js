(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fa5"],{"8c26":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("text")}},[i("PressCell",{attrs:{title:t.t("check"),"is-link":""},on:{click:t.onShowToast}})],1),i("demo-block",{attrs:{title:t.t("loading")}},[i("PressCell",{attrs:{title:t.t("default"),"is-link":""},on:{click:function(s){return t.onShowToastLoading("normal")}}}),i("PressCell",{attrs:{title:"Spinner","is-link":""},on:{click:function(s){return t.onShowToastLoading("spinner")}}}),i("PressCell",{attrs:{title:t.t("noDestroy"),"is-link":""},on:{click:function(s){return t.onShowToastLoading("normal",0)}}})],1),i("demo-block",{attrs:{title:t.t("customTip")}},[i("PressCell",{attrs:{title:t.t("success"),"is-link":""},on:{click:function(s){return t.onShowToastSuccess("success")}}}),i("PressCell",{attrs:{title:t.t("fail"),"is-link":""},on:{click:function(s){return t.onShowToastSuccess("fail")}}}),i("PressCell",{attrs:{title:t.t("dynamic"),"is-link":""},on:{click:t.onShowDynamicToast}}),i("PressCell",{attrs:{title:t.t("html"),"is-link":""},on:{click:t.onShowHtmlToast}})],1),i("PressToast",{ref:"press-toast",attrs:{id:"press-toast"}})],1)},n=[],o=i("8366"),a=i("8c2b"),c=i("b1ea"),l={i18n:{"zh-CN":{customTip:"自定义提示",text:"文字提示",loading:"加载提示",default:"默认",success:"成功提示",fail:"失败提示",dynamic:"动态更新提示",html:"HTML提示",toastTip:"我是提示文案，建议不超过十五字~",loadingTip:"加载中...",successTip:"成功文案",failTip:"失败文案",htmlTip:'我是提示文案，建议不超过<span style="color: #07A872">十五字</span>~',dynamicTip:function(t){return"倒计时 ".concat(t," 秒")},noDestroy:"不消失"},"en-US":{customTip:"Custom Tip",text:"Show",loading:"Loading",default:"Default",success:"Success",fail:"Fail",dynamic:"Dynamic",html:"HTML",toastTip:"Some messages",loadingTip:"Loading...",successTip:"Success",failTip:"Fail",htmlTip:'Some <span style="color: #07A872">messages</span>',dynamicTip:function(t){return"".concat(t," seconds")},noDestroy:"Not Destroy"}},components:{PressCell:o["a"],PressToast:a["a"]},data:function(){return{customStyle:"",timer:null}},methods:{onShowToast:function(){Object(c["b"])(this.t("toastTip"))},onShowToastLoading:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;Object(c["a"])(),"normal"!==t?Object(c["d"])({message:this.t("loadingTip"),forbidClick:!!s,loadingType:"spinner",duration:s}):Object(c["d"])({message:this.t("loadingTip"),forbidClick:!!s,duration:s})},onShowToastSuccess:function(t){"success"!==t?Object(c["c"])(this.t("failTip")):Object(c["e"])(this.t("successTip"))},onShowDynamicToast:function(){var t=this,s=Object(c["d"])({duration:0,forbidClick:!0,message:this.t("dynamicTip",3)}),i=3;clearInterval(this.timer),this.timer=setInterval((function(){i-=1,i?s.set("dataMessage",t.t("dynamicTip",i)):(clearInterval(t.timer),Object(c["a"])())}),1e3)},onShowHtmlToast:function(){Object(c["f"])({message:this.t("htmlTip"),duration:3e3,type:"html"})}}},r=l,u=i("33b6"),d=Object(u["a"])(r,e,n,!1,null,"6dfc0916",null);s["default"]=d.exports}}]);