<template lang="pug">
div.container
  .nav-menu
    .contain
      ul
        li(v-for='(item, index) in nav' @click='navActive(item, index)' :class='{active: item.active}')
  Logo
  Burger
  Menu
  .scroll-project(
    :class="{ colorBtn: colorBtn }"
    @click='scrollProject'
  )
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="20" height="64" viewBox="0 0 20 64">
        <path class='svg_path' :class='{ svgPathActive: svgPathActive, svgPathRotate: svgPathRotate }' d="M0.790,56.905 L10.030,63.877 L19.270,56.905 " transform="translate(0.25)"></path>
        <path class='svg_path' :class='{ svgPathActive: svgPathActive, svgPathRotate: svgPathRotate }' d="M10,0 L10,63"></path>
    </svg>
  transition(name="fade")
    section(
      v-if='mainActive'
      :style="{ backgroundImage: 'url(' + project.background + ')' }"
    ).main-section
      div.main-project
        .filter
          h1 {{ project.head }}
          h2 {{ project.context }}
          div.absolute
            h3 Тип проекта: {{ project.type }}
            h3 Сайт:
              span //
              a(:href='project.url' target="_blank") {{ project.url }}
  transition(name="fade")
    iframe(
      v-if='fadeIframe'
      :src='project.url'
      style='width: 100%; height: 100vh; border: 0px;'
    )
  transition(name="fade")
    div.next-project(
      v-if='fadeNext'
      :style="{ backgroundImage: 'url(' + nextProject.background + ')' }"
    )
      div.title
        h6 Следующий проект
        nuxt-link(:to="nextProject.routerLink") {{ nextProject.head }}
          img(src='/img/arrow.png' title='arrow' alt='arrow')
</template>
<script>
import { mapState } from 'vuex'
import Logo from '~/components/Header/Logo.vue'
import Menu from '~/components/Header/Menu.vue'
import Burger from '~/components/Header/Burger.vue'
import Preloader from '~/components/Preloader.vue'
import $ from 'jquery'
export default {
  components: {
    Logo,
    Menu,
    Burger,
    Preloader
  },
  data () {
    return {
      nav: [
        {
          title: 'head',
          active: true
        },
        {
          title: 'project',
          active: false
        },
        {
          title: 'next',
          active: false
        },
      ],
      params: this.$route.params.project,
      project: [],
      nextProject: [],
      mainActive: true,
      fadeIframe: false,
      fadeNext: false,
      showForm: false,
      count: 0,
      colorBtn: false,
      svgPathActive: false,
      svgPathRotate: false,
      title: ''
    }
  },
  computed: {
    ...mapState([
      'projects'
    ]),
  },
  head () {
    console.log('Ошибка 500, потому что метатеги вставляются раньше, чем они принимают значения.')
    console.log('Возможно будут выходить различные ошибки - это из-за подключение сторонних сайтов, так что ничего страшного :)')

    let { head, context }
    = this.projects.filter((item, i) => {
      let { params } = item
      return params === this.params
    }).pop()

    return {
      title: 'Andrey Wayne | Проекты | ' + head ,
      meta: [
        { name: 'description', content: context },
        { name: 'robots', content: 'all' },
        { name: 'keywords', content: 'Сайт портфолио. Разработка сайтов. Программист фрилансер. Frontend deveoper. Backend developer. Fullstack developer.' },
        { name: 'author', content: "Andrey Wayne Developer" },
        { name: 'copyright', lang: 'ru', content: '© AndreyWayne' },
        { property: "og:title", content: 'Andrey Wayne | Проекты | ' + head },
        { property: "og:url", content: 'http://andreywayne.ru/projects/' + head },
        { property: "og:type", content: 'article' },
        { property: "og:description", content: context },
        { property: "og:site_name", content: 'Andrey Wayne' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@andreywayne' },
        { name: 'twitter:creator', content: '@andreywayne' },
        { name: 'twitter:title', content: 'Andrey Wayne | Проекты | ' + head },
        { name: 'twitter:description', content: context },
        { name: 'twitter:image', content: 'http://andreywayne.ru/img/social_image.jpg' }
      ],
      link:[
        { rel: 'canonical', href: 'http://andreywayne.ru/projects/' + head }
      ]
    }
  },
  methods: {
    navActive (item, index) {
      this.nav.forEach((el, i) => {
        el.active = false
      })
      this.nav[index].active = true

      switch (index) {
        case 0:
          this.count = 0
          break
        case 1:
          this.count = 1
          break
        case 2:
          this.count = 2
          break
      }
    },
    returnParams (item) {
      return item.params == this.params
    },
    nextProjectFunc (item, index) {
      if (item.params === this.params) {

        if (index >= this.projects.length-1) {
          this.nextProject = this.projects[0]
        } else {
          this.nextProject = this.projects[++index]
        }
      }
    },
    toggle (main, frame, next) {
        this.mainActive = main
        this.fadeIframe = frame
        this.fadeNext = next
    },
    switchMixin (count) {
      switch (this.count) {
        case 0:
          this.toggle(true, false, false)
          this.svgPathActive = false
          this.svgPathRotate = false
          this.showPreload = false
          break
        case 1:
          this.toggle(false, true, false)
          this.svgPathActive = true
          this.showPreload = true
          this.svgPathRotate = false
          break
        case 2:
          this.toggle(false, false, true)
          this.svgPathActive = false
          this.svgPathRotate = true
          this.showPreload = false
          break
        case 3:
          this.toggle(false, true, false)
          this.svgPathActive = true
          this.showPreload = true
          this.svgPathRotate = true
          break
        case 4:
          this.toggle(true, false, false)
          this.svgPathActive = false
          this.showPreload = false
          this.svgPathRotate = false
          break
      }
    },
    scrollProject () {
      this.count ++
    },
    mountedFunc () {
      var filterProjects = this.projects.filter(this.returnParams)
      this.project = filterProjects[0]

      if (filterProjects.length === 0) {
        this.$router.push('/')
      }

      var nextProject = this.projects.forEach(this.nextProjectFunc)
    }
  },
  mounted () {
    $('.main-project').fadeOut(0).fadeIn()
    this.mountedFunc()
  },
  beforeRouteUpdate (to, from, next) {
    this.count = -1
    this.params = to.params.project
    this.mountedFunc()
    next()
    this.scrollProject()
  },
  watch: {
    count () {
      if (this.count >= 4) this.count = 0
      this.switchMixin(this.count)

      if (this.count === 1 || this.count === 3) {
        this.colorBtn = true
      } else {
        this.colorBtn = false
      }

      let count = this.count
      let nav = this.nav
      let active = (id) => {
        nav[id].active = true
      }

      this.nav.forEach((item) => {
        item.active = false
      })

      switch (count) {
        case 0:
          active(0)
          break
        case 1:
          active(1)
          break
        case 2:
          active(2)
          break
        case 3:
          active(1)
          break
        case 4:
          active(0)
          break
      }
    }
  },
}
</script>

<style lang='less' scoped>
.preloader-project {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.scroll-project {
  z-index: 999;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5vh;
  width: 70px;
  height: 140px;
  border: 2px solid #ee394e;
  cursor: pointer;
  transition: .4s;

  @media screen and (max-height: 480px) {
    display: none;
  }

  @media screen and (max-width: 920px) {
    display: none;
  }

  &:hover svg {
    margin-top: 10px;
  }
}

svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .4s;
}

.svg_path {
  position: absolute;
  stroke: #ee394e;
  stroke-width: 1.3px;
  fill: none;
  fill-rule: evenodd;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform-origin: center center;
}

.svgPathActive {
  stroke: white;
}

.svgPathRotate {
  transform: rotate(-180deg);
}

section {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media screen and (max-width: 900px) {
    padding: 100px 0;
  }
}

.filter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  min-height: 70vh;
  margin: 0 auto;
  background: rgba(0,0,0,0.3);
  z-index: 5;
  padding: 35px;
  padding-left: 50px;

  @media screen and (max-width: 900px) {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
    padding: 35px 20px;
  }
}

h1 {
  font-family: 'GT Walsheim Pro Bold';
  color: white;
  font-size: 75px;

  @media screen and (max-width: 1100px) {
    font-size: 50px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 31px;
  }
}

h2 {
  font-family: 'GT Walsheim Pro Medium';
  color: white;
  font-size: 25px;
  margin-top: 30px;

  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }
}

.absolute {
  position: absolute;
  bottom: 40px;

  @media screen and (max-height: 570px) {
    position: relative;
    margin-top: 100px;
    bottom: 0;
  }
}

h3 {
  font-family: 'GT Walsheim Pro Medium';
  font-size: 20px;
  color: white;
  margin-top: 25px;

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }

  span {
    color: #ee394e;
  }

  a {
    transition: all .4s;
  }

  a:hover {
    color: #ee394e;
  }
}

.next-project {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  height: 360px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  transition: all .4s;
  z-index: -1;

  .title {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -45%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & h6 {
    text-align: center;
    font-size: 25px;
    font-family: 'GT Walsheim Pro Medium';
    color: white;
    margin-bottom: 25px;
  }

  & a {
    display: flex;
    align-items: center;
    font-size: 72px;
    font-family: 'GT Walsheim Pro Bold';
    color: white;
    text-align: center;

    @media screen and (max-width: 1300px) {
      font-size: 45px;
    }

    @media screen and (max-width: 740px) {
      font-size: 31px;
      display: block;
    }

    @media screen and (max-width: 520px) {
      font-size: 25px;
    }

    &:hover img {
      transform: translateX(10px)
    }

    & img {
      transition: all .4s;
      margin-top: 10px;
      margin-left: 15px;
      width: 50px;
      height: 50px;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1170px;
  min-width: 320px;
  min-height: 100vh;
  z-index: 2000;
  transform: translateX(-50%) translateY(-50%);
  transition: all .4s;
  display: none;
}

.colorBtn {
  background: #ee394e;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.nav-menu {
  position: fixed;
  margin-top: 2px;
  right: 7.5vw;
  width: 20px;
  z-index: 1000;
  min-height: 70vh;
  top: 50%;
  transform: translateY(-50%);

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
    top: 5vh;
    bottom: 5vg;
    width: 100%;
    margin-top: 10px;
    height: 100%;
  }
  @keyframes ActiveListMobile {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: 0px 0 0 2px #ee394e;
    }
    100% {
      box-shadow: none;
    }
  }
  li {
    position: relative;
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #30373c;
    cursor: pointer;
    transition: background .4s;

    @media screen and (max-width: 920px) {
      animation: ActiveListMobile 2.5s infinite;
    }
  }
  .active {
    background: #ee394e;
  }
}
</style>
