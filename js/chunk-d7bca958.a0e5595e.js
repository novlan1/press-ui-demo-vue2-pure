(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7bca958"],{"359e":function(t,o,e){var i=e("8d31");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=e("c69b").default;c("bf7e0c34",i,!0,{sourceMap:!1,shadowMode:!1})},"44e15":function(t,o,e){"use strict";e("359e")},"8d31":function(t,o,e){var i=e("ee2b");o=i(!1),o.push([t.i,".button[data-v-90d70b06]{margin-bottom:10px}.debug[data-v-90d70b06]{color:#fff}",""]),t.exports=o},d895:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:t.t("basicUsage")}},[e("PressCell",{attrs:{title:t.t("toggleDirection"),"is-link":""},on:{click:function(o){return t.switchBtn(0)}}}),e("PressCell",{attrs:{title:t.t("changeColor"),"is-link":""},on:{click:t.switchColor}})],1),e("PressFab",{ref:"fabRef",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:t.trigger,fabClick:t.fabClick}}),e("PressFab",{attrs:{"init-x":t.slotInitX},on:{fabClick:t.fabClickSlot}},[e("span",{staticClass:"debug"},[t._v("OK")])])],1)},c=[],n=(e("e087"),e("5af6")),a=e("8ba6"),l=e("7d0d"),r=e("4e29"),s={i18n:{"zh-CN":{toggleDirection:"切换方向",changeColor:"修改颜色",prompt:"提示",you:"您",image:"相册",home:"首页",star:"收藏",modalContent:function(t,o){return"你".concat(o?"选中了":"取消了").concat(t)}},"en-US":{toggleDirection:"Direction",changeColor:"Color",prompt:"Prompt",selected:"selected",cancelled:"cancelled",you:"You",image:"image",home:"home",star:"star",modalContent:function(t,o){return"You ".concat(o?"selected":"cancelled"," ").concat(t)}}},components:{PressFab:n["a"],PressCell:a["a"]},data:function(){var t;return{title:"press-fab",horizontal:"right",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_394e9b73a2b402c417.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ddaf193c855d2d4b93.png",text:this.t("image"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_48f3dce2ae13561480.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_119ad562534f721c7f.png",text:this.t("home"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_069e81d6aae9e308e1.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_eda1e7d95cb62dc6e1.png",text:this.t("star"),active:!1}],slotInitX:Math.max((null===(t=Object(r["f"])())||void 0===t?void 0:t.windowWidth)-66,0)}},onBackPress:function(){return!!this.$refs.fabRef.isShow&&(this.$refs.fabRef.close(),!0)},methods:{trigger:function(t){var o=this,e=this.t,i=this.content;console.log("[trigger] e: ",t),this.content[t.index].active=!t.item.active,uni.showModal({title:e("prompt"),content:this.t("modalContent",t.item.text,i[t.index].active),confirmText:e("confirm"),cancelText:e("cancel"),success:function(t){t.confirm?o.onGTip("confirm"):t.cancel&&o.onGTip("cancel")}})},fabClick:function(){console.log("[fabClick]"),this.onGTip("[click]")},fabClickSlot:function(){console.log("[fabClickSlot]"),this.onGTip("[click]")},switchBtn:function(t,o){var e=this.$refs.fabRef,i=e.onClick,c=e.isShow;c||null===i||void 0===i||i(),0===t?this.direction="horizontal"===this.direction?"vertical":"horizontal":(this.horizontal=t,this.vertical=o),Object(l["b"])(this)},switchColor:function(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}},h=s,d=(e("44e15"),e("33b6")),f=Object(d["a"])(h,i,c,!1,null,"90d70b06",null);o["default"]=f.exports}}]);