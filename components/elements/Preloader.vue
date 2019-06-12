<template lang='pug'>
transition(name='fade')
  .prealoader(v-if='show')
    .loader-icon
    h2.loader-text Andrey Wayne
    p Профессиональная web-разработка
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      show: true
    }
  },
  mounted() {
    $(window).ready(() => {
      this.show = false
    })
  }
}
</script>

<style scoped lang='less'>
.prealoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000000000000000000;
  background: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader-text {
  margin-top: 30px;
  letter-spacing: 1px;
  animation: 20s expand infinite linear;
}

p {
  letter-spacing: 1px;
  margin-top: 0;
  font-size: .8rem;
  animation: 15s expand infinite linear;
}

.loader-icon,
.loader-icon:before,
.loader-icon:after {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.loader-icon {
  margin: 0 auto;
  position: relative;
  background: transparent;
}

.loader-icon:before,
.loader-icon:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  border: 15px solid #efefef;
  opacity: 0.5;
  animation: 3s rotate infinite linear;
}

.loader-icon:before {
  border-left-color: transparent;
}

.loader-icon:after {
  top: 16.5%;
  left: 16.5%;
  width: 100px;
  height: 100px;
  border-right-color: transparent;
  opacity: 0.2;
  animation-direction: reverse;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes expand {
  50% {
    transform: scale(1.2);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
