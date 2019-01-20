<template lang="pug">
div.logo
  nuxt-link(to='/')
    h2 </>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.logo {
  position: fixed;
  top: 25px;
  left: 7.5vw;
  z-index: 1002;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #ee394e;
  text-align: center;

  & h2 {
    color: white;
    font-family: 'GT Walsheim Pro Bold';
    font-size: 30px;
    line-height: 60px;
  }
}
</style>
