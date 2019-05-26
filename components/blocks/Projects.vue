<template lang='pug'>
.projects
  Project(
    v-for='(item, i) in api'
    :key='i'
    :title='item.title'
    :subtitle='item.subtitle'
    :link='item.link'
    :image='item.image'
  )
</template>

<script>
import Project from '~/components/elements/Project'
export default {
  props: [
    'api'
  ],
  components: {
    Project
  }
}
</script>

<style scoped lang='less'>
.projects {
  display: flex;
  flex-direction: column;
  transform: translate(0);
  z-index: 20000000;
}
</style>
