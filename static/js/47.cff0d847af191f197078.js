webpackJsonp([47,76],{79:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checked:!0,lists:[{icon:"icon01",isLock:!1,isOk:!1,step:"第一步",tit:"身份认证",param:"userInfo",push:"/credit/userInfo",err:"请进行身份认证"},{icon:"icon02",isLock:!0,isOk:!1,step:"第二步",tit:"人脸识别",param:"userScan",push:"/credit/scan",err:"请进行人脸识别"},{icon:"icon03",isLock:!0,isOk:!1,step:"第三步",tit:"紧急联系人",param:"userContacts",push:"/credit/contacts",err:"请填写紧急联系人"},{icon:"icon04",isLock:!0,isOk:!1,step:"第四步",tit:"手机认证",param:"userPhone",push:"/credit/mobile",err:"请进行手机认证"},{icon:"icon05",isLock:!0,isOk:!1,step:"第五步",tit:"工作信息",param:"userWork",push:"/credit/work",err:"请填写工作信息"}]}},methods:{goApply:function(){this.checked===!1?this.$dialog("请阅读并同意协议"):this.lists[0].isOk===!1?this.$dialog(this.lists[0].err):this.lists[1].isOk===!1?this.$dialog(this.lists[1].err):this.lists[2].isOk===!1?this.$dialog(this.lists[2].err):this.lists[3].isOk===!1?this.$dialog(this.lists[3].err):this.lists[4].isOk===!1?this.$dialog(this.lists[4].err):this.$router.push("/loan/submitApply")},showClass:function(s){for(var t=0;t<this.lists.length;t++){if(this.$store.state.creditStatus[this.lists[t].param]===!1){this.lists[t].isLock=!1;break}this.lists[t].isLock=!1,this.lists[t].isOk=!0}},pushLink:function(s){var t=!1;if(this.lists[s].isLock===!0){for(var i=0;i<s;i++)if(this.lists[i].isOk===!1){this.callDialog(this.lists[i].err),t=!0;break}t===!1&&this.$router.push(this.lists[s].push)}else this.$router.push(this.lists[s].push)}},computed:{watchLocal:function(){for(var s={},t=0;t<this.lists.length;t++)s[t]=this.$store.state.creditStatus[this.lists[t].param];return s}},watch:{watchLocal:{handler:function(s,t){s!==t&&this.showClass(this.lists)},deep:!0}},created:function(){this.showClass(this.lists)}}},257:function(s,t,i){var e=i(1)(i(79),i(340),null,null);s.exports=e.exports},340:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"container"},[i("topComponent",{attrs:{title:"必填资料"}}),s._v(" "),i("div",{staticClass:"listTop"},[i("p",{staticClass:"tCenter col9"},[s._v(s._s(s.appName)+"承诺你的信息安全")])]),s._v(" "),i("ul",{staticClass:"mustInfo"},s._l(s.lists,function(t,e){return i("li",{class:{lock:t.isLock,arrow:!t.isLock,wait:!t.isLock,ok:t.isOk},on:{click:function(t){s.pushLink(e)}}},[i("i",{class:t.icon}),i("span",[s._v(s._s(t.step))]),i("b",[s._v(s._s(t.tit))])])})),s._v(" "),i("p",{staticClass:"infoLink tCenter"},[i("span",{staticClass:"arrow",on:{click:function(t){s.$router.push("/loan/dataSelect")}}},[s._v("选填资料")]),s._v("资料越完善，审核通过率越高，借款费用越低")]),s._v(" "),i("div",{staticClass:"btnWarp"},[i("span",{staticClass:"subBtn",class:{grayBg:!s.checked},on:{click:s.goApply}},[s._v("申请借款")])]),s._v(" "),i("div",{staticClass:"agreeMent mt20",class:{no:!s.checked},on:{click:function(t){s.checked=!s.checked}}},[s._v("\n    我已阅读并同意"),i("span",{staticClass:"blue",on:{click:function(t){t.stopPropagation(),s.goAgreem("/agreement")}}},[s._v("《个人信息收集授权协议》")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.checked)?s._i(s.checked,null)>-1:s.checked},on:{change:function(t){var i=s.checked,e=t.target,c=!!e.checked;if(Array.isArray(i)){var a=null,r=s._i(i,a);e.checked?r<0&&(s.checked=i.concat([a])):r>-1&&(s.checked=i.slice(0,r).concat(i.slice(r+1)))}else s.checked=c}}})])],1)},staticRenderFns:[]}}});