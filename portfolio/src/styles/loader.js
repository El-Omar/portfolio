import React from "react";
import styled from "styled-components";
import { variables } from "./variables";

const { colors } = variables; 

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: ${colors.black}; */
  z-index: 20;

  * {
    transition: all 0.3s;
    z-index: 5;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 3;
  }

  .cover1 {
    background: ${colors.black};
    z-index: 3;
  }

  .cover2 {
    background: ${colors.light};
    z-index: 2;
  }
  
  .cover3 {
    background: ${colors.primary};
    z-index: 1;
  }

  .vertical-centered-box {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;

    &::after {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -0.25em;
    }
  
    .content {
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      text-align: left;
      font-size: 0;
    }
  }

  .loader-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    margin-left: -75px;
    margin-top: -75px;
  }

  .loader-line-mask {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 75px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    overflow: hidden;
    transform-origin: 75px 75px;
    animation: rotate 1.2s infinite linear;

    .loader-line {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
    }
  }

  .logo {
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @keyframes rotate { 

    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`;