(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings"],{"5fdd":function(e,t,n){},"62ad":function(e,t,n){"use strict";var o=n("5fdd"),i=n.n(o);i.a},"665c":function(e,t,n){"use strict";(function(e){n("85e9");o(n("66fd"));var t=o(n("7a14"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"7a14":function(e,t,n){"use strict";n.r(t);var o=n("a81a"),i=n("92ce");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("62ad");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports},"92ce":function(e,t,n){"use strict";n.r(t);var o=n("ca0e"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},a81a:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},ca0e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLoad:function(){this.showVideo=!1;try{var t=e.getStorageSync("comments");t&&(this.ratingsList=t,console.log(this.ratingsList))}catch(n){console.log(n)}},onReady:function(){this.videoContext=e.createVideoContext("myVideo")},data:function(){return{showVideo:!0,videoSrc:"",videoContext:null,ratingsList:[],labelIndex:0,labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}]}},methods:{loadRatings:function(e){this.labelIndex=e},showBigImg:function(t,n){e.previewImage({current:t,urls:n})},playVideo:function(e){var t=this;this.videoSrc=e,this.$nextTick((function(){t.videoContext.requestFullScreen({direction:0})})),this.showVideo=!0},videoControl:function(e){e.detail.fullScreen?this.videoContext.play():(this.videoContext.stop(),this.videoPause())},videoPause:function(){this.videoSrc="",this.showVideo=!1}}};t.default=n}).call(this,n("543d")["default"])}},[["665c","common/runtime","common/vendor"]]]);