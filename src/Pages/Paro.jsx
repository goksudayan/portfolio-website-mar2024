import React from 'react'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Contact from '../Components/Contact-old'
import ToTop from '../Components/ToTop'

import { Helmet } from "react-helmet"

import ParoImage from '../Assets/paro-card.webp'
import ParoSSOne from '../Assets/paro-01.webp'
import ParoSSTwo from '../Assets/paro-02.webp'


export default function Paro() {
  return (
    <>
    <Helmet><title>Göksu Dayan | Case study: Paro</title></Helmet>

    <ToTop />
    <section className="section-container" id="case-study-work">

    <div className="case-study-header" id="paro">
      <h1>Paro</h1>
      <p>Your home renovation advisors</p>
      <br />
      <br />
      <img src={ParoImage} />
    </div>

      <SectionHeader description={"01 / 03 | INTRODUCTION"} title="Project Overview" />

      <div className="content-container" id="overview">

        <div className="bento-introduction">
          <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Disclaimer</h3>
          <p>Please note that the design deliverables included in this case study are for reference only and may not match the final designs used by Paro. </p>
        </div>

        <p><a href="https://www.useparo.com/" rel="noreferrer" target="_blank">Paro</a> provides a state-of-the-art kitchen & bathroom renovation estimator online to get a free estimate instantly.</p>

        <p>As part of my application for a product designer position at Paro, I was tasked with re-designing their website's homepage.</p>

        <div className="content-container gray img-container">
          <img src={ParoSSOne} style = { { width: '100%', borderRadius: 0 }} alt="Paro's above-the-fold section, re-designed" />
        </div>

        <div className="content-container gray img-container">
          <img src={ParoSSTwo} style = { { width: '100%', borderRadius: 0 }} alt="Paro's website, re-designed" />
        </div>

      </div>

      <SectionHeader description={"02 / 03 | FIGMA PROTOTYPE"} title="Figma Prototype" />

      <iframe title="Figma prototype" style = { { height: '100vh'  } } src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2LEgTJMnDoyMSoAFjWRCHA%2FParo---Take-home-Exercise%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-126%26viewport%3D497%252C395%252C0.07%26t%3DNTEHKXsnbfjEoHmX-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A126%26mode%3Ddesign" allowfullscreen></iframe>
    </section>


    </>
  )
}
