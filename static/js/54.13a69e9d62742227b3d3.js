webpackJsonp([54,76],{66:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"",pass:"",code:""}},methods:{goSubmit:function(){console.log("待开发")},sendCode:function(t){this.code=t,console.log(this.code)}}}},244:function(t,e,s){var a=s(1)(s(66),s(346),null,null);t.exports=a.exports},346:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:"央行征信登录"}}),t._v(" "),s("ul",{staticClass:"formCom form-report mt20"},[s("li",{staticClass:"user"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入登录名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("li",{staticClass:"pass"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pass,expression:"pass",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("li",{staticClass:"safe"},[s("canvasCode",{attrs:{placeh:"请输入验证码",isTit:"false"},on:{codeHasChange:t.sendCode}})],1)]),t._v(" "),s("div",{staticClass:"btnWarp"},[s("span",{staticClass:"subBtn",on:{click:t.goSubmit}},[t._v("确定提交")])]),t._v(" "),s("div",{staticClass:"btnWarp"},[s("span",{staticClass:"subBtn blueLight",on:{click:function(e){t.$router.push("regStep1")}}},[t._v("注册征信查询账号")])])],1)},staticRenderFns:[]}}});