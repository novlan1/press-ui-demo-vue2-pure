(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90de3ef4"],{"1b94":function(A,t,e){var a=e("f4e4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var r=e("c69b").default;r("16c7192b",a,!0,{sourceMap:!1,shadowMode:!1})},6810:function(A,t,e){var a=e("bc85");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var r=e("c69b").default;r("15fd7eb2",a,!0,{sourceMap:!1,shadowMode:!1})},bbca:function(A,t,e){"use strict";e.r(t);var a=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:A.t("basicUsage")}},[e("PressAvatar",{attrs:{src:A.src}})],1),e("demo-block",{attrs:{title:A.t("shape")}},[e("PressAvatar",{attrs:{src:A.src,round:"","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{src:A.src,round:!1}})],1),e("demo-block",{attrs:{title:A.t("size")}},[e("PressAvatar",{attrs:{src:A.src,size:"30","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{src:A.src,size:"40","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{src:A.src,size:"50"}})],1),e("demo-block",{attrs:{title:A.t("icon")}},[e("PressAvatar",{attrs:{src:A.src,icon:"star-o","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{src:A.src,icon:"like-o"}})],1),e("demo-block",{attrs:{title:A.t("text")}},[e("PressAvatar",{attrs:{text:"Y","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{text:"G","random-background-color":"","custom-style":A.customStyle}}),e("PressAvatar",{attrs:{text:"杨","random-background-color":""}})],1),e("demo-block",{attrs:{title:A.t("error")}},[e("PressAvatar")],1),e("demo-block",{attrs:{title:A.t("avatarGroup")}},[e("PressAvatarGroup",{attrs:{urls:A.urls,"custom-style":"margin-bottom: 16px"},on:{showMore:A.showMore}}),e("PressAvatarGroup",{attrs:{urls:A.urls,gap:"0.6","custom-style":"margin-bottom: 16px"},on:{showMore:A.showMore}}),e("PressAvatarGroup",{attrs:{urls:A.urls,size:"50","custom-style":"margin-bottom: 16px"},on:{showMore:A.showMore}})],1)],1)},r=[],s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"press-avatar",class:["press-avatar--"+A.shape],style:A.avatarStyle,on:{click:function(t){return t.stopPropagation(),A.clickHandler(t)}}},[A._t("default",[A.mpAvatar&&A.allowMp?void 0:A.icon?e("PressIconPlus",{attrs:{name:A.icon,size:A.fontSize,color:A.color}}):A.text?e("span",{style:A.textStyle},[A._v(A._s(A.text))]):e("PressImage",{staticClass:"press-avatar__image",class:["press-avatar__image--"+A.shape],attrs:{round:!!A.round,src:A.avatarUrl||A.defaultUrl,width:A.size,radius:4,height:A.size,mode:A.mode},on:{error:A.errorHandler}})])],2)},o=[],c=(e("226c"),e("948b"),{props:{src:{type:String,default:""},round:{type:Boolean,default:!0},size:{type:[String,Number],default:"40"},mode:{type:String,default:"scaleToFill"},text:{type:String,default:""},backgroundColor:{type:String,default:"#c0c4cc"},color:{type:String,default:"#fff"},fontSize:{type:[String,Number],default:18},icon:{type:String,default:""},mpAvatar:{type:Boolean,default:!1},randomBackgroundColor:{type:Boolean,default:!1},defaultUrl:{type:String,default:""},colorIndex:{type:[String,Number],validator:function(A){return A<=19},default:-1},name:{type:String,default:"level"},customStyle:{type:String,default:""}}}),i=e("a451"),l=e("9b36"),n=e("f4d4"),u=["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],d=e("e137"),m=e("2561"),p="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",f={name:"PressAvatar",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressImage:d["a"],PressIconPlus:m["a"]},mixins:[c],emits:["click"],data:function(){return{colors:u,avatarUrl:this.src,allowMp:!1}},computed:{shape:function(){return this.round?"circle":"square"},imageStyle:function(){var A={};return A},avatarStyle:function(){var A=this.text,t=this.icon,e=this.colorIndex,a=this.backgroundColor,r=this.size,s=this.colors,o=this.randomBackgroundColor,c="transparent";(A||t)&&(o?(console.log("colorIndex",e),c=s[e>-1?e:Object(l["c"])(0,19)]):c=a);var u=Object(n["a"])([{width:Object(i["a"])(r),height:Object(i["a"])(r),background:c},this.customStyle]);return u},textStyle:function(){var A=this.fontSize,t=this.color;return Object(n["a"])({fontSize:A,color:t,textAlign:"center"})}},watch:{src:{immediate:!0,handler:function(A){this.avatarUrl=A,A||this.errorHandler()}}},created:function(){this.init()},methods:{addUnit:i["a"],init:function(){},isImg:function(){return-1!==this.src.indexOf("/")},errorHandler:function(){this.avatarUrl=this.defaultUrl||p},clickHandler:function(){this.$emit("click",this.name)}}},b=f,v=(e("bc6c"),e("2777")),g=Object(v["a"])(b,s,o,!1,null,"6ec090f6",null),h=g.exports,x=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"press-avatar-group",style:A.customStyle},A._l(A.showUrl,(function(t,a){return e("div",{key:a,staticClass:"press-avatar-group__item",style:A.getItemStyle(a)},[e("PressAvatar",{attrs:{size:A.size,round:"",mode:A.mode,src:A.getAvatarUrl(t)}}),A.showMore&&a===A.showUrl.length-1&&(A.urls.length>A.maxCount||A.extraValue>0)?e("div",{staticClass:"press-avatar-group__item__show-more",on:{click:A.clickHandler}},[e("span",{style:A.textStyle},[A._v(" "+A._s(A.extraText)+" ")])]):A._e()],1)})),0)},y=[],w=e("b67b"),S=(e("4920"),{props:{urls:{type:Array,default:function(){return[]}},maxCount:{type:[String,Number],default:5},round:{type:Boolean,default:!0},mode:{type:String,default:"scaleToFill"},showMore:{type:Boolean,default:!0},size:{type:[String,Number],default:40},keyName:{type:String,default:""},gap:{type:[String,Number],validator:function(A){return A>=0&&A<=1},default:"0.5"},extraValue:{type:[Number,String],default:""},customStyle:{type:String,default:""}}}),k={name:"PressAvatarGroup",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressAvatar:h},mixins:[S],emits:["showMore"],data:function(){return{}},computed:{showUrl:function(){return this.urls.slice(0,this.maxCount)},extraText:function(){var A=this.extraValue,t=this.urls,e=this.showUrl;return A||t.length-e.length},textStyle:function(){return Object(n["a"])({color:"#fff",fontSize:.4*this.size,textAlign:"center"})}},methods:{addUnit:i["a"],getAvatarUrl:function(A){return"object"===Object(w["a"])(A)?A[this.keyName||"url"]:A},clickHandler:function(){this.$emit("showMore")},getItemStyle:function(A){var t=this.size,e=this.gap,a=Object(n["a"])({marginLeft:0===A?0:Object(i["a"])(-t*e),width:Object(i["a"])(t),height:Object(i["a"])(t)});return console.log("res",a),a}}},M=k,G=(e("c7a5"),Object(v["a"])(M,x,y,!1,null,"e8cdf826",null)),R=G.exports,B="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_0ab8e66284a3617ed9.jpeg",O={i18n:{"zh-CN":{shape:"头像形状",size:"头像尺寸",icon:"图标头像",text:"文字头像",error:"加载失败",avatarGroup:"头像组"},"en-US":{shape:"Shape",size:"Size",icon:"Icon",text:"Text",error:"Error",avatarGroup:"Avatar Group"}},components:{PressAvatar:h,PressAvatarGroup:R},data:function(){return{src:B,customStyle:"margin-right: 20px",urls:[B,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_ef8e6956717db34745.jpg",B,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_7157200e469d0468b3.jpg",B,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",B]}},methods:{showMore:function(){this.onGTip("[showMore]")}}},I=O,z=Object(v["a"])(I,a,r,!1,null,"254eb882",null);t["default"]=z.exports},bc6c:function(A,t,e){"use strict";e("1b94")},bc85:function(A,t,e){var a=e("ee2b");t=a(!1),t.push([A.i,".press-avatar-group[data-v-e8cdf826]{display:-webkit-box;display:-ms-flexbox;display:flex}.press-avatar-group__item[data-v-e8cdf826]{margin-left:-10px;position:relative}.press-avatar-group__item--no-indent[data-v-e8cdf826]{margin-left:0}.press-avatar-group__item__show-more[data-v-e8cdf826]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:100px}",""]),A.exports=t},c7a5:function(A,t,e){"use strict";e("6810")},f4e4:function(A,t,e){var a=e("ee2b");t=a(!1),t.push([A.i,".press-avatar[data-v-6ec090f6]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.press-avatar--circle[data-v-6ec090f6]{border-radius:100px}.press-avatar--square[data-v-6ec090f6]{border-radius:4px}.press-avatar[data-v-6ec090f6]  press-image,.press-avatar[data-v-6ec090f6]  press-transition{height:100%}.press-avatar__image--circle[data-v-6ec090f6]{border-radius:100px}.press-avatar__image--square[data-v-6ec090f6]{border-radius:4px}",""]),A.exports=t}}]);