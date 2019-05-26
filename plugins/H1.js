import styled, { css } from 'vue-styled-components'

export default styled.h1`
  font-family: Extra-Bold;
  font-size: 10vh;
  color: white;
  letter-spacing: 0.5px;
  max-width: 850px;
  @media screen and (max-width: 1279px) {
    font-size: 8vh;
    max-width: 100%;
  }
`
