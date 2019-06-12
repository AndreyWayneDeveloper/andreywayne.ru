<template lang='pug'>
div.menu
  nuxt-link(to='/') Главная
  nuxt-link(to='/about') Обо мне
  nuxt-link(to='/contacts') Контакты
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
.menu {
  position: fixed;
  height: 38px;
  display: flex;
  align-items: center;
  top: 1rem;
  right: calc(1rem + 60px);
  z-index: 10000000000000000000;
  a {
    color: white;
    font-size: 14px;
    margin-left: 15px;
    @media screen and (max-width: 848px) {
      font-size: 10px;
      margin-left: 8px;
    }
  }
}
</style>
