(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-210c6c59"],{"137f":function(t,e,s){var i=s("ee2b");e=i(!1),e.push([t.i,".press-swipe-cell[data-v-6ed79627]{position:relative;overflow:hidden}.press-swipe-cell__left[data-v-6ed79627],.press-swipe-cell__right[data-v-6ed79627]{position:absolute;top:0;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:65px;font-size:15px;color:#fff}.press-swipe-cell__left[data-v-6ed79627]{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.press-swipe-cell__right[data-v-6ed79627]{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""]),t.exports=e},"158a":function(t,e,s){"use strict";s("ccba")},"20d9":function(t,e,s){var i=s("5147");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=s("c69b").default;n("31566078",i,!0,{sourceMap:!1,shadowMode:!1})},4158:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-wrap"},[s("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":"margin:0;"}},[s("press-swipe-cell",{attrs:{"right-width":65,"left-width":65,"async-close":t.asyncClose},on:{click:t.onClick,close:t.onClose,open:t.onOpen},scopedSlots:t._u([{key:"left",fn:function(){return[s("div",{staticClass:"left"},[t._v(" "+t._s(t.t("select"))+" ")])]},proxy:!0},{key:"right",fn:function(){return[s("div",{staticClass:"right"},[t._v(" "+t._s(t.t("delete"))+" ")])]},proxy:!0}])},[s("div",{staticClass:"content"},[t._v(" "+t._s(t.t("content"))+" ")])])],1),s("demo-block",{attrs:{title:t.t("beforeClose"),"section-style":"margin:0;"}},[s("press-swipe-cell",{attrs:{"right-width":65,"left-width":65,"async-close":!0},on:{click:t.onClick,close:t.onAsyncClose,open:t.onOpen},scopedSlots:t._u([{key:"left",fn:function(){return[s("div",{staticClass:"left"},[t._v(" "+t._s(t.t("select"))+" ")])]},proxy:!0},{key:"right",fn:function(){return[s("div",{staticClass:"right"},[t._v(" "+t._s(t.t("delete"))+" ")])]},proxy:!0}])},[s("div",{staticClass:"content"},[t._v(" "+t._s(t.t("content"))+" ")])])],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"press-swipe-cell",class:t.customClass,attrs:{"data-key":"cell"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onClick(e)},touchstart:t.startDrag,"!touchmove":function(e){return t.onDrag(e)},touchend:t.endDrag,touchcancel:t.endDrag}},[s("div",{class:["press-swipe-cell__content",t.offset?"press-swipe-cell__content--moved":""],style:t.wrapperStyle},[t.leftWidth?s("div",{staticClass:"press-swipe-cell__left",attrs:{"data-key":"left"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onClick(e)}}},[t._t("left")],2):t._e(),t._t("default"),t.rightWidth?s("div",{staticClass:"press-swipe-cell__right",attrs:{"data-key":"right"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onClick(e)}}},[t._t("right")],2):t._e()],2)])},a=[],c=s("69b0"),l=(s("2aaa"),s("0508"),s("cdf1"),s("226c"),s("948b"),s("f1f0"),s("414c"),s("79cc"),s("b304")),r=s("5cc7"),f=s("d4a6"),h=.3,d=[],u={name:"PressSwipeCell",options:Object(c["a"])({},l["b"]),mixins:[r["a"]],props:Object(c["a"])({disabled:{type:Boolean,default:!1},leftWidth:{type:Number,default:0},rightWidth:{type:Number,default:0},asyncClose:{type:Boolean,default:!1},name:{type:String,default:""}},l["c"]),emits:["click","open","close"],data:function(){return{catchMove:!1,wrapperStyle:"",offset:0}},watch:{leftWidth:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset>0&&this.swipeMove(t)}},rightWidth:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset<0&&this.swipeMove(-t)}}},created:function(){this.offset=0,d.push(this)},destroyed:function(){var t=this;d=d.filter((function(e){return e!==t}))},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(s){e[s]=t[s]}))},open:function(t){var e=this.leftWidth,s=this.rightWidth,i="left"===t?e:-s;this.swipeMove(i),this.$emit("open",{position:t,name:this.name})},close:function(){this.swipeMove(0)},swipeMove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=Object(f["a"])(t,-this.rightWidth,this.leftWidth);var e="translate3d(".concat(this.offset,"px, 0, 0)"),s=this.dragging?"none":"transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";this.setData({wrapperStyle:"\n        -webkit-transform: ".concat(e,";\n        -webkit-transition: ").concat(s,";\n        transform: ").concat(e,";\n        transition: ").concat(s,";\n      ")})},swipeLeaveTransition:function(){var t=this.leftWidth,e=this.rightWidth,s=this.offset;e>0&&-s>e*h?this.open("right"):t>0&&s>t*h?this.open("left"):this.swipeMove(0),this.setData({catchMove:!1})},startDrag:function(t){this.disabled||(this.startOffset=this.offset,this.touchStart(t))},noop:function(){},onDrag:function(t){var e=this;this.disabled||(this.touchMove(t),"horizontal"===this.direction&&(this.dragging=!0,d.filter((function(t){return t!==e&&0!==t.offset})).forEach((function(t){return t.close()})),this.setData({catchMove:!0}),this.swipeMove(this.startOffset+this.deltaX)))},endDrag:function(){this.disabled||(this.dragging=!1,this.swipeLeaveTransition())},onClick:function(t){var e=t.currentTarget.dataset.key,s=void 0===e?"outside":e;this.$emit("click",s),this.offset&&(this.asyncClose?this.$emit("close",{position:s,instance:this,name:this.name}):this.swipeMove(0))}}},p=u,v=(s("158a"),s("2777")),g=Object(v["a"])(p,o,a,!1,null,"6ed79627",null),w=g.exports,b=s("3261"),m=s("8312"),_={i18n:{"zh-CN":{select:"选择",delete:"删除",collect:"收藏",title:"单元格",confirm:"确定删除吗？",cardTitle:"商品标题",beforeClose:"异步关闭",customContent:"自定义内容"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}},components:{PressSwipeCell:w,PressDialogPlus:b["a"]},data:function(){return{asyncClose:!1}},methods:{onClick:function(t){console.log("onClick.val",t),this.onGTip("click ".concat(t))},onClose:function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];console.log("onClose.args",e),this.onGTip("close")},onOpen:function(t){console.log("onOpen.detail",t),this.onGTip("[open] position: ".concat(t.position))},onAsyncClose:function(t){console.log("onAsyncClose.detail",t);var e=t.position,s=t.instance;switch(e){case"left":case"cell":s.close();break;case"right":m["a"].confirm({context:this,title:"确定删除吗？"}).then((function(){console.log("1111"),s.close()})).catch((function(t){console.log("err",t)}));break}}}},k=_,y=(s("63c9"),Object(v["a"])(k,i,n,!1,null,"5115bffe",null));e["default"]=y.exports},5147:function(t,e,s){var i=s("ee2b");e=i(!1),e.push([t.i,".demo-wrap[data-v-5115bffe]  .press-swipe-cell__left,.demo-wrap[data-v-5115bffe]  .press-swipe-cell__right{background-color:#f44}.demo-wrap .content[data-v-5115bffe]{height:44px;line-height:44px;padding-left:20px;background:#f7f8fa}",""]),t.exports=e},"5cc7":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=10;function n(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var o={methods:{resetTouchStatus:function(){var t=this;t.direction="",t.deltaX=0,t.deltaY=0,t.offsetX=0,t.offsetY=0},touchStart:function(t){var e=this;e.resetTouchStatus();var s=t.touches[0];s&&(e.startX=s.clientX,e.startY=s.clientY)},touchMove:function(t){var e=t.touches[0],s=this;e&&(s.deltaX=e.clientX-s.startX,s.deltaY=e.clientY-s.startY,s.offsetX=Math.abs(s.deltaX),s.offsetY=Math.abs(s.deltaY),s.direction=s.direction||n(s.offsetX,s.offsetY))}}}},"63c9":function(t,e,s){"use strict";s("20d9")},ccba:function(t,e,s){var i=s("137f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=s("c69b").default;n("9688b784",i,!0,{sourceMap:!1,shadowMode:!1})},d4a6:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("4920"),s("e8e7"),s("1b08"),s("e6c9");function i(t,e,s){return Math.min(Math.max(t,e),s)}}}]);