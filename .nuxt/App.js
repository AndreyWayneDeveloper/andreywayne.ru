import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/vuetify/dist/vuetify.css'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"htmlAttrs":{"lang":"ru"},"title":"Andrey Wayne","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"image","content":"\u002Fimg\u002FmainIndex.jpg"},{"http-equiv":"x-dns-prefetch-control","content":"on"},{"http-equiv":"cache-control","content":"no-cache"},{"http-equiv":"expires","content":0},{"http-equiv":"content-language","content":"ru"},{"property":"og:locale","content":"ru_Ru"},{"property":"og:image","content":"http:\u002F\u002Fandreywayne.ru\u002Fimg\u002Fsocial_image.jpg"},{"name":"DC.Title","content":"Andrey Wayne | Разработка сайтов"},{"name":"DC.Creator","content":"Andrey Wayne"},{"name":"DC.Subject","content":"Фриланс. Программирование. Создание сайтов."},{"name":"DC.Description","content":"Сайт портфолио JavaScript разработчика, HTML - верстальщика, Web программиста, Фрилансера программиста, Фрилансера разработчика. Разработка сайтов, интернет-магазинов, под ключ, SEO продвижение"},{"name":"DC.Publisher","content":"Andrey Wayne"},{"name":"DC.Contributor","content":"AndeyWayne"},{"name":"DC.Date","content":"2018"},{"name":"DC.Type","content":"Developer"},{"name":"DC.Format","content":"Developer"},{"name":"DC.Identifier","content":"http:\u002F\u002Fandreywayne.ru"},{"name":"DC.Source","content":"http:\u002F\u002Fandreywayne.ru"},{"name":"DC.Language","content":"Ru"},{"name":"DC.Coverage","content":"Andrey Wayne"},{"name":"DC.Rights","content":"Andrey Wayne"}],"link":[{"rel":"shortcut icon","type":"image\u002Fpng","href":"favicon.png"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
