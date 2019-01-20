import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

export default styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  min-height: 50vh;
  width: 100%;
  transition: all .4s;

  & .imageBack {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .4s;
    opacity: 1;
    cursor: pointer;
    filter: grayscale(.75);

    & h5 {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'SF UI Display Semibold';
      font-weight: 100;
      font-size: 16px;
      color: #2f3b44;
      transition: top .5s, opacity .7s;
      background: white;
      padding: 25px 0;
      width: 350px;
      text-align: center;
      text-transform: uppercase;
      overflow: hidden;
      opacity: 0;

      & span {
        font-family: 'SF UI Display Bold';
      }

      &:after {
        width: 27.5%;
        height: 200%;
        background: #30373c;
        opacity: 0.3;
        z-index: 1;
        right: 0;
        top: 0;
        margin: -5px 0 0 -5px;
        transform-origin: 0 0;
        transform: rotate(-20deg);
      }

      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        transition: all 0.3s;
      }

      & img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10%;
        width: 20px;
        height: 20px;
        z-index: 2;
      }

      @media screen and (max-width:765px) {
        max-width: 280px;
        font-size: 12px;
      }
    }

    &:hover {
      filter: grayscale(0);
    }

    &:hover h5 {
      top: 50%;
      opacity: 1;
    }

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      width: 70%;
      height: 0%;
      border-left: 1px solid white;
      border-right: 1px solid white;
      transition: all .4s;
    }

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      width: 0%;
      height: 70%;
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      transition: all .4s;
    }

    &:hover:after {
      height: 80%;
    }

    &:hover:before {
      width: 80%;
    }

    &:hover {
      background: linear-gradient(45deg, #22682a 0%,#9b4a1b 40%,#3a342a 100%);
    }

    &:hover + .title h3 {
      transform: translateY(-15px);
    }

    &:hover + .title h2 {
      transform: translateY(-15px);
    }
  }

  & a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & .title {
    position: absolute;
    bottom: -105px;
    left: -71px;

    & h2 {
      font-family: 'GT Walsheim Pro Bold';
      font-size: 52px;
      color: #2f3b44;
      transition: all .4s;

      @media screen and (max-width: 670px) {
        font-size: 35px;
      }
    }

    & h3 {
      font-family: 'GT Walsheim Pro Medium';
      font-size: 21px;
      line-height: 27px;
      margin-left: 35px;
      transition: all .8s;
      font-weight: 100;

      @media screen and (max-width:765px) {
        font-size: 15px;
      }

      @media screen and (max-width:450px) {
         display: none;
      }
    }
  }

  @media screen and (max-width:450px) {
    & .title {
      bottom: -15px;
      left: -25px;

      & h2 {
        font-size: 25px;
      }
    }
  }
`
