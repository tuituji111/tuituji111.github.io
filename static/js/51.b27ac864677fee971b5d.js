webpackJsonp([51,76],{58:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:""}},methods:{goSubmit:function(){console.log("待开发")},smsAjax:function(){console.log("在此发送短信ajax--组件中已$emit该函数")}}}},212:function(t,e,o){var n=o(1)(o(58),o(271),null,null);t.exports=n.exports},271:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("topComponent",{attrs:{title:"快捷验证"}}),t._v(" "),o("p",{staticClass:"listTop"},[t._v("您的手机号码：137****7081")]),t._v(" "),o("ul",{staticClass:"formCom form-reportSMS"},[o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("sendSMS",{attrs:{btn:"发送验证码"},on:{sentAjax:t.smsAjax}})],1)]),t._v(" "),o("div",{staticClass:"btnWarp"},[o("span",{staticClass:"subBtn",on:{click:t.goSubmit}},[t._v("提交")])])],1)},staticRenderFns:[]}}});