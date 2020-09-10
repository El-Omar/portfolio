const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.error) {
      console.log("There's an error getting data from Contentful: ", res.erro);
    }

    const projectTemplate = path.resolve("./src/templates/project.js");

    res.data.allContentfulProject.edges.forEach(project => {
      createPage({
        path: `/projects/${project.node.slug}/`,
        component: slash(projectTemplate),
        context: {
          slug: project.node.slug
        }
      });
    });
  }).catch(err => {
    console.log("Error with contentful data: ", err);
  });
};