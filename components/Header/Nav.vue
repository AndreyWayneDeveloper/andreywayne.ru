<template lang='pug'>
.nav
  .contain
    ul
      li(v-for='(item, index) in portfolio' :class='{ active: item.active}' @click='navigation(index)')
</template>

<script>
import $ from 'jquery'
export default {
  props: ['portfolio'],
  methods: {
    navigation (index) {
      var coords = $('#' + index).offset().top
      $('html, body').animate({ scrollTop: coords }, 700)

      this.portfolio.forEach(function(item, i) {
        item.active = false
        if (index === i) {
          item.active = true
        }
      })
    }
  },
  mounted () {
    $('.nav').fadeOut(0)
    $(window).on('scroll', function() {
      var wTop = $(window).scrollTop()
      var wHeight = $(window).height()
      if (wTop >= wHeight) {
        $('.nav').fadeIn()
      } else {
        $('.nav').fadeOut()
      }
    })
  }
}
</script>

<style lang='less' scoped>
.nav {
  position: fixed;
  margin-top: 2px;
  right: 7.5vw;
  width: 75px;
  z-index: 1000;
  margin-right: 81.5px;
  min-height: 70vh;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (max-width:1000px) {
    margin-right: 0px;
    width: 20px;
  }

  & .contain {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-right: 100px;
  }
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    height: 100%;
  }
  li {
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #30373c;
    cursor: pointer;
    transition: all .4s;

    @media screen and (max-height:450px) {
      width: 15px;
      height: 15px;
      margin-bottom: 7.5px;
    }
  }
  .active {
    background: #ee394e;
  }
}
</style>
