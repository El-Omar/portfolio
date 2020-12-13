import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/images/logo@2x.png";

const Header = () => {

  return (
    <header className={ `page__header` }>
      <Link to='/'>
        <img src={ logo } height="70" alt="elomar logo" className={ `logo logo--header` } />
      </Link>
      <nav className="page__nav">
        <button className={ `nav__trigger` }>
          <div className="trigger__line trigger__line--first"></div>
          <div className="trigger__line trigger__line--second"></div>
          <div className="trigger__line trigger__line--third"></div>
        </button>
        <ul className={ `nav__list nav__list--closed` }>
          <li className="nav__item"><a href="#definition" title="Definition">Definition</a></li>
          <li className="nav__item"><a href="#work" title="work">Work</a></li>
          <li className="nav__item"><a href="#contact" title="contact">Contact</a></li>
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
