(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c1fe050"],{1861:function(e,t,l){var s=l("cc65");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=l("c69b").default;r("74f96cd3",s,!0,{sourceMap:!1,shadowMode:!1})},"448f":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"demo-wrap demo-wrap--gray"},[l("demo-block",{attrs:{title:e.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressCellGroup",[l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content")}}),l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),label:e.t("desc"),border:!1}})],1)],1),l("demo-block",{attrs:{title:e.t("insetGrouped"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCellGroup",{attrs:{inset:""}},[l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content")}}),l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),label:e.t("desc")}})],1)],1),l("demo-block",{attrs:{title:e.t("largeSize"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),size:"large"}}),l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),size:"large",label:e.t("desc")}})],1),l("demo-block",{attrs:{title:e.t("showIcon"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{title:e.t("cell"),icon:"location-o"}})],1),l("demo-block",{attrs:{title:e.t("showArrow"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{title:e.t("cell"),"is-link":""}}),l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),"is-link":""}}),l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content"),"is-link":"","arrow-direction":"down"}})],1),l("demo-block",{attrs:{title:e.t("router"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{"is-link":"",title:e.t("cell"),"link-type":"navigateTo",url:"/pages/press/col/col"}})],1),l("demo-block",{attrs:{title:e.t("groupTitle"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCellGroup",{attrs:{title:e.t("group")+"1"}},[l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content")}})],1),l("PressCellGroup",{attrs:{title:e.t("group")+"2"}},[l("PressCell",{attrs:{title:e.t("cell"),value:e.t("content")}})],1)],1),l("demo-block",{attrs:{title:e.t("useSlots"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{value:e.t("content"),"is-link":"","use-title-slot":!0},scopedSlots:e._u([{key:"title",fn:function(){return[l("span",{staticClass:"press-cell-text"},[e._v(" "+e._s(e.t("cell"))+" ")]),l("PressTag",{attrs:{type:"danger"}},[e._v(" "+e._s(e.t("tag"))+" ")])]},proxy:!0}])}),l("PressCell",{attrs:{title:e.t("cell"),icon:"shop-o"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[l("PressIconPlus",{staticClass:"custom-icon",attrs:{name:"search"}})]},proxy:!0}])})],1),l("demo-block",{attrs:{title:e.t("verticalCenter"),"section-style":e.sectionStyle,"header-style":e.headerStyle}},[l("PressCell",{attrs:{center:"",title:e.t("cell"),value:e.t("content"),label:e.t("desc")}})],1),l("demo-block",{attrs:{title:"E-SPORT","header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("div",{staticClass:"demo--e-sport-wrap"},[l("PressCell",{attrs:{title:e.t("matchMode"),value:e.t("knockout"),type:"e-sport","is-link":"",border:!1}}),l("PressCell",{attrs:{title:e.t("wayToWin"),value:e.t("defaultBo1"),type:"e-sport","is-link":"",border:!1}}),l("PressCell",{attrs:{title:e.t("allowModifyAvatar"),border:!1,type:"e-sport"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[l("PressSwitch",{attrs:{"custom-class":"press-switch--e-sport",checked:e.switchChecked[1]},on:{change:function(t){return e.onChangeSwitch(t,1)}}})]},proxy:!0}])}),l("PressCell",{attrs:{title:e.t("getPhoneNumber"),label:e.t("getPhoneNumberDesc"),type:"e-sport",center:"",border:!1},scopedSlots:e._u([{key:"right-icon",fn:function(){return[l("PressSwitch",{attrs:{"custom-class":"press-switch--e-sport",checked:e.switchChecked[2]},on:{change:function(t){return e.onChangeSwitch(t,2)}}})]},proxy:!0}])})],1)])],1)},r=[],o=l("5001"),a=l("baed"),c=l("73df"),n=l("17d4"),i=l("6585"),u={i18n:{"zh-CN":{cell:"单元格",valueOnly:"只设置 value",showIcon:"展示图标",showArrow:"展示箭头",largeSize:"单元格大小",group:"分组",groupTitle:"分组标题",router:"页面跳转",urlRoute:"URL 跳转",vueRoute:"路由跳转",useSlots:"使用插槽",insetGrouped:"卡片风格",verticalCenter:"垂直居中",matchMode:"比赛模式",knockout:"淘汰赛",defaultBo1:"默认一局胜负",allowModifyAvatar:"允许比赛中修改队名队徽",getPhoneNumber:"获取参赛者手机号码",getPhoneNumberDesc:"便于发放奖励和联系参赛者，可在队员信息中查看"},"en-US":{cell:"Cell title",valueOnly:"Value only",showIcon:"Left Icon",showArrow:"Link",largeSize:"Size",group:"Group",groupTitle:"Group Title",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",useSlots:"Use Slots",insetGrouped:"Inset Grouped",verticalCenter:"Vertical center",matchMode:"Match Mode",knockout:"Knockout",defaultBo1:"Default Bo1",allowModifyAvatar:"Allow modification of team info",getPhoneNumber:"Obtain player's phone number",getPhoneNumberDesc:"Distribute rewards and contact participants"}},components:{PressSwitch:o["a"],PressCell:a["a"],PressCellGroup:c["a"],PressTag:n["a"],PressIconPlus:i["a"]},data:function(){return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",switchChecked:{1:!1,2:!1}}},methods:{onChangeSwitch:function(e,t){this.switchChecked[t]=e}}},d=u,h=(l("5d2e"),l("33b6")),p=Object(h["a"])(d,s,r,!1,null,"37dfab54",null);t["default"]=p.exports},"5d2e":function(e,t,l){"use strict";l("1861")},cc65:function(e,t,l){var s=l("ee2b");t=s(!1),t.push([e.i,".demo-wrap .press-cell-text[data-v-37dfab54]{margin-right:4px;vertical-align:middle}",""]),e.exports=t}}]);