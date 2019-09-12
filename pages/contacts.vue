<template lang="html">
<div class="contacts__page">
  <Logo></Logo>
  <Menu></Menu>
  <main id='main-form' class='main__form'>
    <div class="content__form">
      <form class="form" autocomplete="off">
        <div class="form__title">> Напиши привет</div>
        <div class="form__item">
          <label class="form__label" for="firstname">Имя</label>
          <input class="form__input" type="text" name="firstname" id="firstname">
          <span class="form__placeholder">Имя</span>
        </div>
        <div class="form__item">
          <label class="form__label" for="lastname">Email</label>
          <input class="form__input" type="text" name="lastname" id="lastname">
          <span class="form__placeholder">Email</span>
        </div>
        <div class="form__item">
          <label class="form__label" for="email">Сообщение</label>
          <input class="form__input" type="email" name="email" id="email">
          <span class="form__placeholder">Сообщение</span>
        </div>
        <div class="form__item">
          <input class="form__button" type="submit" name="register" @click='error' value="Отправить">
        </div>
      </form>
    </div>
  </main>
  <div class='contacts'>
    <h2>Связаться со мной</h2>
    <a href="mailto:developer@andreywayne.ru" target='_blank'>developer@andyrewayne.ru</a>
    <a href="tel:89507458396" target='_blank'>+7 (950)-745-83-97</a>
    <ul>
      <li><a href='https://tlgg.ru/masterwaynejs' target='_blank'>
        <svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
            <defs></defs>
            <g id="UI-kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Соц.-сети_b" transform="translate(-153.000000, -2.000000)" fill="#5a5a5a">
                    <path d="M153.282608,8.71294914 L156.969332,10.0957974 L158.396321,14.7078107 C158.487628,15.0031936 158.847042,15.1123742 159.085602,14.9163635 L161.140645,13.232719 C161.356058,13.0563254 161.662885,13.0475352 161.888005,13.2117619 L165.59457,15.916195 C165.849771,16.1026115 166.211318,15.9620755 166.275318,15.6521675 L168.990575,2.52631115 C169.060442,2.18778132 168.729454,1.90536941 168.408707,2.03004014 L153.278288,7.89594309 C152.9049,8.04065977 152.908154,8.57193078 153.282608,8.71294914 Z M158.166347,9.3596719 L165.371583,4.89987907 C165.501077,4.8199633 165.634304,4.99592806 165.523104,5.09958808 L159.576696,10.6545646 C159.367682,10.8500929 159.232855,11.1117621 159.194669,11.395782 L158.992108,12.9043729 C158.965282,13.1057971 158.683735,13.1257894 158.628428,12.9308507 L157.849387,10.1798939 C157.76016,9.86612667 157.890187,9.53097356 158.166347,9.3596719 Z" id="XMLID_497_"></path>
                </g>
            </g>
        </svg>
      </a></li>
      <li><a href='https://www.instagram.com/andrey.wayne/' target='_blank'>
        <svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
            <defs></defs>
            <g id="UI-kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="320\768-Карточка-депутата" transform="translate(-126.000000, -379.000000)" fill="#5a5a5a" fill-rule="nonzero">
                    <g id="Group-4">
                        <g id="Group-6" transform="translate(15.000000, 379.000000)">
                            <path d="M115.493239,0 C113.225552,0 111.362007,1.85440373 111.362007,4.11647727 L111.362007,9.88352273 C111.362007,12.1431106 113.223058,14 115.493239,14 L121.280955,14 C123.548641,14 125.412186,12.1455969 125.412186,9.88352273 L125.412186,4.11647727 C125.412186,1.85688936 123.551137,0 121.280955,0 L115.493239,0 Z M115.493239,1.27272727 L121.280955,1.27272727 C122.860103,1.27272727 124.134897,2.54296891 124.134897,4.11647727 L124.134897,9.88352273 C124.134897,11.4570311 122.860103,12.7272727 121.280955,12.7272727 L115.493239,12.7272727 C113.914091,12.7272727 112.639296,11.4570311 112.639296,9.88352273 L112.639296,4.11647727 C112.639296,2.54296891 113.914091,1.27272727 115.493239,1.27272727 Z M122.159091,2.66477273 C121.837274,2.66477273 121.580319,2.92080982 121.580319,3.24147727 C121.580319,3.56214473 121.837274,3.81818182 122.159091,3.81818182 C122.480908,3.81818182 122.737862,3.56214473 122.737862,3.24147727 C122.737862,2.92080982 122.480908,2.66477273 122.159091,2.66477273 Z M118.387097,3.18181818 C116.279071,3.18181818 114.55523,4.899503 114.55523,7 C114.55523,9.100497 116.279071,10.8181818 118.387097,10.8181818 C120.495122,10.8181818 122.218964,9.100497 122.218964,7 C122.218964,4.899503 120.495122,3.18181818 118.387097,3.18181818 Z M118.387097,4.45454545 C119.806584,4.45454545 120.941675,5.58558255 120.941675,7 C120.941675,8.41441745 119.806584,9.54545455 118.387097,9.54545455 C116.96761,9.54545455 115.832519,8.41441745 115.832519,7 C115.832519,5.58558255 116.96761,4.45454545 118.387097,4.45454545 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </a></li>
      <li><a href='https://vk.com/killwayne' target='_blank'>
        <svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Styles" transform="translate(-127.000000, -2141.000000)" fill="#5a5a5a">
                    <path d="M142.857387,2149.02743 C142.814384,2148.95645 142.548365,2148.38659 141.268271,2147.21531 C139.928172,2145.98883 140.108185,2146.18799 141.722304,2144.06728 C142.705376,2142.77572 143.098405,2141.98699 142.975396,2141.6498 C142.858387,2141.32839 142.135334,2141.41318 142.135334,2141.41318 L139.731158,2141.42699 C139.731158,2141.42699 139.553145,2141.40332 139.420135,2141.48121 C139.291125,2141.55811 139.208119,2141.73558 139.208119,2141.73558 C139.208119,2141.73558 138.827091,2142.7353 138.319054,2143.58516 C137.247975,2145.37855 136.818944,2145.4732 136.643931,2145.36179 C136.236901,2145.10249 136.338909,2144.31869 136.338909,2143.76263 C136.338909,2142.02445 136.605928,2141.2998 135.81787,2141.11248 C135.555851,2141.05037 135.363837,2141.00896 134.694788,2141.00206 C133.836725,2140.99318 133.109672,2141.00501 132.698642,2141.20318 C132.424621,2141.3353 132.213606,2141.63009 132.342615,2141.64685 C132.501627,2141.66755 132.861654,2141.74248 133.052668,2141.99882 C133.299686,2142.3291 133.290685,2143.07248 133.290685,2143.07248 C133.290685,2143.07248 133.432695,2145.11827 132.959661,2145.37263 C132.634637,2145.54714 132.189604,2145.19122 131.234534,2143.56347 C130.745498,2142.73037 130.375471,2141.80854 130.375471,2141.80854 C130.375471,2141.80854 130.304466,2141.63699 130.177456,2141.5453 C130.023445,2141.43389 129.807429,2141.39839 129.807429,2141.39839 L127.521262,2141.4122 C127.521262,2141.4122 127.178236,2141.42206 127.052227,2141.56896 C126.940219,2141.70009 127.043226,2141.97023 127.043226,2141.97023 C127.043226,2141.97023 128.833358,2146.09827 130.859507,2148.17954 C132.718643,2150.0873 134.828798,2149.96208 134.828798,2149.96208 L135.784868,2149.96208 C135.784868,2149.96208 136.073889,2149.93053 136.2209,2149.77377 C136.35691,2149.62983 136.35191,2149.35969 136.35191,2149.35969 C136.35191,2149.35969 136.332908,2148.09475 136.928952,2147.90842 C137.515995,2147.72503 138.27005,2149.13095 139.069109,2149.67222 C139.673153,2150.08138 140.132187,2149.99166 140.132187,2149.99166 L142.269344,2149.96208 C142.269344,2149.96208 143.387426,2149.89406 142.857387,2149.02743 Z" id="vk"></path>
                </g>
            </g>
        </svg>
      </a></li>
    </ul>
  </div>
  <Preloader></Preloader>
</div>
</template>

<script>
import TweenMax from 'gsap'
import charming from 'charming'
import Logo from '~/components/elements/Logo'
import Menu from '~/components/elements/Menu'
import Preloader from '~/components/elements/Preloader'

export default {
  mounted() {
    document.documentElement.className="js-form";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
    let form = document.getElementById('main-form')
    {
    	setTimeout(() => form.classList.add('render'), 60);
    	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    	const total = navdemos.length;
    	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
    	const navigate = (linkEl) => {
    		form.classList.remove('render');
    		form.addEventListener('transitionend', () => window.location = linkEl.href);
    	};
    	navdemos.forEach(link => link.addEventListener('click', (ev) => {
    		ev.preventDefault();
    		navigate(ev.target);
    	}));
    }
    {
        /**
    	 * Distance between two points P1 (x1,y1) and P2 (x2,y2).
    	 */
        const distancePoints = (x1, y1, x2, y2) => Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));

        // from http://www.quirksmode.org/js/events_properties.html#position
    	const getMousePos = (e) => {
    		var posx = 0, posy = 0;
    		if (!e) var e = window.event;
    		if (e.pageX || e.pageY) 	{
    			posx = e.pageX;
    			posy = e.pageY;
    		}
    		else if (e.clientX || e.clientY) 	{
    			posx = e.clientX + form.scrollLeft + document.documentElement.scrollLeft;
    			posy = e.clientY + form.scrollTop + document.documentElement.scrollTop;
    		}
    		return { x : posx, y : posy }
    	};

        class Nearby {
    		constructor(el, options) {
                this.DOM = {el: el};
                this.options = options;
                this.init();
            }
            init() {
                this.mousemoveFn = (ev) => requestAnimationFrame(() => {
                    const mousepos = getMousePos(ev);
                    const docScrolls = {left : form.scrollLeft + document.documentElement.scrollLeft, top : form.scrollTop + document.documentElement.scrollTop};
                    const elRect = this.DOM.el.getBoundingClientRect();
                    const elCoords = {
                        x1: elRect.left + docScrolls.left, x2: elRect.width + elRect.left + docScrolls.left,
                        y1: elRect.top + docScrolls.top, y2: elRect.height + elRect.top + docScrolls.top
                    };
                    const closestPoint = {x: mousepos.x, y: mousepos.y};

                    if ( mousepos.x < elCoords.x1 ) {
                        closestPoint.x = elCoords.x1;
                    }
                    else if ( mousepos.x > elCoords.x2 ) {
                        closestPoint.x = elCoords.x2;
                    }
                    if ( mousepos.y < elCoords.y1 ) {
                        closestPoint.y = elCoords.y1;
                    }
                    else if ( mousepos.y > elCoords.y2 ) {
                        closestPoint.y = elCoords.y2;
                    }
                    if ( this.options.onProgress ) {
                        this.options.onProgress(distancePoints(mousepos.x, mousepos.y, closestPoint.x, closestPoint.y))
                    }
                });

                window.addEventListener('mousemove', this.mousemoveFn);
            }
        }

        window.Nearby = Nearby;
    }
    /**
     * demo5.js
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2018, Codrops
     * http://www.codrops.com
     */

    /**
     * Equation of a line.
     */
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        // y = mx + b
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    };
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

    const formItems = Array.from(document.querySelectorAll('.form__item'));
    formItems.forEach((item) => {
        const inputEl = item.querySelector('.form__input');
        if ( inputEl ) {
            const label = item.querySelector('.form__label');
            const placeholder = item.querySelector('.form__placeholder');
            charming(label);
            const labelLetters = Array.from(label.querySelectorAll('span'));

            charming(placeholder);
            const placeholderLetters = Array.from(placeholder.querySelectorAll('span'));
            const lettersTotal = placeholderLetters.length;
            const lettersPosArr = shuffleArray(Array.from(Array(lettersTotal).keys()));
            let currentVisible = lettersTotal;

            // whatever we do, start at [distanceThreshold.max]px from the element and end at [distanceThreshold.min]px from the element.
            const distanceThreshold = {min: 0, max: 50};

            new Nearby(inputEl, {
                onProgress: (distance) => {
                    const point = lineEq(lettersTotal, 0, distanceThreshold.max, distanceThreshold.min, distance);
                    const visible = Math.max(0,Math.min(lettersTotal,Math.floor(point)));
                    if ( currentVisible != visible ) {
                        // hide placeholder and show label.
                        if ( visible < currentVisible ) {
                            for (let i = 0, len = lettersPosArr.length - visible; i < len; ++i) {
                                const letter = placeholderLetters[lettersPosArr[i]];
                                if ( letter.dataset.state != 'hidden' ) {
                                    letter.dataset.state = 'hidden';
                                    TweenMax.to(letter, 0.5, {
                                        //ease: 'Back.easeIn',
                                        ease: 'Expo.easeOut',
                                        y: '-200%',
                                        opacity: 0
                                    });

                                    TweenMax.to(labelLetters[lettersPosArr[i]], 0.5, {
                                        //ease: 'Back.easeOut',
                                        //delay: 0.4,
                                        ease: 'Expo.easeOut',
                                        y: '0%',
                                        startAt: {y: '200%'},
                                        opacity: 1
                                    });
                                }
                            }
                        }
                        // hide label and show placeholder. (only if input doesn't have a value).
                        else if (inputEl.value.length === 0) {
                            for (let i = lettersTotal-1, len = lettersTotal- (lettersPosArr.length - visible); i >= lettersTotal-len; --i) {
                                const letter = placeholderLetters[lettersPosArr[i]];
                                if ( letter.dataset.state === 'hidden' ) {
                                    letter.dataset.state = '';
                                    TweenMax.to(letter, 0.2, {
                                        ease: 'Circ.easeOut',
                                        y: '0%',
                                        //overwrite: 'all',
                                        opacity: 1
                                    });

                                    TweenMax.to(labelLetters[lettersPosArr[i]], 1, {
                                        ease: 'Circ.easeOut',
                                        y: '200%',
                                        //overwrite: 'all',
                                        opacity: 0
                                    });
                                }
                            }
                        }

                        if( visible <= 0 ) {
                            inputEl.focus();
                        }

                        currentVisible = visible;

                    }
                }
            });

            inputEl.addEventListener('input', () => {
                if ( inputEl.value.length !== 0 ) {
                    placeholder.style.opacity = 0;
                }
                else {
                    placeholder.style.opacity = 1;
                }
            });
        }
    });
  },
  methods: {
    error() {
      alert('В данный момент форма недоступна. Пожалуйста, напишите на почту!')
    }
  },
  components: {
    Logo,
    Menu,
    Preloader
  }
}
</script>

<style lang='less'>
.contacts {
  padding-top: 250px;
  padding-bottom: 250px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #5a5a5a;
    margin-bottom: 25px;
  }
  a {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 15px;
    &:hover {
      color: white;
    }
  }
  ul {
    display: flex;
    max-width: 150px;
    width: 100%;
    justify-content: space-between;
    padding-left: 0;
    margin-top: 30px;
    li {
      display: flex;
      a {
        width: 40px;
        height: 40px;
        border: 2px solid #5a5a5a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;
        &:hover {
          border: 2px solid white;
          svg g {
            fill: white;
          }
        }
      }
    }
  }
}

/* Fade effect */
.js .contacts__page {
	opacity: 0;
	transition: opacity 0.5s;
}

.js .contacts__page {
	opacity: 1;
}

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

.message {
	position: relative;
	z-index: 100;
	display: none;
	padding: 1em;
	text-align: center;
	color: var(--color-bg);
	background: var(--color-text);
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
	width: 100%;
}

.content__form {
	position: relative;
	display: flex;
	justify-content__form: center;
	align-items: center;
	margin: 0 auto;
	min-height: 100vh;
	flex-wrap: wrap;
}

.content__form--narrow {
	padding: 0 0 20vh;
	max-width: 900px;
}

.content__form__item {
	min-height: 50vh;
	margin: auto;
	display: flex;
	align-items: center;
}

.content__form--fixed {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	display: grid;
	align-content__form: space-between;
	width: 100%;
	max-width: none;
	min-height: 0;
	height: 100vh;
	padding: 1.5em;
	pointer-events: none;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto auto 4em;
	grid-template-areas: 'header info'
	'... ...'
	'demos ...';
}

.content__form--fixed a {
	pointer-events: auto;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	align-self: start;
	grid-area: header;
}

.codrops-header__title {
	font-size: .8em;
	font-weight: bold;
	margin: 0;
	padding: 0.75em 0;
}

.info {
	display: block;
	margin: 0 0 0 auto;
	color: var(--color-info);
	max-width: 300px;
	text-align: right;
	line-height: 1.4;
	grid-area: info;
	padding: 0.8rem 0.3rem 0 0;
}

.github {
	margin: 0 4rem 0 0;
	display: block;
}

.demos {
	position: relative;
	display: block;
	align-self: end;
	text-align: center;
	grid-area: demos;
}

.demo {
	margin: 0 0.15em;
}

.demo:hover,
.demo:focus {
	opacity: 0.5;
}

.demo span {
	white-space: nowrap;
	pointer-events: none;
}

a.demo--current {
	pointer-events: none;
}

/* Top Navigation Style */
.codrops-links {
	position: relative;
	display: flex;
	justify-content__form: center;
	margin: 0 1em 0 0;
	text-align: center;
	white-space: nowrap;
}

.codrops-icon {
	display: inline-block;
	margin: 0.15em;
	padding: 0.25em;
}

.content__form__link {
	font-size: 1rem;
	position: relative;
	display: inline-block;
}

.content__form__link-border {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 2px;
	background: #333;
	transform: scaleX(0);
	transform-origin: 100% 0;
	transition: transform 0.3s;
}

.content__form__link:hover .content__form__link-border {
	transform: scaleX(1);
}

@media screen and (min-width: 55em) {
	.demos {
		display: flex;
		align-items: center;
		justify-self: start;
	}
	.demo {
		display: block;
		width: 17px;
		height: 17px;
		margin: 0 4px;
		border-radius: 50%;
		background: var(--color-link);
	}
	a.demo--current {
		background: var(--color-link-hover);
	}
	.demo span {
		line-height: 1;
		position: absolute;
		left: 100%;
		display: none;
		margin: 0 0 0 1rem;
	}
	.demo--current span {
		display: block;
	}
}

@media screen and (max-width: 55em) {
	.message {
		display: block;
	}
	.content__form {
		flex-direction: column;
		height: auto;
		min-height: 0;
		padding-bottom: 10em;
	}
	.content__form--fixed {
		position: relative;
		z-index: 1000;
		display: block;
		padding: 0.85em;
	}
	.codrops-header {
		flex-direction: column;
		align-items: center;
	}
	.codrops-header__title {
		font-weight: bold;
		padding-bottom: 0.25em;
		text-align: center;
	}
	.info {
		margin: 0;
		text-align: center;
		max-width: none;
	}
	.github {
		display: block;
		margin: 1em auto;
	}
	.codrops-links {
		margin: 0;
	}
}

// @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

.contacts__page {
	--color-text: #5a5a5a;
    --color-bg: #040404;
    --color-link: #5a5a5a;
    --color-link-hover: #e84613;
    --color-info: #5a5a5a;
}

.content__form--fixed {
	grid-template-areas: 'header ...'
	'... ...'
	'demos info';
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
	font-size: 1.4rem;
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
	font-size: .8rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    display: flex;
    overflow: hidden;
    color: #3d1fa7;
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
	font-size: 1rem;
	pointer-events: none;
	padding: 1.5rem;
	display: flex;
	overflow: hidden;
	color: #3d1fa7;
}

.form__input:focus ~ .form__placeholder span {
	opacity: 0 !important;
}

.form__button {
	padding: 1rem 2rem;
    font-weight: bold;
    font-size: 0.85rem;
    border: 0;
    background: #3d1fa7;
    border-radius: 5px;
    color: #FEFEFE;
    align-self: center;
}

.form__button:focus {
	outline: none;
}

.form__button:hover {
	background: #4c22e2;
}

@media screen and (max-width: 55em) {
	.form {
		max-width: none;
		width: 80%;
	}
}

.main__form {
  width: 100%;
  min-height: 100vh;
  text-transform: none;
  display: flex;
  align-items: center;
  padding: 0 6vw;
  form {
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
  .content__form {
    max-width: 450px;
    width: 100%;
    padding: 100px 0;
  }
}

@media screen and (max-width: 1000px) {
  .main__form .content__form {
    padding-top: 150px;
  }
  .contacts {
    padding: 10vh 0;
    a {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
}

</style>
