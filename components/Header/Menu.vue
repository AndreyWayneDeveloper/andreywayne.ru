<template lang='pug'>
transition(name="translateX")
  .menu(v-if='burgerBool')
    .wrapper
      .background
      menu
        li(@click='exit')
          nuxt-link.project#project(to='/' exact) Проекты
        li(@click='exit')
          nuxt-link.middle(to='/other-projects' exact) Другое
        li(@click='exit')
          nuxt-link(to='/about' exact) Обо мне
    .social
      .icons
        a(target='_blank' href='https://vk.com/killwayne').vk.soc
        a(target='_blank' href='https://www.instagram.com/andrey_5000nuley/?hl=ru').inst.soc
        a(target='_blank' href='https://t-do.ru/masterwaynejs').tel.soc
      a(href="mailto:developer@andreywaynе.ru").email Email: <span class='span'> // </span> <span>developer@andreywaynе.ru</span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import $ from 'jquery'
export default {
  computed: {
    ...mapState([
      'burgerBool'
    ])
  },
  methods: {
    ...mapMutations({
      exit: 'burgerBoolFunc'
    })
  }
}
</script>

<style lang='less' scoped>
.social {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-family: 'GT Walsheim Pro Medium';
    font-size: 20px;
    color: white;
    &:hover {
      span {
        color: #ee394e;
      }
    }
    span {
      transition: all .4s;
    }
    & .span {
      color: #ee394e;
    }
  }
  .icons {
    display: flex;
  }
  .soc {
    width: 44px;
    height: 44px;
    margin-right: 20px;
    transition: all .4s;
    border-radius: 50%;
    &:hover {
      box-shadow: 0 0 15px white;
    }
  }
  .vk {
    background: url(/img/vk.svg) no-repeat center;
  }
  .inst {
    background: url(/img/inst.svg) no-repeat center;
  }
  .tel {
    background: url(/img/tel.svg) no-repeat center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .email {
      display: none;
    }
  }
}
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #1e252a;
  z-index: 1001;
}

.wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  min-height: 70vh;
  border: 2px solid transparent;
  transition: all .7s ease-in-out, border 0s;
    & .background {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100%;
    height: 100%;
    background: #1b2126;
    transition: all .7s ease-in-out, opacity 0s;
  }
  menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 50vh;
    width: 50vw;
    z-index: 100;

    & li {
      position: relative;
      margin-bottom: 35px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
    & a {
      position: relative;
      color: white;
      font-family: 'GT Walsheim Pro Bold';
      font-size: 74px;
      transition: all .3s;

      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -25px;
        content: '';
        width: 10px;
        height: 50px;
        background: #ee394e;
        transition: all .3s;
      }

      &:hover {
        color: #b9b6b6;
        margin-left: 10px;

        &:before {
          left: -35px;
        }
      }

      @media screen and (max-width:670px) {
        font-size: 35px;

        &:before {
          width: 5px;
        }
      }
    }

    & a.nuxt-link-active {
      color: #ee394e;

      &:hover {
        color: #ee394e;
      }
    }
  }
}

.translateX-enter-active, .translateX-leave-active {
  transition: all .6s;
}
.translateX-enter, .translateX-leave-to {
  transform: translateX(-100%);
}
</style>
