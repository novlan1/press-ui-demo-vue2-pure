(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51f969b0"],{"33b2":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("c8eb"),i=o("c422"),s=o("f8fc");function r(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=r(n);function l(t){void 0===t&&(t="");var e=i.initEnv();e.isMsdk&&!e.isMsdkV5?"function"===typeof window.msdkCallNative?window.msdkCallNative(t):"function"===typeof window.msdkCall&&window.msdkCall("WGSendMessageToNative",'{"MsdkMethod":"WGSendMessageToNative","MsgData":"'.concat(t,'"}')):e.isAndroid?confirm(t):e.isIOS&&(window.location.href=encodeURIComponent(t))}function d(t){var e=i.initEnv();e.isMsdk&&!e.isMsdkV5&&("function"===typeof window.setMsdkCallback?window.setMsdkCallback(t):"function"===typeof window.msdkAddNativeCallbackObserver&&window.msdkAddNativeCallbackObserver(t))}function c(t){var e=i.initEnv();e.isMsdk&&!e.isMsdkV5&&"function"===typeof window.msdkRemoveNativeCallbackObserver&&window.msdkRemoveNativeCallbackObserver(t)}function u(t){if(t||(t=i.initEnv()),console.info("[closeMsdkWebview] env",t),t.isMsdkV5&&"function"===typeof window.msdkCall){var e='{"MsdkMethod":"closeWebView"}';window.msdkCall(e)}else t.isMsdk?"function"===typeof window.msdkCloseWebview?(!t.isIOS||t.isIOS&&window.msdkiOSHandler)&&window.msdkCloseWebview():"function"===typeof window.msdkCallNative&&window.msdkCallNative('{"MsdkMethod":"CloseWebview"}'):t.isSlugSdk&&window.customBrowserInterface&&window.customBrowserInterface.closeWebview()}function p(){console.log("[closeWebView] call close webview");var t=i.initEnv();t.isMsdk?u():t.isSlugSdk?window.customBrowserInterface&&window.customBrowserInterface.closeWebview():(window.location.href="about:blank",console.log("[closeWebView] call close webview failed"))}function m(){return new Promise((function(t){var e=i.initEnv();e.isMsdkV5?s.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV5.js",(function(){t(!0)})):e.isMsdk?e.isMsdkX?s.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3_embedded.js",(function(){t(!0)})):s.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3.js",(function(){t(!0)})):e.isSlugSdk&&s.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/browser_adapt_20240702.js",(function(){t(!0)}))}))}var f=function(){w(!1)},w=function(t){var e,o;void 0===t&&(t=!0);var n=i.getEnvUAType(),s=n.isSlugSdk,r=n.isMsdkV5,l=n.isMsdk,d=n.isMsdkX,c=n.isAndroid;if(s){if("object"===a["default"](window.customBrowserInterface)){var u=t?"hideUi":"showUi";window.customBrowserInterface[u]()}}else if(r){var p=JSON.stringify({MsdkMethod:"setFullScreen",isFullScreen:!!t});setTimeout((function(){var t,e;c?null===(t=window.msdkCall)||void 0===t||t.call(window,p):window.WebViewJavascriptBridge?null===(e=window.msdkCall)||void 0===e||e.call(window,p):document.addEventListener("WebViewJavascriptBridgeReady",(function(){var t;null===(t=window.msdkCall)||void 0===t||t.call(window,p)}),!1)}),100)}else if(l&&!d){var m=JSON.stringify({MsdkMethod:"WGSetFullScreen",isFullScreen:!!t});c?null===(e=window.msdkCall)||void 0===e||e.call(window,"WGSetFullScreen",m):window.WebViewJavascriptBridge?null===(o=window.msdkCall)||void 0===o||o.call(window,"WGSetFullScreen",m):document.addEventListener("WebViewJavascriptBridgeReady",(function(){var t;null===(t=window.msdkCall)||void 0===t||t.call(window,"WGSetFullScreen",m)}),!1)}};e.addMsdkNativeCallbackListener=d,e.callJsBrowserAdapter=m,e.callJsReSetFullScreen=f,e.callJsSetFullScreen=w,e.closeMsdkWebview=u,e.closeWebView=p,e.removeMsdkNativeCallbackListener=c,e.sendToMsdkNative=l},"3fdfe":function(t,e,o){var n=o("9a09");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("c69b").default;i("274ad096",n,!0,{sourceMap:!1,shadowMode:!1})},"9a09":function(t,e,o){var n=o("ee2b");e=n(!1),e.push([t.i,".demo-button-row[data-v-7727d1cf]{margin-bottom:12px}",""]),t.exports=e},c0ad:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("33b2"),i=o("c422");function s(t,e){"undefined"===typeof window.customBrowserInterface?n.callJsBrowserAdapter().then((function(){var o;null===(o=window.customBrowserInterface)||void 0===o||o.openMiniProgram(t,e)})):window.customBrowserInterface.openMiniProgram(t,e)}function r(t){var e=t.appId,o=void 0===e?"":e,r=t.path,a=void 0===r?"":r,l=t.type,d=void 0===l?0:l,c=t.isWxMp,u=void 0===c||c,p=i.initEnv();if(p.isSlugSdk)return s(o,a);var m={};m=u?{MsdkMethod:"WGLaunchMiniApp",userName:o,path:a,type:d}:{MsdkMethod:"WGLaunchQQMiniApp",miniProgramAppid:o,miniProgramPath:a,type:d};var f=JSON.stringify(m);"undefined"===typeof window.msdkShare?n.callJsBrowserAdapter().then((function(){window.msdkShare(f)})):window.msdkShare(f)}o("c8eb"),o("f8fc"),e.launchMiniProgramInGame=r,e.launchMiniProgramInSlugSdk=s},c422:function(t,e,o){"use strict";function n(){return(navigator.userAgent||"").toLowerCase()}function i(){var t=n();return/iphone|ipod|ipad|Mac OS X/i.test(t)||!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function s(){var t=n(),e=-1!==t.indexOf("micromessenger"),o=-1!==t.indexOf("wxwork"),s=-1!==t.indexOf(" qq/"),r=-1!==t.indexOf(" igameapp/"),a=-1!==t.indexOf(" gamelife/"),l=-1!==t.indexOf("android"),d=i(),c=d,u=-1!==t.indexOf(" msdk/"),p=-1!==t.indexOf(" webviewx msdk/"),m=-1!==t.indexOf(" msdk/5"),f=-1!==t.indexOf("ingame"),w=u||f,y=-1!==t.indexOf("gamehelper"),b=-1!==t.indexOf("gamehelper_20004"),v=-1!==t.indexOf("miniprogram")||"undefined"!==typeof window&&"miniprogram"===window.__wxjs_environment,g=-1!==t.indexOf("lolapp"),k=/(?:Windows Phone)/.test(t),S=/(?:SymbianOS)/.test(t)||k,h=!t.match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i);return{isWeixin:e,isWorkWeixin:o,isQQ:s,isPvpApp:r,isTipApp:a,isAndroid:l,isIos:d,isIOS:c,isMsdk:u,isMsdkX:p,isMsdkV5:m,isSlugSdk:f,isInGame:w,isGHelper:y,isGHelper20004:b,isMiniProgram:v,isLolApp:g,isWindowsPhone:k,isSymbian:S,isPc:h}}function r(){return s()}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return!("undefined"!==typeof window&&window.navigator)};e.checkNodeEnv=a,e.checkUAIsIOS=i,e.getEnvUAType=s,e.initEnv=r},d7c4:function(t,e,o){"use strict";o("3fdfe")},efc8:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-wrap"},[o("demo-block",{attrs:{title:t.t("type")}},[o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"default","custom-style":t.customStyle},on:{click:t.onClick}},[t._v(" "+t._s(t.t("default"))+" ")]),o("press-button",{attrs:{type:"primary","custom-style":""+t.customStyle},on:{click:t.onVibrateShort}},[t._v(" "+t._s(t.t("primary"))+" ")]),o("press-button",{attrs:{type:"info"},on:{click:t.onVibrateLong}},[t._v(" "+t._s(t.t("info"))+" ")])],1),o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"warning","custom-style":t.customStyle},on:{click:t.onLaunchMp}},[t._v(" "+t._s(t.t("warning"))+" ")]),o("press-button",{attrs:{type:"danger"},on:{click:function(e){return t.onLaunchMp(1)}}},[t._v(" "+t._s(t.t("danger"))+" ")])],1)]),o("demo-block",{attrs:{title:t.t("plain")}},[o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{plain:"",type:"default","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("plain"))+" ")]),o("press-button",{attrs:{plain:"",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("plain"))+" ")])],1),o("press-button",{attrs:{plain:"",type:"info"}},[t._v(" "+t._s(t.t("plain"))+" ")])],1),o("demo-block",{attrs:{title:t.t("hairline")}},[o("press-button",{attrs:{plain:"",hairline:"",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("hairlineButton"))+" ")]),o("press-button",{attrs:{plain:"",hairline:"",type:"info"}},[t._v(" "+t._s(t.t("hairlineButton"))+" ")])],1),o("demo-block",{attrs:{title:t.t("disabled")}},[o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{disabled:"",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("disabled"))+" ")]),o("press-button",{attrs:{disabled:"",type:"info","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("disabled"))+" ")])],1),o("press-button",{attrs:{disabled:"",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("disabled"))+" ")])],1),o("demo-block",{attrs:{title:t.t("loading")}},[o("press-button",{attrs:{loading:"",type:"primary","custom-style":t.customStyle}}),o("press-button",{attrs:{loading:"",type:"primary","loading-type":"spinner","custom-style":t.customStyle}}),o("press-button",{attrs:{loading:"",type:"info","loading-text":t.t("loadingText")}})],1),o("demo-block",{attrs:{title:t.t("shape")}},[o("press-button",{attrs:{square:"",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("square"))+" ")]),o("press-button",{attrs:{round:"",type:"info"}},[t._v(" "+t._s(t.t("round"))+" ")])],1),o("demo-block",{attrs:{title:t.t("icon")}},[o("press-button",{attrs:{icon:"star-o",type:"primary","custom-style":t.customStyle}}),o("press-button",{attrs:{icon:"star-o",type:"primary","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("button"))+" ")]),o("press-button",{attrs:{icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent-2.png"}},[t._v(" "+t._s(t.t("button"))+" ")])],1),o("demo-block",{attrs:{title:t.t("size")}},[o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"primary",size:"large"}},[t._v(" "+t._s(t.t("large"))+" ")])],1),o("press-button",{attrs:{type:"primary",size:"normal","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("normal"))+" ")]),o("press-button",{attrs:{type:"primary",size:"small","custom-style":t.customStyle}},[t._v(" "+t._s(t.t("small"))+" ")]),o("press-button",{attrs:{type:"primary",size:"mini"}},[t._v(" "+t._s(t.t("mini"))+" ")])],1),o("demo-block",{attrs:{title:t.t("blockElement")}},[o("press-button",{attrs:{type:"primary",block:""}},[t._v(" "+t._s(t.t("blockElement"))+" ")])],1),o("demo-block",{attrs:{title:t.t("customColor")}},[o("press-button",{attrs:{color:"#7232dd","custom-style":t.customStyle,"open-type":"openSetting"}},[t._v(" "+t._s(t.t("pure"))+" ")]),o("press-button",{attrs:{color:"#7232dd",plain:"","custom-style":t.customStyle,"open-type":"feedback"}},[t._v(" "+t._s(t.t("pure"))+" ")]),o("press-button",{attrs:{color:"linear-gradient(to right, #4bb0ff, #6149f6)","open-type":"share"}},[t._v(" "+t._s(t.t("gradient"))+" ")])],1),t._l([0,1,2],(function(e,n){return o("demo-block",{key:n,attrs:{title:1===n?"E-SPORT-DISABLE":2===n?"E-SPORT-LOADING":"E-SPORT"}},[o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"e-sport-primary",disabled:1===n,loading:2===n,"custom-style":t.customStyle}},[t._v(" primary ")]),o("press-button",{attrs:{type:"e-sport-primary-bg",disabled:1===n,loading:2===n,"custom-style":t.customStyle}},[t._v(" primary-bg ")])],1),o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"e-sport-primary-bg-lg",disabled:1===n,loading:2===n,"custom-style":t.customStyle}},[t._v(" primary-bg-lg ")])],1),o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"e-sport-primary-bg-xl",disabled:1===n,loading:2===n,"custom-style":t.customStyle}},[t._v(" primary-bg-xl ")])],1),o("div",{staticClass:"demo-button-row"},[o("press-button",{attrs:{type:"e-sport-secondary",disabled:1===n,loading:2===n,"custom-style":t.customStyle,size:{width:"136px",height:"36px"}}},[t._v(" secondary ")]),2!==n?o("press-button",{attrs:{type:"e-sport-border",disabled:1===n,loading:2===n,"custom-style":t.customStyle,size:{width:"136px",height:"36px"}}},[t._v(" border ")]):t._e()],1)])}))],2)},i=[],s=o("1bbf"),r=o("638a"),a=o("c0ad"),l={i18n:{"zh-CN":{type:"按钮类型",size:"按钮尺寸",icon:"图标按钮",loading:"加载状态",disabled:"禁用状态",shape:"按钮形状",default:"默认按钮",primary:"主要按钮",info:"信息按钮",danger:"危险按钮",warning:"警告按钮",large:"大号按钮",normal:"普通按钮",small:"小型按钮",mini:"迷你按钮",plain:"朴素按钮",square:"方形按钮",round:"圆形按钮",hairline:"细边框",hairlineButton:"细边框按钮",loadingText:"加载中...",router:"页面导航",urlRoute:"URL 跳转",vueRoute:"路由跳转",customColor:"自定义颜色",pure:"单色按钮",gradient:"渐变色按钮",blockElement:"块级元素"},"en-US":{type:"Type",size:"Size",icon:"Icon",loading:"Loading",disabled:"Disabled",shape:"Shape",default:"Default",primary:"Primary",info:"Info",danger:"Danger",warning:"Warning",large:"Large",normal:"Normal",small:"Small",mini:"Mini",plain:"Plain",square:"Square",round:"Round",hairline:"Hairline",hairlineButton:"Hairline",loadingText:"Loading...",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",customColor:"Custom Color",pure:"Pure",gradient:"Gradient",blockElement:"Block Element"}},components:{PressButton:s["a"]},data:function(){return{customStyle:"margin-right: 16px;"}},onReady:function(){},methods:{onLaunchMp:function(t){console.log("[launchMiniProgramInGame]"),Object(a["launchMiniProgramInGame"])({appId:"wx99c1c10a389e7433",isWxMp:!t})},onClick:function(t){console.log("[CLICK]",t)},onVibrateLong:function(){Object(r["b"])()||uni.vibrateLong({success:function(){console.log("success")},fail:function(){console.log("fail")}})},onVibrateShort:function(){navigator.vibrate(1e3),Object(r["b"])()||uni.vibrateLong({success:function(){console.log("success")},fail:function(){console.log("fail")}})}}},d=l,c=(o("d7c4"),o("2777")),u=Object(c["a"])(d,n,i,!1,null,"7727d1cf",null);e["default"]=u.exports},f8fc:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={},i=0,s=function(t){var e,o=document.getElementsByTagName("script")[0];null===(e=null===o||void 0===o?void 0:o.parentNode)||void 0===e||e.insertBefore(t,o)},r=function(t,e,o,r){var a;void 0===o&&(o="utf-8"),void 0===r&&(r=null),e&&"function"!==typeof e&&(r=e.context||r,a=e.setup,e=e.callback);var l,d,c=!1,u=function(){c||(c=!0,null===d||void 0===d||d(),e&&e.call(r,l))},p=function(){l=new Error(t||"EMPTY"),u()},m=document.querySelector('script[src="'.concat(t,'"]'));if(m)var f=setInterval((function(){m.isready&&(u(),clearInterval(f))}),20);else{var w=document.createElement("script");if(w.isready=!1,w.readyState&&!("async"in w)){i+=1;var y=i,b={loaded:!0,complete:!0},v=!1;d=function(){w.onreadystatechange=null,w.onerror=null,n[y]=void 0},w.onreadystatechange=function(){var t=w.readyState;if(!l){if(!v&&b[t]&&(v=!0,s(w)),"loaded"===t&&(w.children,"loading"===w.readyState))return p();"complete"===w.readyState&&(w.isready=!0,u())}},w.onerror=p,n[y]=w,a&&a.call(r,w),w.src=t}else d=function(){w.onload=null,w.onerror=null},w.onerror=p,w.onload=function(){w.isready=!0,u()},w.async=!0,w.charset=o||"utf-8",a&&a.call(r,w),w.src=t,s(w)}};e.loader=r}}]);