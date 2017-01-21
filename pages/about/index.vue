<template lang='pug'>
div
  Logo
  Burger
  Menu
  section.persone.glitch
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    span.head.head-top Andrey Wayne
    .line.line-1
    .line.line-2
    .line.line-3
    .line.line-4
    .p-1
    .p-2
    .p-3
    .p-4
    .filter
      span К
      span О
      span Н
      span Т
      span А
      span К
      span Т
      span Ы
  section.about
    .line.line-1
    .line.line-2
    .line.line-3
    .line.line-4
    span.head Обо мне
    <h2 id='0' class='animate'>Меня зовут Андрей, и я web - разработчик. Я специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.</h2>
  section.skills
    .line.line-1
    .line.line-2
    .line.line-3
    .line.line-4
    span.head Skills
    div.wrapper#1.animate
      ul.ul.front
        li.head-li Frontend
        li
          ul.ul-list
            li
              span HTML5
              span Pug
            li
              span CSS3
              span SVG
              span Less
              span Sass(Scss)
              span Bootstrap 4
              span Materialize
            li
              span Gulp
              span WebPack
            li
              span JavaScript (ES6, ES7, ES8, ES9)
              span Vanilla.js
              span jQuery
              span Vue.js
              span Nuxt.js
              span VueCLI
              span Vue-router
              span Vuex
              span React.js
              span Redux
              span Next.js
            li
              span Axios
              span Fetch
              span Ajax
              span Vue-resource
      ul.ul.back
        li.head-li Backend
        li
            ul.ul-list
              li
                span PHP
                span MySQL
                span phpMyAdmin
              li
                span Node.js
                span Express
                span Mongodb
      ul.ul.other
        li.head-li Другое
        li
          ul.ul-list
            li
              span Git
              span GitLab
              span npm
            li
              span БЭМ
              span Mobile
              span Кроссбраузерная/адаптивная вёрстка
              span Pixel Perfect
            li
              span Sketch
              span Zeplin
              span Photoshop
  section.contacts
    span.head Контакты
    .line.line-1
    .line.line-2
    .line.line-3
    .line.line-4
    ul#2.animate
      <li> E-mail: <span>//</span> developer@andreywaynе.ru </li>
      <li> Телефон: <span>//</span> +7 (950) 745-83-96 </li>
      <li> Vkontakte: <span>//</span> <a href='https://vk.com/killwayne'>AndreyWayne</a></li>
  Form#3.animate
    template(slot='line')
      .line.line-1
      .line.line-2
      .line.line-3
      .line.line-4
    template(slot='head')
      span.head.head-form Связь
  footer
    h5 © 2019 Andrey Wayne. Developed on Vue.js, Nuxt.js
  Preloader
</template>

<script>
import Logo from '~/components/Header/Logo.vue'
import Menu from '~/components/Header/Menu.vue'
import Burger from '~/components/Header/Burger.vue'
import Preloader from '~/components/Preloader.vue'
import Form from '~/components/Form.vue'
import $ from 'jquery'
export default {
  head: {
    title: 'Andrey Wayne | Обо мне',
    meta: [
      { name: 'description', content: 'Я специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.' },
      { name: 'robots', content: 'all' },
      { name: 'keywords', content: 'Сайт портфолио. Разработка сайтов. Программист фрилансер. Frontend deveoper. Backend developer. Fullstack developer.' },
      { name: 'author', content: "Andrey Wayne Developer" },
      { name: 'copyright', lang: 'ru', content: '© AndreyWayne' },
      { property: "og:title", content: 'Andrey Wayne | обо мне' },
      { property: "og:url", content: 'http://andreywayne.ru/about' },
      { property: "og:type", content: 'article' },
      { property: "og:description", content: 'Я специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.' },
      { property: "og:site_name", content: 'Andrey Wayne' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@andreywayne' },
      { name: 'twitter:creator', content: '@andreywayne' },
      { name: 'twitter:title', content: 'Andrey Wayne | Обо мне' },
      { name: 'twitter:description', content: 'Я специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.' },
      { name: 'twitter:image', content: 'http://andreywayne.ru/img/social_image.jpg' }
    ],
    link:[
      { rel: 'canonical', href: 'http://andreywayne.ru/about'}
    ]
  },
  components: {
    Logo,
    Burger,
    Menu,
    Preloader,
    Form
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        var wTop = $(window).scrollTop()
        var wHeight = $(window).height()
        var wBottom = wTop + wHeight
        var elements = [0, 1, 2, 3]

        var coords = elements.map((item, i) => {
          return {
            elem: ($('#' + i).offset().top) + ((($('#' + i).height() / 2)/2))
          }
        })

        coords.forEach((item, i) => {
          if (wBottom >= (item.elem + 30)) {
            $('#' + i).addClass('animateActive')
          }
        })
      }
    }
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang='less' scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 135px;
  width: 100%;
  background: #1e252a;
  padding: 0 20px;

  & h5 {
    font-family: 'GT Walsheim Pro Medium';
    font-size: 14px;
    text-align: center;
    color: #ee394e;
  }
}

.contacts {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #1e252a;

  & ul {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);

    & li {
      font-family: 'GT Walsheim Pro Medium';
      font-size: 20px;
      color: white;
      margin-bottom: 25px;

      @media screen and (max-width: 810px) {
        font-size: 16px;
      }

      @media screen and (max-width: 615px) {
        font-size: 14px;
      }

      & span {
        color: #ee394e;
      }

      & a {
        transition: all .4s;

        &:hover {
          color: #ee394e;
        }
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}

.ul {
  position: relative;
  display: flex;
  flex-direction: column;

  & .head-li {
    font-family: 'GT Walsheim Pro Bold';
    font-size: 20px;
    color: #ee394e;
    margin-bottom: 30px;
  }

  & .ul-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'GT Walsheim Pro Medium';
    color: white;
    font-size: 14px;
    margin-bottom: 15px;

    & > li {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 5px;
      min-height: 36px;
      height: auto;

      &:hover span {
        position: relative;
      }

      & span {
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        padding: 10px 20px;
        background: white;
        color: #30373c;
        margin-right: 10px;
        transition: all .4s;
        margin-bottom: 10px;
      }
    }
  }
}

.skills {
  position: relative;
  min-height: 100%;
  height: auto;
  width: 100%;
  background-color: #1b2126;
  padding-top: 215px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  @media screen and (max-width:765px) {
    padding-top: 165px;
    padding-bottom: 75px;
    & .head {
      top: 5%;
    }

    & .line-1, & .line-3 {
      height: 30px;
    }
  }

  & .wrapper {
    position: relative;
    margin: 0 auto;
    width: 1000px;

    @media screen and (max-width:1100px) {
      padding: 0 20px;
      max-width: 800px;
      width: 100%;
    }
  }
}

.line {
  position: absolute;
  background: #ee394e;

  &-1 {
    height: 7.5%;
    width: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &-2 {
    width: 5%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  &-3 {
    height: 7.5%;
    width: 1px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &-4 {
    width: 5%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
}

.about {
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: #1e252a;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  & h2 {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    font-family: 'GT Walsheim Pro Medium';
    color: white;
    font-size: 42px;
    max-width: 1170px;
    width: 1170px;
    text-align: center;

    @media screen and (max-width:1200px) {
      font-size: 35px;
      width: 900px;
    }

    @media screen and (max-width:970px) {
      font-size: 30px;
      width: 765px;
    }

    @media screen and (max-width: 810px) {
      font-size: 25px;
      width: 100%;
      max-width: 500px;
      padding: 0 20px;
    }

    @media screen and (max-width:500px) {
      font-size: 18px;
    }
  }
}

.head {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  font-family: 'GT Walsheim Pro Bold';
  font-size: 18px;
  color: #2f3b44;
  text-transform: uppercase;
  z-index: 10;
  background: white;
  padding: 15px 0px;
  width: 185px;
  text-align: center;

  @media screen and (max-width:765px) {
    font-size: 14px;
    width: 150px;
  }
}

.head-top {
  top: 20%;
}

.persone {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  .p-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: rgba(0,0,0,0.3);
  }

  .p-2 {
    position: absolute;
    top: 15%;
    left: 0;
    width: 10%;
    height: 85%;
    background: rgba(0,0,0,0.3);
  }

  .p-3 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%;
    height: 15%;
    background: rgba(0,0,0,0.3);
  }

  .p-4 {
    position: absolute;
    top: 15%;
    right: 0;
    width: 10%;
    height: 70%;
    background: rgba(0,0,0,0.3);
  }

  .filter {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    transform: translate(-50%, -50%);
    width: 85%;
    min-height: 70vh;
    margin: 0 auto;
    z-index: 5;

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
        font-size: 85px;
      }

      @media screen and (max-width:765px) {
        font-size: 35px;
      }
    }
  }
}

.animate {
  transition: all 1s;
  opacity: 0;
}

.animateActive {
  opacity: 1;
}

.head-form {
  background: #2f3b44;
  color: white;
}

.glitch-img {
    position: absolute;
    top: calc(-1 * 5px);
    left: calc(-1 * 10px);
    width: calc(100% + 10px * 2);
    height: calc(100% + 5px * 2);
    background: url(/img/about/i.jpg) no-repeat center fixed;
    background-color: transparent;
    background-size: cover;
    transform: translate3d(0, 0, 0);
    background-blend-mode: none
}

.glitch-img:nth-child(n+2) {
    opacity: 0
}

.glitch .glitch-img:nth-child(n+2) {
    animation-duration: 10s;
    animation-delay: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite
}

.glitch .glitch-img:nth-child(2) {
    background-color: transparent;
    background-blend-mode: none;
    animation-name: glitch-anim-1
}

.glitch .glitch-img:nth-child(3) {
    background-color: transparent;
    background-blend-mode: none;
    animation-name: glitch-anim-2
}

.glitch .glitch-img:nth-child(4) {
    background-color: transparent;
    background-blend-mode: none;
    animation-name: glitch-anim-3
}

/* Animations */

@keyframes glitch-anim-1 {
    0% {
        opacity: 1;
        transform: translate3d(10px, 0, 0);
        -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }
    2% {
        -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
        clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    }
    4% {
        -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
        clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    }
    6% {
        -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    }
    8% {
        -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    10% {
        -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    12% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    14% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    16% {
        -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    18% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    20% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    21.9% {
        opacity: 1;
        transform: translate3d(10px, 0, 0);
    }
    22%,
    100% {
        opacity: 0;
        transform: translate3d(0, 0, 0);
        -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
}

@keyframes glitch-anim-2 {
    0% {
        opacity: 1;
        transform: translate3d(calc(-1 * 10px), 0, 0);
        -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
        clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    }
    3% {
        -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    }
    5% {
        -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
        clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    }
    7% {
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    9% {
        -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
        clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    }
    11% {
        -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
        clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    }
    13% {
        -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    15% {
        -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
        clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    }
    17% {
        -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
        clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    }
    19% {
        -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
        clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    }
    20% {
        -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
        clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    }
    21.9% {
        opacity: 1;
        transform: translate3d(calc(-1 * 10px), 0, 0);
    }
    22%,
    100% {
        opacity: 0;
        transform: translate3d(0, 0, 0);
        -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
}

@keyframes glitch-anim-3 {
    0% {
        opacity: 1;
        transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1, -1, 1);
        -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    }
    1.5% {
        -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
        clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    }
    2% {
        -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    }
    2.5% {
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    3% {
        -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
        clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    }
    5% {
        -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
        clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    }
    5.5% {
        -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
        clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    }
    7% {
        -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
        clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    }
    8% {
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    9% {
        -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
        clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    }
    10.5% {
        -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
        clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    }
    11% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
        clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    }
    13% {
        -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
        clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    }
    14% {
        -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
        clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    }
    14.5% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
        clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    }
    15% {
        -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
        clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    }
    16% {
        -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    18% {
        -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
        clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    }
    20% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
        clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    }
    21.9% {
        opacity: 1;
        transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1, -1, 1);
    }
    22%,
    100% {
        opacity: 0;
        transform: translate3d(0, 0, 0);
        -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
}
</style>
