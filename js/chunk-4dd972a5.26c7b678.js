(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd972a5"],{"0898":function(n,o,e){"use strict";var t=e("5c67"),i=t.match(/AppleWebKit\/(\d+)\./);n.exports=!!i&&+i[1]},2340:function(n,o,e){"use strict";function t(n){return new Promise((function(o,e){var t=document.getElementById("#clipboard");null===t||void 0===t||t.remove();var i=document.createElement("textarea");i.id="#clipboard",i.style.position="fixed",i.style.top="-9999px",i.style.zIndex="-9999",document.body.appendChild(i),i.value="".concat(n),i.select(),i.setSelectionRange(0,i.value.length);var c=document.execCommand("Copy",!1);i.blur(),c?o():e()}))}e.d(o,"a",(function(){return t}))},"590d":function(n,o,e){"use strict";e.d(o,"a",(function(){return X}));var t=function(){return t=Object.assign||function(n){for(var o,e=1,t=arguments.length;e<t;e++)for(var i in o=arguments[e],o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i]);return n},t.apply(this,arguments)};function i(n,o,e){if(e||2===arguments.length)for(var t,i=0,c=o.length;i<c;i++)!t&&i in o||(t||(t=Array.prototype.slice.call(o,0,i)),t[i]=o[i]);return n.concat(t||Array.prototype.slice.call(o))}var c={},a=0,r=function(n){var o,e=document.getElementsByTagName("script")[0];null===(o=null===e||void 0===e?void 0:e.parentNode)||void 0===o||o.insertBefore(n,e)},l=function(n,o,e,t){var i;void 0===e&&(e="utf-8"),void 0===t&&(t=null),o&&"function"!==typeof o&&(t=o.context||t,i=o.setup,o=o.callback);var l,u,d=!1,s=function(){d||(d=!0,null===u||void 0===u||u(),o&&o.call(t,l))},v=function(){l=new Error(n||"EMPTY"),s()},f=document.querySelector('script[src="'.concat(n,'"]'));if(f)var m=setInterval((function(){f.isready&&(s(),clearInterval(m))}),20);else{var g=document.createElement("script");if(g.isready=!1,g.readyState&&!("async"in g)){a+=1;var p=a,h={loaded:!0,complete:!0},E=!1;u=function(){g.onreadystatechange=null,g.onerror=null,c[p]=void 0},g.onreadystatechange=function(){var n=g.readyState;if(!l){if(!E&&h[n]&&(E=!0,r(g)),"loaded"===n&&(g.children,"loading"===g.readyState))return v();"complete"===g.readyState&&(g.isready=!0,s())}},g.onerror=v,c[p]=g,i&&i.call(t,g),g.src=n}else u=function(){g.onload=null,g.onerror=null},g.onerror=v,g.onload=function(){g.isready=!0,s()},g.async=!0,g.charset=e||"utf-8",i&&i.call(t,g),g.src=n,r(g)}};function u(n){return new Promise((function(o){l(n,(function(){o(1)}))}))}function d(n){var o,e=n.id,t=n.content,i=document.getElementById(e);null===(o=null===i||void 0===i?void 0:i.parentNode)||void 0===o||o.removeChild(i);var c=document.createElement("style");c.id=e,c.type="text/css",c.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(c)}var s,v={build:"_vConsoleBuildInfo",commit:"_vConsoleCommitInfo"},f={LINE:"line",WRAP:"v-console-custom-tab",URL_INPUT_ID:"vConsolePluginInput",URL_JUMP_BUTTON:"vConsolePluginUrlJumpButton",GO_BACK_BUTTON:"vConsolePluginGoBackButton",PLUGIN_NAME_PREFIX:"__vc_plug_",PLUGIN_VERSION_NAME:"version_performance",PLUGIN_SIMPLE_VERSION_NAME:"simple_version"},m='<div class="'.concat(f.LINE,'"> </div>'),g={KEY:"vConsole_no_delay",VALUE:"1"},p="https://image-1251917893.file.myqcloud.com/igame/npm/vconsole%403.15.1/vconsole.min.js",h="\n.".concat(f.WRAP," {\n  padding: 12px 16px 30px;\n  user-select: auto;\n}\n\n.").concat(f.WRAP," .").concat(f.LINE," {\n  line-height: 20px;\n  padding: 5px 0;\n  color: var(--VC-PURPLE, #6467f0);\n  word-break: break-all;\n  user-select: auto;\n}\n\n.").concat(f.WRAP," textarea {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  color: #323233;\n  line-height: inherit;\n  text-align: left;\n  background-color: transparent;\n  resize: none;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  height: 60px;\n  padding: 4px;\n  line-height: 16px;\n  font-size: 13px;\n  user-select: auto;\n}\n\n.").concat(f.WRAP," textarea:focus {\n  outline: none;\n}\n\n.").concat(f.WRAP," button {\n  height: 30px;\n  line-height: 1.2;\n  text-align: center;\n  border-radius: 2px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #07c160;\n  border: 1px solid #07c160;\n  font-size: 14px;\n  padding: 0 12px;\n  margin-right: 10px;\n}\n\n.vc-cmd,\n.vc-cmd-input {\n  user-select: auto !important;\n}\n\n#").concat(f.URL_INPUT_ID," {\n  user-select: auto !important;\n}\n"),E={KEY:"tip_debug_cgi_env",PROD:"prod",TEST:"test"},w=[{key:"time",label:"Build Time"},{key:"author",label:"Build Author"},{key:"branch",label:"Build Branch"},{key:"netEnv",label:"Build Net Env"}],b=[{key:"message",label:"Last Commit Message"},{key:"author",label:"Last Commit Author"},{key:"date",label:"Last Commit Time"},{key:"hash",label:"Last Commit Hash"}],I="__AEGIS_PERFORMANCE",y=[{key:"dnsLookup",label:"Aegis DNS 查询"},{key:"tcp",label:"Aegis TCP 链接"},{key:"ttfb",label:"Aegis SSL 建连"},{key:"contentDownload",label:"Aegis contentDownload"},{key:"resourceDownload",label:"Aegis resourceDownload"},{key:"domParse",label:"Aegis DOM解析"},{key:"firstScreenTiming",label:"Aegis 首屏耗时"}];function P(n){var o;s=(null===(o=null===n||void 0===n?void 0:n.target)||void 0===o?void 0:o.value)||""}function C(){s&&(location.href=s)}function L(){var n,o;history.go(-1),null===(o=null===(n=window.vConsole)||void 0===n?void 0:n.hide)||void 0===o||o.call(n)}function _(n){var o=function(n){return+(+n).toFixed(2)},e='<div class="'.concat(f.WRAP,'">');e+=T().map((function(n){var e=n.label,t=n.value;return'<div class="'.concat(f.LINE,'">').concat(e,"：").concat(o(t),"ms </div>")})).concat(m).concat(k()).concat(m).concat(A()).join("\n"),e+='\n<textarea id="'.concat(f.URL_INPUT_ID,'" type="text" placeholder="请输入跳转路径"></textarea>\n<button id="').concat(f.URL_JUMP_BUTTON,'">跳转</button>\n<button id="').concat(f.GO_BACK_BUTTON,'">返回上一页</button>\n  '),e+="</div>",n(e)}function N(){var n=new VConsole.VConsolePlugin(f.PLUGIN_VERSION_NAME,"其他信息"),o=function(n){var o=document.getElementById("".concat(f.PLUGIN_NAME_PREFIX).concat(f.PLUGIN_VERSION_NAME));o&&(o.innerHTML=n)};n.on("renderTab",(function(n){_(n)})),n.on("showConsole",(function(){_(o)})),n.on("show",(function(){_(o)}));var e=[];return e.push({name:"隐藏vConsole",global:!1,onClick:function(){var n;null===(n=window.vConsole)||void 0===n||n.destroy()}}),n.on("addTool",(function(n){n(e)})),n.on("show",(function(){var n,o,e;null===(n=document.getElementById(f.URL_INPUT_ID))||void 0===n||n.addEventListener("input",P),null===(o=document.getElementById(f.URL_JUMP_BUTTON))||void 0===o||o.addEventListener("click",C),null===(e=document.getElementById(f.GO_BACK_BUTTON))||void 0===e||e.addEventListener("click",L)})),n.on("hide",(function(){var n,o,e;null===(n=document.getElementById(f.URL_INPUT_ID))||void 0===n||n.removeEventListener("input",P),null===(o=document.getElementById(f.URL_JUMP_BUTTON))||void 0===o||o.removeEventListener("click",C),null===(e=document.getElementById(f.GO_BACK_BUTTON))||void 0===e||e.addEventListener("click",L)})),n}function T(){var n,o,e=performance.timing||{},t=(null===(o=null===(n=performance)||void 0===n?void 0:n.wx)||void 0===o?void 0:o.timeOrigin)||e.fetchStart,i=e.domainLookupEnd-e.domainLookupStart,c=e.connectEnd-e.connectStart,a=e.responseStart-e.requestStart,r=e.responseEnd-e.responseStart,l=e.domContentLoadedEventStart-e.responseEnd,u=e.domLoading-t,d=e.loadEventEnd-t,s=e.domComplete-e.domInteractive,v=[{value:i,label:"DNS连接耗时"},{value:c,label:"TCP连接耗时"},{value:a,label:"后端响应时间"},{value:r,label:"HTML页面下载时间"},{value:l,label:"DOM时间"},{value:s,label:"解析DOM树耗时"},{value:u,label:"首次加载耗时"},{value:d,label:"整页耗时"}];return v}function k(){var n=window[v.build]||{},o=window[v.commit]||{},e=w.map((function(o){var e=o.key,t=o.label;return'<div class="'.concat(f.LINE,'">').concat(t,": ").concat(n[e]||"","</div>")})),t=b.map((function(n){var e=n.key,t=n.label;return'<div class="'.concat(f.LINE,'">').concat(t,": ").concat(o[e]||"","</div>")}));return i(i(i(i([],e,!0),[m],!1),t,!0),[m,m],!1).join("\n")}function A(){var n=window[I]||{},o=y.map((function(o){var e,t=o.key,i=o.label;return'<div class="'.concat(f.LINE,'">').concat(i,": ").concat(null!==(e=n[t])&&void 0!==e?e:"","</div>")}));return i(i([m],o,!0),[m],!1).join("\n")}var x=e("2340");function S(n){Object(x["a"])(n).then((function(){alert("已复制，开去粘贴吧～")}))["catch"]((function(){alert("当前环境暂不支持复制，请长按选择复制～")}))}function U(n){void 0===n&&(n="");var o=new VConsole.VConsolePlugin("feedback","反馈");o.on("init",(function(){}));var e=window.location.href,t=navigator.userAgent,i=document.cookie,c='<div class="'.concat(f.WRAP,'">\n<div class="').concat(f.LINE,'">url：').concat(e,'</div>\n<div class="').concat(f.LINE,'">uid：').concat(n,'</div>\n<div class="').concat(f.LINE,'">ua：').concat(t,'</div>\n<div class="').concat(f.LINE,'">cookie：').concat(i,"</div>\n  </div>\n  ");o.on("renderTab",(function(n){n(c)}));var a=[];return a.push({name:"复制用户信息",global:!1,onClick:function(){var o={url:e,uid:n,UA:t,cookie:i};S(JSON.stringify(o))}}),o.on("addTool",(function(n){n(a)})),o}function R(){var n=window.sessionStorage.getItem(E.KEY);return console.log("value",n),n===E.PROD?"正式":n===E.TEST?"测试":"默认"}function M(){var n=new VConsole.VConsolePlugin("switchEnv","切换环境"),o=R(),e='<div class="'.concat(f.WRAP,'">\n<div class="').concat(f.LINE,'">当前环境：').concat(o,"</div>\n  </div>");return n.on("renderTab",(function(n){n(e)})),n.on("addTool",(function(n){var o=[];o.push({name:"测试环境",global:!1,onClick:function(){console.log("已切换为测试CGI，即将刷新页面......"),window.sessionStorage.setItem(E.KEY,E.TEST),setTimeout((function(){location.reload()}),1e3)}}),o.push({name:"现网环境",global:!1,onClick:function(){console.log("已切换为正式CGI，即将刷新页面......"),window.sessionStorage.setItem(E.KEY,E.PROD),setTimeout((function(){location.reload()}),1e3)}}),n(o)})),n}function B(){var n=window.sessionStorage.getItem(g.KEY);return n===g.VALUE?"已去掉延迟":"默认"}function O(){var n=new VConsole.VConsolePlugin("loadDelay","vConsole加载延迟"),o='<div class="'.concat(f.WRAP,'">\n  <div class="').concat(f.LINE,'">当前状态：').concat(B(),"</div>\n    </div>");n.on("renderTab",(function(n){n(o)}));var e=[];return e.push({name:"去除延迟",global:!1,onClick:function(){sessionStorage.setItem(g.KEY,g.VALUE),console.log("已设置去除延迟，即将刷新页面......"),setTimeout((function(){location.reload()}),1e3)}}),e.push({name:"恢复延迟",global:!1,onClick:function(){sessionStorage.removeItem(g.KEY),console.log("已设置恢复延迟，即将刷新页面......"),setTimeout((function(){location.reload()}),1e3)}}),e.push({name:"刷新页面",global:!1,onClick:function(){window.location.reload()}}),n.on("addTool",(function(n){n(e)})),n}function V(){var n=new VConsole.VConsolePlugin("msdk","msdk工具"),o='<div class="'.concat(f.WRAP,'">\n  <div class="').concat(f.LINE,'">msdk工具</div>\n  </div>');n.on("renderTab",(function(n){n(o)}));var e=[];return e.push({name:"关闭页面",global:!1,onClick:function(){var n,o;null===(o=null===(n=null===window||void 0===window?void 0:window.app)||void 0===n?void 0:n.closeWebView)||void 0===o||o.call(n)}}),n.on("addTool",(function(n){n(e)})),n}function D(n,o,e,t){if(void 0===t&&(t=""),!n)return e||"";var i=new Date;10==="".concat(n).length&&(n*=1e3),i.setTime(n);var c={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()},a=/(y+)/;t&&(a=new RegExp("(?:^|(?:[^".concat(t,"y]))(y+)")));var r=o.match(a);for(var l in(null===r||void 0===r?void 0:r[1])&&(o=o.replace(r[1],"".concat(i.getFullYear()).slice(4-r[1].length))),c){var u=new RegExp("(".concat(l,")"));if(t&&(u=new RegExp("(?:^|(?:[^".concat(t).concat(l[0],"]))(").concat(l,")"))),r=o.match(u),null===r||void 0===r?void 0:r[1]){var d=r.index,s=void 0===d?0:d,v=t?s+r[0].length-r[1].length:s,f="".concat(c[l]),m=r[1].length,g=1===m?f:"00".concat(f).slice("".concat(f).length);o=o.slice(0,v)+g+o.slice(v+m)}}return t&&(o=o.replace(new RegExp(t,"g"),"")),o}function G(n,o){var e=new Date(n).getTime();return D(e,o)}function K(n){var o=window.igameVersion,e="";if(null===o||void 0===o?void 0:o.version){var t="".concat(G(new Date(+o.version),"yyyy-MM-dd hh:mm:ss"));e='\n  <div class="'.concat(f.LINE,'">构建时间：').concat(t||"",'</div>\n  <div class="').concat(f.LINE,'">构建作者：').concat(o.author||"","</div>\n  ")}else e=' <div class="'.concat(f.LINE,'">无构建信息</div>');n('<div class="'.concat(f.WRAP,'">').concat(e,"</div>"))}function W(){var n=new VConsole.VConsolePlugin(f.PLUGIN_SIMPLE_VERSION_NAME,"版本信息"),o=function(n){var o=document.getElementById("".concat(f.PLUGIN_NAME_PREFIX).concat(f.PLUGIN_SIMPLE_VERSION_NAME));o&&(o.innerHTML=n)};return n.on("renderTab",(function(n){K(n)})),n.on("showConsole",(function(){K(o)})),n.on("show",(function(){K(o)})),n}function Y(n,o){return void 0===n&&(n={}),void 0===o&&(o=[]),new Promise((function(e){"undefined"===typeof window.VConsole?u(p).then((function(){e(J(n,o))})):e(J(n,o))}))}function J(n,o){var e=new VConsole(t({},n||{}));return e.addPlugin(N()),e.addPlugin(U()),e.addPlugin(M()),e.addPlugin(O()),e.addPlugin(W()),e.addPlugin(V()),o.forEach((function(n){e.addPlugin(n())})),d({id:"vConsolePluginStyle",content:h}),window&&!window.vConsole&&(window.vConsole=e),e}var H={KEY:"SHOW_V_CONSOLE",VALUE:"1"},j={show:!1};function F(){Y().then((function(n){window.vConsole=n}))}function q(){j.show=!0,localStorage.setItem(H.KEY,H.VALUE),F()}function z(){var n;localStorage.removeItem(H.KEY),j.show=!1,null===(n=window.vConsole)||void 0===n||n.destroy()}function X(){return j.show?z():q(),j.show}},"5d34":function(n,o,e){"use strict";var t=e("b15a"),i=e("ed5c"),c=e("88f1"),a=/"/g,r=t("".replace);n.exports=function(n,o,e,t){var l=c(i(n)),u="<"+o;return""!==e&&(u+=" "+e+'="'+r(c(t),a,"&quot;")+'"'),u+">"+l+"</"+o+">"}},"5d62":function(n,o,e){"use strict";var t=e("5c67");n.exports=/MSIE|Trident/.test(t)},"5f00":function(n,o,e){"use strict";var t=e("64a0"),i=e("5d34"),c=e("84d3");t({target:"String",proto:!0,forced:c("link")},{link:function(n){return i(this,"a","href",n)}})},"7c45":function(n,o,e){"use strict";function t(n){return new Promise((function(o,e){wx?wx.setClipboardData({data:"".concat(n),success:function(){o()},fail:function(n){console.log(n),e()}}):e()}))}e.d(o,"a",(function(){return t}))},"84d3":function(n,o,e){"use strict";var t=e("5b46");n.exports=function(n){return t((function(){var o=""[n]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},b259:function(n,o,e){"use strict";var t=e("5c67"),i=t.match(/firefox\/(\d+)/i);n.exports=!!i&&+i[1]},b45d:function(n,o,e){"use strict";var t=e("64a0"),i=e("b15a"),c=e("d19e"),a=e("4697"),r=e("4a72"),l=e("ca24"),u=e("88f1"),d=e("5b46"),s=e("c8d1"),v=e("ad3e"),f=e("b259"),m=e("5d62"),g=e("fd58"),p=e("0898"),h=[],E=i(h.sort),w=i(h.push),b=d((function(){h.sort(void 0)})),I=d((function(){h.sort(null)})),y=v("sort"),P=!d((function(){if(g)return g<70;if(!(f&&f>3)){if(m)return!0;if(p)return p<603;var n,o,e,t,i="";for(n=65;n<76;n++){switch(o=String.fromCharCode(n),n){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(t=0;t<47;t++)h.push({k:o+t,v:e})}for(h.sort((function(n,o){return o.v-n.v})),t=0;t<h.length;t++)o=h[t].k.charAt(0),i.charAt(i.length-1)!==o&&(i+=o);return"DGBEFHACIJK"!==i}})),C=b||!I||!y||!P,L=function(n){return function(o,e){return void 0===e?-1:void 0===o?1:void 0!==n?+n(o,e)||0:u(o)>u(e)?1:-1}};t({target:"Array",proto:!0,forced:C},{sort:function(n){void 0!==n&&c(n);var o=a(this);if(P)return void 0===n?E(o):E(o,n);var e,t,i=[],u=r(o);for(t=0;t<u;t++)t in o&&w(i,o[t]);s(i,L(n)),e=r(i),t=0;while(t<e)o[t]=i[t++];while(t<u)l(o,t++);return o}})},c8d1:function(n,o,e){"use strict";var t=e("178c"),i=Math.floor,c=function(n,o){var e=n.length;if(e<8){var a,r,l=1;while(l<e){r=l,a=n[l];while(r&&o(n[r-1],a)>0)n[r]=n[--r];r!==l++&&(n[r]=a)}}else{var u=i(e/2),d=c(t(n,0,u),o),s=c(t(n,u),o),v=d.length,f=s.length,m=0,g=0;while(m<v||g<f)n[m+g]=m<v&&g<f?o(d[m],s[g])<=0?d[m++]:s[g++]:m<v?d[m++]:s[g++]}return n};n.exports=c}}]);