<template lang='pug'>
transition(name="fade")
  .preloader(v-if='show')
    div.img(
      v-for="(item, index) in images"
      :alt='item.title'
      :title='item.title'
      :style="{backgroundImage: 'url(' + item.url + ')', zIndex: item.zindex}"
    )
</template>

<script>
export default {
  data () {
    return {
      url: '',
      show: true,
      interval: 250,
      count: -1,
      images: [
        {
          url: '/img/preloader/php.png',
          zindex: 0,
          title: 'php'
        },
        {
          url: '/img/preloader/css.png',
          zindex: 0,
          title: 'css'
        },
        {
          url: '/img/preloader/bootstrap.png',
          zindex: 0,
          title: 'bootstrap'
        },
        {
          url: '/img/preloader/sass.png',
          zindex: 0,
          title: 'sass'
        },
        {
          url: '/img/preloader/git.png',
          zindex: 0,
          title: 'git'
        },
        {
          url: '/img/preloader/gulp.png',
          zindex: 0,
          title: 'gulp'
        },
        {
          url: '/img/preloader/webpack.png',
          zindex: 0,
          title: 'webpack'
        },
        {
          url: '/img/preloader/js.png',
          zindex: 0,
          title: 'js'
        },
        {
          url: '/img/preloader/node.png',
          zindex: 0,
          title: 'node'
        },
        {
          url: '/img/preloader/vue.png',
          zindex: 0,
          title: 'vue'
        },
        {
          url: '/img/preloader/react.png',
          zindex: 0,
          title: 'react'
        }
      ]
    }
  },
  methods: {
    randomFunc () {
      if (this.count >= this.images.length - 2) {
        this.show = false

        return false
      }

      this.count ++
      this.images[this.count].zindex = this.count + 3
    }
  },
  mounted () {
    var one = setInterval(this.randomFunc, this.interval)
  }
}
</script>

<style lang='less' scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #1e252a;
}

.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -10;
  background-color: #1e252a;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
