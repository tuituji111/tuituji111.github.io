webpackJsonp([35,76],{107:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{defaultVal:"感谢您对"+this.appName+"的关注，您的意见和建议能帮助我们做的更好！",textArea:"",textNum:200}},methods:{goSave:function(){var t=this;this.textArea===this.defaultVal||this.textArea.length<5?this.$dialog("字数不能小于5"):(this.$dialog(["提交成功","true"]),setTimeout(function(){t.$router.push("/user")},1800))}},watch:{textArea:"changeText"},mounted:function(){this.textArea=this.defaultVal}}},290:function(t,e,a){var s=a(1)(a(107),a(323),null,null);t.exports=s.exports},323:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"内容合作"}},[a("span",{staticClass:"save",attrs:{slot:"right"},on:{click:t.goSave},slot:"right"},[t._v("提交")])]),t._v(" "),a("div",{staticClass:"feedBack mt20"},[a("div",{staticClass:"feed-text",class:{col5:t.textArea!==t.defaultVal}},[a("textarea",{directives:[{name:"model",rawName:"v-model.tirm",value:t.textArea,expression:"textArea",modifiers:{tirm:!0}}],staticClass:"limitFeed",attrs:{maxlength:"200"},domProps:{value:t.textArea},on:{focus:function(e){t.textFocus()},blur:function(e){t.textBlur()},input:function(e){e.target.composing||(t.textArea=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"feed-num"},[t._v("还可以输入"),a("span",{staticClass:"limitNum"},[t._v(t._s(t.textNum))]),t._v("个字")])])],1)},staticRenderFns:[]}}});