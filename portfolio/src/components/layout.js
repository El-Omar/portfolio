import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import layoutStyles from "../styles/layout.module.scss";
import "./layout.css"
import "../styles/base/base.scss";

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={ layoutStyles.main }>
        <div className={ `sidebar sidebar--left` }></div>
        <div className="content">
          {children}
        </div>
        <div className="sidebar sidebar--right"></div>
      </main>
      <footer className="page__footer">
        
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
