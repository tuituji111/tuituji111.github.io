webpackJsonp([61,77],{59:function(t,s,o){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=o(10);e(i);s.default={data:function(){return{datas:[{cls:"icon-info",tit:"个人信息",push:"/credit/userInfo",isOk:!1,param:"userInfo"},{cls:"icon-work",tit:"代理信息",push:"/credit/work",isOk:!1,param:"userWork"},{cls:"icon-other",tit:"查询代理的账单",push:"/credit/otherData",isOk:!1,param:"userOhter"}]}},mounted:function(){console.log(this.$cookies.get("token"))},methods:{gologin:function(){this.$router.push("/login")}}}},236:function(t,s,o){var e=o(1)(o(59),o(355),null,null);t.exports=e.exports},355:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"container"},[o("topComponent",{attrs:{title:"代理业务",showLeft:!1}},[o("span",{staticClass:"save",attrs:{slot:"right"},on:{click:t.gologin},slot:"right"},[t._v("登录")])]),t._v(" "),o("ul",{staticClass:"listCom list-arrow list-icon no-top"},t._l(t.datas,function(s){return o("listComponent",{class:s.cls,attrs:{title:s.tit},on:{click:function(o){t.$router.push(s.push)}}},[o("template",{slot:"right"},[o("i",{directives:[{name:"show",rawName:"v-show",value:s.isOk,expression:"data.isOk"}],staticClass:"hasSuc"},[t._v("已完成")])])],2)})),t._v(" "),o("footComponent",{attrs:{idx:1}})],1)},staticRenderFns:[]}}});