(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d81df54"],{"017a":function(e,t,n){"use strict";n("ed22")},"0fd8":function(e,t,n){"use strict";var r=n("64a0"),i=n("5d34"),a=n("84d3");r({target:"String",proto:!0,forced:a("bold")},{bold:function(){return i(this,"b","","")}})},"11aa":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"press-text",class:[],style:{margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"},on:{click:function(t){return t.stopPropagation(),e.clickHandler(t)}}},["price"===e.mode?n("span",{class:["press-text__price",e.type&&"press-text__value--"+e.type],style:e.valueStyle},[e._v(" ￥ ")]):e._e(),e.prefixIcon?n("div",{staticClass:"press-text__prefix-icon"},[n("PressIconPlus",{attrs:{name:e.prefixIcon,"custom-style":e.parsedIconStyle}})],1):e._e(),"link"===e.mode?n("PressLink",{attrs:{text:e.value,href:e.href,underline:""}}):e.openType&&e.isMp?[n("button",{class:["press-reset-button","press-text__value",e.type&&"press-text__value--"+e.type],style:e.valueStyle,attrs:{"data-index":e.index,openType:e.openType,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},on:{getuserinfo:e.onGetUserInfo,contact:e.onContact,getphonenumber:e.onGetPhoneNumber,error:e.onError,launchapp:e.onLaunchApp,opensetting:e.onOpenSetting}},[e._v(" "+e._s(e.value)+" ")])]:n("span",{staticClass:"press-text__value",class:[e.type&&"press-text__value--"+e.type,e.lines&&"press-line-"+e.lines],style:e.valueStyle},[e._v(" "+e._s(e.value)+" ")]),e.suffixIcon?n("div",{staticClass:"press-text__suffix-icon"},[n("PressIconPlus",{attrs:{name:e.suffixIcon,"custom-style":e.parsedIconStyle}})],1):e._e()],2):e._e()},i=[],a=(n("0fd8"),n("948b"),{props:{customStyle:{type:String,default:""},type:{type:String,default:""},show:{type:Boolean,default:!0},text:{type:[String,Number],default:""},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},mode:{type:String,default:""},href:{type:String,default:""},format:{type:[String,Function],default:""},call:{type:Boolean,default:!1},openType:{type:String,default:""},bold:{type:Boolean,default:!1},block:{type:Boolean,default:!1},lines:{type:[String,Number],default:""},color:{type:String,default:"#303133"},size:{type:[String,Number],default:15},iconStyle:{type:[Object,String],default:""},decoration:{type:String,default:"none"},margin:{type:[Object,String,Number],default:0},lineHeight:{type:[String,Number],default:""},align:{type:String,default:"left"},wordWrap:{type:String,default:"normal"}}}),o=(n("2aaa"),n("e8e7"),n("745e"),n("fbf6")),s=n("fa57"),l=(n("06dc"),n("e6c9"),n("44b1")),c=n("6325"),d=n("c3b1"),u=n("fb67");function f(e){return Object(l["a"])(e)||Object(c["a"])(e)||Object(d["a"])(e)||Object(u["a"])()}n("4920"),n("4f39"),n("f519"),n("414c"),n("6905"),n("820b"),n("79cc");var p=!0;function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(e).toPrecision(t))}function h(e){var t=e.toString().split(/[eE]/),n=(t[0].split(".")[1]||"").length-+(t[1]||0);return n>0?n:0}function v(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=h(e);return t>0?b(Number(e)*Math.pow(10,t)):Number(e)}function g(e){p&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn("".concat(e," 超出了精度限制，结果可能不正确"))}function x(e,t){var n=f(e),r=n[0],i=n[1],a=n.slice(2),o=t(r,i);return a.forEach((function(e){o=t(o,e)})),o}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length>2)return x(t,m);var r=t[0],i=t[1],a=v(r),o=v(i),s=h(r)+h(i),l=a*o;return g(l),l/Math.pow(10,s)}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length>2)return x(t,y);var r=t[0],i=t[1],a=v(r),o=v(i);return g(a),g(o),m(a/o,b(Math.pow(10,h(i)-h(r))))}function w(e,t){var n=Math.pow(10,t),r=y(Math.round(Math.abs(m(e,n))),n);return e<0&&0!==r&&(r=m(r,-1)),r}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";e="".concat(e).replace(/[^0-9+-Ee.]/g,"");var i=isFinite(+e)?+e:0,a=isFinite(+t)?Math.abs(t):0,o="undefined"===typeof r?",":r,s="undefined"===typeof n?".":n,l="";l="".concat(a?w(i,a):Math.round(i)).split(".");var c=/(-?\d+)(\d{3})/;while(c.test(l[0]))l[0]=l[0].replace(c,"$1".concat(o,"$2"));return(l[1]||"").length<a&&(l[1]=l[1]||"",l[1]+=new Array(a-l[1].length+1).join("0")),l.join(s)}var k={computed:{value:function(){var e=this.text,t=this.mode,n=this.format,r=this.href;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||Object(o["c"])("金额模式下，text参数需要为金额格式"),"function"===typeof n?n(e):_(e,2)):"date"===t?"function"===typeof n?n(e):n?Object(s["a"])(e,n):Object(s["a"])(e,"yyyy-MM-dd"):"phone"===t?"function"===typeof n?n(e):"encrypt"===n?"".concat(e.substr(0,3),"****").concat(e.substr(7)):e:"name"===t?("string"!==typeof e&&Object(o["c"])("姓名模式下，text参数需要为字符串格式"),"function"===typeof n?n(e):"encrypt"===n?this.formatName(e):e):"link"===t?(!Object(o["l"])(r)&&Object(o["c"])("超链接模式下，href参数需要为URL格式"),e):e}},methods:{formatName:function(e){var t="";if(2===e.length)t="".concat(e.substr(0,1),"*");else if(e.length>2){for(var n="",r=0,i=e.length-2;r<i;r++)n+="*";t=e.substr(0,1)+n+e.substr(-1,1)}else t=e;return t}}},S=(Boolean,n("b954")),M=n("feb9"),N=n("ee26"),j=n("d256"),O=[];O=[k,a];var E={name:"PressText",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:N["a"],PressLink:j["a"]},mixins:O,emits:["click"],data:function(){return{}},computed:{valueStyle:function(){var e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:Object(S["a"])(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=Object(S["a"])(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),Object(M["b"])([e,this.customStyle])},parsedIconStyle:function(){var e={fontSize:"15px",display:"flex",alignItems:"center"};return Object(M["b"])([e,this.iconStyle])},isNvue:function(){var e=!1;return e},isMp:function(){var e=!1;return e}},methods:{styleUtil:M["b"],clickHandler:function(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}},I=E,P=(n("c868"),n("2777")),C=Object(P["a"])(I,r,i,!1,null,"598d1dc4",null);t["a"]=C.exports},"2b6b":function(e,t,n){var r=n("ea51");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("c69b").default;i("f6bcf14a",r,!0,{sourceMap:!1,shadowMode:!1})},"4f39":function(e,t,n){"use strict";var r=n("64a0");r({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},"50f8":function(e,t,n){var r=n("ee2b");t=r(!1),t.push([e.i,".press-link[data-v-df42f418]{line-height:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex:1;flex:1}",""]),e.exports=t},"5d34":function(e,t,n){"use strict";var r=n("b15a"),i=n("ed5c"),a=n("88f1"),o=/"/g,s=r("".replace);e.exports=function(e,t,n,r){var l=a(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+s(a(r),o,"&quot;")+'"'),c+">"+l+"</"+t+">"}},"820b":function(e,t,n){"use strict";var r=n("8284"),i=n("b15a"),a=n("27c0"),o=n("b763"),s=n("1a06"),l=n("ed5c"),c=n("9ce3"),d=n("fdd9"),u=n("cc03"),f=n("88f1"),p=n("5e2a"),b=n("699d"),h=n("6610"),v=n("5b46"),g=h.UNSUPPORTED_Y,x=4294967295,m=Math.min,y=i([].push),w=i("".slice),_=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),k="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;a("split",(function(e,t,n){var i="0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t;return[function(t,n){var a=l(this),o=s(t)?void 0:p(t,e);return o?r(o,t,a,n):r(i,f(a),t,n)},function(e,r){var a=o(this),s=f(e);if(!k){var l=n(i,a,s,r,i!==t);if(l.done)return l.value}var p=c(a,RegExp),h=a.unicode,v=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),_=new p(g?"^(?:"+a.source+")":a,v),S=void 0===r?x:r>>>0;if(0===S)return[];if(0===s.length)return null===b(_,s)?[s]:[];var M=0,N=0,j=[];while(N<s.length){_.lastIndex=g?0:N;var O,E=b(_,g?w(s,N):s);if(null===E||(O=m(u(_.lastIndex+(g?N:0)),s.length))===M)N=d(s,N,h);else{if(y(j,w(s,M,N)),j.length===S)return j;for(var I=1;I<=E.length-1;I++)if(y(j,E[I]),j.length===S)return j;N=M=O}}return y(j,w(s,M)),j}]}),k||!_,g)},"84d3":function(e,t,n){"use strict";var r=n("5b46");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c868:function(e,t,n){"use strict";n("2b6b")},d256:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"press-link",style:e.linkStyle,on:{click:function(t){return t.stopPropagation(),e.openLink(t)}}},[e._v(" "+e._s(e.text)+" ")])},i=[],a=(n("948b"),{props:{customStyle:{type:String,default:""},color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:15},underline:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""},text:{type:String,default:""}}}),o=n("b954"),s=n("feb9"),l={name:"PressLink",mixins:[a],emits:["click"],computed:{linkStyle:function(){var e={color:this.color,fontSize:Object(o["a"])(this.fontSize),lineHeight:Object(o["a"])(Object(o["b"])(this.fontSize)+2),textDecoration:this.underline?"underline":"none"};return Object(s["b"])([e,this.customStyle])}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}},c=l,d=(n("017a"),n("2777")),u=Object(d["a"])(c,r,i,!1,null,"df42f418",null);t["a"]=u.exports},ea51:function(e,t,n){var r=n("ee2b");t=r(!1),t.push([e.i,".press-reset-button[data-v-598d1dc4]{padding:0;margin:0;background-color:transparent;font-size:inherit;line-height:inherit;color:inherit;border-width:0}.press-reset-button[data-v-598d1dc4]:after{border:none}.press-line-1[data-v-598d1dc4]{lines:1;-webkit-line-clamp:1}.press-line-1[data-v-598d1dc4],.press-line-2[data-v-598d1dc4]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical!important}.press-line-2[data-v-598d1dc4]{lines:2;-webkit-line-clamp:2}.press-line-3[data-v-598d1dc4]{lines:3;-webkit-line-clamp:3}.press-line-3[data-v-598d1dc4],.press-line-4[data-v-598d1dc4]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical!important}.press-line-4[data-v-598d1dc4]{lines:4;-webkit-line-clamp:4}.press-line-5[data-v-598d1dc4]{lines:5;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.press-text[data-v-598d1dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.press-text__price[data-v-598d1dc4],.press-text__value[data-v-598d1dc4]{font-size:14px;color:#606266}.press-text__value[data-v-598d1dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;text-overflow:ellipsis;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-text__value--primary[data-v-598d1dc4]{color:#3c9cff}.press-text__value--warning[data-v-598d1dc4]{color:#f9ae3d}.press-text__value--success[data-v-598d1dc4]{color:#5ac725}.press-text__value--info[data-v-598d1dc4]{color:#909399}.press-text__value--error[data-v-598d1dc4]{color:#f56c6c}.press-text__value--main[data-v-598d1dc4]{color:#151719}.press-text__value--content[data-v-598d1dc4]{color:#606266}.press-text__value--tips[data-v-598d1dc4]{color:#909193}.press-text__value--light[data-v-598d1dc4]{color:#c0c4cc}",""]),e.exports=t},ed22:function(e,t,n){var r=n("50f8");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("c69b").default;i("6abc9e8f",r,!0,{sourceMap:!1,shadowMode:!1})},f519:function(e,t,n){"use strict";var r=n("64a0");r({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991})},fa57:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("2aaa"),n("4920"),n("291e"),n("5654"),n("e8e7"),n("5fb0"),n("6905"),n("1b08"),n("e6c9");function r(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e)return n||"";var a=new Date;10==="".concat(e).length&&(e*=1e3),a.setTime(e);var o={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()},s=/(y+)/;i&&(s=new RegExp("(?:^|(?:[^".concat(i,"y]))(y+)")));var l=t.match(s);for(var c in null!==(r=l)&&void 0!==r&&r[1]&&(t=t.replace(l[1],"".concat(a.getFullYear()).slice(4-l[1].length))),o){var d,u=new RegExp("(".concat(c,")"));if(i&&(u=new RegExp("(?:^|(?:[^".concat(i).concat(c[0],"]))(").concat(c,")"))),l=t.match(u),null!==(d=l)&&void 0!==d&&d[1]){var f=l,p=f.index,b=void 0===p?0:p,h=i?b+l[0].length-l[1].length:b,v="".concat(o[c]),g=l[1].length,x=1===g?v:"00".concat(v).slice("".concat(v).length);t=t.slice(0,h)+x+t.slice(h+g)}}return i&&(t=t.replace(new RegExp(i,"g"),"")),t}}}]);