webpackJsonp([50,77],{79:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{defaultVal:"请填写您取消上标的理由。如果本次取消订单是因为我们产品做得不好，您的建议能帮助我们进一步优化服务。",textArea:"",textNum:200,alertShow:!1}},methods:{goSubmit:function(){this.textArea===this.defaultVal||this.textArea.length<5?this.$dialog("字数不能小于5"):this.alertShow=!0}},watch:{textArea:"changeText"},mounted:function(){this.textArea=this.defaultVal}}},258:function(t,e,a){var s=a(1)(a(79),a(350),null,null);t.exports=s.exports},350:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"取消上标"}}),t._v(" "),a("div",{staticClass:"feedBack"},[t._m(0),t._v(" "),a("div",{staticClass:"feed-text",class:{col5:t.textArea!==t.defaultVal}},[a("textarea",{directives:[{name:"model",rawName:"v-model.tirm",value:t.textArea,expression:"textArea",modifiers:{tirm:!0}}],staticClass:"limitFeed",attrs:{maxlength:"200"},domProps:{value:t.textArea},on:{focus:function(e){t.textFocus()},blur:function(e){t.textBlur()},input:function(e){e.target.composing||(t.textArea=e.target.value)}}}),t._v(" "),a("p",{staticClass:"feed-num"},[t._v("还可以输入"),a("span",{staticClass:"limitNum"},[t._v(t._s(t.textNum))]),t._v("个字")])])]),t._v(" "),a("div",{staticClass:"btnWarp"},[a("span",{staticClass:"subBtn",on:{click:t.goSubmit}},[t._v("确定")])]),t._v(" "),t.alertShow?a("alertTip",{attrs:{name:"qxsb"},on:{btnClick1:function(e){t.$router.back()}}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"listTop"},[a("span",{staticClass:"col3"},[t._v("是否确认取消本次借款申请？取消之后借款本金不会发放，也不会产生任何费用")])])}]}}});