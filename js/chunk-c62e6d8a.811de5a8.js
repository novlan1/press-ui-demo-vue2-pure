(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c62e6d8a"],{"16bf":function(o,t,e){"use strict";e.r(t);var c,s=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("press-notice-bar",{attrs:{text:"向下滑动即可展示组件。"}}),e("scroll-view",{staticClass:"demo-scroll-view",attrs:{"scroll-y":"",enhanced:"","scroll-with-animation":"","scroll-top":o.newScrollTop},on:{scroll:o.onScroll}},[e("div",{staticClass:"demo-inner"},o._l(Object.keys(o.valueMap),(function(t){return e("press-cell",{key:t,attrs:{title:o.t(t),clickable:""},on:{click:function(e){o.valueMap[t]=!o.valueMap[t]}},scopedSlots:o._u([{key:"right-icon",fn:function(){return[e("PressCheckbox",{attrs:{value:o.valueMap[t],shape:"square"},on:{change:function(e){return o.onChange(e,t)}}})]},proxy:!0}],null,!0)})})),1)]),e("PressBackTop",{attrs:{"scroll-top":o.scrollTop,"scroll-to-top":o.scrollToTop,mode:o.backTopProps.mode,top:o.backTopProps.top,icon:o.backTopProps.icon,"icon-style":o.backTopProps.iconStyle,"custom-style":o.backTopProps.customStyle,text:o.backTopProps.text}})],1)},l=[],a=e("8779"),n=e("5b96"),r=e("a6d7"),i={i18n:{"zh-CN":{square:"显示方形",icon:"自定义图标",distance:"自定义距离",style:"自定义样式",text:"是否显示文本"},"en-US":{square:"Square",icon:"Custom Icon",distance:"Custom Distance",style:"Custom Style",text:"Custom Text"}},components:{PressBackTop:a["a"],PressCheckbox:n["a"],PressNoticeBar:r["a"]},data:function(){return c=this,{scrollTop:0,newScrollTop:0,valueMap:{square:!1,icon:!1,distance:!1,style:!1,text:!1}}},computed:{backTopProps:function(){var o=this.valueMap,t=o.square,e=o.icon,c=o.distance,s=o.style,l=o.text;return{mode:t?"square":"circle",icon:e?"arrow-up":"back-top",top:c?10:100,iconStyle:s?"color: #fff":"",customStyle:s?"background-color: #2979ff":"",text:l?"顶部":""}}},methods:{onChange:function(o,t){this.valueMap[t]=o},onScroll:function(o){this.scrollTop=o.target.scrollTop,console.log("[scrollTop]",this.scrollTop)},scrollToTop:function(){c.newScrollTop=c.scrollTop,setTimeout((function(){c.newScrollTop=0}))}}},p=i,u=(e("4881"),e("2777")),d=Object(u["a"])(p,s,l,!1,null,"29467051",null);t["default"]=d.exports},4881:function(o,t,e){"use strict";e("c765")},"854d":function(o,t,e){var c=e("ee2b");t=c(!1),t.push([o.i,".demo-wrap[data-v-29467051]{font-size:15px}.demo-scroll-view[data-v-29467051]{height:100%}.demo-inner[data-v-29467051]{height:calc(100% + 300px);padding:10px 0}",""]),o.exports=t},c765:function(o,t,e){var c=e("854d");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[o.i,c,""]]),c.locals&&(o.exports=c.locals);var s=e("c69b").default;s("27a1567c",c,!0,{sourceMap:!1,shadowMode:!1})}}]);