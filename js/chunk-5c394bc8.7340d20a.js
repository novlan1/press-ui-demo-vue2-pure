(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c394bc8"],{"17b0":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("0a61");function a(t){var e=o["clipboardMp"];return e=o["clipboardWeb"],e("".concat(t))}},"2d55":function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));n("2aaa");var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-notify-index"},[n("press-transition",{attrs:{name:"slide-down",show:t.dataShow,"custom-class":"press-notify__container","custom-style":t.computed.rootStyle({zIndex:t.dataZIndex,top:t.dataTop})},on:{click:t.onTap}},[n("div",{class:"press-notify press-notify--"+t.dataType,style:t.computed.notifyStyle({background:t.dataBackground,color:t.dataColor})},[t.dataSafeAreaInsetTop?n("div",{style:"height: "+t.statusBarHeight+"px"}):t._e(),n("span",[t._v(t._s(t.dataMessage))])])])],1)},a=[],i=n("69b0"),r=(n("948b"),n("f72b")),s="#fff",c=n("dc16"),l=n("9466"),d=n("b47f"),p=n("09f0");function u(t){return Object(d["a"])({"z-index":t.zIndex,top:Object(p["a"])(t.top)})}function b(t){return Object(d["a"])({background:t.background,color:t.color})}var f,v={rootStyle:u,notifyStyle:b},h=n("459b"),m=n("d068"),x=Object(i["a"])({show:{type:Boolean,default:!1},message:{type:String,default:""},background:{type:String,default:""},type:{type:String,default:"danger"},color:{type:String,default:s},zIndex:{type:Number,default:110},safeAreaInsetTop:{type:Boolean,default:!1},top:{type:[null,String,Number],default:null}},l["b"]),g={name:"PressNotify",options:Object(i["a"])(Object(i["a"])({},l["a"]),{},{styleIsolation:"shared"}),components:{PressTransition:r["a"]},mixins:[Object(m["a"])(x)],props:x,emits:[],data:function(){return{onOpened:null,onClose:null,onClick:null,computed:v}},watch:{},created:function(){var t=Object(c["b"])();this.statusBarHeight=t},methods:{onTap:function(t){var e=this.onClick;e&&e(Object(h["a"])(t))}}},y=g,w=(n("c24e"),n("2777")),k=Object(w["a"])(y,o,a,!1,null,"63357b53",null),I=k.exports,C={selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:s,safeAreaInsetTop:!1,onClick:function(){},onOpened:function(){},onClose:function(){},animationDuration:300},O=n("8eb5"),_=Object(O["a"])({defaultOptions:C,component:I}),M=_;f=M;var j=f,z=n("17b0"),P={data:function(){var t=0;return t=44,{offsetTop:t}},methods:{copyIconTag:function(t){var e=this;Object(z["a"])(t).then((function(){j({type:"success",duration:1500,message:"".concat(e.t("copied"),"：").concat(t),top:e.offsetTop})}))}}}},"67f3":function(t,e,n){var o=n("bcc2");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("c69b").default;a("093af989",o,!0,{sourceMap:!1,shadowMode:!1})},"88c0":function(t,e,n){"use strict";n("67f3")},"94bf":function(t,e,n){var o=n("c164");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("c69b").default;a("43713aba",o,!0,{sourceMap:!1,shadowMode:!1})},9932:function(t){t.exports=JSON.parse('{"empty":{"name":"empty","unicode":"\\\\e03f"}}')},bcc2:function(t,e,n){var o=n("ee2b");e=o(!1),e.push([t.i,".icon-content[data-v-4d84b49b]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.icon-content.flex-end[data-v-4d84b49b]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.icon-content .icon-item[data-v-4d84b49b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:20%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}",""]),t.exports=e},c164:function(t,e,n){var o=n("ee2b");e=o(!1),e.push([t.i,'.press-ellipsis[data-v-63357b53]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-63357b53]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-63357b53],.press-multi-ellipsis--l3[data-v-63357b53]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-63357b53]{-webkit-line-clamp:3}.press-clearfix[data-v-63357b53]:after{clear:both;content:"";display:table}.press-hairline[data-v-63357b53],.press-hairline--bottom[data-v-63357b53],.press-hairline--left[data-v-63357b53],.press-hairline--right[data-v-63357b53],.press-hairline--surround[data-v-63357b53],.press-hairline--top[data-v-63357b53],.press-hairline--top-bottom[data-v-63357b53]{position:relative}.press-hairline--bottom[data-v-63357b53]:after,.press-hairline--left[data-v-63357b53]:after,.press-hairline--right[data-v-63357b53]:after,.press-hairline--surround[data-v-63357b53]:after,.press-hairline--top-bottom[data-v-63357b53]:after,.press-hairline--top[data-v-63357b53]:after,.press-hairline[data-v-63357b53]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-63357b53]:after{border-top-width:1px}.press-hairline--left[data-v-63357b53]:after{border-left-width:1px}.press-hairline--right[data-v-63357b53]:after{border-right-width:1px}.press-hairline--bottom[data-v-63357b53]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-63357b53]:after{border-width:1px 0}.press-hairline--surround[data-v-63357b53]:after{border-width:1px}.press-notify[data-v-63357b53]{text-align:center;word-wrap:break-word;padding:var(--notify-padding,6px 15px);font-size:var(--notify-font-size,14px);line-height:var(--notify-line-height,20px)}[data-v-63357b53] .press-notify__container{position:fixed;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.press-notify--primary[data-v-63357b53]{background-color:var(--notify-primary-background-color,#1989fa)}.press-notify--success[data-v-63357b53]{background-color:var(--notify-success-background-color,#07c160)}.press-notify--danger[data-v-63357b53]{background-color:var(--notify-danger-background-color,#ee0a24)}.press-notify--warning[data-v-63357b53]{background-color:var(--notify-warning-background-color,#ff976a)}',""]),t.exports=e},c24e:function(t,e,n){"use strict";n("94bf")},dc16:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));n("5e66"),n("b4ca"),n("414c"),n("e8e7"),n("745e"),n("1699");var o=n("12ef"),a=n("5e91");function i(){if(Object(o["b"])())return 0;var t=Object(a["a"])(),e=t.statusBarHeight;return e}function r(t,e){return new Promise((function(n){var o=t.$el;if(o){var a=o.querySelector(e);a||n({});var i=a.getBoundingClientRect();n(i)}else uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(t[0])}))}))}},fa91:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("press-card",{attrs:{"is-shadow":!1,"is-full":""}},[n("span",{staticClass:"uni-h6"},[t._v(" 仅保留 empty 图标，其他图标请使用 press-icon-plus。 ")])]),n("demo-block",{attrs:{title:"图标"}},[n("div",{staticClass:"icon-content"},t._l(t.pressIconList,(function(e,o){return n("div",{key:o,staticClass:"icon-item",on:{click:function(n){return t.switchActive(o,e)}}},[n("press-icon",{attrs:{type:e.name,color:t.activeIndex===o?"#007aff":"#5e6d82",size:"30"}}),n("span",{staticClass:"uni-mt-5 uni-subtitle",style:{color:t.activeIndex===o?"#007aff":"#5e6d82"}},[t._v(" "+t._s(t.checked?e.unicode:e.name)+" ")])],1)})),0)]),n("demo-block",{attrs:{title:"icon-music"}},[n("div",{staticClass:"icon-content flex-end"},[n("div",{staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),t.onCopyIconMusic()}}},[n("PressIconMusic")],1),n("div",{staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),function(){return t.onCopyIconMusic(["color","rgb(94, 109, 130)"])}()}}},[n("PressIconMusic",{attrs:{color:"rgb(94, 109, 130)"}})],1),n("div",{staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),t.onCopyIconMusic(["number","5"])}}},[n("PressIconMusic",{attrs:{number:5}})],1),n("div",{staticClass:"icon-item",on:{click:function(e){return e.stopPropagation(),t.onCopyIconMusic(["width","60px"],["height","60px"])}}},[n("PressIconMusic",{attrs:{width:"60px",height:"60px"}})],1)])])],1)},a=[],i=(n("2aaa"),n("06dc"),n("b4ca"),n("226c"),n("f1f0"),n("9932")),r=n("2d0d"),s=n("067d"),c=n("3902"),l=n("4f25"),d=n("2d55"),p={i18n:{"zh-CN":{copied:"复制成功"},"en-US":{copied:"Copied"}},components:{PressCard:r["a"],PressIconMusic:c["a"],PressIcon:s["a"],PressNotify:l["a"]},mixins:[d["a"]],data:function(){var t=Object.keys(i).map((function(t){return{name:t,unicode:i[t].unicode}}));return{pressIconList:t,activeIndex:-1,checked:!1}},mounted:function(){},methods:{switchActive:function(t,e){var n='<press-icon name="'.concat(e.name,'" />');this.copyIconTag(n)},onCopyIconMusic:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map((function(t){var e=t[0],n=t[1];return"".concat(e,'="').concat(n,'"')})).join(" "),a="<press-icon-music ".concat(o,"/>");this.copyIconTag(a)}}},u=p,b=(n("88c0"),n("2777")),f=Object(b["a"])(u,o,a,!1,null,"4d84b49b",null);e["default"]=f.exports}}]);