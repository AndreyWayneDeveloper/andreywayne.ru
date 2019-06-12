<template lang='pug'>
div
  Logo
  Menu
  Main
  Preloader
</template>

<script>
import Logo from '~/components/elements/Logo'
import Menu from '~/components/elements/Menu'
import Main from '~/components/blocks/Main'
import Preloader from '~/components/elements/Preloader'
import CursorCustom from '~/components/elements/CursorCustom'
export default {
  components: {
    Logo,
    Menu,
    Main,
    Preloader,
    CursorCustom
  }
}
</script>

<style>
</style>
