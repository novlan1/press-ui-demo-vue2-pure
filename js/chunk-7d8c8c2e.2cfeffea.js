(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d8c8c2e"],{"054f":function(e,t,o){var a=o("ee2b");t=a(!1),t.push([e.i,".demo-wrap[data-v-fed12ed4]  .press-tab__pane{width:auto;margin:20px;background-color:#fff;border-radius:12px}.demo-wrap[data-v-fed12ed4]  .press-tabs__content{background-color:#f7f8fa}.demo-wrap[data-v-fed12ed4]  .press-col{float:none!important;text-align:center;vertical-align:middle;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.demo-wrap[data-v-fed12ed4]  .press-col span{display:block;height:36px;margin:-4px 0 4px;padding:0 5px;color:#646566;font-size:12px;line-height:18px}.demo-wrap[data-v-fed12ed4]  .press-col:active{background-color:#f2f3f5}.demo-wrap[data-v-fed12ed4]  .press-icon-plus{margin:16px 0 16px;color:#323233;font-size:32px}",""]),e.exports=t},"0c08":function(e,t,o){var a=o("9382");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("c69b").default;n("59b7dce8",a,!0,{sourceMap:!1,shadowMode:!1})},"140d":function(e,t,o){"use strict";function a(e){return new Promise((function(t,o){wx?wx.setClipboardData({data:"".concat(e),success:function(){t()},fail:function(e){console.log(e),o()}}):o()}))}o.d(t,"a",(function(){return a}))},"17b0":function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var a=o("140d"),n=o("a8b2");function s(e){var t=a["a"];return t=n["a"],t("".concat(e))}},"2d55":function(e,t,o){"use strict";o.d(t,"a",(function(){return T}));o("e087");var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"press-notify-index"},[o("PressTransition",{attrs:{name:"slide-down",show:e.dataShow,"custom-class":"press-notify__container","custom-style":e.computed.rootStyle({zIndex:e.dataZIndex,top:e.dataTop})},on:{click:e.onTap}},[o("div",{class:"press-notify press-notify--"+e.dataType,style:e.computed.notifyStyle({background:e.dataBackground,color:e.dataColor})},[e.dataSafeAreaInsetTop?o("div",{style:"height: "+e.statusBarHeight+"px"}):e._e(),o("span",[e._v(e._s(e.dataMessage))])])])],1)},n=[],s=o("4455"),r=(o("a88c"),o("f72b")),c="#fff",i=o("dc16"),l=o("9466"),d=o("b47f"),p=o("09f0");function f(e){return Object(d["a"])({"z-index":e.zIndex,top:Object(p["a"])(e.top)})}function u(e){return Object(d["a"])({background:e.background,color:e.color})}var b,m={rootStyle:f,notifyStyle:u},g=o("459b"),h=o("d068"),v=Object(s["a"])({show:{type:Boolean,default:!1},message:{type:String,default:""},background:{type:String,default:""},type:{type:String,default:"danger"},color:{type:String,default:c},zIndex:{type:Number,default:110},safeAreaInsetTop:{type:Boolean,default:!1},top:{type:[null,String,Number],default:null}},l["b"]),y={name:"PressNotify",options:Object(s["a"])(Object(s["a"])({},l["a"]),{},{styleIsolation:"shared"}),components:{PressTransition:r["a"]},mixins:[Object(h["a"])(v)],props:v,emits:[],data:function(){return{onOpened:null,onClose:null,onClick:null,computed:m}},watch:{},created:function(){var e=Object(i["b"])();this.statusBarHeight=e},methods:{onTap:function(e){var t=this.onClick;t&&t(Object(g["a"])(e))}}},w=y,x=(o("f4d0"),o("33b6")),k=Object(x["a"])(w,a,n,!1,null,"09e19975",null),P=k.exports,_={selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:c,safeAreaInsetTop:!1,onClick:function(){},onOpened:function(){},onClose:function(){},animationDuration:300},I=o("8eb5"),C=Object(I["a"])({defaultOptions:_,component:P}),S=C;b=S;var O=b,j=(b.clear,b.setDefaultOptions,b.resetDefaultOptions,o("17b0")),T={data:function(){var e=0;return e=44,{offsetTop:e}},methods:{copyIconTag:function(e){var t=this;Object(j["a"])(e).then((function(){O({type:"success",duration:1500,message:"".concat(t.t("copied"),"：").concat(e),top:t.offsetTop})}))}}}},"4b60":function(e,t,o){var a=o("8b7c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("c69b").default;n("421423d2",a,!0,{sourceMap:!1,shadowMode:!1})},"4b7b":function(e,t,o){"use strict";o("4b60")},"5b9f":function(e,t,o){"use strict";o("def7")},"62c2":function(e,t,o){"use strict";o("0c08")},"8b7c":function(e,t,o){var a=o("ee2b");t=a(!1),t.push([e.i,".press-doc-demo-block__title[data-v-1189c9de]{margin:0;padding:32px 16px 16px;color:rgba(69,90,100,.6);font-weight:400;font-size:14px;line-height:16px}.press-doc-demo-block__card[data-v-1189c9de]{margin:12px 12px 0;overflow:hidden;border-radius:8px}.press-doc-demo-block__title+.press-doc-demo-block__card[data-v-1189c9de]{margin-top:0}.press-doc-demo-block:first-of-type .press-doc-demo-block__title[data-v-1189c9de]{padding-top:20px}",""]),e.exports=t},9382:function(e,t,o){var a=o("ee2b");t=a(!1),t.push([e.i,".press-col[data-v-4e2702b8]{-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.press-col--1[data-v-4e2702b8]{width:4.1666666667%}.press-col--offset-1[data-v-4e2702b8]{margin-left:4.1666666667%}.press-col--2[data-v-4e2702b8]{width:8.3333333333%}.press-col--offset-2[data-v-4e2702b8]{margin-left:8.3333333333%}.press-col--3[data-v-4e2702b8]{width:12.5%}.press-col--offset-3[data-v-4e2702b8]{margin-left:12.5%}.press-col--4[data-v-4e2702b8]{width:16.6666666667%}.press-col--offset-4[data-v-4e2702b8]{margin-left:16.6666666667%}.press-col--5[data-v-4e2702b8]{width:20.8333333333%}.press-col--offset-5[data-v-4e2702b8]{margin-left:20.8333333333%}.press-col--6[data-v-4e2702b8]{width:25%}.press-col--offset-6[data-v-4e2702b8]{margin-left:25%}.press-col--7[data-v-4e2702b8]{width:29.1666666667%}.press-col--offset-7[data-v-4e2702b8]{margin-left:29.1666666667%}.press-col--8[data-v-4e2702b8]{width:33.3333333333%}.press-col--offset-8[data-v-4e2702b8]{margin-left:33.3333333333%}.press-col--9[data-v-4e2702b8]{width:37.5%}.press-col--offset-9[data-v-4e2702b8]{margin-left:37.5%}.press-col--10[data-v-4e2702b8]{width:41.6666666667%}.press-col--offset-10[data-v-4e2702b8]{margin-left:41.6666666667%}.press-col--11[data-v-4e2702b8]{width:45.8333333333%}.press-col--offset-11[data-v-4e2702b8]{margin-left:45.8333333333%}.press-col--12[data-v-4e2702b8]{width:50%}.press-col--offset-12[data-v-4e2702b8]{margin-left:50%}.press-col--13[data-v-4e2702b8]{width:54.1666666667%}.press-col--offset-13[data-v-4e2702b8]{margin-left:54.1666666667%}.press-col--14[data-v-4e2702b8]{width:58.3333333333%}.press-col--offset-14[data-v-4e2702b8]{margin-left:58.3333333333%}.press-col--15[data-v-4e2702b8]{width:62.5%}.press-col--offset-15[data-v-4e2702b8]{margin-left:62.5%}.press-col--16[data-v-4e2702b8]{width:66.6666666667%}.press-col--offset-16[data-v-4e2702b8]{margin-left:66.6666666667%}.press-col--17[data-v-4e2702b8]{width:70.8333333333%}.press-col--offset-17[data-v-4e2702b8]{margin-left:70.8333333333%}.press-col--18[data-v-4e2702b8]{width:75%}.press-col--offset-18[data-v-4e2702b8]{margin-left:75%}.press-col--19[data-v-4e2702b8]{width:79.1666666667%}.press-col--offset-19[data-v-4e2702b8]{margin-left:79.1666666667%}.press-col--20[data-v-4e2702b8]{width:83.3333333333%}.press-col--offset-20[data-v-4e2702b8]{margin-left:83.3333333333%}.press-col--21[data-v-4e2702b8]{width:87.5%}.press-col--offset-21[data-v-4e2702b8]{margin-left:87.5%}.press-col--22[data-v-4e2702b8]{width:91.6666666667%}.press-col--offset-22[data-v-4e2702b8]{margin-left:91.6666666667%}.press-col--23[data-v-4e2702b8]{width:95.8333333333%}.press-col--offset-23[data-v-4e2702b8]{margin-left:95.8333333333%}.press-col--24[data-v-4e2702b8]{width:100%}.press-col--offset-24[data-v-4e2702b8]{margin-left:100%}",""]),e.exports=t},a8b2:function(e,t,o){"use strict";function a(e){return new Promise((function(t,o){var a=document.getElementById("#clipboard");null===a||void 0===a||a.remove();var n=document.createElement("textarea");n.id="#clipboard",n.style.position="fixed",n.style.top="-9999px",n.style.zIndex="-9999",document.body.appendChild(n),n.value="".concat(e),n.select(),n.setSelectionRange(0,n.value.length);var s=document.execCommand("Copy",!1);n.blur(),s?t():o()}))}o.d(t,"a",(function(){return a}))},b3b7:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:[e.customClass,e.utils.bem2("col",[e.span]),e.offset?"press-col--offset-"+e.offset:""],style:e.computed.rootStyle({gutter:e.gutter})},[e._t("default")],2)},n=[],s=o("4455"),r=(o("a88c"),o("c732")),c=o("d0de"),i=o("86e2");function l(e){return e.gutter?Object(c["b"])({"padding-right":Object(i["a"])(e.gutter/2),"padding-left":Object(i["a"])(e.gutter/2)}):""}var d={rootStyle:l},p=o("680b"),f=o("9d80"),u=o("305b"),b={name:"PressCol",options:Object(s["a"])(Object(s["a"])({},p["b"]),{},{styleIsolation:"shared"}),mixins:[Object(f["a"])(u["h"])],props:Object(s["a"])({span:{type:Number,default:0},offset:{type:Number,default:0}},p["c"]),emits:[],data:function(){return{utils:r["a"],computed:d,gutter:0}}},m=b,g=(o("62c2"),o("33b6")),h=Object(g["a"])(m,a,n,!1,null,"4e2702b8",null);t["a"]=h.exports},c50c:function(e,t,o){var a=o("c691");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("c69b").default;n("a77188ce",a,!0,{sourceMap:!1,shadowMode:!1})},c691:function(e,t,o){var a=o("ee2b");t=a(!1),t.push([e.i,".press-notify[data-v-09e19975]{text-align:center;word-wrap:break-word;padding:var(--notify-padding,6px 15px);font-size:var(--notify-font-size,14px);line-height:var(--notify-line-height,20px)}[data-v-09e19975] .press-notify__container{position:fixed;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.press-notify--primary[data-v-09e19975]{background-color:var(--notify-primary-background-color,#1989fa)}.press-notify--success[data-v-09e19975]{background-color:var(--notify-success-background-color,#07c160)}.press-notify--danger[data-v-09e19975]{background-color:var(--notify-danger-background-color,#ee0a24)}.press-notify--warning[data-v-09e19975]{background-color:var(--notify-warning-background-color,#ff976a)}",""]),e.exports=t},cfbc:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"demo-wrap demo-wrap--gray"},[o("PressTabs",{attrs:{"offset-top":e.offsetTop,sticky:"",swipeable:""}},[o("PressTab",{attrs:{title:e.t("demo")}},[o("DemoBlockPlus",{attrs:{title:e.t("basicUsage")}},[o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon},on:{click:function(t){return e.copy(e.demoIcon)}}})],1),o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoImage},on:{click:function(t){return e.copy(e.demoImage)}}})],1)],1),o("DemoBlockPlus",{attrs:{title:e.t("badge")}},[o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon,dot:""},on:{click:function(t){return e.copy(e.demoIcon,{dot:!0})}}})],1),o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon,info:"9"},on:{click:function(t){return e.copy(e.demoIcon,{badge:"9"})}}})],1),o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon,info:"99+"},on:{click:function(t){return e.copy(e.demoIcon,{badge:"99+"})}}})],1)],1),o("DemoBlockPlus",{attrs:{title:e.t("color")}},[o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:"cart-o",color:"#1989fa"},on:{click:function(t){return e.copy("cart-o",{color:"#1989fa"})}}})],1),o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:"fire-o",color:e.RED},on:{click:function(t){return e.copy("fire-o",{color:e.RED})}}})],1)],1),o("DemoBlockPlus",{attrs:{title:e.t("size")}},[o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon,size:"40"},on:{click:function(t){return e.copy(e.demoIcon,{size:"40"})}}})],1),o("PressCol",{attrs:{span:6}},[o("PressIconPlus",{attrs:{name:e.demoIcon,size:"1rem"},on:{click:function(t){return e.copy(e.demoIcon,{size:"3rem"})}}})],1)],1)],1),o("PressTab",{attrs:{title:e.t("basic")}},e._l(e.icons.basic,(function(t){return o("PressCol",{key:t,attrs:{span:6}},[o("PressIconPlus",{attrs:{name:t},on:{click:function(o){return e.copy(t)}}}),o("span",[e._v(e._s(t))])],1)})),1),o("PressTab",{attrs:{title:e.t("outline")}},e._l(e.icons.outline,(function(t){return o("PressCol",{key:t,attrs:{span:6}},[o("PressIconPlus",{attrs:{name:t},on:{click:function(o){return e.copy(t)}}}),o("span",[e._v(e._s(t))])],1)})),1),o("PressTab",{attrs:{title:e.t("filled")}},e._l(e.icons.filled,(function(t){return o("PressCol",{key:t,attrs:{span:6}},[o("PressIconPlus",{attrs:{name:t},on:{click:function(o){return e.copy(t)}}}),o("span",[e._v(e._s(t))])],1)})),1)],1)],1)},n=[],s=o("4455"),r=(o("e087"),o("fe98")),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"press-doc-demo-block"},[e.title?o("h2",{staticClass:"press-doc-demo-block__title"},[e._v(" "+e._s(e.title)+" ")]):e._e(),e.card?o("div",{staticClass:"press-doc-demo-block__card"},[e._t("default")],2):e._t("default")],2)},i=[],l={name:"PressDemoBlockPlus",props:{card:{type:Boolean,default:!1},title:{type:String,default:""}}},d=l,p=(o("4b7b"),o("33b6")),f=Object(p["a"])(d,c,i,!1,null,"1189c9de",null),u=f.exports,b=o("cebd"),m=o("f4de"),g=o("b3b7"),h=o("101c"),v={name:"press-icon-plus",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","alipay","wechat","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]},y=o("46bd"),w=o("2d55"),x={i18n:{"zh-CN":{copied:"复制成功",title:"图标列表",badge:"徽标提示",basic:"基础图标",outline:"线框风格",filled:"实底风格",demo:"用法示例",color:"图标颜色",size:"图标大小"},"en-US":{copied:"Copied",title:"Icon List",badge:"Show Badge",basic:"Basic",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}},components:{PressTabs:b["a"],PressTab:m["a"],PressCol:g["a"],PressIconPlus:h["a"],PressNotify:r["a"],DemoBlockPlus:u},mixins:[w["a"]],options:{styleIsolation:"shared"},data:function(){return{RED:y["e"],demoIcon:"chat-o",demoImage:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ce77489af93cb34c4b.png",icons:{basic:[],outline:[],filled:[]}}},mounted:function(){var e=this;setTimeout((function(){e.icons=Object(s["a"])(Object(s["a"])({},e.icons),v||{})}),1e3)},methods:{copy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o='<press-icon-plus name="'.concat(e,'"');"dot"in t&&(o="".concat(o," ").concat(t.dot?"dot":"")),"badge"in t&&(o="".concat(o,' badge="').concat(t.badge,'"')),"color"in t&&(o="".concat(o,' color="').concat(t.color,'"')),"size"in t&&(o="".concat(o,' size="').concat(t.size,'"')),o="".concat(o," />"),console.log("[tag] ",o),this.copyIconTag(o)}}},k=x,P=(o("5b9f"),Object(p["a"])(k,a,n,!1,null,"fed12ed4",null));t["default"]=P.exports},dc16:function(e,t,o){"use strict";o.d(t,"b",(function(){return O})),o.d(t,"a",(function(){return j}));o("9c63");var a=o("4455");o("25f7"),o("8999"),o("0c4e"),o("080f"),o("fec7"),o("4498");var n=o("12ef"),s=o("4609"),r=(o("8c11"),{"css.var":"--a:0","css.env":"top:env(a)","css.constant":"top:constant(a)"});function c(e){return window.CSS&&CSS.supports&&(CSS.supports(e)||CSS.supports.apply(CSS,e.split(":")))}function i(e){return!!r[e]&&c(r[e])}o("e087"),o("cfff"),o("0913"),o("06e6"),o("b41b"),o("6058"),o("093a");var l,d,p=o("c3ce"),f=["top","left","right","bottom"],u={},b=[];function m(){return d="CSS"in window&&"function"===typeof CSS.supports?CSS.supports("top: env(safe-area-inset-top)")?"env":CSS.supports("top: constant(safe-area-inset-top)")?"constant":"":"",d}function g(e,t){var o=e.style;Object.keys(t).forEach((function(e){var a=t[e];o[e]=a}))}var h=[];function v(e){e?h.push(e):h.forEach((function(e){e()}))}function y(){if(d="string"===typeof d?d:m(),d){var e=document.createElement("div");g(e,{position:"absolute",left:"0",top:"0",width:"0",height:"0",zIndex:"-1",overflow:"hidden",visibility:"hidden"}),f.forEach((function(o){t(e,o)})),document.body.appendChild(e),v(),l=!0}else f.forEach((function(e){u[e]=0}));function t(e,t){var o=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),r=100,c=1e4,i={position:"absolute",width:"".concat(r,"px"),height:"200px",boxSizing:"border-box",overflow:"hidden",paddingBottom:"".concat(d,"(safe-area-inset-").concat(t,")")};g(o,i),g(a,i),g(n,{transition:"0s",animation:"none",width:"400px",height:"400px"}),g(s,{transition:"0s",animation:"none",width:"250%",height:"250%"}),o.appendChild(n),a.appendChild(s),e.appendChild(o),e.appendChild(a),v((function(){a.scrollTop=c,o.scrollTop=c;var e=o.scrollTop,n=a.scrollTop;function s(){this.scrollTop!==(this===o?e:n)&&(a.scrollTop=c,o.scrollTop=c,e=o.scrollTop,n=a.scrollTop,k(t))}o.addEventListener("scroll",s,p["a"]),a.addEventListener("scroll",s,p["a"])}));var l=getComputedStyle(o);Object.defineProperty(u,t,{configurable:!0,get:function(){return parseFloat(l.paddingBottom)}})}}function w(e){return l||y(),u[e]}var x=[];function k(e){x.length||setTimeout((function(){var e={};x.forEach((function(t){e[t]=u[t]})),x.length=0,b.forEach((function(t){t(e)}))}),0),x.push(e)}function P(e){m()&&(l||y(),"function"===typeof e&&b.push(e))}function _(e){var t=b.indexOf(e);t>=0&&b.splice(t,1)}var I={get support(){return 0!=("string"===typeof d?d:m()).length},get top(){return w("top")},get left(){return w("left")},get right(){return w("right")},get bottom(){return w("bottom")},onChange:P,offChange:_},C=44;function S(){if(i("css.var")){var e=document.documentElement.style,t=parseInt((e.getPropertyValue("--window-top").match(/\d+/)||["0"])[0],10),o=parseInt((e.getPropertyValue("--window-bottom").match(/\d+/)||["0"])[0],10),a=parseInt((e.getPropertyValue("--window-left").match(/\d+/)||["0"])[0],10),n=parseInt((e.getPropertyValue("--window-right").match(/\d+/)||["0"])[0],10),s=parseInt((e.getPropertyValue("--top-window-height").match(/\d+/)||["0"])[0],10);return{top:(t?t+I.top:0)+(s||0),bottom:o?o+I.bottom:0,left:a?a+I.left:0,right:n?n+I.right:0}}var r=0,c=0,l=getCurrentPages();if(l.length){var d=l[l.length-1].$parent.$parent,p=d.navigationBar.type;r="default"===p||"float"===p?C:0}return{top:r,bottom:c,left:0,right:0}}o("4208");function O(){if(Object(n["b"])())return 0;var e=Object(s["b"])(),t=e.statusBarHeight;return t}function j(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(n){var s=null===e||void 0===e?void 0:e.$el,r=null===s||void 0===s?void 0:s.querySelector(t);if(!r&&o&&(r=document.querySelector(t)),r){var c=r.getBoundingClientRect()||{},i=S(),l=i.top,d={left:c.left,right:c.right,width:c.width,height:c.height,x:c.x,y:c.y,top:c.top,bottom:c.bottom};d=Object(a["a"])(Object(a["a"])({},d),{},{top:c.top-l,bottom:c.bottom-l}),n(d)}else n({})}))}},def7:function(e,t,o){var a=o("054f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("c69b").default;n("9a9dc068",a,!0,{sourceMap:!1,shadowMode:!1})},f4d0:function(e,t,o){"use strict";o("c50c")}}]);