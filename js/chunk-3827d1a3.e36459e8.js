(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3827d1a3"],{"16bf":function(o,t,e){"use strict";e.r(t);var c,s=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("press-notice-bar",{attrs:{text:"向下滑动即可展示组件。"}}),e("scroll-view",{staticClass:"demo-scroll-view",attrs:{"scroll-y":"",enhanced:"","scroll-with-animation":"","scroll-top":o.newScrollTop},on:{scroll:o.onScroll}},[e("div",{staticClass:"demo-inner"},o._l(Object.keys(o.valueMap),(function(t){return e("press-cell",{key:t,attrs:{title:o.t(t),clickable:""},on:{click:function(e){o.valueMap[t]=!o.valueMap[t]}},scopedSlots:o._u([{key:"right-icon",fn:function(){return[e("PressCheckbox",{attrs:{value:o.valueMap[t],shape:"square"},on:{change:function(e){return o.onChange(e,t)}}})]},proxy:!0}],null,!0)})})),1)]),e("PressBackTop",{attrs:{"scroll-top":o.scrollTop,"scroll-to-top":o.scrollToTop,mode:o.backTopProps.mode,top:o.backTopProps.top,icon:o.backTopProps.icon,"icon-style":o.backTopProps.iconStyle,"custom-style":o.backTopProps.customStyle,text:o.backTopProps.text}})],1)},l=[],a=e("b067"),n=e("9c79"),r=e("f58e"),i=e("629b"),p={i18n:{"zh-CN":{square:"显示方形",icon:"自定义图标",distance:"自定义距离",style:"自定义样式",text:"是否显示文本"},"en-US":{square:"Square",icon:"Custom Icon",distance:"Custom Distance",style:"Custom Style",text:"Custom Text"}},components:{PressBackTop:a["a"],PressCheckbox:n["a"],PressNoticeBar:r["a"]},mixins:[i["a"]],data:function(){return c=this,{scrollTop:0,newScrollTop:0,valueMap:{square:!1,icon:!1,distance:!1,style:!1,text:!1}}},computed:{backTopProps:function(){var o=this.valueMap,t=o.square,e=o.icon,c=o.distance,s=o.style,l=o.text;return{mode:t?"square":"circle",icon:e?"arrow-up":"back-top",top:c?10:100,iconStyle:s?"color: #fff":"",customStyle:s?"background-color: #2979ff":"",text:l?"顶部":""}}},methods:{onChange:function(o,t){this.valueMap[t]=o},onScroll:function(o){var t;this.scrollTop=o.target.scrollTop||(null===(t=o.detail)||void 0===t?void 0:t.scrollTop)||0,console.log("[scrollTop]",o,this.scrollTop)},scrollToTop:function(){c.newScrollTop=c.scrollTop,setTimeout((function(){c.newScrollTop=0}))}}},u=p,d=(e("caf1"),e("33b6")),f=Object(d["a"])(u,s,l,!1,null,"e232b0ca",null);t["default"]=f.exports},"7c72":function(o,t,e){var c=e("dbf5");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[o.i,c,""]]),c.locals&&(o.exports=c.locals);var s=e("c69b").default;s("6ac62902",c,!0,{sourceMap:!1,shadowMode:!1})},caf1:function(o,t,e){"use strict";e("7c72")},dbf5:function(o,t,e){var c=e("ee2b");t=c(!1),t.push([o.i,".demo-wrap[data-v-e232b0ca]{font-size:15px}.demo-scroll-view[data-v-e232b0ca]{height:100%}.demo-inner[data-v-e232b0ca]{height:calc(100% + 300px);padding:10px 0}",""]),o.exports=t}}]);