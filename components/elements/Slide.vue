<template lang='pug'>
.slide
  .slide__img-wrap
    .slide__img(:style='{ backgroundImage: `url(/img/projects/${ index }.jpg)` }')
  .slide__side Избранное
  .slide__title-wrap
    span.slide__number {{ index }}
    h3.slide__title {{ title }}
    h4.slide__subtitle {{ subtitle }}
</template>

<script>
export default {
  props: [
    'index',
    'title',
    'subtitle'
  ]
}
</script>

<style scoped lang='less'>
.slide__title, .slide__subtitle, .slide__side {
  display: flex;
}

@media screen and (max-width: 848px) {
  .slide__side {
    display: none;
  }
  .slide__title-wrap {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    padding-left: 10px;
  }
  .slide__number {
    font-size: 1rem;
  }
  .slide__subtitle {
    font-size: 12px;
    max-width: 80%;
  }
}
</style>
