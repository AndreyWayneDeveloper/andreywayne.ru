<template lang='pug'>
#cursor
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    var box = '<div class="follow"></div>'
    $( "body" ).append( box )

    $(document).on('mousemove', function(e){
      $('.follow').css({
         left:  e.pageX - 13,
         top:   e.pageY - 13
      })
    })

    if($(window).width() > 1024) {
        var hide_cursor_style = document.createElement("style")
        hide_cursor_style.innerHTML = "* { cursor: none; }"
        document.head.appendChild(hide_cursor_style)

        var cursor = document.getElementById("cursor")
        cursor.style.position = "fixed"
        document.addEventListener("mousemove", function (event) {
          cursor.style.top = event.clientY + 5 - cursor.offsetHeight / 2.0 + "px"
          cursor.style.left = event.clientX + 3 - cursor.offsetWidth / 2.0 + "px"
        })
      }
  }
}
</script>

<style scoped lang='less'>
#cursor {
    width: 6px;
    height: 6px;
    z-index: 99999999999999999999;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0px 0px 0px 20px white;
}

.box-circle {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: relative;
  border: 3px solid #fff;
   overflow: hidden;
}

.circle-full {
  height: 102%;
  width: 102%;
  border-radius: 50%;
  position: relative;
   background: #fff;
}

.follow {
  z-index: 10;
  width: 26px;
  height: 26px;
  position: fixed;
  border-radius: 50%;
  border: 2px solid #fff;
  opacity: 0.4;
 transition: .6s ease-out;
 pointer-events: none;
 z-index: 1000000000000009999999;
}
</style>
