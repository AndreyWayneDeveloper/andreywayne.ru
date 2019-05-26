<template lang='pug'>
.project
  ParallaxContainer
    ParallaxElement(:parallaxStrength="-10" :type="'depth'")
      Wrapper
        Container
          Section
            .project-el
              .project-el-image-wr
                .project-el-image(:style='{ backgroundImage: `url(${ image })` }')
              .project-el-title
                H3(typed='project') {{ title }}
                .project-el-title-bottom
                  Title(typed='normal') {{ subtitle }}
                  img(src='/img/arrows.svg')
                  a(:href='link' target='_blank')
</template>

<script>
import { Wrapper, Container, Section } from '~/plugins/Common'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
import H3 from '~/plugins/H3'
import Title from '~/plugins/Title'
export default {
  props: [
    'title',
    'subtitle',
    'image',
    'link'
  ],
  components: {
    Wrapper,
    Container,
    Section,
    ParallaxContainer,
    ParallaxElement,
    H3,
    Title
  }
}
</script>

<style scoped lang='less'>
section {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 780px;
  @media screen and (max-width: 1279px) {
    height: auto;
  }
  @media screen and (max-width: 767px) {
    min-height: 600px;
  }
}
.project {
  width: 100%;
  &-el {
    position: relative;
    width: 1000px;
    height: 615px;
    @media screen and (max-width: 1279px) {
      width: 100%;
      height: 500px;
      margin-top: -50px;
    }
    @media screen and (max-width: 767px) {
      height: 300px;
    }
    &-title {
      width: 445px;
      height: 235px;
      position: absolute;
      right: -222.5px;
      bottom: -117.5px;
      background: black;
      padding: 25px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: 1279px) {
        right: 0;
        width: 100%;
      }
      @media screen and (max-width: 767px) {
        bottom: -235px;
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        img {
          transition: .4s;
        }
      }
      a {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &:hover img {
        margin-right: 20px;
      }
    }
    &-image {
      &-wr {
        overflow: hidden;
        width: 100%;
        height: 615px;
      }
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transition: all .3s;
      // &:hover {
      //   transform: scale(1.05) rotate(-1deg);
      // }
    }
  }
}
</style>
