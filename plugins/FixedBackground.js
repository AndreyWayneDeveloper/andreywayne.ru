import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

export default styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  & .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(/img/mainIndex.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all .3s ease-in-out, opacity 0s;

    &:hover {
      transform: scale(1.05);
    }
  }

  & .image-after {
    box-shadow: inset 100vw 100vh 0 100px rgba(217, 242, 255, .4);
    transition: all .3s;
    opacity: 0;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
