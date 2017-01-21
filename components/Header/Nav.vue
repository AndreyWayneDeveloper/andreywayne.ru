<template lang='pug'>
.nav
  .contain
    ul
      li(v-for='(item, index) in portfolio' :class='{ active: item.active}' @click='navigation(index)')
        span {{ item.title }}
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
    position: relative;
    width: 150px;
    height: 35px;
    cursor: pointer;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'GT Walsheim Pro Medium';
      font-size: 14px;
      opacity: 0;
      text-align: center;
      width: 150px;
      transition: all .4s;
    }
    &:hover:after {
      width: 0;
    }
    &:hover span {
      opacity: 1;
    }
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 2px;
      background: #30373c;
      transition: all .3s;
    }

    @media screen and (max-height:450px) {
      width: 15px;
      height: 15px;
      margin-bottom: 7.5px;
    }
  }
  .active {
    &:after {
      background: #ee394e;
      width: 60px;
    }
    & span {
      color: #ee394e;
    }
  }
}
</style>
