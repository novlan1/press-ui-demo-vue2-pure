(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7215728a"],{"16bf":function(o,t,e){"use strict";e.r(t);var s,c=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("PressNoticeBar",{attrs:{text:"向下滑动即可展示组件。"}}),e("scroll-view",{staticClass:"demo-scroll-view",attrs:{"scroll-y":"",enhanced:"","scroll-with-animation":"","scroll-top":o.newScrollTop},on:{scroll:o.onScroll}},[e("div",{staticClass:"demo-inner"},o._l(Object.keys(o.valueMap),(function(t){return e("press-cell",{key:t,attrs:{title:o.t(t),clickable:""},on:{click:function(e){o.valueMap[t]=!o.valueMap[t]}},scopedSlots:o._u([{key:"right-icon",fn:function(){return[e("PressCheckbox",{attrs:{value:o.valueMap[t],shape:"square"},on:{change:function(e){return o.onChange(e,t)}}})]},proxy:!0}],null,!0)})})),1)]),e("PressBackTop",{attrs:{"scroll-top":o.scrollTop,"scroll-to-top":o.scrollToTop,mode:o.backTopProps.mode,top:o.backTopProps.top,icon:o.backTopProps.icon,"icon-style":o.backTopProps.iconStyle,"custom-style":o.backTopProps.customStyle,text:o.backTopProps.text}})],1)},l=[],a=e("8155"),n=e("453a"),r=e("0d02"),i=e("0f1e"),p={i18n:{"zh-CN":{square:"显示方形",icon:"自定义图标",distance:"自定义距离",style:"自定义样式",text:"是否显示文本"},"en-US":{square:"Square",icon:"Custom Icon",distance:"Custom Distance",style:"Custom Style",text:"Custom Text"}},components:{PressBackTop:a["a"],PressCheckbox:n["a"],PressNoticeBar:r["a"]},mixins:[i["a"]],data:function(){return s=this,{scrollTop:0,newScrollTop:0,valueMap:{square:!1,icon:!1,distance:!1,style:!1,text:!1}}},computed:{backTopProps:function(){var o=this.valueMap,t=o.square,e=o.icon,s=o.distance,c=o.style,l=o.text;return{mode:t?"square":"circle",icon:e?"arrow-up":"back-top",top:s?10:100,iconStyle:c?"color: #fff":"",customStyle:c?"background-color: #2979ff":"",text:l?"顶部":""}}},methods:{onChange:function(o,t){this.valueMap[t]=o},onScroll:function(o){var t;this.scrollTop=o.target.scrollTop||(null===(t=o.detail)||void 0===t?void 0:t.scrollTop)||0,console.log("[scrollTop]",o,this.scrollTop)},scrollToTop:function(){s.newScrollTop=s.scrollTop,setTimeout((function(){s.newScrollTop=0}))}}},u=p,d=(e("b366"),e("33b6")),f=Object(d["a"])(u,c,l,!1,null,"1222d76b",null);t["default"]=f.exports},6215:function(o,t,e){var s=e("aa06");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[o.i,s,""]]),s.locals&&(o.exports=s.locals);var c=e("c69b").default;c("3ddb1c5a",s,!0,{sourceMap:!1,shadowMode:!1})},aa06:function(o,t,e){var s=e("ee2b");t=s(!1),t.push([o.i,".demo-wrap[data-v-1222d76b]{font-size:15px}.demo-scroll-view[data-v-1222d76b]{height:100%}.demo-inner[data-v-1222d76b]{height:calc(100% + 300px);padding:10px 0}",""]),o.exports=t},b366:function(o,t,e){"use strict";e("6215")}}]);