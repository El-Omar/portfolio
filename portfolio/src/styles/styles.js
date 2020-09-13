import React from 'react';
import styled from 'styled-components';

const primary = `#f24738`;
const secondary = `#1acbbf`;
const black = `#1c1b20`;
const light = `#f8f8f8`;

const spacing = `3rem`;

const shooterBg = `url("data:image/svg+xml,%0A%3Csvg width='26px' height='32px' viewBox='0 0 26 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group' fill='%231C1B20'%3E%3Cpolygon id='Path' points='11.44 15.319 11.44 20.573 14.56 20.573 14.56 15.319 13 13.201'%3E%3C/polygon%3E%3Cpath d='M0.517,16.949 L0.517,32 L5.288,26.976 L20.714,26.976 L25.483,32 L25.483,16.949 L13,0.001 L0.517,16.949 Z M15.56,21.573 L10.44,21.573 L10.44,14.991 L13,11.515 L15.56,14.991 L15.56,21.573 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
const invaderBg = `url("data:image/svg+xml,%0A%3Csvg width='79px' height='60px' viewBox='0 0 79 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group' fill='%231C1B20'%3E%3Cpath d='M10.1,59.4 L19.9,59.4 L29.7,59.4 L29.7,49.6 L19.9,49.6 L19.9,39.8 L59,39.8 L59,49.6 L49.2,49.6 L49.2,59.4 L59,59.4 L68.8,59.4 L68.8,49.6 L78.6,49.6 L78.6,30 L68.8,30 L68.8,10.4 L59,10.4 L59,0.6 L19.9,0.6 L19.9,10.4 L10.1,10.4 L10.1,30 L0.3,30 L0.3,49.6 L10.1,49.6 L10.1,59.4 Z M49.2,20.2 L59,20.2 L59,30 L49.2,30 L49.2,20.2 Z M19.9,20.2 L29.7,20.2 L29.7,30 L19.9,30 L19.9,20.2 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E%3Crect id='Rectangle' x='68.8' y='0.6' width='9.8' height='9.8'%3E%3C/rect%3E%3Crect id='Rectangle' x='0.3' y='0.6' width='9.8' height='9.8'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
const deadBg = `url("data:image/svg+xml,%0A%3Csvg width='59px' height='59px' viewBox='0 0 59 59' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round'%3E%3Cpath d='M56.5,56.5 L37.5,37.5' id='Line-2-Copy' stroke='%23DE0000' stroke-width='5'%3E%3C/path%3E%3Cpath d='M22.5,22.5 L3.5,3.5' id='Line-2-Copy-2' stroke='%23DE0000' stroke-width='5'%3E%3C/path%3E%3Cpath d='M21.5,56.5 L2.5,37.5' id='Line-2-Copy-3' stroke='%23DE0000' stroke-width='5' transform='translate(12.000000, 47.000000) scale(-1, 1) translate(-12.000000, -47.000000) '%3E%3C/path%3E%3Cpath d='M56.5,21.5 L37.5,2.5' id='Line-2-Copy-4' stroke='%23DE0000' stroke-width='5' transform='translate(47.000000, 12.000000) scale(-1, 1) translate(-47.000000, -12.000000) '%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`;

export const Container = styled.div`

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
    }
  }

  .elomar__img {
    height: 60%;
    overflow: hidden;

    img {
      height: 120%;
    }
  }

  .wrapper--expertise {
    margin: 0 -${spacing};
    padding: ${spacing} 0;
    background: linear-gradient(180deg, rgba(255, 187, 181, .5), #f2473869);
    
    .wrapper__header {
      width: 50%;
      min-width: 53rem;
      margin-left: auto;
      margin-right: auto;
      padding: 1rem;
      text-align: center;
    }
  }

  .skillset {
    width: 70%;
    display: flex;
    margin: 3rem 0;
    background: white;
    font-size: 1.6rem;
    line-height: 2.8rem;
    position: relative;

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
    }

    &--design {
      margin-left: auto;
      margin-top: 8rem;
      margin-bottom: 8rem;

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
    }

    &__title {
      font-family: 'Khula';
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
      font-family: 'Libre Baskerville';

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &__content {
      width: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;;
      padding: 2rem;
      position: relative;
      z-index: 2;
      background: white;
      border-radius: .8rem;
    }

    &__desc {
      max-width: 40rem;
    }
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
  }

  .project {
    width: calc(50% - 2rem);
    margin: 1rem;

    .gatsby-image-wrapper {
      border-radius: .8rem;
    }
  }

  .section__header.section__header--center {
    text-align: center;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapper--contact {
    margin-top: 6rem;

    .subtitle {
      margin-bottom: 0;
    }

    .section__header {
      margin-bottom: 3rem;
    }
  }

  .spaceinvaders {
    display: flex;
    flex-flow: column;
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
    }

    .shooter {
      background-image: ${shooterBg};
    }

    .invader {
      background-image: ${invaderBg};
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
        background-image: ${deadBg};
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    .laser {

      &::before {
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
  }

  .container {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
  }

  .game-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .btn-play {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border: 1px solid ${primary};
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${primary};
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

  .btn-contact {
    width: 18rem;
    height: 6rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
    background: ${black};
    color: white;
    font-size: 2.4rem;
    font-family: 'Libre Baskerville';
    text-decoration: none;
    border-radius: 2rem;
  }
`;