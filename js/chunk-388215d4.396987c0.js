(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-388215d4"],{"1ea2":function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:a.tagClass,style:a.tagStyle},[a._t("default"),a.closeable?e("PressIconPlus",{attrs:{name:"cross","custom-class":"press-tag__close"},on:{click:a.onClose}}):a._e()],2)},s=[],o=e("4455"),l=(e("e087"),e("906b")),i=e("98e6"),n=e("7122");function d(a){return Object(n["b"])({"background-color":a.plain?"":a.color,color:a.textColor||a.plain?a.textColor||a.color:""})}var c={rootStyle:d},p=e("38d4"),g={name:"PressTag",options:Object(o["a"])(Object(o["a"])({},p["b"]),{},{styleIsolation:"shared"}),components:{PressIconPlus:l["a"]},props:Object(o["a"])({size:{type:String,default:""},mark:Boolean,color:{type:String,default:""},plain:Boolean,round:Boolean,textColor:{type:String,default:""},type:{type:String,default:"default"},closeable:Boolean},p["c"]),computed:{tagClass:function(){var a=this.type,t=this.size,e=this.mark,r=this.plain,s=this.round,o=this.customClass;return"".concat(o," ").concat(i["a"].bem2("tag",[a,t,{mark:e,plain:r,round:s}]))},tagStyle:function(){var a=this.plain,t=this.color,e=this.textColor;return c.rootStyle({plain:a,color:t,textColor:e})}},methods:{onClose:function(){this.$emit("close")}}},u=g,m=(e("39e2"),e("33b6")),b=Object(m["a"])(u,r,s,!1,null,"2d37b07a",null);t["a"]=b.exports},"39e2":function(a,t,e){"use strict";e("d49e")},"564b":function(a,t,e){var r=e("a358");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var s=e("c69b").default;s("57de122f",r,!0,{sourceMap:!1,shadowMode:!1})},"7c94":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-wrap"},[a._l(a.demoList,(function(t){return e("demo-block",{key:t.key,attrs:{title:t.title}},a._l(a.list,(function(r,s){return e("div",{key:s,staticClass:"demo-part"},[e("PressTag",{attrs:{type:r.type,plain:t.plain||!1,round:t.round||!1,mark:t.mark||!1}},[a._v(" "+a._s(a.t("tag"))+" ")])],1)})),0)})),e("demo-block",{attrs:{title:a.t("customColor")}},[e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{color:"#f2826a"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{color:"#7232dd"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{color:"#7232dd",plain:""}},[a._v(" "+a._s(a.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{color:"#ffe1e1","text-color":"#ad0000"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1)]),e("demo-block",{attrs:{title:a.t("customSize")}},[e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{type:"danger"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{type:"danger",size:"medium"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1),e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{type:"danger",size:"large"}},[a._v(" "+a._s(a.t("tag"))+" ")])],1)]),e("demo-block",{attrs:{title:a.t("closeable")}},[a.show.primary?e("div",{staticClass:"demo-part"},[e("PressTag",{attrs:{type:"primary",closeable:""},on:{close:function(t){return a.onClose("primary")}}},[a._v(" "+a._s(a.t("tag"))+" ")])],1):a._e(),e("div",{staticClass:"demo-part"},[a.show.success?e("PressTag",{attrs:{type:"success",closeable:""},on:{close:function(t){return a.onClose("success")}}},[a._v(" "+a._s(a.t("tag"))+" ")]):a._e()],1)])],2)},s=[],o=e("1ea2"),l={i18n:{"zh-CN":{type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smallSize:"小号标签",largeSize:"大号标签",mediumSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smallSize:"Small Size",largeSize:"Large Size",mediumSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},components:{PressTag:o["a"]},data:function(){return{list:[{type:"primary"},{type:"success"},{type:"danger"},{type:"warning"}],demoList:[{key:"basic",title:this.t("basicUsage")},{key:"plain",title:this.t("plain"),plain:!0},{key:"round",title:this.t("round"),round:!0},{key:"mark",title:this.t("mark"),mark:!0}],show:{primary:!0,success:!0}}},methods:{onClose:function(a){console.log("type",a),this.show[a]=!1}}},i=l,n=(e("ae2f"),e("33b6")),d=Object(n["a"])(i,r,s,!1,null,"75921987",null);t["default"]=d.exports},"8bf6":function(a,t,e){var r=e("ee2b");t=r(!1),t.push([a.i,'.press-tag[data-v-2d37b07a]{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--tag-padding,0 4px);color:var(--tag-text-color,#fff);font-size:var(--tag-font-size,12px);line-height:var(--tag-line-height,16px);border-radius:var(--tag-border-radius,2px)}.press-tag--default[data-v-2d37b07a]{background-color:var(--tag-default-color,#969799)}.press-tag--default.press-tag--plain[data-v-2d37b07a]{color:var(--tag-default-color,#969799)}.press-tag--danger[data-v-2d37b07a]{background-color:var(--tag-danger-color,#ee0a24)}.press-tag--danger.press-tag--plain[data-v-2d37b07a]{color:var(--tag-danger-color,#ee0a24)}.press-tag--primary[data-v-2d37b07a]{background-color:var(--tag-primary-color,#1989fa)}.press-tag--primary.press-tag--plain[data-v-2d37b07a]{color:var(--tag-primary-color,#1989fa)}.press-tag--success[data-v-2d37b07a]{background-color:var(--tag-success-color,#07c160)}.press-tag--success.press-tag--plain[data-v-2d37b07a]{color:var(--tag-success-color,#07c160)}.press-tag--warning[data-v-2d37b07a]{background-color:var(--tag-warning-color,#ff976a)}.press-tag--warning.press-tag--plain[data-v-2d37b07a]{color:var(--tag-warning-color,#ff976a)}.press-tag--plain[data-v-2d37b07a]{background-color:var(--tag-plain-background-color,#fff)}.press-tag--plain[data-v-2d37b07a]:before{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid currentColor;border-radius:inherit;content:"";pointer-events:none}.press-tag--medium[data-v-2d37b07a]{padding:var(--tag-medium-padding,2px 6px)}.press-tag--large[data-v-2d37b07a]{padding:var(--tag-large-padding,4px 8px);font-size:var(--tag-large-font-size,14px);border-radius:var(--tag-large-border-radius,4px)}.press-tag--mark[data-v-2d37b07a]{border-radius:0 var(--tag-round-border-radius,var(--tag-round-border-radius,999px)) var(--tag-round-border-radius,var(--tag-round-border-radius,999px)) 0}.press-tag--mark[data-v-2d37b07a]:after{display:block;width:2px;content:""}.press-tag--round[data-v-2d37b07a]{border-radius:var(--tag-round-border-radius,999px)}.press-tag__close[data-v-2d37b07a]{min-width:1em;margin-left:2px}',""]),a.exports=t},a358:function(a,t,e){var r=e("ee2b");t=r(!1),t.push([a.i,".demo-part[data-v-75921987]{margin-right:12px;display:inline-block}",""]),a.exports=t},ae2f:function(a,t,e){"use strict";e("564b")},d49e:function(a,t,e){var r=e("8bf6");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var s=e("c69b").default;s("08f55a14",r,!0,{sourceMap:!1,shadowMode:!1})}}]);