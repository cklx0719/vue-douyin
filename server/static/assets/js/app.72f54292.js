(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],u[a]&&f.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function c(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-34b4decb":"79d0728d","chunk-36008e10":"b357b5cf","chunk-38e9b03c":"556a2554","chunk-3bd50879":"7835a99b","chunk-43ca7c9c":"4b0865f1","chunk-785fdd94":"aee56e4e","chunk-db77e9ee":"29fcffba"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-34b4decb":1,"chunk-36008e10":1,"chunk-38e9b03c":1,"chunk-3bd50879":1,"chunk-43ca7c9c":1,"chunk-785fdd94":1,"chunk-db77e9ee":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-34b4decb":"9c30732d","chunk-36008e10":"ad415b01","chunk-38e9b03c":"0b573094","chunk-3bd50879":"ad415b01","chunk-43ca7c9c":"157c6365","chunk-785fdd94":"054ed3f1","chunk-db77e9ee":"e358f146"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===u))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===r||d===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}u[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loginByPassword",function(){return _}),n.d(r,"logout",function(){return I}),n.d(r,"getNums",function(){return N});var a={};n.r(a),n.d(a,"isLogged",function(){return R}),n.d(a,"loginInfo",function(){return C}),n.d(a,"statistic",function(){return A});n("cadf"),n("551c"),n("097d");var u,o=n("2b0e"),c=n("5c96"),i=n.n(c),s=(n("0fae"),n("f867"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),d=[],f=n("2877"),l={},h=Object(f["a"])(l,s,d,!1,null,null,null),p=h.exports,b=n("8c4f"),m=n("2f62"),g={isLogged:!1,loginInfo:{},statistic:{today:{},sum:{}}},v=g,k=n("bd86"),w="SET_ISLOGGED",y="SET_LOGININFO",x="SET_STATISTIC",O=(u={},Object(k["a"])(u,w,function(e,t){e.isLogged=t}),Object(k["a"])(u,y,function(e,t){e.loginInfo=t}),Object(k["a"])(u,x,function(e,t){e.statistic=t}),u),j=O,E=(n("96cf"),n("3b8d")),S=n("bc3a"),T=n.n(S),L="http://www.zhoubaba.club",P=T.a.create({baseURL:L,withCredentials:!0}),_=function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,P.post("/api/common/admin/loginByPassword",{email:n.username,password:n.password});case 3:if(a=e.sent,200!==a.status){e.next=9;break}r(w,!0),r(y,a.data.data),e.next=10;break;case 9:throw new Error("login fail");case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r(w,!1),r(y,{});case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,P.get("/api/admin/getNums");case 3:if(r=e.sent,200!==r.status){e.next=8;break}n(x,r.data.data),e.next=9;break;case 8:throw new Error("network error");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),R=function(e){return e.isLogged},C=function(e){return e.loginInfo},A=function(e){return e.statistic},B=n("b054"),M=n.n(B);o["default"].use(m["a"]);var G=!1,U=new m["a"].Store({actions:r,getters:a,state:v,mutations:j,strict:G,plugins:G?[M()()]:[]});o["default"].use(b["a"]);var $=new b["a"]({routes:[{path:"/",component:function(){return n.e("chunk-43ca7c9c").then(n.bind(null,"a55b"))}},{path:"/index",component:function(){return n.e("chunk-38e9b03c").then(n.bind(null,"d504"))},children:[{path:"",component:function(){return n.e("chunk-785fdd94").then(n.bind(null,"bb51"))}},{path:"/userList",component:function(){return n.e("chunk-db77e9ee").then(n.bind(null,"ab3a"))},meta:["数据管理","用户列表"]},{path:"/videoList",component:function(){return n.e("chunk-34b4decb").then(n.bind(null,"f0d0"))},meta:["数据管理","视频列表"]},{path:"/addUser",component:function(){return n.e("chunk-36008e10").then(n.bind(null,"58af"))},meta:["添加数据","添加用户"]},{path:"/addVideo",component:function(){return n.e("chunk-3bd50879").then(n.bind(null,"605d"))},meta:["添加数据","添加视频"]}]}]});$.beforeEach(function(e,t,n){U.state.isLogged||"/"===e.path?n():n({path:"/"})});var q=$,J=T.a.create({baseURL:L,withCredentials:!0});o["default"].prototype.$axios=J,o["default"].config.productionTip=!1,o["default"].use(i.a),new o["default"]({router:q,store:U,render:function(e){return e(p)}}).$mount("#app")},f867:function(e,t,n){}});