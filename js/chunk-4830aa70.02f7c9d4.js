(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4830aa70"],{"06ed":function(t,e,n){var r=n("4a45");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("160c702f",r,!0,{sourceMap:!1,shadowMode:!1})},"1a45":function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const s=new RegExp("^"+o+"$"),a=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return s.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return c.test(t)}},"20a6":function(t,e,n){var r=n("cd54");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("3ec8711d",r,!0,{sourceMap:!1,shadowMode:!1})},"214b":function(t,e,n){const r=n("63e8"),o=n("5013");function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},"2fa4":function(t,e,n){var r=n("8195");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("163a9768",r,!0,{sourceMap:!1,shadowMode:!1})},3173:function(t,e,n){"use strict";n("20a6")},"32f0":function(t,e,n){const r=n("804e"),o=n("cbcc"),i=n("5f0f"),s=n("866b");function a(t,e,n,i,s){const a=[].slice.call(arguments,1),c=a.length,u="function"===typeof a[c-1];if(!u&&!r())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=i=void 0):2!==c||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,s){try{const s=o.create(n,i);r(t(s,e,i))}catch(a){s(a)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(s=n,n=e,e=i=void 0):3===c&&(e.getContext&&"undefined"===typeof s?(s=i,i=void 0):(s=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);s(null,t(r,e,i))}catch(l){s(l)}}e.create=o.create,e.toCanvas=a.bind(null,i.render),e.toDataURL=a.bind(null,i.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return s.render(t,n)}))},"3b20":function(t,e,n){"use strict";var r={single_source_shortest_paths:function(t,e,n){var o={},i={};i[e]=0;var s,a,c,u,l,d,f,h,p,g=r.PriorityQueue.make();g.push(e,0);while(!g.empty())for(c in s=g.pop(),a=s.value,u=s.cost,l=t[a]||{},l)l.hasOwnProperty(c)&&(d=l[c],f=u+d,h=i[c],p="undefined"===typeof i[c],(p||h>f)&&(i[c]=f,g.push(c,f),o[c]=a));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var m=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var o=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},"3e47":function(t,e,n){"use strict";n("06ed")},"406f":function(t,e,n){"use strict";t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},4291:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},"479e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap demo-wrap--gray"},[n("div",{staticClass:"barcode-wrap"},[n("PressQRCode",{attrs:{value:t.value,size:t.size}})],1),n("DemoInput",{attrs:{autosize:t.autosize,value:t.value},on:{confirm:t.onConfirmInput}})],1)},o=[],i=n("8048"),s=n("f535"),a={components:{PressQRCode:i["a"],DemoInput:s["a"]},data:function(){return{autosize:{maxHeight:600,minHeight:50},value:"https://novlan1.github.io/press-ui/",size:200}},methods:{onConfirmInput:function(t){this.value=t}}},c=a,u=(n("b709"),n("2777")),l=Object(u["a"])(c,r,o,!1,null,"6cb59662",null);e["default"]=l.exports},"4a45":function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".input__wrap[data-v-14c76f9e]{padding:0 10px 20px}.input__buttons[data-v-14c76f9e]{padding-top:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}",""]),t.exports=e},5013:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},"50d2":function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".press-section{background-color:#fff;opacity:.8;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.press-section--active{opacity:1}.press-section--clickable{cursor:pointer}.press-section .press-section-header{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:12px 10px;font-weight:400}.press-section .press-section-header__decoration{margin-right:6px;background-color:#2979ff}.press-section .press-section-header__decoration.line{width:4px;height:12px;border-radius:10px}.press-section .press-section-header__decoration.circle{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.press-section .press-section-header__decoration.square{width:8px;height:8px}.press-section .press-section-header__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#333}.press-section .press-section-header__content .distraction{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-section .press-section-header__content-sub{margin-top:2px}.press-section .press-section-content,.press-section .press-section-header__slot-right{font-size:14px}",""]),t.exports=e},"54da":function(t,e){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n},"5ab2":function(t,e,n){const r=n("ce6f");function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},"5f0f":function(t,e,n){const r=n("6eec");function o(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let s=n,a=e;"undefined"!==typeof s||e&&e.getContext||(s=e,e=void 0),e||(a=i()),s=r.getOptions(s);const c=r.getImageWidth(t.modules.size,s),u=a.getContext("2d"),l=u.createImageData(c,c);return r.qrToImageData(l.data,t,s),o(u,a,c),u.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,r){let o=r;"undefined"!==typeof o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}},"63e8":function(t,e,n){const r=n("c611"),o=n("1a45");function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(r){return n}}},"6eec":function(t,e){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,s=e.getScale(o,r),a=Math.floor((o+2*r.margin)*s),c=r.margin*s,u=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),d=r.color.light;if(e>=c&&n>=c&&e<a-c&&n<a-c){const t=Math.floor((e-c)/s),r=Math.floor((n-c)/s);d=u[i[t*o+r]?1:0]}t[l++]=d.r,t[l++]=d.g,t[l++]=d.b,t[l]=d.a}}},"746c":function(t,e,n){const r=n("4291"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},"800e":function(t,e,n){const r=n("63e8"),o=n("b5b8"),i=n("b90b"),s=n("fe09"),a=n("214b"),c=n("1a45"),u=n("5013"),l=n("3b20");function d(t){return unescape(encodeURIComponent(t)).length}function f(t,e,n){const r=[];let o;while(null!==(o=t.exec(n)))r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function h(t){const e=f(c.NUMERIC,r.NUMERIC,t),n=f(c.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;u.isKanjiModeEnabled()?(o=f(c.BYTE,r.BYTE,t),i=f(c.KANJI,r.KANJI,t)):(o=f(c.BYTE_KANJI,r.BYTE,t),i=[]);const s=e.concat(n,o,i);return s.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function p(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return s.getBitsLength(t)}}function g(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:d(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:d(o.data)}])}}return e}function y(t,e){const n={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+s+t;c.push(l),n[l]={node:u,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const s=i[t];n[s]&&n[s].node.mode===u.mode?(o[s][l]=p(n[s].lastCount+u.length,u.mode)-p(n[s].lastCount,u.mode),n[s].lastCount+=u.length):(n[s]&&(n[s].lastCount=u.length),o[s][l]=p(u.length,u.mode)+4+r.getCharCountIndicator(u.mode,e))}}i=c}for(let r=0;r<i.length;r++)o[i[r]].end=0;return{map:o,table:n}}function w(t,e){let n;const c=r.getBestModeForData(t);if(n=r.from(e,c),n!==r.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(c));switch(n!==r.KANJI||u.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new a(t);case r.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(w(e,null)):e.data&&t.push(w(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=h(t,u.isKanjiModeEnabled()),o=m(r),i=y(o,n),s=l.find_path(i.map,"start","end"),a=[];for(let e=1;e<s.length-1;e++)a.push(i.table[s[e]].node);return e.fromArray(g(a))},e.rawSplit=function(t){return e.fromArray(h(t,u.isKanjiModeEnabled()))}},8048:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-q-r-code"},[t.value?n("PressQRCodeWeb",{attrs:{value:t.value}}):t._e(),t.codeImg?t._e():void 0,t.codeImg?n("img",{style:t.style,attrs:{src:t.codeImg,"show-menu-by-longpress":!0},on:{longpress:t.onLongPressImage}}):t._e()],2)},o=[];n("2aaa"),n("948b"),n("e8e7");var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a,c=n("32f0"),u=n.n(c),l=["low","medium","quartile","high","L","M","Q","H"],d=[0,1,2,3,4,5,6,7],f=["alphanumeric","numeric","kanji","byte"],h=["image/png","image/jpeg","image/webp"],p=40,g={props:{version:{type:Number,validator:function(t){return t===Number.parseInt(String(t),10)&&t>=1&&t<=p}},errorCorrectionLevel:{type:String,validator:function(t){return l.includes(t)}},maskPattern:{type:Number,validator:function(t){return d.includes(t)}},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:function(t){return["dark","light"].every((function(e){return["string","undefined"].includes(typeof t[e])}))}},type:{type:String,validator:function(t){return h.includes(t)}},quality:{type:Number,validator:function(t){return t===Number.parseFloat(String(t))&&t>=0&&t<=1}},value:{type:[String,Array],required:!0,validator:function(t){return"string"===typeof t||t.every((function(t){var e=t.data,n=t.mode;return"string"===typeof e&&(null==n||f.includes(n))}))}}},data:function(){return{dataUrl:""}},watch:{$props:{deep:!0,immediate:!0,handler:"toDataURL"}},methods:{toDataURL:function(){var t=this,e=this.$props,n=e.quality,r=s(e,["quality"]);return u.a.toDataURL(this.value,Object.assign(r,null==n||{renderOptions:{quality:n}})).then((function(e){return t.dataUrl=e}))}},render:function(){return this.$createElement("img",{domProps:i(i({},this.$attrs),{src:this.dataUrl})})}};a=g;var m=a,y={name:"PressQRCode",components:{PressQRCodeWeb:m},props:{value:{type:String,default:"",required:!0},size:{type:Number,default:287,required:!1},margin:{type:Number,default:0}},emits:["result"],data:function(){return{codeImg:"",wxCanvasId:"pressWxQRcode",canvasId:"pressQRcode"}},computed:{style:function(){return"width: ".concat(this.size,"px; height: ").concat(this.size,"px;")}},watch:{value:{handler:function(){var t=this;this.codeImg="",setTimeout((function(){t.genQRCode()}))}}},mounted:function(){this.genQRCode()},methods:{genQRCode:function(){},codeMpWx:function(){var t=this,e=this.createSelectorQuery();e.select("#".concat(this.wxCanvasId)).fields({node:!0,size:!0}).exec((function(e){var n=e[0].node;drawWxQRcode({canvas:n,canvasId:t.wxCanvasId,width:t.size,background:"#ffffff",foreground:"#000000",text:t.value}),wx.canvasToTempFilePath({canvasId:t.wxCanvasId,canvas:n,x:0,y:0,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(e){console.log("[二维码临时路径]",e.tempFilePath),t.codeImg=e.tempFilePath,t.$emit("result",t.codeImg)},fail:function(t){console.error(t)}})}))},codeMpQQ:function(){var t=this,e=new UQRCode;e.data=this.value,e.size=this.size,e.margin=Math.round(this.size/20),e.make();var n=uni.createCanvasContext(this.canvasId,this);e.canvasContext=n,e.drawCanvas(),setTimeout((function(){uni.canvasToTempFilePath({canvasId:t.canvasId,fileType:"png",width:t.size,height:t.size,success:function(e){console.log("[codeMpQQ]",e),t.codeImg=e.tempFilePath,t.$emit("result",t.codeImg)},fail:function(t){console.log(t)}},t)}),300)},onLongPressImage:function(){this.$emit("longPressImage",this.codeImg)}}},w=y,b=(n("a0c4"),n("2777")),v=Object(b["a"])(w,r,o,!1,null,"4827e3f0",null);e["a"]=v.exports},"804e":function(t,e){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},8195:function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".barcode-wrap[data-v-6cb59662]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}",""]),t.exports=e},"854c":function(t,e,n){const r=n("5013"),o=1335,i=21522,s=r.getBCHDigit(o);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let a=n<<10;while(r.getBCHDigit(a)-s>=0)a^=o<<r.getBCHDigit(a)-s;return(n<<10|a)^i}},"866b":function(t,e,n){const r=n("6eec");function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function s(t,e,n){let r="",o=0,s=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||s||(s=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(r+=s?i("M",u+n,.5+l+n):i("m",o,0),o=0,s=!1),u+1<e&&t[c+1]||(r+=i("h",a),a=0)):o++}return r}e.render=function(t,e,n){const i=r.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*i.margin,l=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",d="<path "+o(i.color.dark,"stroke")+' d="'+s(c,a,i.margin)+'"/>',f='viewBox="0 0 '+u+" "+u+'"',h=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+h+f+' shape-rendering="crispEdges">'+l+d+"</svg>\n";return"function"===typeof n&&n(null,p),p}},"86ce":function(t,e,n){const r=n("5013"),o=n("746c"),i=n("4291"),s=n("63e8"),a=n("c611"),c=7973,u=r.getBCHDigit(c);function l(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}function d(t,e){return s.getCharCountIndicator(t,e)+4}function f(t,e){let n=0;return t.forEach((function(t){const r=d(t.mode,e);n+=r+t.getBitsLength()})),n}function h(t,n){for(let r=1;r<=40;r++){const o=f(t,r);if(o<=e.getCapacity(r,n,s.MIXED))return r}}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=s.BYTE);const i=r.getSymbolTotalCodewords(t),c=o.getTotalCodewordsCount(t,e),u=8*(i-c);if(n===s.MIXED)return u;const l=u-d(n,t);switch(n){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const r=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return h(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-u>=0)e^=c<<r.getBCHDigit(e)-u;return t<<12|e}},"8c21":function(t,e,n){var r=n("d250");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("391b278b",r,!0,{sourceMap:!1,shadowMode:!1})},"9a48":function(t,e,n){"use strict";n("da91")},a0c4:function(t,e,n){"use strict";n("8c21")},b5b8:function(t,e,n){const r=n("63e8");function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},b5c7:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},b709:function(t,e,n){"use strict";n("2fa4")},b90b:function(t,e,n){const r=n("63e8"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},bd3b:function(t,e,n){const r=n("5013").getSymbolSize,o=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-o,0],[0,e-o]]}},be0c:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var r=!1;try{var o={};Object.defineProperty(o,"passive",{get:function(){return r=!0,!0}}),window.addEventListener("test-passive",(function(){}),o)}catch(a){}var i=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!r&&{passive:t}},s=i()},c611:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},c993:function(t,e,n){const r=n("5013").getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let r=1;r<e-1;r++)i[r]=i[r-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||n.push([r[e],r[t]]);return n}},cbcc:function(t,e,n){const r=n("5013"),o=n("4291"),i=n("54da"),s=n("dac45"),a=n("c993"),c=n("bd3b"),u=n("f2ed"),l=n("746c"),d=n("5ab2"),f=n("86ce"),h=n("854c"),p=n("63e8"),g=n("800e");function m(t,e){const n=t.size,r=c.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}function y(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function w(t,e){const n=a.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}function b(t,e){const n=t.size,r=f.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=1===(r>>a&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}function v(t,e,n){const r=t.size,o=h.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1===(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function x(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2){6===a&&a--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1===(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}}function C(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(o)}));const s=r.getSymbolTotalCodewords(t),a=l.getTotalCodewordsCount(t,e),c=8*(s-a);o.getLengthInBits()+4<=c&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);const u=(c-o.getLengthInBits())/8;for(let r=0;r<u;r++)o.put(r%2?17:236,8);return E(o,t,e)}function E(t,e,n){const o=r.getSymbolTotalCodewords(e),i=l.getTotalCodewordsCount(e,n),s=o-i,a=l.getBlocksCount(e,n),c=o%a,u=a-c,f=Math.floor(o/a),h=Math.floor(s/a),p=h+1,g=f-h,m=new d(g);let y=0;const w=new Array(a),b=new Array(a);let v=0;const x=new Uint8Array(t.buffer);for(let r=0;r<a;r++){const t=r<u?h:p;w[r]=x.slice(y,y+t),b[r]=m.encode(w[r]),y+=t,v=Math.max(v,t)}const C=new Uint8Array(o);let E,I,P=0;for(E=0;E<v;E++)for(I=0;I<a;I++)E<w[I].length&&(C[P++]=w[I][E]);for(E=0;E<g;E++)for(I=0;I<a;I++)C[P++]=b[I][E];return C}function I(t,e,n,o){let i;if(Array.isArray(t))i=g.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=g.rawSplit(t);r=f.getBestVersionForData(e,n)}i=g.fromString(t,r||40)}}const a=f.getBestVersionForData(i,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;const c=C(e,n,i),l=r.getSymbolSize(e),d=new s(l);return m(d,e),y(d),w(d,e),v(d,n,0),e>=7&&b(d,e),x(d,c),isNaN(o)&&(o=u.getBestMask(d,v.bind(null,d,n))),u.applyMask(o,d),v(d,n,o),{modules:d,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,s=o.M;return"undefined"!==typeof e&&(s=o.from(e.errorCorrectionLevel,o.M),n=f.from(e.version),i=u.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),I(t,n,s,i)}},cd54:function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".section-content[data-v-00eaedc0]{margin:0 12px}",""]),t.exports=e},ce6f:function(t,e,n){const r=n("b5c7");e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;while(o<n.length&&0===n[o])o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},d250:function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".press-q-r-code[data-v-4827e3f0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;margin:0 auto}",""]),t.exports=e},da91:function(t,e,n){var r=n("50d2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("95978d8c",r,!0,{sourceMap:!1,shadowMode:!1})},dac45:function(t,e){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=n},f2ed:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,s=null,a=null;for(let c=0;c<e;c++){o=i=0,s=a=null;for(let u=0;u<e;u++){let e=t.get(c,u);e===s?o++:(o>=5&&(r+=n.N1+(o-5)),s=e,o=1),e=t.get(u,c),e===a?i++:(i>=5&&(r+=n.N1+(i-5)),a=e,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let s=0;s<e;s++)o=o<<1&2047|t.get(n,s),s>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(s,n),s>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const o=Math.abs(Math.ceil(100*e/r/5)-10);return o*n.N4},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),e.applyMask(s,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),r<i&&(i=r,o=s)}return o}},f535:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PressDemoBlock",{attrs:{title:t.t("mockData"),"section-style":t.sectionStyle,"header-style":t.headerStyle}},[n("div",{staticClass:"input__wrap"},[n("PressField",{attrs:{type:"textarea",autosize:t.autosize,placeholder:"请输入数据"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),n("div",{staticClass:"input__buttons"},[n("PressButton",{attrs:{size:"small","custom-style":"margin-left: 0; margin-right: 8px"},on:{click:t.onClearInput}},[t._v(" 清空 ")]),n("PressButton",{attrs:{type:"primary","custom-style":"margin: 0;",size:"small"},on:{click:t.onConfirmInput}},[t._v(" 确定 ")])],1)],1)])},o=[],i=n("41a6"),s=n("55c7"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PressSection",{attrs:{title:t.title,"header-style":t.headerStyle,type:"line"}},[n("div",{staticClass:"section-content",style:t.sectionStyle},[t._t("default")],2)])},c=[],u=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"press-section",class:[{"press-section--active":e.active},{"press-section--clickable":e.clickable}]},[r("div",{staticClass:"press-section-header",style:e.headerStyle,on:{click:e.onClick}},[e.type?r("div",{staticClass:"press-section-header__decoration",class:[e.type,(t={},t["press-section-header__decoration--active"]=e.active,t)]}):e._t("decoration"),r("div",{staticClass:"press-section-header__content"},[r("span",{staticClass:"press-section__content-title",class:{distraction:!e.subTitle},style:{"font-size":e.titleFontSize,color:e.titleColor}},[e._v(" "+e._s(e.title)+" ")]),e.subTitle?r("span",{staticClass:"press-section-header__content-sub",style:{"font-size":e.subTitleFontSize,color:e.subTitleColor}},[e._v(" "+e._s(e.subTitle)+" ")]):e._e()]),r("div",{staticClass:"press-section-header__slot-right"},[e._t("right")],2)],2),r("div",{staticClass:"press-section-content",style:{padding:e.innerPadding}},[e._t("default")],2)])},l=[],d={name:"PressSection",props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1},headerStyle:{type:String,default:""},active:{type:Boolean,default:!0},clickable:{type:Boolean,default:!1}},emits:["click"],computed:{innerPadding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},methods:{onClick:function(){this.$emit("click")}}},f=d,h=(n("9a48"),n("2777")),p=Object(h["a"])(f,u,l,!1,null,null,null),g=p.exports,m={name:"PressDemoBlock",options:{styleIsolation:"shared"},components:{PressSection:g},props:{title:{type:String,default:""},sectionStyle:{type:String,default:""},headerStyle:{type:String,default:""}}},y=m,w=(n("3173"),Object(h["a"])(y,a,c,!1,null,"00eaedc0",null)),b=w.exports,v={name:"PressDemoInput",i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:s["a"],PressButton:i["a"],PressDemoBlock:b},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:function(){return{maxHeight:600,minHeight:50}}}},data:function(){return{inputValue:this.value}},watch:{value:{handler:function(t){this.inputValue=t}}},mounted:function(){},methods:{onClearInput:function(){this.inputValue=""},onConfirmInput:function(){this.$emit("confirm",this.inputValue)}}},x=v,C=(n("3e47"),Object(h["a"])(x,r,o,!1,null,"14c76f9e",null));e["a"]=C.exports},fe09:function(t,e,n){const r=n("406f"),o=n("63e8");function i(t){this.mode=o.BYTE,"string"===typeof t&&(t=r(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i}}]);