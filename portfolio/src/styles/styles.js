import React from 'react';
import styled from 'styled-components';

import { variables, mediaQueries } from "./variables";

const { primary, lightblue, black, lightgreen, darkblue, light } = variables.colors;
const { spacing } = variables.spacing;
const { heading, italic, script, body } = variables.fonts;
const { svgs } = variables;

export const Container = styled.div`

  &.no-scroll {
    height: 100vh;
    overflow: hidden;
  }

  .wrapper__title {
    margin: 1rem 0;
    font-family: ${heading};
    font-size: calc(4rem + (6 - 4) * ((100vw - 320px) / (1920 - 320)));
    letter-spacing: .18rem;

    ${mediaQueries("md")`
      font-size: 3.2rem;
    `}
  }

  .cover {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: ${primary};
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
    z-index: 10;

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
    z-index: 11;
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

  .trigger__line {
    height: .3rem;
    background: ${black};
    transition: all .18s ease-in-out;

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

  .nav__trigger {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    border-radius: 0;

    &.open .trigger__line {
      transform: rotate(45deg);

      &--second {
        opacity: 0;
      }
    }

    &:hover:not(.open) {

      .trigger__line {
        width: 2.3rem;
      }
    }
  }

  ${mediaQueries(`sm`)`

    .content {
      padding: 4rem;
    }

    .sidebar {
      width: 2rem;
      height: calc(100vh - 4rem);
      top: 2rem;
    }

    .page__header {
      height: 2rem;
    }

    .page__footer {
      height: 2rem !important;
    }

    .nav__trigger {
      top: 1.5rem;
      right: 1.5rem;
    }

    .logo {
      height: 4rem;
      top: 0.7rem;
      left: 1.5rem;
    }
  `}

  .nav__list {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    position: absolute;
    top: 5rem;
    right: 5rem;
    font-family: georgia, serif;

    li {
      list-style: none;
      margin: .5rem;
      text-align: right;
      background: ${light};

      a {
        display: block;
        text-decoration: none;
        color: ${darkblue};
        padding: .6rem;
        transition: all .2s ease-in-out;

        &:hover {
          color: ${primary};
        }
      }
    }

    ${mediaQueries(`sm`)`
      right: 2rem;
      top: 3rem;
    `}
  }

  .wrapper--welcome {
    height: calc(100vh - 9rem);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: relative;

    ${mediaQueries(`sm`)`
      height: calc(100vh - 6rem);
    `}

    .wrapper__title {
      opacity: 0;
      position: relative;
      transform: translateY(-2rem);

      .cover {
        background: ${primary};
      }      
    }

    .subtitle {
      opacity: 0;
    }

    .dot {
      animation: hideAndShow 1.2s ease-in-out infinite;
    }

    header {
      margin-top: ${spacing};
      position: relative;
      z-index: 3;

      ${mediaQueries(`sm`)`
        br {
          display: none;
        }
      `}
    }
    
    .particles {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;
    }
  }

  .portrait {
    width: 100%;
    height: 60%;
    position: relative;
    z-index: 3;
    user-select: none;
    pointer-events: none;

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

  .elomar__img {
    
  }

  .desc {
    max-width: 40rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  .wrapper--expertise {
    margin: 0 -${spacing};
    padding: 3rem;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    z-index: 5;
    background: white;
  }

  .skillset__wrapper {
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    ${mediaQueries(900)`
      flex-flow: column;
    `}
  }

  .skillset {
    width: 30%;
    height: 100%;
    margin: 1rem 2rem;
    display: flex;
    flex-flow: column;
    font-size: 1.6rem;
    line-height: 2.8rem;
    position: relative;
    flex-flow: column;

    ${mediaQueries(900)`
      width: 100%;
      height: auto;
      margin-bottom: 4rem;
    `}

    ${mediaQueries("sm")`
      margin-left: 0;
      margin-right: 0;
    `}

    /* Ball */
    &::before {
      content: "";
      position: absolute;
      left: -1.25rem;
      top: -.25rem;
      width: 2rem;
      height: 2rem;
      background: ${black};
      border-radius: 50%;
      z-index: 5;
    }

    &::after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: -1rem;
      bottom: -1rem;
      background: ${primary};
    }

    &__content {
      height: 100%;
      padding: 1rem 1.5rem;
      background: ${light};
      /* border-right: 1px solid ${primary}; */
      /* border-bottom: 1px solid ${primary}; */
      /* color: white; */

      p {
        margin-bottom: 0;
      }
    }

    &__title {
      font-family: ${heading};
      margin-top: 1rem;
      margin-bottom: .5rem;
    }

    .img__wrap {
      width: 100%;
      position: relative;
      z-index: 2;
      height: 0;
      padding-top: 56.25%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      bottom: 0;
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
  }

  .wrapper--projects {
    margin-top: 6rem;

    .subtitle {
      margin-bottom: 0;
    }
  }

  .projects__wrap {
    flex-flow: row wrap;

    ${mediaQueries(`md`)`
      margin: 0;
    `}
  }

  .project {
    margin: 24vh 0;
    border-radius: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .project__cover {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: ${primary};
      z-index: 3;
    }
    
    &:nth-child(even) {

      .project__image {
        order: 1;
      }

      .project__content {
        margin-left: 0;
        margin-right: 2rem;

        &::before {
          left: auto;
          right: -40%;
        }
      }
    }

    &:first-child {
      margin-top: 0;
    }

    .project__title {
      font-size: 3rem;
    }

    .btn--project {
      width: auto;
      align-self: flex-start;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 4rem;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 1.4rem;
      background: ${black};
      color: white;
      transition: all .3s ease-in-out;

      &:hover {
        background: ${primary};
      }
    }

    .project__image {
      border-radius: .8rem;
      max-width: 1024px;
      flex-basis: 30%; 
      overflow: hidden;
      position: relative;
      z-index: 2;

      .gatsby-image-wrapper {
        max-height: 48rem;
      }

      .image__cover {
        position: absolute;
        width: 106%;
        height: 106%;
        left: -3%;
        top: -3%;
        background: ${light};
        z-index: 2;
      }
    }

    .project__content {
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin-left: 2rem;
      flex-basis: auto; 
      position: relative;
      padding: 6rem 4rem;
      background: ${lightblue};
    }


    ${mediaQueries(`md`)`
      width: 100%;
      margin: 6rem 0;
      flex-flow: column;

      .project__content {
        width: 100%;
        margin: 0;
        padding: 0;
        background: none;
      }

      .project__title {
        margin: 1.5rem 0;
        font-size: 2.6rem;
      }

      .project__image {
        width: 100%;
      }

      &:nth-child(even) {
        .project__image {
          order: -1;
        }

        .project__content {
          margin: 0;
        }
      }
    `}
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

      ${mediaQueries("md")`
        margin-bottom: 0;
      `}

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

  @keyframes hideAndShow {

    0% {
      opacity: 0;
    }

    50% {
      opacity: 100%;
    }

    100% {
      opacity: 0;
    }
  }
`;