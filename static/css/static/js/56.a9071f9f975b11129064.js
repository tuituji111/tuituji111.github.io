webpackJsonp([56,77],{143:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{goLogin:function(){this.$router.push("creditReport/login")},goCover:function(t){this.$router.push("creditReport/cover")},goHelp:function(){this.$router.push("creditReport/helps")}}}},357:function(t,s,n){var o=n(1)(n(143),n(505),null,null);t.exports=o.exports},505:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:"简版个人征信报告"}},[n("i",{staticClass:"ask",attrs:{slot:"right"},on:{click:t.goHelp},slot:"right"})]),t._v(" "),n("p",{staticClass:"reportBanner"},[n("span",{staticClass:"look",on:{click:t.goLogin}},[n("i"),t._v("登录央行征信查看最新报告")])]),t._v(" "),n("dl",{staticClass:"reportList"},[t._m(0),t._v(" "),n("dd",{on:{click:function(s){t.goCover(1)}}},[n("span",{staticClass:"time"},[t._v("2016-08-23")]),t._v("2015070703000178126968")]),t._v(" "),n("dd",{on:{click:function(s){t.goCover(1)}}},[n("span",{staticClass:"time"},[t._v("2016-08-23")]),t._v("2015070703000178126968")]),t._v(" "),n("dd",{on:{click:function(s){t.goCover(1)}}},[n("span",{staticClass:"time"},[t._v("2016-08-23")]),t._v("2015070703000178126968")])]),t._v(" "),n("div",{staticClass:"btnWarp"},[n("span",{staticClass:"subBtn",on:{click:t.goLogin}},[t._v("申请最新征信报告")])]),t._v(" "),n("div",{staticClass:"btnWarp"},[n("span",{staticClass:"subBtn greenBg",on:{click:t.goLogin}},[t._v("上传征信报告")])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("dt",[t._v("历史征信报告"),n("span",[t._v("未记录")])])}]}}});