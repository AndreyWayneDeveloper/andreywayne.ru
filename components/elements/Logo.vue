<template lang='pug'>
img(src='/img/logo.png')
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
img {
  position: fixed;
  top: 25px;
  left: 75px;
  z-index: 1000000000;
  @media screen and (max-width: 1279px) {
    left: 10px;
    top: 10px;
  }
}
</style>
