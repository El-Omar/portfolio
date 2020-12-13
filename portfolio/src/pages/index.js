import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Elomar from "../assets/images/elomar@2x.png";

import Skillset from "../components/skillset";
import imgAnalyze from "../assets/images/wireframes.jpg";
import imgDesign from "../assets/images/design2.jpg";
import imgCode from "../assets/images/code.jpg";

import Img from "gatsby-image";

import spaceInvaders from "../scripts/spaceInvaders";

const IndexPage = () => {
  const skillsets = [
    {
      id: "analyze",
      title: "Analyzing",
      desc: "Analyzing is the first step towards building anything. Whatever the tool might be, whether it's user stories, wireframes or a clickable mockup, there's always an answer.",
      img: imgAnalyze
    },
    {
      id: "design",
      title: "Designing",
      desc: "Webdesign, UI/UX design, photo manipulation, posters, banners or whatever. Design is a tool to solve a problem. I mainly use Sketch and Adobe Suite",
      img: imgDesign
    },
    {
      id: "code",
      title: "Coding",
      desc: "I specialize in web development, Frontend and Backend. Nowadays, with web technologies you can accomplish pretty much anything, from native apps to desktop programs to web apps. But I'm always open to other things!",
      img: imgCode
    },
  ];

  const data = useStaticQuery(graphql`
    { 
      projects: allContentfulProject(sort: {fields: [createdAt]}) {
        edges {
          node {
            slug
            title
            images {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
              title
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "elomar@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1104) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const spaceInvadersDivs = Array(225).fill('block');
  let $spaceInvaders = useRef(null);

  useEffect(() => {
    spaceInvaders($spaceInvaders);
  }, [$spaceInvaders]);

  const projectRefs = useRef([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let projects = data.projects.edges;
    projectRefs.current = new Array(projects.length);
    setProjects(projects);
    console.log("projects before focussing ")
  }, [data.projects.edges]);

  useEffect(() => {
    if (projects.length > 0) {
      projectRefs.current[projects.length - 1].focus();
    }
    console.log("projects in focus: ", projects);
  }, [projects]);

  return (
    <Layout>
      <SEO title="Home" />
      <section className="wrapper wrapper--welcome">
        <header>
          <strong className="subtitle">What's up!</strong>
          <h1 className="wrapper__title">
            Hi! My name is El Omar, <br />
            and I love <span className="italic">designing <br /> 
            experiences</span><span className="color-primary">.</span>
          </h1>
        </header>
        <Img 
          className="elomar__img" 
          alt="El Omar" 
          fluid={data.placeholderImage.childImageSharp.fluid} 
          imgStyle={{ objectPosition: '50% 100%', objectFit: 'contain' }} />
      </section>

      <section className="wrapper wrapper--expertise">
        <header className="wrapper__header wrapper__header--center">
          <h1 className="wrapper__title">
            What can <br />
            <span className="italic">I do</span>?
          </h1>
        </header>

        { skillsets.map(skillset => {
          return <Skillset key={ skillset.id } { ...skillset } />
        }) }
      </section>

      <section className="wrapper wrapper--projects">
        <header className="wrapper__header">
          <strong className="subtitle">My work!</strong>
          <h1 className="wrapper__title">Projects</h1>
        </header>

        <div className="projects__wrap">
          { data.projects.edges.map(({ node: project }, i) => {
            return (
              <article ref={el => projectRefs.current[i] = el}
                className="project" key={project.slug}>
                <Link to={`/projects/${project.slug}/`}>
                  <Img 
                    fluid={project.images[0].fluid }
                    key={project.images[0].title}
                    alt={project.images[0].title}
                    style={{ height: `100%`, }}
                  />
                </Link>
              </article>
            )
          }) }
        </div>
      </section>

      <section className="wrapper wrapper--contact">
        <header className="wrapper__header wrapper__header--center">
          <strong className="subtitle">Get in touch</strong>
          <h1 className="wrapper__title">Wanna get to <br/> 
          know me <span className="italic">& play <br/>Space Invaders</span><span className="color-primary">?</span></h1>
        </header>

        <div className="container">
          <a className="btn-contact" href="mailto:hi@elomar.be">Get in touch</a>
          <div className="spaceinvaders" ref={el => $spaceInvaders = el}>
            <div className="game">
              { 
                spaceInvadersDivs.map((_, i) => (
                  <div className={_} key={i}></div>
                ))
              }
            </div>
            <div className="game-info">
              <button className="btn-play">
                <span className="play">Play</span>
                <span className="result"></span>
              </button>
              <span className="high-score">High score: <span className="value">0</span></span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
