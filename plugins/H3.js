import styled, { css } from 'vue-styled-components'

const config = {
  typed: String,
  styled: ''
}

export default styled('h3', config)`
  ${props => {
    switch (props.typed) {
      case 'project':
        return css`
          font-family: Medium;
          font-size: 24px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          @media screen and (max-width: 1279px) {
            font-size: 18px;
          }
        `
    }
  }}
`
