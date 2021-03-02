import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { gsap, Power2 } from "gsap"
import logo from "../assets/images/logo@2x.png";

const Header = () => {
  const [isNavOpen, toggleNav] = useState(false);
  const $nav = useRef(null);

  useEffect(() => {
    const $navLinks = $nav.current.querySelectorAll(`.nav__item`);
    if (isNavOpen) {
      gsap.to($navLinks, {
        autoAlpha: 1,
        duration: .2,
        ease: Power2.easeInOut,
        stagger: .2,
        translateX: 0,
      });
    } else {
      gsap.to($navLinks, {
        autoAlpha: 0,
        duration: .2,
        ease: Power2.easeInOut,
        stagger: -.2,
        translateX: 10,
      });
    }
  }, [isNavOpen, $nav]);

  return (
    <header className={ `page__header` }>
      <AnchorLink to='/#definition'>
        <img src={ logo } height="70" alt="elomar logo" className={ `logo logo--header` } />
      </AnchorLink>
      <nav className="page__nav">
        <button aria-label="Navigation button" className={ `nav__trigger${isNavOpen ? ` open` : ``}` } onClick={() => toggleNav(toggle => toggle = !toggle)}>
          <div className="trigger__line trigger__line--first"></div>
          <div className="trigger__line trigger__line--second"></div>
          <div className="trigger__line trigger__line--third"></div>
        </button>
        <ul className={ `nav__list` } ref={el => $nav.current = el}>
          <li className="nav__item">
            <AnchorLink to="/#definition" title="Definition">Definition</AnchorLink>
            </li>
          <li className="nav__item">
            <AnchorLink to="/#work" title="work">Work</AnchorLink>
            </li>
          <li className="nav__item">
            <AnchorLink to="/#contact" title="contact">Contact</AnchorLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
