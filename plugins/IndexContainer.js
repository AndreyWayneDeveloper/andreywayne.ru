import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

export default styled.section`
  position: relative;
  z-index: 100;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  & .container {
    position: relative;
    min-height: 100vh;
    width: 50vw;
    margin: 0 auto;
  }
`
