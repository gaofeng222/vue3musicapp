(function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],s=0,b=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&b.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(r=!1)}r&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},o={app:0},n=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"78b93816"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=l(e);var c=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue3musicapp/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"377f":function(e,t,a){"use strict";a("f736")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const o={id:"nav"};function n(e,t){const a=Object(r["x"])("router-link"),n=Object(r["x"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["h"])(a,{to:"/"},{default:Object(r["C"])(()=>[Object(r["g"])("Home")]),_:1}),Object(r["g"])(" | "),Object(r["h"])(a,{to:"/about"},{default:Object(r["C"])(()=>[Object(r["g"])("About")]),_:1})]),Object(r["h"])(n)],64)}a("9e22");var l=a("6b0d"),u=a.n(l);const i={},c=u()(i,[["render",n]]);var s=c,d=a("9483");Object(d["a"])("/vue3musicapp/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var b=a("6605"),v=a("cf05"),p=a.n(v);const f={class:"home"},h=Object(r["e"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,a,o,n,l){const u=Object(r["x"])("HelloWorld");return Object(r["r"])(),Object(r["d"])("div",f,[h,Object(r["h"])(u,{msg:"Welcome to Your Vue.js App"})])}const m={class:"hello"},j=Object(r["f"])('<p data-v-59b1d57a> For a guide and recipes on how to configure / customize this project,<br data-v-59b1d57a> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>vue-cli documentation</a>. </p><h3 data-v-59b1d57a>Installed CLI Plugins</h3><ul data-v-59b1d57a><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-59b1d57a>babel</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-59b1d57a>pwa</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-59b1d57a>router</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-59b1d57a>vuex</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-59b1d57a>eslint</a></li></ul><h3 data-v-59b1d57a>Essential Links</h3><ul data-v-59b1d57a><li data-v-59b1d57a><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>Core Docs</a></li><li data-v-59b1d57a><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>Forum</a></li><li data-v-59b1d57a><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>Community Chat</a></li><li data-v-59b1d57a><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-59b1d57a>Twitter</a></li><li data-v-59b1d57a><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>News</a></li></ul><h3 data-v-59b1d57a>Ecosystem</h3><ul data-v-59b1d57a><li data-v-59b1d57a><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>vue-router</a></li><li data-v-59b1d57a><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>vuex</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-59b1d57a>vue-devtools</a></li><li data-v-59b1d57a><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-59b1d57a>vue-loader</a></li><li data-v-59b1d57a><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-59b1d57a>awesome-vue</a></li></ul>',7);function O(e,t,a,o,n,l){return Object(r["r"])(),Object(r["d"])("div",m,[Object(r["e"])("h1",null,Object(r["z"])(a.msg),1),j])}var k={name:"HelloWorld",props:{msg:String}};a("377f");const w=u()(k,[["render",O],["__scopeId","data-v-59b1d57a"]]);var y=w,_={name:"Home",components:{HelloWorld:y}};const x=u()(_,[["render",g]]);var P=x;const C=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],A=Object(b["a"])({history:Object(b["b"])(),routes:C});var S=A,E=a("5502"),H=Object(E["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(s).use(H).use(S).mount("#app")},"6acc":function(e,t,a){},"9e22":function(e,t,a){"use strict";a("6acc")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f736:function(e,t,a){}});