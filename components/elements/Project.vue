<template lang='pug'>
.content__item
  span.content__number {{ index }}
  h3.content__title {{ title }}
  h4.content__subtitle
    a(:href='link' target='_blank') {{ link }}
  .content__text
    .content__text-col {{ review }}
    .content__text-col {{ stack }}
</template>

<script>
export default {
  props: [
    'index',
    'title',
    'link',
    'review',
    'stack'
  ]
}
</script>

<style scoped lang='less'>
.content__text {
  flex-direction: column;
  &-col {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

a {
  color: white;
  &:hover {
    text-decoration: underline;
  }
}
</style>
