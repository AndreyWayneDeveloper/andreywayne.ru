exports.ids=[3],exports.modules=Array(32).concat([function(t,e,n){var content=n(36);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("5eb1ba78",content,!0,t)}},function(t,e,n){var content=n(38);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("78f9e108",content,!0,t)}},function(t,e,n){var content=n(40);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("31307eaa",content,!0,t)}},function(t,e,n){"use strict";n.r(e);var o=n(32),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".logo[data-v-fd93d112]{display:flex;top:1rem;right:1rem;position:fixed;height:38px;width:38px;align-items:center;justify-content:center;z-index:10000000000000000000}.logo a[data-v-fd93d112]{width:33px;height:33px;background:url(/img/logo.png) no-repeat 50%;background-size:contain}",""])},function(t,e,n){"use strict";n.r(e);var o=n(33),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".menu[data-v-71adcc4a]{position:fixed;height:38px;display:flex;align-items:center;top:1rem;right:calc(1rem + 60px);z-index:10000000000000000000}.menu a[data-v-71adcc4a]{color:#fff;font-size:14px;margin-left:15px}@media screen and (max-width:848px){.menu a[data-v-71adcc4a]{font-size:10px;margin-left:8px}}",""])},function(t,e,n){"use strict";n.r(e);var o=n(34),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.prealoader[data-v-389402b0]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000000000000000000;background:#141414;display:flex;flex-direction:column;align-items:center;justify-content:center}.loader-text[data-v-389402b0]{margin-top:30px;-webkit-animation:expand-data-v-389402b0 20s linear infinite;animation:expand-data-v-389402b0 20s linear infinite}.loader-text[data-v-389402b0],p[data-v-389402b0]{letter-spacing:1px}p[data-v-389402b0]{margin-top:0;font-size:.8rem;-webkit-animation:expand-data-v-389402b0 15s linear infinite;animation:expand-data-v-389402b0 15s linear infinite}.loader-icon[data-v-389402b0],.loader-icon[data-v-389402b0]:after,.loader-icon[data-v-389402b0]:before{width:150px;height:150px;border-radius:50%}.loader-icon[data-v-389402b0]{margin:0 auto;position:relative;background:transparent}.loader-icon[data-v-389402b0]:after,.loader-icon[data-v-389402b0]:before{position:absolute;left:0;top:0;content:"";border:15px solid #efefef;opacity:.5;-webkit-animation:rotate-data-v-389402b0 3s linear infinite;animation:rotate-data-v-389402b0 3s linear infinite}.loader-icon[data-v-389402b0]:before{border-left-color:transparent}.loader-icon[data-v-389402b0]:after{top:16.5%;left:16.5%;width:100px;height:100px;border-right-color:transparent;opacity:.2;animation-direction:reverse}@-webkit-keyframes rotate-data-v-389402b0{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-389402b0{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes expand-data-v-389402b0{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes expand-data-v-389402b0{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}.fade-enter-active[data-v-389402b0],.fade-leave-active[data-v-389402b0]{transition:opacity .5s}.fade-enter[data-v-389402b0],.fade-leave-to[data-v-389402b0]{opacity:0}',""])},function(t,e,n){"use strict";var o={},r=n(1);var component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}})],1)},[],!1,function(t){var e=n(35);e.__inject__&&e.__inject__(t)},"fd93d112","866b9c3a");e.a=component.exports},function(t,e,n){"use strict";var o={},r=n(1);var component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Главная")]),e("nuxt-link",{attrs:{to:"/about"}},[this._v("Обо мне")]),e("nuxt-link",{attrs:{to:"/contacts"}},[this._v("Контакты")])],1)},[],!1,function(t){var e=n(37);e.__inject__&&e.__inject__(t)},"71adcc4a","1ff38797");e.a=component.exports},function(t,e,n){"use strict";var o=n(25),r=n.n(o),l={data:()=>({show:!0}),mounted(){r()(window).ready(()=>{this.show=!1})}},c=n(1);var component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.show?e("div",{staticClass:"prealoader"},[e("div",{staticClass:"loader-icon"}),e("h2",{staticClass:"loader-text"},[this._v("Andrey Wayne")]),e("p",[this._v("Профессиональная web-разработка")])]):this._e()])},[],!1,function(t){var e=n(39);e.__inject__&&e.__inject__(t)},"389402b0","3fbe90ee");e.a=component.exports},,,,function(t,e,n){var content=n(59);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("61838a21",content,!0,t)}},function(t,e,n){var content=n(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("9f36e602",content,!0,t)}},function(t,e,n){var content=n(63);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("2ab3b564",content,!0,t)}},function(t,e,n){var content=n(65);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("76d3dde0",content,!0,t)}},,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(47),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".slide__side[data-v-6f9a5e18],.slide__subtitle[data-v-6f9a5e18],.slide__title[data-v-6f9a5e18]{display:flex}@media screen and (max-width:848px){.slide__side[data-v-6f9a5e18]{display:none}.slide__title-wrap[data-v-6f9a5e18]{position:absolute;bottom:0;left:50%;width:100vw;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding-left:10px}.slide__number[data-v-6f9a5e18]{font-size:1rem}.slide__subtitle[data-v-6f9a5e18]{font-size:12px;max-width:80%}}",""])},function(t,e,n){"use strict";n.r(e);var o=n(48),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".content__text[data-v-b2e3a5a0]{flex-direction:column}.content__text-col[data-v-b2e3a5a0]{width:100%;max-width:100%;margin-bottom:20px;line-height:22px;text-align:left;font-size:15px}.content__text-col[data-v-b2e3a5a0]:last-child{margin-bottom:0}@media screen and (max-height:800px){.content__text-col[data-v-b2e3a5a0]{font-size:12px;line-height:18px}}a[data-v-b2e3a5a0]{color:#fff}a[data-v-b2e3a5a0]:hover{text-decoration:underline}",""])},function(t,e,n){"use strict";n.r(e);var o=n(49),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cassa{position:absolute;left:-99999px}",""])},function(t,e,n){"use strict";n.r(e);var o=n(50),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"#cursor[data-v-5a53ac3e]{width:6px;height:6px;z-index:100000000000000000000;position:fixed;border-radius:50%;pointer-events:none;box-shadow:inset 0 0 0 20px #fff}.box-circle[data-v-5a53ac3e]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:60px;width:60px;border-radius:50%;position:relative;border:3px solid #fff;overflow:hidden}.circle-full[data-v-5a53ac3e]{height:102%;width:102%;border-radius:50%;position:relative;background:#fff}.follow[data-v-5a53ac3e]{z-index:10;width:26px;height:26px;position:fixed;border-radius:50%;border:2px solid #fff;opacity:.4;transition:.6s ease-out;pointer-events:none;z-index:1.00000000000001e+21}",""])},function(t,e,n){"use strict";n.r(e);var o=n(41),r=n(42),l={props:["index","title","subtitle","image"]},c=n(1);var d=Object(c.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"slide"},[t._ssrNode('<div class="slide__img-wrap" data-v-6f9a5e18><div class="slide__img"'+t._ssrStyle(null,{backgroundImage:"url(/img/projects/"+t.image+".jpg)"},null)+' data-v-6f9a5e18></div></div><div class="slide__side" data-v-6f9a5e18>Избранное</div><div class="slide__title-wrap" data-v-6f9a5e18><span class="slide__number" data-v-6f9a5e18>'+t._ssrEscape(t._s(t.index))+'</span><h3 class="slide__title" data-v-6f9a5e18>'+t._ssrEscape(t._s(t.title))+'</h3><h4 class="slide__subtitle" data-v-6f9a5e18>'+t._ssrEscape(t._s(t.subtitle))+"</h4></div>")])},[],!1,function(t){var e=n(58);e.__inject__&&e.__inject__(t)},"6f9a5e18","0ca50ca9").exports,h={props:["index","title","link","review","stack","tech"]};var f=Object(c.a)(h,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"content__item"},[t._ssrNode('<span class="content__number" data-v-b2e3a5a0>'+t._ssrEscape(t._s(t.index))+'</span><h3 class="content__title" data-v-b2e3a5a0>'+t._ssrEscape(t._s(t.title))+'</h3><h4 class="content__subtitle" data-v-b2e3a5a0><a'+t._ssrAttr("href",t.link)+' target="_blank" data-v-b2e3a5a0>'+t._ssrEscape(t._s(t.link))+'</a></h4><div class="content__text" data-v-b2e3a5a0><div class="content__text-col" data-v-b2e3a5a0>'+t._ssrEscape("О проекте: "+t._s(t.review))+'</div><div class="content__text-col" data-v-b2e3a5a0>'+t._ssrEscape("Пару слов: "+t._s(t.stack))+'</div><div class="content__text-col" data-v-b2e3a5a0>'+t._ssrEscape("Стек технологий: "+t._s(t.tech))+"</div></div>")])},[],!1,function(t){var e=n(60);e.__inject__&&e.__inject__(t)},"b2e3a5a0","949523de").exports,v={},m=Object(c.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("svg",{staticClass:"hidden"},[this._ssrNode('<symbol id="icon-arrow" viewBox="0 0 24 24"><title>arrow</title> <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "></polygon></symbol> <symbol id="icon-drop" viewBox="0 0 24 24"><title>drop</title> <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"></path> <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"></path></symbol> <symbol id="icon-longarrow" viewBox="0 0 54 24"><title>longarrow</title> <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z"></path></symbol> <symbol id="icon-navarrow" viewBox="0 0 408 408"><title>navarrow</title> <polygon fill="#fff" fill-rule="nonzero" points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"></polygon></symbol>')])},[],!1,null,null,"38c1ab7c").exports,_={},x=Object(c.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"nav nav--prev"},[this._ssrNode('<svg class="icon icon--navarrow-prev"><use xlink:href="#icon-navarrow"></use></svg>')])},[],!1,null,null,"f17a3b24").exports,w={},y=Object(c.a)(w,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"nav nav--next"},[this._ssrNode('<svg class="icon icon--navarrow-next"><use xlink:href="#icon-navarrow"></use></svg>')])},[],!1,null,null,"281f6b2e").exports,O={},M=Object(c.a)(O,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"content__close"},[this._ssrNode('<svg class="icon icon--longarrow"><use xlink:href="#icon-longarrow"></use></svg>')])},[],!1,null,null,"791ed9cd").exports,D=n(2),S=n(28),C=n.n(S),k=n(26),E=n.n(k),T=n(27),L=n.n(T),j=(n(31),n(25)),P=n.n(j),z={mixins:[{mounted(){document.documentElement.className="js";var t,e;(e=document.createElement("style")).innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(e),t=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),e.parentNode.removeChild(e),t||alert("Please view this demo in a modern browser that supports CSS Variables.");{const t=t=>{let e=0,n=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}},e=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,n=(t,e,n,o,r)=>{const l=(t-e)/(n-o);return l*r+(e-l*o)},o=["$","%","#","&","=","*","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".",":",",","^"],r=o.length,l=t=>new Promise((l,c)=>{const d=t.length;let h=0;t.forEach((t,c)=>{let f;const v=()=>{t.innerHTML=o[e(0,r-1)],f=setTimeout(v,e(50,500))};v();setTimeout(()=>{clearTimeout(f),t.style.opacity=1,t.innerHTML=t.dataset.initial,++h===d&&l()},c*n(40,0,8,200,d))})}),c=t=>new Promise((e,n)=>{const o=t.length;let r=0;t.forEach((t,n)=>{setTimeout(()=>{t.style.opacity=0,++r===o&&e()},30*n)})});class d{constructor(t){this.DOM={el:t},this.DOM.imgWrap=this.DOM.el.querySelector(".slide__img-wrap"),this.DOM.img=this.DOM.imgWrap.querySelector(".slide__img"),this.DOM.texts={wrap:this.DOM.el.querySelector(".slide__title-wrap"),title:this.DOM.el.querySelector(".slide__title"),number:this.DOM.el.querySelector(".slide__number"),side:this.DOM.el.querySelector(".slide__side")},E()(this.DOM.texts.title),E()(this.DOM.texts.side),this.DOM.titleLetters=Array.from(this.DOM.texts.title.querySelectorAll("span")).sort(()=>.5-Math.random()),this.DOM.sideLetters=Array.from(this.DOM.texts.side.querySelectorAll("span")).sort(()=>.5-Math.random()),this.DOM.titleLetters.forEach(t=>t.dataset.initial=t.innerHTML),this.DOM.sideLetters.forEach(t=>t.dataset.initial=t.innerHTML),this.calcSizes(),this.calcTransforms(),this.initEvents()}calcSizes(){this.width=this.DOM.imgWrap.offsetWidth,this.height=this.DOM.imgWrap.offsetHeight}calcTransforms(){this.transforms=[{x:-1*(v.width/2+this.width),y:-1*(v.height/2+this.height),rotation:-30},{x:-1*(v.width/2-this.width/3),y:-1*(v.height/2-this.height/3),rotation:0},{x:0,y:0,rotation:0},{x:v.width/2-this.width/3,y:v.height/2-this.height/3,rotation:0},{x:v.width/2+this.width,y:v.height/2+this.height,rotation:30},{x:-1*(v.width/2-this.width/2-.075*v.width),y:0,rotation:0}]}initEvents(){this.mouseenterFn=()=>{this.isPositionedCenter()&&_&&(clearTimeout(this.mousetime),this.mousetime=setTimeout(()=>{C.a.to(this.DOM.img,.8,{ease:Power3.easeOut,scale:1.1})},40))},this.mousemoveFn=t=>requestAnimationFrame(()=>{_&&this.isPositionedCenter()&&this.tilt(t)}),this.mouseleaveFn=t=>requestAnimationFrame(()=>{_&&this.isPositionedCenter()&&(clearTimeout(this.mousetime),C.a.to([this.DOM.imgWrap,this.DOM.texts.wrap],1.8,{ease:"Power4.easeOut",x:0,y:0,rotationX:0,rotationY:0}),C.a.to(this.DOM.img,1.8,{ease:"Power4.easeOut",scale:1}))}),this.resizeFn=()=>{this.calcSizes(),this.calcTransforms()},this.DOM.imgWrap.addEventListener("mouseenter",this.mouseenterFn),this.DOM.imgWrap.addEventListener("mousemove",this.mousemoveFn),this.DOM.imgWrap.addEventListener("mouseleave",this.mouseleaveFn),window.addEventListener("resize",this.resizeFn)}tilt(e){const n=t(e),o=document.body.scrollLeft+document.documentElement.scrollLeft,r=document.body.scrollTop+document.documentElement.scrollTop,l=this.DOM.imgWrap.getBoundingClientRect(),c=n.x-l.left-o,d=n.y-l.top-r;let h=[-20,20],f=[-20,20],v=[-15,15],m=[-15,15];const _={translation:{x:(h[1]-h[0])/l.width*c+h[0],y:(f[1]-f[0])/l.height*d+f[0]},rotation:{x:(v[1]-v[0])/l.height*d+v[0],y:(m[1]-m[0])/l.width*c+m[0]}};C.a.to(this.DOM.imgWrap,1.5,{ease:"Power1.easeOut",x:_.translation.x,y:_.translation.y,rotationX:_.rotation.x,rotationY:_.rotation.y}),C.a.to(this.DOM.texts.wrap,1.5,{ease:"Power1.easeOut",x:-1*_.translation.x,y:-1*_.translation.y})}position(t){C.a.set(this.DOM.imgWrap,{x:this.transforms[t].x,y:this.transforms[t].y,rotationX:0,rotationY:0,opacity:1,rotationZ:this.transforms[t].rotation})}setCurrent(t){this.isCurrent=!0,this.DOM.el.classList.add("slide--current","slide--visible"),this.position(t?5:2)}setLeft(t){this.isRight=this.isCurrent=!1,this.isLeft=!0,this.DOM.el.classList.add("slide--visible"),this.position(t?0:1)}setRight(t){this.isLeft=this.isCurrent=!1,this.isRight=!0,this.DOM.el.classList.add("slide--visible"),this.position(t?4:3)}isPositionedRight(){return this.isRight}isPositionedLeft(){return this.isLeft}isPositionedCenter(){return this.isCurrent}reset(){this.isRight=this.isLeft=this.isCurrent=!1,this.DOM.el.classList="slide"}hide(){C.a.set(this.DOM.imgWrap,{x:0,y:0,rotationX:0,rotationY:0,rotationZ:0,opacity:0})}moveToPosition(t){return new Promise((e,n)=>{C.a.to(this.DOM.imgWrap,.8,{ease:Power4.easeInOut,delay:t.delay||0,startAt:void 0!==t.from?{x:this.transforms[t.from+2].x,y:this.transforms[t.from+2].y,rotationX:0,rotationY:0,rotationZ:this.transforms[t.from+2].rotation}:{},x:this.transforms[t.position+2].x,y:this.transforms[t.position+2].y,rotationX:0,rotationY:0,rotationZ:this.transforms[t.position+2].rotation,onStart:void 0!==t.from?()=>C.a.set(this.DOM.imgWrap,{opacity:1}):null,onComplete:e}),t.resetImageScale&&C.a.to(this.DOM.img,.8,{ease:Power4.easeInOut,scale:1})})}hideTexts(t=!1){t?(c(this.DOM.titleLetters).then(()=>C.a.set(this.DOM.texts.wrap,{opacity:0})),c(this.DOM.sideLetters).then(()=>C.a.set(this.DOM.texts.side,{opacity:0}))):(C.a.set(this.DOM.texts.wrap,{opacity:0}),C.a.set(this.DOM.texts.side,{opacity:0}))}showTexts(t=!0){C.a.set(this.DOM.texts.wrap,{opacity:1}),C.a.set(this.DOM.texts.side,{opacity:1}),t&&(l(this.DOM.titleLetters),l(this.DOM.sideLetters),C.a.to(this.DOM.texts.number,.6,{ease:Elastic.easeOut.config(1,.5),startAt:{x:"-10%",opacity:0},x:"0%",opacity:1}))}}class h{constructor(t){this.DOM={el:t},this.DOM.number=this.DOM.el.querySelector(".content__number"),this.DOM.title=this.DOM.el.querySelector(".content__title"),this.DOM.subtitle=this.DOM.el.querySelector(".content__subtitle"),this.DOM.text=this.DOM.el.querySelector(".content__text"),this.DOM.backCtrl=this.DOM.el.parentNode.querySelector(".content__close"),this.DOM.backCtrl.addEventListener("click",()=>x.hideContent())}show(){this.DOM.el.classList.add("content__item--current"),C.a.staggerTo([this.DOM.backCtrl,this.DOM.number,this.DOM.title,this.DOM.subtitle,this.DOM.text],.8,{ease:Power4.easeOut,delay:.4,opacity:1,startAt:{y:40},y:0},.05)}hide(){this.DOM.el.classList.remove("content__item--current"),C.a.staggerTo([this.DOM.backCtrl,this.DOM.number,this.DOM.title,this.DOM.subtitle,this.DOM.text].reverse(),.3,{ease:Power3.easeIn,opacity:0,y:10},.01)}}class f{constructor(t){if(this.DOM={el:t},this.slides=[],Array.from(this.DOM.el.querySelectorAll(".slide")).forEach(t=>this.slides.push(new d(t))),this.slidesTotal=this.slides.length,this.slidesTotal<4)return!1;this.current=0,this.DOM.deco=this.DOM.el.querySelector(".slideshow__deco"),this.contents=[],Array.from(document.querySelectorAll(".content > .content__item")).forEach(t=>this.contents.push(new h(t))),this.render(),this.currentSlide.showTexts(!1),this.initEvents()}render(){this.currentSlide=this.slides[this.current],this.nextSlide=this.slides[this.current+1<=this.slidesTotal-1?this.current+1:0],this.prevSlide=this.slides[this.current-1>=0?this.current-1:this.slidesTotal-1],this.currentSlide.setCurrent(),this.nextSlide.setRight(),this.prevSlide.setLeft()}initEvents(){this.clickFn=t=>{t.isPositionedRight()?this.navigate("next"):t.isPositionedLeft()?this.navigate("prev"):this.showContent()};for(let t of this.slides)t.DOM.imgWrap.addEventListener("click",()=>this.clickFn(t));this.resizeFn=()=>{this.nextSlide.setRight(this.isContentOpen),this.prevSlide.setLeft(this.isContentOpen),this.currentSlide.setCurrent(this.isContentOpen),this.isContentOpen&&C.a.set(this.DOM.deco,{scaleX:v.width/this.DOM.deco.offsetWidth,scaleY:v.height/this.DOM.deco.offsetHeight,x:-20,y:20})},window.addEventListener("resize",this.resizeFn)}showContent(){this.isContentOpen||this.isAnimating||(_=!1,this.isContentOpen=!0,this.DOM.el.classList.add("slideshow--previewopen"),C.a.to(this.DOM.deco,.8,{ease:Power4.easeInOut,scaleX:v.width/this.DOM.deco.offsetWidth,scaleY:v.height/this.DOM.deco.offsetHeight,x:-20,y:20}),this.prevSlide.moveToPosition({position:-2}),this.nextSlide.moveToPosition({position:2}),this.currentSlide.moveToPosition({position:3,resetImageScale:!0}),this.contents[this.current].show(),this.currentSlide.hideTexts(!0))}hideContent(){this.isContentOpen&&!this.isAnimating&&(this.DOM.el.classList.remove("slideshow--previewopen"),this.contents[this.current].hide(),C.a.to(this.DOM.deco,.8,{ease:Power4.easeInOut,scaleX:1,scaleY:1,x:0,y:0}),this.prevSlide.moveToPosition({position:-1}),this.nextSlide.moveToPosition({position:1}),this.currentSlide.moveToPosition({position:0}).then(()=>{_=!0,this.isContentOpen=!1}),this.currentSlide.showTexts())}bounceDeco(t,e){C.a.to(this.DOM.deco,.4,{ease:"Power2.easeIn",delay:e+.2*e,x:"next"===t?-40:40,y:"next"===t?-40:40,onComplete:()=>{C.a.to(this.DOM.deco,.6,{ease:"Power2.easeOut",x:0,y:0})}})}navigate(t){if(this.isAnimating)return;this.isAnimating=!0,_=!1;const e="next"===t?this.current<this.slidesTotal-2?this.current+2:Math.abs(this.slidesTotal-2-this.current):this.current>=2?this.current-2:Math.abs(this.slidesTotal-2+this.current);this.upcomingSlide=this.slides[e],this.current="next"===t?this.current<this.slidesTotal-1?this.current+1:0:this.current>0?this.current-1:this.slidesTotal-1,this.prevSlide.moveToPosition({position:"next"===t?-2:0,delay:"next"===t?0:.14}).then(()=>{"next"===t&&this.prevSlide.hide()}),this.currentSlide.moveToPosition({position:"next"===t?-1:1,delay:.07}),this.currentSlide.hideTexts(),this.bounceDeco(t,.07),this.nextSlide.moveToPosition({position:"next"===t?0:2,delay:"next"===t?.14:0}).then(()=>{"prev"===t&&this.nextSlide.hide()}),"next"===t?this.nextSlide.showTexts():this.prevSlide.showTexts(),this.upcomingSlide.moveToPosition({position:"next"===t?1:-1,from:"next"===t?2:-2,delay:.21}).then(()=>{[this.nextSlide,this.currentSlide,this.prevSlide].forEach(t=>t.reset()),this.render(),_=!0,this.isAnimating=!1})}}let v;const m=()=>v={width:window.innerWidth,height:window.innerHeight};m(),window.addEventListener("resize",m);let _=!0;const x=new f(document.querySelector(".slideshow"));document.querySelector(".loader");L()(document.querySelectorAll(".slide__img"),{background:!0},()=>document.body.classList.remove("loading"))}}}],computed:{...Object(D.mapState)(["projects"])},components:{Slide:d,Project:f,Arrows:m,NavClose:M,NavPrev:x,NavNext:y}};var A=Object(c.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Arrows"),t._ssrNode('<a href="//showstreams.tv/" class="cassa"><img src="//www.free-kassa.ru/img/fk_btn/13.png" title="Бесплатный видеохостинг"></a>'),t._ssrNode("<main>","</main>",[t._ssrNode('<div class="slideshow">',"</div>",[t._ssrNode('<div class="slideshow__deco"></div>'),t._l(t.projects,function(t,i){return n("Slide",{key:i,attrs:{index:i+1,title:t.title,subtitle:t.subtitle,image:t.image}})}),n("NavPrev"),n("NavNext")],2),t._ssrNode('<div class="content">',"</div>",[t._l(t.projects,function(t,i){return n("Project",{key:i,attrs:{index:i+1,title:t.title,link:t.link,review:t.review,stack:t.stack,tech:t.tech}})}),n("NavClose")],2)])],2)},[],!1,function(t){var e=n(62);e.__inject__&&e.__inject__(t)},null,"3b657942").exports,N=n(43),W={mounted(){if(P()("body").append('<div class="follow"></div>'),P()(document).on("mousemove",function(t){P()(".follow").css({left:t.pageX-13,top:t.pageY-13})}),P()(window).width()>1024){var t=document.createElement("style");t.innerHTML="* { cursor: none; }",document.head.appendChild(t);var cursor=document.getElementById("cursor");cursor.style.position="fixed",document.addEventListener("mousemove",function(t){cursor.style.top=t.clientY+5-cursor.offsetHeight/2+"px",cursor.style.left=t.clientX+3-cursor.offsetWidth/2+"px"})}}};var X=Object(c.a)(W,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"cursor"}},[])},[],!1,function(t){var e=n(64);e.__inject__&&e.__inject__(t)},"5a53ac3e","14c0c09f").exports,Y={components:{Logo:o.a,Menu:r.a,Main:A,Preloader:N.a,CursorCustom:X}};var F=Object(c.a)(Y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index__page"},[e("Logo"),e("Menu"),e("Main"),e("Preloader")],1)},[],!1,function(t){},null,"6f94709e");e.default=F.exports}]);
//# sourceMappingURL=83dd1ef22c2958e4ed2c.js.map