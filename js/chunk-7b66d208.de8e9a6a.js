(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b66d208"],{4093:function(e,t,l){"use strict";l("47c3")},"47c3":function(e,t,l){var a=l("83cf");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=l("c69b").default;o("b1b976bc",a,!0,{sourceMap:!1,shadowMode:!1})},"83cf":function(e,t,l){var a=l("ee2b");t=a(!1),t.push([e.i,"[data-v-d29670dc] input,[data-v-d29670dc] textarea{font-size:14px;color:#09134e}.wrap[data-v-d29670dc]{height:calc(100% - 1px)}",""]),e.exports=t},ba89:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("scroll-view",{staticClass:"wrap",attrs:{"scroll-y":""}},[l("demo-block",{attrs:{title:e.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{value:e.value,placeholder:e.t("placeholder"),"title-width":"0","always-embed":!0,border:!1},on:{change:e.onChange,input:e.onInput,confirm:e.onConfirm,focus:e.onFocus,blur:e.onBlur}})],1),l("demo-block",{attrs:{title:e.t("customType"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{value:e.text,required:"",clearable:"",label:e.t("label"),icon:"question-o",placeholder:e.t("placeholder"),"always-embed":!0},on:{"click-icon":e.onClickIcon}}),l("PressField",{attrs:{value:e.tel,placeholder:e.t("phonePlaceholder"),label:e.t("phone"),required:"",clearable:"",type:"tel",border:!1,"always-embed":!0},on:{change:e.onChange}}),l("PressField",{attrs:{value:e.digit,placeholder:e.t("digitPlaceholder"),label:e.t("digit"),required:"",clearable:"",type:"digit","always-embed":!0,border:!1},on:{change:e.onChange}}),l("PressField",{attrs:{value:e.number,placeholder:e.t("numberPlaceholder"),label:e.t("number"),required:"",clearable:"",type:"digit",border:!1,"always-embed":!0},on:{change:e.onChange}}),l("PressField",{attrs:{value:e.password,placeholder:e.t("passwordPlaceholder"),label:e.t("password"),required:"",clearable:"",type:"password",border:!1,"always-embed":!0},on:{change:e.onChange}})],1),l("demo-block",{attrs:{title:e.t("disabled"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{label:e.t("label"),"left-icon":"contact",disabled:"",placeholder:e.t("inputDisabled"),border:!1,"always-embed":!0},on:{change:e.onChange}})],1),l("demo-block",{attrs:{title:e.t("errorInfo"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{value:e.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,error:"",border:!1},on:{change:e.onChange}}),l("PressField",{attrs:{value:e.username,label:e.t("phone"),placeholder:e.t("phonePlaceholder"),"error-message":e.t("phoneError"),"always-embed":!0,border:!1},on:{change:e.onChange}})],1),l("demo-block",{attrs:{title:e.t("inputAlign"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"input-align":"right"},on:{change:e.onChange}})],1),l("demo-block",{attrs:{title:e.t("autosize"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,autosize:""},on:{change:e.onChange,linechange:e.onLineChange}})],1),l("demo-block",{attrs:{title:e.t("wordLimit"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{value:e.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"show-word-limit":!0,maxlength:20},on:{change:e.onChange}}),l("PressField",{attrs:{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,"show-word-limit":!0,maxlength:100,autosize:""},on:{change:e.onChange,linechange:e.onLineChange}})],1),l("demo-block",{attrs:{title:e.t("insertButton"),"header-style":e.headerStyle,"section-style":e.sectionStyle}},[l("PressField",{attrs:{center:"",clearable:"",label:e.t("sms"),placeholder:e.t("smsPlaceholder"),border:!1,"always-embed":!0,autosize:""},on:{change:e.onChange},scopedSlots:e._u([{key:"button",fn:function(){return[l("PressButton",{attrs:{size:"small",type:"primary"}},[e._v(" "+e._s(e.t("sendSMS"))+" ")])]},proxy:!0}])})],1)],1)},o=[],r=l("975e"),n=l("9907"),s={i18n:{"zh-CN":{label:"文本",placeholder:"请输入文本",message:"留言",autosize:"高度自适应",placeholderAutoSize:"请输入留言",text:"文本",digit:"整数",phone:"号码",number:"数字",customType:"自定义类型",smsPlaceholder:"请输入号码",textPlaceholder:"请输入文本",digitPlaceholder:"请输入整数",phonePlaceholder:"请输入号码",numberPlaceholder:"请输入数字（支持小数）",disabled:"禁用输入框",inputReadonly:"输入框只读",inputDisabled:"输入框已禁用",errorInfo:"错误提示",phoneError:"号码格式错误",inputAlign:"输入框内容对齐",alignPlaceHolder:"输入框内容右对齐",sms:"号码",sendSMS:"发送号码",insertButton:"插入按钮",username:"名称",usernamePlaceholder:"请输入名称",wordLimit:"字数限制"},"en-US":{label:"Label",placeholder:"Text",message:"SMS",autosize:"Auto Resize",placeholderAutoSize:"Message",text:"Text",digit:"Digit",phone:"Phone",number:"Number",customType:"Custom Type",smsPlaceholder:"SMS",textPlaceholder:"Text",digitPlaceholder:"Digit",phonePlaceholder:"Phone",numberPlaceholder:"Number",inputReadonly:"Input Readonly",inputDisabled:"Input Disabled",errorInfo:"Error Info",phoneError:"Invalid phone",inputAlign:"Input Align",alignPlaceHolder:"Input Align Right",sms:"SMS",sendSMS:"Send SMS",insertButton:"Insert Button",wordLimit:"Word Limit"}},components:{PressField:r["a"],PressButton:n["a"]},data:function(){return{value:"",username:"",text:"",password:"",number:"",digit:"",tel:"",headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0;padding: 0;"}},methods:{onChange:function(e){"string"===typeof e&&this.onGTip("".concat(e))},onInput:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("[onInput]",t)},onConfirm:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("[onConfirm]",t)},onFocus:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("[onFocus]",t)},onBlur:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("[onBlur]",t)},onLineChange:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("[onLineChange]",t)},onClickIcon:function(){this.onGTip("Click Icon")}}},d=s,i=(l("4093"),l("33b6")),c=Object(i["a"])(d,a,o,!1,null,"d29670dc",null);t["default"]=c.exports}}]);