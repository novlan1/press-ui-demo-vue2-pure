(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b0ce"],{bdb8:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-wrap"},[t._l(t.dialogTypeList,(function(n,o){return e("demo-block",{key:o,attrs:{title:n.title,"section-style":t.sectionStyle}},t._l(n.list,(function(n){return e("press-cell",{key:n.name,attrs:{title:n.title,"is-link":""},on:{click:function(e){return t.onShowDialog(n.name)}}})})),1)})),e("PressDialogComp",{ref:"tip-match-comm-tips-dialog",attrs:{id:"tip-match-comm-tips-dialog"}}),e("PressDialogComp",{attrs:{title:t.t("title"),show:t.show,content:"Some fake news"},on:{confirm:function(n){return t.onConfirm("show")},cancel:function(n){return t.onCancel("show")}}}),e("PressDialogComp",{attrs:{title:t.t("title"),show:t.show2,content:"Some fake news 2"},on:{confirm:function(n){return t.onConfirm("show2")},cancel:function(n){return t.onCancel("show2")}}})],2)},i=[],a=(e("2aaa"),e("06dc"),e("414c"),e("72d1")),l=e("dab6"),s=e("43cc");e("69b0");var c=function(){return new Promise((function(t){setTimeout((function(){t(!0)}),3e3)}))},r={i18n:{"zh-CN":{customButton:"自定义按钮",customContent:"自定义内容",noCancel:"没有取消按钮",noCancelLoading:"没有取消+加载中",image:"图片",html:"HTML内容",field:"输入框",noMask:"点击蒙层不可关闭",longText:"长文本",onlyCaption:"仅限队长报名，发给队长来报名吧！",custom:"自定义",componentCall:"组件调用",multiple:"多例",longContent:function(){return["念奴娇·赤壁怀古","大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。","遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。","<br/>","沁园春·雪","北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。","江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。","<br/>","沁园春·长沙","独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？","携来百侣曾游，忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。指点江山，激扬文字，粪土当年万户侯。曾记否，到中流击水，浪遏飞舟？"].join("<br/>")}},"en-US":{customButton:"Custom Button",customContent:"Custom Content",noCancel:"No Cancel",noCancelLoading:"No Cancel and Loading",image:"Image",html:"HTML Content",field:"Input",noMask:"No Close By Mask",longText:"Long Text",onlyCaption:"Only the captain can sign up, send it to the captain to sign up!",custom:"Custom ",componentCall:"Component Call",multiple:"Multiple",longContent:function(){return["Reflections on the Ancient Red Cliff--To the tune of Niannujiao","","The Great River flows,","Eastward waves sweeping away,","For thousands of years, gallant heroes.","West of the ancient fort, they say, stands","The Red Cliff of the Three-Kingdoms' Duke Zhou.","Rocks pierce the sky, shore-tearing","Waves swirl into piles of snow.","What a glorious sweep of land,","Once a stage for so many a hero!","","My thoughts drift to those years when Zhou","Had newly married the beautiful Qiao,","Vigour and valour aglow.","A feather fan and a silken hat,","He masterminded the fire-attack on the foe--","Over a casual chat","To see their fleet perish, blow by blow.","Back from my mental vagrancy in that bygone age,","I must laugh at myself: letting sentiments grow","Into grey hairs, too soon.","But isn't life a dream, after all？","Let me pledge this cup to the River,","To the Moon."].join("<br/>")}}},components:{PressDialogComp:l["a"],PressCell:s["a"]},data:function(){return{sectionStyle:"",show:!1,show2:!1,curType:"",dialogTypeList:[{title:this.t("basicUsage"),list:[{name:"normal",title:this.t("basicUsage")},{name:"noTouchMove",title:this.t("noMask")}]},{title:this.t("customContent"),list:[{name:"img",title:this.t("image")},{name:"html",title:this.t("html")},{name:"longText",title:this.t("longText")},{name:"field",title:this.t("field")}]},{title:this.t("customButton"),list:[{name:"noCancel",title:this.t("noCancel")},{name:"loading",title:this.t("loadingStatus")},{name:"noCancelLoading",title:this.t("noCancelLoading")}]},{title:this.t("componentCall"),list:[{name:"componentCall",title:this.t("componentCall")},{name:"multiple",title:this.t("multiple")}]}]}},methods:{onShowDialog:function(t){var n=this;if(this.curType=t,"componentCall"!==t){if("multiple"===t)return this.show=!0,void(this.show2=!0);var e=this.t("cancel"),o=1,i=null,l=this.t("onlyCaption"),s="",r="",h=null,u=!0,m=!1,f=!1,d="",p="";"noCancel"===t?e="":"loading"===t?(o=2,i=c):"noCancelLoading"===t?(o=2,e="",i=c):"html"===t?(l="",s="<div>".concat(this.t("custom"),'<span style="color: red;">').concat(this.t("content"),"</span></div>")):"img"===t?r="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_19f9b1ecdd9332c7c0.jpg":"noTouchMove"===t?u=!1:"longText"===t?(l="",s='<div style="max-height:100%;overflow:scroll;">'.concat(this.t("longContent"),"</div>"),m=!0):"field"===t&&(f=!0,d="随便输点什么吧",l="",p="Press UI",u=!1,i=function(t){return t.inputValue?(n.onGTip("内容: ".concat(t.inputValue)),!0):(n.onGTip("请输入内容"),!1)}),a["a"].show({context:this,title:this.t("title"),content:l,htmlContent:s,src:r,onLongPressImage:h,confirmText:this.t("confirm"),cancelText:e,dialogType:o,onConfirmClick:i,canTouchRemove:u,useScrollView:m,showField:f,fieldPlaceHolder:d,fieldValue:p}).then((function(){"field"!==t&&n.onGTip("confirm")})).catch((function(){n.onGTip("cancel")}))}else this.show=!0},onConfirm:function(t){this[t]=!1,"field"!==this.curType&&this.onGTip("confirm")},onCancel:function(t){this[t]=!1,this.onGTip("cancel")}}},h=r,u=e("2777"),m=Object(u["a"])(h,o,i,!1,null,"e97860ca",null);n["default"]=m.exports}}]);