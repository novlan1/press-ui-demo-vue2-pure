(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e43290"],{9774:function(e,t,a){var o=a("b71c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("c69b").default;i("26697f08",o,!0,{sourceMap:!1,shadowMode:!1})},"9e7f":function(e,t,a){"use strict";a("9774")},a337:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:e.t("basicUsage"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.basic},on:{change:function(t){return e.onChange(t,"basic")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("disabled"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.disabled,disabled:""},on:{change:function(t){return e.onChange(t,"disabled")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("customShape"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{shape:"square",value:e.checkedMap.shape},on:{change:function(t){return e.onChange(t,"shape")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("customColor"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.color,"checked-color":"#07c160"},on:{change:function(t){return e.onChange(t,"color")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("customIconSize"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.size,"icon-size":25},on:{change:function(t){return e.onChange(t,"size")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("disableLabel"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.noLabel,"label-disabled":""},on:{change:function(t){return e.onChange(t,"noLabel")}}},[e._v(" "+e._s(e.t("checkbox"))+" ")])],1),a("demo-block",{attrs:{title:e.t("title3"),"section-style":e.sectionStyle}},[a("press-checkbox-group",{attrs:{value:e.checkedMap.group},on:{change:function(t){return e.onChange(t,"group")}}},[a("press-checkbox",{attrs:{name:"a","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" a ")]),a("press-checkbox",{attrs:{name:"b","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" b ")]),a("press-checkbox",{attrs:{name:"c","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" c ")])],1)],1),a("demo-block",{attrs:{title:e.t("title4"),"section-style":e.sectionStyle}},[a("press-checkbox-group",{attrs:{value:e.checkedMap.groupMax,max:2},on:{change:function(t){return e.onChange(t,"groupMax")}}},[a("press-checkbox",{attrs:{name:"a","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" A ")]),a("press-checkbox",{attrs:{name:"b","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" B ")]),a("press-checkbox",{attrs:{name:"c","custom-style":e.customStyle}},[e._v(" "+e._s(e.t("checkbox"))+" C ")])],1)],1)],1)},i=[],r=a("6a49"),s=a("b9bf"),n={i18n:{"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}},components:{PressCheckbox:r["a"],PressCheckboxGroup:s["a"]},data:function(){return{checkedMap:{basic:!0,shape:!0,size:!0,color:!0,noLabel:!0,disabled:!0,group:["a","b"],groupMax:[]},sectionStyle:"margin: 1px 18px;",customStyle:"margin-bottom: 8px;"}},methods:{onChange:function(e,t){console.log("[onChange.val]",e,t),this.checkedMap[t]=e}}},l=n,d=a("2777"),c=Object(d["a"])(l,o,i,!1,null,"b52f8754",null);t["default"]=c.exports},b71c:function(e,t,a){var o=a("ee2b");t=o(!1),t.push([e.i,'.van-ellipsis[data-v-d5daeb3e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-d5daeb3e]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-d5daeb3e],.van-multi-ellipsis--l3[data-v-d5daeb3e]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-d5daeb3e]{-webkit-line-clamp:3}.van-clearfix[data-v-d5daeb3e]:after{clear:both;content:"";display:table}.van-hairline[data-v-d5daeb3e],.van-hairline--bottom[data-v-d5daeb3e],.van-hairline--left[data-v-d5daeb3e],.van-hairline--right[data-v-d5daeb3e],.van-hairline--surround[data-v-d5daeb3e],.van-hairline--top[data-v-d5daeb3e],.van-hairline--top-bottom[data-v-d5daeb3e]{position:relative}.van-hairline--bottom[data-v-d5daeb3e]:after,.van-hairline--left[data-v-d5daeb3e]:after,.van-hairline--right[data-v-d5daeb3e]:after,.van-hairline--surround[data-v-d5daeb3e]:after,.van-hairline--top-bottom[data-v-d5daeb3e]:after,.van-hairline--top[data-v-d5daeb3e]:after,.van-hairline[data-v-d5daeb3e]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-d5daeb3e]:after{border-top-width:1px}.van-hairline--left[data-v-d5daeb3e]:after{border-left-width:1px}.van-hairline--right[data-v-d5daeb3e]:after{border-right-width:1px}.van-hairline--bottom[data-v-d5daeb3e]:after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-d5daeb3e]:after{border-width:1px 0}.van-hairline--surround[data-v-d5daeb3e]:after{border-width:1px}.press-ellipsis[data-v-d5daeb3e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-d5daeb3e]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-d5daeb3e],.press-multi-ellipsis--l3[data-v-d5daeb3e]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-d5daeb3e]{-webkit-line-clamp:3}.press-clearfix[data-v-d5daeb3e]:after{clear:both;content:"";display:table}.press-hairline[data-v-d5daeb3e],.press-hairline--bottom[data-v-d5daeb3e],.press-hairline--left[data-v-d5daeb3e],.press-hairline--right[data-v-d5daeb3e],.press-hairline--surround[data-v-d5daeb3e],.press-hairline--top[data-v-d5daeb3e],.press-hairline--top-bottom[data-v-d5daeb3e]{position:relative}.press-hairline--bottom[data-v-d5daeb3e]:after,.press-hairline--left[data-v-d5daeb3e]:after,.press-hairline--right[data-v-d5daeb3e]:after,.press-hairline--surround[data-v-d5daeb3e]:after,.press-hairline--top-bottom[data-v-d5daeb3e]:after,.press-hairline--top[data-v-d5daeb3e]:after,.press-hairline[data-v-d5daeb3e]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-d5daeb3e]:after{border-top-width:1px}.press-hairline--left[data-v-d5daeb3e]:after{border-left-width:1px}.press-hairline--right[data-v-d5daeb3e]:after{border-right-width:1px}.press-hairline--bottom[data-v-d5daeb3e]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-d5daeb3e]:after{border-width:1px 0}.press-hairline--surround[data-v-d5daeb3e]:after{border-width:1px}.press-checkbox-group--horizontal[data-v-d5daeb3e]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}',""]),e.exports=t},b9bf:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"press-checkbox-group-index"},[a("div",{class:e.groupClass},[e._t("default")],2)])},i=[],r=(a("226c"),a("948b"),a("414c"),a("79cc"),a("7616")),s=a("8d73"),n=a("06c6"),l={name:"PressCheckboxGroup",mixins:[Object(s["b"])(n["a"])],props:{max:{type:Number,default:0},value:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},direction:{type:String,default:"vertical"}},emits:[],data:function(){return{}},computed:{groupClass:function(){var e=this.direction;return r["a"].bem2("checkbox-group",[{horizontal:"horizontal"===e}])}},watch:{disabled:{handler:function(){this.updateChildren()}},value:{handler:function(){this.updateChildren()}}},created:function(){this.children=[]},methods:{updateChildren:function(){var e=this;this.children.forEach((function(t){return e.updateChild(t)}))},updateChild:function(e){var t=this.value,a=this.disabled,o=this.direction;e.setData({dataValue:-1!==t.indexOf(e.name),parentDisabled:a,direction:o})}}},d=l,c=(a("9e7f"),a("2777")),b=Object(c["a"])(d,o,i,!1,null,"d5daeb3e",null);t["a"]=b.exports}}]);