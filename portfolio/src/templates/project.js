import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';

const Project = ({ data }) => {

  return (
    <Layout>
      <SEO title="Details" />
      <div>
        <h1>
          { data.project.title }
        </h1>
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: {eq: $slug}) {
      slug
      title
      keywords
      images {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      link
      briefing {
        briefing
      }
     }
  }
`;

export default Project