module.exports = {
  /*
  ** Headers of the page
  */
  parallel: true,
  hardSource: true,
  cache: true,
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'Andrey Wayne | Разработка сайтов',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0' },
      { name: 'image', content: '/img/mainIndex.jpg' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: 0 },
      { 'http-equiv': 'content-language', content: 'ru' },
      { 'property': 'og:locale', content: 'ru_Ru' },
      { property: "og:image", content: 'http://andreywayne.ru/img/social_image.jpg'  },
      { name:"DC.Title", content: "Andrey Wayne | Разработка сайтов" },
      { name:"DC.Creator", content: "Andrey Wayne" },
      { name:"DC.Subject", content: "Фриланс. Программирование. Создание сайтов." },
      { name:"DC.Description", content: "Делаю IT-системы, новостные порталы, сервисы, интернет-магазины, лендинги, сайты компаний." },
      { name:"DC.Publisher", content: "Andrey Wayne" },
      { name:"DC.Contributor", content: "AndeyWayne" },
      { name:"DC.Date", content: "2018" },
      { name:"DC.Type", content: "Developer" },
      { name:"DC.Format", content: "Developer" },
      { name:"DC.Identifier", content: "http://andreywayne.ru" },
      { name:"DC.Source", content: "http://andreywayne.ru" },
      { name:"DC.Language", content: "Ru" },
      { name:"DC.Coverage", content: "Andrey Wayne" },
      { name:"DC.Rights", content: "Andrey Wayne" }
    ],
    link: [
      { rel: 'shortcut icon', type:'image/png', href: '/img/favicon.png' }
    ]
  },
  script: [
    { src: 'gsap/TweenMax.min.js' },
  ],
  css: [
   'assets/main.css'
 ],
 plugins: [
   { src: '~plugins/ga.js', ssr: false }
 ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
