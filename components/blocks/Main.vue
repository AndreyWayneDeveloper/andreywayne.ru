<template lang='html'>
<div class='main'>
  <script type="x-shader/x-vertex" id="wrapVertexShader">
    attribute float size;
    attribute vec3 color;
    varying vec3 vColor;
    void main() {
      vColor = color;
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      gl_PointSize = size * ( 350.0 / - mvPosition.z );
      gl_Position = projectionMatrix * mvPosition;
    }
  </script>
  <script type="x-shader/x-fragment" id="wrapFragmentShader">
    varying vec3 vColor;
    uniform sampler2D texture;
    void main(){
      vec4 textureColor = texture2D( texture, gl_PointCoord );
      if ( textureColor.a < 0.3 ) discard;
      vec4 color = vec4(vColor.xyz, 1.0) * textureColor;
      gl_FragColor = color;
    }
  </script>
  <canvas id='scene'></canvas>
  <div class='title'>
    <H1 typed='normal' data-aos="zoom-in" data-aos-duration="1000">Andrey Wayne</H1>
    <H2 typed='main' data-aos="fade-up" data-aos-duration="1500">Креативный frontend разработчик</H2>
  </div>
  <div class="scroll">
    <img src="/img/arrow-scroll.svg">
    <Title typed='min'>
      s
      <br />
      c
      <br />
      r
      <br />
      o
      <br />
      l
      <br />
      l
    </Title>
  </div>
  .scroll
    .scroll-title
      Title(typed='min')
        | s
        br
        | c
        br
        | r
        br
        | o
        br
        | l
        br
        | l
</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import TweenMax from 'gsap'
const THREE = require('three');
import H1 from '~/plugins/H1'
import H2 from '~/plugins/H2'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Title from '~/plugins/Title'
export default {
  components: {
    H1,
    H2,
    Title
  },
  methods: {
    ot() {
    {
    	setTimeout(() => document.body.classList.add('render'), 60);
    	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    	const total = navdemos.length;
    	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
    	const navigate = (linkEl) => {
    		document.body.classList.remove('render');
    		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
    	};
    	navdemos.forEach(link => link.addEventListener('click', (ev) => {
    		ev.preventDefault();
    		navigate(ev.target);
    	}));
    	document.addEventListener('keydown', (ev) => {
    		const keyCode = ev.keyCode || ev.which;
    		let linkEl;
    		if ( keyCode === 37 ) {
    			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
    		}
    		else if ( keyCode === 39 ) {
    			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
    		}
    		else {
    			return false;
    		}
    		navigate(linkEl);
    	});
    }
  },
  canvas() {
    var canvas = document.querySelector('canvas');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var colors = [
    new THREE.Color(0xc70efe),
    new THREE.Color(0x96789f),
    new THREE.Color(0x535353)];

var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
// renderer.setClearColor(0xac1122);

var scene = new THREE.Scene();

var raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 6;


var camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
camera.position.set(0, 0, 350);

var galaxy = new THREE.Group();
scene.add(galaxy);

// Create dots
var loader = new THREE.TextureLoader();
loader.crossOrigin = "";
var dotTexture = loader.load("/img/dotTexture.png");
var dotsAmount = 3000;
var dotsGeometry = new THREE.Geometry();
var positions = new Float32Array(dotsAmount * 3);

var sizes = new Float32Array(dotsAmount);
var colorsAttribute = new Float32Array(dotsAmount * 3);
for (var i = 0; i < dotsAmount; i++) {
    var vector = new THREE.Vector3();

    vector.color = Math.floor(Math.random() * colors.length);
    vector.theta = Math.random() * Math.PI * 2;
    vector.phi =
        (1 - Math.sqrt(Math.random())) *
        Math.PI /
        2 *
        (Math.random() > 0.5 ? 1 : -1);

    vector.x = Math.cos(vector.theta) * Math.cos(vector.phi);
    vector.y = Math.sin(vector.phi);
    vector.z = Math.sin(vector.theta) * Math.cos(vector.phi);
    vector.multiplyScalar(120 + (Math.random() - 0.5) * 5);
    vector.scaleX = 5;

    if (Math.random() > 0.5) {
        moveDot(vector, i);
    }
    dotsGeometry.vertices.push(vector);
    vector.toArray(positions, i * 3);
    colors[vector.color].toArray(colorsAttribute, i*3);
    sizes[i] = 5;
}

function moveDot(vector, index) {
        var tempVector = vector.clone();
        tempVector.multiplyScalar((Math.random() - 0.5) * 0.2 + 1);
        TweenMax.to(vector, Math.random() * 3 + 3, {
            x: tempVector.x,
            y: tempVector.y,
            z: tempVector.z,
            yoyo: true,
            repeat: -1,
            delay: -Math.random() * 3,
            ease: Power0.easeNone,
            onUpdate: function () {
                attributePositions.array[index*3] = vector.x;
                attributePositions.array[index*3+1] = vector.y;
                attributePositions.array[index*3+2] = vector.z;
            }
        });
}

var bufferWrapGeom = new THREE.BufferGeometry();
var attributePositions = new THREE.BufferAttribute(positions, 3);
bufferWrapGeom.addAttribute('position', attributePositions);
var attributeSizes = new THREE.BufferAttribute(sizes, 1);
bufferWrapGeom.addAttribute('size', attributeSizes);
var attributeColors = new THREE.BufferAttribute(colorsAttribute, 3);
bufferWrapGeom.addAttribute('color', attributeColors);
var shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        texture: {
            value: dotTexture
        }
    },
    vertexShader: document.getElementById("wrapVertexShader").textContent,
    fragmentShader: document.getElementById("wrapFragmentShader").textContent,
    transparent:true
});
var wrap = new THREE.Points(bufferWrapGeom, shaderMaterial);
scene.add(wrap);

// Create white segments
var segmentsGeom = new THREE.Geometry();
var segmentsMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
    vertexColors: THREE.VertexColors
});
for (i = dotsGeometry.vertices.length - 1; i >= 0; i--) {
    vector = dotsGeometry.vertices[i];
    for (var j = dotsGeometry.vertices.length - 1; j >= 0; j--) {
        if (i !== j && vector.distanceTo(dotsGeometry.vertices[j]) < 12) {
            segmentsGeom.vertices.push(vector);
            segmentsGeom.vertices.push(dotsGeometry.vertices[j]);
            segmentsGeom.colors.push(colors[vector.color]);
            segmentsGeom.colors.push(colors[vector.color]);
        }
    }
}
var segments = new THREE.LineSegments(segmentsGeom, segmentsMat);
galaxy.add(segments);

var hovered = [];
var prevHovered = [];
function render(a) {
    var i;
    dotsGeometry.verticesNeedUpdate = true;
    segmentsGeom.verticesNeedUpdate = true;

    raycaster.setFromCamera( mouse, camera );
    var intersections = raycaster.intersectObjects([wrap]);
    hovered = [];
    if (intersections.length) {
        for(i = 0; i < intersections.length; i++) {
            var index = intersections[i].index;
            hovered.push(index);
            if (prevHovered.indexOf(index) === -1) {
                onDotHover(index);
            }
         }
    }
    for(i = 0; i < prevHovered.length; i++){
        if(hovered.indexOf(prevHovered[i]) === -1){
            mouseOut(prevHovered[i]);
        }
    }
    prevHovered = hovered.slice(0);
    attributeSizes.needsUpdate = true;
    attributePositions.needsUpdate = true;
    renderer.render(scene, camera);
}

function onDotHover(index) {
    dotsGeometry.vertices[index].tl = new TimelineMax();
    dotsGeometry.vertices[index].tl.to(dotsGeometry.vertices[index], 1, {
        scaleX: 10,
        ease: Elastic.easeOut.config(2, 0.2),
        onUpdate: function() {
            attributeSizes.array[index] = dotsGeometry.vertices[index].scaleX;
        }
    });
}

function mouseOut(index) {
    dotsGeometry.vertices[index].tl.to(dotsGeometry.vertices[index], 0.4, {
        scaleX: 5,
        ease: Power2.easeOut,
        onUpdate: function() {
            attributeSizes.array[index] = dotsGeometry.vertices[index].scaleX;
        }
    });
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

var mouse = new THREE.Vector2(-100,-100);
function onMouseMove(e) {
    var canvasBounding = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - canvasBounding.left) / width) * 2 - 1;
    mouse.y = -((e.clientY - canvasBounding.top) / height) * 2 + 1;
}

TweenMax.ticker.addEventListener("tick", render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});
  }
  },
  mounted() {
    this.ot()
    this.canvas()
  },
}
</script>

<style lang='less'>
.scroll {
  position: absolute;
  bottom: 50px;
  left: 75px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    text-align: center;
  }
  @media screen and (max-width: 1279px) {
    left: 10px;
    bottom: 10px;
  }
}
.main {
  position: relative;
  /* background: url(/img/W.png) no-repeat center;
  background-size: 80vh auto; */
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h2 {
    margin-top: 10px;
  }
  @media screen and (max-width: 1279px) {
    width: 100%;
    * {
      text-align: center;
    }
  }
}

html {
	background: #101010;
}

canvas {
  width: 100%;
  height: 100vh;
}

/* Fade effect */
.js body {
	opacity: 0;
	transition: opacity 0.6s;
}

.js body.render {
	opacity: 1;
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

.icon--keyboard {
	display: none;
}

main {
	position: relative;
	width: 100%;
}

.content {
	position: relative;
	display: grid;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin: 0 auto;
	min-height: 100vh;
}

.content--fixed {
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	display: grid;
	align-content: space-between;
	width: 100%;
	max-width: none;
	min-height: 0;
	height: 100vh;
	padding: 1.5em;
	pointer-events: none;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto auto 4em;
	grid-template-areas: 'header ...'
	'... ...'
	'github demos';
}

.content--fixed a {
	pointer-events: auto;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	align-items: center;
	align-self: start;
	grid-area: header;
	justify-self: start;
}

.codrops-header__title {
	font-size: 1em;
	font-weight: 500;
	margin: 0;
	padding: 0.75em 0;
}

.info {
	margin: 0 0 0 1.25em;
	color: var(--color-info);
}

.github {
	display: block;
	align-self: end;
	grid-area: github;
	justify-self: start;
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
	text-transform: lowercase;
	pointer-events: none;
}

.demo span::before {
	content: '#';
}

a.demo--current {
	pointer-events: none;
	color: var(--color-link-hover);
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

/* Canvas positions */
.content__inner {
	grid-area: 1 / 1 / 1 / 1;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;
}

.scene {
	position: absolute;
}

.scene--left {
	width: 100vmin;
	height: 100vmin;
	transform: translate3d(-50vmin,0,0);
}

.scene--full {
	width: 100%;
	height: 100vh;
}

.scene--up {
	height: 150vmin;
	width: 150vmin;
	top: -50vh;
	left: 50%;
	margin-left: -75vmin;
}

@media screen and (min-width: 55em) {
	.icon--keyboard {
		position: absolute;
		right: 0.55em;
		bottom: -30%;
		display: block;
		width: 54px;
		height: 46px;
		fill: var(--color-link);
	}
	.demos {
		display: flex;
		padding-right: 80px;
		justify-self: end;
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
		right: 100%;
		display: none;
		margin: 0 1em 0 0;
	}
	.demo--current span {
		display: block;
	}
}

@media screen and (max-width: 55em) {
	.message {
		/* display: block; */
	}
	.content {
		flex-direction: column;
		height: auto;
	}
	.content--fixed {
		position: relative;
		z-index: 1000;
		display: block;
		padding: 0.85em;
	}
	.content:not(.content--fixed) {
		margin-bottom: 6em;
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
	}
	.github {
		display: block;
		margin: 1em auto;
	}
	.codrops-links {
		margin: 0;
	}
}

.demo-5 {
	--color-text: #fff;
	--color-bg: #0F1617;
	--color-link: #4dc4a8;
	--color-link-hover: #333;
	--color-info: #ac1122;
	--color-title: #fff;
	--color-subtitle: #fff;
    --color-subtitle-bg: #4dc4a8;
}

.content__title {
	font-size: 10vw;
	font-weight: normal;
	color: var(--color-title);
	text-align: center;
	margin: 0;
	pointer-events: none;
}

.content__subtitle {
	font-size: 1.25em;
	background: var(--color-subtitle-bg);
	color: var(--color-subtitle);
	padding: 0.45em 0.5em;
	line-height: 1;
	margin: 0;
	letter-spacing: 0.5em;
	text-indent: 0.5em;
	font-weight: bold;
	text-transform: uppercase;
}

@media screen and (max-width: 55em) {
	.content__title {
		font-size: 3.5em;
	}
	.content__subtitle {
		font-size: 0.85em;
	}
}
</style>
