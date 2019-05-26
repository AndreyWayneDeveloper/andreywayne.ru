import styled, { css } from 'vue-styled-components'

const config = {
  typed: String,
  styled: ''
}

export default styled('h2', config)`
  ${props => {
    switch (props.typed) {
      case 'main':
        return css`
          font-family: Medium;
          font-size: 24px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          @media screen and (max-width: 1279px) {
            font-size: 18px;
          }
        `
      case 'big':
        return css`
          font-family: Medium;
          font-size: 125px;
          color: white;
          line-height: 140px;
          letter-spacing: 0.5px;
          @media screen and (max-width: 1279px) {
            font-size: 24px;
            line-height: 28px;
          }
        `
      case 'footer':
        return css`
          font-family: Medium;
          font-size: 70px;
          line-height: 72px;
          color: white;
          @media screen and (max-width: 1279px) {
            font-size: 24px;
            line-height: 28px;
          }
        `
    }
  }}
`
