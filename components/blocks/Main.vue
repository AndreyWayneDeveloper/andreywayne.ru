<template lang='pug'>
div
  Arrows
  main
    .slideshow
      .slideshow__deco
      Slide(
        v-for='(item, i) in projects'
        :key='i'
        :index='i + 1'
        :title='item.title'
        :subtitle='item.subtitle'
      )
      NavPrev
      NavNext
    .content
      Project(
        v-for='(item, i) in projects'
        :key='i'
        :index='i + 1'
        :title='item.title'
        :link='item.link'
        :review='item.review'
        :stack='item.stack'
        :tech='item.tech'
      )
      NavClose
</template>

<script>
import Slide from '~/components/elements/Slide'
import Project from '~/components/elements/Project'
import Arrows from '~/components/elements/Arrows'
import NavPrev from '~/components/elements/NavPrev'
import NavNext from '~/components/elements/NavNext'
import NavClose from '~/components/elements/NavClose'
import { mapState } from 'vuex'
import slider from '~/mixins/slider'
export default {
  mixins: [
    slider
  ],
  computed: {
    ...mapState([
      'projects'
    ])
  },
  components: {
    Slide,
    Project,
    Arrows,
    NavClose,
    NavPrev,
    NavNext
  }
}
</script>

<style>
</style>
