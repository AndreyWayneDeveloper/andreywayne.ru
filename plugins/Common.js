import styled, { css } from 'vue-styled-components'

const Section = styled.section``

const Wrapper = styled.div``

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    padding: 0 10px;
  }
`

export { Section, Wrapper, Container }
