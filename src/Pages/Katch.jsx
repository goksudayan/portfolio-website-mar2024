import React from 'react'
import KatchImage from '../Assets/katch-card.webp'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Icon from '../Components/Icon'
import Quotebox from '../Components/Quotebox'
import Contact from '../Components/Contact-old'
import Divider from '../Components/Divider'


import FormsOfAvailability from '../Assets/katch-forms-of-availability.webp'
import KatchSlack from '../Assets/katch-slack.gif'
import AvailabilityHours from '../Assets/katch-availability-hours.webp'
import MarkingAsDone from '../Assets/katch-marking-as-done.gif'
import SendMeetingRequest from '../Assets/katch-send-meeting-request.gif'
import ToTop from '../Components/ToTop'
import { Helmet } from 'react-helmet'

export default function Katch() {
  return (
    <>
    <Helmet><title>Göksu Dayan | Case study: Katch</title></Helmet>

    <ToTop />
    <section className="section-container" id="case-study-work">

    <div className="case-study-header" id="katch">
      <p>Flexible meetings with real time availability</p>
      <h1>Katch</h1>
      <br />
      <br />
      <img src={KatchImage} />
    </div>

      <SectionHeader description={"01 / 05 | Introduction"} title={"Project Overview"}/>

      <div className="content-container" id="overview">

        <div className="bento-introduction">
          <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Disclaimer</h3>
          <p>Please note that the design deliverables included in this case study are for reference only and may not match the final designs used by Katch.</p>
        </div>

        <p><a href="https://www.gokatch.com" rel="noreferrer" target="_blank">Katch</a> is a US-based early-stage startup with less than 20 employees. At the time I joined the company as the sole designer on the team, the product was in the private beta stage.</p>




        <h1 className="archived-title">Outcomes</h1>

        <div className="horizontal rotate">
          <div className="bento-introduction gray">
            <Icon icon="Slack" size={70}/>
            <p>Designed a Slack prototype as at the time we deemed it to be the ideal medium to conduct user research and observe user behaviors.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Apple" size={70}/>
            <p>Re-designed several primary features for the Katch iOS app and conducted discussion sessions with the Head of Product and the dev team.</p>
          </div>
        </div>

      </div>

      <SectionHeader description={"02 / 05 | TESTIMONIAL"} title="What they say about my work" />

      <Quotebox
        type = "testimonial"
        quote = {<p><span className="highlighted-text">Goksu demonstrated strong analytical skills</span> and could easily grasp the whole user journey from the first day of his work, which really impressed me. Thanks to his user empathy skills he helped us redesign the navigation of the app and worked on a slack app which is still to be implemented. <span className="highlighted-text">Goksu can challenge ideas that make him a great team member and I can envision he is going to have a great career in user experience design.</span></p>}
        person = "Anna Blasiak, Head of Product at Katch"
      />
      <SectionHeader description={"03 / 05 | SLACK APP"} title="Experimenting with a Slack app" />

      <div className="content-container" id="slack-app">

        <h1 className="archived-title">Introduction</h1>

        <p>After a quick onboarding that brought me up to speed, getting me to know about the issues that the product was facing at the time, the Head of Product and I conducted several brainstorming sessions to decide on the best medium to test the product-market fit and primary/secondary features.</p>

        <div className="important-div">
          <p>We concluded that a Slack app would be the ideal medium as it is easy to prototype, it is relatively quick to develop, and, most importantly, most of our target audience would use Slack as part of their professional life regularly.</p>
        </div>



        <h1 className="archived-title">Two Forms of Availability</h1>

        <div className="content-container gray img-container">
          <img src={FormsOfAvailability} alt="Two different forms of availability" style = { { width: '100%' } }/>
          <p>Two forms of availability</p>

        </div>


        <p>Around the time we had just started working on this Slack app, we considered two different forms of availability that I called <i>local availability</i> and <i>global availability</i>.</p>

        <div className="horizontal rotate">
          <div className="bento-introduction gray">
            <Icon icon="LocalAvailability" size={70}/>
            <p>
              <span className="highlighted-text">Local availability:</span> A person would be locally available when they signal that they are available to the people who sent meeting requests at a prior date or to a pre-selected group of people.
            </p>
          </div>

          <div className="bento-introduction gray">
            <Icon icon="GlobalAvailability" size={70}/>
            <p>
              <span className="highlighted-text">Global availability:</span> A person would be globally available when they signal that they are available to everyone. This could be called "unselective availability" as well.
            </p>
          </div>
        </div>
        
        <div className="horizontal rotate">
          
          <img src={KatchSlack} alt= "The Slack prototype designed for Katch" style= { { width: '48%', border: '1px black solid'} } className="only-desktop" />

          <img src={KatchSlack} alt= "The Slack prototype designed for Katch" style= { { width: '100%', border: '1px black solid'} } className="only-mobile" />
          

          <div className="content-container" style = { { width: '100%'}}>
            <p>
              The reason why we considered this concept of local availability was that in some very large companies, signaling that you are (globally) available to everyone on your Slack channel means that hundreds of people would be able to request meetings, making it extremely hard for the user to maintain.
            </p>

            <p>
              For reasons that I was not informed of at the time, we were asked to quit working on the Slack app and move to work on the iOS app that the company was already developing at the time I joined.
            </p>

          </div>

        </div>

      </div>

      <SectionHeader description={"04 / 05 | IOS APP"} title="The next frontier: iOS" />

      <div className="content-container" id="ios-app">

        <p>Shortly after, the executive team set a date for <a href="https://www.producthunt.com/upcoming/katch" rel="noreferrer" target="_blank">a Product Hunt launch</a>, per some changes in the company's short-term plan, and to make sure that we do not miss the deadline, we had to work in a very agile manner, redesigning primary features and preparing/explaining handoffs to engineers in an almost bi-daily manner to complete the Katch iOS app.</p>

        <p>As my seniors were worried that the product was bloated with many features, the Head of Product and I were asked to work on and re-design some hand-picked features that were considered necessary for the optimal user experience. Those three key features were Availability Hours, Marking as Done, and Sending Meeting Requests.</p>

        <div className="horizontal rotate">

        <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
          <div className="horizontal" style = { { justifyContent: 'stretch' }}>
            <img src={AvailabilityHours} style= { { width: '40%', background: 'none' } } alt="Katch's Availability Hours feature" />
            <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
              <h3 className="section-description black">Availability Hours</h3>
              <p>Availability Hours helps the user to get more timely reminder notifications from the Katch iOS app.</p>
              <p>Thanks to a new user flow we came up with, our users no longer need to turn on/off this feature, enhancing the user experience immensely.</p>
            </div>
          </div>
        </div>

        <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
          <div className="horizontal">
            <img alt="Katch's Marking as Done feature" src={MarkingAsDone} style= { { background: 'none', width: '40%' } } />
            <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'flex-start', padding: '0.5em'}}>
              <h3 className="section-description black">Marking as Done</h3>

              <p>To make sure that the user interface is not bloated with inactive meeting request cards, we enabled our users to mark them as done and remove them from their interfaces.</p>

            </div>
          </div>

          
        </div>

        



      </div>

      <div className="horizontal rotate">

      <div className="bento-introduction" style= { { backgroundColor: 'white', padding: '1.5em', flex: 1}}>
          <div className="horizontal">
            <img src={SendMeetingRequest} alt="Katch's Send Meeting Request feature" style= { { background: 'none', width: '40%' } } />
            <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'flex-start', padding: '0.5em'}}>
              <h3 className="section-description black">Send Meeting Request</h3>
              <p>More on this later.</p>
            </div>
          </div>
        </div>

      <div style = { { flex: 1} }></div>

      </div>




      </div>

    </section>


  </>


  )
}
