import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

import { ProjectStyles } from '../styles/project';

const Project = ({ data }) => {
  const { project } = data;

  const isLeft = true;

  console.log(project);

  return (
    <Layout>
      <SEO title={project.title} />
      <ProjectStyles>
        <section className={`wrapper wrapper--project__details${isLeft ? ` left` : ` right`}`}>
          <header className="wrapper__header wrapper__header--project">
            <h1 className="wrapper__title">
              { project.title }
            </h1>
            <strong className="project__keywords">
              { project.keywords.map(keyword => (
                <span className="keyword" key={keyword}>{keyword}</span>
              )) }
            </strong>
          </header>

          <div className="project__intro">
            <div className="desc desc--project">
              { documentToReactComponents(project.description.json) }
            </div>

            <Img className="project__thumbnail"
              fluid={project.images[0].fluid }
              key={project.images[0].title}
              alt={project.images[0].title}
               />
          </div>


          {/* { project.images.map(img => (
            <div className="project__img">
              <Img 
                fluid={img.fluid }
                key={img.title}
                alt={img.title}
                style={{ height: `100%`, }}
              />
            </div>
          )) } */}
        </section>
      </ProjectStyles>
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
      description {
        json
      }
     }
  }
`;

export default Project