<template lang='pug'>
div
  Logo
  Menu
  Burger
  transition(name="fadeCalc")
    section(v-if='showSection')
      h2(:class='{ head2None: !interview }') Шаг <span>{{ step }}</span> из 9
      h1 {{ title }}
      form
        div(v-if='interview' v-for='(item, index) in checkboxState[step - 1].checkboxs').check-wrapper
          input(@click='check(item, index)' :checked='item.checked' type='radio' :id='item.id').checkbox
          label(:for='item.id') {{ item.label }}
        div(v-if='result')
      h3(v-if='result') {{ totals }} <span>₽</span>
      button(:disabled='disabled' @click='next' :class='{ buttonActive: buttonState }').button {{ textButton }}
  transition(name="fadeCalc")
    Form(v-if='showForm')
  Preloader
</template>
<script>
class classInput {
  constructor (id, label, term, checked) {
    this.id = id
    this.label = label
    this.term = term
    this.checked = checked
  }
}

import Logo from '~/components/Header/Logo.vue'
import Menu from '~/components/Header/Menu.vue'
import Burger from '~/components/Header/Burger.vue'
import Preloader from '~/components/Preloader.vue'
import Form from '~/components/Form.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  head: {
    title: 'Andrey Wayne | Калькулятор',
    meta: [
      { name: 'description', content: 'Калькулятор разработки сайта у Andrey Wayne' },
      { name: 'robots', content: 'all' },
      { name: 'keywords', content: 'Сайт портфолио. Разработка сайтов. Программист фрилансер. Frontend deveoper. Backend developer. Fullstack developer.' },
      { name: 'author', content: "Andrey Wayne Developer" },
      { name: 'copyright', lang: 'ru', content: '© AndreyWayne' },
      { property: "og:title", content: 'Andrey Wayne | Калькулятор' },
      { property: "og:url", content: 'http://andreywayne.ru/calculator' },
      { property: "og:type", content: 'article' },
      { property: "og:description", content: 'Калькулятор разработки сайта у Andrey Wayne' },
      { property: "og:site_name", content: 'Andrey Wayne' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@andreywayne' },
      { name: 'twitter:creator', content: '@andreywayne' },
      { name: 'twitter:title', content: 'Andrey Wayne | Калькулятор' },
      { name: 'twitter:description', content: 'Калькулятор разработки сайта у Andrey Wayne' },
      { name: 'twitter:image', content: 'http://andreywayne.ru/img/social_image.jpg' }
    ],
    link:[
      { rel: 'canonical', href: 'http://andreywayne.ru/calculator' }
    ]
  },
  data () {
    return {
      disabled: true,
      nextForm: -1,
      showSection: true,
      showForm: false,
      interview: true,
      result: false,
      step: 1,
      title: '',
      buttonState: false,
      textButton: 'Продолжить',
      checkboxState: [
        {
          title: 'Тип проекта?',
          checkboxs: [
            new classInput('landing', 'Landing Page', 3, false),
            new classInput('multi', 'Многостраничный сайт', 10, false),
            new classInput('price', 'Интернет-магазин', 20, false),
            new classInput('final', 'Доработка сущ. сайта', 5, false)
          ]
        },
        {
          title: 'Количество страниц?',
          checkboxs: [
            new classInput('streasy', '1', 1, false),
            new classInput('strmiddle', '1-10', 1, false),
            new classInput('strhard', '10-25', 1, false),
            new classInput('strsuphard', 'Более 25', 1, false)
          ]
        },
        {
          title: 'Тип вёрстки?',
          checkboxs: [
            new classInput('verstAdap', 'Адаптивная вёрстка', 1, false),
            new classInput('verstPC', 'Desktop вёрстка', 1, false),
            new classInput('verst', 'Mobile вёрстка', 1, false)
          ]
        },
        {
          title: 'Сложность анимаций?',
          checkboxs: [
            new classInput('animate', 'Без анимаций', 1, false),
            new classInput('animateEasy', 'Простые', 1, false),
            new classInput('animateMid', 'Средние (Слайдеры, модальные окна, калькуляторы и т.п.)', 1, false),
            new classInput('animateHard', 'Сложные (3d, svg, canvas, параллакс и т.п.)', 2.5, false)
          ]
        },
        {
          title: 'Нужна ли будет система управления?',
          checkboxs: [
            new classInput('adminYes', 'Нет', 0, false),
            new classInput('adminNo', 'Да', 5000, false)
          ]
        },
        {
          title: 'Будут ли у пользователя личные данные?',
          checkboxs: [
            new classInput('LDEasy', 'Нет', 1, false),
            new classInput('LDMid', 'Да, небольшого объёма', 2, false),
            new classInput('LDHard', 'Да, большого объёма', 3, false)
          ]
        },
        {
          title: 'Будет ли интеграция с другими сервисами?',
          checkboxs: [
            new classInput('intr', 'Нет', 0, false),
            new classInput('intrYes', 'Да', 3000, false)
          ]
        },
        {
          title: 'Нужен ли перевод на другие языки?',
          checkboxs: [
            new classInput('lang', 'Нет', 0, false),
            new classInput('langYes', 'Да', 3000, false)
          ]
        },
        {
          title: 'Что для вас важнее всего?',
          checkboxs: [
            new classInput('vah', 'Минимальная стоимость', 0, false),
            new classInput('vahq', 'Скорость разработки', 0, false),
            new classInput('vahqw', 'Качество разработки', 0, false),
            new classInput('vahqwe', 'Удобство и красивый дизайн', 0, false)
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'totals'
    ])
  },
  methods: {
    ...mapMutations([
      'addDataCalc'
    ]),
    ...mapActions([
      'totalsFunc'
    ]),
    check (item, i) {
      item.checked = !item.checked

      var arrayCheck = this.checkboxState[this.step - 1].checkboxs

      arrayCheck.forEach((item, index) => {
        item.checked = false
      })

      item.checked = !item.checked

      var activeElem = arrayCheck.filter((item, index) => {
        return item.checked
      })

      this.buttonState = true
      this.disabled = false
    },
    next () {
      if (this.step >= this.checkboxState.length) {
        this.totalsFunc()
        this.interview = false
        this.result = true
        this.title = 'Примерная стоимость',
        this.textButton = 'Узнать точную оценку'
        this.nextForm ++
        this.disabled = false

        if (this.nextForm === 1) {
          this.showSection = false
          this.showForm = true
        }
      }
      else {
        var arrayCheck = this.checkboxState[this.step - 1].checkboxs
        var activeElem = arrayCheck.filter((item, index) => {
          return item.checked
        })[0]

        this.addDataCalc(activeElem.term)

        this.step ++
        this.buttonState = false
        this.title = this.checkboxState[this.step - 1].title
        this.disabled = true
      }
    }
  },
  components: {
    Logo,
    Burger,
    Menu,
    Preloader,
    Form
  },
  created () {
    this.title = this.checkboxState[this.step - 1].title
  }
}
</script>

<style lang='less' scoped>
h3 {
  font-family: 'GT Walsheim Pro Bold';
  font-size: 42px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  @media screen and (max-height: 620px) {
    position: relative;
    transform: translate(0);
    left: 0;
    top: 0;
    margin-top: 0px;
    margin-bottom: 30px;
    text-align: center;
  }

  @media screen and (max-width: 810px) {
    font-size: 30px;
  }

  @media screen and (max-width: 510px) {
    font-size: 25px;
  }

  span {
    color: #ee394e;
  }
}

.button {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 75px;
  width: 80%;
  font-family: 'GT Walsheim Pro Bold';
  font-size: 20px;
  outline: 0;
  border: 0;
  color: #30373c;
  background: #f1f1f1;
  transition: all .5s, box-shadow 1s;
  border-radius: 4px;

  @media screen and (max-height: 620px) {
    position: relative;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 510px) {
    width: 90%;
  }
}

.buttonActive {
  background: #ee394e;
  color: white;
  cursor: pointer;
}

.check-wrapper {
  height: 50px;

  @media screen and (max-width: 700px) {
    height: auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
}
form {
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  height: auto;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }

  @media screen and (max-height: 620px) {
    position: relative;
    top: auto;
    transform: translate(0);
    left: auto;
    margin: 0 auto;
    margin-top: 50px;
  }
}

section {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #1e252a;

  @media screen and (max-height: 620x) {
    height: auto;
  }
}

h2 {
  position: absolute;
  top: 100px;
  font-family: 'GT Walsheim Pro Medium';
  font-size: 21px;
  left: 50%;
  transform: translateX(-50%);
  color: white;

  @media screen and (max-height: 620px) {
    position: relative;
    transform: translate(0);
    left: 0;
    text-align: center;
    top: 0;
    padding-top: 125px;
  }

  span {
    color: #ee394e;
  }
}

h1 {
  position: absolute;
  color: white;
  top: 150px;
  font-family: 'GT Walsheim Pro Bold';
  font-size: 38px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  min-width: auto;
  max-height: 750px;
  width: 100%;

  @media screen and (max-height: 620px) {
    position: relative;
    transform: translate(0);
    left: 0;
    top: 0;
    margin-top: 25px;
    text-align: center;
  }

  @media screen and (max-width: 810px) {
    font-size: 30px;
  }

  @media screen and (max-width: 510px) {
    font-size: 25px;
    padding: 0 20px;
  }
}

.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}
.checkbox + label {
  position: relative;
  padding: 0 0 0 60px;
  cursor: pointer;
  font-family: 'GT Walsheim Pro Medium';
  font-size: 18px;
  color: white;

  @media screen and (max-width: 700px) {
    line-height: 25px;
    font-size: 15px;
  }
}
.checkbox + label:before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: white;
  background: white;
  transition: .2s;

  @media screen and (max-width: 700px) {
    top: 50%;
    transform: translateY(-50%);
  }
}
.checkbox + label:after {
  content: '';
  position: absolute;
  top: -2px;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 1px 10px #65727b, 0 0 1px #b6bdc2;
  transition: .2s;

  @media screen and (max-width: 700px) {
    top: 50%;
    transform: translateY(-50%);
  }
}
.checkbox:checked + label:before {
  background: #ee394e;
}
.checkbox:checked + label:after {
  left: 26px;
}

.fadeCalc-enter-active, .fadeCalc-leave-active {
  transition: all 0.8s;
}
.fadeCalc-enter, .fadeCalc-leave-to {
  opacity: 0;
}

.head2None {
  opacity: 0;
}
</style>
