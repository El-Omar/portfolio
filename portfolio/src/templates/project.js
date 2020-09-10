import React from "react";
import { graphql } from "gatsby";

const Project = ({ data }) => {

  return (
    <div>
      <h1>
        { data.project.title }
      </h1>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: {eq: $slug}) {
      slug
      title
      keywords
      images {
        file {
          url
        }
      }
      link
      createdAt
     }
  }
`;

export default Project