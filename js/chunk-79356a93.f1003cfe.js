(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79356a93"],{"0d72":function(i,t,a){var e=a("92a0");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var s=a("c69b").default;s("07ba3396",e,!0,{sourceMap:!1,shadowMode:!1})},"7f7f":function(i,t,a){"use strict";a.r(t);var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("div",{staticClass:"swiper-wrap"},[a("swiper",{staticClass:"swiper",attrs:{circular:"","indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[a("swiper-item",[a("div",{staticClass:"swiper-item swiper-item--big-red"},[i._v(" A ")])]),a("swiper-item",[a("div",{staticClass:"swiper-item swiper-item--big-green"},[i._v(" B ")])]),a("swiper-item",[a("div",{staticClass:"swiper-item swiper-item--big-blue"},[i._v(" C ")])])],1)],1),a("div",{staticClass:"swiper-list"},[a("div",{staticClass:"swiper-list-cell swiper-list-cell--pd"},[a("div",{staticClass:"uni-list-cell-db"},[i._v(" 指示点 ")]),a("PressSwitch",{attrs:{checked:i.indicatorDots,size:"20px"},on:{change:i.changeIndicatorDots}})],1),a("div",{staticClass:"swiper-list-cell swiper-list-cell--pd"},[a("div",{staticClass:"uni-list-cell-db"},[i._v(" 自动播放 ")]),a("PressSwitch",{attrs:{checked:i.autoplay,size:"20px"},on:{change:i.changeAutoplay}})],1)]),a("div",{staticClass:"slider-wrap"},[a("div",{staticClass:"slider-item"},[a("span",[i._v("幻灯片切换时长(ms)")]),a("span",{staticClass:"info"},[i._v(" "+i._s(i.duration)+" ")])]),a("PressSlider",{attrs:{value:i.duration,min:500,max:2e3},on:{change:i.durationChange}}),a("div",{staticClass:"slider-item"},[a("span",[i._v("自动播放间隔时长(ms)")]),a("span",{staticClass:"info"},[i._v(" "+i._s(i.interval)+" ")])]),a("PressSlider",{attrs:{value:i.interval,min:2e3,max:1e4},on:{change:i.intervalChange}})],1)])},s=[],r=a("7fe6"),l=a("9dd4"),o=a("4f9b"),n=a("0beb"),d={components:{Swiper:r["a"],SwiperItem:l["a"],PressSwitch:o["a"],PressSlider:n["a"]},data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(){this.autoplay=!this.autoplay},intervalChange:function(i){console.log("e",i),this.interval=i},durationChange:function(i){console.log("e",i),this.duration=i}}},p=d,c=(a("f88a"),a("2777")),w=Object(c["a"])(p,e,s,!1,null,"504d92a8",null);t["default"]=w.exports},"92a0":function(i,t,a){var e=a("ee2b");t=e(!1),t.push([i.i,".demo-wrap[data-v-504d92a8]{font-size:14px}.swiper-wrap[data-v-504d92a8]{width:345px;width:100%}.swiper-wrap .swiper[data-v-504d92a8]{height:150px}.swiper-wrap .swiper-item[data-v-504d92a8]{display:block;height:150px;line-height:150px;text-align:center}.swiper-wrap .swiper-item--big-blue[data-v-504d92a8]{background:#007aff;color:#fff}.swiper-wrap .swiper-item--big-green[data-v-504d92a8]{background:#09bb07;color:#fff}.swiper-wrap .swiper-item--big-red[data-v-504d92a8]{background:#f76260;color:#fff}.swiper-list[data-v-504d92a8]{margin-top:20px;margin-bottom:0}.swiper-list .swiper-list-cell[data-v-504d92a8]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swiper-list .swiper-list-cell--pd[data-v-504d92a8]{padding:11px 15px}.slider-wrap[data-v-504d92a8]{padding:0 50px}.slider-wrap .slider-item[data-v-504d92a8]{margin-top:30px;margin-bottom:20px;position:relative}.slider-wrap .slider-item .info[data-v-504d92a8]{position:absolute;right:10px}",""]),i.exports=t},f88a:function(i,t,a){"use strict";a("0d72")}}]);