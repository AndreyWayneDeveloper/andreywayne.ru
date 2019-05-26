<template lang='pug'>
.main
  canvas#scene
  .title
    H1(typed='normal' data-aos="zoom-in"
     data-aos-duration="1000") Andrey Wayne
    H2(typed='main' data-aos="fade-up"
     data-aos-duration="1500") Креативный frontend разработчик
  .scroll
    img(src='/img/arrow-scroll.svg')
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
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import TweenMax from 'gsap'
const THREE = require('three');
import H1 from '~/plugins/H1'
import H2 from '~/plugins/H2'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Parallax from 'vue-parallaxy'
import Title from '~/plugins/Title'
export default {
  components: {
    H1,
    H2,
    Parallax,
    Title
  },
  mounted() {
      var module = global.noise = {};

      function Grad(x, y, z) {
        this.x = x; this.y = y; this.z = z;
      }

      Grad.prototype.dot2 = function(x, y) {
        return this.x*x + this.y*y;
      };

      Grad.prototype.dot3 = function(x, y, z) {
        return this.x*x + this.y*y + this.z*z;
      };

      var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                   new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                   new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

      var p = [151,160,137,91,90,15,
      131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
      190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
      88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
      77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
      102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
      135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
      5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
      223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
      129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
      251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
      49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
      138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
      // To remove the need for index wrapping, double the permutation table length
      var perm = new Array(512);
      var gradP = new Array(512);

      // This isn't a very good seeding function, but it works ok. It supports 2^16
      // different seed values. Write something better if you need more seeds.
      module.seed = function(seed) {
        if(seed > 0 && seed < 1) {
          // Scale the seed out
          seed *= 65536;
        }

        seed = Math.floor(seed);
        if(seed < 256) {
          seed |= seed << 8;
        }

        for(var i = 0; i < 256; i++) {
          var v;
          if (i & 1) {
            v = p[i] ^ (seed & 255);
          } else {
            v = p[i] ^ ((seed>>8) & 255);
          }

          perm[i] = perm[i + 256] = v;
          gradP[i] = gradP[i + 256] = grad3[v % 12];
        }
      };

      module.seed(0);

      /*
      for(var i=0; i<256; i++) {
        perm[i] = perm[i + 256] = p[i];
        gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
      }*/

      // Skewing and unskewing factors for 2, 3, and 4 dimensions
      var F2 = 0.5*(Math.sqrt(3)-1);
      var G2 = (3-Math.sqrt(3))/6;

      var F3 = 1/3;
      var G3 = 1/6;

      // 2D simplex noise
      module.simplex2 = function(xin, yin) {
        var n0, n1, n2; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin+yin)*F2; // Hairy factor for 2D
        var i = Math.floor(xin+s);
        var j = Math.floor(yin+s);
        var t = (i+j)*G2;
        var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
        var y0 = yin-j+t;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
          i1=1; j1=0;
        } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
          i1=0; j1=1;
        }
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
        var y2 = y0 - 1 + 2 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        i &= 255;
        j &= 255;
        var gi0 = gradP[i+perm[j]];
        var gi1 = gradP[i+i1+perm[j+j1]];
        var gi2 = gradP[i+1+perm[j+1]];
        // Calculate the contribution from the three corners
        var t0 = 0.5 - x0*x0-y0*y0;
        if(t0<0) {
          n0 = 0;
        } else {
          t0 *= t0;
          n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.5 - x1*x1-y1*y1;
        if(t1<0) {
          n1 = 0;
        } else {
          t1 *= t1;
          n1 = t1 * t1 * gi1.dot2(x1, y1);
        }
        var t2 = 0.5 - x2*x2-y2*y2;
        if(t2<0) {
          n2 = 0;
        } else {
          t2 *= t2;
          n2 = t2 * t2 * gi2.dot2(x2, y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
      };

      // 3D simplex noise
      module.simplex3 = function(xin, yin, zin) {
        var n0, n1, n2, n3; // Noise contributions from the four corners

        // Skew the input space to determine which simplex cell we're in
        var s = (xin+yin+zin)*F3; // Hairy factor for 2D
        var i = Math.floor(xin+s);
        var j = Math.floor(yin+s);
        var k = Math.floor(zin+s);

        var t = (i+j+k)*G3;
        var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
        var y0 = yin-j+t;
        var z0 = zin-k+t;

        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if(x0 >= y0) {
          if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
          else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
          else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
        } else {
          if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
          else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
          else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        var x1 = x0 - i1 + G3; // Offsets for second corner
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;

        var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
        var y2 = y0 - j2 + 2 * G3;
        var z2 = z0 - k2 + 2 * G3;

        var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
        var y3 = y0 - 1 + 3 * G3;
        var z3 = z0 - 1 + 3 * G3;

        // Work out the hashed gradient indices of the four simplex corners
        i &= 255;
        j &= 255;
        k &= 255;
        var gi0 = gradP[i+   perm[j+   perm[k   ]]];
        var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
        var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
        var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

        // Calculate the contribution from the four corners
        var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
        if(t0<0) {
          n0 = 0;
        } else {
          t0 *= t0;
          n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
        if(t1<0) {
          n1 = 0;
        } else {
          t1 *= t1;
          n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
        }
        var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
        if(t2<0) {
          n2 = 0;
        } else {
          t2 *= t2;
          n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
        }
        var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
        if(t3<0) {
          n3 = 0;
        } else {
          t3 *= t3;
          n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 32 * (n0 + n1 + n2 + n3);

      };

      // ##### Perlin noise stuff

      function fade(t) {
        return t*t*t*(t*(t*6-15)+10);
      }

      function lerp(a, b, t) {
        return (1-t)*a + t*b;
      }

      // 2D Perlin Noise
      module.perlin2 = function(x, y) {
        // Find unit grid cell containing point
        var X = Math.floor(x), Y = Math.floor(y);
        // Get relative xy coordinates of point within that cell
        x = x - X; y = y - Y;
        // Wrap the integer cells at 255 (smaller integer period can be introduced here)
        X = X & 255; Y = Y & 255;

        // Calculate noise contributions from each of the four corners
        var n00 = gradP[X+perm[Y]].dot2(x, y);
        var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
        var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
        var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

        // Compute the fade curve value for x
        var u = fade(x);

        // Interpolate the four results
        return lerp(
            lerp(n00, n10, u),
            lerp(n01, n11, u),
           fade(y));
      };

      // 3D Perlin Noise
      module.perlin3 = function(x, y, z) {
        // Find unit grid cell containing point
        var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
        // Get relative xyz coordinates of point within that cell
        x = x - X; y = y - Y; z = z - Z;
        // Wrap the integer cells at 255 (smaller integer period can be introduced here)
        X = X & 255; Y = Y & 255; Z = Z & 255;

        // Calculate noise contributions from each of the eight corners
        var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
        var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
        var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
        var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
        var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
        var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
        var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
        var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

        // Compute the fade curve value for x, y, z
        var u = fade(x);
        var v = fade(y);
        var w = fade(z);

        // Interpolate
        return lerp(
            lerp(
              lerp(n000, n100, u),
              lerp(n001, n101, u), w),
            lerp(
              lerp(n010, n110, u),
              lerp(n011, n111, u), w),
           v);
      };

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

    var canvas = document.querySelector('canvas');
    var width = canvas.offsetWidth,
        height = canvas.offsetHeight;

    var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000,0);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 350);

    var sphere = new THREE.Group();
    scene.add(sphere);
    var material = new THREE.LineBasicMaterial({
        color: 0xfe0e55
    });
    var linesAmount = 18;
    var radius = 100;
    var verticesAmount = 50;
    for(var j=0;j<linesAmount;j++){
        var index = j;
        var geometry = new THREE.Geometry();
        geometry.y = (index/linesAmount) * radius*2;
        for(var i=0;i<=verticesAmount;i++) {
            var vector = new THREE.Vector3();
            vector.x = Math.cos(i/verticesAmount * Math.PI*2);
            vector.z = Math.sin(i/verticesAmount * Math.PI*2);
            vector._o = vector.clone();
            geometry.vertices.push(vector);
        }
        var line = new THREE.Line(geometry, material);
        sphere.add(line);
    }

    function updateVertices (a) {
     for(var j=0;j<sphere.children.length;j++){
         var line = sphere.children[j];
         line.geometry.y += 0.3;
         if(line.geometry.y > radius*2) {
             line.geometry.y = 0;
         }
         var radiusHeight = Math.sqrt(line.geometry.y * (2*radius-line.geometry.y));
         for(var i=0;i<=verticesAmount;i++) {
             var vector = line.geometry.vertices[i];
                var ratio = noise.simplex3(vector.x*0.009, vector.z*0.009 + a*0.0006, line.geometry.y*0.009) * 15;
                vector.copy(vector._o);
                vector.multiplyScalar(radiusHeight + ratio);
                vector.y = line.geometry.y - radius;
            }
         line.geometry.verticesNeedUpdate = true;
     }
    }

    function render(a) {
        requestAnimationFrame(render);
        updateVertices(a);
        renderer.render(scene, camera);
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

    var mouse = new THREE.Vector2(0.8, 0.5);
    function onMouseMove(e) {
        mouse.y = e.clientY / window.innerHeight;
        TweenMax.to(sphere.rotation, 2, {
            x : (mouse.y * 1),
            ease:Power1.easeOut
        });
    }

    requestAnimationFrame(render);
    window.addEventListener("mousemove", onMouseMove);
    var resizeTm;
    window.addEventListener("resize", function(){
        resizeTm = clearTimeout(resizeTm);
        resizeTm = setTimeout(onResize, 200);
    });
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
  background: url(/img/W.png) no-repeat center;
  background-size: 80vh auto;
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
