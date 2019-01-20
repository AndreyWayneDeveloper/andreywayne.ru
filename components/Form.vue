<template lang='pug'>
section.forms
  slot(name='line')
  span.head.head-form Связь
  form(autocomplete="off")
    input(placeholder='Имя' type='text' name='name' required v-model='name' oninvalid="this.setCustomValidity('Как же мне к вам обращаться?')" oninput="setCustomValidity('')")
    div.double
      input(placeholder='E-mail' type='text' required name='email' v-model='email' oninvalid="this.setCustomValidity('Как же мне с вами связаться?')" oninput="setCustomValidity('')")
      input(v-mask="'+7 (###)-###-##-##'"  placeholder='Телефон' name='email' v-model='phone')
    textarea(placeholder='Что мне нужно знать?' v-model='message')
    button(type='submit' @click='send' :class='{ buttonActive: sendForm }').button
      span {{textBtn}}
</template>
<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
import $ from 'jquery'
export default {
  data () {
    return {
      textBtn: 'Отправить',
      animate: true,
      show: true,
      name: '',
      email: '',
      phone: '',
      message: '',
      sendForm: false
    }
  },
  methods: {
    send () {
      if ((this.name.length != 0) && (this.email.length != 0)) {
        this.sendForm = true
        setTimeout(() => {
          this.textBtn = '✔'
        }, 6000)
        alert('Произошла ошибка сервера! Пожалуйста, свяжитесь со мной по почте.')
      }
    }
  },
  created () {
    if (this.$route.path === '/calculator') {
      this.animate = false
    } else {
      this.animate = true
    }
  },
  components: {
    directives: { mask }
  }
}
</script>

<style lang='less' scoped>
#sendForm {
  background: red;
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

.head-form {
  background: #2f3b44;
  color: white;
}

.forms {
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: white;

  @media screen and (max-width: 670px) {
    height: auto;
    padding-top: 150px;
    padding-bottom: 75px;
  }

  @media screen and (max-height: 550px) {
    height: auto;
    padding-top: 150px;
    padding-bottom: 75px;
  }

  & form {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 570px;

    @media screen and (max-width: 670px) {
      width: 100%;
      max-width: 570px;
      padding: 0 20px;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      margin: 0 auto;
    }

    @media screen and (max-height: 550px) {
      width: 100%;
      max-width: 570px;
      padding: 0 20px;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      margin: 0 auto;
    }

    & .button {
      position: relative;
      font-family: 'GT Walsheim Pro Medium';
      font-size: 18px;
      background: none;
      color: #ee394e;
      outline: none;
      border: none;
      width: 180px;
      height: 60px;
      margin: 0 auto;
      cursor: pointer;
      transition: all .4s, background .1s;
      text-transform: uppercase;

      &:after, &:before {
        content: '';
        position: absolute;
        width: 60px;
        height: 2px;
        background: #ee394e;
        content: '';
        opacity: 1;
        transition: all 0.3s;
        pointer-events: none;
      }

      &:before {
        top: 0;
        left: 0;
        transform: rotate(90deg);
        transform-origin: 0 0;
      }

      &:hover:before {
        left: 50%;
        transform: rotate(0deg) translateX(-50%);
        opacity: .7;
      }

      &:after {
        right: 0;
        bottom: 0;
        transform: rotate(90deg);
        transform-origin: 100% 0;
      }

      &:hover:after {
        left: 50%;
        transform: rotate(0deg) translateX(-50%);
        opacity: .7;
      }

      & span {
        transition: all .4s;
      }

      &:hover span {
        font-size: 16px;
        color: #30373c;
      }
    }

    & .buttonActive {
      background: #ee394e;
      color: white;

      @keyframes spanBtn {
        0% {

        }
        100% {
          font-size: 25px;
        }
      }

      & span {
        transition: font-size 0s;
        animation: spanBtn 0s 6s forwards;
      }

      &:hover span{
        font-size: 18px;
        color: white;
      }

      @keyframes afterBtn {
        0% {

        }
        100% {
          bottom: -10px;
          opacity: 1;
        }
      }

      @keyframes beforeBtn {
        0% {
        }
        100% {
          width: 100%;
          opacity: 1;
        }
      }

      &:after, &:before {

        transition: opacity 0s;
        z-index: -1;
        right: auto;
        left: 0;
        bottom: 0px;
        width: 100%;
        transform: rotate(0deg);
        height: 10px;
        background: #ad2a39;
        transform-origin: center center;
      }

      &:after {
        animation: afterBtn .5s 0.5s forwards;
      }

      &:before {
        z-index: 2;
        top: auto;
        bottom: -10px;
        width: 0%;
        background: #4caf50;
        animation: beforeBtn 5s 1s forwards;
      }

      &:hover:before {
        left: 0;
        transform: rotate(0deg) translateX(0);
        opacity: 1;
      }

      &:hover:after {
        left: 0;
        transform: rotate(0deg) translateX(0);
        opacity: 1;
      }
    }

    & .double {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 670px) {
        flex-direction: column;
      }

      & input {
        width: 45%;
        @media screen and (max-width: 670px) {
          width: 100%;
        }
      }
    }

    & input, & textarea {
      font-family: 'GT Walsheim Pro Medium';
      font-size: 16px;
      color: #2f3b44;
      border: 0px;
      border-bottom: 2px solid #d8d8d8;
      padding-bottom: 15px;
      outline: none;
      margin-bottom: 50px;
      transition: all .4s;
      overflow: auto;

      &:focus {
        border-bottom: 2px solid #ee394e;

        &::placeholder {
          color: #2f3b44;
        }
      }
    }

    & textarea {
      padding: 0;
      padding-bottom: 5px;
      resize: none;
    }
  }
}
.zoom-enter-active, .zoom-leave-active {
  transition: all .4s;
}
.zoom-enter, .zoom-leave-to {
  opacity: 0;
}

.animate {
  transition: all 1s;
  opacity: 0;
}

.animateActive {
  opacity: 1;
}
</style>
