webpackJsonp([56,76],{63:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:"",power:!0}},methods:{goSubmit:function(){this.power===!0&&console.log("暂时还未开发")},checkCode:function(){var t=/^[0-9a-zA-Z]{6}$/;t.test(this.code)===!0?this.power=!1:this.power=!0}},watch:{code:"checkCode"}}},240:function(t,e,s){var o=s(1)(s(63),s(324),null,null);t.exports=o.exports},324:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:"获取报告"}}),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"formCom"},[s("li",[s("label",[s("span",[t._v("身份验证码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"6位数字与英文组合"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])])]),t._v(" "),s("p",{staticClass:"formTips"},[t._v("如您未重新申请报告且后续查看，则验证码可随意输入")]),t._v(" "),s("div",{staticClass:"btnWarp"},[s("span",{staticClass:"subBtn",class:{grayBg:t.power},on:{click:t.goSubmit}},[t._v("获取报告")])]),t._v(" "),s("p",{staticClass:"formMore"},[t._v("未收到验证码？")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"listTop"},[t._v("您的个人信用报告已经生成，请输入身份验证码查询。身份验证码自生成之日起"),s("span",{staticClass:"blue"},[t._v("7天后失效")])])}]}}});