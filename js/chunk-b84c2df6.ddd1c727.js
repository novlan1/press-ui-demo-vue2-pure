(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b84c2df6"],{"03e1":function(e,t,n){"use strict";n("9186")},"0629":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("69b0"),o=n("3eac"),a=n("7029"),r=n("f6bf"),s={};Object(a["b"])()&&(s={ScrollView:o["a"]},Object(r["g"])(["uni-scroll-view"],app));var c={components:Object(i["a"])({},s)}},"09bc":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:e.t("basicUsage")}},[n("press-area",{attrs:{"area-list":e.areaList},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})],1),n("demo-block",{attrs:{title:e.t("title2")}},[n("press-area",{attrs:{"area-list":e.areaList,value:"440304"},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})],1),n("demo-block",{attrs:{title:e.t("title3")}},[n("press-area",{attrs:{"area-list":e.areaList,"columns-num":2,value:"440304"},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})],1),n("demo-block",{attrs:{title:e.t("title4")}},[n("press-area",{attrs:{"area-list":e.areaList,value:"440304","columns-placeholder":e.t("columnsPlaceholder")},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})],1),n("demo-block",{attrs:{title:e.t("parseData")}},[n("press-area",{attrs:{"area-list":e.parseData(e.areaList),value:"070000"},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})],1),n("demo-block",{attrs:{title:e.t("withPopup")}},[n("press-cell",{attrs:{title:"Normal","is-link":""},on:{click:function(t){return e.onShowAreaPopup("")}}}),n("press-cell",{attrs:{title:"E-Sport","is-link":""},on:{click:function(t){return e.onShowAreaPopup("e-sport")}}})],1),n("PressAreaPopup",{attrs:{show:e.showPopup,"area-list":e.areaList,value:e.selectArea,type:e.areaType},on:{"update:show":function(t){return e.showPopup=t},confirm:e.onConfirmArea,cancel:e.onCancelPopup}})],1)},o=[],a=(n("2aaa"),n("06dc"),n("b4ca"),n("226c"),n("414c"),n("7475"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("press-picker",{ref:"pressPicker",class:["press-area__picker",e.customClass],attrs:{"active-class":e.activeClass,"toolbar-class":e.toolbarClass,"column-class":e.columnClass,"show-toolbar":e.showToolbar,"value-key":"name",title:e.title,loading:e.loading,columns:e.computedColumns,"item-height":e.itemHeight,"visible-item-count":e.visibleItemCount,"cancel-button-text":e.cancelButtonText,"confirm-button-text":e.confirmButtonText,"use-momentum":e.useMomentum,"swipe-duration":e.swipeDuration},on:{change:e.onChange,confirm:e.onConfirm,cancel:e.onCancel}})}),r=[],s=n("9b85"),c=n("69b0"),l=(n("0508"),n("cdf1"),n("4920"),n("948b"),n("f1f0"),n("faa0"),n("efc3")),u=n("a88e"),f=n("5255"),p=n("a2dd"),d=n("3c4e"),h="000000",m={name:"PressArea",options:Object(c["a"])(Object(c["a"])({},d["b"]),{},{styleIsolation:"shared"}),components:{PressPicker:l["a"]},props:Object(c["a"])(Object(c["a"])(Object(c["a"])({},u["a"]),{},{showToolbar:{type:Boolean,default:!0},value:{type:String,default:""},areaList:{type:Object,default:function(){return{}}},columnsNum:{type:Number,default:3},columnsPlaceholder:{type:Array,default:function(){return[]}}},d["c"]),{},{activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}}),emits:["cancel","confirm","change"],data:function(){return{columns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{},code:this.value}},computed:{computedColumns:function(){var e=this.columns,t=this.columnsNum;return p["a"].displayColumns(e,t)}},watch:{value:{handler:function(e){this.code=e,this.setValues()}},areaList:{handler:function(){this.setValues()}},columnsPlaceholder:{handler:function(e){this.typeToColumnsPlaceholder={province:e[0]||"",city:e[1]||"",county:e[2]||""}},immediate:!0}},mounted:function(){var e=this;Object(f["e"])((function(){e.setValues()}))},methods:{getPicker:function(){return null==this.picker&&(this.picker=this.$refs.pressPicker),this.picker},onCancel:function(e){return this.emit("cancel",e),e},onConfirm:function(e){var t=e.index,n=e.value;n=this.parseValues(n);var i={value:n,index:t};return this.emit("confirm",i),i},emit:function(e,t){t.values=t.value,delete t.value,this.$emit(e,t)},parseValues:function(e){var t=this.columnsPlaceholder;return e.map((function(e,n){return!e||e.code&&e.name!==t[n]?e:Object(c["a"])(Object(c["a"])({},e),{},{code:"",name:""})}))},onChange:function(e){var t,n=this,i=e.index,o=e.value;this.code=o[i].code;var a=this.getPicker();null===(t=this.setValues())||void 0===t||t.then((function(){n.$emit("change",{values:n.parseValues(a.getValues()),index:i})}))},getConfig:function(e){var t=this.areaList;return t&&t["".concat(e,"_list")]||{}},getList:function(e,t){if("province"!==e&&!t)return[];var n=this.typeToColumnsPlaceholder,i=this.getConfig(e),o=Object.keys(i).map((function(e){return{code:e,name:i[e]}}));if(null!=t&&("9"===t[0]&&"city"===e&&(t="9"),o=o.filter((function(e){return 0===e.code.indexOf(t)}))),n[e]&&o.length){var a="province"===e?"":"city"===e?h.slice(2,4):h.slice(4,6);o.unshift({code:"".concat(t).concat(a),name:n[e]})}return o},getIndex:function(e,t){var n="province"===e?2:"city"===e?4:6,i=this.getList(e,t.slice(0,n-2));"9"===t[0]&&"province"===e&&(n=1),t=t.slice(0,n);for(var o=0;o<i.length;o++)if(i[o].code.slice(0,n)===t)return o;return 0},setValues:function(){var e=this.getPicker();if(e){var t=this.code||this.getDefaultCode(),n=this.getList("province"),i=this.getList("city",t.slice(0,2)),o=[],a=[],r=this.columnsNum;if(r>=1&&(o.push(e.setColumnValues(0,n,!1)),a.push(this.getIndex("province",t))),r>=2&&(o.push(e.setColumnValues(1,i,!1)),a.push(this.getIndex("city",t)),i.length&&"00"===t.slice(2,4))){var c=Object(s["a"])(i,1);t=c[0].code}return 3===r&&(o.push(e.setColumnValues(2,this.getList("county",t.slice(0,4)),!1)),a.push(this.getIndex("county",t))),Promise.all(o).catch((function(){})).then((function(){return e.setIndexes(a)})).catch((function(){}))}},getDefaultCode:function(){var e=this.columnsPlaceholder;if(e.length)return h;var t=Object.keys(this.getConfig("county"));if(t[0])return t[0];var n=Object.keys(this.getConfig("city"));return n[0]?n[0]:""},getValues:function(){var e=this.getPicker();return e?this.parseValues(e.getValues().filter((function(e){return!!e}))):[]},getIndexes:function(){var e=this.getPicker();return e&&(null===e||void 0===e?void 0:e.getIndexes())||[]},getDetail:function(){var e=this.getValues(),t={code:"",country:"",province:"",city:"",county:""};if(!e.length)return t;var n=e.map((function(e){return e.name}));return t.code=e[e.length-1].code,"9"===t.code[0]?(t.country=n[1]||"",t.province=n[2]||""):(t.province=n[0]||"",t.city=n[1]||"",t.county=n[2]||""),t},reset:function(e){return this.code=e||"",this.setValues()}}},b=m,v=n("2777"),g=Object(v["a"])(b,a,r,!1,null,"7743fc64",null),y=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isESport?n("PressPopup",{attrs:{"is-show":e.show,button:"确定","close-icon":!0,title:"选择地区"},on:{confirm:e.confirm,cancel:function(t){return e.popupChanged(!1)}}},[n("PressArea",{ref:"pressArea",attrs:{"area-list":e.areaList,value:e.value,"show-toolbar":!1}})],1):n("PressPopupPlus",{attrs:{show:e.show,position:"bottom"},on:{input:e.popupChanged}},[n("PressArea",{ref:"pressArea",attrs:{title:"选择地区","area-list":e.areaList,value:e.value},on:{cancel:function(t){return e.popupChanged(!1)},confirm:e.confirm}})],1)],1)},C=[],k=n("7c9c"),w=n("f165"),_={name:"PressAreaPopup",components:{PressPopup:k["a"],PressPopupPlus:w["a"],PressArea:y},props:{show:{type:Boolean,default:!1},areaList:{type:Object,default:function(){return{}}},value:{type:String,default:""},type:{type:String,default:""}},computed:{isESport:function(){return"e-sport"===this.type}},methods:{popupChanged:function(e){this.$emit("update:show",e)},confirm:function(){this.popupChanged(!1);var e=this.$refs.pressArea.getValues(),t=this.$refs.pressArea.getIndexes();this.$emit("confirm",e,t)}}},j=_,O=Object(v["a"])(j,x,C,!1,null,null,null),P=O.exports,I=n("271e");function S(e){var t=e||{},n=t.province_list,i=void 0===n?{}:n,o=t.city_list,a=void 0===o?{}:o,r={},s={ALL:{value:"07",label:"全部"},OFFLINE:{value:"08",label:"线下"},ONLINE:{value:"09",label:"线上"}},c=s.OFFLINE.value;return r.city_list=Object.keys(i).reduce((function(e,t){var n=c+t.slice(0,4);return e[n]=i[t],e}),{}),r.province_list=Object.keys(s).reduce((function(e,t){var n=s[t];return e["".concat(n.value,"0000")]=n.label,e}),{}),r.county_list=Object.keys(a).reduce((function(e,t){var n=c+t.slice(0,4);return e[n]=a[t],e}),{}),r}var T={province_list:{11e4:"Beijing",33e4:"Zhejiang",81e4:"Hong Kong"},city_list:{110100:"Beijing City",330100:"Hangzhou",330200:"Ningbo",330300:"Wenzhou",330400:"Jiaxin",331100:"Lishui",810100:"Hong Kong Island",810200:"Kowloon",810300:"New Territories"},county_list:{110101:"Dongcheng",110102:"Xicheng",110105:"Chaoyang",110106:"Fengtai",110108:"Haidian",110111:"Fangshan",110112:"Tongzhou",110113:"Shunyi",110114:"Changping",110115:"Daxing",330105:"Gongshu",330106:"Xihu",330108:"Binjiang",330109:"Xiaoshan",330110:"Yuhang",330111:"Fuyang",330127:"Chunan",330182:"Jiande",330185:"Linan",330206:"Beilun",330211:"Zhenhai",330225:"Xiangshan",330226:"Ninghai",330281:"Yuyao",330282:"Cixi",330327:"Cangnan",330328:"Wencheng",330329:"Shuntai",330381:"Ruian",330382:"Yueqing",330402:"Nanhu",330421:"Jiashan",330424:"Haiyan",330481:"Haining",330482:"Pinghu",330483:"Tongxiang",331102:"Liandu District",331121:"Qingtian County",331125:"Yunhe County",331181:"Longquan County",810101:"Central",810102:"Wan Chai",810202:"Mong Kok",810203:"Sham Shui Po",810204:"Chuk Un",810205:"Kwun Tong",810303:"Sha Tin",810305:"Yuen Long",810306:"Tuen Mun",810307:"Tsuen Wan",810309:"Lantau Island"}},V={i18n:{"zh-CN":{title2:"选中省市区",title3:"配置显示列",title4:"配置列占位提示文字",columnsPlaceholder:["请选择","请选择","请选择"],withPopup:"结合Popup",popupTitle:"选择地区",parseData:"特殊处理数据",areaList:p["b"]},"en-US":{title2:"Initial Value",title3:"Columns Number",title4:"Columns Placeholder",columnsPlaceholder:["Choose","Choose","Choose"],withPopup:"With Popup",popupTitle:"Select Area",parseData:"Parse Data",areaList:function(){return Promise.resolve(T)}}},components:{PressArea:y,PressCell:I["a"],PressAreaPopup:P},data:function(){return{areaList:{},showPopup:!1,selectArea:"",areaType:""}},mounted:function(){this.init()},methods:{parseData:S,onConfirm:function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).log.apply(e,["[onConfirm]: "].concat(n))},onCancel:function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).log.apply(e,["[onCancel]: "].concat(n))},init:function(){var e=this;this.t("areaList").then((function(t){return[e.areaList=t]}))},onChange:function(e){console.log("[onChange] value: ",e);var t=e.index,n=e.values,i=n.map((function(e){return(null===e||void 0===e?void 0:e.name)||""})).join("-");this.onGTip("".concat(i,", index: ").concat(t))},onShowAreaPopup:function(e){this.showPopup=!0,console.log("type",e),this.areaType=e||""},onCancelPopup:function(){},onConfirmArea:function(e,t){var n;console.log("[onConfirmArea] values index",e,t),this.selectArea=null===(n=e[e.length-1])||void 0===n?void 0:n.code;var i=e.map((function(e){return(null===e||void 0===e?void 0:e.name)||""})).join("-");this.onGTip("".concat(this.selectArea,": ").concat(i))}}},A=V,H=Object(v["a"])(A,i,o,!1,null,"4c82a23f",null);t["default"]=H.exports},"1dff":function(e,t,n){var i=n("a15b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("c69b").default;o("32e874e4",i,!0,{sourceMap:!1,shadowMode:!1})},"2bbe":function(e,t,n){var i=n("ee2b");t=i(!1),t.push([e.i,'.press-hairline--top-bottom[data-v-08d41bd6]{position:relative}.press-hairline--top-bottom[data-v-08d41bd6]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center;border-width:1px 0}.press-picker[data-v-08d41bd6]{position:relative;overflow:hidden;-webkit-text-size-adjust:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--picker-background-color,#fff)}.press-picker__columns[data-v-08d41bd6]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.press-picker__column[data-v-08d41bd6]{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;width:0}.press-picker__loading[data-v-08d41bd6]{z-index:4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--picker-loading-mask-color,hsla(0,0%,100%,.9))}.press-picker__loading[data-v-08d41bd6],.press-picker__mask[data-v-08d41bd6]{position:absolute;top:0;right:0;bottom:0;left:0}.press-picker__mask[data-v-08d41bd6]{z-index:2;width:100%;height:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.4))),-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.4)));background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.press-picker__frame[data-v-08d41bd6]{position:absolute!important;top:50%;right:16px;left:16px;z-index:1;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}',""]),e.exports=t},"3ff9":function(e,t,n){"use strict";n("a152")},"44b1":function(e,t,n){"use strict";function i(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return i}))},"4c9d":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("4920"),n("e8e7"),n("1b08"),n("e6c9");function i(e,t,n){return Math.min(Math.max(e,t),n)}},"55e7":function(e,t,n){"use strict";n("1dff")},"681d":function(e,t,n){var i=n("ee2b");t=i(!1),t.push([e.i,".press-ellipsis[data-v-0fddf90e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-0fddf90e],.press-multi-ellipsis--l3[data-v-0fddf90e]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-0fddf90e]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-0fddf90e]{-webkit-line-clamp:3}.press-picker-column[data-v-0fddf90e]{overflow:hidden;text-align:center;color:var(--picker-option-text-color,#000);font-size:var(--picker-option-font-size,16px)}.press-picker-column__wrapper[data-v-0fddf90e]{-webkit-transition-timing-function:cubic-bezier(.23,1,.68,1);transition-timing-function:cubic-bezier(.23,1,.68,1)}.press-picker-column__item[data-v-0fddf90e]{padding:0 5px}.press-picker-column__item--selected[data-v-0fddf90e]{font-weight:var(--font-weight-bold,500);color:var(--picker-option-selected-text-color,#323233)}.press-picker-column__item--disabled[data-v-0fddf90e]{opacity:var(--picker-option-disabled-opacity,.3)}.press-picker-column__item-html[data-v-0fddf90e]{width:100%;height:100%}",""]),e.exports=t},"6d7e":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return d}));var i="checkboxGroup",o="collapse",a="picker",r="radioGroup",s="sidebar",c="tabbar",l="tabs",u="indexBar",f="grid",p="dropdown-menu",d="row"},9186:function(e,t,n){var i=n("681d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("c69b").default;o("729bf86c",i,!0,{sourceMap:!1,shadowMode:!1})},"9b85":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("44b1");n("9ffe"),n("3675"),n("04ca"),n("cdf1"),n("414c"),n("faa0"),n("7475");function o(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,a,r,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n["return"]&&(r=n["return"](),Object(r)!==r))return}finally{if(l)throw o}}return s}}var a=n("c3b1"),r=n("fb67");function s(e,t){return Object(i["a"])(e)||o(e,t)||Object(a["a"])(e,t)||Object(r["a"])()}},a152:function(e,t,n){var i=n("2bbe");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("c69b").default;o("672f26a9",i,!0,{sourceMap:!1,shadowMode:!1})},a15b:function(e,t,n){var i=n("ee2b");t=i(!1),t.push([e.i,".press-ellipsis[data-v-31ac27cb]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-31ac27cb],.press-multi-ellipsis--l3[data-v-31ac27cb]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l2[data-v-31ac27cb]{-webkit-line-clamp:2}.press-multi-ellipsis--l3[data-v-31ac27cb]{-webkit-line-clamp:3}.press-picker__toolbar[data-v-31ac27cb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:var(--picker-toolbar-height,44px);line-height:var(--picker-toolbar-height,44px)}.press-picker__cancel[data-v-31ac27cb],.press-picker__confirm[data-v-31ac27cb]{padding:var(--picker-action-padding,0 16px);font-size:var(--picker-action-font-size,14px);line-height:var(--picker-toolbar-height,44px)}.press-picker__cancel--hover[data-v-31ac27cb],.press-picker__confirm--hover[data-v-31ac27cb]{opacity:.7}.press-picker__confirm[data-v-31ac27cb]{color:var(--picker-confirm-action-color,#576b95)}.press-picker__cancel[data-v-31ac27cb]{color:var(--picker-cancel-action-color,#969799)}.press-picker__title[data-v-31ac27cb]{max-width:50%;text-align:center;font-weight:var(--font-weight-bold,500);font-size:var(--picker-option-font-size,16px);line-height:var(--picker-toolbar-height,44px)}",""]),e.exports=t},a2dd:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));n("4920"),n("414c");var i=n("7029");function o(e){return new Promise((function(t,n){Object(i["b"])()?fetch(e).then((function(e){return 200===e.status?e.json():{}})).then((function(e){t(e)})).catch((function(e){n(e)})):uni.request({url:e,data:{},method:"GET",sslVerify:!0,success:function(e){var n=e.data;t(n)},fail:function(e){n(e)}})}))}var a="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__area_data.json";function r(e,t){return e.slice(0,+t)}t["a"]={displayColumns:r};function s(){return o(a)}},a88e:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("948b");var i=n("cc41"),o={title:{type:String,default:""},showToolbar:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},cancelButtonText:{type:String,default:Object(i["b"])("picker.cancel")},confirmButtonText:{type:String,default:Object(i["b"])("picker.confirm")},visibleItemCount:{type:Number,default:6},itemHeight:{type:[Number,String],default:44}}},efc3:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-picker-index"},[n("div",{staticClass:"press-picker",class:e.customClass},["top"===e.toolbarPosition?n("ToolBar",{attrs:{title:e.title,"show-toolbar":e.showToolbar,"cancel-button-text":e.cancelButtonText,"confirm-button-text":e.confirmButtonText,"custom-class":e.toolbarClass},on:{emit:e.emit}}):e._e(),e.loading?n("div",{staticClass:"press-picker__loading"},[n("loading",{attrs:{color:"#1989fa"}})],1):e._e(),n("div",{staticClass:"press-picker__columns",style:e.columnStyle,on:{touchmove:function(t){return t.stopPropagation(),t.preventDefault(),e.noop(t)}}},[e._l(e.computedColumns,(function(t,i){return n("picker-column",{key:i,ref:"pickerColumn",refInFor:!0,staticClass:"press-picker__column",attrs:{"data-index":i,"custom-class":e.columnClass,"value-key":e.valueKey,"initial-options":t.values,"default-index":t.defaultIndex||e.defaultIndex,"item-height":e.itemHeight,"visible-item-count":e.visibleItemCount,"active-class":e.activeClass,"use-momentum":e.useMomentum,"swipe-duration":e.swipeDuration},on:{change:function(t){return e.onChange(t,i)}}})})),n("div",{staticClass:"press-picker__mask",style:e.maskStyle}),n("div",{staticClass:"press-picker__frame press-hairline--top-bottom",style:e.frameStyle})],2),"bottom"===e.toolbarPosition?n("ToolBar",{attrs:{"custom-class":e.toolbarClass}}):e._e()],1)])},o=[],a=n("69b0"),r=(n("0350"),n("b4ca"),n("fa2d"),n("948b"),n("414c"),n("faa0"),n("7475"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-picker-column-index"},[n("div",{staticClass:"press-picker-column",class:e.customClass,style:e.columnStyle,on:{touchstart:e.onTouchStart,touchmove:function(t){return t.stopPropagation(),t.preventDefault(),e.onTouchMove(t)},touchend:e.onTouchEnd,touchcancel:e.onTouchEnd}},[n("div",{staticClass:"press-picker-column__wrapper",style:e.wrapperStyle},e._l(e.options,(function(t,i){return n("div",{key:t.index,class:["press-ellipsis","press-picker-column__item",{"press-picker-column__item--disabled":t&&t.disabled,"press-picker-column__item--selected":i===e.currentIndex,activeClass:i===e.currentIndex}],style:{height:e.itemHeight+"px",lineHeight:e.itemHeight+"px"},attrs:{"data-index":i},on:{click:e.onClickItem}},[e.computed.optionTextHtml(t)?n("div",{staticClass:"press-picker-column__item-html",domProps:{innerHTML:e._s(e.computed.optionTextHtml(t))}}):[e._v(" "+e._s(e.computed.optionText(t,e.valueKey))+" ")]],2)})),0)])])}),s=[],c=(n("cdf1"),n("f1f0"),n("79cc"),n("b67b")),l=n("ec2e"),u=n("b18e");function f(e){var t=Object(c["a"])(e);return null!==e&&("object"===t||"function"===t)}function p(e,t){return f(e)&&null!=e[t]?e[t]:e}function d(e){return f(e)&&e.html}function h(e){return Object(l["b"])({height:Object(u["a"])(e.itemHeight*e.visibleItemCount)})}function m(e){var t=Object(u["a"])(e.offset+e.itemHeight*(e.visibleItemCount-1)/2);return Object(l["b"])({transition:"transform ".concat(e.duration,"ms"),"line-height":Object(u["a"])(e.itemHeight),transform:"translate3d(0, ".concat(t,", 0)")})}var b={optionText:p,optionTextHtml:d,rootStyle:h,wrapperStyle:m},v=n("4c9d"),g=n("1a20"),y=n("3c4e"),x=n("6d7e"),C=n("f6bf"),k=n("0629"),w=200,_=300,j=15,O=Object(a["a"])(Object(a["a"])({name:"PressPickerColumn",options:Object(a["a"])({},y["b"]),mixins:[k["a"]]},Object(C["h"])(x["f"])),{},{props:Object(a["a"])(Object(a["a"])({},y["c"]),{},{activeClass:{type:String,default:""},valueKey:{type:String,default:""},className:{type:String,default:""},itemHeight:{type:Number,default:44},visibleItemCount:{type:Number,default:6},initialOptions:{type:Array,default:function(){return[]}},defaultIndex:{type:Number,default:0},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}}),emits:["change"],data:function(){return{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0,computed:b,touchStartTime:0,momentumOffset:0}},computed:{columnStyle:function(){var e=this.itemHeight,t=this.visibleItemCount;return b.rootStyle({itemHeight:e,visibleItemCount:t})},wrapperStyle:function(){var e=this.offset,t=this.itemHeight,n=this.visibleItemCount,i=this.duration;return b.wrapperStyle({offset:e,itemHeight:t,visibleItemCount:n,duration:i})}},watch:{defaultIndex:{handler:function(e){this.setIndex(e)},immediate:!0},initialOptions:{handler:function(e){this.options=e,this.setIndex(this.defaultIndex)},deep:!0}},created:function(){var e=this,t=this.defaultIndex,n=this.initialOptions;this.set({currentIndex:t,options:n}).then((function(){e.setIndex(t)})),this[x["f"]].children.push(this)},methods:{setData:function(e){var t=this;Object.keys(e).forEach((function(n){t[n]=e[n]}))},getCount:function(){return this.options.length},set:function(e){return this.setData(e),Object(C["b"])(this),new Promise((function(e){return Object(C["f"])(e)}))},onTouchStart:function(e){this.setData({startY:e.touches[0].clientY,startOffset:this.offset,duration:0,touchStartTime:Date.now(),momentumOffset:this.offset})},onTouchMove:function(e){if(e.touches[0]){var t=e.touches[0].clientY-this.startY,n=Object(v["a"])(this.startOffset+t,-this.getCount()*this.itemHeight,this.itemHeight);this.setData({offset:n});var i=Date.now();i-this.touchStartTime>_&&(this.touchStartTime=i,this.momentumOffset=n)}},getIndexByOffset:function(e){return Object(v["a"])(Math.round(-e/this.itemHeight),0,this.getCount()-1)},momentum:function(e,t){var n=Math.abs(e/t),i=this.offset+n/.003*(e<0?-1:1),o=this.getIndexByOffset(i);this.setData({duration:+this.swipeDuration}),this.setIndex(o,!0)},onTouchEnd:function(){if(this.offset!==this.startOffset){var e=this.offset-this.momentumOffset,t=Date.now()-this.touchStartTime,n=t<_&&Math.abs(e)>j;if(n&&this.useMomentum)this.momentum(e,t);else{this.setData({duration:w});var i=this.getIndexByOffset(this.offset);this.setIndex(i,!0)}}},onClickItem:function(e){var t=e.currentTarget.dataset.index;this.setIndex(t,!0)},adjustIndex:function(e){var t=this.getCount();e=Object(v["a"])(e,0,t);for(var n=e;n<t;n++)if(!this.isDisabled(this.options[n]))return n;for(var i=e-1;i>=0;i--)if(!this.isDisabled(this.options[i]))return i},isDisabled:function(e){return Object(g["h"])(e)&&e.disabled},getOptionText:function(e){return Object(g["h"])(e)&&this.valueKey in e?e[this.valueKey]:e},setIndex:function(e,t){var n=this;e=this.adjustIndex(e)||0;var i=-e*this.itemHeight;return e!==this.currentIndex?this.set({offset:i,currentIndex:e}).then((function(){t&&n.$emit("change",e)})):this.set({offset:i})},setValue:function(e){for(var t=this.options,n=0;n<t.length;n++)if(this.getOptionText(t[n])===e)return this.setIndex(n);return Promise.resolve()},getValue:function(){return this.options[this.currentIndex]}}}),P=O,I=(n("03e1"),n("2777")),S=Object(I["a"])(P,r,s,!1,null,"0fddf90e",null),T=S.exports,V=n("07cb"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-picker-toolbar",class:e.customClass},[e.showToolbar?n("div",{staticClass:"press-picker__toolbar toolbar-class"},[n("div",{staticClass:"press-picker__cancel",attrs:{"hover-class":"press-picker__cancel--hover","hover-stay-time":"70","data-type":"cancel"},on:{click:e.emit}},[e._v(" "+e._s(e.cancelButtonText)+" ")]),e.title?n("div",{staticClass:"press-picker__title press-ellipsis"},[e._v(" "+e._s(e.title)+" ")]):e._e(),n("div",{staticClass:"press-picker__confirm",attrs:{"hover-class":"press-picker__confirm--hover","hover-stay-time":"70","data-type":"confirm"},on:{click:e.emit}},[e._v(" "+e._s(e.confirmButtonText)+" ")])]):e._e()])},H=[],L=(n("2aaa"),n("cc41")),D={props:{title:{type:String,default:""},showToolbar:Boolean,cancelButtonText:{type:String,default:Object(L["b"])("picker.cancel")},confirmButtonText:{type:String,default:Object(L["b"])("picker.confirm")},customClass:{type:String,default:""}},methods:{emit:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["emit"].concat(t))}}},B=D,N=(n("55e7"),Object(I["a"])(B,A,H,!1,null,"31ac27cb",null)),M=N.exports,E=n("a88e");function z(e){return Object(l["b"])({height:Object(u["a"])(e.itemHeight*e.visibleItemCount)})}function $(e){return Object(l["b"])({"background-size":"100% ".concat(Object(u["a"])(e.itemHeight*(e.visibleItemCount-1)/2))})}function Y(e){return Object(l["b"])({height:Object(u["a"])(e.itemHeight)})}function K(e){return Array.isArray(e)?e.length&&!e[0].values?[{values:e}]:e:[]}var F={columnsStyle:z,frameStyle:Y,maskStyle:$,columns:K},J=Object(a["a"])(Object(a["a"])({name:"PressPickerPlus",options:Object(a["a"])({},y["b"]),components:{PickerColumn:T,Loading:V["a"],ToolBar:M}},Object(C["i"])(x["f"])),{},{props:Object(a["a"])(Object(a["a"])(Object(a["a"])({},y["c"]),E["a"]),{},{valueKey:{type:String,default:"text"},toolbarPosition:{type:String,default:"top"},defaultIndex:{type:Number,default:0},columns:{type:Array,default:function(){return[]}},activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}}),emits:["change","confirm","cancel"],data:function(){return{simple:!0}},computed:{columnStyle:function(){var e=this.itemHeight,t=this.visibleItemCount;return F.columnsStyle({itemHeight:e,visibleItemCount:t})},maskStyle:function(){var e=this.itemHeight,t=this.visibleItemCount;return F.maskStyle({itemHeight:e,visibleItemCount:t})},frameStyle:function(){var e=this.itemHeight;return F.frameStyle({itemHeight:e})},computedColumns:function(){var e=this.columns;return F.columns(e)}},watch:{columns:{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.simple=e.length&&!e[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((function(){}))},immediate:!0}},beforeCreate:function(){},created:function(){this.children=[]},mounted:function(){Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((function(){}))},methods:{noop:function(){},setColumns:function(){var e=this,t=this.simple?[{values:this.columns}]:this.columns,n=t.map((function(t,n){return e.setColumnValues(n,t.values)}));return Promise.all(n)},emit:function(e){var t=e.currentTarget.dataset.type;this.simple?this.$emit(t,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(t,{value:this.getValues(),index:this.getIndexes()})},onChange:function(e,t){this.simple?this.$emit("change",{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{value:this.getValues(),index:t})},getColumn:function(e){return this.children[e]},getColumnValue:function(e){var t=this.getColumn(e);return t&&t.getValue()},setColumnValue:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnValue: 对应列不存在")):n.setValue(t)},getColumnIndex:function(e){return(this.getColumn(e)||{}).currentIndex},setColumnIndex:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnIndex: 对应列不存在")):n.setIndex(t)},getColumnValues:function(e){return(this.children[e]||{}).options},setColumnValues:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.children[e];if(null==i)return Promise.reject(new Error("setColumnValues: 对应列不存在"));var o=JSON.stringify(i.options)===JSON.stringify(t);return o?Promise.resolve():i.set({options:t}).then((function(){n&&i.setIndex(0)}))},getValues:function(){return this.children.map((function(e){return e.getValue()}))},setValues:function(e){var t=this,n=e.map((function(e,n){return t.setColumnValue(n,e)}));return Promise.all(n)},getIndexes:function(){return this.children.map((function(e){return e.currentIndex}))},setIndexes:function(e){var t=this,n=e.map((function(e,n){return t.setColumnIndex(n,e)}));return Promise.all(n)},resetColumn:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.getColumn(e);if(null==n)return Promise.reject(new Error("setColumnValue: 对应列不存在"));n.setIndex(t)}}}),G=J,W=(n("3ff9"),Object(I["a"])(G,i,o,!1,null,"08d41bd6",null));t["a"]=W.exports},fb67:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("0350");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);