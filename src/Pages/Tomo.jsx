import React from 'react'
import CaseStudyCard from '../Components/CaseStudyCard'
import SectionHeader from '../Components/SectionHeader'
import Icon from '../Components/Icon'
import Contact from '../Components/Contact-old'
import ToTop from '../Components/ToTop'

import TomoImage from '../Assets/tomo-card.webp'
import Diary from '../Assets/tomo-diary.webp'
import Anydo from '../Assets/anydo-logo.webp'
import GoogleCalendar from '../Assets/google-calendar-logo.webp'
import MicrosoftTodo from '../Assets/microsoft-to-do-logo.webp'
import Reclaim from '../Assets/reclaim-logo.webp'
import Todoist from '../Assets/todoist-logo.webp'
import Untime from '../Assets/untime-logo.avif'
import YourSchedule from '../Assets/tomo-your-schedule.webp'
import AutomatedSchedule from '../Assets/tomo-schedule.gif'
import FreeMind from '../Assets/tomo-free-mind.webp'
import Quotebox from '../Components/Quotebox'

import { Helmet } from 'react-helmet'

export default function Tomo() {
  return (

    <>
    <Helmet><title>Göksu Dayan | Case study: Tomo</title></Helmet>

    <ToTop />

    <section className="section-container" id="case-study-work">

    <div className="case-study-header" id="tomo">
      <h1>Tomo</h1>
      <p>Time management made easiest</p>
      <br />
      <br />
      <img src={TomoImage} />
    </div>

      <SectionHeader description={"01 / 05 | Introduction"} title="Project Overview" />

      <div className="content-container" id="overview">

      <div className="bento-introduction">
          <h3 className="section-description" style= { { textTransform: 'uppercase', letterSpacing: '0.3em' }}>Information</h3>
          <p>Currently, I am building a time management tool, Kairos, which is based on some of the premises and business propositions that Tomo confirmed. If interested, please feel free to check Kairos <a href="https://www.trykairos.com" rel="noreferrer" target="_blank" className="text-white">here</a>.</p>
      </div>

      <h1 className="archived-title">Problem Statement</h1>

        <p>As remote work gets more and more widespread every day, time management is more important than ever; yet the current time management and productivity tools still face the following problems, resulting in a poorer user experience than users want and deserve:</p>

        <div className="horizontal rotate">
          <div className="bento-introduction gray">
            <Icon icon="Confused" size={70}/>
            <p>Proper time management became a task on its own.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Bored" size={70}/>
            <p>When sh*t happens, it is very tedious to re-make your schedule.</p>
          </div>
          <div className="bento-introduction gray">
            <Icon icon="Robot" size={70}/>
            <p>Time management tools work for your tasks, not for you.</p>
          </div>
        </div>

        <h1 className="archived-title">Solution</h1>

        <p>A time management product with an <span className="highlighted-text">automated dynamic scheduling</span> feature that (re-)makes your schedule for you, based on your energy level, and what task categories you want to work on for the day, <span className="highlighted-text">with only a few clicks</span>, resulting in <span className="highlighted-text">a significant reduction in time spent on time management.</span></p>

      </div>

      <SectionHeader description={"02 / 05 | RESEARCH"} title="Tomo kicks off!" />

      <div className="content-container" id="research">

        <h1 className="archived-title">Preliminary User Interviews</h1>


        <div className="list-container">
          <p>I have kicked off this project with preliminary user interviews with the following goals:</p>
          <ol>
            <li>To understand how people manage their time,</li>
            <li>To learn what tools they use, and how they use them,</li>
            <li>To learn about the problems they encounter, and</li>
            <li>To understand what their ideal time management tool would be like.</li>

          </ol>
        </div>



        <p>During this research phase, I had <span className="highlighted-text">three very lengthy user interviews and several relatively short interviews.</span></p>

        <div className="content-container gray img-container">
          <img src={Diary} style = { { width: '100%' }} alt="An interviewee's diary" />
          <p>Quote from an interviewee's diary</p>
        </div>

        <div className="list-container">
          <p>Key learnings from those preliminary user interviews consist of:</p>
          <ol>
            <li>People who consider their lives to be "disordered" prefer to not make any schedules and not use any time management tools, even if they think that they would benefit greatly from them.</li>
            <li>Daily energy levels and moods are very important factors for people to consider while making their daily schedules.</li>
            <li>It is extremely tedious to bring schedules to date when users do not or cannot regularly update them.</li>
          </ol>
        </div>


        <h1 className="archived-title">Competitive analysis</h1>

        <p>As I had planned to run a solo design sprint of two weeks from zero to the first complete prototype, and I was satisfied with the outcome of my preliminary interviews, I decided to spend the rest of the time allocated for research on extensive competitive analysis.</p>

        <div className="list-container">
          <p>The purposes of this competitive analysis were:</p>

          <ol>
            <li>To understand the common layout patterns they use,</li>
            <li>To learn what features users of time management tools look for,</li>
            <li>To learn more about people's current problems with their time management, and</li>
            <li>To see what solutions were proposed for those common problems and how the problems I had learned about during the preliminary user interviews were attempted to be solved.</li>
          </ol>
        </div>


        <p>During this extensive competitive analysis study, I have checked almost every single productivity, time management, to-do list, etc. product on ProductHunt and Google Play Store to understand the landscape. Among the crowd, those that deserve at least honorable mentions are Todoist, Reclaim.ai, Untime, Any.do, Google Calendar, and Microsoft To-Do.</p>
        


        <div className="list-container">
          <p>Key learnings from the competitive analysis study consist of:</p>

          <ol>
            <li>All time management tools ignore the fact that sh*t happens.</li>
            <li>Making your daily schedule truly became a task on its own.</li>
            <li>Most time management tools create a cognitive overload on their users.</li>
            <li>Most time management tools use very similar user interfaces.</li>
          </ol>
        </div>

        <p>Just after I had completed the first iteration of Tomo's prototype, I had a chance to have a discussion with the CEO of quite a successful time management product that is about to launch a new product. Upon taking a look at the prototype I designed, they told me...</p>

        <Quotebox
          quote={<p>...Because in my experience getting people to use new productivity apps is really hard and having a completely different interface than to what they are used to, makes it harder.</p>}
        />

      </div>
    
      <SectionHeader description={"03 / 05 | Post-research work"} title="So, what now?" />

      <div className="content-container" id="so-what-now">

      <h1 className="archived-title">Synthesizing research findings</h1>

        <div className="important-div">
          <div className="list-container">
            <p>Based on my research, I have concluded that a time management product that I would be designing ought...</p>
            <ol>
              <li>to make the user's schedule based on their energy levels and moods,</li>
              <li>to be extremely easy to use and reduce the time spent on time management significantly,</li>
              <li>to allow the user to (re-)make their schedule based on their input with only a few clicks,</li>
              <li>to be there for the user when sh*t happens,</li>
              <li>not to clutter the user's mind with information unnecessary at any time, and</li>
              <li>to allow the user to focus on "one task at a time".</li>
            </ol>

          </div>
          </div>


        <h1 className="archived-title">Automatic dynamic scheduling enters!</h1>

        <p>While conducting competitive analysis, I came across some products with partially automated schedule making (e.g., <a href="https://www.reclaim.ai" target="_blank" rel="noreferrer">Reclaim.ai</a>), but <span className="highlighted-text">I noticed that they were not making the best use of a feature with a business opportunity with immense value.</span></p>

        <div className="important-div">
          <p>After a brainstorming process, I have come up with a task prioritization and sorting algorithm, computationally so simple, that even a beginner like me can code, which I call <span className="highlighted-text">Automated Dynamic Scheduling</span>.</p>

          <p>The algorithm re-queues user tasks based on user inputs (task actions, energy level, task categories) and task properties (due date and time, priority, and appx. time to complete), and further, this can be achieved only with a few clicks, any time the user wants.</p>

          <p>In cases where the algorithm has only partial information, the product would prompt the user, asking them to choose between equal options.</p>

          <p><span className="highlighted-text">So, the user would focus only on the current task which is the highest priority task with the closest deadline and would not be prompted by Tomo unless there is an absolute necessity, e.g., they will miss a deadline for another task if they do not complete their current task shortly.</span></p>
        </div>


        
        <Quotebox
          quote = {"A to-do list with just one task on it reflects a strategic and intentional choice about what you will do next, and continue to focus on until it's done. It might feel silly, but writing that one thing down on its own list is the key — it makes it a commitment that you're far more likely to follow through on. Make meaningful progress, one task at a time."}
          person = {"Peter Bregman"}
        />
        

      </div>

      <SectionHeader description={"04 / 05 | PRIMARY FEATURES"} title="What values Tomo brings to you"/>

      <div className="content-container" id="primary-features">

      <div className="horizontal rotate">

        <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
          <div className="horizontal">
            <img src={YourSchedule} alt="Tomo's Your Schedule feature" style= { { width: '40%' } } />
            <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
              <h3 className="section-description black">A schedule for you</h3>
              <p><span className="highlighted-text">Set your energy level to match how you feel, whether drained or energetic, and Tomo will adapt your schedule accordingly.</span></p>
              <p>With Tomo, managing your time becomes simple, flexible, and focused on what matters most, your work.</p>
            </div>
          </div>
        </div>

        <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
          <div className="horizontal">
            <img src={AutomatedSchedule} alt="Tomo's Automated Dynamic Scheduling Feature" style= { { width: '40%' } } className="no-bg" />
            <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
              <h3 className="section-description black">Automated dynamic scheduling</h3>

              <p><span className="highlighted-text">Tomo streamlines time management with just a few clicks</span>, and continuously adapts to your schedule as you complete tasks, ensuring you meet your goals.</p>

              <p>You no longer have to worry about unexpected events as Tomo has your back and adjusts your schedule for you.</p>

            </div>
          </div>
        </div>

      </div>

      <div className="horizontal rotate">


      <div className="bento-introduction" style= { { backgroundColor: 'white', flex: 1, padding: '1.5em'}}>
        <div className="horizontal">
          <img src={FreeMind} alt="Tomo's Frees Your Mind feature" style= { { width: '40%' } } />
          <div className="content-container" style= { { backgroundColor: 'white', justifyContent: 'center', padding: '0.5em'}}>
            <h3 className="section-description black">Frees your mind</h3>
            <p>Simplify your life with Tomo.</p>
            <p>No more frustrating tables, calendars, or endless scheduling. <span className="highlighted-text">Tomo only alerts you when necessary, freeing you to focus on the present.</span></p>
            <p>Trust Tomo to handle the future while you live in the moment.</p>
          </div>
        </div>
      </div>

      <div style = { { flex: 1 }}></div>

      </div>




</div>






    </section>

    </>
  )
}
