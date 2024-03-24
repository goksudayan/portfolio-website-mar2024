import React from 'react'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Contact from '../Components/Contact-old'

import FocusmateImage from '../Assets/focusmate-card.webp'
import ReportVideoIssue from '../Assets/focusmate-report-video-issue.webp'
import ReportVideoSolution from '../Assets/focusmate-report-video-solution.webp'
import LeaveSessionSolution from '../Assets/focusmate-leave-session-solution.webp'
import SessionSyncIssueOne from '../Assets/focusmate-session-sync-01.webp'
import SessionSyncIssueTwo from '../Assets/focusmate-session-sync-02.webp'
import SessionSyncSolution from '../Assets/focusmate-session-sync-solution.webp'
import ToTop from '../Components/ToTop'
import { Helmet } from 'react-helmet';


export default function Focusmate() {
  return (
    <>
    <Helmet>
      <title>Göksu Dayan | Case study: Focusmate</title>
    </Helmet>
    <ToTop />
    <section className="section-container" id="case-study-work">


      <div className="case-study-header" id="focusmate">
        <h1>Focusmate</h1>
        <p>Virtual coworking for getting anything done</p>
        <br />
        <br />
        <img src={FocusmateImage} />
      </div>

      <SectionHeader description={"01 / 05 | INTRODUCTION"} title="Project Overview" />

      <div className="content-container" id="overview">

        <div className="bento-introduction">
          <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Disclaimer</h3>
          <p>Please note that the design deliverables included in this case study are for reference only and may not match the final designs used by Focusmate.</p>
        </div>

        <p><a href="https://www.focusmate.com/" rel="noreferrer" target="_blank">Focusmate</a> changes the way you work by connecting you to other professionals who have committed to being accountable for finishing their most important work. You choose a time to work, and Focusmate pairs you with an accountability partner for a live, virtual coworking session that will keep you on task.</p>
        
        <p>As part of my application for a product designer position at Focusmate which was submitted on March 22, 2022, I was tasked with <span className="highlighted-text">proposing changes to their platform.</span> According to a heuristic evaluation study I conducted, I found zero P0 issues, nine P1 issues, and sixteen P2 issues. I selected three issues to address. It should be noted that all of these issues existed as of March 22, 2022, but some or all may have since been resolved by the Focusmate team. Kudos to them!</p>
      
      </div>

      <SectionHeader description={"02 / 05 | Change I"} title="Report Video" />

      <div className="content-container" id="report-video">

      <h1 className="archived-title">Issue</h1>

        <p>When a user clicks the Report Video Issue button, without any other prompt, she gets the screen below:</p>

        <div className="content-container gray img-container">
          <img src={ReportVideoIssue} alt="The issue with Focusmate's Report Video feature" style = { { width: '100%', borderRadius: 0 }} />
        </div>


        <div className="list-container">
        
          <p>There are several reasons why this results in a poor user experience:</p>

          <ol>
            <li>The user is not provided with any information about the issue and may not even know if they are supposed to know what the issue is.</li>
            <li>The user is not asked for their consent to submit their data, which can be confusing and disturbing.</li>
            <li>It is unclear what information is being reported to Focusmate, and whether it includes screen recordings, browser metadata, or study session data.</li>
            <li>Some users may click the button by accident, creating unnecessary work for the Focusmate team.</li>
            <li>The message "Thanks for reporting this video issue" implies that there is an issue, which may not always be the case.</li>
          </ol>
        </div>


        <p>Clicking the Yes button directs the user to a Typeform survey, which can be confusing as the user does not know if their initial report was sufficient.</p>

        <h1 className="archived-title">Solution</h1>

        <div className="content-container gray img-container">
          <img src={ReportVideoSolution} alt="The solution Göksu came up with regarding Focusmate's Report Video feature" style = { { width: '100%', borderRadius: 0}} />
        </div>


      </div>

      <SectionHeader description={"03 / 05 | Change II"} title="Leave Session" />

      <div className="content-container" id="leave-session">

      <h1 className="archived-title">Issue</h1>

        <p>Clicking the "Leave" button during a session directs the user to the dashboard without confirmation, which can be distracting for them and their session partner.</p>

        <h1 className="archived-title">Solution</h1>

        <p>When the user clicks the "Leave" button, a modal should appear to confirm their intention to leave the current session before directing them to the dashboard.</p>

        <div className="content-container gray img-container">
          <img src={LeaveSessionSolution} alt="The solution Göksu came up with regarding Focusmate's Leave Session feature" style = { { width: '100%', borderRadius: 0 }} />
        </div>

      </div>



      <SectionHeader description={"04 / 05 | Change III"} title="Session Sync" />

      <div className="content-container" id="session-sync">

      <h1 className="archived-title">Issue</h1>

        <p>When a user schedules a study session, they can specify the task they plan to accomplish, and a "Focusmate Session" task is added to their external calendar. However, since the task input is not synchronized with the external calendar, this feature has limited usefulness.</p>

        <p>It is assumed that most Focusmate power users follow strict time management systems and maintain their daily plans and calendars, including entering their tasks into their preferred digital calendar such as Google Calendar.</p>

        <div className="content-container gray img-container">
          <img src={SessionSyncIssueOne} alt="The issue with Focusmate's Session Sync feature" style = { { width: '100%', borderRadius: 0}} />
        </div>

        <div className="content-container gray img-container">
          <img src={SessionSyncIssueTwo} alt="The issue with Focusmate's Session Sync feature" style = { { width: '100%', borderRadius: 0 }} />
        </div>

        <h1 className="archived-title">Solution</h1>

        <div className="content-container gray img-container">
          <img src={SessionSyncSolution} alt="The solution Göksu came up with regarding Focusmate's Session Sync feature" style = { { width: '100%', borderRadius: 0 }} />
        </div>
      </div>


    </section>

    </>
  )
}
