import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from "gsap"

import { Container } from "../styles/loader";
import logo from "../assets/images/logo@2x.png";

const Loader = ({ startAnimating, startAnimatingHome }) => {
  const $loader = useRef(null);
  const $container = useRef(null);

  useEffect(() => {
    const $circle = $container.current.querySelector(`.loader-circle`);
    const $line = $container.current.querySelector(`.loader-line-mask`);
    const $logo = $container.current.querySelector(`.logo`);
    const $cover = $container.current.querySelectorAll(`.cover`);

    if (startAnimating) {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => startAnimatingHome(true), 300);
        }
      });
  
      tl
        .to($line, {
          duration: 1,
          autoAlpha: 0,
          ease: Power2.easeInOut,
        })
        .to($circle, {
          duration: 1,
          autoAlpha: 0,
          ease: Power2.easeInOut,
        })
        .to($logo, {
          duration: .4,
          duration: .4,
          autoAlpha: 0,
          ease: Power2.easeOut,
        })
        .to($cover, {
          duration: .3,
          yPercent: -100,
          ease: Power2.easeInOut,
          stagger: .1,
        });
    }

  }, [startAnimating, startAnimatingHome]);  

  return (
    <Container ref={el => $container.current = el}>
      <div className="cover cover1"></div>
      <div className="cover cover2"></div>
      <div className="cover cover3"></div>
      <div className="vertical-centered-box" ref={el => $loader.current = el}>
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img className="logo" src={logo} alt="Logo" width="40" style={{ filter: "invert(1)" }} />
        </div>
      </div>
    </Container>
  );
};

export default Loader;