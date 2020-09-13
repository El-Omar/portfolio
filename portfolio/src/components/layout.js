import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

//Styles
import "../styles/reset.css";
import "../styles/base.css";
import { Container } from "../styles/styles";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={ '' }>
        <div className={ `sidebar sidebar--left` }></div>
        <div className="content">
          {children}
        </div>
        <div className="sidebar sidebar--right"></div>
      </main>
      <footer className="page__footer"></footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
