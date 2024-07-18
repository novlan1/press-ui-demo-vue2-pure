(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c51df0b4"],{"1a45":function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const s=new RegExp("^"+o+"$"),a=new RegExp("^"+n+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return s.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return u.test(t)}},"214b":function(t,e,n){const r=n("63e8"),o=n("5013");function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},"32f0":function(t,e,n){const r=n("804e"),o=n("cbcc"),i=n("5f0f"),s=n("866b");function a(t,e,n,i,s){const a=[].slice.call(arguments,1),u=a.length,c="function"===typeof a[u-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(u<1)throw new Error("Too few arguments provided");return 1===u?(n=e,e=i=void 0):2!==u||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,s){try{const s=o.create(n,i);r(t(s,e,i))}catch(a){s(a)}}))}if(u<2)throw new Error("Too few arguments provided");2===u?(s=n,n=e,e=i=void 0):3===u&&(e.getContext&&"undefined"===typeof s?(s=i,i=void 0):(s=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);s(null,t(r,e,i))}catch(l){s(l)}}e.create=o.create,e.toCanvas=a.bind(null,i.render),e.toDataURL=a.bind(null,i.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return s.render(t,n)}))},"3b20":function(t,e,n){"use strict";var r={single_source_shortest_paths:function(t,e,n){var o={},i={};i[e]=0;var s,a,u,c,l,f,d,h,g,p=r.PriorityQueue.make();p.push(e,0);while(!p.empty())for(u in s=p.pop(),a=s.value,c=s.cost,l=t[a]||{},l)l.hasOwnProperty(u)&&(f=l[u],d=c+f,h=i[u],g="undefined"===typeof i[u],(g||h>d)&&(i[u]=d,p.push(u,d),o[u]=a));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var m=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var o=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},"406f":function(t,e,n){"use strict";t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},4291:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},5013:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},"54da":function(t,e){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n},"5ab2":function(t,e,n){const r=n("ce6f");function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},"5f0f":function(t,e,n){const r=n("6eec");function o(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let s=n,a=e;"undefined"!==typeof s||e&&e.getContext||(s=e,e=void 0),e||(a=i()),s=r.getOptions(s);const u=r.getImageWidth(t.modules.size,s),c=a.getContext("2d"),l=c.createImageData(u,u);return r.qrToImageData(l.data,t,s),o(c,a,u),c.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,r){let o=r;"undefined"!==typeof o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}},"63e8":function(t,e,n){const r=n("c611"),o=n("1a45");function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(r){return n}}},"6eec":function(t,e){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,s=e.getScale(o,r),a=Math.floor((o+2*r.margin)*s),u=r.margin*s,c=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),f=r.color.light;if(e>=u&&n>=u&&e<a-u&&n<a-u){const t=Math.floor((e-u)/s),r=Math.floor((n-u)/s);f=c[i[t*o+r]?1:0]}t[l++]=f.r,t[l++]=f.g,t[l++]=f.b,t[l]=f.a}}},"718c":function(t,e,n){var r=n("cd09");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("c69b").default;o("3917964c",r,!0,{sourceMap:!1,shadowMode:!1})},"746c":function(t,e,n){const r=n("4291"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},"800e":function(t,e,n){const r=n("63e8"),o=n("b5b8"),i=n("b90b"),s=n("fe09"),a=n("214b"),u=n("1a45"),c=n("5013"),l=n("3b20");function f(t){return unescape(encodeURIComponent(t)).length}function d(t,e,n){const r=[];let o;while(null!==(o=t.exec(n)))r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function h(t){const e=d(u.NUMERIC,r.NUMERIC,t),n=d(u.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;c.isKanjiModeEnabled()?(o=d(u.BYTE,r.BYTE,t),i=d(u.KANJI,r.KANJI,t)):(o=d(u.BYTE_KANJI,r.BYTE,t),i=[]);const s=e.concat(n,o,i);return s.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return s.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:f(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:f(o.data)}])}}return e}function w(t,e){const n={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],u=[];for(let t=0;t<a.length;t++){const c=a[t],l=""+s+t;u.push(l),n[l]={node:c,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const s=i[t];n[s]&&n[s].node.mode===c.mode?(o[s][l]=g(n[s].lastCount+c.length,c.mode)-g(n[s].lastCount,c.mode),n[s].lastCount+=c.length):(n[s]&&(n[s].lastCount=c.length),o[s][l]=g(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,e))}}i=u}for(let r=0;r<i.length;r++)o[i[r]].end=0;return{map:o,table:n}}function y(t,e){let n;const u=r.getBestModeForData(t);if(n=r.from(e,u),n!==r.BYTE&&n.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(u));switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new a(t);case r.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(y(e,null)):e.data&&t.push(y(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=h(t,c.isKanjiModeEnabled()),o=m(r),i=w(o,n),s=l.find_path(i.map,"start","end"),a=[];for(let e=1;e<s.length-1;e++)a.push(i.table[s[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(h(t,c.isKanjiModeEnabled()))}},"804e":function(t,e){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},"854c":function(t,e,n){const r=n("5013"),o=1335,i=21522,s=r.getBCHDigit(o);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let a=n<<10;while(r.getBCHDigit(a)-s>=0)a^=o<<r.getBCHDigit(a)-s;return(n<<10|a)^i}},"866b":function(t,e,n){const r=n("6eec");function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function s(t,e,n){let r="",o=0,s=!1,a=0;for(let u=0;u<t.length;u++){const c=Math.floor(u%e),l=Math.floor(u/e);c||s||(s=!0),t[u]?(a++,u>0&&c>0&&t[u-1]||(r+=s?i("M",c+n,.5+l+n):i("m",o,0),o=0,s=!1),c+1<e&&t[u+1]||(r+=i("h",a),a=0)):o++}return r}e.render=function(t,e,n){const i=r.getOptions(e),a=t.modules.size,u=t.modules.data,c=a+2*i.margin,l=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+o(i.color.dark,"stroke")+' d="'+s(u,a,i.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',h=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+h+d+' shape-rendering="crispEdges">'+l+f+"</svg>\n";return"function"===typeof n&&n(null,g),g}},"86ce":function(t,e,n){const r=n("5013"),o=n("746c"),i=n("4291"),s=n("63e8"),a=n("c611"),u=7973,c=r.getBCHDigit(u);function l(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}function f(t,e){return s.getCharCountIndicator(t,e)+4}function d(t,e){let n=0;return t.forEach((function(t){const r=f(t.mode,e);n+=r+t.getBitsLength()})),n}function h(t,n){for(let r=1;r<=40;r++){const o=d(t,r);if(o<=e.getCapacity(r,n,s.MIXED))return r}}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=s.BYTE);const i=r.getSymbolTotalCodewords(t),u=o.getTotalCodewordsCount(t,e),c=8*(i-u);if(n===s.MIXED)return c;const l=c-f(n,t);switch(n){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const r=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return h(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-c>=0)e^=u<<r.getBCHDigit(e)-c;return t<<12|e}},a478:function(t,e,n){"use strict";n("718c")},b5b8:function(t,e,n){const r=n("63e8");function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},b5c7:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},b90b:function(t,e,n){const r=n("63e8"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},bd3b:function(t,e,n){const r=n("5013").getSymbolSize,o=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-o,0],[0,e-o]]}},c611:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},c993:function(t,e,n){const r=n("5013").getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let r=1;r<e-1;r++)i[r]=i[r-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||n.push([r[e],r[t]]);return n}},cbcc:function(t,e,n){const r=n("5013"),o=n("4291"),i=n("54da"),s=n("dac4"),a=n("c993"),u=n("bd3b"),c=n("f2ed"),l=n("746c"),f=n("5ab2"),d=n("86ce"),h=n("854c"),g=n("63e8"),p=n("800e");function m(t,e){const n=t.size,r=u.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}function w(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function y(t,e){const n=a.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}function b(t,e){const n=t.size,r=d.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=1===(r>>a&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}function E(t,e,n){const r=t.size,o=h.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1===(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function v(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2){6===a&&a--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1===(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}}function C(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));const s=r.getSymbolTotalCodewords(t),a=l.getTotalCodewordsCount(t,e),u=8*(s-a);o.getLengthInBits()+4<=u&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);const c=(u-o.getLengthInBits())/8;for(let r=0;r<c;r++)o.put(r%2?17:236,8);return I(o,t,e)}function I(t,e,n){const o=r.getSymbolTotalCodewords(e),i=l.getTotalCodewordsCount(e,n),s=o-i,a=l.getBlocksCount(e,n),u=o%a,c=a-u,d=Math.floor(o/a),h=Math.floor(s/a),g=h+1,p=d-h,m=new f(p);let w=0;const y=new Array(a),b=new Array(a);let E=0;const v=new Uint8Array(t.buffer);for(let r=0;r<a;r++){const t=r<c?h:g;y[r]=v.slice(w,w+t),b[r]=m.encode(y[r]),w+=t,E=Math.max(E,t)}const C=new Uint8Array(o);let I,A,N=0;for(I=0;I<E;I++)for(A=0;A<a;A++)I<y[A].length&&(C[N++]=y[A][I]);for(I=0;I<p;I++)for(A=0;A<a;A++)C[N++]=b[A][I];return C}function A(t,e,n,o){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=p.rawSplit(t);r=d.getBestVersionForData(e,n)}i=p.fromString(t,r||40)}}const a=d.getBestVersionForData(i,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;const u=C(e,n,i),l=r.getSymbolSize(e),f=new s(l);return m(f,e),w(f),y(f,e),E(f,n,0),e>=7&&b(f,e),v(f,u),isNaN(o)&&(o=c.getBestMask(f,E.bind(null,f,n))),c.applyMask(o,f),E(f,n,o),{modules:f,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,s=o.M;return"undefined"!==typeof e&&(s=o.from(e.errorCorrectionLevel,o.M),n=d.from(e.version),i=c.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),A(t,n,s,i)}},cd09:function(t,e,n){var r=n("ee2b");e=r(!1),e.push([t.i,".press-q-r-code[data-v-0f1ee5ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;margin:0 auto}",""]),t.exports=e},ce27:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-q-r-code"},[t.value?n("PressQRCodeWeb",{attrs:{value:t.value}}):t._e(),t.codeImg?t._e():void 0,t.codeImg?n("img",{style:t.style,attrs:{src:t.codeImg,"show-menu-by-longpress":!0},on:{longpress:t.onLongPressImage}}):t._e()],2)},o=[];n("2aaa"),n("948b"),n("e8e7");var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a,u=n("32f0"),c=n.n(u),l=["low","medium","quartile","high","L","M","Q","H"],f=[0,1,2,3,4,5,6,7],d=["alphanumeric","numeric","kanji","byte"],h=["image/png","image/jpeg","image/webp"],g=40,p={props:{version:{type:Number,validator:function(t){return t===Number.parseInt(String(t),10)&&t>=1&&t<=g}},errorCorrectionLevel:{type:String,validator:function(t){return l.includes(t)}},maskPattern:{type:Number,validator:function(t){return f.includes(t)}},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:function(t){return["dark","light"].every((function(e){return["string","undefined"].includes(typeof t[e])}))}},type:{type:String,validator:function(t){return h.includes(t)}},quality:{type:Number,validator:function(t){return t===Number.parseFloat(String(t))&&t>=0&&t<=1}},value:{type:[String,Array],required:!0,validator:function(t){return"string"===typeof t||t.every((function(t){var e=t.data,n=t.mode;return"string"===typeof e&&(null==n||d.includes(n))}))}}},data:function(){return{dataUrl:""}},watch:{$props:{deep:!0,immediate:!0,handler:"toDataURL"}},methods:{toDataURL:function(){var t=this,e=this.$props,n=e.quality,r=s(e,["quality"]);return c.a.toDataURL(this.value,Object.assign(r,null==n||{renderOptions:{quality:n}})).then((function(e){return t.dataUrl=e}))}},render:function(){return this.$createElement("img",{domProps:i(i({},this.$attrs),{src:this.dataUrl})})}};a=p;var m=a,w={name:"PressQRCode",components:{PressQRCodeWeb:m},props:{value:{type:String,default:"",required:!0},size:{type:Number,default:287,required:!1},margin:{type:Number,default:0}},emits:["result"],data:function(){return{codeImg:"",wxCanvasId:"pressWxQRcode",canvasId:"pressQRcode"}},computed:{style:function(){return"width: ".concat(this.size,"px; height: ").concat(this.size,"px;")}},watch:{value:{handler:function(){var t=this;this.codeImg="",setTimeout((function(){t.genQRCode()}))}}},mounted:function(){this.genQRCode()},methods:{genQRCode:function(){},codeMpWx:function(){var t=this,e=this.createSelectorQuery();e.select("#".concat(this.wxCanvasId)).fields({node:!0,size:!0}).exec((function(e){var n=e[0].node;drawWxQRcode({canvas:n,canvasId:t.wxCanvasId,width:t.size,background:"#ffffff",foreground:"#000000",text:t.value}),wx.canvasToTempFilePath({canvasId:t.wxCanvasId,canvas:n,x:0,y:0,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(e){console.log("[二维码临时路径]",e.tempFilePath),t.codeImg=e.tempFilePath,t.$emit("result",t.codeImg)},fail:function(t){console.error(t)}})}))},codeMpQQ:function(){var t=this,e=new UQRCode;e.data=this.value,e.size=this.size,e.margin=Math.round(this.size/20),e.make();var n=uni.createCanvasContext(this.canvasId,this);e.canvasContext=n,e.drawCanvas(),setTimeout((function(){uni.canvasToTempFilePath({canvasId:t.canvasId,fileType:"png",width:t.size,height:t.size,success:function(e){console.log("[codeMpQQ]",e),t.codeImg=e.tempFilePath,t.$emit("result",t.codeImg)},fail:function(t){console.log(t)}},t)}),300)},onLongPressImage:function(){this.$emit("longPressImage",this.codeImg)}}},y=w,b=(n("a478"),n("2777")),E=Object(b["a"])(y,r,o,!1,null,"0f1ee5ca",null);e["a"]=E.exports},ce6f:function(t,e,n){const r=n("b5c7");e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;while(o<n.length&&0===n[o])o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},dac4:function(t,e){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=n},f2ed:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,s=null,a=null;for(let u=0;u<e;u++){o=i=0,s=a=null;for(let c=0;c<e;c++){let e=t.get(u,c);e===s?o++:(o>=5&&(r+=n.N1+(o-5)),s=e,o=1),e=t.get(c,u),e===a?i++:(i>=5&&(r+=n.N1+(i-5)),a=e,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let s=0;s<e;s++)o=o<<1&2047|t.get(n,s),s>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(s,n),s>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const o=Math.abs(Math.ceil(100*e/r/5)-10);return o*n.N4},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),e.applyMask(s,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),r<i&&(i=r,o=s)}return o}},fe09:function(t,e,n){const r=n("406f"),o=n("63e8");function i(t){this.mode=o.BYTE,"string"===typeof t&&(t=r(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i}}]);