import React from 'react'
import SismoImage from '../Assets/sismo-card.webp'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Icon from '../Components/Icon'

import ColorPalette from '../Assets/sismo-colors.webp'
import DesignSystem from '../Assets/sismo-design-system.webp'
import BadgeView from '../Assets/sismo-badge-view.webp'
import MainPage from '../Assets/sismo-main-page.gif'
import Contact from '../Components/Contact-old'
import ToTop from '../Components/ToTop'

import { Helmet } from 'react-helmet'

export default function Sismo() {
  return (
    <>
    <Helmet><title>Göksu Dayan | Case study: Sismo</title></Helmet>

    <ToTop />
    <section className="section-container" id="case-study-work">

    <div className="case-study-header" id="sismo">
      <h1>Sismo</h1>
      <p>The key primitive for Web3 identities</p>
      <br />
      <br />
      <img src={SismoImage} />
    </div>

      <SectionHeader description={"01 / 03 | Introduction"} title="Project Overview"/>

      <div className="content-container" id="overview">

        <div className="bento-introduction">
            <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Disclaimer</h3>
            
            <p>Please note that the design deliverables included in this case study are for reference only and may not match the final designs used by Sismo.</p>

            <p>Recently, I have written an introductory piece on Sismo which you can find <a href="https://goksudayan.medium.com/a-modular-privacy-preserving-solution-sismo-81bae65a8814" rel="noreferrer" target="_blank" className="text-white">here</a>.</p>

        </div>

        <p>As a part of a partially collaborative design exercise with <a href="https://www.sismo.io/" rel="noreferrer" target="_blank">Sismo</a>, <span className="highlighted-text">a Web3 product that focuses on digital identity and privacy-preserving solutions</span>, I was asked to provide an interactive prototype of how their app's next version, Sismo App v2, would look like.</p>

        <p>At the very beginning of this assignment, I decided on three general design principles:</p>

        <div className="horizontal rotate">
          <div className="bento-introduction gray">
            <Icon icon="Continuity" size={70}/>
            <p>The continuity of the user flow is to be signaled by both functionality and visuals.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="MultiDirection" size={70}/>
            <p>The new app would move from a one-directional product to a multi-directional product.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="DesignScalability" size={70}/>
            <p>Design scalability is to be taken into consideration with every single design decision.</p>
          </div>
        </div>

        <h1 className="archived-title">Outcomes</h1>

        <p>The primary objectives of this collaboration were:</p>

        <div className="horizontal rotate" style={ {gap: '1.5em'}}>
          <div className="bento-introduction gray">
            <Icon icon="Merge" size={70}/>
            <p>Merging two environments into one.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Playful" size={70}/>
            <p>Making the app's user experience more interactive.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Display" size={70}/>
            <p>Displaying what badges the user is eligible for.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Badge" size={70}/>
            <p>Displaying badge data in a user-friendly way.</p>
          </div>
        </div>

      </div>

      <SectionHeader description={"02 / 03 | WORK"} title="Sismo v2.0 enters!"/>

      <div className="content-container" id="sismo-work">

        <p>Even though I was provided a very light design system with few components, it was extremely limited, especially considering the scope of this assignment (an upgrade of the app, not only in terms of design but also in terms of functionality) and the very little time I had provided to complete it (one week, to be exact).</p>

        <p>As I have noticed that most of my time working on this assignment would be spent on creating a much more extensive design system to ensure that the time spent on design is reduced and that a more efficient handoff at the end would be ensured; I have started to work on a design system, so minimal that no components of that I would not use for this assignment would not be created at the first place.</p>

        <div className="content-container gray img-container">
          <img src={ColorPalette} style = { { width: '100%'}} alt="The color palette used" />
          <p>The color palette used</p>
        </div>


        <div className="content-container gray img-container">
          <img src={DesignSystem} style = { { width: '100%'}} alt="The basic design systen created" />
          <p>The basic design system I created</p>
        </div>
        

        <h1 className="archived-title">Badge View</h1>

        <p>It is accurate to say that Badges are atomic units of the whole Sismo product, and the way badge information is displayed is truly important for the ideal user experience.</p>

        <p>When a user clicks on a badge on the current app, v1, a new page that displays the badge's information opens. As one of the core design principles I chose to follow for this assignment is to ensure the continuity of user experience, so that unless necessary, it is not disrupted, I have decided to make use of overlays to give users the sensation of a one-page app.</p>

        <p>In fact, <span className="highlighted-text">I strongly considered going even further and adding a tab view as below. The purpose of this tab view would be (1) to improve this continuity even further, and (2) to obtain a higher level of design scalability.</span> Yet, per the team's feedback, we gave up on this idea; though, I personally still think that it is an idea at least worth exploring.</p>

        <div className="content-container gray img-container">
          <img src={BadgeView} style = { { width: '100%'}} alt="Sismo App v2.0 Badge View" />
          <p>Sismo App v2.0 Badge View</p>
        </div>


        <h1 className="archived-title">New Main Page</h1>

        <p>A new main page would have a table view consisting of two different kinds of badges, Curated, and Non-Curated ones, which had their own different user flows in two different environments. In addition, some statistics considering these badges and new interactions, such as selecting multiple badges, hover states, etc., were added to improve this page's visual design and functionality.</p>

        <p>As the current version of the Sismo app did not allow its users to interact with multiple elements, one of the highest priority tasks was to create a delightful experience that enables users to interact with multiple elements, including selecting multiple badges and minting them only with a few clicks.</p>

        <div className="content-container gray img-container">
          <img src={MainPage} alt = "Sismo App v2.0 Main Page" style = { { width: '100%'}}/>
          <p>Sismo App v2.0 Main Page</p>
        </div>


      </div>

      
    </section>

    </>
  )
}


    