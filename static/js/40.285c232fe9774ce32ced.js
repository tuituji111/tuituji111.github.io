webpackJsonp([40,76],{82:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"",pwd:"",code:"",showPwd:!0,canvas:{}}},methods:{logIn:function(){/^[1][3578][0-9]{9}$/.test(this.name)===!1?this.$dialog("帐号不正确"):/^[\d\D]{6,12}$/.test(this.pwd)===!1?this.$dialog("密码不正确"):this.code.toUpperCase()!==this.canvasCode.codeNums.toUpperCase()?this.$dialog("验证码不正确"):this.$router.push("/loan")},goCancel:function(){this.$router.push("/loan")},sendCode:function(e){this.code=e}}}},233:function(e,t,n){var o=n(1)(n(82),n(354),null,null);e.exports=o.exports},354:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container bgF"},[n("topComponent",{attrs:{title:"登录",showLeft:!1}},[n("span",{staticClass:"back",attrs:{slot:"left"},on:{click:e.goCancel},slot:"left"},[e._v("取消")])]),e._v(" "),n("ul",{staticClass:"formCom form-login form-mini"},[n("li",{staticClass:"icon-clear"},[n("label",[n("span",[e._v("账号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.name,expression:"name",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("i",{on:{click:function(t){e.name=""}}})])]),e._v(" "),n("li",{class:[{"icon-eye1":e.showPwd},{"icon-eye2":!e.showPwd}]},[n("label",[n("span",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pwd,expression:"pwd",modifiers:{trim:!0}}],attrs:{type:e.showPwd?"password":"text",placeholder:"请输入6-12位密码"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("i",{on:{click:function(t){e.showPwd=!e.showPwd}}})])]),e._v(" "),n("li",[n("canvasCode",{on:{codeHasChange:e.sendCode}})],1)]),e._v(" "),n("div",{staticClass:"btnWarp"},[n("span",{staticClass:"subBtn",on:{click:e.logIn}},[e._v("登录")])]),e._v(" "),n("div",{staticClass:"forgetWarp"})],1)},staticRenderFns:[]}}});