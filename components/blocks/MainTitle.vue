<template lang='pug'>
Wrapper.wrap
  Container
    Section
      H2(
        typed='big'
        data-aos="fade-up"
      ) Способен реализовать любую идею
      .main-title
        Title(
          data-aos="fade-up"
          typed='normal'
        ) Специализируюсь на сложных, крупных проектах. Ориентируюсь на длительное сотрудничество с постоянными клиентами, с веб-студиями. Способен выполнить техническую задачу любой сложности, применяя свои алгоритмы и креативность.
</template>

<script>
import { Wrapper, Container, Section } from '~/plugins/Common'
import H2 from '~/plugins/H2'
import Title from '~/plugins/Title'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    Wrapper,
    Container,
    Section,
    H2,
    Title
  }
}
</script>

<style scoped lang='less'>
.wrap {
  z-index: 20000000;
  transform: translate(0);
}

section {
  padding-top: 150px;
  padding-bottom: 150px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    max-width: 800px;
    @media screen and (max-width: 1279px) {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1279px) {
    min-height: auto;
  }
  @media screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 0px;
  }
}

.main-title {
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;
  @media screen and (max-width: 1279px) {
    justify-content: flex-start;
    margin-top: 20px;
  }
  p {
    max-width: 350px;
    @media screen and (max-width: 1279px) {
      max-width: 100%;
    }
  }
}
</style>
