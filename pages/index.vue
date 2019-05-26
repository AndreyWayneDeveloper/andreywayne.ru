<template lang='pug'>
div
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '~/components/blocks/Footer'
import Projects from '~/components/blocks/Projects'
import Us from '~/components/blocks/Us'
import Logo from '~/components/elements/Logo'
export default {
  data() {
    return {
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
