(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e59d51"],{"91b7":function(e,t,a){var l=a("ee2b");t=l(!1),t.push([e.i,"[data-v-67955e69] input,[data-v-67955e69] textarea{font-size:14px;color:#09134e}.wrap[data-v-67955e69]{height:calc(100% - 1px)}",""]),e.exports=t},b086:function(e,t,a){"use strict";a("ee53")},ba89:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("scroll-view",{staticClass:"wrap",attrs:{"scroll-y":""}},[a("demo-block",{attrs:{title:e.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{value:e.value,placeholder:e.t("placeholder"),"title-width":"0","always-embed":!0,border:!1},on:{change:e.onChange,input:e.onInput,confirm:e.onConfirm,focus:e.onFocus,blur:e.onBlur}})],1),a("demo-block",{attrs:{title:e.t("customType"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{value:e.text,required:"",clearable:"",label:e.t("label"),icon:"question-o",placeholder:e.t("placeholder"),"always-embed":!0},on:{"click-icon":e.onClickIcon}}),a("press-field",{attrs:{value:e.tel,placeholder:e.t("phonePlaceholder"),label:e.t("phone"),required:"",clearable:"",type:"tel",border:!1,"always-embed":!0},on:{change:e.onChange}}),a("press-field",{attrs:{value:e.digit,placeholder:e.t("digitPlaceholder"),label:e.t("digit"),required:"",clearable:"",type:"digit","always-embed":!0,border:!1},on:{change:e.onChange}}),a("press-field",{attrs:{value:e.number,placeholder:e.t("numberPlaceholder"),label:e.t("number"),required:"",clearable:"",type:"digit",border:!1,"always-embed":!0},on:{change:e.onChange}}),a("press-field",{attrs:{value:e.password,placeholder:e.t("passwordPlaceholder"),label:e.t("password"),required:"",clearable:"",type:"password",border:!1,"always-embed":!0},on:{change:e.onChange}})],1),a("demo-block",{attrs:{title:e.t("disabled"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{label:e.t("label"),"left-icon":"contact",disabled:"",placeholder:e.t("inputDisabled"),border:!1,"always-embed":!0},on:{change:e.onChange}})],1),a("demo-block",{attrs:{title:e.t("errorInfo"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{value:e.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,error:"",border:!1},on:{change:e.onChange}}),a("press-field",{attrs:{value:e.username,label:e.t("phone"),placeholder:e.t("phonePlaceholder"),"error-message":e.t("phoneError"),"always-embed":!0,border:!1},on:{change:e.onChange}})],1),a("demo-block",{attrs:{title:e.t("inputAlign"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"input-align":"right"},on:{change:e.onChange}})],1),a("demo-block",{attrs:{title:e.t("autosize"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,autosize:""},on:{change:e.onChange,linechange:e.onLineChange}})],1),a("demo-block",{attrs:{title:e.t("wordLimit"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{value:e.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"show-word-limit":!0,maxlength:20},on:{change:e.onChange}}),a("press-field",{attrs:{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,"show-word-limit":!0,maxlength:100,autosize:""},on:{change:e.onChange,linechange:e.onLineChange}})],1),a("demo-block",{attrs:{title:e.t("insertButton"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[a("press-field",{attrs:{center:"",clearable:"",label:e.t("sms"),placeholder:e.t("smsPlaceholder"),border:!1,"always-embed":!0,autosize:""},on:{change:e.onChange},scopedSlots:e._u([{key:"button",fn:function(){return[a("press-button",{attrs:{size:"small",type:"primary"}},[e._v(" "+e._s(e.t("sendSMS"))+" ")])]},proxy:!0}])})],1)],1)},n=[],o=a("55c7"),r=a("41a6"),s={i18n:{"zh-CN":{label:"文本",placeholder:"请输入文本",message:"留言",autosize:"高度自适应",placeholderAutoSize:"请输入留言",text:"文本",digit:"整数",phone:"号码",number:"数字",customType:"自定义类型",smsPlaceholder:"请输入号码",textPlaceholder:"请输入文本",digitPlaceholder:"请输入整数",phonePlaceholder:"请输入号码",numberPlaceholder:"请输入数字（支持小数）",disabled:"禁用输入框",inputReadonly:"输入框只读",inputDisabled:"输入框已禁用",errorInfo:"错误提示",phoneError:"号码格式错误",inputAlign:"输入框内容对齐",alignPlaceHolder:"输入框内容右对齐",sms:"号码",sendSMS:"发送号码",insertButton:"插入按钮",username:"名称",usernamePlaceholder:"请输入名称",wordLimit:"字数限制"},"en-US":{label:"Label",placeholder:"Text",message:"SMS",autosize:"Auto Resize",placeholderAutoSize:"Message",text:"Text",digit:"Digit",phone:"Phone",number:"Number",customType:"Custom Type",smsPlaceholder:"SMS",textPlaceholder:"Text",digitPlaceholder:"Digit",phonePlaceholder:"Phone",numberPlaceholder:"Number",inputReadonly:"Input Readonly",inputDisabled:"Input Disabled",errorInfo:"Error Info",phoneError:"Invalid phone",inputAlign:"Input Align",alignPlaceHolder:"Input Align Right",sms:"SMS",sendSMS:"Send SMS",insertButton:"Insert Button",wordLimit:"Word Limit"}},components:{PressField:o["a"],PressButton:r["a"]},data:function(){return{value:"",username:"",text:"",password:"",number:"",digit:"",tel:"",headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0;padding: 0;"}},methods:{onChange:function(e){"string"===typeof e&&this.onGTip("".concat(e))},onInput:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("[onInput]",t)},onConfirm:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("[onConfirm]",t)},onFocus:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("[onFocus]",t)},onBlur:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("[onBlur]",t)},onLineChange:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("[onLineChange]",t)},onClickIcon:function(){this.onGTip("Click Icon")}}},i=s,d=(a("b086"),a("2777")),c=Object(d["a"])(i,l,n,!1,null,"67955e69",null);t["default"]=c.exports},be0c:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r}));var l=!1;try{var n={};Object.defineProperty(n,"passive",{get:function(){return l=!0,!0}}),window.addEventListener("test-passive",(function(){}),n)}catch(s){}var o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!l&&{passive:e}},r=o()},ee53:function(e,t,a){var l=a("91b7");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var n=a("c69b").default;n("4fd93721",l,!0,{sourceMap:!1,shadowMode:!1})}}]);