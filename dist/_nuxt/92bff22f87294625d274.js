(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(t,e,n){"use strict";var o=n(151),r=n(152);function d(){var data=Object(o.a)(["\n          font-family: Light;\n          font-size: 14px;\n          color: #FFFFFF;\n        "]);return d=function(){return data},data}function l(){var data=Object(o.a)(["\n          font-family: Light;\n          font-size: 18px;\n          color: #FFFFFF;\n          letter-spacing: 0.5px;\n          line-height: 35px;\n        "]);return l=function(){return data},data}function c(){var data=Object(o.a)(["\n  ","\n"]);return c=function(){return data},data}var h={typed:String,styled:""};e.a=Object(r.b)("p",h)(c(),function(t){switch(t.typed){case"normal":return Object(r.a)(l());case"min":return Object(r.a)(d())}})},156:function(t,e,n){"use strict";(function(t){n(171),n(66),n(174),n(205);var o=n(204),r=n(180),d=n(158),l=(n(153),n(154),n(168)),c=n.n(l),h=n(155),m=n(179);e.a={components:{H1:r.a,H2:d.a,Parallax:c.a,Title:h.a},mounted:function(){var e=t.noise={};function n(t,e,n){this.x=t,this.y=e,this.z=n}n.prototype.dot2=function(t,e){return this.x*t+this.y*e},n.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n};var r=[new n(1,1,0),new n(-1,1,0),new n(1,-1,0),new n(-1,-1,0),new n(1,0,1),new n(-1,0,1),new n(1,0,-1),new n(-1,0,-1),new n(0,1,1),new n(0,-1,1),new n(0,1,-1),new n(0,-1,-1)],p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],d=new Array(512),l=new Array(512);e.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var i=0;i<256;i++){var e;e=1&i?p[i]^255&t:p[i]^t>>8&255,d[i]=d[i+256]=e,l[i]=l[i+256]=r[e%12]}},e.seed(0);var c=.5*(Math.sqrt(3)-1),h=(3-Math.sqrt(3))/6,f=1/6;function v(t){return t*t*t*(t*(6*t-15)+10)}function x(a,b,t){return(1-t)*a+t*b}e.simplex2=function(t,e){var n,o,s=(t+e)*c,i=Math.floor(t+s),r=Math.floor(e+s),m=(i+r)*h,f=t-i+m,v=e-r+m;f>v?(n=1,o=0):(n=0,o=1);var x=f-n+h,w=v-o+h,y=f-1+2*h,M=v-1+2*h,k=l[(i&=255)+d[r&=255]],j=l[i+n+d[r+o]],C=l[i+1+d[r+1]],_=.5-f*f-v*v,I=.5-x*x-w*w,T=.5-y*y-M*M;return 70*((_<0?0:(_*=_)*_*k.dot2(f,v))+(I<0?0:(I*=I)*I*j.dot2(x,w))+(T<0?0:(T*=T)*T*C.dot2(y,M)))},e.simplex3=function(t,e,n){var o,r,c,h,m,v,s=(t+e+n)*(1/3),i=Math.floor(t+s),x=Math.floor(e+s),w=Math.floor(n+s),y=(i+x+w)*f,M=t-i+y,k=e-x+y,j=n-w+y;M>=k?k>=j?(o=1,r=0,c=0,h=1,m=1,v=0):M>=j?(o=1,r=0,c=0,h=1,m=0,v=1):(o=0,r=0,c=1,h=1,m=0,v=1):k<j?(o=0,r=0,c=1,h=0,m=1,v=1):M<j?(o=0,r=1,c=0,h=0,m=1,v=1):(o=0,r=1,c=0,h=1,m=1,v=0);var C=M-o+f,_=k-r+f,I=j-c+f,T=M-h+2*f,D=k-m+2*f,z=j-v+2*f,L=M-1+.5,E=k-1+.5,O=j-1+.5,P=l[(i&=255)+d[(x&=255)+d[w&=255]]],F=l[i+o+d[x+r+d[w+c]]],N=l[i+h+d[x+m+d[w+v]]],S=l[i+1+d[x+1+d[w+1]]],A=.6-M*M-k*k-j*j,Q=.6-C*C-_*_-I*I,B=.6-T*T-D*D-z*z,H=.6-L*L-E*E-O*O;return 32*((A<0?0:(A*=A)*A*P.dot3(M,k,j))+(Q<0?0:(Q*=Q)*Q*F.dot3(C,_,I))+(B<0?0:(B*=B)*B*N.dot3(T,D,z))+(H<0?0:(H*=H)*H*S.dot3(L,E,O)))},e.perlin2=function(t,e){var n=Math.floor(t),o=Math.floor(e);t-=n,e-=o;var r=l[(n&=255)+d[o&=255]].dot2(t,e),c=l[n+d[o+1]].dot2(t,e-1),h=l[n+1+d[o]].dot2(t-1,e),m=l[n+1+d[o+1]].dot2(t-1,e-1),u=v(t);return x(x(r,h,u),x(c,m,u),v(e))},e.perlin3=function(t,e,n){var o=Math.floor(t),r=Math.floor(e),c=Math.floor(n);t-=o,e-=r,n-=c;var h=l[(o&=255)+d[(r&=255)+d[c&=255]]].dot3(t,e,n),m=l[o+d[r+d[c+1]]].dot3(t,e,n-1),f=l[o+d[r+1+d[c]]].dot3(t,e-1,n),w=l[o+d[r+1+d[c+1]]].dot3(t,e-1,n-1),y=l[o+1+d[r+d[c]]].dot3(t-1,e,n),M=l[o+1+d[r+d[c+1]]].dot3(t-1,e,n-1),k=l[o+1+d[r+1+d[c]]].dot3(t-1,e-1,n),j=l[o+1+d[r+1+d[c+1]]].dot3(t-1,e-1,n-1),u=v(t),C=v(e),_=v(n);return x(x(x(h,y,u),x(m,M,u),_),x(x(f,k,u),x(w,j,u),_),C)},setTimeout(function(){return document.body.classList.add("render")},60);var w=Array.from(document.querySelectorAll("nav.demos > .demo")),y=w.length,M=w.findIndex(function(t){return t.classList.contains("demo--current")}),k=function(t){document.body.classList.remove("render"),document.body.addEventListener("transitionend",function(){return window.location=t.href})};w.forEach(function(link){return link.addEventListener("click",function(t){t.preventDefault(),k(t.target)})}),document.addEventListener("keydown",function(t){var e,n=t.keyCode||t.which;if(37===n)e=M>0?w[M-1]:w[y-1];else{if(39!==n)return!1;e=M<y-1?w[M+1]:w[0]}k(e)});var canvas=document.querySelector("canvas"),j=canvas.offsetWidth,C=canvas.offsetHeight,_=new m.WebGLRenderer({canvas:canvas,antialias:!0,alpha:!0});_.setPixelRatio(window.devicePixelRatio>1?2:1),_.setSize(j,C),_.setClearColor(0,0);var I=new m.Scene,T=new m.PerspectiveCamera(40,j/C,.1,1e3);T.position.set(0,0,350);var D=new m.Group;I.add(D);for(var z=new m.LineBasicMaterial({color:16649813}),L=100,E=50,O=0;O<18;O++){var P=O,F=new m.Geometry;F.y=P/18*L*2;for(var i=0;i<=E;i++){var N=new m.Vector3;N.x=Math.cos(i/E*Math.PI*2),N.z=Math.sin(i/E*Math.PI*2),N._o=N.clone(),F.vertices.push(N)}var line=new m.Line(F,z);D.add(line)}function S(){canvas.style.width="",canvas.style.height="",j=canvas.offsetWidth,C=canvas.offsetHeight,T.aspect=j/C,T.updateProjectionMatrix(),_.setSize(j,C)}var A,Q=new m.Vector2(.8,.5);requestAnimationFrame(function t(a){requestAnimationFrame(t),function(a){for(var t=0;t<D.children.length;t++){var line=D.children[t];line.geometry.y+=.3,line.geometry.y>2*L&&(line.geometry.y=0);for(var e=Math.sqrt(line.geometry.y*(2*L-line.geometry.y)),i=0;i<=E;i++){var n=line.geometry.vertices[i],o=15*noise.simplex3(.009*n.x,.009*n.z+6e-4*a,.009*line.geometry.y);n.copy(n._o),n.multiplyScalar(e+o),n.y=line.geometry.y-L}line.geometry.verticesNeedUpdate=!0}}(a),_.render(I,T)}),window.addEventListener("mousemove",function(t){Q.y=t.clientY/window.innerHeight,o.a.to(D.rotation,2,{x:1*Q.y,ease:Power1.easeOut})}),window.addEventListener("resize",function(){A=clearTimeout(A),A=setTimeout(S,200)})}}}).call(this,n(27))},157:function(t,e,n){var content=n(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("d83e3bc6",content,!0,{sourceMap:!1})},158:function(t,e,n){"use strict";var o=n(151),r=n(152);function d(){var data=Object(o.a)(["\n          font-family: Medium;\n          font-size: 70px;\n          line-height: 72px;\n          color: white;\n          @media screen and (max-width: 1279px) {\n            font-size: 24px;\n            line-height: 28px;\n          }\n        "]);return d=function(){return data},data}function l(){var data=Object(o.a)(["\n          font-family: Medium;\n          font-size: 125px;\n          color: white;\n          line-height: 140px;\n          letter-spacing: 0.5px;\n          @media screen and (max-width: 1279px) {\n            font-size: 24px;\n            line-height: 28px;\n          }\n        "]);return l=function(){return data},data}function c(){var data=Object(o.a)(["\n          font-family: Medium;\n          font-size: 24px;\n          color: #FFFFFF;\n          letter-spacing: 0.5px;\n          @media screen and (max-width: 1279px) {\n            font-size: 18px;\n          }\n        "]);return c=function(){return data},data}function h(){var data=Object(o.a)(["\n  ","\n"]);return h=function(){return data},data}var m={typed:String,styled:""};e.a=Object(r.b)("h2",m)(h(),function(t){switch(t.typed){case"main":return Object(r.a)(c());case"big":return Object(r.a)(l());case"footer":return Object(r.a)(d())}})},159:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("052046d2",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1034c6d6",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("003ff04b",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("238ad52e",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6385c1ac",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1f01e528",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("0b14bfa3",content,!0,{sourceMap:!1})},176:function(t,e,n){"use strict";var o=n(157);n.n(o).a},177:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},180:function(t,e,n){"use strict";var o=n(151),r=n(152);function d(){var data=Object(o.a)(["\n  font-family: Extra-Bold;\n  font-size: 10vh;\n  color: white;\n  letter-spacing: 0.5px;\n  max-width: 850px;\n  @media screen and (max-width: 1279px) {\n    font-size: 8vh;\n    max-width: 100%;\n  }\n"]);return d=function(){return data},data}e.a=r.b.h1(d())},182:function(t,e,n){"use strict";var o=n(159);n.n(o).a},183:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,'.scroll{position:absolute;bottom:50px;left:75px;display:flex;align-items:center}.scroll p{margin-left:10px;text-align:center}@media screen and (max-width:1279px){.scroll{left:10px;bottom:10px}}.main{position:relative;background:url(/img/W.png) no-repeat 50%;background-size:80vh auto}.title{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.title h2{margin-top:10px}@media screen and (max-width:1279px){.title{width:100%}.title *{text-align:center}}html{background:#101010}canvas{width:100%;height:100vh}.js body{opacity:0;transition:opacity .6s}.js body.render{opacity:1}a{text-decoration:none;color:var(--color-link);outline:none}a:focus,a:hover{color:var(--color-link-hover);outline:none}.hidden{position:absolute;overflow:hidden;width:0;height:0;pointer-events:none}.message{position:relative;z-index:100;display:none;padding:1em;text-align:center;color:var(--color-bg);background:var(--color-text)}.icon{display:block;width:1.5em;height:1.5em;margin:0 auto;fill:currentColor}.icon--keyboard{display:none}main{width:100%}.content,main{position:relative}.content{display:grid;justify-content:center;align-items:center;align-content:center;margin:0 auto;min-height:100vh}.content--fixed{position:fixed;z-index:10000;top:0;left:0;display:grid;align-content:space-between;width:100%;max-width:none;min-height:0;height:100vh;padding:1.5em;pointer-events:none;grid-template-columns:50% 50%;grid-template-rows:auto auto 4em;grid-template-areas:"header ..." "... ..." "github demos"}.content--fixed a{pointer-events:auto}.codrops-header{position:relative;z-index:100;display:flex;flex-direction:row;align-items:flex-start;align-items:center;align-self:start;grid-area:header;justify-self:start}.codrops-header__title{font-size:1em;font-weight:500;margin:0;padding:.75em 0}.info{margin:0 0 0 1.25em;color:var(--color-info)}.github{grid-area:github;justify-self:start}.demos,.github{display:block;align-self:end}.demos{position:relative;text-align:center;grid-area:demos}.demo{margin:0 .15em}.demo:focus,.demo:hover{opacity:.5}.demo span{white-space:nowrap;text-transform:lowercase;pointer-events:none}.demo span:before{content:"#"}a.demo--current{pointer-events:none;color:var(--color-link-hover)}.codrops-links{position:relative;display:flex;justify-content:center;margin:0 1em 0 0;text-align:center;white-space:nowrap}.codrops-icon{display:inline-block;margin:.15em;padding:.25em}.content__inner{grid-area:1;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;align-content:center}.scene{position:absolute}.scene--left{width:100vmin;height:100vmin;-webkit-transform:translate3d(-50vmin,0,0);transform:translate3d(-50vmin,0,0)}.scene--full{width:100%;height:100vh}.scene--up{height:150vmin;width:150vmin;top:-50vh;left:50%;margin-left:-75vmin}@media screen and (min-width:55em){.icon--keyboard{position:absolute;right:.55em;bottom:-30%;display:block;width:54px;height:46px;fill:var(--color-link)}.demos{display:flex;padding-right:80px;justify-self:end}.demo{display:block;width:17px;height:17px;margin:0 4px;border-radius:50%;background:var(--color-link)}a.demo--current{background:var(--color-link-hover)}.demo span{line-height:1;position:absolute;right:100%;display:none;margin:0 1em 0 0}.demo--current span{display:block}}@media screen and (max-width:55em){.content{flex-direction:column;height:auto}.content--fixed{position:relative;z-index:1000;display:block;padding:.85em}.content:not(.content--fixed){margin-bottom:6em}.codrops-header{flex-direction:column;align-items:center}.codrops-header__title{font-weight:700;padding-bottom:.25em;text-align:center}.info{margin:0}.github{display:block;margin:1em auto}.codrops-links{margin:0}}.demo-5{--color-text:#fff;--color-bg:#0f1617;--color-link:#4dc4a8;--color-link-hover:#333;--color-info:#ac1122;--color-title:#fff;--color-subtitle:#fff;--color-subtitle-bg:#4dc4a8}.content__title{font-size:10vw;font-weight:400;color:var(--color-title);text-align:center;margin:0;pointer-events:none}.content__subtitle{font-size:1.25em;background:var(--color-subtitle-bg);color:var(--color-subtitle);padding:.45em .5em;line-height:1;margin:0;letter-spacing:.5em;text-indent:.5em;font-weight:700;text-transform:uppercase}@media screen and (max-width:55em){.content__title{font-size:3.5em}.content__subtitle{font-size:.85em}}',""])},184:function(t,e,n){"use strict";var o=n(160);n.n(o).a},185:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".wrap[data-v-ca97d482]{z-index:20000000;-webkit-transform:translate(0);transform:translate(0)}section[data-v-ca97d482]{padding-top:150px;padding-bottom:150px;min-height:100vh;display:flex;justify-content:center;flex-direction:column}section h2[data-v-ca97d482]{max-width:800px}@media screen and (max-width:1279px){section h2[data-v-ca97d482]{max-width:100%}}@media screen and (max-width:1279px){section[data-v-ca97d482]{min-height:auto}}@media screen and (max-width:767px){section[data-v-ca97d482]{padding-top:100px;padding-bottom:0}}.main-title[data-v-ca97d482]{display:flex;justify-content:flex-end;margin-top:-50px}@media screen and (max-width:1279px){.main-title[data-v-ca97d482]{justify-content:flex-start;margin-top:20px}}.main-title p[data-v-ca97d482]{max-width:350px}@media screen and (max-width:1279px){.main-title p[data-v-ca97d482]{max-width:100%}}",""])},187:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPHBhdGggZmlsbD0iI2M3MGVmZSIgZD0iTTQ0MCw2LjUgTDI0LDI0Ni40IEMtMTAuNCwyNjYuMyAtNy4xLDMxNy4yIDI5LjcsMzMyLjMgTDE0NCwzNzkuNiBMMTQ0LDQ2NCBDMTQ0LDUxMC40IDIwMy4yLDUyOS41IDIzMC42LDQ5Mi42IEwyNzQuNCw0MzMuNSBMMzg2LjMsNDc5LjcgQzM5Mi4yLDQ4Mi4xIDM5OC40LDQ4My4zIDQwNC42LDQ4My4zIEM0MTIuOCw0ODMuMyA0MjAuOSw0ODEuMiA0MjguMiw0NzcuMSBDNDQxLDQ2OS45IDQ0OS44LDQ1Ny4xIDQ1Mi4xLDQ0Mi42IEw1MTEuNSw1NS40IEM1MTcuNiwxNS4zIDQ3NC42LC0xMy40IDQ0MCw2LjUgTDQ0MCw2LjUgWiBNMTkyLDQ2NCBMMTkyLDM5OS40IEwyMjguNiw0MTQuNSBMMTkyLDQ2NCBaIE00MDQuNiw0MzUuMyBMMjUwLjgsMzcxLjggTDM5MSwxNjkuNSBDNDAxLjcsMTU0IDM4MS41LDEzNiAzNjcuMywxNDguMyBMMTU1LjgsMzMyLjYgTDQ4LDI4OCBMNDY0LDQ4IEw0MDQuNiw0MzUuMyBaIi8+Cjwvc3ZnPgo="},188:function(t,e,n){"use strict";var o=n(162);n.n(o).a},189:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".top[data-v-b3a38b72]{align-items:center;justify-content:space-between;width:100%}@media screen and (max-width:1279px){.top[data-v-b3a38b72]{flex-direction:column}}@media screen and (max-width:1279px){.title-footer[data-v-b3a38b72]{width:100%}}.title-footer-contacts[data-v-b3a38b72]{margin-top:30px;padding-top:25px;max-width:500px;border-top:1px solid #fff}@media screen and (max-width:1279px){.title-footer-contacts[data-v-b3a38b72]{max-width:100%}}.title-footer-contacts-contact[data-v-b3a38b72]{display:flex;align-items:center;margin-bottom:10px}.title-footer-contacts-contact *[data-v-b3a38b72]{color:#fff;font-family:Medium;font-size:18px}@media screen and (max-width:1279px){.title-footer-contacts-contact *[data-v-b3a38b72]{font-size:16px}}.title-footer-contacts-contact span[data-v-b3a38b72]{color:#fe0e55}.title-footer-contacts-contact a[data-v-b3a38b72]{margin-left:10px}.top[data-v-b3a38b72]{display:flex}.top h2[data-v-b3a38b72]{max-width:500px;text-align:left;margin-bottom:10px}@media screen and (max-width:1279px){.top h2[data-v-b3a38b72]{max-width:100%}}footer[data-v-b3a38b72]{-webkit-transform:translate(0);transform:translate(0);z-index:22222;height:100vh;min-height:500px;display:flex;flex-direction:column;justify-content:center}@media screen and (max-width:1279px){footer[data-v-b3a38b72]{padding-top:200px;height:auto}}canvas[data-v-b3a38b72]{width:500px;height:500px}@media screen and (max-width:1279px){canvas[data-v-b3a38b72]{max-width:500px;width:100%;height:300px}}.copy[data-v-b3a38b72]{-webkit-transform:translate(0);transform:translate(0);z-index:22222;text-align:center}",""])},190:function(t,e,n){"use strict";var o=n(163);n.n(o).a},191:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"section[data-v-51a5b56e]{display:flex;align-items:center;height:100vh;min-height:780px}@media screen and (max-width:1279px){section[data-v-51a5b56e]{height:auto}}@media screen and (max-width:767px){section[data-v-51a5b56e]{min-height:600px}}.project[data-v-51a5b56e]{width:100%}.project-el[data-v-51a5b56e]{position:relative;width:1000px;height:615px}@media screen and (max-width:1279px){.project-el[data-v-51a5b56e]{width:100%;height:500px;margin-top:-50px}}@media screen and (max-width:767px){.project-el[data-v-51a5b56e]{height:300px}}.project-el-title[data-v-51a5b56e]{width:445px;height:235px;position:absolute;right:-222.5px;bottom:-117.5px;background:#000;padding:25px 30px;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:1279px){.project-el-title[data-v-51a5b56e]{right:0;width:100%}}@media screen and (max-width:767px){.project-el-title[data-v-51a5b56e]{bottom:-235px}}.project-el-title-bottom[data-v-51a5b56e]{display:flex;justify-content:space-between}.project-el-title-bottom img[data-v-51a5b56e]{transition:.4s}.project-el-title a[data-v-51a5b56e]{position:absolute;left:0;top:0;width:100%;height:100%}.project-el-title:hover img[data-v-51a5b56e]{margin-right:20px}.project-el-image[data-v-51a5b56e]{position:absolute;left:0;top:0;width:100%;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover;transition:all .3s}.project-el-image-wr[data-v-51a5b56e]{overflow:hidden;width:100%;height:615px}",""])},192:function(t,e,n){"use strict";var o=n(164);n.n(o).a},193:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".projects[data-v-7abea805]{display:flex;flex-direction:column;-webkit-transform:translate(0);transform:translate(0);z-index:20000000}",""])},199:function(t,e,n){"use strict";var o=n(165);n.n(o).a},200:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"img[data-v-72970188]{position:fixed;top:25px;left:75px;z-index:1000000000}@media screen and (max-width:1279px){img[data-v-72970188]{left:10px;top:10px}}",""])},202:function(t,e,n){"use strict";var o=n(166);n.n(o).a},203:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".fade-enter-active[data-v-36efdd68],.fade-leave-active[data-v-36efdd68]{transition:all 1s}.fade-enter[data-v-36efdd68],.fade-leave-to[data-v-36efdd68]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.load__none[data-v-36efdd68]{display:none;color:#fff}.load__animation[data-v-36efdd68]{border:5px solid #272727;border-top:5px groove #c70efe;height:100px;width:100px;border-radius:100%;position:relative;top:0;left:0;right:0;bottom:0;margin:auto;-webkit-animation:turn-data-v-36efdd68 1.5s linear infinite;animation:turn-data-v-36efdd68 1.5s linear infinite}.load__container[data-v-36efdd68]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:all .1s}@-webkit-keyframes turn-data-v-36efdd68{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes turn-data-v-36efdd68{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.load__title[data-v-36efdd68]{color:#fff;font-size:2rem}@-webkit-keyframes loadPage-data-v-36efdd68{0%{opacity:1}50%{opacity:.5}to{opacity:1}}@keyframes loadPage-data-v-36efdd68{0%{opacity:1}50%{opacity:.5}to{opacity:1}}.preloader[data-v-36efdd68]{position:fixed;top:0;left:0;width:100%;height:100%;background:#0b0812;z-index:1000000000000000}p[data-v-36efdd68]{color:#fff}.project[data-v-36efdd68]{position:relative;width:1000px;height:600px;background:#fff}.project-title[data-v-36efdd68]{position:absolute;bottom:-200px;right:-300px;width:600px;height:300px;background:red}.wrapper[data-v-36efdd68]{min-height:100vh}",""])},205:function(t,e,n){"use strict";n(176);var o=n(18);Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports},206:function(t,e,n){"use strict";n.r(e);var o=n(151),r=n(152);function d(){var data=Object(o.a)(["\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  @media screen and (max-width: 1279px) {\n    padding: 0 10px;\n  }\n"]);return d=function(){return data},data}function l(){var data=Object(o.a)([""]);return l=function(){return data},data}function c(){var data=Object(o.a)([""]);return c=function(){return data},data}var h=r.b.section(c()),m=r.b.div(l()),f=r.b.div(d()),v=n(156).a,x=(n(182),n(18)),w=Object(x.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("canvas",{attrs:{id:"scene"}}),n("div",{staticClass:"title"},[n("H1",{attrs:{typed:"normal","data-aos":"zoom-in","data-aos-duration":"1000"}},[t._v("Andrey Wayne")]),n("H2",{attrs:{typed:"main","data-aos":"fade-up","data-aos-duration":"1500"}},[t._v("Креативный frontend разработчик")])],1),n("div",{staticClass:"scroll"},[n("img",{attrs:{src:"/img/arrow-scroll.svg"}}),n("div",{staticClass:"scroll-title"},[n("Title",{attrs:{typed:"min"}},[t._v("s"),n("br"),t._v("c"),n("br"),t._v("r"),n("br"),t._v("o"),n("br"),t._v("l"),n("br"),t._v("l")])],1)])])},[],!1,null,null,null).exports,y=n(168),M=n.n(y),k=n(158),j=n(155),C=n(153),_=n.n(C),I=(n(154),{components:{Wrapper:m,Container:f,Section:h,H2:k.a,Title:j.a}}),T=(n(184),Object(x.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("Wrapper",{staticClass:"wrap"},[e("Container",[e("Section",[e("H2",{attrs:{typed:"big","data-aos":"fade-up"}},[this._v("Способен реализовать любую идею")]),e("div",{staticClass:"main-title"},[e("Title",{attrs:{"data-aos":"fade-up",typed:"normal"}},[this._v("Специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами, с веб-студиями. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.")])],1)],1)],1)],1)},[],!1,null,"ca97d482",null).exports),D=n(73),z=(n(186),n(187)),L=n.n(z),E={components:{Container:f,H2:k.a,Title:j.a},mounted:function(){!function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,element){var n=(new Date).getTime(),o=Math.max(0,16-(n-t)),r=window.setTimeout(function(){e(n+o)},o);return t=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var t={density:16,drawDistance:24,baseRadius:4,maxLineThickness:4,reactionSensitivity:3,lineThickness:1,points:[],mouse:{x:-1e3,y:-1e3,down:!1},animation:null,canvas:null,context:null,imageInput:null,bgImage:null,bgCanvas:null,bgContext:null,bgContextPixelData:null,init:function(){this.canvas=document.getElementById("canvas"),this.context=canvas.getContext("2d"),this.context.globalCompositeOperation="lighter",this.canvas.width=500,this.canvas.height=500,this.canvas.style.display="block",this.imageInput=document.createElement("input"),this.imageInput.setAttribute("type","file"),this.imageInput.style.visibility="hidden",this.imageInput.addEventListener("change",this.upload,!1),document.body.appendChild(this.imageInput),this.canvas.addEventListener("mousemove",this.mouseMove,!1),this.canvas.addEventListener("mousedown",this.mouseDown,!1),this.canvas.addEventListener("mouseup",this.mouseUp,!1),this.canvas.addEventListener("mouseout",this.mouseOut,!1),window.onresize=function(e){t.canvas.width=500,t.canvas.height=500,t.onWindowResize()},this.loadData(L.a)},preparePoints:function(){var i,t;this.points=[];var e=this.bgContextPixelData.data;for(i=0;i<this.canvas.height;i+=this.density)for(t=0;t<this.canvas.width;t+=this.density){var n=4*(t+i*this.bgContextPixelData.width);if(!(e[n]>200&&e[n+1]>200&&e[n+2]>200||0===e[n+3])){var o="rgba("+e[n]+","+e[n+1]+","+e[n+2]+",1)";this.points.push({x:t,y:i,originalX:t,originalY:i,color:o})}}},updatePoints:function(){var i,t,e,n;for(i=0;i<this.points.length;i++)t=this.points[i],e=Math.atan2(t.y-this.mouse.y,t.x-this.mouse.x),n=this.mouse.down?200*this.reactionSensitivity/Math.sqrt((this.mouse.x-t.x)*(this.mouse.x-t.x)+(this.mouse.y-t.y)*(this.mouse.y-t.y)):100*this.reactionSensitivity/Math.sqrt((this.mouse.x-t.x)*(this.mouse.x-t.x)+(this.mouse.y-t.y)*(this.mouse.y-t.y)),t.x+=Math.cos(e)*n+.05*(t.originalX-t.x),t.y+=Math.sin(e)*n+.05*(t.originalY-t.y)},drawLines:function(){var i,t,e,n,o;for(i=0;i<this.points.length;i++)for(e=this.points[i],this.context.fillStyle=e.color,this.context.strokeStyle=e.color,t=0;t<this.points.length;t++)(n=this.points[t])!=e&&(o=Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y)))<=this.drawDistance&&(this.context.lineWidth=(1-o/this.drawDistance)*this.maxLineThickness*this.lineThickness,this.context.beginPath(),this.context.moveTo(e.x,e.y),this.context.lineTo(n.x,n.y),this.context.stroke())},drawPoints:function(){var i,t;for(i=0;i<this.points.length;i++)t=this.points[i],this.context.fillStyle=t.color,this.context.strokeStyle=t.color,this.context.beginPath(),this.context.arc(t.x,t.y,this.baseRadius,0,2*Math.PI,!0),this.context.closePath(),this.context.fill()},draw:function(){this.animation=requestAnimationFrame(function(){t.draw()}),this.clear(),this.updatePoints(),this.drawLines(),this.drawPoints()},clear:function(){this.canvas.width=this.canvas.width},loadData:function(data){this.bgImage=new Image,this.bgImage.src=data,this.bgImage.onload=function(){t.drawImageToBackground()}},drawImageToBackground:function(){var t,e;if(this.bgCanvas=document.createElement("canvas"),this.bgCanvas.width=this.canvas.width,this.bgCanvas.height=this.canvas.height,this.bgImage.width>this.bgCanvas.width-100||this.bgImage.height>this.bgCanvas.height-100){var n=Math.max(this.bgImage.width/(this.bgCanvas.width-100),this.bgImage.height/(this.bgCanvas.height-100));t=this.bgImage.width/n,e=this.bgImage.height/n}else t=this.bgImage.width,e=this.bgImage.height;this.bgContext=this.bgCanvas.getContext("2d"),this.bgContext.drawImage(this.bgImage,(this.canvas.width-t)/2,(this.canvas.height-e)/2,t,e),this.bgContextPixelData=this.bgContext.getImageData(0,0,this.bgCanvas.width,this.bgCanvas.height),this.preparePoints(),this.draw()},mouseDown:function(e){t.mouse.down=!0},mouseUp:function(e){t.mouse.down=!1},mouseMove:function(e){t.mouse.x=e.offsetX||e.layerX-t.canvas.offsetLeft,t.mouse.y=e.offsetY||e.layerY-t.canvas.offsetTop},mouseOut:function(e){t.mouse.x=-1e3,t.mouse.y=-1e3,t.mouse.down=!1},onWindowResize:function(){cancelAnimationFrame(this.animation),this.drawImageToBackground()}};setTimeout(function(){t.init()},10)}},O=(n(188),Object(x.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("footer",[n("div",{staticClass:"top"},[n("div",{staticClass:"title-footer"},[n("div",{staticClass:"title-footer-desc"},[n("H2",{attrs:{typed:"footer"}},[t._v("Создадим нечто крутое?")]),n("Title",{attrs:{typed:"min"}},[t._v("Каждый проект сделан с теплом и любовью!")])],1),n("div",{staticClass:"title-footer-contacts"},[n("div",{staticClass:"title-footer-contacts-contact"},[n("p",[t._v("email:"),n("span",[t._v("//")])]),n("a",{attrs:{href:"mailto: developer@andreywayne.ru"}},[t._v("developer@andreywayne.ru")])]),n("div",{staticClass:"title-footer-contacts-contact"},[n("p",[t._v("tel:"),n("span",[t._v("//")])]),n("a",{attrs:{href:"tel:89507458396"}},[t._v("+7 (950)-745-83-96")])]),n("div",{staticClass:"title-footer-contacts-contact"},[n("p",[t._v("vk:"),n("span",[t._v("//")])]),n("a",{attrs:{href:"https://vk.com/killwayne",target:"_blank"}},[t._v("vk.com/andreywayne")])])])]),n("canvas",{attrs:{id:"canvas"}})])]),n("Title",{staticClass:"copy",attrs:{typed:"min"}},[t._v("© andreywayne 2019")])],1)},[],!1,null,"b3a38b72",null).exports);function P(){var data=Object(o.a)(["\n          font-family: Medium;\n          font-size: 24px;\n          color: #FFFFFF;\n          letter-spacing: 0.5px;\n          @media screen and (max-width: 1279px) {\n            font-size: 18px;\n          }\n        "]);return P=function(){return data},data}function F(){var data=Object(o.a)(["\n  ","\n"]);return F=function(){return data},data}var N={typed:String,styled:""},S=Object(r.b)("h3",N)(F(),function(t){switch(t.typed){case"project":return Object(r.a)(P())}}),A={props:["title","subtitle","image","link"],components:{Wrapper:m,Container:f,Section:h,ParallaxContainer:D.ParallaxContainer,ParallaxElement:D.ParallaxElement,H3:S,Title:j.a}},Q=(n(190),{props:["api"],components:{Project:Object(x.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("ParallaxContainer",[n("ParallaxElement",{attrs:{parallaxStrength:-10,type:"depth"}},[n("Wrapper",[n("Container",[n("Section",[n("div",{staticClass:"project-el"},[n("div",{staticClass:"project-el-image-wr"},[n("div",{staticClass:"project-el-image",style:{backgroundImage:"url("+t.image+")"}})]),n("div",{staticClass:"project-el-title"},[n("H3",{attrs:{typed:"project"}},[t._v(t._s(t.title))]),n("div",{staticClass:"project-el-title-bottom"},[n("Title",{attrs:{typed:"normal"}},[t._v(t._s(t.subtitle))]),n("img",{attrs:{src:"/img/arrows.svg"}}),n("a",{attrs:{href:t.link,target:"_blank"}})],1)],1)])])],1)],1)],1)],1)],1)},[],!1,null,"51a5b56e",null).exports}}),B=(n(192),Object(x.a)(Q,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"projects"},this._l(this.api,function(t,i){return e("Project",{key:i,attrs:{title:t.title,subtitle:t.subtitle,link:t.link,image:t.image}})}),1)},[],!1,null,"7abea805",null).exports),H=(n(194),n(198)),W=n.n(H),U={mounted:function(){var t,canvas,e,n,o,r,d,l=Math.PI,c=Math.cos,h=Math.sin,m=Math.abs,f=(Math.sqrt,Math.pow,Math.round,Math.random),v=(Math.atan2,2*l),x=function(t){return t*f()},w=function(t){return t-x(2*t)},y=function(t,e){var n=.5*e;return m((t+n)%e-n)/n},M=function(t,e,n){return(1-n)*t+n*e},k=9,j=700*k,C=100,_=50,I=150,T=.1,D=2,z=1,L=4,E=220,O=100,P=8,F=.00125,N=.00125,S=5e-4,A="hsla(260,40%,5%,1)";function Q(i){var t,e,o,r,l,c;t=x(canvas.a.width),e=n[1]+w(C),o=_+x(I),r=T+x(D),l=z+x(L),c=E+x(O),d.set([t,e,0,0,0,o,r,l,c],i)}function B(i){var t,n,l,m,f,x,w,k,j,C,_=1+i,I=2+i,T=3+i,D=4+i,z=5+i,L=6+i,E=7+i,O=8+i;n=d[i],l=d[_],t=r.noise3D(n*F,l*N,o*S)*P*v,m=M(d[I],c(t),.5),f=M(d[T],h(t),.5),x=d[D],w=d[z],function(t,n,o,r,d,l,c,h){e.a.save(),e.a.lineCap="round",e.a.lineWidth=c,e.a.strokeStyle="hsla(".concat(h,",100%,60%,").concat(y(d,l),")"),e.a.beginPath(),e.a.moveTo(t,n),e.a.lineTo(o,r),e.a.stroke(),e.a.closePath(),e.a.restore()}(n,l,j=n+m*(k=d[L]),C=l+f*k,x,w,d[E],d[O]),x++,d[i]=j,d[_]=C,d[I]=m,d[T]=f,d[D]=x,(function(t,e){return t>canvas.a.width||t<0||e>canvas.a.height||e<0}(n,l)||x>w)&&Q(i)}function H(){var t=window,o=t.innerWidth,r=t.innerHeight;canvas.a.width=o,canvas.a.height=r,e.a.drawImage(canvas.b,0,0),canvas.b.width=o,canvas.b.height=r,e.b.drawImage(canvas.a,0,0),n[0]=.5*canvas.a.width,n[1]=.5*canvas.a.height}function U(){o++,e.a.clearRect(0,0,canvas.a.width,canvas.a.height),e.b.fillStyle=A,e.b.fillRect(0,0,canvas.a.width,canvas.a.height),function(){var i;for(i=0;i<j;i+=k)B(i)}(),e.b.save(),e.b.filter="blur(8px) brightness(200%)",e.b.globalCompositeOperation="lighter",e.b.drawImage(canvas.a,0,0),e.b.restore(),e.b.save(),e.b.filter="blur(4px) brightness(200%)",e.b.globalCompositeOperation="lighter",e.b.drawImage(canvas.a,0,0),e.b.restore(),e.b.save(),e.b.globalCompositeOperation="lighter",e.b.drawImage(canvas.a,0,0),e.b.restore(),window.requestAnimationFrame(U)}window.addEventListener("load",function(){t=document.querySelector(".content--canvas"),(canvas={a:document.createElement("canvas"),b:document.createElement("canvas")}).b.style="\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t",t.appendChild(canvas.b),e={a:canvas.a.getContext("2d"),b:canvas.b.getContext("2d")},n=[],H(),function(){var i;for(o=0,r=new W.a,d=new Float32Array(j),i=0;i<j;i+=k)Q(i)}(),U()}),window.addEventListener("resize",H)}},R=Object(x.a)(U,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"frame__title-wrap content--canvas"})},[],!1,null,null,null).exports,X={},Y=(n(199),Object(x.a)(X,function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:"/img/logo.png"}})},[],!1,null,"72970188",null).exports),$=n(201),G=n.n($),V={data:function(){return{preloader:!0,projects:[{title:"IT система муниципал",subtitle:"Система для органов самоуправления",link:"http://mopushkin.spb.ru",image:"/img/projects/mopushkin.jpg"},{title:"Муниципалитет 19-24",subtitle:"Муниципалитет нового поколения",link:"https://mo1924.ru/",image:"/img/projects/spb.jpg"},{title:"Gilmon",subtitle:"Популярный сервис скидок",link:"https://chelyabinsk.gilmon.ru/",image:"/img/projects/gilmon.jpg"},{title:"TIAP",subtitle:"Транспортный информационно- аналитический портал",link:"https://tiap.ru/",image:"/img/projects/tiap.jpg"},{title:"Пик Формы",subtitle:"Интернет магазин спортивного питания",link:"http://pikformi.ru/",image:"/img/projects/pikformi.jpg"}]}},mounted:function(){var t=this;_.a.init(),G()(document).ready(function(){setTimeout(function(){t.preloader=!1},3e3)})},components:{Wrapper:m,Container:f,Section:h,Main:w,Parallax:M.a,MainTitle:T,ParallaxElement:D.ParallaxElement,ParallaxContainer:D.ParallaxContainer,Footer:O,Projects:B,Us:R,Logo:Y}},Z=(n(202),Object(x.a)(V,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"fade"}},[this.preloader?e("div",{staticClass:"preloader"},[e("div",{staticClass:"load__container"},[e("div",{staticClass:"load__animation"}),e("div",{staticClass:"load__mask"})])]):this._e()]),e("Logo"),e("Us"),e("Main"),e("MainTitle"),e("Projects",{attrs:{api:this.projects}}),e("Footer")],1)},[],!1,null,"36efdd68",null));e.default=Z.exports}}]);