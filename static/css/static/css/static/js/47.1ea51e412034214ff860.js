webpackJsonp([47,77],{82:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{allCls:"plus-two",list:[{cls:"icon-info",tit:"完善信息",push:"/credit/userInfo",isOk:!1,param:"userInfo"},{cls:"icon-credit",tit:"查询央行征信",push:"/creditReport",isOk:!1,param:"userCredit"},{cls:"icon-bank",tit:"银行卡信息",push:"/credit/bankInfo",isOk:!1,param:"userBank"},{cls:"icon-alipay",tit:"支付宝认证",push:"/credit/alipay",isOk:!1,param:"userIdpic"},{cls:"icon-fund",tit:'<span class="tit">储蓄卡流水导入</span><em class="bot">推荐导入工资卡，需要开通网银</em>',push:"/credit/gjjCity",isOk:!1,param:"userFund"},{cls:"icon-chuxu",tit:"储蓄卡流水导入",push:"/credit/waterBank",isOk:!1,param:"userChuxu"},{cls:"icon-other",tit:"其他资料",push:"/credit/otherData",isOk:!1,param:"userOhter"}]}},methods:{findLocal:function(t){for(var s=0;s<t.length;s++)t[s].isOk=this.$store.state.creditStatus[t[s].param]}},mounted:function(){this.findLocal(this.list)}}},261:function(t,s,i){var e=i(1)(i(82),i(380),null,null);t.exports=e.exports},380:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("topComponent",{attrs:{title:"选填资料"}}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"listCom list-arrow list-icon list-plus no-top"},t._l(t.list,function(s){return i("listComponent",{class:[t.allCls,s.cls],attrs:{title:s.tit},on:{click:function(i){t.$router.push(s.push)}}},[i("template",{slot:"right"},[i("i",{directives:[{name:"show",rawName:"v-show",value:s.isOk,expression:"data.isOk"}],staticClass:"hasSuc"},[t._v("已完成")])])],2)}))],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"listTop"},[i("p",{staticClass:"tCenter col9"},[t._v("填写更多资料，审核通过率更高，借款费率更低")])])}]}}});