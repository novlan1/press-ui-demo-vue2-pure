(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33b70cb8"],{"101d":function(t,s,e){var o=e("ee2b");s=o(!1),s.push([t.i,".child[data-v-3d70b70b]{width:40px;height:40px;background:#f2f3f5;border-radius:4px}.badge-icon[data-v-3d70b70b]{display:block;font-size:10px;line-height:16px}",""]),t.exports=s},"1ae1":function(t,s,e){var o=e("ee2b");s=o(!1),s.push([t.i,".press-badge[data-v-b1a93008]{position:relative;display:inline-block}.press-badge--fixed .press-badge__info[data-v-b1a93008]{position:absolute;top:0;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.press-badge__info[data-v-b1a93008]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;height:var(--info-size,16px);min-width:var(--info-size,16px);padding:var(--info-padding,0 3px);color:var(--info-color,#fff);font-weight:var(--info-font-weight,500);font-size:var(--info-font-size,12px);font-family:var(--info-font-family,-apple-system-font,Helvetica Neue,Arial,sans-serif);background-color:var(--info-background-color,#ee0a24);border:var(--info-border-width,1px) solid #fff;border-radius:var(--info-size,16px)}.press-badge__info--dot[data-v-b1a93008]{min-width:0;border-radius:100%;width:var(--info-dot-size,8px);height:var(--info-dot-size,8px);background-color:var(--info-dot-color,#ee0a24)}",""]),t.exports=s},"5e45":function(t,s,e){var o=e("101d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("c69b").default;a("1c3f8319",o,!0,{sourceMap:!1,shadowMode:!1})},"786c":function(t,s,e){"use strict";e("9fce")},"9fce":function(t,s,e){var o=e("1ae1");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("c69b").default;a("856b7432",o,!0,{sourceMap:!1,shadowMode:!1})},db91:function(t,s,e){"use strict";e("5e45")},dbd0:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:t.t("basicUsage")}},[e("PressBadge",{attrs:{content:5,"custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{content:10,"custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{content:"Hot","custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{dot:""}},[e("div",{staticClass:"child"})])],1),e("demo-block",{attrs:{title:t.t("max")}},[e("PressBadge",{attrs:{content:20,max:"9","custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{content:50,max:"20","custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{content:200,max:"99","custom-style":t.customStyle}},[e("div",{staticClass:"child"})])],1),e("demo-block",{attrs:{title:t.t("color")}},[e("PressBadge",{attrs:{content:5,color:"#1989fa","custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{content:10,color:"#1989fa","custom-style":t.customStyle}},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{dot:"",color:"#1989fa","custom-style":t.customStyle}},[e("div",{staticClass:"child"})])],1),e("demo-block",{attrs:{title:t.t("slot")}},[e("PressBadge",{attrs:{"custom-style":t.customStyle},scopedSlots:t._u([{key:"content",fn:function(){return[e("PressIconPlus",{staticClass:"badge-icon",attrs:{name:"success"}})]},proxy:!0}])},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{"custom-style":t.customStyle},scopedSlots:t._u([{key:"content",fn:function(){return[e("PressIconPlus",{staticClass:"badge-icon",attrs:{name:"cross"}})]},proxy:!0}])},[e("div",{staticClass:"child"})]),e("PressBadge",{attrs:{"custom-style":t.customStyle},scopedSlots:t._u([{key:"content",fn:function(){return[e("PressIconPlus",{staticClass:"badge-icon",attrs:{name:"down"}})]},proxy:!0}])},[e("div",{staticClass:"child"})])],1),e("demo-block",{attrs:{title:t.t("block")}},[e("PressBadge",{attrs:{content:20,"custom-style":t.customStyle}}),e("PressBadge",{attrs:{content:200,max:"99"}})],1)],1)},a=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:t.badgeClass,style:t.customStyle},[t._t("default"),e("div",{class:t.infoClass,style:t.infoStyle},[t._t("content",[t._v(" "+t._s(t.dot?"":t.innerContent)+" ")])],2)],2)},i=[],c=(e("e087"),e("a88c"),e("d0de")),r=e("c732"),l={name:"PressBadge",components:{},options:{styleIsolation:"shared"},props:{dot:{type:Boolean,default:!1},content:{type:[String,Number],default:""},color:{type:String,default:"#ee0a24"},max:{type:[String,Number],default:""},customStyle:{type:String,default:""},customClass:{type:String,default:""}},data:function(){return{}},computed:{badgeClass:function(){var t=this.hasChild,s=this.customClass;return"".concat(s," ").concat(r["a"].bem2("badge",{fixed:t}))},infoClass:function(){var t=this.dot;return"".concat(r["a"].bem2("badge__info",{dot:t}))},innerContent:function(){var t=this.content,s=this.max;return t>s?"".concat(t,"+"):t},infoStyle:function(){return Object(c["a"])({backgroundColor:this.color})},hasChild:function(){var t;return!(null===(t=this.$slots)||void 0===t||!t.default)}},mounted:function(){},methods:{}},d=l,u=(e("786c"),e("33b6")),f=Object(u["a"])(d,n,i,!1,null,"b1a93008",null),b=f.exports,m=e("101c"),p={i18n:{"zh-CN":{max:"最大值",color:"自定义颜色",slot:"自定义徽标内容",block:"独立展示"},"en-US":{max:"Max",color:"Color",slot:"Slot",block:"Block"}},components:{PressBadge:b,PressIconPlus:m["a"]},data:function(){return{customStyle:"margin-right: 16px"}},methods:{}},g=p,y=(e("db91"),Object(u["a"])(g,o,a,!1,null,"3d70b70b",null));s["default"]=y.exports}}]);