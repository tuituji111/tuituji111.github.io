webpackJsonp([60,76],{48:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{datas:[{cls:"icon-info",tit:"个人信息",push:"/credit/userInfo",isOk:!1,param:"userInfo"},{cls:"icon-work",tit:"工作信息",push:"/credit/work",isOk:!1,param:"userWork"},{cls:"icon-shebao",tit:"社保授权",push:"/credit/sbsqCity",isOk:!1,param:"userSB"},{cls:"icon-other",tit:"其他资料",push:"/credit/otherData",isOk:!1,param:"userOhter"}]}},mounted:function(){for(var t=0;t<this.datas.length;t++)this.datas[t].isOk=this.$store.state.creditStatus[this.datas[t].param]}}},196:function(t,s,e){var i=e(1)(e(48),e(331),null,null);t.exports=i.exports},331:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("topComponent",{attrs:{title:"代理业务",showLeft:!1}}),t._v(" "),e("ul",{staticClass:"listCom list-arrow list-icon no-top"},t._l(t.datas,function(s){return e("listComponent",{class:s.cls,attrs:{title:s.tit},on:{click:function(e){t.$router.push(s.push)}}},[e("template",{slot:"right"},[e("i",{directives:[{name:"show",rawName:"v-show",value:s.isOk,expression:"data.isOk"}],staticClass:"hasSuc"},[t._v("已完成")])])],2)})),t._v(" "),e("footComponent",{attrs:{idx:1}})],1)},staticRenderFns:[]}}});