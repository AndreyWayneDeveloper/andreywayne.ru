<template lang="pug">
div
  Logo
  Burger
  Menu
  section.other
    div(@click='scrollInPortfolio').nav-project
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="20" height="64" viewBox="0 0 20 64">
        <path d="M0.790,56.905 L10.030,63.877 L19.270,56.905 " transform="translate(0.25)" class="cls-1"></path>
        <path d="M10,0 L10,63"></path>
      </svg>
    .other-container
      div
        span Д
        span Р
        span У
        span Г
        span О
        span Е
  section.projects
    .container
      .project(v-for='(item, i) in otherProjects')
        .image(
          :style="{ backgroundImage: `url(${item.background})` }"
          :class='{ imageHover: item.active }'
        )
          .darken
        a(
          @mousemove='positionText'
          @mouseover='mouseover(item)'
          @mouseout='mouseout(item)'
          :href='item.url'
          target="_blank"
        )
        .title(:style="{ transform: `translate(${left}px, ${top}px)` }")
          h2 {{ item.title }}
          h3 {{ item.type }}
  div.back
    nuxt-link(to='/') Вернуться на главную
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Header/Logo.vue'
import Burger from '~/components/Header/Burger.vue'
import Menu from '~/components/Header/Menu.vue'
import $ from 'jquery'
export default {
  data() {
    return {
      top: 0,
      left: 0
    }
  },
  computed: {
    ...mapState([
      'otherProjects'
    ])
  },
  methods: {
    mouseover(item) {
      item.active = true
    },
    mouseout(item) {
      item.active = false
    },
    scrollInPortfolio () {
      $('html, body').animate({ scrollTop: $(window).height() }, 700)
    },
    positionText(e) {
      this.left = e.offsetX/25
      this.top = e.offsetY/25
    }
  },
  components: {
    Logo,
    Burger,
    Menu
  },
  mounted() {
    $('body').css('overflow-y', 'auto')
  }
}
</script>

<style scoped lang="less">
@keyframes rotateText {
  from { transform: rotateY(0deg) }
  to { transform: rotateY(360deg)}
}
.other {
  position: relative;
  z-index: 100;
  min-height: 100vh;
  width: 100%;
  background: #a6d5fa;
  &-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    min-height: 70vh;
    display: flex;
    justify-content: space-between;
    perspective: 650px;
    transition: all .4s;
    border: 2px solid white;
    & div {
      position: absolute;
      width: 85vw;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      justify-content: space-between;
      perspective: 650px;
      transition: all .4s;
      & span {
        font-family: 'GT Walsheim Pro Bold';
        color: white;
        text-transform: uppercase;
        line-height: 70vh;
        font-size: 135px;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        animation: rotateText infinite 10s 1s ease-in-out;
        @media screen and (max-width:1000px) {
          font-size: 100px;
        }

        @media screen and (max-width:765px) {
          font-size: 50px;
        }
      }
    }
  }
}

.container {
  width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    width: 765px;
  }
  @media screen and (max-width: 835px) {
    padding: 20px;
    width: 100%;
  }
}

.projects {
  margin: 100px 0;
  @media screen and (max-width: 1100px) {
    margin: 75px 0;
  }
  @media screen and (max-width: 850px) {
    margin: 50px 0;
    margin-bottom: 25px;
  }
}

.project {
  position: relative;
  width: 100%;
  height: 430px;
  margin-bottom: 100px;
  @media screen and (max-width: 1100px) {
    height: 360px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 835px) {
    height: 300px;
  }
  & a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 860px;
    z-index: 100;
    &:hover + .title {
      opacity: 1;
    }
    @media screen and (max-width: 1100px) {
      width: 630px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media screen and (max-width: 835px) {
      max-width: 350px;
      width: 100%;
    }
  }
  & .image {
    position: absolute;
    left: 0;
    height: 100%;
    width: 860px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all .4s;
    @media screen and (max-width: 1100px) {
      width: 630px;
    }
    @media screen and (max-width: 835px) {
      left: 50%;
      transform: translateX(-50%);
      max-width: 350px;
      width: 100%;
      & .darken {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
      }
    }
  }
  .title {
    position: absolute;
    right: 0;
    top: 50%;
    max-width: 600px;
    min-height: 84px;
    margin-top: -41px;
    opacity: 0;
    transition: opacity .4s, transform .2s;
    @media screen and (max-width: 835px) {
      position: relative;
      width: 280px;
      text-align: center;
      margin: 0 auto;
      right: auto;
      left: auto;
      opacity: 1;
    }
  }
  & h2 {
    font-family: 'GT Walsheim Pro Medium';
    font-size: 35px;
    color: #30373c;
    text-align: right;
    @media screen and (max-width: 1100px) {
      font-size: 25px;
    }
    @media screen and (max-width: 835px) {
      text-align: center;
      color: white;
    }
  }
  h3 {
    text-align: right;
    font-family: 'SF UI Display Bold';
    font-size: 21px;
    margin-top: 10px;
    color: #999;
    @media screen and (max-width: 1100px) {
      font-size: 16px;
      margin-top: 5px;
    }
    @media screen and (max-width: 835px) {
      text-align: center;
      color: white;
    }
  }
  &:nth-child(2n) {
    & a {
      right: 0;
      left: auto;
      @media screen and (max-width: 835px) {
        right: auto;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .image {
      left: auto;
      right: 0;
      @media screen and (max-width: 835px) {
        right: auto;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .title {
      right: auto;
      left: 0;
      text-align: left;
    }
    & h2 {
      text-align: left;
      @media screen and (max-width: 835px) {
        text-align: center;
      }
    }
    & h3 {
      text-align: left;
      @media screen and (max-width: 835px) {
        text-align: center;
      }
    }
  }
  &:last-child {
    margin-bottom: 0px;;
  }
}
.nav-project {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5vh;
  width: 70px;
  height: 140px;
  border: 2px solid #ee394e;
  cursor: pointer;
  transition: .4s;
  z-index: 10;

  &:hover svg {
    margin-top: 10px;
  }

  @media screen and (max-height: 535px) {
    display: none;
  }
}
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .4s;
}

path {
  stroke: #ee394e;
  stroke-width: 1.3px;
  fill: none;
  fill-rule: evenodd;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.imageHover {
  opacity: .5;
  @media screen and (max-width: 835px) {
    opacity: 1;
  }
}

.back {
  display: flex;
  margin-bottom: 50px;
  a {
    color: #ee394e;
    font-family: 'SF UI Display Bold';
    font-size: 18px;
    margin: 0 auto;
  }
}
</style>
