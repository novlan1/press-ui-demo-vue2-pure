(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cc2a8fd"],{"21bd":function(t,e,i){"use strict";i.d(e,"a",(function(){return S}));var s=i("69b0"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-scroll-view",t._g({},t.$listeners),[i("div",{ref:"wrap",staticClass:"uni-scroll-view"},[i("div",{ref:"main",staticClass:"uni-scroll-view",style:{"overflow-x":t.scrollX?"auto":"hidden","overflow-y":t.scrollY?"auto":"hidden"}},[i("div",{ref:"content",staticClass:"uni-scroll-view-content"},[t.refresherEnabled?i("div",{ref:"refresherinner",staticClass:"uni-scroll-view-refresher",style:{"background-color":t.refresherBackground,height:t.refresherHeight+"px"}},["none"!==t.refresherDefaultStyle?i("div",{staticClass:"uni-scroll-view-refresh"},[i("div",{staticClass:"uni-scroll-view-refresh-inner"},["pulling"==t.refreshState?i("svg",{key:"refresh__icon",staticClass:"uni-scroll-view-refresh__icon",style:{transform:"rotate("+t.refreshRotate+"deg)"},attrs:{fill:"#2BD009",width:"24",height:"24",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}}),i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]):t._e(),"refreshing"==t.refreshState?i("svg",{key:"refresh__spinner",staticClass:"uni-scroll-view-refresh__spinner",attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[i("circle",{staticStyle:{color:"#2bd009"},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"3"}})]):t._e()])]):t._e(),"none"==t.refresherDefaultStyle?t._t("refresher"):t._e()],2):t._e(),t._t("default")],2)])])])},o=[];i("948b"),i("e8e7"),i("745e"),i("cdf1");function n(t){this._drag=t,this._dragLog=Math.log(t),this._x=0,this._v=0,this._startTime=0}function h(t,e,i){return t>e-i&&t<e+i}function l(t,e){return h(t,0,e)}function a(t){var e,i,s=t.e,r=t.c,o=t.u;return s===this._t&&(e=this._powER1T,i=this._powER2T),this._t=s,e||(this._powER1T=Math.pow(Math.E,r*s),e=this._powER1T),i||(this._powER2T=Math.pow(Math.E,o*s),i=this._powER2T),{t:e,n:i}}function c(t,e,i){this._m=t,this._k=e,this._c=i,this._solution=null,this._endPosition=0,this._startTime=0}function f(t,e,i){this._extent=t,this._friction=e||new n(.01),this._spring=i||new c(1,90,20),this._startTime=0,this._springing=!1,this._springOffset=0}function _(t,e,i){function s(t,e,i,r){if(!t||!t.cancelled){i(e);var o=e.done();o||t.cancelled||(t.id=requestAnimationFrame(s.bind(null,t,e,i,r))),o&&r&&r(e)}}function r(t){t&&t.id&&cancelAnimationFrame(t.id),t&&(t.cancelled=!0)}var o={id:0,cancelled:!1};return s(o,t,e,i),{cancel:r.bind(null,o),model:t}}function d(t,e){e=e||{},this._element=t,this._options=e,this._enableSnap=e.enableSnap||!1,this._itemSize=e.itemSize||0,this._enableX=e.enableX||!1,this._enableY=e.enableY||!1,this._shouldDispatchScrollEvent=!!e.onScroll,this._enableX?(this._extent=(e.scrollWidth||this._element.offsetWidth)-this._element.parentElement.offsetWidth,this._scrollWidth=e.scrollWidth):(this._extent=(e.scrollHeight||this._element.offsetHeight)-this._element.parentElement.offsetHeight,this._scrollHeight=e.scrollHeight),this._position=0,this._scroll=new f(this._extent,e.friction,e.spring),this._onTransitionEnd=this.onTransitionEnd.bind(this),this.updatePosition()}n.prototype.set=function(t,e){this._x=t,this._v=e,this._startTime=(new Date).getTime()},n.prototype.setVelocityByEnd=function(t){this._v=(t-this._x)*this._dragLog/(Math.pow(this._drag,100)-1)},n.prototype.x=function(t){void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3);var e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t);return this._dt=t,this._x+this._v*e/this._dragLog-this._v/this._dragLog},n.prototype.dx=function(t){void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3);var e=t===this._dt&&this._powDragDt?this._powDragDt:this._powDragDt=Math.pow(this._drag,t);return this._dt=t,this._v*e},n.prototype.done=function(){return Math.abs(this.dx())<3},n.prototype.reconfigure=function(t){var e=this.x(),i=this.dx();this._drag=t,this._dragLog=Math.log(t),this.set(e,i)},n.prototype.configuration=function(){var t=this;return[{label:"Friction",read:function(){return t._drag},write:function(e){t.reconfigure(e)},min:.001,max:.1,step:.001}]},c.prototype._solve=function(t,e){var i=this._c,s=this._m,r=this._k,o=i*i-4*s*r;if(0===o){var n=-i/(2*s),h=t,l=e/(n*t);return{x:function(t){return(h+l*t)*Math.pow(Math.E,n*t)},dx:function(t){var e=Math.pow(Math.E,n*t);return n*(h+l*t)*e+l*e}}}if(o>0){var c=(-i-Math.sqrt(o))/(2*s),f=(-i+Math.sqrt(o))/(2*s),_=(e-c*t)/(f-c),d=t-_;return{x:function(t){var e=a({e:t,c:c,u:f}),i=e.t,s=e.n;return d*i+_*s},dx:function(t){var e=a({e:t,c:c,u:f}),i=e.t,s=e.n;return d*c*i+_*f*s}}}var p=Math.sqrt(4*s*r-i*i)/(2*s),u=-i/2*s,g=t,m=(e-u*t)/p;return{x:function(t){return Math.pow(Math.E,u*t)*(g*Math.cos(p*t)+m*Math.sin(p*t))},dx:function(t){var e=Math.pow(Math.E,u*t),i=Math.cos(p*t),s=Math.sin(p*t);return e*(m*p*i-g*p*s)+u*e*(m*s+g*i)}}},c.prototype.x=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._endPosition+this._solution.x(t):0},c.prototype.dx=function(t){return void 0===t&&(t=((new Date).getTime()-this._startTime)/1e3),this._solution?this._solution.dx(t):0},c.prototype.setEnd=function(t,e,i){if(i||(i=(new Date).getTime()),t!==this._endPosition||!l(e,.4)){e=e||0;var s=this._endPosition;this._solution&&(l(e,.4)&&(e=this._solution.dx((i-this._startTime)/1e3)),s=this._solution.x((i-this._startTime)/1e3),l(e,.4)&&(e=0),l(s,.4)&&(s=0),s+=this._endPosition),this._solution&&l(s-t,.4)&&l(e,.4)||(this._endPosition=t,this._solution=this._solve(s-this._endPosition,e),this._startTime=i)}},c.prototype.snap=function(t){this._startTime=(new Date).getTime(),this._endPosition=t,this._solution={x:function(){return 0},dx:function(){return 0}}},c.prototype.done=function(t){return t||(t=(new Date).getTime()),h(this.x(),this._endPosition,.4)&&l(this.dx(),.4)},c.prototype.reconfigure=function(t,e,i){this._m=t,this._k=e,this._c=i,this.done()||(this._solution=this._solve(this.x()-this._endPosition,this.dx()),this._startTime=(new Date).getTime())},c.prototype.springConstant=function(){return this._k},c.prototype.damping=function(){return this._c},c.prototype.configuration=function(){function t(t,e){t.reconfigure(1,e,t.damping())}function e(t,e){t.reconfigure(1,t.springConstant(),e)}return[{label:"Spring Constant",read:this.springConstant.bind(this),write:t.bind(this,this),min:100,max:1e3},{label:"Damping",read:this.damping.bind(this),write:e.bind(this,this),min:1,max:500}]},f.prototype.snap=function(t,e){this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(e)},f.prototype.set=function(t,e){this._friction.set(t,e),t>0&&e>=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(0)):t<-this._extent&&e<=0?(this._springOffset=0,this._springing=!0,this._spring.snap(t),this._spring.setEnd(-this._extent)):this._springing=!1,this._startTime=(new Date).getTime()},f.prototype.x=function(t){if(!this._startTime)return 0;if(t||(t=((new Date).getTime()-this._startTime)/1e3),this._springing)return this._spring.x()+this._springOffset;var e=this._friction.x(t),i=this.dx(t);return(e>0&&i>=0||e<-this._extent&&i<=0)&&(this._springing=!0,this._spring.setEnd(0,i),e<-this._extent?this._springOffset=-this._extent:this._springOffset=0,e=this._spring.x()+this._springOffset),e},f.prototype.dx=function(t){var e=0;return e=this._lastTime===t?this._lastDx:this._springing?this._spring.dx(t):this._friction.dx(t),this._lastTime=t,this._lastDx=e,e},f.prototype.done=function(){return this._springing?this._spring.done():this._friction.done()},f.prototype.setVelocityByEnd=function(t){this._friction.setVelocityByEnd(t)},f.prototype.configuration=function(){var t=this._friction.configuration();return t.push.apply(t,this._spring.configuration()),t},d.prototype.onTouchStart=function(){this._startPosition=this._position,this._lastChangePos=this._startPosition,this._startPosition>0?this._startPosition/=.5:this._startPosition<-this._extent&&(this._startPosition=(this._startPosition+this._extent)/.5-this._extent),this._animation&&(this._animation.cancel(),this._scrolling=!1),this.updatePosition()},d.prototype.onTouchMove=function(t,e){var i=this._startPosition;this._enableX?i+=t:this._enableY&&(i+=e),i>0?i*=.5:i<-this._extent&&(i=.5*(i+this._extent)-this._extent),this._position=i,this.updatePosition(),this.dispatchScroll()},d.prototype.onTouchEnd=function(t,e,i){var s,r=this;if(this._enableSnap&&this._position>-this._extent&&this._position<0){if(this._enableY&&(Math.abs(e)<this._itemSize&&Math.abs(i.y)<300||Math.abs(i.y)<150))return void this.snap();if(this._enableX&&(Math.abs(t)<this._itemSize&&Math.abs(i.x)<300||Math.abs(i.x)<150))return void this.snap()}if(this._enableX?this._scroll.set(this._position,i.x):this._enableY&&this._scroll.set(this._position,i.y),this._enableSnap){var o=this._scroll._friction.x(100),n=o%this._itemSize;s=Math.abs(n)>this._itemSize/2?o-(this._itemSize-Math.abs(n)):o-n,s<=0&&s>=-this._extent&&this._scroll.setVelocityByEnd(s)}this._lastTime=Date.now(),this._lastDelay=0,this._scrolling=!0,this._lastChangePos=this._position,this._lastIdx=Math.floor(Math.abs(this._position/this._itemSize)),this._animation=_(this._scroll,(function(){var t=Date.now(),e=(t-r._scroll._startTime)/1e3,i=r._scroll.x(e);r._position=i,r.updatePosition();var s=r._scroll.dx(e);r._shouldDispatchScrollEvent&&t-r._lastTime>r._lastDelay&&(r.dispatchScroll(),r._lastDelay=Math.abs(2e3/s),r._lastTime=t)}),(function(){r._enableSnap&&(s<=0&&s>=-r._extent&&(r._position=s,r.updatePosition()),"function"===typeof r._options.onSnap&&r._options.onSnap(Math.floor(Math.abs(r._position)/r._itemSize))),r._shouldDispatchScrollEvent&&r.dispatchScroll(),r._scrolling=!1}))},d.prototype.onTransitionEnd=function(){this._element.style.transition="",this._element.style.webkitTransition="",this._element.removeEventListener("transitionend",this._onTransitionEnd),this._element.removeEventListener("webkitTransitionEnd",this._onTransitionEnd),this._snapping&&(this._snapping=!1),this.dispatchScroll()},d.prototype.snap=function(){var t=this._itemSize,e=this._position%t,i=Math.abs(e)>this._itemSize/2?this._position-(t-Math.abs(e)):this._position-e;this._position!==i&&(this._snapping=!0,this.scrollTo(-i),"function"===typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize)))},d.prototype.scrollTo=function(t,e){this._animation&&(this._animation.cancel(),this._scrolling=!1),"number"===typeof t&&(this._position=-t),this._position<-this._extent?this._position=-this._extent:this._position>0&&(this._position=0),this._element.style.transition="transform ".concat(e||.2,"s ease-out"),this._element.style.webkitTransition="-webkit-transform ".concat(e||.2,"s ease-out"),this.updatePosition(),this._element.addEventListener("transitionend",this._onTransitionEnd),this._element.addEventListener("webkitTransitionEnd",this._onTransitionEnd)},d.prototype.dispatchScroll=function(){if("function"===typeof this._options.onScroll&&Math.round(this._lastPos)!==Math.round(this._position)){this._lastPos=this._position;var t={target:{scrollLeft:this._enableX?-this._position:0,scrollTop:this._enableY?-this._position:0,scrollHeight:this._scrollHeight||this._element.offsetHeight,scrollWidth:this._scrollWidth||this._element.offsetWidth,offsetHeight:this._element.parentElement.offsetHeight,offsetWidth:this._element.parentElement.offsetWidth}};this._options.onScroll(t)}},d.prototype.update=function(t,e,i){var s=0,r=this._position;this._enableX?(s=this._element.childNodes.length?(e||this._element.offsetWidth)-this._element.parentElement.offsetWidth:0,this._scrollWidth=e):(s=this._element.childNodes.length?(e||this._element.offsetHeight)-this._element.parentElement.offsetHeight:0,this._scrollHeight=e),"number"===typeof t&&(this._position=-t),this._position<-s?this._position=-s:this._position>0&&(this._position=0),this._itemSize=i||this._itemSize,this.updatePosition(),r!==this._position&&(this.dispatchScroll(),"function"===typeof this._options.onSnap&&this._options.onSnap(Math.floor(Math.abs(this._position)/this._itemSize))),this._extent=s,this._scroll._extent=s},d.prototype.updatePosition=function(){var t="";this._enableX?t="translateX(".concat(this._position,"px) translateZ(0)"):this._enableY&&(t="translateY(".concat(this._position,"px) translateZ(0)")),this._element.style.webkitTransform=t,this._element.style.transform=t},d.prototype.isScrolling=function(){return this._scrolling||this._snapping};var p={methods:{initScroller:function(t,e){this._touchInfo={trackingID:-1,maxDy:0,maxDx:0},this._scroller=new d(t,e),this.__handleTouchStart=this._handleTouchStart.bind(this),this.__handleTouchMove=this._handleTouchMove.bind(this),this.__handleTouchEnd=this._handleTouchEnd.bind(this),this._initedScroller=!0},_findDelta:function(t){var e=this._touchInfo;return"move"===t.detail.state||"end"===t.detail.state?{x:t.detail.dx,y:t.detail.dy}:{x:t.screenX-e.x,y:t.screenY-e.y}},_handleTouchStart:function(t){var e=this._touchInfo,i=this._scroller;i&&("start"===t.detail.state?(e.trackingID="touch",e.x=t.detail.x,e.y=t.detail.y):(e.trackingID="mouse",e.x=t.screenX,e.y=t.screenY),e.maxDx=0,e.maxDy=0,e.historyX=[0],e.historyY=[0],e.historyTime=[t.detail.timeStamp],e.listener=i,i.onTouchStart&&i.onTouchStart(),t.preventDefault())},_handleTouchMove:function(t){var e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();var i=this._findDelta(t);if(i){for(e.maxDy=Math.max(e.maxDy,Math.abs(i.y)),e.maxDx=Math.max(e.maxDx,Math.abs(i.x)),e.historyX.push(i.x),e.historyY.push(i.y),e.historyTime.push(t.detail.timeStamp);e.historyTime.length>10;)e.historyTime.shift(),e.historyX.shift(),e.historyY.shift();e.listener&&e.listener.onTouchMove&&e.listener.onTouchMove(i.x,i.y,t.detail.timeStamp)}}},_handleTouchEnd:function(t){var e=this._touchInfo;if(-1!==e.trackingID){t.preventDefault();var i=this._findDelta(t);if(i){var s=e.listener;e.trackingID=-1,e.listener=null;var r=e.historyTime.length,o={x:0,y:0};if(r>2)for(var n=e.historyTime.length-1,h=e.historyTime[n],l=e.historyX[n],a=e.historyY[n];n>0;){n-=1;var c=e.historyTime[n],f=h-c;if(f>30&&f<50){o.x=(l-e.historyX[n])/(f/1e3),o.y=(a-e.historyY[n])/(f/1e3);break}}e.historyTime=[],e.historyX=[],e.historyY=[],s&&s.onTouchEnd&&s.onTouchEnd(i.x,i.y,o)}}}}},u=i("8aed"),g=i("b300");Object(g["e"])(["uni-scroll-view"]);var m={name:"ScrollView",mixins:[p],props:{scrollX:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},upperThreshold:{type:[Number,String],default:50},lowerThreshold:{type:[Number,String],default:50},scrollTop:{type:[Number,String],default:0},scrollLeft:{type:[Number,String],default:0},scrollIntoView:{type:String,default:""},scrollWithAnimation:{type:[Boolean,String],default:!1},enableBackToTop:{type:[Boolean,String],default:!1},refresherEnabled:{type:[Boolean,String],default:!1},refresherThreshold:{type:Number,default:45},refresherDefaultStyle:{type:String,default:"back"},refresherBackground:{type:String,default:"#fff"},refresherTriggered:{type:[Boolean,String],default:!1}},emits:["update:refresherTriggered","scroll","scrolltoupper","scrolltolower","refresherpulling","refresherrefresh","refresherabort","refresherrestore"],data:function(){return{lastScrollTop:Number(this.scrollTop)||0,lastScrollLeft:Number(this.scrollLeft)||0,lastScrollToUpperTime:0,lastScrollToLowerTime:0,refresherHeight:0,refreshRotate:0,refreshState:""}},computed:{upperThresholdNumber:function(){var t=Number(this.upperThreshold);return isNaN(t)?50:t},lowerThresholdNumber:function(){var t=Number(this.lowerThreshold);return isNaN(t)?50:t},scrollTopNumber:function(){return Number(this.scrollTop)||0},scrollLeftNumber:function(){return Number(this.scrollLeft)||0}},watch:{scrollTopNumber:function(t){this._scrollTopChanged(t)},scrollLeftNumber:function(t){this._scrollLeftChanged(t)},scrollIntoView:function(t){this._scrollIntoViewChanged(t)},refresherTriggered:function(t){!0===t?this._setRefreshState("refreshing"):!1===t&&this._setRefreshState("restore")}},mounted:function(){var t=this,e=null,i=null;this._attached=!0,this.toUpperNumber=0,this.triggerAbort=!1,this.beforeRefreshing=!1,this._scrollTopChanged(this.scrollTopNumber),this._scrollLeftChanged(this.scrollLeftNumber),this._scrollIntoViewChanged(this.scrollIntoView),this.__handleScroll=function(e){e.preventDefault(),e.stopPropagation(),t._handleScroll.bind(t,e)()},this.__handleTouchMove=function(s){if(null!==e){var r=s.touches[0].pageX,o=s.touches[0].pageY,n=t.$refs.main;if(Math.abs(r-e.x)>Math.abs(o-e.y))if(t.scrollX){if(0===n.scrollLeft&&r>e.x)return void(i=!1);if(n.scrollWidth===n.offsetWidth+n.scrollLeft&&r<e.x)return void(i=!1);i=!0}else i=!1;else if(t.scrollY)if(0===n.scrollTop&&o>e.y)i=!1,t.refresherEnabled&&!1!==s.cancelable&&s.preventDefault();else{if(n.scrollHeight===n.offsetHeight+n.scrollTop&&o<e.y)return void(i=!1);i=!0}else i=!1;if(i&&s.stopPropagation(),0===n.scrollTop&&1===s.touches.length&&(t.refreshState="pulling"),t.refresherEnabled&&"pulling"===t.refreshState){var h=o-e.y;0===t.toUpperNumber&&(t.toUpperNumber=o),t.beforeRefreshing?(t.refresherHeight=h+t.refresherThreshold,t.triggerAbort=!1):(t.refresherHeight=o-t.toUpperNumber,t.refresherHeight>0&&(t.triggerAbort=!0,t.$trigger("refresherpulling",s,{deltaY:h})));var l=t.refresherHeight/t.refresherThreshold;t.refreshRotate=360*(l>1?1:l)}}},this.__handleTouchStart=function(t){1===t.touches.length&&(e={x:t.touches[0].pageX,y:t.touches[0].pageY})},this.__handleTouchEnd=function(){e=null,t.refresherHeight>=t.refresherThreshold?t._setRefreshState("refreshing"):t._setRefreshState("refresherabort")},this.$refs.main.addEventListener("touchstart",this.__handleTouchStart,u["a"]),this.$refs.main.addEventListener("touchmove",this.__handleTouchMove,Object(u["c"])(!1)),this.$refs.main.addEventListener("scroll",this.__handleScroll,Object(u["c"])(!1)),this.$refs.main.addEventListener("touchend",this.__handleTouchEnd,u["a"])},activated:function(){this.scrollY&&(this.$refs.main.scrollTop=this.lastScrollTop),this.scrollX&&(this.$refs.main.scrollLeft=this.lastScrollLeft)},beforeDestroy:function(){this.$refs.main.removeEventListener("touchstart",this.__handleTouchStart,u["a"]),this.$refs.main.removeEventListener("touchmove",this.__handleTouchMove,u["a"]),this.$refs.main.removeEventListener("scroll",this.__handleScroll,Object(u["c"])(!1)),this.$refs.main.removeEventListener("touchend",this.__handleTouchEnd,u["a"])},methods:{$trigger:function(t,e){this.$emit(t,e)},scrollTo:function(t,e){var i=this.$refs.main;t<0?t=0:"x"===e&&t>i.scrollWidth-i.offsetWidth?t=i.scrollWidth-i.offsetWidth:"y"===e&&t>i.scrollHeight-i.offsetHeight&&(t=i.scrollHeight-i.offsetHeight);var s=0,r="";"x"===e?s=i.scrollLeft-t:"y"===e&&(s=i.scrollTop-t),0!==s&&(this.$refs.content.style.transition="transform .3s ease-out",this.$refs.content.style.webkitTransition="-webkit-transform .3s ease-out","x"===e?r="translateX(".concat(s,"px) translateZ(0)"):"y"===e&&(r="translateY(".concat(s,"px) translateZ(0)")),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd),this.__transitionEnd=this._transitionEnd.bind(this,t,e),this.$refs.content.addEventListener("transitionend",this.__transitionEnd),this.$refs.content.addEventListener("webkitTransitionEnd",this.__transitionEnd),"x"===e?i.style.overflowX="hidden":"y"===e&&(i.style.overflowY="hidden"),this.$refs.content.style.transform=r,this.$refs.content.style.webkitTransform=r)},_handleTrack:function(t){if("start"===t.detail.state)return this._x=t.detail.x,this._y=t.detail.y,void(this._noBubble=null);"end"===t.detail.state&&(this._noBubble=!1),null===this._noBubble&&this.scrollY&&(Math.abs(this._y-t.detail.y)/Math.abs(this._x-t.detail.x)>1?this._noBubble=!0:this._noBubble=!1),null===this._noBubble&&this.scrollX&&(Math.abs(this._x-t.detail.x)/Math.abs(this._y-t.detail.y)>1?this._noBubble=!0:this._noBubble=!1),this._x=t.detail.x,this._y=t.detail.y,this._noBubble&&t.stopPropagation()},_handleScroll:function(t){var e=t.target;this.$trigger("scroll",t,{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,deltaX:this.lastScrollLeft-e.scrollLeft,deltaY:this.lastScrollTop-e.scrollTop}),this.scrollY&&(e.scrollTop<=this.upperThresholdNumber&&this.lastScrollTop-e.scrollTop>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"top"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollTop+e.offsetHeight+this.lowerThresholdNumber>=e.scrollHeight&&this.lastScrollTop-e.scrollTop<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"bottom"}),this.lastScrollToLowerTime=t.timeStamp)),this.scrollX&&(e.scrollLeft<=this.upperThresholdNumber&&this.lastScrollLeft-e.scrollLeft>0&&t.timeStamp-this.lastScrollToUpperTime>200&&(this.$trigger("scrolltoupper",t,{direction:"left"}),this.lastScrollToUpperTime=t.timeStamp),e.scrollLeft+e.offsetWidth+this.lowerThresholdNumber>=e.scrollWidth&&this.lastScrollLeft-e.scrollLeft<0&&t.timeStamp-this.lastScrollToLowerTime>200&&(this.$trigger("scrolltolower",t,{direction:"right"}),this.lastScrollToLowerTime=t.timeStamp)),this.lastScrollTop=e.scrollTop,this.lastScrollLeft=e.scrollLeft},_scrollTopChanged:function(t){this.scrollY&&(this._innerSetScrollTop?this._innerSetScrollTop=!1:this.scrollWithAnimation?this.scrollTo(t,"y"):this.$refs.main.scrollTop=t)},_scrollLeftChanged:function(t){this.scrollX&&(this._innerSetScrollLeft?this._innerSetScrollLeft=!1:this.scrollWithAnimation?this.scrollTo(t,"x"):this.$refs.main.scrollLeft=t)},_scrollIntoViewChanged:function(t){if(t){if(!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))return void console.error("id error: scroll-into-view=".concat(t));var e=this.$el.querySelector("#".concat(t));if(e){var i=this.$refs.main.getBoundingClientRect(),s=e.getBoundingClientRect();if(this.scrollX){var r=s.left-i.left,o=this.$refs.main.scrollLeft,n=o+r;this.scrollWithAnimation?this.scrollTo(n,"x"):this.$refs.main.scrollLeft=n}if(this.scrollY){var h=s.top-i.top,l=this.$refs.main.scrollTop,a=l+h;this.scrollWithAnimation?this.scrollTo(a,"y"):this.$refs.main.scrollTop=a}}}},_transitionEnd:function(t,e){this.$refs.content.style.transition="",this.$refs.content.style.webkitTransition="",this.$refs.content.style.transform="",this.$refs.content.style.webkitTransform="";var i=this.$refs.main;"x"===e?(i.style.overflowX=this.scrollX?"auto":"hidden",i.scrollLeft=t):"y"===e&&(i.style.overflowY=this.scrollY?"auto":"hidden",i.scrollTop=t),this.$refs.content.removeEventListener("transitionend",this.__transitionEnd),this.$refs.content.removeEventListener("webkitTransitionEnd",this.__transitionEnd)},_setRefreshState:function(t){switch(t){case"refreshing":this.refresherHeight=this.refresherThreshold,this.beforeRefreshing||(this.beforeRefreshing=!0,this.$trigger("refresherrefresh",{},{}));break;case"restore":case"refresherabort":this.beforeRefreshing=!1,this.refresherHeight=0,this.toUpperNumber=0,"restore"===t&&(this.triggerAbort=!1,this.$trigger("refresherrestore",{},{})),"refresherabort"===t&&this.triggerAbort&&(this.triggerAbort=!1,this.$trigger("refresherabort",{},{}));break}this.refreshState=t},getScrollPosition:function(){var t=this.$refs.main;return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth}}}},b=m,v=(i("960c"),i("2777")),T=Object(v["a"])(b,r,o,!1,null,"b01e8ab6",null),y=T.exports,x=i("9bfa"),w={};Object(x["b"])()&&(w={ScrollView:y},Object(g["e"])(["uni-scroll-view"],app));var S={components:Object(s["a"])({},w)}},"563d":function(t,e,i){var s=i("d6e1");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=i("c69b").default;r("5f56e236",s,!0,{sourceMap:!1,shadowMode:!1})},"8aed":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var s=!1;try{var r={};Object.defineProperty(r,"passive",{get:function(){return s=!0,!0}}),window.addEventListener("test-passive",(function(){}),r)}catch(h){}var o=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!s&&{passive:t}},n=o()},"960c":function(t,e,i){"use strict";i("563d")},d6e1:function(t,e,i){var s=i("ee2b");e=s(!1),e.push([t.i,"uni-scroll-view[data-v-b01e8ab6]{display:block;width:100%}uni-scroll-view[hidden][data-v-b01e8ab6]{display:none}.uni-scroll-view[data-v-b01e8ab6]{position:relative;-webkit-overflow-scrolling:touch;max-height:inherit}.uni-scroll-view[data-v-b01e8ab6],.uni-scroll-view-content[data-v-b01e8ab6]{width:100%;height:100%}.uni-scroll-view-refresher[data-v-b01e8ab6]{position:relative;overflow:hidden}.uni-scroll-view-refresh[data-v-b01e8ab6]{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.uni-scroll-view-refresh[data-v-b01e8ab6],.uni-scroll-view-refresh-inner[data-v-b01e8ab6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.uni-scroll-view-refresh-inner[data-v-b01e8ab6]{line-height:0;width:40px;height:40px;border-radius:50%;background-color:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.117647),0 1px 4px rgba(0,0,0,.117647);box-shadow:0 1px 6px rgba(0,0,0,.117647),0 1px 4px rgba(0,0,0,.117647)}.uni-scroll-view-refresh__spinner[data-v-b01e8ab6]{-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:uni-scroll-view-refresh-rotate-data-v-b01e8ab6 2s linear infinite;animation:uni-scroll-view-refresh-rotate-data-v-b01e8ab6 2s linear infinite}.uni-scroll-view-refresh__spinner>circle[data-v-b01e8ab6]{stroke:currentColor;stroke-linecap:round;-webkit-animation:uni-scroll-view-refresh-dash-data-v-b01e8ab6 2s linear infinite;animation:uni-scroll-view-refresh-dash-data-v-b01e8ab6 2s linear infinite}@-webkit-keyframes uni-scroll-view-refresh-rotate-data-v-b01e8ab6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-scroll-view-refresh-rotate-data-v-b01e8ab6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes uni-scroll-view-refresh-dash-data-v-b01e8ab6{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes uni-scroll-view-refresh-dash-data-v-b01e8ab6{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}",""]),t.exports=e}}]);