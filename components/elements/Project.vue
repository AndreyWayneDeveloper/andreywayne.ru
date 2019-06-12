<template lang='pug'>
.content__item
  span.content__number {{ index }}
  h3.content__title {{ title }}
  h4.content__subtitle
    a(:href='link' target='_blank') {{ link }}
  .content__text
    .content__text-col О проекте: {{ review }}
    .content__text-col Пару слов: {{ stack }}
    .content__text-col Стек технологий: {{ tech }}
</template>

<script>
export default {
  props: [
    'index',
    'title',
    'link',
    'review',
    'stack',
    'tech'
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
    line-height: 22px;
    text-align: left;
    font-size: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-height: 800px) {
      font-size: 12px;
      line-height: 18px;
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
