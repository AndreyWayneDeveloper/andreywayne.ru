<template lang='pug'>
div
  transition(name='fade')
    .preloader(v-if='preloader')
      .load__container
        .load__animation
        .load__mask
  Logo
  Us
  Main
  MainTitle
  Projects(:api='projects')
  Footer
</template>
<script>
import { Wrapper, Container, Section } from '~/plugins/Common'
import Main from '~/components/blocks/Main'
import Parallax from 'vue-parallaxy'
import MainTitle from '~/components/blocks/MainTitle'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
import 'aos/dist/aos.css'
import Footer from '~/components/blocks/Footer'
import Projects from '~/components/blocks/Projects'
import Us from '~/components/blocks/Us'
import Logo from '~/components/elements/Logo'
import AOS from 'aos'
import $ from 'jquery'
export default {
  data() {
    return {
      preloader: true,
      projects: [
        {
          title: 'IT система муниципал',
          subtitle: 'Система для органов самоуправления',
          link: 'http://mopushkin.spb.ru',
          image: '/img/projects/mopushkin.jpg'
        },
        {
          title: 'Муниципалитет 19-24',
          subtitle: 'Муниципалитет нового поколения',
          link: 'https://mo1924.ru/',
          image: '/img/projects/spb.jpg'
        },
        {
          title: 'Gilmon',
          subtitle: 'Популярный сервис скидок',
          link: 'https://chelyabinsk.gilmon.ru/',
          image: '/img/projects/gilmon.jpg'
        },
        {
          title: 'TIAP',
          subtitle: 'Транспортный информационно- аналитический портал',
          link: 'https://tiap.ru/',
          image: '/img/projects/tiap.jpg'
        },
        {
          title: 'Пик Формы',
          subtitle: 'Интернет магазин спортивного питания',
          link: 'http://pikformi.ru/',
          image: '/img/projects/pikformi.jpg'
        }
      ]
    }
  },
  mounted() {
    AOS.init()
    $(document).ready(() => {
      setTimeout(() => {
        this.preloader = false
      }, 3000)
    })
  },
  components: {
    Wrapper,
    Container,
    Section,
    Main,
    Parallax,
    MainTitle,
    ParallaxElement,
    ParallaxContainer,
    Footer,
    Projects,
    Us,
    Logo
  }
}
</script>

<style scoped lang='less'>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateY(-100%);
}
.load__none {
  display: none;
  color:#fff;
}

.load__animation{
  border: 5px solid #272727;
  border-top-color: #c70efe;
  border-top-style: groove;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -webkit-animation: turn 1.5s linear infinite;
  -o-animation: turn 1.5s linear infinite;
  animation: turn 1.5s linear infinite;
}

.load__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .1s;
}

@keyframes turn {
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}

.load__title {
  color: #fff;
  font-size: 2rem;
}


@keyframes loadPage {
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }

}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0b0812;
  z-index: 1000000000000000;
}
p {
  color: white;
}
.project {
  position: relative;
  width: 1000px;
  height: 600px;
  background: white;
  &-title {
    position: absolute;
    bottom: -200px;
    right: -300px;
    width: 600px;
    height: 300px;
    background: red;
  }
}

.wrapper {
   min-height: 100vh;
}
</style>
