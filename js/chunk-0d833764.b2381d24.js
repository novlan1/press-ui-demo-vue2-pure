(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d833764"],{"332f":function(s,e,t){"use strict";t("dc02")},"4f42":function(s,e,t){var o=t("ee2b");e=o(!1),e.push([s.i,".demo-wrap[data-v-44d5051f]{overflow:hidden}.demo-pull-refresh[data-v-44d5051f]  .press-pull-refresh{height:calc(100vh - 50px)}.demo-button[data-v-44d5051f]{margin:0;padding:16px 0 0 16px}.doge[data-v-44d5051f]{width:140px;height:72px;border-radius:4px;margin:8px auto}",""]),s.exports=e},"9b1f":function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"demo-wrap demo-pull-refresh"},[t("PressTabs",{attrs:{active:s.active},on:{change:s.onChangeTab}},[t("PressTab",{attrs:{title:s.t("basicUsage")}},[t("PressPullRefresh",{on:{refresh:s.onRefresh,change:s.onChange},model:{value:s.isLoading,callback:function(e){s.isLoading=e},expression:"isLoading"}},[t("p",{staticClass:"demo-button"},[s._v(" "+s._s(s.tips)+" ")])])],1),t("PressTab",{attrs:{title:s.t("successTip")}},[t("PressPullRefresh",{attrs:{"success-text":s.t("success")},on:{refresh:function(e){return s.onRefresh(!1)}},model:{value:s.isLoading,callback:function(e){s.isLoading=e},expression:"isLoading"}},[t("p",{staticClass:"demo-button"},[s._v(" "+s._s(s.tips)+" ")])])],1),t("PressTab",{attrs:{title:s.t("customTips")}},[t("PressPullRefresh",{attrs:{"head-height":"80"},on:{refresh:function(e){return s.onRefresh(!0)}},scopedSlots:s._u([{key:"pulling",fn:function(s){var e=s.distance;return[t("img",{staticClass:"doge",style:{transform:"scale("+e/80+")"},attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png"}})]}},{key:"loosing",fn:function(){return[t("img",{staticClass:"doge",attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png"}})]},proxy:!0},{key:"loading",fn:function(){return[t("img",{staticClass:"doge",attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_aecbd81ffaca64b6f4.jpg"}})]},proxy:!0}]),model:{value:s.isLoading,callback:function(e){s.isLoading=e},expression:"isLoading"}},[t("p",{staticClass:"demo-button"},[s._v(" "+s._s(s.tips)+" ")])])],1)],1)],1)},n=[],a=(t("e087"),t("066b")),i=t("66da"),c=t("4089"),r={i18n:{"zh-CN":{try:"下拉试试",text:"刷新次数",success:"刷新成功",successTip:"成功提示",customTips:"自定义提示"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}},components:{PressPullRefresh:a["a"],PressTab:i["a"],PressTabs:c["a"]},data:function(){return{count:0,isLoading:!1,active:0}},computed:{tips:function(){return this.count?"".concat(this.t("text"),": ").concat(this.count):this.t("try")}},methods:{onRefresh:function(){var s=this;setTimeout((function(){s.onGTip("刷新成功"),s.isLoading=!1,s.count+=1}),1e3)},onChange:function(s){console.log("[onChange]",s)},onChangeTab:function(s){console.log("[onChangeTab]",s)}}},u=r,d=(t("332f"),t("33b6")),l=Object(d["a"])(u,o,n,!1,null,"44d5051f",null);e["default"]=l.exports},dc02:function(s,e,t){var o=t("4f42");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[s.i,o,""]]),o.locals&&(s.exports=o.locals);var n=t("c69b").default;n("736a56dd",o,!0,{sourceMap:!1,shadowMode:!1})}}]);