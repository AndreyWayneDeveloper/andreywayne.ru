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
    title: 'Andrey Wayne',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      { name:"DC.Description", content: "Сайт портфолио JavaScript разработчика, HTML - верстальщика, Web программиста, Фрилансера программиста, Фрилансера разработчика. Разработка сайтов, интернет-магазинов, под ключ, SEO продвижение" },
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
      { rel: 'shortcut icon', type:'image/png', href: 'favicon.png' }
    ]
  },
  script: [
    { src: 'gsap/TweenMax.min.js' },
  ],
  css: [
   'assets/main.css'
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
