(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656b81cc"],{"1e96":function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"demo-wrap"},[t("demo-block",{attrs:{title:a.t("basicUsage")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.basic},on:{change:function(e){return a.onChange(e,"basic")}}},[t("PressRadio",{attrs:{name:"a"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("horizontal")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.horizontal,direction:"horizontal"},on:{change:function(e){return a.onChange(e,"horizontal")}}},[t("PressRadio",{attrs:{name:"a"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("disabled")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.disabled,disabled:""},on:{change:function(e){return a.onChange(e,"disabled")}}},[t("PressRadio",{attrs:{name:"a"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("customShape")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.square},on:{change:function(e){return a.onChange(e,"square")}}},[t("PressRadio",{attrs:{name:"a",shape:"square"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b",shape:"square"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("customColor")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.customStyle},on:{change:function(e){return a.onChange(e,"customStyle")}}},[t("PressRadio",{attrs:{name:"a","checked-color":"#07c160"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b","checked-color":"#07c160"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("customIconSize")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.customSize},on:{change:function(e){return a.onChange(e,"customSize")}}},[t("PressRadio",{attrs:{name:"a","icon-size":"24px"}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b","icon-size":"24px"}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("customIcon")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.customIcon},on:{change:function(e){return a.onChange(e,"customIcon")}}},[t("PressRadio",{attrs:{name:"a","use-icon-slot":""},scopedSlots:a._u([{key:"icon",fn:function(){return[t("img",{staticClass:"img",attrs:{src:"a"===a.valueMap.customIcon?a.icon.active:a.icon.normal}})]},proxy:!0}])},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b","use-icon-slot":""},scopedSlots:a._u([{key:"icon",fn:function(){return[t("img",{staticClass:"img",attrs:{src:"b"===a.valueMap.customIcon?a.icon.active:a.icon.normal}})]},proxy:!0}])},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("disableLabel")}},[t("PressRadioGroup",{attrs:{value:a.valueMap.labelDisabled},on:{change:function(e){return a.onChange(e,"labelDisabled")}}},[t("PressRadio",{attrs:{name:"a","label-disabled":""}},[a._v(" "+a._s(a.t("radio"))+" 1 ")]),t("PressRadio",{attrs:{name:"b","label-disabled":""}},[a._v(" "+a._s(a.t("radio"))+" 2 ")])],1)],1),t("demo-block",{attrs:{title:a.t("withCell"),"section-style":"margin: 0;"}},[t("PressRadioGroup",{attrs:{value:a.valueMap.cell},on:{change:function(e){return a.onChange(e,"cell")}}},[t("PressCellGroup",[t("PressCell",{attrs:{title:a.t("radio")+" 1",clickable:"","data-name":"1"},on:{click:function(e){a.valueMap.cell="1"}},scopedSlots:a._u([{key:"right-icon",fn:function(){return[t("PressRadio",{attrs:{name:"1"}})]},proxy:!0}])}),t("PressCell",{attrs:{title:a.t("radio")+" 2",clickable:"","data-name":"2"},on:{click:function(e){a.valueMap.cell="2"}},scopedSlots:a._u([{key:"right-icon",fn:function(){return[t("PressRadio",{attrs:{name:"2"}})]},proxy:!0}])})],1)],1)],1)],1)},s=[],r=t("bf80"),n=t("e0ca"),i=t("8366"),c=t("1f38"),l={i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"与 Cell 组件一起使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}},components:{PressRadio:r["a"],PressRadioGroup:n["a"],PressCell:i["a"],PressCellGroup:c["a"]},data:function(){return{valueMap:{basic:"a",horizontal:"a",disabled:"a",square:"a",customStyle:"a",customSize:"a",customIcon:"a",labelDisabled:"a",cell:"1"},icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}},methods:{onChange:function(a,e){console.log("onChange.val",a)}}},u=l,d=(t("6316"),t("33b6")),m=Object(d["a"])(u,o,s,!1,null,"26789ce0",null);e["default"]=m.exports},4485:function(a,e,t){var o=t("e1c2");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var s=t("c69b").default;s("464ae1ea",o,!0,{sourceMap:!1,shadowMode:!1})},6316:function(a,e,t){"use strict";t("4485")},e1c2:function(a,e,t){var o=t("ee2b");e=o(!1),e.push([a.i,"[data-v-26789ce0] .press-radio{margin-bottom:8px}.img[data-v-26789ce0]{height:20px;width:25px}",""]),a.exports=e}}]);