(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44642db0"],{"4bdb":function(e,t,a){var o=a("c1d1");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("c69b").default;r("4de953c5",o,!0,{sourceMap:!1,shadowMode:!1})},8218:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:e.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("PressColorPicker",{on:{change:e.onChange,"palette-bar-change":e.onPaletteBarChange}})],1),a("demo-block",{attrs:{title:e.t("multiple"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("PressColorPicker",{attrs:{type:"multiple"},on:{change:e.onChange,"palette-bar-change":e.onPaletteBarChange}})],1),a("demo-block",{attrs:{title:e.t("format"),description:"abc","header-style":e.headerStyle,"section-style":e.sectionStyle}},[e._l(e.lineList,(function(t,o){return a("div",{key:o,staticClass:"format-line"},e._l(t,(function(t){return a("div",{key:t,staticClass:"format-item",class:e.curFormat===t?"active":"",on:{click:function(a){return a.stopPropagation(),e.clickFormat(t)}}},[e.curFormat===t?a("PressIconPlus",{attrs:{name:"success",size:"12","custom-style":"position: absolute;left: 2.5px;top: 2.1px;z-index: 1;color: #fff"}}):e._e(),e._v(" "+e._s(t)+" ")],1)})),0)})),a("PressColorPicker",{attrs:{type:"multiple","enable-alpha":"",format:e.curFormat},on:{change:e.onChange,"palette-bar-change":e.onPaletteBarChange}})],2),a("demo-block",{attrs:{title:e.t("preview"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("PressColorPicker",{attrs:{type:"multiple","show-preview":"","enable-alpha":"",value:"#70de2f"},on:{change:e.onChange,"palette-bar-change":e.onPaletteBarChange}})],1)],1)},r=[],i=a("8ea1"),n=a("7664"),l={i18n:{"zh-CN":{multiple:"带色板",format:"自定义格式",mode:"组件模式选择",preview:"显示预览"},"en-US":{multiple:"Multiple",format:"Format",mode:"Mode",preview:"Preview"}},components:{PressColorPicker:i["a"],PressIconPlus:n["a"]},data:function(){return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",curFormat:"CSS",lineList:[["CSS","HEX","RGB"],["HSL","HSV","CMYK"]]}},methods:{onChange:function(e){console.log(">>> change.value ",e)},onPaletteBarChange:function(e){console.log(">>> paletteBarChange.value ",e)},clickFormat:function(e){this.curFormat=e}}},c=l,s=(a("9acf"),a("33b6")),d=Object(s["a"])(c,o,r,!1,null,"4cc7ad06",null);t["default"]=d.exports},"9acf":function(e,t,a){"use strict";a("4bdb")},c1d1:function(e,t,a){var o=a("ee2b");t=o(!1),t.push([e.i,'.demo-wrap[data-v-4cc7ad06]{--press-color-picker-panel-width:100%}.format-line[data-v-4cc7ad06]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:56px;margin:0 16px 20px}.format-item[data-v-4cc7ad06],.format-line[data-v-4cc7ad06]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.format-item[data-v-4cc7ad06]{border-radius:6px;height:100%;background-color:#fff;padding:16px;line-height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;overflow:hidden}.format-item.active[data-v-4cc7ad06]{border:1px solid #0052d9}.format-item.active[data-v-4cc7ad06]:after{content:"";position:absolute;width:0;height:0;left:0;top:0;border-top-left-radius:6px;border-top:28px solid #0052d9;border-right:28px solid transparent;border-radius:0}.format-item[data-v-4cc7ad06]:not(:last-child){margin-right:12px}',""]),e.exports=t}}]);