module.exports=function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(t){if(0!==n[t]){var r=require("./"+{1:"4fa7602fa6fda6c3c2cd",2:"0b0c05d75a024371ad47",3:"45e88d237c8cef3be65b"}[t]+".js"),o=r.modules,c=r.ids;for(var l in o)e[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/_nuxt/",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=13)}([function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function r(e,t,n,r,o,c,l,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:e,options:f}}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("vuex")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var content=function(e,t){var content=e[1]||"",n=e[3];if(!n)return content;if(t&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+content+"}":content}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){"use strict";function r(e,t,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});t=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],c=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(e,t),n?function(e,t){for(var i=0;i<t.length;i++)for(var n=t[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=e[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):e[c]={ids:[o.id],css:o.css,media:o.media}}}(c,t):function(e,t){for(var i=0;i<t.length;i++)for(var n=t[i].parts,r=0;r<n.length;r++){var o=n[r];e[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,t)}}function o(e){var t="";for(var n in e){var style=e[n];t+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return t}n.r(t),n.d(t,"default",function(){return r})},function(e,t,n){var content=n(15);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(4).default;e.exports.__inject__=function(e){r("b675d82e",content,!0,e)}},function(e,t,n){var content=n(17);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(4).default;e.exports.__inject__=function(e){r("17cfdfa9",content,!0,e)}},function(e,t,n){var content=n(21);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(4).default;e.exports.__inject__=function(e){r("747fea46",content,!0,e)}},function(e,t){e.exports=require("vue-router")},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("vue-no-ssr")},function(e,t,n){e.exports=n(24)},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(e,t,n){var content=n(19);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),n(4).default("4be5f364",content,!0)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".page-enter-active,.page-leave-active{transition:all .5s}.page-enter,.page-leave-active{opacity:0}",""])},function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}hr{box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\\201C" "\\201D" "\\2018" "\\2019"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}*,:after,:before{box-sizing:border-box}body{--color-text:#f1f1f1;--color-bg:#0c0c0c;--color-link:#1ab3de;--color-link-hover:#f1f1f1;--color-deco:#141414;--color-side:#353535;font-family:Futura,futura-pt,sans-serif;min-height:100vh;color:#57585c;color:var(--color-text);background-color:var(--color-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.js .loading:before{top:0;left:0;width:100%;height:100%;background:var(--color-bg)}.js .loading:after,.js .loading:before{content:"";position:fixed;z-index:100000}.js .loading:after{top:50%;left:50%;width:60px;height:60px;margin:-30px 0 0 -30px;pointer-events:none;border-radius:50%;opacity:.4;background:var(--color-link);-webkit-animation:loaderAnim .7s linear infinite alternate forwards;animation:loaderAnim .7s linear infinite alternate forwards}@-webkit-keyframes loaderAnim{to{opacity:1;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1)}}@keyframes loaderAnim{to{opacity:1;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1)}}a{text-decoration:none;color:var(--color-link);outline:none}a:focus,a:hover{color:var(--color-link-hover);outline:none}.hidden{position:absolute;overflow:hidden;width:0;height:0;pointer-events:none}.message{position:relative;z-index:100;display:none;padding:1em;text-align:center;color:var(--color-bg);background:var(--color-text)}.icon{display:block;width:1.5em;height:1.5em;margin:0 auto;fill:currentColor}.frame{position:fixed;z-index:10000;top:5rem;left:0;width:100%;max-width:none;min-height:0;height:100vh;padding:1rem;pointer-events:none}.frame a{pointer-events:auto}.codrops-header{position:relative;z-index:100;display:flex;align-items:center;justify-content:space-between}.codrops-header__title{font-size:1rem;font-weight:400;line-height:1;margin:0}.codrops-links{position:relative;display:flex;justify-content:flex-end;align-items:center;white-space:nowrap}.github{display:block;padding:.25em;margin:0 .25rem}.codrops-icon{display:inline-block;padding:.25em;margin:.25em 0 0}.slideshow{overflow:hidden;margin:0;height:100vh;display:grid;grid-template-columns:33% 33% 33%;grid-column-gap:.5%;grid-template-rows:100%;grid-template-areas:"... slide ..."}.slide,.slideshow{position:relative;width:100%}.slide{display:flex;pointer-events:none;cursor:pointer;height:100%;grid-area:slide}.slideshow--previewopen .slide{cursor:default}.slide--current{pointer-events:auto}.slide__img-wrap{width:100%;overflow:hidden;z-index:100;height:80%;top:10%;position:absolute}.slideshow__deco{grid-area:slide;background:var(--color-deco);width:100%;height:80%;align-self:center;position:relative;margin:-40px 0 0;right:-20px}.nav{position:absolute;background:none;width:3rem;height:3rem;z-index:1000;border:0;padding:0;margin:0;pointer-events:none;transition:opacity .8s,-webkit-transform .8s;transition:transform .8s,opacity .8s;transition:transform .8s,opacity .8s,-webkit-transform .8s;transition-timing-function:cubic-bezier(.7,0,.3,1)}@media screen and (max-width:800px){.nav{width:2rem;height:2rem}.nav svg{width:1rem}}.nav--next{bottom:1rem;right:1rem;border-radius:50%;border:2px solid #fff}.icon--navarrow-next{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nav--prev{top:1rem;left:1rem;border-radius:50%;border:2px solid #fff}.icon--navarrow-prev{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.slideshow--previewopen .nav{opacity:0;transition-duration:.4s}.slideshow--previewopen .nav--next{-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}.slideshow--previewopen .nav--prev{-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}.slide__img{width:100%;height:100%;left:0;top:0;background-size:cover;background-position:50% 50%;position:absolute;pointer-events:none;-webkit-transform:scale3d(1.01,1.01,1);transform:scale3d(1.01,1.01,1)}.js .slide__img-wrap,.js .slide__side,.js .slide__title-wrap{opacity:0;pointer-events:none}.js .slide--current .slide__img-wrap{opacity:1;pointer-events:auto}.slide--visible .slide__img-wrap{pointer-events:auto}.slide__title-wrap{justify-self:flex-end;width:100%;position:relative;z-index:1000}.slide__number{display:block;font-size:2rem;font-weight:700}.slide__number:before{content:"\\2014";display:inline-block;margin:0 1rem 0 0}.slide__side,.slide__subtitle,.slide__title{display:none}.content{position:fixed;top:7rem;left:0;width:100%;height:calc(100% - 10rem);pointer-events:none;z-index:100}.content__item{position:absolute;top:0;right:0;width:100%;height:100%;padding:10vh 5vw;overflow:auto}.content__item--current,.content__item--current~.content__close{pointer-events:auto}.content__close{position:absolute;top:-2rem;left:1rem;background:none;color:currentColor;border:0;margin:0;padding:0}.icon--longarrow{width:2rem}.content__close:focus{outline:none}.content__number{font-weight:700}.content__number:before{content:"\\2014";display:inline-block;margin:0 1rem 0 0}.content__title{margin:.5rem 0;font-size:2rem}.content__subtitle{margin:0 0 .5rem;font-size:1rem;font-weight:400}.content__text{font-size:.85rem;display:flex;justify-content:space-between}.content__text-col{max-width:250px;width:100%}.js .content__close,.js .content__number,.js .content__subtitle,.js .content__text,.js .content__title{opacity:0}@media screen and (min-width:53em){body{padding:0}.frame{top:0;display:grid;align-items:start;justify-items:end;grid-template-columns:50% 50%;grid-template-rows:100%;grid-template-areas:"... header"}.codrops-header{grid-area:header;padding:1rem .5rem;display:block}.codrops-header__title{padding:0 .5rem}.codrops-links{margin:.25rem auto 0 .25rem}.slideshow{height:100vh;grid-template-columns:27% 27% 27%;grid-column-gap:9.5%}.slide{padding:10vh 0 7vh;flex-direction:column;justify-content:space-between}.slide__side,.slide__title-wrap{margin:0 0 0 -1.85rem}.slide__side,.slide__subtitle,.slide__title{display:block}.slide__title{font-size:3.25rem;margin:0 0 .25rem}.slide__subtitle{font-weight:400;margin:0;min-height:50px}.slide__side{color:var(--color-side);position:relative;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-transform:rotate(180deg);transform:rotate(180deg);z-index:1000}.content{top:0;height:100%}.content__item{padding:calc(10vh + 5rem) 0 7vh;width:50.5%;right:7.5%;overflow:visible}.content__close{left:42%;top:calc(10vh + 1rem)}.content__number{position:absolute;bottom:7vh;right:0;font-size:2rem}.content__title{font-size:5vw}.content__subtitle{font-size:1.15rem;margin-bottom:7.5vh}.content__text{font-size:.95rem;-webkit-column-count:2;-moz-column-count:2;column-count:2;grid-column-gap:2rem;-webkit-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;max-width:600px;text-align:justify}}.prealoader{z-index:1e+22}',""])},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(2),l=n.n(c);o.a.use(l.a);t.default=()=>new l.a.Store({state:{projects:[{title:"Зенит",subtitle:"Дай обещание зениту на 2020 год",link:"https://ny2020.fc-zenit.ru/",review:"Новогодний проект #ОбещаюЗениту даёт возможность клубу и фанатам обменяться предновогодними обещаниями, как это делают близкие друзья.",stack:'Разработка frontend части. Проект получил 4 золота в конкурсе "золотой сайт".',tech:"Nuxt, Vue, Canvas",image:"10"},{title:"Melon",subtitle:"Штаб-квартира Melon Fashion Group",link:"https://office.melonfashion.ru/ru/",review:"Штаб-квартира Melon Fashion Group – олицетворение представлений компании об идеальном офисе. Дизайн – микс авторских решений, декоративных элементов и стильной мебели. Авторы проекта создали потрясающую и вдохновляющую атмосферу для большой творческой команды.",stack:'Полностью разработал frontend часть. Так же проект получил 6 наград, включая "Сайт дня".',tech:"Nuxt, Vue, Canvas, ScrollMagic, TweenMax, nuxt-i18n.",image:"1"},{title:"Муниципал",subtitle:"IT система для органов местного самоуправления",link:"https://mopushkin.spb.ru",review:"Муниципал — информационная система для внутригородских муниципальных образований для работы и взаимодействия как внутри органов местного самоуправления, так и с другими субъектами.",stack:"За 7 месяцев я смог полностью разработать всю frontend часть, что крайне быстро, ведь требовалось проделать очень большую работу. Ключевые сложности заключались: обработка и вывод данных с таблицы в интерактивную диаграмму, парсинг документов в REST API, сортировка по ролям каждого пользователя, версия для слабовидящих, SPA, SSR.",tech:"Nuxt, Vue, Canvas, Node, Ruby on Rails 5.",image:"3"},{title:"GILMON",subtitle:"Популярный сервис скидок",link:"https://gilmon.ru",review:"Популярный сервис скидок с бесплатными купонами на актуальные предложения.",stack:"Роль в данном проекте заключалась в реконструкции клиентской части. Смог унести команду разработки подальше от legacy.",tech:"Vue, Vue-router, Vuex.",image:"5"},{title:"М. 19-24",subtitle:"Программа развития муниципалитетов Санкт-Петербурга",link:"https://mo1924.ru",review:"M. 19-24 – сайт проекта, где было решено внести свой вклад и помочь будущим депутатам понять «откуда и куда идти» и как изменить свои муниципальные образования на благо жителям.",stack:"Спустя неделю, после окончания данного проекта, приступил к разработке крупного проекта муниципал. Немного о технической части: вся информация, слайдеры, графики связана с API, также данный проект это SPA, который рендерится на стороне сервера.",tech:"Nuxt, Vue, Node, Node, Ruby on Rails 5.",image:"4"},{title:"Mates team",subtitle:"Поиск и организация спортивных мероприятий",link:"https://mates.team",review:"Сервис для поиска и организации спортивных любительских мероприятий.",stack:"В данном проекте разрабатывал frontend часть на Vue. Сложности проекта заключались: определение роли пользователя, поиск и организация мероприятий.",tech:"Vue, Vue-router, Vuex, Node.",image:"6"},{title:"TIAP",subtitle:"Новости в мире автотрансорта",link:"https://tiap.ru/",review:"Новости транспорта:  транспортное законодательство, рейтинги такси, аналитика и прогнозы рынка, информация на дорогах.",stack:"Основная роль в проекте заключалась в реконструкции клиентской части.",tech:"HTML5, CSS3, Gulp, jQuery.",image:"7"},{title:"Пик Формы",subtitle:"Интернет-магазин спортивного питания",link:"https://www.pikformy.ru/",review:"Интернет-магазин спортивного питания",stack:"Моя роль была основана на полной разработке всего проекта, включая админ-панель.",tech:"HTML5, CSS3, Gulp, jQuery, PHP, phpMyAdmin.",image:"8"},{title:"Turbo",subtitle:"Станция технического обслуживания",link:"https://74autoturbo.ru/",review:"СТО с сильнейшими специалистами в своей области.",stack:"Полное создание проекта, включающая в себя: дизайн, разработка, seo-продвижение.",tech:"Nuxt, Vue, Canvas, WebGL, ScrollMagic, TweenMax.",image:"2"},{title:"Tattoo-OM",subtitle:"Студия тату и перманентного макияжа",link:"http://tattoo-om.ru",review:"Студия татуировок и перманентного макияжа",stack:"Сделал уникальный дизайн и полностью разработал проект.",tech:"Vue, Vue-router, Vuex, Node.",image:"9"}]}})},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(0),c=n.n(o),l=n(10),d=n.n(l);var h={};function f(e){return e.then(e=>e.default||e)}function m(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=c.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function x(e,t=!1){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).map(r=>(t&&t.push(n),e.components[r]))))}function v(e){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((r,o)=>(e.components[o]?r.push(t(e.components[o],e.instances[o],e,o,n)):delete e.components[o],r),[])))}(e,async(e,t,n,r)=>("function"!=typeof e||e.options||(e=await e()),n.components[r]=m(e),n.components[r])))}async function y(e){if(e)return await v(e),{...e,meta:x(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function _(e,t){e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:t.payload,error:t.error,base:"/",env:{}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=(t,path,n)=>{if(!t)return;e.context._redirected=!0;let r=typeof path;"number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=t),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const r=e.indexOf("://");-1!==r?(n=e.substring(0,r),e=e.substring(r+3)):e.startsWith("//")&&(e=e.substring(2));let o,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=o?"#"+o:""}(path,n),e.context.next({path:path,status:t}))},e.context.beforeNuxtRender=e=>t.beforeRenderFns.push(e));const[n,r]=await Promise.all([y(t.route),y(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=r),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(t.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function w(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():k(e[0],t).then(()=>w(e.slice(1),t))}function k(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,function(e,data){e&&t.error(e),n(data=data||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function C(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=r||{},c=o.pretty?S:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let o;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<r.length;e++){if(o=c(r[e]),!t[i].test(o))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(o)+"`");path+=(0===e?n.prefix:n.delimiter)+o}}else{if(o=n.asterisk?encodeURI(r).replace(/[?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):c(r),!t[i].test(o))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+o+'"');path+=n.prefix+o}}return path}}(function(e,t){const n=[];let r=0,o=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=j.exec(e));){const t=l[0],d=l[1],h=l.index;if(path+=e.slice(o,h),o=h+t.length,d){path+=d[1];continue}const f=e[o],m=l[2],x=l[3],v=l[4],y=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const k=null!=m&&null!=f&&f!==m,C="+"===_||"*"===_,j="?"===_||"*"===_,S=l[2]||c,pattern=v||y;n.push({name:x||r++,prefix:m||"",delimiter:S,optional:j,repeat:C,partial:k,asterisk:Boolean(w),pattern:pattern?T(pattern):w?".*":"[^"+$(S)+"]+?"})}o<e.length&&(path+=e.substr(o));path&&n.push(path);return n}(e,t))}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(e){return encodeURI(e).replace(/[\/?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function $(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(e){return e.replace(/([=!:$\/()])/g,"\\$1")}var N=n(11),z=n.n(N),A=n(8),O=n.n(A);const E=()=>f(n.e(1).then(n.bind(null,64))),R=()=>f(n.e(2).then(n.bind(null,65))),P=()=>f(n.e(3).then(n.bind(null,63)));c.a.use(O.a);const M=function(e,t,n){let r=!1;return e.matched.length<2&&e.matched.every(e=>!1!==e.components.default.options.scrollToTop)?r={x:0,y:0}:e.matched.some(e=>e.components.default.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n),new Promise(t=>{window.$nuxt.$once("triggerScroll",()=>{if(e.hash){let t=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(t="#"+window.CSS.escape(t.substr(1)));try{document.querySelector(t)&&(r={selector:t})}catch(e){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}t(r)})})};var D=n(12),L={...n.n(D).a,name:"NoSsr"},I={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const r=t,o=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};V.forEach(e=>{void 0!==d[e]&&(h[e]=d[e])});const f={};U.forEach(e=>{"function"==typeof d[e]&&(f[e]=d[e].bind(r))});const m=f.beforeEnter;f.beforeEnter=e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,e)};let x=[e("router-view",data)];return n.keepAlive&&(x=[e("keep-alive",{props:n.keepAliveProps},x)]),e("transition",{props:h,on:f},x)}};const V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],U=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var F={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},B=n(1);var W=Object(B.a)(F,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[e._ssrNode('<div class="error">',"</div>",[e._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+e._ssrEscape(e._s(e.message))+"</div> "),404===e.statusCode?e._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[e._v("Back to the home page")])],1):e._e(),e._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(e){var t=n(14);t.__inject__&&t.__inject__(e)},null,"4af88ad0").exports,H={name:"Nuxt",components:{NuxtChild:I,NuxtError:W},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[e]=this.$route.matched;if(!e)return this.$route.path;const t=e.components.default;if(t&&t.options){const{options:e}=t;if(e.key)return"function"==typeof e.key?e.key(this.$route):e.key}return/\/$/.test(e.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?e("NuxtError",{props:{error:this.nuxt.err}}):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},K={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var G=Object(B.a)(K,void 0,void 0,!1,function(e){var t=n(16);t.__inject__&&t.__inject__(e)},null,"354fd7f8").exports;n(18);const J={_default:Object(B.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt")],1)},[],!1,function(e){var t=n(20);t.__inject__&&t.__inject__(e)},null,"0022c912").exports};var X={head:{htmlAttrs:{lang:"ru"},title:"Andrey Wayne | Разработка сайтов",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"},{name:"image",content:"/img/mainIndex.jpg"},{"http-equiv":"x-dns-prefetch-control",content:"on"},{"http-equiv":"cache-control",content:"no-cache"},{"http-equiv":"expires",content:0},{"http-equiv":"content-language",content:"ru"},{property:"og:locale",content:"ru_Ru"},{property:"og:image",content:"http://andreywayne.ru/img/social_image.jpg"},{name:"DC.Title",content:"Andrey Wayne | Разработка сайтов"},{name:"DC.Creator",content:"Andrey Wayne"},{name:"DC.Subject",content:"Фриланс. Программирование. Создание сайтов."},{name:"DC.Description",content:"Делаю IT-системы, новостные порталы, сервисы, интернет-магазины, лендинги, сайты компаний."},{name:"DC.Publisher",content:"Andrey Wayne"},{name:"DC.Contributor",content:"AndeyWayne"},{name:"DC.Date",content:"2018"},{name:"DC.Type",content:"Developer"},{name:"DC.Format",content:"Developer"},{name:"DC.Identifier",content:"http://andreywayne.ru"},{name:"DC.Source",content:"http://andreywayne.ru"},{name:"DC.Language",content:"Ru"},{name:"DC.Coverage",content:"Andrey Wayne"},{name:"DC.Rights",content:"Andrey Wayne"}],link:[{rel:"shortcut icon",type:"image/png",href:"/img/favicon.png"}],style:[],script:[]},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),r=e(this.layout||"nuxt"),o=e("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){return e&&J["_"+e]||(e="default"),this.layoutName=e,this.layout=J["_"+e],this.layout},loadLayout:e=>(e&&J["_"+e]||(e="default"),Promise.resolve(J["_"+e]))},components:{NuxtLoading:G}},Q=n(2),Y=n.n(Q);c.a.use(Y.a);let Z={};(Z=function(e,t){if((e=e.default||e).commit)throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);return"function"!=typeof e&&(e=Object.assign({},e)),te(e,t)}(n(22),"store/index.js")).modules=Z.modules||{};const ee=Z instanceof Function?Z:()=>new Y.a.Store(Object.assign({strict:!1},Z));function te(e,t){if(e.state&&"function"!=typeof e.state){console.warn(`'state' should be a method that returns an object in ${t}`);const n=Object.assign({},e.state);e=Object.assign({},e,{state:()=>n})}return e}n(23);c.a.component(L.name,L),c.a.component(I.name,I),c.a.component("NChild",I),c.a.component(H.name,H),c.a.use(z.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ne={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function re(e){const t=await new O.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:M,routes:[{path:"/about",component:E,name:"about"},{path:"/contacts",component:R,name:"contacts"},{path:"/",component:P,name:"index"}],fallback:!1}),n=ee(e);n.$router=t;const r=n.registerModule;n.registerModule=(path,e,t)=>r.call(n,path,e,Object.assign({preserveState:!1},t));const o={router:t,store:n,nuxt:{defaultTransition:ne,transitions:[ne],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},ne,{name:e}):Object.assign({},ne,e):ne),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,o.context._errored=Boolean(t),t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}},...X};n.app=o;const c=e?e.next:e=>o.router.push(e);let l;if(e)l=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);l=t.resolve(path).route}await _(o,{route:l,next:c,error:o.nuxt.error.bind(o),store:n,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});return e&&e.url&&await new Promise((n,r)=>{t.push(e.url,n,()=>{const r=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,o.context.route=await y(t),o.context.params=t.params||{},o.context.query=t.query||{},r(),n()})})}),{app:o,store:n,router:t}}var oe={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(oe.name,oe),c.a.component("NLink",oe),global.fetch||(global.fetch=d.a);const ie=()=>new c.a({render:e=>e("div")}),ae=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(r.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=async e=>{e.redirected=!1,e.next=ae(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:t,router:n,store:r}=await re(e),o=new c.a(t);e.meta=o.$meta(),e.asyncData={};const l=async()=>{await Promise.all(e.beforeRenderFns.map(t=>k(t,{Components:v,nuxtState:e.nuxt}))),e.rendered=()=>{e.nuxt.state=r.state}},d=async()=>{const n="function"==typeof W.layout?W.layout(t.context):W.layout;return e.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},f=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),d()),v=x(n.match(e.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",t.context)}catch(e){throw console.debug("Error occurred when calling nuxtServerInit: ",e.message),e}if(e.redirected)return ie();if(e.nuxt.error)return d();let y=[];if(y=y.map(e=>"function"==typeof e?e:("function"!=typeof h[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),h[e])),await w(y,t.context),e.redirected)return ie();if(e.nuxt.error)return d();let _=v.length?v[0].options.layout:W.layout;if("function"==typeof _&&(_=_(t.context)),await o.loadLayout(_),e.nuxt.error)return d();if(_=o.setLayout(_),e.nuxt.layout=o.layoutName,y=[],(_=m(_)).options.middleware&&(y=y.concat(_.options.middleware)),v.forEach(e=>{e.options.middleware&&(y=y.concat(e.options.middleware))}),y=y.map(e=>"function"==typeof e?e:("function"!=typeof h[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),h[e])),await w(y,t.context),e.redirected)return ie();if(e.nuxt.error)return d();let C=!0;try{for(const e of v)if("function"==typeof e.options.validate&&!(C=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),d()}if(!C)return e._generate&&(e.nuxt.serverRendered=!1),f();if(!v.length)return f();const j=await Promise.all(v.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=k(n.options.asyncData,t.context);o.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(t.context)):r.push(null),Promise.all(r)}));return e.nuxt.data=j.map(e=>e[0]||{}),e.redirected?ie():e.nuxt.error?d():(await l(),o)}},function(e,t){e.exports=require("jquery")},function(e,t){e.exports=require("charming")},function(e,t){e.exports=require("imagesloaded")},function(e,t){e.exports=require("gsap")},function(e,t){e.exports=require("scrollmonitor")},function(e,t){e.exports=require("animejs")},function(e,t){e.exports=require("jquery-mousewheel")}]);
//# sourceMappingURL=server.js.map