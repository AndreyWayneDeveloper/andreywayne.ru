import styled, { css } from 'vue-styled-components'

const config = {
  typed: String,
  styled: ''
}

export default styled('p', config)`
  ${props => {
    switch (props.typed) {
      case 'normal':
        return css`
          font-family: Light;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          line-height: 35px;
        `
      case 'min':
        return css`
          font-family: Light;
          font-size: 14px;
          color: #FFFFFF;
        `
    }
  }}
`
