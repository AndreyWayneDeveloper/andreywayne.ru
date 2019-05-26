<template>
  <div v-cloak>
    <nuxt/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
[v-cloak] {
  display: none;
}

@font-face {
  font-family: 'Extra-Bold';
  src: url('/fonts/MagistralCond-ExtraBold.eot');
  src: url('/fonts/MagistralCond-ExtraBold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/MagistralCond-ExtraBold.svg#MagistralCond-ExtraBold') format('svg'),
       url('/fonts/MagistralCond-ExtraBold.ttf') format('truetype'),
       url('/fonts/MagistralCond-ExtraBold.woff') format('woff'),
       url('/fonts/MagistralCond-ExtraBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('/fonts/MagistralCond-Light.eot');
  src: url('/fonts/MagistralCond-Light.eot?#iefix') format('embedded-opentype'),
       url('/fonts/MagistralCond-Light.svg#MagistralCond-Light') format('svg'),
       url('/fonts/MagistralCond-Light.ttf') format('truetype'),
       url('/fonts/MagistralCond-Light.woff') format('woff'),
       url('/fonts/MagistralCond-Light.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'Medium';
  src: url('/fonts/MagistralCond-Medium.eot');
  src: url('/fonts/MagistralCond-Medium.eot?#iefix') format('embedded-opentype'),
       url('/fonts/MagistralCond-Medium.svg#MagistralCond-Medium') format('svg'),
       url('/fonts/MagistralCond-Medium.ttf') format('truetype'),
       url('/fonts/MagistralCond-Medium.woff') format('woff'),
       url('/fonts/MagistralCond-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}



* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: auto;
}

html {
  overflow-x: hidden;
}

body {
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
li,
a,
menu {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}

a:hover,
a:link,
a:visited {
  color: inherit;
  text-decoration: none;
  border: 0px;
  outline: 0px;
}

li {
  list-style: none;
}
</style>
