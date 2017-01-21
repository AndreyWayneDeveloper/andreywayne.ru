import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class Project {
  constructor(
    title, text, image, backgroundColors, routerLink,
    routerNext, active, params, head, context, background,
    type, url, color) {
      this.title = title
      this.text = text
      this.image = image
      this.backgroundColors = backgroundColors
      this.routerLink = routerLink
      this.routerNext = routerNext
      this.active = active
      this.params = params
      this.head = head
      this.context = context
      this.background = background
      this.type = type
      this.url = url
      this.color = color
   }
}

class OtherProjects {
  constructor(
    title,
    type,
    url,
    background,
    active
  ) {
    this.title = title
    this.type = type
    this.url = url
    this.background = background
    this.active = active
  }
}

const store = () => new Vuex.Store({
  state: {
    hour: 8,
    hourSale: 500,
    burgerBool: false,
    dataCalc: [],
    totals: '',
    projects: [
      new Project (
        'GILMON',
        ['Популярный сервис', 'скидок с бесплатными', 'купонами'],
        '/img/portfolio/gilmon.jpg',
        'rgba(0, 187, 0, 0.40)',
        '/projects/gilmon',
        'gilmon',
        false,
        'gilmon',
        'GILMON',
        'GILMON — это популярный сервис скидок с бесплатными купонами на актуальные предложения',
        '/img/portfolio/gilmon.jpg',
        'Сайт купонов и скидок',
        'https://chelyabinsk.gilmon.ru/',
        'white'
      ),
      new Project (
        'Муниципалитет 19-24',
        ['Муниципалитет', 'нового', 'поколения'],
        '/img/portfolio/mo1924.jpg',
        'rgba(0, 155, 255, 0.40)',
        '/projects/mo1924',
        'mo1924',
        false,
        'mo1924',
        'Муниципалитет 19-24',
        'Муниципалитет нового поколения - шаг в Россию будущего',
        '/img/portfolio/mo1924.jpg',
        'Landing Page',
        'https://mo1924.ru/',
        'white'
      ),
      new Project (
        'Безумный MAX',
        ['Гастрономический пивной', 'ресторан с интерьером', 'в стиле стимпанк'],
        '/img/portfolio/max.jpg',
        'rgba(212, 212, 212, 0.60)',
        '/projects/mad-m',
        'mad-m',
        false,
        'mad-m',
        'Безумный Макс',
        '«Безумный Макс»: гастрономический пивной ресторан с интерьером в стиле стимпанк',
        '/img/portfolio/max.jpg',
        'Landing Page',
        'http://mad-m.ru/',
        'white'
      ),
      new Project (
        'Apecsmed',
        ['Клиника похудения', 'и снижения веса', 'в Санкт-Петербурге'],
        '/img/portfolio/apecsmed.png',
        'rgba(0, 255, 174, 0.40)',
        '/projects/apecsmed',
        'apecsmed',
        false,
        'apecsmed',
        'Apecsmed',
        'Клиника похудения и снижения веса в Санкт-Петербурге',
        '/img/portfolio/apecsmed.png',
        'Корпоративный сайт',
        'http://apecsmed.ru/',
        'white'
      ),
      new Project (
        'TIAP',
        ['Транспортный', 'информационно', '- аналитический портал'],
        '/img/portfolio/tiap.jpg',
        'rgba(153, 184, 255, 0.40)',
        '/projects/tiap',
        'tiap',
        false,
        'tiap',
        'TIAP',
        'Транспортный информационно- аналитический портал',
        '/img/portfolio/tiap.jpg',
        'Новостной сайт',
        'https://tiap.ru/',
        'white'
      ),
      new Project (
        'ReCa',
        ['Сайт', 'сети', 'ресторанов'],
        '/img/portfolio/reca.jpg',
        'rgba(64, 81, 181, 0.4)',
        '/projects/reca',
        'reca',
        false,
        'reca',
        'ReCa',
        'Рестораны холдинга ReCa - островки радости, веселья и доброжелательности',
        '/img/portfolio/reca.jpg',
        'Корпоративный сайт',
        'http://reca.rest/',
        'white'
      ),
      new Project (
        'Яро-строй',
        ['Демонтаж зданий', 'и сооружений', 'в Санкт-петербурге'],
        '/img/portfolio/yaro-stroy.png',
        'rgba(255, 235, 59, 0.40)',
        '/projects/yaro-stroy',
        'yaro-stroy',
        false,
        'yaro-stroy',
        'Яро-строй',
        'Демонтаж зданий и сооружений в Санкт-петербурге',
        '/img/portfolio/yaro-stroy.png',
        'Корпоративный сайт',
        'http://yaro-stroy.ru/',
        'white'
      ),
      new Project (
        'Пик Формы',
        ['Интернет-магазин', 'спортивного питания', 'Пик Формы'],
        '/img/portfolio/pikformi.jpg',
        'rgba(228, 94, 245, 0.40)',
        '/projects/peak-form',
        'peak-form',
        false,
        'peak-form',
        'Пик Формы',
        'ПИК ФОРМЫ уже более 8 лет предлагает товары лучших мировых брендов по самым доступным ценам',
        '/img/portfolio/pikformi.jpg',
        'Интернет-магазин',
        'http://pikformi.ru/',
        'white'
      ),
      new Project (
        'Сфера-строй',
        ['Проектирование', 'и строительство', 'железных дорог'],
        '/img/portfolio/sfera-stroy.jpg',
        'rgba(214, 117, 117, 0.4)',
        '/projects/sfera-stroy',
        'sfera-stroy',
        false,
        'sfera-stroy',
        'Сфера-строй',
        '«Сфера-Строй» - надежный партнер ОАО «Российские железные дороги»',
        '/img/portfolio/sfera-stroy.jpg',
        'Корпоративный сайт',
        'http://sfera-stroy.org/',
        'white'
      ),
      new Project (
        'Эксперт клининг',
        ['Франшиза', 'федеральной сети', 'клининговых услуг'],
        '/img/portfolio/expert-klining.jpg',
        'rgba(33, 150, 243, 0.40)',
        '/projects/expert-klining',
        'expert-klining',
        false,
        'expert-klining',
        'Эксперт Клининг',
        'Открой свою клининговую компанию по нашей франшизе и зарабатывай от 500 000 рублей через 6 месяцев работы',
        '/img/portfolio/expert-klining.jpg',
        'Landing Page',
        'http://expertklining-franch.ru/',
        'white'
      )
    ],
    otherProjects: [
      new OtherProjects (
        'Сайт для быстрого заказа бетона',
        'Корпоративный сайт',
        'https://my-beton.ru/',
        '/img/other/my-beton.jpg',
        false
      ),
      new OtherProjects (
        'Франшиза бизнеса по производству мобильных бань',
        'Landing Page',
        'http://franshizabani.ru/',
        '/img/other/banya.jpg',
        false
      ),
      new OtherProjects (
        'Молярно-кузовной ремонт автомобилей',
        'Landing Page',
        'https://www.74autoturbo.ru/',
        '/img/other/autoturbo.jpg',
        false
      ),
      // new OtherProjects (
      //   'Правовая защита потребителей',
      //   'Landing Page',
      //   'http://pravo-chel.ru/',
      //   '/img/other/pravo-chel.jpg',
      //   false
      // ),
    ]
  },
  mutations: {
    burgerBoolFunc(state) {
      state.burgerBool = !state.burgerBool
    },
    addDataCalc(state, payload) {
      state.dataCalc.push(payload)
    },
    nullDataCalc(state, payload) {
      state.dataCalc = []
    },
    totalsMutations(state, payload) {
      state.totals = payload
    }
  },
  actions: {
    totalsFunc({ commit, state }, payload) {
      let { dataCalc: dCalc } = state
      let [
        type,,, animate, admin, ld, serv, lang
      ] = dCalc

      let { hour, hourSale } = state
      let mDay = (hour * hourSale)

      var totalsSum = (((mDay * type) * animate) * ld) + (admin + serv + lang)

      commit('totalsMutations', totalsSum.toLocaleString('ru'))
    }
  }
})

export default store
