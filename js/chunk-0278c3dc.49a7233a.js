(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0278c3dc"],{"4b64":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-wrap"},[t._l(t.transitionDemoList,(function(e,o){return s("demo-block",{key:o,attrs:{title:e.title}},t._l(e.list,(function(e){return s("PressCell",{key:e,attrs:{title:e,"is-link":""},on:{click:function(s){return t.onShowTransition(e)}}})})),1)})),"custom"!==t.curTransitionType?s("PressTransition",{attrs:{name:t.curTransitionType,show:t.options[t.curTransitionType]||!1,duration:300,"custom-class":"block"}}):s("PressTransition",{attrs:{show:t.options.custom||!1,duration:{enter:1e3,leave:1e3},"custom-class":"block",name:"","enter-class":"press-enter-class","enter-active-class":"press-enter-active-class","leave-active-class":"press-leave-active-class","leave-to-class":"press-leave-to-class"}})],2)},r=[],n=(s("e087"),s("06e6"),s("8999"),s("0c4e"),s("7215"),s("b41b"),s("6058"),s("44d4"),s("093a"),s("baed")),a=s("2f2d"),i=null,c=function(t){return t.toLowerCase().replace(/\s+/,"-")},l={components:{PressCell:n["a"],PressTransition:a["a"]},data:function(){var t=[{title:"Fade",list:["Fade","Fade Up","Fade Down","Fade Left","Fade Right"]},{title:"Slide",list:["Slide Up","Slide Down","Slide Left","Slide Right"]},{title:"Custom",list:["Custom"]}],e=t.reduce((function(t,e){return t.concat(e.list)}),[]);return{customStyle:"",curTransitionType:"fade",transitionDemoList:t,options:e.reduce((function(t,e){var s=c(e);return t[s]=!1,t}),{}),showCustom:!1}},methods:{onShowTransition:function(t){var e=this,s=c(t);this.curTransitionType=s,Object.keys(this.options).forEach((function(t){e.options[t]=!1})),setTimeout((function(){e.options[s]=!0,clearTimeout(i);var t="custom"===s?2e3:1e3;i=setTimeout((function(){e.options[s]=!1}),t)}))}}},u=l,p=(s("950e"),s("33b6")),d=Object(p["a"])(u,o,r,!1,null,null,null);e["default"]=d.exports},"950e":function(t,e,s){"use strict";s("b163")},b163:function(t,e,s){var o=s("c744");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=s("c69b").default;r("62fd4e85",o,!0,{sourceMap:!1,shadowMode:!1})},c744:function(t,e,s){var o=s("ee2b");e=o(!1),e.push([t.i,".block{position:fixed;top:50%;left:50%;width:100px;height:100px;margin:-50px 0 0 -50px;background-color:#1989fa}.press-enter-active-class,.press-leave-active-class{-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:background-color,transform;transition-property:background-color,transform,-webkit-transform}.press-enter-class,.press-leave-to-class{background-color:red;-webkit-transform:rotate(-1turn) translate3d(-100%,-100%,0);transform:rotate(-1turn) translate3d(-100%,-100%,0)}",""]),t.exports=e}}]);