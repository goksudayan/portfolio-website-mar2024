import React from 'react'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Contact from '../Components/Contact-old'

import NyalaBefore from '../Assets/nyala-before.webp'
import NyalaAfter from '../Assets/nyala-after.webp'
import ToTop from '../Components/ToTop'
import { Helmet } from "react-helmet"

export default function Nyala() {
  return (
    <>
    <Helmet><title>Göksu Dayan | Case study: Nyala</title></Helmet>

    <ToTop />
    <section className="section-container" id="case-study-work">

      <CaseStudyCard
        type = "Primary"
        projectName = "Nyala"
        projectDescription = "Your gateway to digital assets"
        projectScope = "Take-home exercise"
        projectPlatforms = "Website"
        projectTimeline = "Sept '22"
        projectImage={null}
        showCTA={false}
      />

      <SectionHeader description={"01 / 04 | INTRODUCTION"} title="Project Overview" />

      <div className="content-container" id="overview">

        <div className="bento-introduction">
          <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Disclaimer</h3>
          <p>Please note that the design deliverables included in this case study are for reference only and may not match the final designs used by Nyala.</p>
        </div>

        <p><a href="https://www.nyala.de/en/" rel="noreferrer" target="_blank">Nyala</a> is a technology company specializing in blockchain technology and a pioneer of regulated custody solutions for crypto assets.</p>

        <div className="list-container">
          <p>As part of my application to a product designer position at Nyala, I was tasked with the following:</p>
          <ol>
            <li>Improving the user-friendliness and aesthetic appeal of a representative wireframe for a KYC module for their institutional (B2B) custody platform. I could create my own wireframe if I wished.</li>
            <li>Identifying parts of the wireframe that did not make sense.</li>
            <li>Identifying any missing or incomplete key functions in the KYC module.</li>
          </ol>
        </div>

      </div>

      <SectionHeader description={"02 / 04 | WORK IN PROGRESS"} title="Design Principles & Outcomes" />

      <div className="content-container" id="design-principles-outcomes">
      <div className="important-div">

        <div className="list-container">

          <p>Before starting any further work on Nyala, I decided on three design principles:</p>

<ol>
  <li><span className="highlighted-text">Visual elements should be proportionate to their importance for the user.</span> For example, if the user table is deemed to be the most important part of the KYC module for the majority of the user base, then most of the visual space should be allocated to it.</li>
  <li><span className="highlighted-text">The KYC module's UI should be designed in a way that is familiar to the target audience of 40 to 60-year-old institutional investors who are already familiar with banking products and their interfaces.</span></li>
  <li>As there is no user research provided, every design decision should be justified with a reason.</li>
</ol>
          </div>
          
        </div>

        <div className="list-container">

          <p>Considering...</p>

          <ol>
            <li>According to design principle #1, as the content section is the part of the page that users will focus on the most, the side navigation bar should be much smaller.</li>
            <li>The absence of a "Log Out" option weakens security, especially since this product is used to manage custodians' clients' assets.</li>
          </ol>

        </div>

        <div className="important-div">
        <div className="list-container">

          <p>Resulted in...</p>

          <ol>
            <li>An increase of approximately 27% in both the width and height of the content section, leaving more room for white space and additional content.</li>
            <li>Users are now able to direct their attention to the customer table with less distraction from other visual elements.</li>
          </ol>

        </div>

      </div>
      </div>

      <SectionHeader description={"03 / 04 | WORK"} title="Before vs. After" />

      <div className="content-container" id="design-principles-outcomes">
        
        <div className="content-container gray img-container">
          <img src={NyalaBefore} alt="Nyala wireframe before Göksu Dayan's work" style = { { width: '100%', border: '.5px black solid', borderRadius: 0 }} />
          <p>Before</p>
        </div>

        <div className="content-container gray img-container">
          <img src={NyalaAfter} alt="Göksu Dayan's work on Nyala wireframe" style = { { width: '100%', border: '.5px black solid', borderRadius: 0 }} />
          <p>After</p>
        </div>


      </div>

    </section>


    </>
  )
}