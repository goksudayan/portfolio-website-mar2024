import React from 'react'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Contact from '../Components/Contact-old'

import VidbibImage from '../Assets/vidbib-card.webp'
import Roles from '../Assets/vidbib-roles.svg'
import FeatureOne from '../Assets/vidbib-one-way-platform.gif'
import FeatureTwo from '../Assets/vidbib-prerecorded-answers.webp'
import FeatureThree from '../Assets/vidbib-library.webp'
import FeatureFour from '../Assets/vidbib-your-best.webp'
import FeatureFive from '../Assets/vidbib-matches-your-skills.webp'
import ToTop from '../Components/ToTop'

import { Helmet } from 'react-helmet'

export default function Vidbib() {
  return (
    <>
    <Helmet><title>Göksu Dayan | Case study: Vidbib</title></Helmet>

    <ToTop />
    <section className="section-container" id="case-study-work">

    <div className="case-study-header" id="vidbib">
      <h1>Vidbib</h1>
      <p>A new hiring economy</p>
      <br />
      <br />
      <img src={VidbibImage} />
    </div>

      <SectionHeader description={"01 / 04 | Introduction"} title="Project Overview" />

      <div className="content-container" id="overview">

      <h1 className="archived-title">Problem statement</h1>

        <p>One of the worst inefficiencies in the world is hiring processes that end with candidates' rejection: <span className="highlighted-text">Companies use very valuable resources, which they get zero return on investment, and most of the time, candidates get no feedback and spend their time in very repetitive interviews.</span></p>

        <h1 className="archived-title">Solution</h1>

        <div className="content-container gray img-container">
          <img alt="Three roles a person can have on VidBib" src={Roles} style = { { width: '100%' }} />
            <p>Three roles a person can have on VidBib</p>
          </div>


        <p>Introducing external evaluators, a new role to the standard hiring equation: They evaluate job seekers' application packages and create extensive reports on them. These reports are shared with job seekers; thus they finally get feedback that they have been looking for for a long time and can be shared with the hiring responsible in the companies that are interested in the job seeker in return for financial compensation.</p>

        <p>Furthermore, companies that evaluated a candidate and spent valuable resources in the process can assume the role of external evaluators, and monetize their own evaluation reports, which enable them to get a return on their investment. Last but not least, any company purchasing such reports can significantly reduce the time and resources they spend on hiring processes.</p>

      </div>

      <SectionHeader description={"02 / 04 | RESEARCH"} title="Exploring the Audience and the Landscape" />

      <div className="content-container" id="research">

      <h1 className="archived-title">User interviews</h1>

        <p>To understand the problems job seekers face before, during, and after the hiring processes they go through, I interviewed two people who were actively looking for a job and had interviewed within the last thirty days.</p>

        <div className="list-container">
          <p>Both stated that:</p>
          <ol>
            <li>Most interviews they participated in were highly repetitive.</li>
            <li>They barely get feedback from companies they are rejected from.</li>
            <li>They would love to get feedback.</li>
            <li>They believe such feedback would help them to do much better in future interviews.</li>
          </ol>
        </div>




        <h1 className="archived-title">Questionnaires</h1>

        <p>To reach a broader population to verify these statements, see what other problems job seekers face, and understand the landscape better, I decided to conduct user questionnaires.</p>

        <p><span className="highlighted-text">One questionnaire for juniors and active job seekers with less than three years of experience and another for seniors with hiring responsibilities with at least three years of experience were prepared. In total, 34 questions were asked, and 9 individuals participated.</span></p>

        <div className="list-container">
          <p>Key learnings from this study consist of:</p>

          <ol>
            <li>Job seekers truly care about feedback on their application packages and interviews.</li>
            <li>Some job seekers find it tedious to record long answers to one-way interview questions.</li>
            <li>A very high percentage of participants (85.7%) prefer using their computers for one-way interviews.</li>
            <li>Job seekers prefer to tailor their application packages per company as different companies value different things.</li>
            <li>Most seniors with hiring responsibilities would provide feedback if they had enough resources and time.</li>
            <li>Job seekers and hiring responsible have a much higher preference for one-way interviews.</li>
          </ol>
        </div>

        <h1 className="archived-title">Eureka!</h1>

        <div className="important-div">

        <div className="list-container">
          <p>Back to the whiteboard, I decided to go over four key points I learned by then:</p>

          <ol>
            <li>There is a market (i.e., supply and demand) for career consultancy services.</li>
            <li>Seniors and companies would provide feedback if they had enough resources or had been incentivized strongly.</li>
            <li>Job seekers love feedback on their application packages.</li>
            <li>A hiring process that ends with the rejection of a candidate to whom no feedback is provided is extremely inefficient.</li>
          </ol>
        </div>
        </div>

        <p>During a brainstorming session, I noticed that a new role, “external evaluator”, could be introduced to the standard hiring equation between job seekers and companies, immensely improving the current hiring practices.</p>
        
        <div className="content-container gray img-container">
         <img alt="Three roles that a person can have on VidBib" src={Roles} style = { { width: '100%' }} />
         <p>Three roles that a person can have on VidBib</p>
        </div>

        <div className="important-div">
          <p>An external evaluator would provide extensive feedback on a job seeker's application package and get financially compensated for their time and effort. A job seeker would get extensive feedback, by allowing the external evaluator to share and monetize the extensive report they create, and companies would be able to purchase these reports, significantly reducing the resources they spend on job candidates, and/or sell their own reports on candidates they had rejected.</p>
        </div>


        <p>Most importantly, any person can assume any combination of these three roles under certain circumstances.</p>

        <p>As an outcome of this new hiring process, job seekers' interviews become less repetitive, they get more feedback, hand-selected pioneers of their fields can provide feedback to job seekers and monetize their efforts, and companies finally have a way to “recycle” their efforts and reports on rejected candidates.</p>

      </div>

      <SectionHeader description={"03 / 04 | Primary Features"} title="What VidBib brings to you" />

      <div className="content-container" id="primary-features">

        <div className="horizontal rotate">

          <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>

              <img src={FeatureOne} alt="VidBib's easy-to-use one-way interview platform feature" style= { { width: '100%', borderRadius: 0 } } />
              <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
                <h3 className="section-description black">Easy-to-use one-way interview platform</h3>
                <p>Companies and candidates can use VidBib as a one-way interview platform. Pre-answers enable candidates to create their own pages, as below, review their answers, and share them with external evaluators, and companies to review those answers and write (and share) their comments on them.</p>
              </div>
          </div>

          <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
              <img src={FeatureTwo} alt="VidBib's pre-recorded answers feature" style= { { width: '100%', borderRadius: 0 } } />
              
              <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
                <h3 className="section-description black">Pre-recorded answers</h3>

                <p>If the candidate has answered an interview question in the past, they are allowed to take a look at their pre-record, and if they prefer, they can use them for their ongoing interview.</p>

              </div>
          </div>

        </div>

        <div className="horizontal rotate">

          <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>

              <img src={FeatureThree} alt="VidBib's a library for your answers feature" style= { { width: '100%', borderRadius: 0 } } />
              <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
                <h3 className="section-description black">A library for your answers</h3>
                <p>If the candidate has answered an interview question in the past, they are allowed to take a look at their pre-record, and if they prefer, they can use them for their ongoing interview.</p>
              </div>
          </div>

          <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
              <img src={FeatureFour} alt="VidBib's displays your best feature" style= { { width: '100%', borderRadius: 0 } } />
              
              <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
                <h3 className="section-description black">Displays your best</h3>

                <p>Job seekers can share introduction videos, and "pre-answers" to interview questions publicly on their personal pages. Sharing those pages with the hiring responsible significantly reduces the time spent on pre-screening calls or even interviews.</p>

              </div>
          </div>

        </div>

        <div className="horizontal rotate">

          <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>

              <img src={FeatureFive} alt="VidBib's only the best that matches your skills feature" style= { { width: '100%', borderRadius: 0 } } />
              <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
                <h3 className="section-description black">Only the best that matches your skills</h3>
                <p>External evaluators can see the external evaluation ads that match their skill sets, not wasting time on unfit job listings.</p>
              </div>
          </div>

          <div style = { { display: 'flex', flex: 1 }}>

          </div>

        </div>


      </div>


    </section>
    </>
    
  )
}
