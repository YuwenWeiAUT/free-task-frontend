(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"05ae":function(t,s,a){var i=a("612d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("74fbdf13",i,!0,{sourceMap:!1,shadowMode:!1})},"06d6":function(t,s,a){"use strict";var i=a("05ae"),e=a.n(i);e.a},"36aa":function(t,s,a){"use strict";var i;a.d(s,"b",(function(){return e})),a.d(s,"c",(function(){return n})),a.d(s,"a",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-uni-view",{staticClass:"content"},[a("div",{staticClass:"container has-pt-4 has-pb-4 has-pl-6 has-pr-6 is-flex has-items-center has-flex-wrap-mobile is-rounded"},[a("a",{staticClass:"is-flex has-items-center has-mr-6-tablet has-mr-auto-mobile has-size-2 has-text-current"},[a("i",{staticClass:"si-mug has-size-4 has-mr-2"}),a("strong",[t._v("Welcome")])]),a("div",{staticClass:"menu has-bg-dark is-hidden-tablet",attrs:{id:"navbar-toggler"}}),a("div",{staticClass:"is-flex-tablet has-justify-between has-w-full has-mt-4-mobile",attrs:{id:"navbar-menu"}},[a("div",{staticClass:"is-flex-tablet"},[a("v-uni-view",{staticClass:"navlink has-mb-2-mobile has-mr-2-tablet ",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.gotoPage(1)}}},[t._v("Tasks")]),a("a",{staticClass:"navlink has-mb-2-mobile ",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.gotoPage(2)}}},[t._v("Applied")])],1),a("div",{staticClass:"has-ml-auto-tablet has-mt-4-mobile",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.logout()}}},[a("a",{staticClass:"button is-secondary"},[t._v("Logout")])])])]),a("div",{staticClass:"container has-pt-16 has-pb-24"},[a("div",{},[a("h2",[t._v("Find jobs nearby and apply!")]),a("hr"),a("div",{staticClass:"has-mt-12 has-mb-12"},[a("h1",{staticClass:"has-weight-black has-mb-1"},[t._v("All results")]),a("div",{staticClass:"has-size-2 has-w-192 has-text-dark is-semitransparent"},[t._v("You can pick a task to done it.once you done it,you will receive money from the employers.")])]),a("div",{staticClass:"columns"},t._l(t.dataList,(function(s,i){return a("div",{key:i,staticClass:"column is-one-third is-full-mobile"},[a("div",{staticClass:"card is-shadowed"},[a("h4",{staticClass:"has-mb-1"},[t._v(t._s(s.title))]),a("h1",{staticClass:"has-mb-2"},[t._v("$"+t._s(s.money)),a("span",{staticClass:"has-size-2 has-text-dark is-semitransparent"},[t._v("/hour")])]),a("div",{staticClass:"has-text-dark is-semitransparent"},[t._v(t._s(s.detail))]),a("hr"),a("div",{staticClass:"has-mb-2 is-flex has-items-start"},[a("i",{staticClass:"si-check has-text-primary has-pr-2"}),a("span",[t._v("Contact :"+t._s(s.phone))])]),a("div",{staticClass:"has-mb-2 is-flex has-items-start"},[a("i",{staticClass:"si-check has-text-primary has-pr-2"}),a("span",[t._v("spend time:"+t._s(s.spend))])]),a("div",{staticClass:"has-mb-2 is-flex has-items-start"},[a("i",{staticClass:"si-check has-text-primary has-pr-2"}),a("span",[t._v(t._s(s.last_modified))])]),a("div",{staticClass:"has-mt-6",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.apply(s)}}},[a("v-uni-button",{staticClass:"button is-full"},[a("span",[t._v("Apply")]),a("i",{staticClass:"si-arrow-right has-pl-2"})])],1)])])})),0)])])])},n=[]},4247:function(t,s,a){"use strict";a.r(s);var i=a("36aa"),e=a("9645");for(var n in e)"default"!==n&&function(t){a.d(s,t,(function(){return e[t]}))}(n);a("06d6");var o,l=a("f0c5"),c=Object(l["a"])(e["default"],i["b"],i["c"],!1,null,"bac8c068",null,!1,i["a"],o);s["default"]=c.exports},"42e7":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{title:"Hello",dataList:[],userinfo:{}}},onLoad:function(){var t=this,s=uni.getStorageSync("userinfo");s?(this.userinfo=JSON.parse(s),this.$http.get(this.$url+"/tasks",{params:{}}).then((function(s){t.dataList=s.data,console.log(t.dataList)}))):uni.navigateTo({url:"/pages/login/login"})},methods:{updateUI:function(){var t=this;this.$http.get(this.$url+"/tasks",{params:{}}).then((function(s){t.dataList=s.data,console.log(t.dataList)}))},logout:function(t){uni.navigateTo({url:"/pages/login/login"})},gotoPage:function(t){console.log(t);var s="/pages/post/post";2==t&&(s="/pages/tasks/tasks"),uni.navigateTo({url:s})},apply:function(t){var s=this;if(t.belong&&t.belong.length>0)uni.showToast({icon:"error",title:"The task can not apply."});else{var a=t._id;this.$http.post(this.$url+"/tasks/applyTask",{user_id:this.userinfo._id,taskid:a}).then((function(t){uni.showToast({icon:"success",title:"successfully"}),s.updateUI()}))}}}};s.default=i},"612d":function(t,s,a){var i=a("24fb");s=i(!1),s.push([t.i,".content[data-v-bac8c068]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-bac8c068]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-bac8c068]{display:flex;justify-content:center}.title[data-v-bac8c068]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=s},9645:function(t,s,a){"use strict";a.r(s);var i=a("42e7"),e=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(s,t,(function(){return i[t]}))}(n);s["default"]=e.a}}]);