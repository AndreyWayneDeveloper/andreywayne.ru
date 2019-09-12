<template lang="html">
  <main>
    <Logo />
    <Menu />
    <div class="morph-wrap">
      <svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
        <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"/>
      </svg>
    </div>
    <div class='grid'>
    <div class="content-wrap content-wrap--about">
      <div class="content content--layout content--layout-1 content-abs">
        <h1>
          Andrey Wayne
          <br />
          обо мне/
        </h1>
        <div class="content__section">
          <h2 class="content__text">#Andrey Wayne</h2>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-2  abs-mob">
          <InfoMe state='one'></InfoMe>
        <!-- <div class="sect-about">
          <InfoMe></InfoMe>
          <h3>Andrey Wayne - это профессиональная <br /> веб-разработка</h3>
          <p>Делаю IT-системы, новостные порталы, сервисы, интернет-магазины, лендинги, сайты компаний.</p>
          <p>Умею из высоконагруженных, крупных, трудных проектов отдавать в продакшн продукт, который можно с гордостью презентовать.</p>
        </div> -->
        <div class="content__section">
          <h2 class="content__text">#кто я?</h2>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-3  abs-mob">
        <InfoMe state='two'></InfoMe>
        <!-- <div class="sect-about">
          <h3>Чем сложнее, тем интереснее</h3>
          <p>В основном специализируюсь на сложных, крупных веб-проектах.</p>
          <p>Если попадается трудная задача, то я не отказываюсь от неё, а наоборот появляется большой интерес к ней. Оттуда способен реализовать любую техническую задачу. </p>
        </div> -->
        <div class="content__section">
          <h2 class="content__text">#что я делаю?</h2>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-4 abs-mob">
        <InfoMe state='three'></InfoMe>
        <!-- <div class="sect-about">
          <h3>Иду в шаг с новыми технологиями</h3>
          <p>Frontend: Pug, Less, Sass, WebPack, Gulp, JS, Vanilla, Vue, Vue-router, Vuex, Nuxt, React, React-router, Redux, Next, Axios, Fetch, Anime, Pixi, GSAP</p>
          <p>Backend: Node, Express, Mongodb</p>
          <p>Другое: Git, Npm, BEM, Sketch, Figma</p>
        </div> -->
        <div class="content__section">
          <h2 class="content__text">#как я делаю?</h2>
        </div>
      </div>
    </div>
    <section class="content-wrap content--related">
      <div class="content content--layout content--layout-5 abs-mob">
        <InfoMe state='four'></InfoMe>
        <div class="content__section">
          <h2 class="content__text">#На чём делаю?</h2>
        </div>
      </div>
    </section>
    </div>
    <Preloader></Preloader>
  </main>
</template>

<script>
import charming from 'charming'
import imagesLoaded from 'imagesloaded'
import scrollMonitor from 'scrollmonitor'
console.log(scrollMonitor)
import anime from 'animejs'
import $ from 'jquery'
import Logo from '~/components/elements/Logo'
import Menu from '~/components/elements/Menu'
import InfoMe from '~/components/elements/InfoMe'
import Preloader from '~/components/elements/Preloader'
// console.log(Nearby)
// console.log(TweenMax)
// <div class="content">
//   <div class="content__section about">
//     <div class='glitch' data-text="WAYNE">
//       ANDREY
//     </div>
//     <h2 class="content__text">@Andrey Wayne</h2>
//   </div>
  // <div class="content__section">
  //   <h2 class="content__text">@кто я?</h2>
  // </div>
//   <div class="content__section">
//     <h2 class="content__text">@Что я умею?</h2>
//   </div>
//   <div class="content__section">
//     <h2 class="content__text">@Давай сделаем это?</h2>
//   </div>
// </div>
export default {
  components: {
    Logo,
    Menu,
    InfoMe,
    Preloader
  },
  mounted() {
    $(window).ready(() => {
      ( function( window ) {

      'use strict';

      // class helper functions from bonzo https://github.com/ded/bonzo

      function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      }

      // classList support for class management
      // altho to be fair, the api sucks because it won't accept multiple classes at once
      var hasClass, addClass, removeClass;

      if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
          return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
          elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
          elem.classList.remove( c );
        };
      }
      else {
        hasClass = function( elem, c ) {
          return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
          if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function( elem, c ) {
          elem.className = elem.className.replace( classReg( c ), ' ' );
        };
      }

      function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
      }

      var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };

      // transport
      if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
      } else {
        // browser global
        window.classie = classie;
      }

      })( window );

      (function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();
      {
      	// Helper vars and functions.
      	const extend = function(a, b) {
      		for( let key in b ) {
      			if( b.hasOwnProperty( key ) ) {
      				a[key] = b[key];
      			}
      		}
      		return a;
      	};

      	// from http://www.quirksmode.org/js/events_properties.html#position
      	const getMousePos = function(ev) {
      		let posx = 0;
      		let posy = 0;
      		if (!ev) ev = window.event;
      		if (ev.pageX || ev.pageY) 	{
      			posx = ev.pageX;
      			posy = ev.pageY;
      		}
      		else if (ev.clientX || ev.clientY) 	{
      			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      		}
      		return { x : posx, y : posy };
      	};

      	const TiltObj = function(el, options) {
      		this.el = el;
      		this.options = extend({}, this.options);
      		extend(this.options, options);
      		this.DOM = {};
      		this.DOM.img = this.el.querySelector('.content__img');
      		this.DOM.title = this.el.querySelector('.content__title');
      		this._initEvents();
      	};

      	TiltObj.prototype.options = {
      		movement: {
      			img : { translation : {x: -10, y: -10} },
      			title : { translation : {x: 25, y: 25} },
      		}
      	};

      	TiltObj.prototype._initEvents = function() {
      		this.mouseenterFn = (ev) => {
      			anime.remove(this.DOM.img);
      			anime.remove(this.DOM.title);
      		};

      		this.mousemoveFn = (ev) => {
      			requestAnimationFrame(() => this._layout(ev));
      		};

      		this.mouseleaveFn = (ev) => {
      			requestAnimationFrame(() => {
      				anime({
      					targets: [this.DOM.img, this.DOM.title],
      					duration: 1500,
      					easing: 'easeOutElastic',
      					elasticity: 400,
      					translateX: 0,
      					translateY: 0
      				});
      			});
      		};

      		this.el.addEventListener('mousemove', this.mousemoveFn);
      		this.el.addEventListener('mouseleave', this.mouseleaveFn);
      		this.el.addEventListener('mouseenter', this.mouseenterFn);
      	};

      	TiltObj.prototype._layout = function(ev) {
      		// Mouse position relative to the document.
      		const mousepos = getMousePos(ev);
      		// Document scrolls.
      		const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
      		const bounds = this.el.getBoundingClientRect();
      		// Mouse position relative to the main element (this.DOM.el).
      		const relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

      		// Movement settings for the animatable elements.
      		const t = {
      			img: this.options.movement.img.translation,
      			title: this.options.movement.title.translation,
      		};

      		const transforms = {
      			img : {
      				x: (-1*t.img.x - t.img.x)/bounds.width*relmousepos.x + t.img.x,
      				y: (-1*t.img.y - t.img.y)/bounds.height*relmousepos.y + t.img.y
      			},
      			title : {
      				x: (-1*t.title.x - t.title.x)/bounds.width*relmousepos.x + t.title.x,
      				y: (-1*t.title.y - t.title.y)/bounds.height*relmousepos.y + t.title.y
      			}
      		};
      		// this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
      		// this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
      	};

      	const DOM = {};
      	DOM.svg = document.querySelector('.morph');
      	DOM.shapeEl = DOM.svg.querySelector('path');
      	DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
      	DOM.contentLinks = Array.from(document.querySelectorAll('.content__link'));
      	DOM.footer = document.querySelector('.content--related');
      	const contentElemsTotal = DOM.contentElems.length;
      	const shapes = [
      		{
      			path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			scaleX: 1.2,
      			scaleY: 1,
      			rotate: 0,
      			tx: -30,
      			ty: -300,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 3000,
      					easing: 'easeOutElastic',
      					elasticity: 600
      				},
      				svg: {
      					duration: 2000,
      					easing: 'easeOutElastic'
      				}
      			}
      		},
      		{
      			path: 'M 415.6,206.3 C 407.4,286.6 438.1,373.6 496.2,454.8 554.3,536.1 497,597.2 579.7,685.7 662.4,774.1 834.3,731.7 898.5,653.4 962.3,575 967.1,486 937.7,370 909.3,253.9 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
      			pathAlt: 'M 415.6,206.3 C 407.4,286.6 415.5,381.7 473.6,462.9 531.7,544.2 482.5,637.6 579.7,685.7 676.9,733.8 826.2,710.7 890.4,632.4 954.2,554 926.8,487.6 937.7,370 948.6,252.4 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
      			scaleX: .4,
      			scaleY: 1.4,
      			rotate: 0,
      			tx: 0,
      			ty: -100,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 2000,
      					easing: 'easeOutElastic',
      					elasticity: 600
      				},
      				svg: {
      					duration: 2000,
      					easing: 'easeOutElastic'
      				}
      			}
      		},
      		{
      			path: 'M 383.8,163.4 C 335.8,352.3 591.6,317.1 608.7,420.8 625.8,524.5 580.5,626 647.3,688 714,750 837.1,760.5 940.9,661.5 1044,562.3 1041,455.8 975.8,393.6 909.8,331.5 854.2,365.4 784.4,328.1 714.6,290.8 771.9,245.2 733.1,132.4 694.2,19.52 431.9,-25.48 383.8,163.4 Z',
      			pathAlt: 'M 383.8,163.4 C 345.5,324.9 591.6,317.1 608.7,420.8 625.8,524.5 595.1,597 647.3,688 699.5,779 837.1,760.5 940.9,661.5 1044,562.3 1068,444.4 975.8,393.6 884,342.8 854.2,365.4 784.4,328.1 714.6,290.8 820.3,237.2 733.1,132.4 645.9,27.62 422.1,1.919 383.8,163.4 Z',
      			scaleX: .7,
      			scaleY: 1.1,
      			rotate: -20,
      			tx: 200,
      			ty: 200,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 3000,
      					easing: 'easeOutElastic',
      					elasticity: 600
      				},
      				svg: {
      					duration: 2500,
      					easing: 'easeOutElastic'
      				}
      			}
      		},
      		{
      			path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			scaleX: 1.5,
      			scaleY: 1,
      			rotate: -20,
      			tx: 0,
      			ty: -50,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 3000,
      					easing: 'easeOutQuad',
      					elasticity: 600
      				},
      				svg: {
      					duration: 3000,
      					easing: 'easeOutElastic'
      				}
      			}
      		},
      		{
      			path: 'M 247.6,239.6 C 174.3,404.5 245.5,601.9 358.5,624.3 471.5,646.6 569.1,611.6 659.7,655.7 750.4,699.7 1068,687.6 1153,534.4 1237,381.1 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 928.4,393.8 706.8,283.5 485.2,173.1 320.8,74.68 247.6,239.6 Z',
      			pathAlt: 'M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z',
      			scaleX: 1.8,
      			scaleY: 1.5,
      			rotate: 0,
      			tx: 250,
      			ty: 50,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 3000,
      					easing: 'easeOutElastic',
      					elasticity: 600
      				},
      				svg: {
      					duration: 2000,
      					easing: 'easeOutExpo'
      				}
      			}
      		},
      		// footer shape:
      		{
      			path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
      			scaleX: 2.5,
      			scaleY: 2,
      			rotate: 0,
      			tx: 0,
      			ty: -50,
      			fill: {
      				color: '#3D20A7',
      				duration: 500,
      				easing: 'linear'
      			},
      			animation: {
      				path: {
      					duration: 3000,
      					easing: 'easeOutQuad',
      					elasticity: 600
      				},
      				svg: {
      					duration: 3000,
      					easing: 'easeOutElastic'
      				}
      			}
      		}
      	];
      	let step;

      	const initShapeLoop = function(pos) {
      		pos = pos || 0;
      		anime.remove(DOM.shapeEl);
      		anime({
      			targets: DOM.shapeEl,
      			easing: 'linear',
      			d: [{value: shapes[pos].pathAlt, duration:3500}, {value: shapes[pos].path, duration:3500}],
      			loop: true,
      			fill: {
      				value: shapes[pos].fill.color,
      				duration: shapes[pos].fill.duration,
      				easing: shapes[pos].fill.easing
      			},
      			direction: 'alternate'
      		});
      	};

      	const initShapeEl = function() {
      		anime.remove(DOM.svg);
      		anime({
      			targets: DOM.svg,
      			duration: 1,
      			easing: 'linear',
      			scaleX: shapes[0].scaleX,
      			scaleY: shapes[0].scaleY,
      			translateX: shapes[0].tx+'px',
      			translateY: shapes[0].ty+'px',
      			rotate: shapes[0].rotate+'deg'
      		});

      		initShapeLoop();
      	};

      	const createScrollWatchers = function() {
      		DOM.contentElems.forEach((el,pos) => {
      			const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
      			pos = pos ? pos : contentElemsTotal;
      			const watcher = scrollMonitor.create(scrollElemToWatch,-300);

      			watcher.enterViewport(function() {
      				step = pos;
      				anime.remove(DOM.shapeEl);
      				anime({
      					targets: DOM.shapeEl,
      					duration: shapes[pos].animation.path.duration,
      					easing: shapes[pos].animation.path.easing,
      					elasticity: shapes[pos].animation.path.elasticity || 0,
      					d: shapes[pos].path,
      					fill: {
      						value: shapes[pos].fill.color,
      						duration: shapes[pos].fill.duration,
      						easing: shapes[pos].fill.easing
      					},
      					complete: function() {
      						initShapeLoop(pos);
      					}
      				});

      				anime.remove(DOM.svg);
      				anime({
      					targets: DOM.svg,
      					duration: shapes[pos].animation.svg.duration,
      					easing: shapes[pos].animation.svg.easing,
      					elasticity: shapes[pos].animation.svg.elasticity || 0,
      					scaleX: shapes[pos].scaleX,
      					scaleY: shapes[pos].scaleY,
      					translateX: shapes[pos].tx+'px',
      					translateY: shapes[pos].ty+'px',
      					rotate: shapes[pos].rotate+'deg'
      				});
      			});

      			watcher.exitViewport(function() {
      				const idx = !watcher.isAboveViewport ? pos-1 : pos+1;

      				if( idx <= contentElemsTotal && step !== idx ) {
      					step = idx;
      					anime.remove(DOM.shapeEl);
      					anime({
      						targets: DOM.shapeEl,
      						duration: shapes[idx].animation.path.duration,
      						easing: shapes[idx].animation.path.easing,
      						elasticity: shapes[idx].animation.path.elasticity || 0,
      						d: shapes[idx].path,
      						fill: {
      							value: shapes[idx].fill.color,
      							duration: shapes[idx].fill.duration,
      							easing: shapes[idx].fill.easing
      						},
      						complete: function() {
      							initShapeLoop(idx);
      						}
      					});

      					anime.remove(DOM.svg);
      					anime({
      						targets: DOM.svg,
      						duration: shapes[idx].animation.svg.duration,
      						easing: shapes[idx].animation.svg.easing,
      						elasticity: shapes[idx].animation.svg.elasticity || 0,
      						scaleX: shapes[idx].scaleX,
      						scaleY: shapes[idx].scaleY,
      						translateX: shapes[idx].tx+'px',
      						translateY: shapes[idx].ty+'px',
      						rotate: shapes[idx].rotate+'deg'
      					});
      				}
      			});
      		});
      	};

      	const init = function() {
      		imagesLoaded(document.body, () => {
      			initShapeEl();
      			createScrollWatchers();
      			Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
      			// Remove loading class from body
      			document.body.classList.remove('loading');
      		});
      	}

      	init();
      };
          document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
          {
              const chars = ['$','%','#','@','&','(',')','=','*','/'];
              const charsTotal = chars.length;
              const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

              class Entry {
                  constructor(el) {
                      this.DOM = {el: el};
                      this.DOM.image = this.DOM.el.querySelector('.content__img');
                      this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
                      charming(this.DOM.title.word);
                      this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
                      this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
                      this.lettersTotal = this.DOM.title.letters.length;
                      observer.observe(this.DOM.el);
                  }
                  enter(direction = 'down') {
                      this.DOM.title.word.style.opacity = 1;

                      this.timeouts = [];
                      this.complete = false;
                      let cnt = 0;
                      this.DOM.title.letters.forEach((letter, pos) => {
                          const timeout = setTimeout(() => {
                              letter.innerHTML = chars[getRandomInt(0,charsTotal-1)];
                              setTimeout(() => {
                                  letter.innerHTML = letter.dataset.initial;
                                  ++cnt;
                                  if ( cnt === this.lettersTotal ) {
                                      this.complete = true;
                                  }
                              }, 100);
                          }, pos*80);
                          this.timeouts.push(timeout);
                      });
                  }
                  exit(direction = 'down') {
                      this.DOM.title.word.style.opacity = 0;
                      if ( this.complete ) return;
                      for ( let i = 0, len = this.timeouts.length; i <= len - 1; ++i ) {
                          clearTimeout(this.timeouts[i]);
                      }
                  }
              }

              let observer;
              let current = -1;
              let allentries = [];
              const sections = Array.from(document.querySelectorAll('.content__section'));
              // Preload all the images in the page..
          	imagesLoaded(document.querySelectorAll('.content__img'), () => {
                  document.body.classList.remove('loading');
                  if ('IntersectionObserver' in window) {
                      document.body.classList.add('ioapi');

                      observer = new IntersectionObserver((entries) => {
                          entries.forEach(entry => {
                              if ( entry.intersectionRatio > 0.5 ) {
                                  const newcurrent = sections.indexOf(entry.target);
                                  if ( newcurrent === current ) return;
                                  const direction = newcurrent > current;
                                  if (current >= 0 ) {
                                      allentries[current].exit(direction ? 'down' : 'up');
                                  }
                                  allentries[newcurrent].enter(direction ? 'down' : 'up');
                                  current = newcurrent;
                              }
                          });
                      }, { threshold: 0.5 });

                      sections.forEach(section => allentries.push(new Entry(section)));
                  }
              });
            }
    })
  }
}
</script>

<style scoped lang="less">
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:"\201C" "\201D" "\2018" "\2019";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}
*,
*::after,
*::before {
	box-sizing: border-box;
}

body {
	font-family: Futura, "futura-pt", sans-serif;
	min-height: 100vh;
	color: #57585c;
	color: var(--color-text);
	background-color: #fff;
	background: var(--color-bg);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	cursor: pointer;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
	outline: none;
}

button:focus {
	outline: none;
}

/* Page Loader */
.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	pointer-events: none;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

/* Icons */
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}

main {
	position: relative;
}

/* Header */
.codrops-header {
	padding: calc(4vmax - 0.25rem);
	position: relative;
	z-index: 100;
	display: flex;
	align-items: flex-start;
	align-items: center;
	flex-wrap: wrap;
}

.codrops-header::before {
	content: 'Your browser does not support Intersection Observer API';
	position: absolute;
	background: red;
	padding: 0.5rem;
	font-weight: bold;
	font-size: 0.75rem;
	color: #fff;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
}

.ioapi .codrops-header::before {
	display: none;
}

.codrops-header__title {
	font-size: 1em;
	font-weight: bold;
	margin: 0;
	padding: 0 1em;
}

.codrops-links {
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
}

.codrops-icon {
	display: inline-block;
	padding: 0.25rem;
}

.github {
	display: block;
	margin: 0 2rem;
}

.info {
	position: fixed;
	bottom: 6vmax;
	right: 2vmax;
	margin: 0;
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
	z-index: 100;
	color: var(--color-info);
	text-align: right;
}

.demos {
	position: relative;
	display: block;
	margin: 0 0 0 2rem;
}

.demo {
	margin: 0 0.25em;
}

.demo span {
	white-space: nowrap;
	pointer-events: none;
}

a.demo--current {
	pointer-events: none;
	color: var(--color-link-hover);
}

.content {
	position: relative;
	display: block;
  z-index: 22222222;
}

.content__section {
	position: absolute;
	text-align: right;
  width: 100%;
  height: 100%;
}



.content__link {
	display: block;
	position: relative;
	max-width: 100%;
	margin: 10vh 0 30vh auto;
}

.content__link--nobottom {
	margin-bottom: 10vh;
}

.content__img {
	position: relative;
	display: block;
	max-width: 90%;
	margin: 0 0 0 auto;
}

.content__main,
.content__text {
	color: var(--color-scroll-text);
	font-size: var(--fontsize-scroll-text);
	font-family: var(--font-scroll-text);
	margin: 0;
	line-height: 1;
	text-transform: lowercase;
	font-weight: normal;
}

.content__main,
.content__contact {
	position: absolute;
	bottom: calc(var(--fontsize-scroll-text) * 1.5 + 6vmax);
}

.content__main span {
	display: block;
}

.content__text {
	position: absolute;
	bottom: 6vmax;
	left: 0;
	padding-left: 4vmax;
	z-index: 1000;
	line-height: 0.8;
  @media screen and (max-height: 800px) {
    bottom: 3vmax;
    font-size: 1vw;
  }
}

.js .ioapi .content__text {
	position: fixed;
	opacity: 0;
	white-space: pre;
}

.content__text span {
	display: inline-block;
}

.content__contact {
	font-size: calc(var(--fontsize-scroll-text) / 2);
	font-family: var(--font-scroll-text);
}

.content__contact a:last-child {
	display: block;
}

@media screen and (max-width: 50em) {
	.codrops-header {
		display: block;
		text-align: center;
		padding: 2.5rem 1rem 0;
	}
	.codrops-header__title {
		margin: 1rem 0;
	}
	.demos {
		margin: 0;
	}
	.info {
		padding: 0;
		position: relative;
		-webkit-writing-mode: initial;
		writing-mode: initial;
		text-align: center;
		bottom: auto;
		right: auto;
		margin: 0;
	}
	.github {
		display: none;
	}
	.content__text,
	.js.ioapi .content__text {
		bottom: 3vmax;
	}
	.content__section:first-child,
	.content__section:last-child {
		height: calc(100vh - 13.875em);
	}
	.content__main,
	.content__contact {
		bottom: calc(var(--fontsize-scroll-text) * 1.5 + 15vh);
	}
}

.about {
  min-height: 100vh;
  background: url(/img/about.jpg) no-repeat center;
  background-size: cover;
}

.glitch {
  color: white;
  text-shadow: -2px 0 yellow;
  font-size: 150px;
  text-transform: upercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
}
.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #49FC00;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 13s infinite linear alternate-reverse;
}
.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #b300fc;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 12.5s infinite linear alternate-reverse;
}
@keyframes glitch-anim {
  0% {
    clip: rect(28px, 9999px, 145px, 0);
  }
  4.166666666666666% {
    clip: rect(141px, 9999px, 18px, 0);
  }
  8.333333333333332% {
    clip: rect(150px, 9999px, 12px, 0);
  }
  12.5% {
    clip: rect(16px, 9999px, 84px, 0);
  }
  16.666666666666664% {
    clip: rect(23px, 9999px, 125px, 0);
  }
  20.833333333333336% {
    clip: rect(131px, 9999px, 137px, 0);
  }
  25% {
    clip: rect(20px, 9999px, 94px, 0);
  }
  29.166666666666668% {
    clip: rect(32px, 9999px, 29px, 0);
  }
  33.33333333333333% {
    clip: rect(71px, 9999px, 100px, 0);
  }
  37.5% {
    clip: rect(112px, 9999px, 131px, 0);
  }
  41.66666666666667% {
    clip: rect(26px, 9999px, 30px, 0);
  }
  45.83333333333333% {
    clip: rect(136px, 9999px, 73px, 0);
  }
  50% {
    clip: rect(127px, 9999px, 21px, 0);
  }
  54.166666666666664% {
    clip: rect(142px, 9999px, 27px, 0);
  }
  58.333333333333336% {
    clip: rect(102px, 9999px, 58px, 0);
  }
  62.5% {
    clip: rect(117px, 9999px, 128px, 0);
  }
  66.66666666666666% {
    clip: rect(80px, 9999px, 66px, 0);
  }
  70.83333333333334% {
    clip: rect(18px, 9999px, 87px, 0);
  }
  75% {
    clip: rect(96px, 9999px, 125px, 0);
  }
  79.16666666666666% {
    clip: rect(115px, 9999px, 93px, 0);
  }
  83.33333333333334% {
    clip: rect(118px, 9999px, 65px, 0);
  }
  87.5% {
    clip: rect(81px, 9999px, 53px, 0);
  }
  91.66666666666666% {
    clip: rect(56px, 9999px, 145px, 0);
  }
  95.83333333333334% {
    clip: rect(126px, 9999px, 45px, 0);
  }
  100% {
    clip: rect(142px, 9999px, 122px, 0);
  }
}
@keyframes glitch-anim-2 {
  6.666666666666667% {
    clip: rect(102px, 9999px, 128px, 0);
  }
  10% {
    clip: rect(137px, 9999px, 118px, 0);
  }
  13.333333333333334% {
    clip: rect(81px, 9999px, 15px, 0);
  }
  16.666666666666664% {
    clip: rect(8px, 9999px, 32px, 0);
  }
  20% {
    clip: rect(137px, 9999px, 51px, 0);
  }
  23.333333333333332% {
    clip: rect(89px, 9999px, 128px, 0);
  }
  26.666666666666668% {
    clip: rect(41px, 9999px, 42px, 0);
  }
  30% {
    clip: rect(38px, 9999px, 65px, 0);
  }
  33.33333333333333% {
    clip: rect(126px, 9999px, 35px, 0);
  }
  36.666666666666664% {
    clip: rect(133px, 9999px, 112px, 0);
  }
  40% {
    clip: rect(17px, 9999px, 146px, 0);
  }
  43.333333333333336% {
    clip: rect(117px, 9999px, 35px, 0);
  }
  46.666666666666664% {
    clip: rect(57px, 9999px, 49px, 0);
  }
  50% {
    clip: rect(142px, 9999px, 68px, 0);
  }
  53.333333333333336% {
    clip: rect(1px, 9999px, 93px, 0);
  }
  56.666666666666664% {
    clip: rect(41px, 9999px, 92px, 0);
  }
  60% {
    clip: rect(69px, 9999px, 16px, 0);
  }
  63.33333333333333% {
    clip: rect(44px, 9999px, 77px, 0);
  }
  66.66666666666666% {
    clip: rect(41px, 9999px, 102px, 0);
  }
  70% {
    clip: rect(107px, 9999px, 112px, 0);
  }
  73.33333333333333% {
    clip: rect(21px, 9999px, 41px, 0);
  }
  76.66666666666667% {
    clip: rect(76px, 9999px, 3px, 0);
  }
  80% {
    clip: rect(103px, 9999px, 93px, 0);
  }
  83.33333333333334% {
    clip: rect(124px, 9999px, 134px, 0);
  }
  86.66666666666667% {
    clip: rect(115px, 9999px, 69px, 0);
  }
  90% {
    clip: rect(1px, 9999px, 7px, 0);
  }
  93.33333333333333% {
    clip: rect(12px, 9999px, 43px, 0);
  }
  96.66666666666667% {
    clip: rect(54px, 9999px, 81px, 0);
  }
  100% {
    clip: rect(27px, 9999px, 107px, 0);
  }
}

.content__text {
  font-size: 25px;
  @media screen and (max-width: 1439px) {
    font-size: 20px;
  }
}

* {
  margin: 0;
}
.morph-wrap {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
  overflow-y: scroll; -webkit-overflow-scrolling: touch;
}

.morph {
	position: relative;
	height: 100%;
	fill: var(--background-color-2);
	flex: none;
}

main {
	position: relative;
	width: 100%;
	overflow: hidden;
}

a {
	text-decoration: none;
	color: var(--link-color);
	outline: none;
}

a:hover,
a:focus {
	color: var(--link-hover-color);
	outline: none;
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

/* Icons */
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}

/* Deco Shape */
.decoshape {
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	fill: var(--background-color-3);
}

/* SVG Morph */
.morph-wrap {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
  z-index: 1111111;
}

.morph {
	position: relative;
	height: 100%;
	fill: var(--background-color-2);
	flex: none;
}

.content-wrap {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
  min-height: 700px;
	pointer-events: none;
  margin-bottom: 15vh;
  &:first-child {
    margin-bottom: 0;
  }
  @media screen and (max-height: 800px) {
    margin-bottom: 250px;
  }
}

.content {
	position: relative;
	display: grid;
}

.content--fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	min-height: 600px;
	z-index: 100;
	pointer-events: none;
	padding: 1.5em;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto auto 4em;
	grid-template-areas:	"header ..."
							"... decotitle"
							"demos decotitle";
}

.content--fixed a {
	pointer-events: auto;
}

.content--layout {
	pointer-events: auto;
	justify-content: center;
	align-content: center;
	grid-template-columns: 150px 150px 150px 150px;
	grid-template-rows: 150px 75px 75px;
	grid-template-areas:	"... title title title"
							"author ... desc desc"
							"author ... link link";
}

// .content--related {
// 	min-height: 600px;
// 	height: 100vh;
// 	font-size: 0.85em;
// }

.content__img {
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	opacity: 0.8;
	width: 300px;
	height: 300px;
}

.content__title {
	grid-area: title;
	font-family: 'nexa_boldregular', sans-serif;
	letter-spacing: -0.025em;
	font-size: 8em;
	line-height: 160px;
	margin: 0;
	text-transform: lowercase;
	z-index: 10;
	cursor: default;
}

.content__author {
	grid-area: author;
	margin: 0;
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
	padding: 1em;
	text-align: right;
	z-index: 10;
	cursor: default;
}

.content__desc {
	grid-area: desc;
	margin: 0;
	z-index: 10;
	padding: 0 1em;
	cursor: default;
}

.content__img,
.content__title,
.content__author,
.content__desc {
	transition: transform 0.3s ease-out;
}

.content__link {
	pointer-events: auto;
	grid-area: link;
	align-self: end;
	justify-self: start;
	z-index: 10;
	padding: 0 1em 0.15em;
}

.content__info {
	grid-column: 1 / 3;
}

.content__related-item {
	padding: 1em;
	transition: color 0.3s;
}

.content__related-img {
	max-width: 100%;
	opacity: 0.8;
	transition: opacity 0.3s;
}

.content__related-item:hover .content__related-img,
.content__related-item:focus .content__related-img {
	opacity: 1;
}

.content__related-title {
	font-size: 1em;
	margin: 0;
	padding: 0.5em;
}

/* Different layouts */

/* layout-2 */
.content--layout-2 {
	grid-template-areas:	"... title title title"
							"desc desc ... author"
							"link link ... author";
}

.content--layout-2 .content__img {
	grid-column: 3 / 5;
	grid-row: 1 / 3;
}

.content--layout-2 .content__desc {
	text-align: right;
}

.content--layout-2 .content__link {
	justify-self: end;
}

.content--layout-2 .content__author {
	justify-self: end;
	align-self: start;
}

/* layout-3 */
.content--layout-3 {
	grid-template-rows: 75px 75px 150px;
	grid-template-areas:	"... ... desc desc"
							"author title title title"
							"author ... link link";
}

.content--layout-3 .content__img {
	grid-column: 1 / 3;
	grid-row: 1 / 3;
}

.content--layout-3 .content__desc {
	align-self: end;
}

/* layout-4 */

.content--layout-4 {
	grid-template-areas:	"title title title desc"
							"... author ... desc"
							"... author ... link";
}

.content--layout-4 .content__img {
	grid-column: 2 / 4;
	grid-row: 1 / 3;
}

.content--layout-4 .content__author {
	justify-self: start;
	align-self: start;
}

/* Header */
.codrops-header {
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	z-index: 100;
	grid-area: header;
	align-self: start;
	justify-self: start;
}

.codrops-header__title {
	font-size: 1em;
	padding: 0.75em 0;
	margin: 0;
	font-weight: 500;
}

/* Demos */
.demos {
	grid-area: demos;
	align-self: end;
}

.demo {
	display: inline-block;
	position: relative;
	font-size: 0.85em;
	margin: 0 0.25em 0.5em 0;
	padding: 1em;
}

.demo .decoshape {
	display: none;
}

.demo--current {
	color: var(--link-hover-color);
	border-color: currentColor;
}

.demo--current .decoshape {
	display: block;
	z-index: -1;
}

/* Deco elements */
.deco {
	pointer-events: none;
}

.deco--title {
	grid-area: decotitle;
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
	text-align: right;
	align-self: end;
	justify-self: end;
}

/* Top Navigation Style */
.codrops-links {
	position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1em 0 0;
    text-align: center;
    white-space: nowrap;
}

.codrops-icon {
	position: relative;
	display: inline-block;
	padding: 0.75em 0.75em 1em;
}

/* Demo themes */
.demo-2 {
	--background-color: #1d1b22;
	--background-color-2: #342560;
	--background-color-3: #553e9a;
	--text-color: #fff;
	--link-color: #f9ed8a;
	--link-hover-color: #fff;
}

.demo-3 {
	--background-color: #56cccf;
	--background-color-2: #41e0e4;
	--background-color-3: #1747c0;
	--text-color: #fff;
	--link-color: #fff;
	--link-hover-color: #17b1b5;
}

.demo-3 .morph {
	fill: none;
	stroke-width: 12px;
	stroke: #22bcc0;
}

@media screen and (max-width: 50em) {
	.content--fixed {
		height: auto;
		min-height: 0;
		display: block;
		z-index: 1000;
		position: absolute;
	}
	.codrops-header {
		align-items: center;
		flex-direction: column;
	}
	.deco--title {
		display: none;
	}
	.demos {
		text-align: center;
	}
}

@media screen and (max-width: 40em) {
	// .content--layout {
	// 	transform: scale3d(0.8,0.8,1);
	// }
}

@media screen and (max-width: 36em) {
	// .content--layout {
	// 	transform: scale3d(0.7,0.7,1);
	// }
}

@media screen and (max-width: 32em) {
	// .content--layout {
	// 	transform: scale3d(0.6,0.6,1);
	// }
	.content__author,
	.content__desc,
	.content__link {
		font-size: 1.35em;
	}
}

@media screen and (max-width: 28em) {
	// .content--layout {
	// 	transform: scale3d(0.5,0.5,1);
	// }
}

.form {
	width: 60%;
	max-width: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 4rem 0 0 0;
}

.form__title {
	display: block;
	color: #fefefe;
	font-size: 1.3rem;
	text-align: left;
	font-weight: bold;
	align-self: flex-start;
	padding: 0 0 1.5rem;
}

.form__item {
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 0 0 1.5rem 0;
}

.form__label {
	display: block;
	font-size: 1rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    display: flex;
    overflow: hidden;
    color: #234afc;
}

.form__label span {
	opacity: 0;
}

.form__label span,
.form__placeholder span {
	flex: none;
	white-space: pre;
}

.form__input {
	display: block;
	font-size: 1.25rem;
	padding: 1.5rem;
	width: 100%;
	border: 0;
	background: #131313;
	position: relative;
	font-weight: bold;
	color: #fff;
}

.form__input:focus {
	outline: none;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 10rem #131313 inset;
    -webkit-text-fill-color: #fff !important;

}

.form__placeholder {
	position: absolute;
	bottom: 0;
	z-index: 10;
	font-size: 1.25rem;
	pointer-events: none;
	padding: 1.5rem;
	display: flex;
	overflow: hidden;
	color: #234afc;
	font-weight: bold;
}

.form__input:focus ~ .form__placeholder span {
	opacity: 0;
}

.form__button {
	padding: 1rem 2rem;
    font-weight: bold;
    font-size: 0.85rem;
    border: 0;
    margin: 1.2rem 0 0 auto;
    background: #234afc;
    border-radius: 5px;
    color: #FEFEFE;
    align-self: center;
}

.form__button:focus {
	outline: none;
}

.form__button:hover {
	background: #1839d0;
}

@media screen and (max-width: 55em) {
	.form {
		max-width: none;
		width: 80%;
	}
}

h1 {
  position: absolute;
  bottom: 6vmax;
  padding-left: 4vmax;
  left: 0;
  font-size: 8vw;
  line-height: 1;
  text-transform: lowercase;
  color: white;
  @media screen and (max-height: 800px) {
    bottom: 6.5vw;
    font-size: 6vw;
  }
}

.sect-about {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 4vw 20vw;
  right: 0;
  z-index: 1000000000;
  form, .formes {
    width: 50%;
  }
  h3 {
    font-size: 1.6em;
    color: white;
  }
  p {
    font-size: 1.2em;
    color: white;
    margin-top: 20px;
    max-width: 90%;
  }
}

.input {
	position: relative;
	z-index: 1;
	display: inline-block;
	margin: 1em;
	max-width: 350px;
	width: calc(100% - 2em);
	vertical-align: top;
}

.input__field {
	position: relative;
	display: block;
	float: right;
	padding: 0.8em;
	width: 60%;
	border: none;
	border-radius: 0;
	background: #f0f0f0;
	color: #aaa;
	font-weight: 400;
	font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
	-webkit-appearance: none; /* for box shadows to show on iOS */
}

.input__field:focus {
	outline: none;
}

.input__label {
	display: inline-block;
	float: right;
	padding: 0 1em;
	width: 40%;
	color: #696969;
	font-weight: bold;
	font-size: 70.25%;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.input__label-content {
	position: relative;
	display: block;
	padding: 1.6em 0;
	width: 100%;
}

.graphic {
	position: absolute;
	top: 0;
	left: 0;
	fill: none;
}

.icon {
	color: #ddd;
	font-size: 150%;
}

/* Individual styles */

/* Manami */
.input--manami {
	overflow: hidden;
}

.input__field--manami {
	width: 100%;
	background: transparent;
	padding: 0.5em;
	margin-bottom: 2em;
	color: #f9f7f6;
	z-index: 100;
	opacity: 0;
}

.input__label--manami {
	width: 100%;
	position: absolute;
	text-align: left;
	padding: 0.5em 0;
	pointer-events: none;
	font-size: 1em;
}

.input__label--manami::before,
.input__label--manami::after {
	content: '';
	position: absolute;
	width: 100%;
	left: 0;
}

.input__label--manami::before {
	height: 100%;
	background: #A8A8A8;
	top: 0;
	-webkit-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
	-webkit-transition: -webkit-transform 0.2s;
	transition: transform 0.2s;
}

.input__label--manami::after {
	height: 2px;
	background: #A8A8A8;
	top: 100%;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
}

.input__label-content--manami {
	padding: 0;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.2s, color 0.2s;
	transition: transform 0.2s, color 0.2s;
}

.input__field--manami:focus,
.input--filled .input__field--manami {
	opacity: 1;
	-webkit-transition: opacity 0s 0.2s;
	transition: opacity 0s 0.2s;
}

.input__label--manami::before,
.input__label--manami::after,
.input__label-content--manami,
.input__field--manami:focus,
.input--filled .input__field--manami {
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.input__field--manami:focus + .input__label--manami::before,
.input--filled .input__label--manami::before {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}

.input__field--manami:focus + .input__label--manami::after,
.input--filled .input__label--manami::after {
	opacity: 0;
}

.input__field--manami:focus + .input__label--manami .input__label-content--manami,
.input--filled .input__label--manami .input__label-content--manami {
	color: #cbc4c6;
	-webkit-transform: translate3d(0, 2.1em, 0) scale3d(0.65, 0.65, 1);
	transform: translate3d(0, 2.1em, 0) scale3d(0.65, 0.65, 1);
}

/* Nariko */
.input--nariko {
	overflow: hidden;
	padding-top: 2em;
}

.input__field--nariko {
	width: 100%;
	background: transparent;
	opacity: 0;
	padding: 0.35em;
	z-index: 100;
	color: #f18292;
}

.input__label--nariko {
	width: 100%;
	bottom: 0;
	position: absolute;
	pointer-events: none;
	text-align: left;
	color: #8E9191;
	padding: 0 0.5em;
}

.input__label--nariko::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 4em;
	top: 100%;
	left: 0;
	background: #fff;
	border-top: 4px solid #9B9F9F;
	-webkit-transform: translate3d(0, -3px, 0);
	transform: translate3d(0, -3px, 0);
	-webkit-transition: -webkit-transform 0.4s;
	transition: transform 0.4s;
	-webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.input__label-content--nariko {
	padding: 0.5em 0;
	-webkit-transform-origin: 0% 100%;
	transform-origin: 0% 100%;
	-webkit-transition: -webkit-transform 0.4s, color 0.4s;
	transition: transform 0.4s, color 0.4s;
	-webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.input__field--nariko:focus,
.input--filled .input__field--nariko {
	cursor: text;
	opacity: 1;
	-webkit-transition: opacity 0s 0.4s;
	transition: opacity 0s 0.4s;
}

.input__field--nariko:focus + .input__label--nariko::before,
.input--filled .input__label--nariko::before {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transform: translate3d(0, -3.3em, 0);
	transform: translate3d(0, -3.3em, 0);
}

.input__field--nariko:focus + .input__label--nariko .input__label-content--nariko,
.input--filled .input__label-content--nariko {
	color: #6B6E6E;
	-webkit-transform: translate3d(0, -3.3em, 0) scale3d(0.81, 0.81, 1);
	transform: translate3d(0, -3.3em, 0) scale3d(0.81, 0.81, 1);
}

/* Nao */
.input--nao {
	overflow: hidden;
	padding-top: 1em;
}

.input__field--nao {
	padding: 0.5em 0em 0.25em;
	width: 100%;
	background: transparent;
	color: white;
	font-size: 1.25em;
}

.input__label--nao {
	position: absolute;
	top: 0.95em;
	font-size: 0.85em;
	left: 0;
	display: block;
	width: 100%;
	text-align: left;
	padding: 0em;
	pointer-events: none;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.2s 0.15s, color 1s;
	transition: transform 0.2s 0.15s, color 1s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.graphic--nao {
	stroke: white;
	pointer-events: none;
	-webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
	transition: transform 0.7s, stroke 0.7s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.input__field--nao:focus + .input__label--nao,
.input--filled .input__label--nao {
	color: white;
	-webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
	transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
}

.input__field--nao:focus ~ .graphic--nao,
.input--filled .graphic--nao {
	stroke: white;
	-webkit-transform: translate3d(-66.6%, 0, 0);
	transform: translate3d(-66.6%, 0, 0);
}

/* Shoko */
.input--shoko {
	overflow: hidden;
	padding-bottom: 2.5em;
}

.input__field--shoko {
	padding: 0;
	margin-top: 1.2em;
	width: 100%;
	background: transparent;
	color: #fff;
	font-size: 1.55em;
}

.input__label--shoko {
	position: absolute;
	top: 2em;
	left: 0;
	display: block;
	width: 100%;
	text-align: left;
	padding: 0em;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: #A09C9C;
	pointer-events: none;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.2s 0.1s, color 0.3s;
	transition: transform 0.2s 0.1s, color 0.3s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.graphic--shoko {
	stroke: #A09C9C;
	pointer-events: none;
	stroke-width: 2px;
	top: 1.25em;
	bottom: 0px;
	height: 3.275em;
	-webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
	transition: transform 0.7s, stroke 0.7s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.input__field--shoko:focus + .input__label--shoko,
.input--filled .input__label--shoko {
	color: #A58282;
	-webkit-transform: translate3d(0, 3.5em, 0) scale3d(0.85, 0.85, 1);
	transform: translate3d(0, 3.5em, 0) scale3d(0.85, 0.85, 1);
}

.input__field--shoko:focus ~ .graphic--shoko,
.input--filled .graphic--shoko {
	stroke: #A58282;
	-webkit-transform: translate3d(-66.6%, 0, 0);
	transform: translate3d(-66.6%, 0, 0);
}

/* Yoshiko */
.input__field--yoshiko {
	width: 100%;
	background-color: #d0d1d0;
	border: 2px solid transparent;
	-webkit-transition: background-color 0.25s, border-color 0.25s;
	transition: background-color 0.25s, border-color 0.25s;
}

.input__label--yoshiko {
	width: 100%;
	text-align: left;
	position: absolute;
	bottom: 100%;
	pointer-events: none;
	overflow: hidden;
	padding: 0 1.25em;
	-webkit-transform: translate3d(0, 3em, 0);
	transform: translate3d(0, 3em, 0);
	-webkit-transition: -webkit-transform 0.25s;
	transition: transform 0.25s ;
	-webkit-transition-timing-function: ease-in-out;
	transition-timing-function: ease-in-out;
}

.input__label-content--yoshiko {
	color: #8B8C8B;
	padding: 0.25em 0;
	-webkit-transition: -webkit-transform 0.25s;
	transition: transform 0.25s;
	-webkit-transition-timing-function: ease-in-out;
	transition-timing-function: ease-in-out;
}

.input__label-content--yoshiko::after {
	content: attr(data-content);
	position: absolute;
	font-weight: 800;
	bottom: 100%;
	left: 0;
	height: 100%;
	width: 100%;
	color: #a3d39c;
	padding: 0.25em 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.85em;
}

.input__field--yoshiko:focus + .input__label--yoshiko,
.input--filled .input__label--yoshiko {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}

.input__field--yoshiko:focus + .input__label--yoshiko .input__label-content--yoshiko,
.input--filled .input__label-content--yoshiko {
	-webkit-transform: translate3d(0, 100%, 0);
	transform: translate3d(0, 100%, 0);
}

.input__field--yoshiko:focus + .input__field--yoshiko,
.input--filled .input__field--yoshiko {
	background-color: transparent;
	border-color: #a3d39c;
}

/* Chisato */

.input--chisato {
	padding-top: 1em;
}

.input__field--chisato {
	width: 100%;
	padding: 0.8em 0.5em;
	background: transparent;
	border: 2px solid;
	color: #b5b5b5;
	-webkit-transition: border-color 0.25s;
	transition: border-color 0.25s;
}

.input__label--chisato {
	width: 100%;
	position: absolute;
	top: 0;
	text-align: left;
	overflow: hidden;
	padding: 0;
	pointer-events: none;
	-webkit-transform: translate3d(0, 3em, 0);
	transform: translate3d(0, 3em, 0);
}

.input__label-content--chisato {
	padding: 0 1em;
	font-weight: 400;
	color: #b5b5b5;
}

.input__label-content--chisato::after {
	content: attr(data-content);
	position: absolute;
	top: -200%;
	left: 0;
	color: #da6484;
	font-weight: 800;
}

.input__field--chisato:focus,
.input--filled .input__field--chisato {
	border-color: #da6484;
}

.input__field--chisato:focus + .input__label--chisato,
.input--filled .input__label--chisato {
	-webkit-animation: anim-chisato-1 0.25s forwards;
	animation: anim-chisato-1 0.25s forwards;
}

.input__field--chisato:focus + .input__label--chisato .input__label-content--chisato,
.input--filled .input__label-content--chisato {
	-webkit-animation: anim-chisato-2 0.25s forwards ease-in;
	animation: anim-chisato-2 0.25s forwards ease-in;
}

@-webkit-keyframes anim-chisato-1 {
	0%, 70% {
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	71%, 100% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
}

@-webkit-keyframes anim-chisato-2 {
	0% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	70%, 71% {
		-webkit-transform: translate3d(0, 125%, 0);
		transform: translate3d(0, 125%, 0);
		opacity: 0;
		-webkit-animation-timing-function: ease-out;
	}
	100% {
		color: transparent;
		-webkit-transform: translate3d(0, 200%, 0);
		transform: translate3d(0, 200%, 0);
	}
}

@keyframes anim-chisato-1 {
	0%, 70% {
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	71%, 100% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
}

@keyframes anim-chisato-2 {
	0% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	70%, 71% {
		-webkit-transform: translate3d(0, 125%, 0);
		transform: translate3d(0, 125%, 0);
		opacity: 0;
		-webkit-animation-timing-function: ease-out;
	}
	100% {
		color: transparent;
		-webkit-transform: translate3d(0, 200%, 0);
		transform: translate3d(0, 200%, 0);
	}
}

/* Kozakura */
.input--kozakura {
	overflow: hidden;
	padding-bottom: 1em;
}

.input__field--kozakura {
	padding: 0.25em 0.5em;
	margin-top: 1.25em;
	width: 100%;
	background: transparent;
	color: #2F3238;
	font-size: 1.55em;
	opacity: 0;
}

.input__label--kozakura {
	width: 100%;
	text-align: left;
	position: absolute;
	top: 1em;
	pointer-events: none;
	overflow: hidden;
	padding: 0 0.25em;
	-webkit-transform: translate3d(1em, 2.75em, 0);
	transform: translate3d(1em, 2.75em, 0);
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.input__label-content--kozakura {
	color: #A4A5A6;
	padding: 0.4em 0 0.25em;
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.input__label-content--kozakura::after {
	content: attr(data-content);
	position: absolute;
	font-weight: 800;
	top: 100%;
	left: 0;
	height: 100%;
	width: 100%;
	color: #fff;
	padding: 0.25em 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.85em;
}

.graphic--kozakura {
	fill: #494E57;
	pointer-events: none;
	top: 1em;
	bottom: 0px;
	height: 4.5em;
	z-index: -1;
	-webkit-transition: -webkit-transform 0.7s, fill 0.7s;
	transition: transform 0.7s, fill 0.7s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.input__field--kozakura:focus,
.input--filled .input__field--kozakura {
	-webkit-transition: opacity 0s 0.35s;
	transition: opacity 0s 0.35s;
	opacity: 1;
}

.input__field--kozakura:focus + .input__label--kozakura,
.input--filled .input__label--kozakura {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}

.input__field--kozakura:focus + .input__label--kozakura .input__label-content--kozakura,
.input--filled .input__label-content--kozakura {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
	-webkit-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
}

.input__field--kozakura:focus ~ .graphic--kozakura,
.input--filled .graphic--kozakura {
	fill: #fff;
	-webkit-transform: translate3d(-66.6%, 0, 0);
	transform: translate3d(-66.6%, 0, 0);
}

/* Makiko */
.input--makiko {
	overflow: hidden;
	background: #CBCBCB;
}

.input__field--makiko {
	width: 100%;
	background: transparent;
	color: #797693;
	z-index: 10;
	font-weight: 500;
}

.input__label--makiko {
	position: absolute;
	width: 100%;
	text-align: left;
	pointer-events: none;
	color: #fff;
}

.input__label--makiko::before {
	content: '';
	position: absolute;
	width: 30px;
	height: 30px;
	top: 45%;
	left: 20px;
	background-size: 100%;
	-webkit-transition: -webkit-transform 0.4s cubic-bezier(0.7,0,0.3,1);
	transition: transform 0.4s cubic-bezier(0.7,0,0.3,1);
}

.input__label-content--makiko {
	display: block;
	padding: 1.5em 0 0 2.75em;
	-webkit-transition: -webkit-transform 0.4s cubic-bezier(0.7,0,0.3,1);
	transition: transform 0.4s cubic-bezier(0.7,0,0.3,1);
}

.input__field--makiko:focus + .input__label--makiko::before,
.input--filled .input__label--makiko::before {
	-webkit-transform: scale3d(38, 38, 1);
	transform: scale3d(38, 38, 1);
}

/* Sae */
.input--sae {
	overflow: hidden;
	width: 200px;
	margin: 0 2em 2em;
}

.input__field--sae {
	background: transparent;
	width: 100%;
	color: #fff;
	padding: 1em 0 0.5em;
	font-weight: 500;
}

.input__label--sae {
	position: absolute;
	width: 100%;
	text-align: left;
	color: #7771ab;
	padding: 0;
	height: 100%;
	pointer-events: none;
}

.input__label--sae::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;
	bottom: 0;
	-webkit-transform: translate3d(100%, 0, 0);
	transform: translate3d(100%, 0, 0);
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.icon--sae {
	position: absolute;
	bottom: 0;
	font-size: 1em;
	opacity: 0.5;
	left: -30px;
	color: #fff;
	pointer-events: none;
	-webkit-transform: translate3d(205px, 0, 0);
	transform: translate3d(205px, 0, 0);
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.input__label-content--sae {
	padding: 0;
	font-size: 18px;
	display: inline-block;
	vertical-align: bottom;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: translate3d(0, 50px, 0);
	transform: translate3d(0, 50px, 0);
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.input__field--sae:focus + .input__label--sae .input__label-content--sae,
.input--filled .input__label-content--sae {
	-webkit-transform: translate3d(0, 0, 0) scale3d(0.7, 0.7, 1);
	transform: translate3d(0, 0, 0) scale3d(0.7, 0.7, 1);
}

.input__field--sae:focus + .input__label--sae::after,
.input--filled .input__label--sae::after {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}

.input__field--sae:focus + .input__label--sae .icon--sae,
.input--filled .icon--sae {
	-webkit-transition-delay: 0.01s;
	transition-delay: 0.01s;
	-webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, -90deg);
	transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, -90deg);
}

/* Fumi */
.input--fumi {
	background: #fff;
	overflow: hidden;
	padding: 0.25em 0;
}

.input--fumi::after {
	content: '';
	width: 1px;
	position: absolute;
	top: 0.5em;
	bottom: 0.5em;
	left: 2.5em;
	background: #f0f0f0;
	z-index: 100;
}

.input__field--fumi {
	background: transparent;
	padding: 1.5em 1em 0.25em 3.15em;
	width: 100%;
	color: #00aeef;
}

.input__label--fumi {
	position: absolute;
	width: 100%;
	text-align: left;
	padding-left: 4.5em;
	pointer-events: none;
}

.icon--fumi {
	width: 2em;
	position: absolute;
	top: 0;
	left: 0;
	padding: 1em 0 0 0.5em;
}

.input__label-content--fumi {
	padding: 1.7em 0;
	display: inline-block;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
}

.input__label-content--fumi span {
	display: inline-block;
}

.input__field--fumi:focus + .input__label--fumi .input__label-content--fumi,
.input--filled .input__label-content--fumi {
	-webkit-animation: anim-fumi-1 0.3s forwards;
	animation: anim-fumi-1 0.3s forwards;
}

@-webkit-keyframes anim-fumi-1 {
	50% {
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	51% {
		-webkit-transform: translate3d(0, -3em, 0) scale3d(0.85, 0.85, 1);
		transform: translate3d(0, -3em, 0) scale3d(0.85, 0.85, 1);
	}
	100% {
		color: #a3a3a3;
		-webkit-transform: translate3d(0, -1.1em, 0) scale3d(0.85, 0.85, 1);
		transform: translate3d(0, -1.1em, 0) scale3d(0.85, 0.85, 1);
	}
}

@keyframes anim-fumi-1 {
	50% {
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	51% {
		-webkit-transform: translate3d(0, -3em, 0) scale3d(0.85, 0.85, 1);
		transform: translate3d(0, -3em, 0) scale3d(0.85, 0.85, 1);
	}
	100% {
		color: #a3a3a3;
		-webkit-transform: translate3d(0, -1.1em, 0) scale3d(0.85, 0.85, 1);
		transform: translate3d(0, -1.1em, 0) scale3d(0.85, 0.85, 1);
	}
}


.input__field--fumi:focus + .input__label--fumi .icon--fumi,
.input--filled .icon--fumi {
	-webkit-animation: anim-fumi-2 0.3s forwards;
	animation: anim-fumi-2 0.3s forwards;
}

@-webkit-keyframes anim-fumi-2 {
	50% {
		opacity: 1;
		-webkit-transform: translate3d(0, -3em, 0);
		transform: translate3d(0, -3em, 0);
	}
	50.25% {
		opacity: 0;
		-webkit-transform: translate3d(0, -3em, 0);
		transform: translate3d(0, -3em, 0);
	}
	50.75% {
		opacity: 0;
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	51% {
		opacity: 1;
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		color: #00aeef;
	}
}

@keyframes anim-fumi-2 {
	50% {
		opacity: 1;
		-webkit-transform: translate3d(0, -3em, 0);
		transform: translate3d(0, -3em, 0);
	}
	50.25% {
		opacity: 0;
		-webkit-transform: translate3d(0, -3em, 0);
		transform: translate3d(0, -3em, 0);
	}
	50.75% {
		opacity: 0;
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	51% {
		opacity: 1;
		-webkit-transform: translate3d(0, 3em, 0);
		transform: translate3d(0, 3em, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		color: #00aeef;
	}
}


/* Ruri */
.input__field--ruri {
	width: 100%;
	background: transparent;
	padding: 0.5em 0;
	margin-bottom: 2em;
	color: #fff;
}

.input__label--ruri {
	width: 100%;
	position: absolute;
	text-align: left;
	font-size: 1em;
	padding: 10px 0 5px;
	pointer-events: none;
}

.input__label--ruri::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 7px;
	background: #B7C3AC;
	left: 0;
	top: 100%;
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
	transition: transform 0.3s, background-color 0.3s;
}

.input__label-content--ruri {
	padding: 0;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.3s, color 0.3s;
	transition: transform 0.3s, color 0.3s;
}

.input__field--ruri:focus + .input__label--ruri::after,
.input--filled .input__label--ruri::after {
	background: #a3d39c;
	-webkit-transform: scale3d(1, 0.25, 1);
	transform: scale3d(1, 0.25, 1);
}

.input__field--ruri:focus + .input__label--ruri .input__label-content--ruri,
.input--filled .input__label--ruri .input__label-content--ruri {
	color: #a3d39c;
	-webkit-transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
	transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
}

/* Kohana */
.input--kohana {
	overflow: hidden;
	background: #fff;
}

.input__field--kohana {
	width: 100%;
	background: transparent;
	padding-left: 2.75em;
	color: #6a7989;
}

.input__label--kohana {
	position: absolute;
	width: 100%;
	text-align: left;
	pointer-events: none;
	color: #D2D2D2;
}

.input__label-content--kohana {
	display: inline-block;
	width: auto;
	-webkit-transform: translate3d(-1.75em, 0, 0);
	transform: translate3d(-1.75em, 0, 0);
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
	transition: transform 0.3s, opacity 0.3s;
}

.icon--kohana {
	display: inline-block;
	margin-top: 0.9em;
	-webkit-transform: translate3d(-2em, 0, 0);
	transform: translate3d(-2em, 0, 0);
	-webkit-transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
}

.input__field--kohana:focus + .input__label--kohana .input__label-content--kohana,
.input--filled .input__label-content--kohana {
	opacity: 0;
	-webkit-transform: translate3d(100px, 0, 0);
	transform: translate3d(100px, 0, 0);
}

.input__label-content--kohana,
.icon--kohana,
.input__field--kohana:focus + .input__label--kohana .input__label-content--kohana,
.input--filled .input__label-content--kohana {
	-webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}

.input__field--kohana:focus + .input__label--kohana .icon--kohana,
.input--filled  .icon--kohana {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}


* {
  font-family: Futura, "futura-pt", sans-serif;
}

// .content--related {
//   position: absolute;
//   left: 100000000000000000;
// }

.input {
  max-width: 100%;
  width: 100%;
}

.form {
  max-width: 100%;
  label {
    max-width: 540px;
  }
}

.sect-about--right {
  left: 0;
  right: auto;
  padding-left: 4vmax;
  z-index: 100;
  h4 {
    font-size: 12px;
    margin-bottom: 5px;
  }
}

.el {
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 0;
  }
}

.input__label-content {
  // font-size: 14px;
}

.input__field--nao {
  padding: 0.8em;
}
.input__label {
  color: white;
}

.button {
  cursor: pointer;
  z-index: 100;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  .input--nao {
    max-width: 600px;
    margin-left: 0;
    padding-left: 0;
  }
}

canvas {
  width: 500px;
  height: 500px;
  @media screen and (max-width: 1279px) {
    max-width: 500px;
    width: 100%;
    height: 300px;
  }
}

.content-wrap--about {
  @media screen and (max-width: 980px) {
    min-height: 200px;
  }
}


.content-abs {
  position: absolute;
}

.content__text {
  @media screen and (max-width: 800px) {
    font-size: 3vw;
  }
}

@media screen and (max-width: 800px) {
  .abs-mob {
    position: absolute;
    top: 0px;
    margin-bottom: 0;
  }
  .content-wrap {
    margin-bottom: 90px;
    min-height: 550px;
    &:last-child {
      // margin-bottom: 0;
    }
  }
  .content--related {
    position: relative;
    top: 0;
  }
  .height-mob {
    height: 100%;
  }
  form {
    display: none;
  }
  .content-wrap--about {
    min-height: 200px;
    .content-abs {
      height: 100%;
      top: 0;
    }
  }
}

</style>
