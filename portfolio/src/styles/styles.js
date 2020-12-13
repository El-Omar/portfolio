import React from 'react';
import styled from 'styled-components';

import { variables, mediaQueries } from "./variables";

const { primary, lightblue, black, lightgreen, secondary } = variables.colors;
const { spacing } = variables.spacing;
const { heading, italic, script } = variables.fonts;
const { svgs } = variables;

export const Container = styled.div`

  .wrapper__title {
    margin: 1rem 0;
    font-family: ${heading};
    font-size: calc(4rem + (6 - 4) * ((100vw - 320px) / (1920 - 320)));
    letter-spacing: .18rem;

    ${mediaQueries("md")`
      font-size: 3.2rem;
    `}
  }

  .italic {
    font-family: ${italic};
    font-weight: normal;
  }

  .subtitle {
    font-family: ${script};
    font-size: 2rem;
    color: var(--primary);
    display: inline-block;
  }

  .color-primary {
    color: var(--primary);
  }

  .hidden {
    display: none;
  }

  .sidebar {
    width: ${spacing};
    height: calc(100vh - 6rem);
    background: white;
    position: fixed;
    top: ${spacing};

    &--right {
      right: 0;
    }
  }

  .content {
    padding: 6rem;
  }

  .page__header {
    width: 100%;
    height: ${spacing};
    position: fixed;
    padding: .5rem ${spacing};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    z-index: 5;
  }

  .wrapper__header {
    width: 100%;
    max-width: 50rem;
    padding: 1rem;

    &--center {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  .page__footer {
    width: 100%;
    height: ${spacing};
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 10;
  }

  .logo {
    height: 4.5rem;
    width: auto;
    position: absolute;
    top: 1rem;
    left: 2rem;
  }

  .nav__trigger {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    border-radius: 0;
  }

  .trigger__line {
    height: .3rem;
    background: ${black};

    &--first {
      width: 2.1rem;
    }

    &--second {
      width: 1.8rem;
      margin: .3rem 0;
    }

    &--third {
      width: 1.9rem;
    }
  }

  .nav__list {
    background: green;

    &--closed {
      display: none;
    }
  }

  .wrapper--welcome {
    height: calc(100vh - 9rem);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    header {
      margin-top: ${spacing};

      ${mediaQueries(`sm`)`
        br {
          display: none;
        }
      `}
    }
  }

  .elomar__img {
    width: 100%;
    height: 60%;
    /* overflow: hidden; */

    img {
      /* height: 120%; */
    }

    ${mediaQueries(`sm`)`
      display: flex;
      align-items: flex-end;

      img {
        height: 60vw;
      }
    `}

    ${mediaQueries(`xs`)`
      img {
        height: 25rem;
      }
    `}
  }

  .desc {
    max-width: 40rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  .wrapper--expertise {
    margin: 0 -${spacing};
    /* padding: ${spacing} 0; */
    background: linear-gradient(180deg, rgba(255, 187, 181, .5), #f2473869);
    padding: 3rem;

    /* ${mediaQueries(992)` */
    /* `} */
  }

  .skillset {
    width: 70%;
    display: flex;
    margin: 3rem 0;
    font-size: 1.6rem;
    line-height: 2.8rem;
    position: relative;
    flex-flow: column;

    /* ${mediaQueries(992)` */
      /* flex-flow: column; */
      /* width: 100%; */

      /* .skillset__content {
        order: -1;
      }

      &.skillset--analyze .img__wrap,
      &.skillset--code .img__wrap {
        margin-left: auto;
      }

      &.skillset--design .skillset__content {
        margin-left: auto;
      } */
    /* `} */

    /* Ball */
    &::before {
      position: absolute;
      left: -1.5rem;
      top: -1.5rem;
      width: ${spacing};
      height: ${spacing};
      background: ${black};
      border-radius: 50%;
      z-index: 3;
    }

    /* Border bottom */
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      bottom: -1rem;
      right: 0;
      background: ${black};
      z-index: 1;
    }

    &--analyze {
      margin-right: auto;

      .img__wrap {
        margin-left: auto;
      }
    }

    &--design {
      margin-left: auto;
      margin-top: 8rem;
      margin-bottom: 8rem;

      .skillset__content {
        margin-left: auto;
      }

      &::before {
        left: auto;
        right: -1.5rem;
      }

      &::after {
        right: auto;
        left: 0;
      }

      .img__wrap {
        order: 1;
      }
    }
    
    &--code {
      margin-right: auto;

      .img__wrap {
        margin-left: auto;
      }

    }

    &__title {
      font-family: ${heading};
      margin-bottom: 1rem;
    }

    .img__wrap {
      width: 50%;
      height: 30vh;
      display: flex;
      position: relative;
      z-index: 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__subtitle {
      display: none;
      width: 1.5rem;
      padding: .5rem;
      padding-top: 2rem;
      background: white;
      word-break: break-all;
      text-align: center;
      font-size: 1rem;
      font-family: ${italic};

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &__content {
      order: -1;
      width: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;;
      padding: 2rem;
      position: relative;
      z-index: 2;
      background: white;
    }

    /* ${mediaQueries("sm")` */
      .skillset__content,
      .img__wrap {
        order: 1;
        width: 100%;
      }
    /* `} */
  }

  .wrapper--projects {
    margin-top: 6rem;

    .subtitle {
      margin-bottom: 0;
    }
  }

  .projects__wrap {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -1rem;

    ${mediaQueries(`md`)`
      margin: 0;
    `}
  }

  .project {
    width: calc(50% - 2rem);
    margin: 1rem;
    border-radius: .8rem;
    
    ${mediaQueries(`md`)`
      width: 100%;
      margin: 2rem 0;
    `}

    .gatsby-image-wrapper {
      border-radius: .8rem;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${secondary};
        opacity: .5;
      }
    }
  }

  .wrapper--contact {
    margin-top: 6rem;

    .subtitle {
      margin-bottom: 0;
    }

    .wrapper__header {
      margin-bottom: 1rem;

      ${mediaQueries(450)`
        br {
          display: none;
        }
      `}
    }

    .container {
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
    }

    .btn-contact {
      position: relative;
      width: 20rem;
      height: 5.6rem;
      margin-bottom: 4rem;
      /* padding-right: 2.6rem; */
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${lightblue};
      color: ${black};
      font-size: 1.6rem;
      text-decoration: none;
      text-transform: uppercase;

      &::after {
        /* content: ''; */
        position: absolute;
        width: 2.2rem;
        height: 2.2rem;
        top: 1.6rem;
        right: 2.2rem;
        background-image: ${svgs.mail(black)};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  .spaceinvaders {
    display: flex;
    flex-flow: column;

    .game-info {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    .btn-play {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 4rem;
      text-transform: uppercase;
      font-size: 1.4rem;
      background: ${lightgreen};
      color: ${black};
    }

    .high-score {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .btn-play.is-playing {

      .play {
        display: none;
      }
    }
  }

  .spaceinvaders .game {
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-flow: row wrap;
    background: white;
    box-sizing: content-box;

    .block {
      width: 2rem;
      height: 2rem;
      position: relative;
      background-size: contain;
      background-repeat: no-repeat;

      &.laser::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        background-color: ${primary};
      }
    }

    .shooter {
      background-image: ${svgs.shooter(black)};
    }

    .invader {
      background-image: ${svgs.invader(black)};
    }

    .boom {

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-image: ${svgs.dead(primary)};
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
`;