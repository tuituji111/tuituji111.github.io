webpackJsonp([41,76],{91:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{phone:"",pwd:"",sms:"",showPwd:!0}},methods:{goSubmit:function(){var e=/^[1][3578][0-9]{9}$/,t=/^[\d\D]{6,12}$/,o=/^[0-9]{4,8}$/;e.test(this.phone)===!1?this.$dialog("手机格式不正确"):o.test(this.sms)===!1?this.$dialog("验证码不正确"):t.test(this.pwd)===!1?this.$dialog("密码格式不正确"):this.$router.push("/login")},smsAjax:function(){console.log("在此发送短信ajax--组件中已$emit该函数")}}}},270:function(e,t,o){var s=o(1)(o(91),o(309),null,null);e.exports=s.exports},309:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container bgF"},[o("topComponent",{attrs:{title:"忘记密码",back:"取消"}}),e._v(" "),o("ul",{staticClass:"formCom form-login form-mini mt10"},[o("li",[o("label",[o("span",[e._v("帐号")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.phone,expression:"phone",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),o("li",[o("label",[o("span",[e._v("验证码")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sms,expression:"sms",modifiers:{trim:!0}}],attrs:{type:"number",placeholder:"请输入短信验证码"},domProps:{value:e.sms},on:{input:function(t){t.target.composing||(e.sms=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("sendSMS",{on:{sentAjax:e.smsAjax}})],1),e._v(" "),o("li",{class:e.showPwd?"icon-eye1":"icon-eye2"},[o("label",[o("span",[e._v("设置密码")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pwd,expression:"pwd",modifiers:{trim:!0}}],attrs:{type:e.showPwd?"password":"text",placeholder:"请输入6-12位数字与字母组合密码"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),o("i",{on:{click:function(t){e.showPwd=!e.showPwd}}})])])]),e._v(" "),o("div",{staticClass:"btnWarp"},[o("span",{staticClass:"subBtn",on:{click:e.goSubmit}},[e._v("完成")])])],1)},staticRenderFns:[]}}});