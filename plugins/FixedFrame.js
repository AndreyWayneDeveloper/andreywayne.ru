import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

export default styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  min-height: 70vh;
  border: 2px solid transparent;
  transition: all .7s ease-in-out, border 0s;
    & .image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100%;
    height: 100%;
    background: url(/img/mainIndex.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    transition: all .7s ease-in-out, opacity 0s;
  }
  @keyframes rotateText {
    from { transform: rotateY(0deg) }
    to { transform: rotateY(360deg)}
  }
  &:hover {
    & .image {
      background-size: 105%;
    }
  }
  & div {
    position: absolute;
    width: 85vw;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: space-between;
    perspective: 650px;
    transition: all .4s;
    & span {
      font-family: 'GT Walsheim Pro Bold';
      color: white;
      text-transform: uppercase;
      line-height: 70vh;
      font-size: 135px;
      animation: rotateText infinite 10s ease-in-out;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;

      @media screen and (max-width:1000px) {
        font-size: 100px;
      }

      @media screen and (max-width:765px) {
        font-size: 50px;
      }
    }
  }
`
