(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7271b9bc"],{"18c9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time}})],1),i("demo-block",{attrs:{title:t.t("customFormat"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time,format:t.t("formatWithDay")}})],1),i("demo-block",{attrs:{title:t.t("millisecond"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time,millisecond:"",format:"HH:mm:ss:SSS"}})],1),i("demo-block",{attrs:{title:t.t("customStyle"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{"use-slot":"",time:t.time},on:{change:t.onChange},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.timeData;return[i("span",{staticClass:"item"},[t._v(" "+t._s(a.hours)+" ")]),i("span",{staticClass:"item"},[t._v(" "+t._s(a.minutes)+" ")]),i("span",{staticClass:"item"},[t._v(" "+t._s(a.seconds)+" ")])]}}])})],1),i("demo-block",{attrs:{title:t.t("manualControl"),"section-style":t.sectionStyle}},[i("press-count-down",{ref:"controlCountDown",attrs:{id:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS"},on:{finish:t.finished}})],1),i("press-grid",{attrs:{clickable:"","column-num":3}},[i("press-grid-item",{attrs:{text:t.t("start"),icon:"play-circle-o"},on:{click:t.start}}),i("press-grid-item",{attrs:{text:t.t("pause"),icon:"pause-circle-o"},on:{click:t.pause}}),i("press-grid-item",{attrs:{text:t.t("reset"),icon:"replay"},on:{click:t.reset}})],1)],1)},n=[],o=i("9732"),r=i("1a85"),s=i("44f9"),l=i("3e40"),c=i("ef5a"),f={i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:o["a"],PressGrid:r["a"],PressGridItem:s["a"]},data:function(){return{time:108e6,sectionStyle:"margin: 0 12px 20px;"}},methods:{onChange:function(){},start:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"start")},pause:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"pause")},reset:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"reset")},finished:function(){}}},u=f,d=(i("2f46"),i("2777")),m=Object(d["a"])(u,a,n,!1,null,"2652d426",null);e["default"]=m.exports},"2f46":function(t,e,i){"use strict";i("8ffa")},"34f0":function(t,e,i){"use strict";i("923f")},"3e40":function(t,e,i){"use strict";i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return u}));var a=i("69b0"),n=i("c05a"),o=(i("4920"),i("414c"),i("e8e7"),i("1b08"),i("1699"),i("6738")),r=i("ef5a"),s="showDialog";function l(){var t=getCurrentPages();return t[t.length-1]}function c(t,e,i){var a=t.$children;if(a){var o,r=Object(n["a"])(a);try{for(r.s();!(o=r.n()).done;){var s=o.value;if(s.$attrs[e]===i)return s}}catch(m){r.e(m)}finally{r.f()}var l,f=Object(n["a"])(a);try{for(f.s();!(l=f.n()).done;){var u=l.value,d=c(u,e,i);if(d)return d}}catch(m){f.e(m)}finally{f.f()}}}function f(t,e){var i,a;if(e&&t){var n=e;if(n.match(/^[^\w]/)&&(n=n.slice(1)),null!==(i=t.$refs)&&void 0!==i&&i[n])return t.$refs[n];if(Object(o["b"])()){var r=e.startsWith("#")?"id":"class",s=c(t,r,n);if(s)return s}if("function"===typeof(null===t||void 0===t?void 0:t.$selectComponent)){var l,f=null===t||void 0===t||null===(l=t.$selectComponent)||void 0===l?void 0:l.call(t,e);return f}return null===t||void 0===t||null===(a=t.selectComponent)||void 0===a?void 0:a.call(t,e)}}function u(t){return new Promise((function(e,i){var n=t.context||l(),o=t.dialog;o||(o=f(n,t.selector));var c=Object(a["a"])({callback:function(t,a){"confirm"===t?e(a):i(a)}},t);delete c.dialog,delete c.context;var u=t.showFunction||s;Object(r["a"])(o,c,u)}))}},"63ce":function(t,e,i){var a=i("ee2b");e=a(!1),e.push([t.i,".item[data-v-2652d426]{display:inline-block;width:22px;margin-right:5px;color:#fff;font-size:12px;text-align:center;background-color:#1989fa;border-radius:2px}",""]),t.exports=e},"8ffa":function(t,e,i){var a=i("63ce");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("c69b").default;n("134e52d4",a,!0,{sourceMap:!1,shadowMode:!1})},"923f":function(t,e,i){var a=i("f58b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("c69b").default;n("0fbd8816",a,!0,{sourceMap:!1,shadowMode:!1})},9732:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"press-count-down"},[t.useSlot?t._t("default",[i("span",[t._v(" "+t._s(t.formattedTime)+" ")])],{timeData:t.timeData}):[t._v(" "+t._s(t.formattedTime)+" ")]],2)},n=[];i("948b"),i("e8e7"),i("e6c9");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i="".concat(t);while(i.length<e)i="0".concat(i);return i}var r=1e3,s=60*r,l=60*s,c=24*l;function f(t){var e=Math.floor(t/c),i=Math.floor(t%c/l),a=Math.floor(t%l/s),n=Math.floor(t%s/r),o=Math.floor(t%r);return{days:e,hours:i,minutes:a,seconds:n,milliseconds:o}}function u(t,e){var i=e.days,a=e.hours,n=e.minutes,r=e.seconds,s=e.milliseconds;return-1===t.indexOf("DD")?a+=24*i:t=t.replace("DD",o(i)),-1===t.indexOf("HH")?n+=60*a:t=t.replace("HH",o(a)),-1===t.indexOf("mm")?r+=60*n:t=t.replace("mm",o(n)),-1===t.indexOf("ss")?s+=1e3*r:t=t.replace("ss",o(r)),t.replace("SSS",o(s,3))}function d(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}function m(t){return setTimeout(t,30)}var h={name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:function(){return{formattedTime:"0",remain:0}},computed:{timeData:function(){var t=f(this.remain);return t}},watch:{time:{handler:function(t){var e=this.remain,i=this.millisecond;(i||Math.floor(t/1e3)!==Math.floor(e/1e3)&&Math.round(t/1e3)!==Math.round(e/1e3))&&this.reset()},immediate:!0}},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){clearTimeout(this.tid),this.tid=null},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.tid=m((function(){t.setRemain(t.getRemain()),0!==t.remain&&t.microTick()}))},macroTick:function(){var t=this;this.tid=m((function(){var e=t.getRemain();d(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.macroTick()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t;var e=f(t);this.useSlot&&this.$emit("change",e),this.formattedTime=u(this.format,e),0===t&&(this.pause(),this.$emit("finish"))}}},p=h,v=(i("34f0"),i("2777")),b=Object(v["a"])(p,a,n,!1,null,"a78fee2e",null);e["a"]=b.exports},ef5a:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));i("2aaa");function a(t,e){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(t){var n=(null===(i=t.$vm)||void 0===i?void 0:i[a])||t[a];return"function"===typeof n?n(e):void 0}}function n(t){for(var e=t.$vm||t,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];e.$set.apply(e,[e].concat(a))}},f58b:function(t,e,i){var a=i("ee2b");e=a(!1),e.push([t.i,'.press-ellipsis[data-v-a78fee2e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-a78fee2e]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-a78fee2e],.press-multi-ellipsis--l3[data-v-a78fee2e]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-a78fee2e]{-webkit-line-clamp:3}.press-clearfix[data-v-a78fee2e]:after{clear:both;content:"";display:table}.press-hairline[data-v-a78fee2e],.press-hairline--bottom[data-v-a78fee2e],.press-hairline--left[data-v-a78fee2e],.press-hairline--right[data-v-a78fee2e],.press-hairline--surround[data-v-a78fee2e],.press-hairline--top[data-v-a78fee2e],.press-hairline--top-bottom[data-v-a78fee2e]{position:relative}.press-hairline--bottom[data-v-a78fee2e]:after,.press-hairline--left[data-v-a78fee2e]:after,.press-hairline--right[data-v-a78fee2e]:after,.press-hairline--surround[data-v-a78fee2e]:after,.press-hairline--top-bottom[data-v-a78fee2e]:after,.press-hairline--top[data-v-a78fee2e]:after,.press-hairline[data-v-a78fee2e]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-a78fee2e]:after{border-top-width:1px}.press-hairline--left[data-v-a78fee2e]:after{border-left-width:1px}.press-hairline--right[data-v-a78fee2e]:after{border-right-width:1px}.press-hairline--bottom[data-v-a78fee2e]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-a78fee2e]:after{border-width:1px 0}.press-hairline--surround[data-v-a78fee2e]:after{border-width:1px}.press-count-down[data-v-a78fee2e]{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}',""]),t.exports=e}}]);