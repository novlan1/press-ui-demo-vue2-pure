(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7fc1198"],{"0542":function(t,e,o){var n=o("a8b5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("c69b").default;a("43c861e7",n,!0,{sourceMap:!1,shadowMode:!1})},"3f4d":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-wrap"},[o("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle,"custom-style":t.customStyle}},[o("PressSignature",{ref:"pressSignature",attrs:{"pen-color":t.customInfo["pen-color"],"line-width":t.customInfo["line-width"],"background-color":t.customInfo["background-color"]},on:{submit:t.onSubmit,clear:t.onClear}}),o("div",{staticClass:"image-wrap"},[t.image?o("PressImage",{attrs:{src:t.image,width:t.canvasWidth,height:t.canvasHeight}}):t._e()],1)],1),o("PressGrid",{attrs:{clickable:"","column-num":3}},[o("PressGridItem",{attrs:{text:t.t("penColor"),icon:"edit"},on:{click:function(e){return t.custom({"pen-color":"#ff0000"})}}}),o("PressGridItem",{attrs:{text:t.t("lineWidth"),icon:"font-o"},on:{click:function(e){return t.custom({"line-width":6})}}}),o("PressGridItem",{attrs:{text:t.t("backgroundColor"),icon:"photo-o"},on:{click:function(e){return t.custom({"background-color":"#eee"})}}})],1)],1)},a=[],c=o("4455"),i=o("1d5d"),s=o("80fb"),r=o("cb69"),u=o("03638"),l={"pen-color":"#000","line-width":3,"background-color":"#fff"},d={i18n:{"zh-CN":{penColor:"自定义颜色",lineWidth:"自定义线宽",backgroundColor:"自定义背景颜色"},"en-US":{penColor:"Pen Color",lineWidth:"Line Width",backgroundColor:"Background Color"}},components:{PressSignature:i["a"],PressImage:s["a"],PressGrid:r["a"],PressGridItem:u["a"]},data:function(){return{image:"",canvasWidth:"calc(100vw - 16px)",canvasHeight:200,customStyle:"background: transparent",sectionStyle:"padding: 0 0",customInfo:Object(c["a"])({},l)}},methods:{onSubmit:function(t){console.log("[onSubmit]",t);var e=t.image,o=t.width,n=t.height;this.image=e,this.canvasWidth=o,this.canvasHeight=n},onClear:function(){},custom:function(t){var e=this;this.customInfo=Object(c["a"])(Object(c["a"])({},l),t),setTimeout((function(){e.$refs.pressSignature.clear()}))}}},m=d,h=(o("c983"),o("33b6")),f=Object(h["a"])(m,n,a,!1,null,"71852593",null);e["default"]=f.exports},a8b5:function(t,e,o){var n=o("ee2b");e=n(!1),e.push([t.i,".demo-wrap[data-v-71852593]{max-height:calc(100vh - 100px)}.image-wrap[data-v-71852593]{padding:0 8px}",""]),t.exports=e},c983:function(t,e,o){"use strict";o("0542")}}]);