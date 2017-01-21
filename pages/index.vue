<template lang='pug'>
div
  Logo
  Burger
  Menu
  .popup-image(:class="{ popupActive: redirectState }")
  transition(name="fade")
    Nav(:portfolio='portfolio' v-if='!other')
  FixedBackground
    .image-after(:style="{ boxShadow: 'inset 100vw 100vh 0 100px' + portfolio[0].backgroundColors }")
    .image#fixed-image
  FixedFrame#fixed-frame
    .image
    transition(name="fade")
      div#fixedTitle(v-if='!other')
        span(v-for='(item, index) in fixedText') {{ item }}
  main#main
  <h1 class='main-title'>Профессиональная<br /> разработка сайтов <br />любой сложности</h1>
  div(@click='scrollInPortfolio').nav-project
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="20" height="64" viewBox="0 0 20 64">
      <path d="M0.790,56.905 L10.030,63.877 L19.270,56.905 " transform="translate(0.25)" class="cls-1"></path>
      <path d="M10,0 L10,63"></path>
    </svg>
  IndexContainer(v-for='(item, index) in portfolio' :key='index' :id='index')
    .container
      PortfolioElement.projectElem(
        :style="{ background: 'url(' + item.image + ') no-repeat top center', backgroundSize: 'cover'}")
        .imageBack(:style="{ background: 'url(' + item.image + ') no-repeat top center', backgroundSize: 'cover'}" @click='redirectProject(item, index)'
        )
          <h5> Смотреть <span>проект</span> <img src="/img/arrow.png" alt='arrow' title='arrow'></h5>
        .title
          h2 {{ item.title }}
          h3 {{ item.text[0] }}
          h3 {{ item.text[1] }}
          h3 {{ item.text[2] }}
  section.other#other
    transition(name="zoom")
      .other-container(v-if='otherNext')
        div
          span(:class='{ nextProj: otherNext }') Д
          span(:class='{ nextProj: otherNext }') Р
          span(:class='{ nextProj: otherNext }') У
          span(:class='{ nextProj: otherNext }') Г
          span(:class='{ nextProj: otherNext }') О
          span(:class='{ nextProj: otherNext }') Е
  Preloader
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Header/Logo.vue'
import Burger from '~/components/Header/Burger.vue'
import FixedBackground from '~/plugins/FixedBackground.js'
import FixedFrame from '~/plugins/FixedFrame.js'
import IndexContainer from '~/plugins/IndexContainer.js'
import PortfolioElement from '~/plugins/PortfolioElement.js'
import Nav from '~/components/Header/Nav.vue'
import Menu from '~/components/Header/Menu.vue'
import Preloader from '~/components/Preloader.vue'
import $ from 'jquery'

export default {
  head: {
    title: 'Andrey Wayne | Создание сайтов',
    meta: [
      { name: 'description', content: 'Создание сайтов, разработка сайтов под ключ, Landing Page, Многостраничный сайт, интернет магазин, корпоративный сайт, фриланс, фрилансер, вёрстка сайта' },
      { name: 'robots', content: 'all' },
      { name: 'keywords', content: 'Сайт портфолио. Разработка сайтов. Программист фрилансер. Frontend deveoper. Backend developer. Fullstack developer.' },
      { name: 'author', content: "Andrey Wayne Developer" },
      { name: 'copyright', lang: 'ru', content: '© AndreyWayne' },
      { name: 'yandex-verification', content: 'dec00f15f523bd69' },
      { name: 'google-site-verification', content: 'j-iSvamMwmmXqbUbGA5lvpFHt2spCnp2kTP3fNIHNvM' },
      { name: 'freelancehunt', content: 'fd7b30df0e7535e' },
      { property: "og:title", content: 'Andrey Wayne | Разработка сайтов | Web - программист' },
      { property: "og:url", content: 'http://andreywayne.ru' },
      { property: "og:type", content: 'article' },
      { property: "og:description", content: 'Создание сайтов, разработка сайтов под ключ, Landing Page, многостраничный сайт, интернет магазин, корпоративный сайт, фриланс, фрилансер, вёрстка сайта' },
      { property: "og:site_name", content: 'Andrey Wayne' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@andreywayne' },
      { name: 'twitter:creator', content: '@andreywayne' },
      { name: 'twitter:title', content: 'Andrey Wayne | Разработка сайтов | Web - программист' },
      { name: 'twitter:description', content: 'Создание сайтов, разработка сайтов под ключ, Landing Page, Многостраничный сайт, интернет магазин, корпоративный сайт, фриланс, фрилансер, вёрстка сайта' },
      { name: 'twitter:image', content: 'http://andreywayne.ru/img/social_image.jpg' }
    ],
    link: [
      { rel: 'canonical', href: 'http://andreywayne.ru' }
    ]
  },
  components: {
    Logo,
    Burger,
    Nav,
    FixedBackground,
    FixedFrame,
    IndexContainer,
    PortfolioElement,
    Menu,
    Preloader
  },
  data() {
    return {
      other: false,
      otherNext: false,
      redirectState: false,
      fixedText: ['A', 'N', 'D', 'R', 'E', 'Y'],
      randomText: [
        ['W', 'A', 'Y', 'N', 'E'],
        ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
        ['C', 'R',' E', 'A', 'T', 'I', 'V', 'E'],
        ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'],
        ['A', 'N', 'D', 'R', 'E', 'Y']
      ]
    }
  },
  computed: {
    ...mapState({
      portfolio: 'projects'
    })
  },
  methods: {
    transformFirstBlock () {
      var wTop = $(window).scrollTop()
      var wHeight = $(window).height()
      var wCoordsBottom = wTop + wHeight
      var percent = wCoordsBottom - wHeight
      var mathNumber = Math.max((((percent / wHeight) * 100) / 100))

      if (wCoordsBottom >= wHeight) {
        $('#fixed-frame').css({
          border: `2px solid rgba(255,255,255,${ mathNumber })`
        })
        $('.main-title').css({
          opacity: 1 - mathNumber
        })
        $('.nav-project').css({
          opacity: 1 - mathNumber
        })
        $('.image').css({
          opacity: 1 - mathNumber
        })
        $('.image-after').css({
          opacity: mathNumber
        })
      }
    },
    scrollInPortfolio () {
      $('html, body').animate({ scrollTop: $(window).height() }, 700)
    },
    backgroundcolor (item, i) {
      var wTop = $(window).scrollTop()
      var wHeight = $(window).height()
      var wCoordsBottom = wTop + wHeight

      if (wCoordsBottom >= item.mid) {
        $('.image-after').css({
          boxShadow: 'inset 100vw 100vh 0 100px ' + this.portfolio[i].backgroundColors
        })
      }
    },
    redirectProject (item, i) {
      var elCoordsTop = $(`#${ i }`).offset().top

      $('html, body').animate({ scrollTop: elCoordsTop }, 700)
      setTimeout(() => {
        $('.projectElem').css('opacity', 0)
        $('.popup-image').css({
          backgroundImage: `url(${ item.image })`
        })
        $('html').css('overflowY', 'hidden')

        this.redirectState = true

        setTimeout(() => {
          let { params } = item

          this.$router.push({ path: '/projects/' + params })
          $('html').css('overflowY', 'auto')

        }, 3100)
      }, 700)
    },
    watchNav (item, i) {
      var wTop = $(window).scrollTop()
      var wHeight = $(window).height()
      var wCoordsBottom = wTop + wHeight

      if (wCoordsBottom >= item.mid) {
        this.portfolio[i].active = true
      } else {
        this.portfolio[i].active = false
      }
    },
    otherNextFunc() {
      this.otherNext = true
    },
    scroll (person) {
      window.onscroll = () => {
        var wTop = $(window).scrollTop()
        var wHeight = $(window).height()
        var portfolio = this.portfolio
        var wCoordsBottom = wTop + wHeight
        var isEmpty = (object) => {
          return JSON.stringify(object) === "{}";
        }

        if (this.$route.path === '/') {
          var coordsElements = this.portfolio.map(function (item, i) {
            return {
              top: $('#' + i).offset().top,
              mid: ($('#' + i).offset().top) + (wHeight / 2),
              bot: ($('#' + i).offset().top) + wHeight
            }
          })

          coordsElements.forEach(this.watchNav)
          coordsElements.forEach(this.backgroundcolor)
          this.transformFirstBlock()

          var otherBot = ($('#other').offset().top) + wHeight
          var otherTop = $('#other').offset().top

          if (otherBot === (wTop + wHeight)) {
            $('body').css('overflow', 'hidden')
            this.other = true

            setTimeout(this.otherNextFunc, 700)

            setTimeout(() => {
              this.$router.push({ path: '/other-projects' })
            }, 2000)
          }
        }
      }
    }
  },
  mounted () {
    this.scroll();

    var countFixedName = 0
    setInterval(() => {
      if (countFixedName <= this.randomText.length-1) {
        clearTimeout(setFunc)
        $('#fixedTitle').animate({
          opacity: 0
        })
        $('#fixedTitle span').removeClass('activeText')

        var setFunc = setTimeout(() => {
          this.fixedText = this.randomText[countFixedName++]
          $('#fixedTitle').animate({
            opacity: 1
          })
          $('#fixedTitle span').addClass('activeText')
        }, 1000)
      } else {
        countFixedName = 0
      }
    }, 6000)
  }
}
</script>

<style lang='less' scoped>
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

#fixedTitle {
  opacity: 1;
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

  &:hover svg {
    margin-top: 10px;
  }

  @media screen and (max-height: 535px) {
    display: none;
  }
}

main {
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: -1;
}

h1 {
  position: absolute;
  top: 50%;
  left: 20vw;
  color: #2f3b44;
  transform: translateY(-50%);
  z-index: 5;
  font-family: 'GT Walsheim Pro Bold';
  font-size: 52px;
  line-height: 70px;

  @media screen and (max-width:1100px) {
    font-size: 35px;
    line-height: 50px;
  }

  @media screen and (max-width:695px) {
    font-size: 25px;
    line-height: 35px;
  }

  @media screen and (max-width:450px) {
    line-height: 25px;
    font-size: 16px;
  }
}

@keyframes popup-animate {
  0% {
    width: 50vw;
    height: 50vh;
  }
  50% {
    height: 70vh;
    width: 80vw;
    z-index: 1000;
  }
  100% {
    height: 100vh;
    width: 100%;
    z-index: 1000;
  }
}

.popup-image {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  height: 0vh;
  width: 0vw;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.popupActive {
  animation: popup-animate 3s forwards ease;
}

.other {
  position: relative;
  z-index: 100;
  min-height: 100vh;
  width: 100%;
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
.fade-enter-active, .fade-leave-active {
  transition: all 700ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@keyframes zoom {
  0% {
    color: white;
  }
  50% {
    color: #ee394e;
  }
  100% {
    color: white;
  }
}
.nextProj {
  animation: zoom 1.5s;
}
.zoom-enter-active, .zoom-leave-active {
  transition: all 1s;
}
.zoom-enter, .zoom-leave-to {
  opacity: 0;
}
</style>
