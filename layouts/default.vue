<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {}
</script>

<style>
@font-face {
  font-family: 'Extra-Bold';
  src: url('/fonts/Magistral-Cond-Extra-Bold.otf') format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Medium';
  src: url('/fonts/Magistral-Cond-Medium.otf') format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('/fonts/Magistral-Cond-Light.otf') format("opentype");
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
