(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c48ae9fe"],{"18c9":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle}},[n("press-count-down",{attrs:{time:t.time}})],1),n("demo-block",{attrs:{title:t.t("customFormat"),"section-style":t.sectionStyle}},[n("press-count-down",{attrs:{time:t.time,format:t.t("formatWithDay")}})],1),n("demo-block",{attrs:{title:t.t("millisecond"),"section-style":t.sectionStyle}},[n("press-count-down",{attrs:{time:t.time,millisecond:"",format:"HH:mm:ss:SSS"}})],1),n("demo-block",{attrs:{title:t.t("customStyle"),"section-style":t.sectionStyle}},[n("press-count-down",{attrs:{"use-slot":"",time:t.time},on:{change:t.onChange},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.timeData;return[n("span",{staticClass:"item"},[t._v(" "+t._s(o.hours)+" ")]),n("span",{staticClass:"item"},[t._v(" "+t._s(o.minutes)+" ")]),n("span",{staticClass:"item"},[t._v(" "+t._s(o.seconds)+" ")])]}}])})],1),n("demo-block",{attrs:{title:t.t("manualControl"),"section-style":t.sectionStyle}},[n("press-count-down",{ref:"controlCountDown",attrs:{id:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS"},on:{finish:t.finished}})],1),n("press-grid",{attrs:{clickable:"","column-num":3}},[n("press-grid-item",{attrs:{text:t.t("start"),icon:"play-circle-o"},on:{click:t.start}}),n("press-grid-item",{attrs:{text:t.t("pause"),icon:"pause-circle-o"},on:{click:t.pause}}),n("press-grid-item",{attrs:{text:t.t("reset"),icon:"replay"},on:{click:t.reset}})],1)],1)},i=[],r=n("3833"),a=n("e808"),s=n("0966"),c=n("5195"),u=n("b70d"),l={i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:r["a"],PressGrid:a["a"],PressGridItem:s["a"]},data:function(){return{time:108e6,sectionStyle:"margin: 0 12px 20px;"}},methods:{onChange:function(){},start:function(){var t=Object(c["a"])(this,"#controlCountDown");Object(u["a"])(t,null,"start")},pause:function(){var t=Object(c["a"])(this,"#controlCountDown");Object(u["a"])(t,null,"pause")},reset:function(){var t=Object(c["a"])(this,"#controlCountDown");Object(u["a"])(t,null,"reset")},finished:function(){}}},f=l,m=(n("79d0"),n("33b6")),d=Object(m["a"])(f,o,i,!1,null,"31c1e214",null);e["default"]=d.exports},3833:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-count-down"},[t.useSlot?t._t("default",[n("span",[t._v(" "+t._s(t.formattedTime)+" ")])],{timeData:t.timeData}):[t._v(" "+t._s(t.formattedTime)+" ")]],2)},i=[];n("a88c"),n("0c4e"),n("7215");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="".concat(t);while(n.length<e)n="0".concat(n);return n}var a=1e3,s=60*a,c=60*s,u=24*c;function l(t){var e=Math.floor(t/u),n=Math.floor(t%u/c),o=Math.floor(t%c/s),i=Math.floor(t%s/a),r=Math.floor(t%a);return{days:e,hours:n,minutes:o,seconds:i,milliseconds:r}}function f(t,e){var n=e.days,o=e.hours,i=e.minutes,a=e.seconds,s=e.milliseconds;return-1===t.indexOf("DD")?o+=24*n:t=t.replace("DD",r(n)),-1===t.indexOf("HH")?i+=60*o:t=t.replace("HH",r(o)),-1===t.indexOf("mm")?a+=60*i:t=t.replace("mm",r(i)),-1===t.indexOf("ss")?s+=1e3*a:t=t.replace("ss",r(a)),t.replace("SSS",r(s,3))}function m(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}function d(t){return setTimeout(t,30)}var h={name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:function(){return{formattedTime:"0",remain:0}},computed:{timeData:function(){var t=l(this.remain);return t}},watch:{time:{handler:function(t){var e=this.remain,n=this.millisecond;(n||Math.floor(t/1e3)!==Math.floor(e/1e3)&&Math.round(t/1e3)!==Math.round(e/1e3))&&this.reset()},immediate:!0}},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){clearTimeout(this.tid),this.tid=null},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.tid=d((function(){t.setRemain(t.getRemain()),0!==t.remain&&t.microTick()}))},macroTick:function(){var t=this;this.tid=d((function(){var e=t.getRemain();m(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.macroTick()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t;var e=l(t);this.useSlot&&this.$emit("change",e),this.formattedTime=f(this.format,e),0===t&&(this.pause(),this.$emit("finish"))}}},v=h,p=(n("9551"),n("33b6")),b=Object(p["a"])(v,o,i,!1,null,"b29c852a",null);e["a"]=b.exports},4107:function(t,e,n){var o=n("ee2b");e=o(!1),e.push([t.i,".press-count-down[data-v-b29c852a]{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}",""]),t.exports=e},5195:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var o=n("4455"),i=n("55cc"),r=(n("250c"),n("8999"),n("0c4e"),n("8c11"),n("4498"),n("af57")),a=n("b70d"),s="showDialog";function c(){var t=getCurrentPages();return t[t.length-1]}function u(t,e,n){var o=t.$children;if(o){var r,a=Object(i["a"])(o);try{for(a.s();!(r=a.n()).done;){var s=r.value;if(s.$attrs[e]===n)return s}}catch(d){a.e(d)}finally{a.f()}var c,l=Object(i["a"])(o);try{for(l.s();!(c=l.n()).done;){var f=c.value,m=u(f,e,n);if(m)return m}}catch(d){l.e(d)}finally{l.f()}}}function l(t,e){var n,o;if(e&&t){if("function"===typeof e)return e(t);var i=e;if(i.match(/^[^\w]/)&&(i=i.slice(1)),null!==(n=t.$refs)&&void 0!==n&&n[i])return t.$refs[i];if(Object(r["b"])()){var a=e.startsWith("#")?"id":"class",s=u(t,a,i);if(s)return s}if("function"===typeof(null===t||void 0===t?void 0:t.$selectComponent)){var c,l=null===t||void 0===t||null===(c=t.$selectComponent)||void 0===c?void 0:c.call(t,e);return l}return null===t||void 0===t||null===(o=t.selectComponent)||void 0===o?void 0:o.call(t,e)}}function f(t){return new Promise((function(e,n){var i=t.context||c(),r=t.dialog;r||(r=l(i,t.selector));var u=Object(o["a"])({callback:function(t,o){"confirm"===t?e(o):n(o)}},t);delete u.dialog,delete u.context;var f=t.showFunction||s;Object(a["a"])(r,u,f)}))}},"55cc":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("745f"),n("9135"),n("14c4"),n("3849"),n("8999"),n("45be"),n("15ea");var o=n("8364");function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(o["a"])(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}},"79d0":function(t,e,n){"use strict";n("8222")},8222:function(t,e,n){var o=n("dd5a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("c69b").default;i("3b844c66",o,!0,{sourceMap:!1,shadowMode:!1})},"8c85":function(t,e,n){var o=n("4107");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("c69b").default;i("b7090170",o,!0,{sourceMap:!1,shadowMode:!1})},9551:function(t,e,n){"use strict";n("8c85")},b70d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("e087");function o(t,e){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(t){var i=(null===(n=t.$vm)||void 0===n?void 0:n[o])||t[o];return"function"===typeof i?i(e):void 0}}},dd5a:function(t,e,n){var o=n("ee2b");e=o(!1),e.push([t.i,".item[data-v-31c1e214]{display:inline-block;width:22px;margin-right:5px;color:#fff;font-size:12px;text-align:center;background-color:#1989fa;border-radius:2px}",""]),t.exports=e}}]);