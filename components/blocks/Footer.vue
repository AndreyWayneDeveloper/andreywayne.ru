<template lang='pug'>
Container
  footer
    .top
      .title-footer
        .title-footer-desc
          H2(typed='footer') Создадим нечто крутое?
          Title(typed='min') Каждый проект сделан с теплом и любовью!
        .title-footer-contacts
          .title-footer-contacts-contact
            p
              | email:
              span //
            a(href='mailto: developer@andreywayne.ru') developer@andreywayne.ru
          .title-footer-contacts-contact
            p
              | tel:
              span //
            a(href='tel:89507458396') +7 (950)-745-83-96
          .title-footer-contacts-contact
            p
              | vk:
              span //
            a(href='https://vk.com/killwayne' target='_blank') vk.com/andreywayne
      canvas#canvas
  Title(typed='min').copy © andreywayne 2019
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import brain from '~/static/img/telegram-1.svg'
import { Container } from '~/plugins/Common'
import H2 from '~/plugins/H2'
import Title from '~/plugins/Title'
export default {
  components: {
    Container,
    H2,
    Title
  },
  mounted() {
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    var Nodes = {

      // Settings
      density: 16,

      drawDistance: 24,
      baseRadius: 4,
      maxLineThickness: 4,
      reactionSensitivity: 3,
      lineThickness: 1,

      points: [],
      mouse: { x: -1000, y: -1000, down: false },

      animation: null,

      canvas: null,
      context: null,

      imageInput: null,
      bgImage: null,
      bgCanvas: null,
      bgContext: null,
      bgContextPixelData: null,

      init: function() {
        // Set up the visual canvas
        this.canvas = document.getElementById( 'canvas' );
        this.context = canvas.getContext( '2d' );
        this.context.globalCompositeOperation = "lighter";
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.display = 'block'

        this.imageInput = document.createElement( 'input' );
        this.imageInput.setAttribute( 'type', 'file' );
        this.imageInput.style.visibility = 'hidden';
        this.imageInput.addEventListener('change', this.upload, false);
        document.body.appendChild( this.imageInput );

        this.canvas.addEventListener('mousemove', this.mouseMove, false);
        this.canvas.addEventListener('mousedown', this.mouseDown, false);
        this.canvas.addEventListener('mouseup',   this.mouseUp,   false);
        this.canvas.addEventListener('mouseout',  this.mouseOut,  false);

        window.onresize = function(event) {
          Nodes.canvas.width = 500;
          Nodes.canvas.height = 500;
          Nodes.onWindowResize();
        }

        // Load initial input image (the chrome logo!)
        this.loadData(brain);
      },

      preparePoints: function() {

        // Clear the current points
        this.points = [];

        var width, height, i, j;

        var colors = this.bgContextPixelData.data;

        for( i = 0; i < this.canvas.height; i += this.density ) {

          for ( j = 0; j < this.canvas.width; j += this.density ) {

            var pixelPosition = ( j + i * this.bgContextPixelData.width ) * 4;

            // Dont use whiteish pixels
            if ( colors[pixelPosition] > 200 && (colors[pixelPosition + 1]) > 200 && (colors[pixelPosition + 2]) > 200 || colors[pixelPosition + 3] === 0 ) {
              continue;
            }

            var color = 'rgba(' + colors[pixelPosition] + ',' + colors[pixelPosition + 1] + ',' + colors[pixelPosition + 2] + ',' + '1)';
            this.points.push( { x: j, y: i, originalX: j, originalY: i, color: color } );

          }
        }
      },

      updatePoints: function() {

        var i, currentPoint, theta, distance;

        for (i = 0; i < this.points.length; i++ ){

          currentPoint = this.points[i];

          theta = Math.atan2( currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);

          if ( this.mouse.down ) {
            distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
             (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
          } else {
            distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
             (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
          }


          currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
          currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

        }
      },

      drawLines: function() {

        var i, j, currentPoint, otherPoint, distance, lineThickness;

        for ( i = 0; i < this.points.length; i++ ) {

          currentPoint = this.points[i];

          // Draw the dot.
          this.context.fillStyle = currentPoint.color;
          this.context.strokeStyle = currentPoint.color;

          for ( j = 0; j < this.points.length; j++ ){

            // Distaqnce between two points.
            otherPoint = this.points[j];

            if ( otherPoint == currentPoint ) {
              continue;
            }

            distance = Math.sqrt((otherPoint.x - currentPoint.x) * (otherPoint.x - currentPoint.x) +
             (otherPoint.y - currentPoint.y) * (otherPoint.y - currentPoint.y));

            if (distance <= this.drawDistance) {

              this.context.lineWidth = (1 - (distance / this.drawDistance)) * this.maxLineThickness * this.lineThickness;
              this.context.beginPath();
              this.context.moveTo(currentPoint.x, currentPoint.y);
              this.context.lineTo(otherPoint.x, otherPoint.y);
              this.context.stroke();
            }
          }
        }
      },

      drawPoints: function() {

        var i, currentPoint;

        for ( i = 0; i < this.points.length; i++ ) {

          currentPoint = this.points[i];

          // Draw the dot.
          this.context.fillStyle = currentPoint.color;
          this.context.strokeStyle = currentPoint.color;

          this.context.beginPath();
          this.context.arc(currentPoint.x, currentPoint.y, this.baseRadius ,0 , Math.PI*2, true);
          this.context.closePath();
          this.context.fill();

        }
      },

      draw: function() {
        this.animation = requestAnimationFrame( function(){ Nodes.draw() } );

        this.clear();
        this.updatePoints();
        this.drawLines();
        this.drawPoints();

      },

      clear: function() {
        this.canvas.width = this.canvas.width;
      },

      // The filereader has loaded the image... add it to image object to be drawn
      loadData: function( data ) {

        this.bgImage = new Image;
        this.bgImage.src = data;

        this.bgImage.onload = function() {

          //this
          Nodes.drawImageToBackground();
        }
      },

      // Image is loaded... draw to bg canvas
      drawImageToBackground: function () {

        this.bgCanvas = document.createElement( 'canvas' );
        this.bgCanvas.width = this.canvas.width;
        this.bgCanvas.height = this.canvas.height;

        var newWidth, newHeight;

        // If the image is too big for the screen... scale it down.
        if ( this.bgImage.width > this.bgCanvas.width - 100 || this.bgImage.height > this.bgCanvas.height - 100) {

          var maxRatio = Math.max( this.bgImage.width / (this.bgCanvas.width - 100) , this.bgImage.height / (this.bgCanvas.height - 100) );
          newWidth = this.bgImage.width / maxRatio;
          newHeight = this.bgImage.height / maxRatio;

        } else {
          newWidth = this.bgImage.width;
          newHeight = this.bgImage.height;
        }

        // Draw to background canvas
        this.bgContext = this.bgCanvas.getContext( '2d' );
        this.bgContext.drawImage( this.bgImage, (this.canvas.width - newWidth) / 2, (this.canvas.height - newHeight) / 2, newWidth, newHeight);
        this.bgContextPixelData = this.bgContext.getImageData( 0, 0, this.bgCanvas.width, this.bgCanvas.height );

        this.preparePoints();
        this.draw();
      },

      mouseDown: function( event ){
        Nodes.mouse.down = true;
      },

      mouseUp: function( event ){
        Nodes.mouse.down = false;
      },

      mouseMove: function(event){
        Nodes.mouse.x = event.offsetX || (event.layerX - Nodes.canvas.offsetLeft);
        Nodes.mouse.y = event.offsetY || (event.layerY - Nodes.canvas.offsetTop);
      },

      mouseOut: function(event){
        Nodes.mouse.x = -1000;
        Nodes.mouse.y = -1000;
        Nodes.mouse.down = false;
      },

      // Resize and redraw the canvas.
      onWindowResize: function() {
        cancelAnimationFrame( this.animation );
        this.drawImageToBackground();
      }
    }

      setTimeout( function() {
        Nodes.init();
    }, 10 );
  }
}
</script>

<style scoped lang='less'>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
}

.title-footer {
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
}
.title-footer-contacts {
  margin-top: 30px;
  padding-top: 25px;
  max-width: 500px;
  border-top: 1px solid white;
  @media screen and (max-width: 1279px) {
    max-width: 100%;
  }
}
.title-footer-contacts-contact {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  * {
    color: white;
    font-family: Medium;
    font-size: 18px;
    @media screen and (max-width: 1279px) {
      font-size: 16px;
    }
  }
  span {
    color: #fe0e55;
  }
  a {
    margin-left: 10px;
  }
}
.top {
  display: flex;
  h2 {
    max-width: 500px;
    text-align: left;
    margin-bottom: 10px;
    @media screen and (max-width: 1279px) {
      max-width: 100%;
    }
  }
}
footer {
  transform: translate(0);
  z-index: 22222;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1279px) {
    padding-top: 200px;
    height: auto;
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
.copy {
  transform: translate(0);
  z-index: 22222;
  text-align: center;
}
</style>
