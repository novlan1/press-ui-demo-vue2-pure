(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e58adb0c"],{"349e2":function(t,s,e){"use strict";e("a8de")},"7c94":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo-wrap"},[t._l(t.demoList,(function(s){return e("demo-block",{key:s.key,attrs:{title:s.title}},t._l(t.list,(function(a,o){return e("div",{key:o,staticClass:"demo-part"},[e("press-tag",{attrs:{type:a.type,plain:s.plain||!1,round:s.round||!1,mark:s.mark||!1}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)})),0)})),e("demo-block",{attrs:{title:t.t("customColor")}},[e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{color:"#f2826a"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{color:"#7232dd"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{color:"#7232dd",plain:""}},[t._v(" "+t._s(t.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{color:"#ffe1e1","text-color":"#ad0000"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)]),e("demo-block",{attrs:{title:t.t("customSize")}},[e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{type:"danger"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{type:"danger",size:"medium"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{type:"danger",size:"large"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)]),e("demo-block",{attrs:{title:t.t("closeable")}},[t.show.primary?e("div",{staticClass:"demo-part"},[e("press-tag",{attrs:{type:"primary",closeable:""},on:{close:function(s){return t.onClose("primary")}}},[t._v(" "+t._s(t.t("tag"))+" ")])],1):t._e(),e("div",{staticClass:"demo-part"},[t.show.success?e("press-tag",{attrs:{type:"success",closeable:""},on:{close:function(s){return t.onClose("success")}}},[t._v(" "+t._s(t.t("tag"))+" ")]):t._e()],1)])],2)},o=[],r=e("9982"),l={i18n:{"zh-CN":{type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smallSize:"小号标签",largeSize:"大号标签",mediumSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smallSize:"Small Size",largeSize:"Large Size",mediumSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},components:{PressTag:r["a"]},data:function(){return{list:[{type:"primary"},{type:"success"},{type:"danger"},{type:"warning"}],demoList:[{key:"basic",title:this.t("basicUsage")},{key:"plain",title:this.t("plain"),plain:!0},{key:"round",title:this.t("round"),round:!0},{key:"mark",title:this.t("mark"),mark:!0}],show:{primary:!0,success:!0}}},methods:{onClose:function(t){console.log("type",t),this.show[t]=!1}}},i=l,c=(e("349e2"),e("2777")),n=Object(c["a"])(i,a,o,!1,null,"45c6f651",null);s["default"]=n.exports},a8de:function(t,s,e){var a=e("cc81");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("c69b").default;o("b381009e",a,!0,{sourceMap:!1,shadowMode:!1})},cc81:function(t,s,e){var a=e("ee2b");s=a(!1),s.push([t.i,".demo-part[data-v-45c6f651]{margin-right:12px;display:inline-block}",""]),t.exports=s}}]);