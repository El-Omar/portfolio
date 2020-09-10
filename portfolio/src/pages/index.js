import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Elomar from "../assets/images/elomar@2x.png";

import Skillset from "../components/skillset";
import imgAnalyze from "../assets/images/wireframes.jpg";
import imgDesign from "../assets/images/design2.jpg";
import imgCode from "../assets/images/code.jpg";

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
      desc: "I specialize in web development, Frontend and Backend. Nowadays, with web technology you can accomplish pretty much anything, from native apps to desktop programs to web apps. But I'm always open to other things!",
      img: imgCode
    },
  ];

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
        <div className="elomar__img">
          <img src={ Elomar } alt="elomar" />
        </div>
      </section>

      <section className="wrapper wrapper--expertise">
        <header className="wrapper__header">
          <h1 className="wrapper__title">
            What can<br />
            <span className="italic">I do</span>?
          </h1>
        </header>

        { skillsets.map(skillset => {
          return <Skillset key={ skillset.id } { ...skillset } />
        }) }
      </section>

      <section className="wrapper wrapper--projects">
        <header>
          <strong className="subtitle">My work!</strong>
          <h1 className="wrapper__title">Projects</h1>
        </header>

        <article className="project">
          
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
