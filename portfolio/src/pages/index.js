import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect";
import { gsap, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loader from "../components/loader";
import Particles from "../components/particles";

import PortraitImg from "../components/portraitImage";

import spaceInvaders from "../scripts/spaceInvaders";

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [numberOfAssets, setNumberOfAssets] = useState(2); //2 portrait images
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [didLoaderAnimate, setDidLoaderAnimate] = useState(false);

  const portraitRangeOfMotion = 10;

  const $welcome = useRef(null);
  const spaceInvadersDivs = Array(225).fill('block');
  let $spaceInvaders = useRef(null);


  const data = useStaticQuery(graphql`
    { 
      projects: allContentfulProject(sort: {fields: [createdAt]}) {
        edges {
          node {
            title
            description {
              json
            }
            is16by9
            link
            images {
              title
              fluid(maxWidth: 1024) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setLoading(false);
      }
    }, 10);
  }, [isLoading]);

  useEffect(() => {
    setNumberOfAssets(data.projects.edges.length + 1);
  }, [data]);

  useEffect(() => {
    if (numberOfAssets === loadedAssets) {
      setLoading(false);
    }
  }, [numberOfAssets, loadedAssets]);

  useEffect(() => {
    if (didLoaderAnimate) {
      const $subtitle = $welcome.current.querySelector(`.subtitle`);
      const $title = $welcome.current.querySelector(`.wrapper__title`);
      const tl = gsap.timeline();

      tl
        .to($subtitle, {
          opacity: 1,
          duration: .3,
          ease: Power2.easeInOut,
        })
        .to($title, {
          opacity: 1,
          translateY: 0,
          duration: .7,
          ease: Power2.easeInOut,
          delay: -.3,
        });
    }
  }, [didLoaderAnimate]);

  useEffect(() => {
    if (!isMobile) {
      spaceInvaders($spaceInvaders);
    }
  }, [$spaceInvaders]);

  const scale = (num, in_min, in_max, out_min, out_max) => (
    (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  );

  const animatePortrait = ({ clientX, clientY }) => {
    const percentageX = parseFloat(scale(clientX, 0, window.innerWidth, -portraitRangeOfMotion, portraitRangeOfMotion).toFixed(2));
    const percentageY = parseFloat(scale(clientY, 0, window.innerHeight, -portraitRangeOfMotion, portraitRangeOfMotion).toFixed(2));

    gsap.to(".elomar__img.orange", {
      x: -percentageX,
      y: -percentageY,
      ease: Power2.easeOut,
    });
  }

  useEffect(() => {
    if (didLoaderAnimate) {
      window.addEventListener("mousemove", animatePortrait);
      return () => window.removeEventListener("mousemove", animatePortrait);
    }
  }, [didLoaderAnimate]);

  return (
    <div style={isLoading || !didLoaderAnimate ? {
      height: `100vh`,
      overflow: `hidden`,
    } : null}>
      {
        (isLoading || !didLoaderAnimate) &&
        <Loader
          startAnimating={!isLoading && !didLoaderAnimate}
          startAnimatingHome={setDidLoaderAnimate} />
      }
      <Layout>
        <SEO title="Home" />
        <div id="definition" style={{ position: `absolute`, top: 0 }}></div>
        <section className="wrapper wrapper--welcome"
          ref={el => $welcome.current = el}>
          <header>
            <strong className="subtitle">What's up!</strong>
            <h1 className="wrapper__title">
              Hi! My name is El Omar, <br />
              and I love <span className="italic">designing <br />
                experiences</span><span className="color-primary dot">.</span>
            </h1>
          </header>

          <div className="portrait">
            <PortraitImg path="orange" setLoaded={setLoadedAssets} />
            <PortraitImg path="black" setLoaded={setLoadedAssets} />
          </div>

          <Particles />
        </section>

        <section className="wrapper wrapper--expertise">
          <header className="wrapper__header">
            <strong className="subtitle">Expertise</strong>
            <h1 className="wrapper__title">
              Website in <span className="italic">progress</span>.
            </h1>
          </header>
          <article style={{ paddingLeft: "16px" }}>
            <p className="desc" style={{ maxWidth: "none", marginBottom: "0" }}><strong>November 2024 update:</strong><br />
              This portfolio was created around July 2020, and it needs some fresh updates.</p>
            <p className="desc" style={{ maxWidth: "none" }}>In the meantime, you can still play some Space Invaders, or say hi to me through my email!</p>
          </article>
          <div className="skillset__wrapper">
            {/* {skillsets.map((skillset, index) => {
              return <Skillset key={skillset.id} {...skillset} index={index} />
            })} */}
          </div>
        </section>
        <div id="work"></div>
        <section className="wrapper wrapper--projects">
          {/* <header className="wrapper__header wrapper__header--center">
            <strong className="subtitle">My work!</strong>
            <h1 className="wrapper__title">Projects</h1>
          </header> */}

          {/* <div className="projects__wrap">
            {data.projects.edges.map(({ node: project }, i) => {
              return (
                <article ref={el => projectRefs.current[i] = el} key={i}
                  className={`project is--${project.is16by9 ? `16-by-9` : `4-by-3`}`}>
                  <div className="project__image">
                    <div className="image__cover"></div>
                    <Img
                      fluid={project.images[0].fluid}
                      key={project.images[0].title}
                      alt={project.images[0].title}
                      loading="auto"
                      onLoad={() => setLoadedAssets(assets => assets += 1)}
                      style={{ height: `100%`, }} />
                  </div>
                  <div className="project__content">
                    <h3 className="project__title">{project.title}</h3>
                    <div className="desc desc--project">
                      {documentToReactComponents(project.description.json)}
                    </div>
                    <a className="btn btn--project" href={project.link} rel="noreferrer" target="_blank">View project</a>
                  </div>
                </article>
              )
            })}
          </div> */}
        </section>

        <section className="wrapper wrapper--contact" id="contact">
          <header className="wrapper__header wrapper__header--center">
            <strong className="subtitle">Get in touch</strong>
            <h1 className="wrapper__title">Wanna get to <br />
              know me <span className="italic">& play <br />Space Invaders</span><span className="color-primary">?</span></h1>
          </header>

          <div className="container">
            <a className="btn-contact" href="mailto:elomar.sami@gmail.com">Get in touch</a>
            {!isMobile && (
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
            )}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default IndexPage
