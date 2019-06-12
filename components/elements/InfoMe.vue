<template lang='pug'>
<div>
  <a class="grid__item" v-if='state === "one"'>
    <div class="box">
      <div class="box__shadow"></div>
      <img class="box__img" src="/img/i.png" alt="Some image"/>
      <h3 class="box__title"><span class="box__title-inner" data-hover="Wayne">Wayne</span></h3>
      <h4 class="box__text"><span class="box__text-inner">Andrey</span></h4>
      <div class="box__deco">&#10014;</div>
      <p class="box__content">Andrey Wayne - это профессиональный веб-разработчик. <br /><br />Новые технологии, творческий подход, желание всегда быть на шаг впереди и учиться новому — основной принцип моей работы.</p>
    </div>
  </a>
  <a class="grid__item grid__item--right" v-if='state === "two"'>
    <div class="box">
      <div class="box__shadow"></div>
      <img class="box__img" src="/img/i-2.png" alt="Some image"/>
      <h3 class="box__title"><span class="box__title-inner" data-hover="Сложности">Сложности</span></h3>
      <h4 class="box__text"><span class="box__text-inner">Люблю</span></h4>
      <p class="box__content">Делаю IT-системы, новостные порталы, сервисы, интернет-магазины, лендинги, сайты компаний. <br /><br /> Умею из высоконагруженных, крупных, трудных проектов отдавать в продакшн продукт, который можно с гордостью презентовать.</p>
    </div>
  </a>
  <a class="grid__item" v-if='state === "three"'>
    <div class="box">
      <div class="box__shadow"></div>
      <img class="box__img" src="/img/i-3.png" alt="Some image"/>
      <h3 class="box__title"><span class="box__title-inner" data-hover="Прекрасное">Прекрасное</span></h3>
      <h4 class="box__text"><span class="box__text-inner">Сделаю</span></h4>
      <p class="box__content">В основном специализируюсь на сложных, крупных веб-проектах. <br /><br />Если попадается трудная задача, то я не отказываюсь от неё, а наоборот появляется большой интерес к ней. Оттуда способен реализовать любую техническую задачу.</p>
    </div>
  </a>
  <a class="grid__item grid__item--right" v-if='state === "four"'>
    <div class="box">
      <div class="box__shadow"></div>
      <img class="box__img" src="/img/i-4.png" alt="Some image"/>
      <h3 class="box__title"><span class="box__title-inner" data-hover="моё всё">Моё всё</span></h3>
      <h4 class="box__text"><span class="box__text-inner">технологии</span></h4>
      <p class="box__content">Frontend: Pug, Less, Sass, WebPack, Gulp, JS, Vanilla, Vue, Vue-router, Vuex, Nuxt, React, React-router, Redux, Next, Axios, Fetch, Anime, Pixi, GSAP<br /><br />Backend: Node, Express, Mongodb<br /><br />Другое: Git, Npm, BEM, Sketch, Figma</p>
    </div>
  </a>
</div>
</template>

<script>
import imagesLoaded from 'imagesloaded'
import TweenMax from 'gsap'
export default {
  props: [
    'state'
  ],
  mounted() {
    /**
     * demo.js
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2018, Codrops
     * http://www.codrops.com
     */
    {
        const lineEq = (y2, y1, x2, x1, currentVal) => {
            // y = mx + b
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        };

        const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

        const setRange = (obj) => {
            for(let k in obj) {
                if( obj[k] == undefined ) {
                    obj[k] = [0,0];
                }
                else if( typeof obj[k] === 'number' ) {
                    obj[k] = [-1*obj[k],obj[k]];
                }
            }
        };

        // from http://www.quirksmode.org/js/events_properties.html#position
    	const getMousePos = (e) => {
            let posx = 0;
            let posy = 0;
    		if (!e) e = window.event;
    		if (e.pageX || e.pageY) 	{
    			posx = e.pageX;
    			posy = e.pageY;
    		}
    		else if (e.clientX || e.clientY) 	{
    			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    		}
    		return { x : posx, y : posy }
    	};

        class Item {
    		constructor(el, options) {
                this.DOM = {el: el};

                this.options = {
                    image: {
                        translation : {x: -10, y: -10, z: 0},
                        rotation : {x: 0, y: 0, z: 0}
                    },
                    title: {
                        translation : {x: 20, y: 10, z: 0}
                    },
                    text: {
                        translation : {x: 20, y: 50, z: 0},
                        rotation : {x: 0, y: 0, z: -20}
                    },
                    deco: {
                        translation : {x: -20, y: 0, z: 0},
                        rotation : {x: 0, y: 0, z: 3}
                    },
                    shadow: {
                        translation : {x: 30, y: 20, z: 0},
                        rotation : {x: 0, y: 0, z: -2},
                        reverseAnimation : {duration: 2, ease: 'Back.easeOut'}
                    },
                    content: {
                        translation : {x: 5, y: 3, z: 0}
                    }
                };
                Object.assign(this.options, options);

                this.DOM.animatable = {};
                this.DOM.animatable.image = this.DOM.el.querySelector('.box__img');
                this.DOM.animatable.title = this.DOM.el.querySelector('.box__title');
                this.DOM.animatable.text = this.DOM.el.querySelector('.box__text');
                this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco');
                this.DOM.animatable.shadow = this.DOM.el.querySelector('.box__shadow');
                this.DOM.animatable.content = this.DOM.el.querySelector('.box__content');

                this.initEvents();
            }
            initEvents() {
                let enter = false;
                this.mouseenterFn = () => {
                    if ( enter ) {
                        enter = false;
                    };
                    clearTimeout(this.mousetime);
                    this.mousetime = setTimeout(() => enter = true, 40);
                };
                this.mousemoveFn = ev => requestAnimationFrame(() => {
                    if ( !enter ) return;
                    this.tilt(ev);
                });
                this.mouseleaveFn = (ev) => requestAnimationFrame(() => {
                    if ( !enter || !allowTilt ) return;
                    enter = false;
                    clearTimeout(this.mousetime);

                    for (let key in this.DOM.animatable ) {
                        if( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {continue;}
                        TweenMax.to(this.DOM.animatable[key],
                            this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.duration || 0 : 1.5, {
                            ease: this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
                            x: 0,
                            y: 0,
                            z: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0
                        });
                    }
                });
                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            }
            tilt(ev) {
                if ( !allowTilt ) return;
                const mousepos = getMousePos(ev);
                // Document scrolls.
                const docScrolls = {
                    left : document.body.scrollLeft + document.documentElement.scrollLeft,
                    top : document.body.scrollTop + document.documentElement.scrollTop
                };
                const bounds = this.DOM.el.getBoundingClientRect();
                // Mouse position relative to the main element (this.DOM.el).
                const relmousepos = {
                    x : mousepos.x - bounds.left - docScrolls.left,
                    y : mousepos.y - bounds.top - docScrolls.top
                };

                // Movement settings for the animatable elements.
                for (let key in this.DOM.animatable) {
                    if ( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {
                        continue;
                    }

                    let t = this.options[key] != undefined ? this.options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                        r = this.options[key] != undefined ? this.options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0};

                    setRange(t);
                    setRange(r);

                    const transforms = {
                        translation : {
                            x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                            y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                            z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
                        },
                        rotation : {
                            x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                            y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
                            z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
                        }
                    };

                    TweenMax.to(this.DOM.animatable[key], 1.5, {
                        ease: 'Power1.easeOut',
                        x: transforms.translation.x,
                        y: transforms.translation.y,
                        z: transforms.translation.z,
                        rotationX: transforms.rotation.x,
                        rotationY: transforms.rotation.y,
                        rotationZ: transforms.rotation.z
                    });
                }
            }
        }

        class Overlay {
            // constructor() {
            //     this.DOM = {el: document.querySelector('.overlay')};
            //     this.DOM.reveal = this.DOM.el.querySelector('.overlay__reveal');
            //     this.DOM.items = this.DOM.el.querySelectorAll('.overlay__item');
            //     this.DOM.close = this.DOM.el.querySelector('.overlay__close');
            // }
            // show(contentItem) {
            //     this.contentItem = contentItem;
            //     this.DOM.el.classList.add('overlay--open');
            //     // show revealer
            //     TweenMax.to(this.DOM.reveal, .5, {
            //         ease: 'Power1.easeInOut',
            //         x: '0%',
            //         onComplete: () => {
            //             // hide scroll
            //             document.body.classList.add('preview-open');
            //             // show preview
            //             this.revealItem(contentItem);
            //             // hide revealer
            //             TweenMax.to(this.DOM.reveal, .5, {
            //                 delay: 0.2,
            //                 ease: 'Power3.easeOut',
            //                 x: '-100%'
            //             });
            //
            //             this.DOM.close.style.opacity = 1;
            //         }
            //     });
            // }
            // revealItem() {
            //     this.contentItem.style.opacity = 1;
            //
            //     let itemElems = [];
            //     itemElems.push(this.contentItem.querySelector('.box__shadow'));
            //     itemElems.push(this.contentItem.querySelector('.box__img'));
            //     itemElems.push(this.contentItem.querySelector('.box__title'));
            //     itemElems.push(this.contentItem.querySelector('.box__text'));
            //     itemElems.push(this.contentItem.querySelector('.box__deco'));
            //     itemElems.push(this.contentItem.querySelector('.overlay__content'));
            //
            //     for (let el of itemElems) {
            //         if ( el == null ) continue;
            //         const bounds = el.getBoundingClientRect();
            //         const win = {width: window.innerWidth, height: window.innerHeight};
            //         TweenMax.to(el, lineEq(0.8, 1.2, win.width, 0, Math.abs(bounds.left+bounds.width - win.width)), {
            //             ease: 'Expo.easeOut',
            //             delay: 0.2,
            //             startAt: {
            //                 x: `${lineEq(0, 800, win.width, 0, Math.abs(bounds.left+bounds.width - win.width))}`,
            //                 y: `${lineEq(-100, 100, win.height, 0, Math.abs(bounds.top+bounds.height - win.height))}`,
            //                 rotationZ: `${lineEq(5, 30, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))}`
            //             },
            //             x: 0,
            //             y: 0,
            //             rotationZ: 0
            //         });
            //     }
            // }
            // hide() {
            //     this.DOM.el.classList.remove('overlay--open');
            //
            //     // show revealer
            //     TweenMax.to(this.DOM.reveal, .5, {
            //         //delay: 0.15,
            //         ease: 'Power3.easeOut',
            //         x: '0%',
            //         onComplete: () => {
            //             this.DOM.close.style.opacity = 0;
            //             // show scroll
            //             document.body.classList.remove('preview-open');
            //             // hide preview
            //             this.contentItem.style.opacity = 0;
            //             // hide revealer
            //             TweenMax.to(this.DOM.reveal, .5, {
            //                 delay: 0,
            //                 ease: 'Power3.easeOut',
            //                 x: '100%'
            //             });
            //         }
            //     });
            // }
        }

        class Grid {
            constructor(el) {
                this.DOM = {el: el};
                this.items = [];
                Array.from(this.DOM.el.querySelectorAll('a.grid__item')).forEach((item) => {
                    const itemObj = new Item(item);
                    this.items.push(itemObj);
                    if ( !item.classList.contains('grid__item--noclick') ) {
                        // itemObj.DOM.el.addEventListener('click', (ev) => {
                        //     ev.preventDefault();
                        //     this.openItem(document.querySelector(item.getAttribute('href')));
                        // });
                    }
                });

                // this.overlay = new Overlay();
                // this.overlay.DOM.close.addEventListener('click', () => this.closeItem());
            }
            openItem(contentItem) {
                if ( this.isPreviewOpen ) return;
                this.isPreviewOpen = true;
                allowTilt = false;
                // this.overlay.show(contentItem);
                // "explode" grid..
                for (let item of this.items) {
                    for (let key in item.DOM.animatable) {
                        const el = item.DOM.animatable[key];
                        if ( el ) {
                            const bounds = el.getBoundingClientRect();

                            let x;
                            let y;
                            const win = {width: window.innerWidth, height: window.innerHeight};

                            if ( bounds.top + bounds.height/2 < win.height/2 - win.height*.1 ) {
                                //x = getRandomInt(-250,-50);
                                //y = getRandomInt(20,100)*-1;
                                x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                                y = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                            }
                            else if ( bounds.top + bounds.height/2 > win.height/2 + win.height*.1 ) {
                                //x = getRandomInt(-250,-50);
                                //y = getRandomInt(20,100);
                                x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                                y = lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))
                            }
                            else {
                                //x = getRandomInt(300,700)*-1;
                                x = -1*lineEq(10, 700, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
                                y = getRandomInt(-25,25);
                            }

                            TweenMax.to(el, 0.4, {
                                ease: 'Power3.easeOut',
                                delay: lineEq(0, 0.3, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
                                x: x,
                                y: y,
                                rotationZ: getRandomInt(-10,10),
                                opacity: 0
                            });
                        }
                    }
                }
            }
            closeItem() {
                if ( !this.isPreviewOpen ) return;
                this.isPreviewOpen = false;
                // this.overlay.hide();

                for (let item of this.items) {
                    for (let key in item.DOM.animatable) {
                        const el = item.DOM.animatable[key];
                        if ( el ) {
                            const bounds = el.getBoundingClientRect();
                            const win = {width: window.innerWidth};
                            TweenMax.to(el, 0.6, {
                                ease: 'Expo.easeOut',
                                delay: .55 + lineEq(0, 0.2, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
                                x: 0,
                                y: 0,
                                rotationZ: 0,
                                opacity: 1
                            });
                        }
                    }
                }

                allowTilt = true;
            }
        }

        let allowTilt = true;
        new Grid(document.querySelector('.grid'));

        // Preload all the images in the page..
        imagesLoaded(document.querySelectorAll('.box__img'), () => document.body.classList.remove('loading'));
    }

  }
}
</script>

<style scoped lang='less'>
@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
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

main {
	position: relative;
}

.content {
	position: relative;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	align-items: center;
	padding: 2rem;
}

.codrops-header__title {
	font-size: 1em;
	font-weight: bold;
	margin: 0;
	padding: 0;
}

.info {
	margin: 0 0 0 1.25em;
	color: var(--color-info);
}

.github {
	display: block;
	margin: 0 0 0 auto;
}

/* Top Navigation Style */
.codrops-links {
	position: relative;
	display: flex;
	justify-content: center;
	margin: 0 1em 0 0;
	text-align: center;
	white-space: nowrap;
}

.codrops-icon {
	display: inline-block;
	margin: 0.15em;
	padding: 0.25em;
}

.grid {
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding-bottom: 10rem;
  display: flex;
}

.grid__item {
	display: flex;
	justify-content: center;
	margin: 0 0 10rem 0;
	cursor: pointer;
}

.box {
	position: relative;
	margin: 2rem;
}

.box__title {
	margin: 0;
	line-height: 1;
	position: absolute;
	z-index: 100;
  top: -4rem;
  right: -4.5rem;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

.box__title-inner {
	display: block;
	position: relative;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 4.15rem;
	letter-spacing: 0.15rem;
	line-height: 1.25;
	font-family: 'Anton', sans-serif;
}

.box__title-inner[data-hover] {
	-webkit-text-stroke: 2px white;
	text-stroke: 2px white;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	color: transparent;
}

.box__title-inner::before {
	content: attr(data-hover);
	position: absolute;
	top: 0;
	left: 0;
	height: 0;
	overflow: hidden;
	white-space: nowrap;
	-webkit-text-stroke: 0;
	text-stroke: 0;
	-webkit-text-fill-color: #000;
	text-fill-color: #000;
	color: #000;
	transition: all 0.3s;
}

.grid__item:hover .box__title-inner::before {
	height: 100%;
	width: 100%;
}

.box__text {
	margin: 0;
	position: absolute;
	top: -6rem;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	font-size: 1.75rem;
	margin: 0.5rem 1rem;
	font-family: 'Anton', sans-serif;
}

.box__text-inner {
	position: relative;
	display: block;
	border: 6px solid var(--color-text);
	padding: 0.25rem 1.25rem;
}

.box__text-inner--reverse {
	background: var(--color-text);
	color: var(--color-bg);
}

.box__img {
	display: block;
	flex: none;
	margin: 0 auto;
	max-width: 100%;
	filter: grayscale(1);
	transition: filter 0.3s;
	pointer-events: none;
}

.grid__item:hover .box__img:not(.box__img--original) {
	filter: grayscale(0);
}

.box__shadow {
	position: absolute;
	width: 100%;
	height: 100%;
	top: -1rem;
	left: -1rem;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==);
}

.box__deco {
	font-size: 6rem;
	line-height: 1;
	font-weight: bold;
	position: absolute;
	bottom: -4rem;
	right: -4rem;
	display: none;
}

.box__content {
	position: absolute;
	width: 90%;
	font-size: 1rem;
	text-align: left;
}

.box__content strong {
	white-space: nowrap;
}

.overlay {
	pointer-events: none;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	overflow: hidden;
}

.overlay--open {
	pointer-events: auto;
}

.overlay__reveal {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #000;
	position: absolute;
	z-index: 100;
	transform: translate3d(100%,0,0);
}

.overlay__item {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: #ececec;
	opacity: 0;
	display: flex;
	flex-direction: column;
    align-items: center;
    padding: 5rem 5vw;
    justify-content: center;
}

.overlay__item .box {
	max-width: 600px;
	max-height: 100%;
	margin: 0;
}

.overlay__item .box__title {
	bottom: 0;
}

.box__img--original {
	max-height: calc(100vh - 10rem);
	filter: none;
}

.overlay__close {
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: 0;
	margin: 1rem;
	padding: 1rem;
	opacity: 0;
}

.overlay__close:focus {
	outline: none;
}

.overlay__content {
	font-size: 1rem;
	line-height: 1.5;
	max-width: 25rem;
	margin: 1rem 0 0 10vw;
}

@media screen and (min-width: 55em) {
	.grid {
		display: flex;
		align-items: center;
		padding: 3rem 3rem 15rem 3rem;
		grid-row-gap: 2rem;
		grid-template-columns: repeat(3,calc(100% / 3));
	}
	.grid__item {
		margin: 0;
	}
	.box {
		margin: 4rem;
	}
	.box__title {
		top: -4rem;
		right: -4.5rem;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}
	.box__title--straight {
		-webkit-writing-mode: horizontal-tb;
		writing-mode: horizontal-tb;
	}
	.box__title--straight .box__title-inner::before {
		width: 0;
		height: auto;
	}
	.box__title--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__title--left {
		left: -2rem;
		right: auto;
	}
	.box__text--topcloser {
		top: -5rem;
	}
	.box__text--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__text--bottomcloser {
		bottom: -5rem;
		top: auto;
	}
	.box__text--right {
		right: 0;
		left: auto;
	}
	.box__text-inner--rotated1 {
		transform: rotate(4deg);
	}
	.box__text-inner--rotated2 {
		transform: rotate(-3deg);
	}
	.box__text-inner--rotated3 {
		transform: rotate(-15deg);
	}
	.box__deco {
		display: block;
	}
	.box__deco--left {
		right: auto;
		left: -3rem;
	}
	.box__deco--top {
		top: 0;
		bottom: auto;
	}
	.overlay__item {
		flex-direction: row;
	}
	.overlay__content {
		font-size: 2.25rem;
		margin-top: 0;
	}
	.overlay__item .box__title--bottom {
		bottom: 0;
	}
}

@media screen and (min-width: 80em) {
	.grid {
		grid-template-columns: repeat(4,25%);
	}
	.grid__item:nth-child(4n-2) {
		margin-top: -8rem;
		margin-bottom: 8rem;
	}
	.grid__item:nth-child(4n) {
		margin-top: -5rem;
	}
	.box {
		margin: 6rem 4.5rem;
	}
	.box__content {
		display: block;
	}
}

@media screen and (max-width: 55em) {
	.content {
		flex-direction: column;
		height: auto;
		min-height: 0;
	}
	.content--fixed {
		position: relative;
		z-index: 1000;
		display: block;
		padding: 0.85em;
	}
	.codrops-header {
		flex-direction: column;
		align-items: center;
		padding-bottom: 5rem;
	}
	.codrops-header__title {
		font-weight: bold;
		padding-bottom: 0.25em;
		text-align: center;
	}
	.info {
		margin: 0;
	}
	.github {
		display: block;
		margin: 1em auto;
	}
	.codrops-links {
		margin: 0;
	}
}

.content {
  display: flex;
}

.grid__item {
  position: absolute;
  z-index: 1000000000;
  left: 20vw;
  padding: 0;
  height: 100%;
  margin-right: 100px;
  min-height: 700px;
  padding: 20vh 0;
  top: 0;
  &--right {
    right: 20vw;
    left: auto;
  }
}

img {
  max-height: 600px;
}

a {
  color: white;
}

.box {
  margin: 0;
  max-height: 700px;
  height: 100vh;
}

@media screen and (max-width: 880px) {
  .grid__item {
    width: 100%;
    margin: 0;
    left: 0;
    top: 0;
    padding: 20vw 6vw;
    padding-right: calc(6vw + 1.5rem)
  }
  .box__title {
    right: -1.5rem;
    span {
      font-size: 1.5rem;
    }
  }
  .box__text {
    font-size: .75rem;
    top: -3rem;
  }
  .box__content {
    font-size: .8rem;
    width: 100%;
  }
}
</style>
