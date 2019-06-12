<template lang='pug'>
.logo
  nuxt-link(to='/')
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
.logo {
  display: flex;
  top: 1rem;
  right: 1rem;
  position: fixed;
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  z-index: 10000000000000000000;
  a {
    width: 33px;
    height: 33px;
    background: url(/img/logo.png) no-repeat center;
    background-size: contain;
  }
}
</style>
