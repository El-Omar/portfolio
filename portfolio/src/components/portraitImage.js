import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ElomarImage = ({ path, setLoaded }) => {
  const data = useStaticQuery(graphql`
    query {
      portraitBlack: file(relativePath: { eq: "elomar@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1104) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portraitOrange: file(relativePath: { eq: "elomar-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 1104) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img 
      fluid={path === "black" ? 
        data.portraitBlack.childImageSharp.fluid : 
        data.portraitOrange.childImageSharp.fluid} 
      onLoad={() => setLoaded(assets => assets += 1)}
      loading="auto"
      className={`elomar__img ${path}`}
      alt="El Omar"
      style={{ position: 'absolute', width: `100%`, height: `100%` }}
      imgStyle={{ objectPosition: '50% 100%', objectFit: 'contain' }}
    />
}

export default ElomarImage
