webpackJsonp([8,77],{121:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{tit:"",isOn:!1},{tit:"",isOn:!1}],hasTouch:"ontouchstart"in window,goTouchStart:"ontouchstart"in window?"touchstart":"mousedown",goTouchMove:"ontouchstart"in window?"touchmove":"mousemove",goTouchEnd:"ontouchstart"in window?"touchend":"mouseup",eachLeft:{},index:0,flag:!1,$width:0,$length:0,$start:0,$end:0}},methods:{tStart:function(t){t.preventDefault(),this.flag=!0,this.$start=this.hasTouch?t.changedTouches[0].screenX:t.screenX},tMove:function(t){this.flag&&(this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,(this.$end-this.$start>0&&0!==this.index||this.$end-this.$start<0&&this.index!==this.$length-1)&&(this.$refs.ul.style.marginLeft=this.eachLeft[this.index]+this.$end-this.$start+"px"))},tEnd:function(t){this.flag===!0&&(this.flag=!1,this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,this.$end-this.$start>20?(0!==this.index&&(this.lists[this.index].isOn=!1,this.index--,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):this.$start-this.$end>20?(this.index!==this.$length-1&&(this.lists[this.index].isOn=!1,this.index++,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):(console.log("效果测试用的新窗口打开，【实际需要router/本窗口打开其它链接】"),window.open(this.lists[this.index].href,"_blank"),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])))},goAnimate:function(t,e){var n=this,s=e-t,i=200,o=0,h=10,r=s/i*h,a=setInterval(function(){o+=h,o===i?(clearInterval(a),n.$refs.ul.style.marginLeft=e+"px"):(t+=r,n.$refs.ul.style.marginLeft=t+"px")},h)}},mounted:function(){this.$width=this.$refs.banner.clientWidth,this.$length=this.$refs.ul.childElementCount,this.lists[this.index].isOn=!0;for(var t=0;t<this.$length;t++)this.eachLeft[t]=-this.$width*t;this.$refs.banner.children[0].children[0].style.width=this.$width+"px";for(var e=this,n=document.getElementById("bannerTag").getElementsByTagName("span"),s=document.getElementById("banner"),i=0;i<n.length;i++)n[i].idx=i,n[i].addEventListener(this.goTouchStart,function(t){t.stopPropagation(),e.index!==this.idx&&(e.lists[e.index].isOn=!1,e.index=this.idx,e.lists[e.index].isOn=!0,e.goAnimate(parseInt(e.$refs.ul.style.marginLeft),e.eachLeft[e.index]))});s.addEventListener(this.goTouchStart,this.tStart),document.addEventListener(this.goTouchMove,this.tMove),document.addEventListener(this.goTouchEnd,this.tEnd)},beforeDestroy:function(){document.removeEventListener(this.goTouchMove,this.tMove),document.removeEventListener(this.goTouchEnd,this.tEnd)}}},162:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(332),o=s(i);e.default={data:function(){return{list:[{cls:"",tit:"1111",con:"111111",push:"/loan/micro"},{cls:"icon02",tit:"22",con:"22222",push:"/loan/samll"},{cls:"icon03",tit:"3",con:"33333333",push:"/loan/large"}]}},components:{loanBanner:o.default}}},332:function(t,e,n){var s=n(1)(n(121),n(476),null,null);t.exports=s.exports},377:function(t,e,n){var s=n(1)(n(162),n(422),null,null);t.exports=s.exports},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:"首页",showLeft:!1}}),t._v(" "),n("loanBanner"),t._v(" "),n("ul",{staticClass:"indexList mt20"},t._l(t.list,function(e){return n("li",{class:e.cls,on:{click:function(t){}}},[n("b",[t._v(t._s(e.tit))]),t._v(t._s(e.con))])})),t._v(" "),n("footComponent",{attrs:{idx:0}})],1)},staticRenderFns:[]}},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"banner",staticClass:"indexBanner",attrs:{id:"banner"}},[n("ul",{ref:"ul",staticStyle:{"margin-left":"0"}},t._l(t.lists,function(t){return n("li",[n("img",{attrs:{src:t.img,alert:t.tit}})])})),t._v(" "),n("div",{staticClass:"tag",attrs:{id:"bannerTag"}},[t._l(t.lists,function(e,s){return[n("span",{class:{on:e.isOn}},[t._v(t._s(s+1))])]})],2)])},staticRenderFns:[]}}});