webpackJsonp([39,76],{95:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{data:{},knowShow:!1}},filters:{filterBankId:function(t){if(void 0===t)return"暂无";var a=t.substring(0,4),n=t.substring(4,8),s=t.substring(8,12),o=t.substring(12,16),e=t.substring(16,18);return a+" "+n+" "+s+" "+o+" "+e}},mounted:function(){var t=this.$route.params.id;this.data=JSON.parse(this.$store.state.borrowDetail[t])}}},275:function(t,a,n){var s=n(1)(n(95),n(330),null,null);t.exports=s.exports},330:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:"更多详情"}},[n("span",{staticClass:"save",attrs:{slot:"right"},on:{click:function(a){t.$router.push("/user/repayRecord")}},slot:"right"},[t._v("还款记录")])]),t._v(" "),n("div",{staticClass:"borrowInfoDetail"},[1===t.data.repayType?[n("p",[t._v("项目编号"),n("span",[t._v(t._s(t.data.orderNo))])]),t._v(" "),n("p",[t._v("申请金额(元)"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("sqje")}}},[t._v("?")]),n("span",[t._v(t._s(t.data.applyAmount))])]),t._v(" "),n("p",[t._v("借款期限(天)"),n("span",[t._v(t._s(t.data.borrowLimit))])]),t._v(" "),n("p",[t._v("放款时间"),n("span",[t._v(t._s(t.data.loanTime?t.data.loanTime:"待定"))])]),t._v(" "),n("p",[t._v("收款银行卡"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("skyhk")}}},[t._v("?")]),n("span",[t._v(t._s(t._f("filterBankId")(t.data.bankCard)))])]),t._v(" "),n("p",[t._v("逾期违约金(元)"),n("span",[t._v(t._s(t.data.breachAmount?t.data.breachAmount:0))])]),t._v(" "),n("p",[t._v("已归还金额(元)"),n("span",[t._v(t._s(t.data.refundAmount?t.data.refundAmount:0))])]),t._v(" "),n("p",[t._v("未归还金额(元)"),n("span",[t._v(t._s(t.data.leftAmount?t.data.leftAmount:0))])]),t._v(" "),n("p",[t._v("可用保证金(元)"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("kybzj")}}},[t._v("?")]),n("span",[t._v(t._s(t.data.rcvedDepositAmt-t.data.usedDepositAmt))])])]:[n("p",[t._v("申请金额(元)"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("sqje")}}},[t._v("?")]),n("span",[t._v(t._s(t.data.applyAmount))])]),t._v(" "),n("p",[t._v("借款期限(月)"),n("span",[t._v(t._s(t.data.borrowLimit))])]),t._v(" "),n("p",[t._v("借款年利率(%)"),n("span",[t._v(t._s(t.data.rate))])]),t._v(" "),n("p",[t._v("收款银行卡"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("skyhk")}}},[t._v("?")]),n("span",[t._v(t._s(t._f("filterBankId")(t.data.bankCard)))])]),t._v(" "),n("p",[t._v("放款时间"),n("span",[t._v(t._s(t.data.loanTime?t.data.loanTime:"待定"))])]),t._v(" "),n("p",[t._v("剩余期数(月)"),n("span",[t._v(t._s(t.data.borrowLimit))])]),t._v(" "),n("p",[t._v("项目编号"),n("span",[t._v(t._s(t.data.orderNo))])]),t._v(" "),n("p",[t._v("可用保证金(元)"),n("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("kybzj")}}},[t._v("?")]),n("span",[t._v(t._s(t.data.rcvedDepositAmt-t.data.usedDepositAmt))])])]],2),t._v(" "),t.knowShow?n("alertKnow",{attrs:{title:t.knowTit,content:t.knowCon},on:{goHide:function(a){t.knowShow=!t.knowShow}}}):t._e()],1)},staticRenderFns:[]}}});