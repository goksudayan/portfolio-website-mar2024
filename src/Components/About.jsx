import React from 'react'
import SectionHeader from './SectionHeader'
import Divider from './Divider'
import Button from './Button'
import ProfilePhoto from '../Assets/gd-profile.webp'
import CurrentDate from './CurrentDate'

export default function About() {
  return (
    <section className="section-container" id="about">
        <SectionHeader description="03 / 04 | ABOUT" title="Who is this Pokémon?" />
        <div className="about-container">
            
            <div className="about-left">
                <img src={ProfilePhoto} alt="Göksu Dayan" style = { { borderRadius: '1.5em' , backgroundColor: '#F2A60D', width: '9em', marginBottom: '.5em'}} />
                <Divider />
                <div style = { { display: 'flex', flexDirection: 'column', gap: '0.5em', width: '100%'}}>
                    <h2>Hi, I am Göksu.</h2>
                    <h1>Delighted to meet you!</h1>
                </div>

                <Divider />
                <p>With my strong problem-solving abilities, honed through years of academic study, I bring a unique and innovative perspective to your product and design teams. My product design skills have been recognized as being among the best in the world by <a href="https://app.uxcel.com/assessment-report/PY2C1KNT" target='_blank' rel="noreferrer">Uxcel</a>.</p>
                <p>Currently, I am immersed in developing <a href="https://www.trykairos.com" target="_blank" rel="noreferrer">Kairos</a>, a time management tool, leveraging my skills in design, business, and coding, while eagerly pursuing the next place I could call my second home. This entrepreneurial endeavor reflects my commitment to pushing creative boundaries and delivering impactful solutions.</p>
                <p>In my most recent role as a UI/UX designer at <a href="https://www.logiswift.com" target="_blank" rel="noreferrer">Logiswift</a>, a B2B logistics software solutions provider, I played a pivotal role in enhancing the design of both public and private materials for the marketing and sales teams. Additionally, as the first design here in the company's history, I collaborated with C-level stakeholders to design the new version of the flagship product.</p>
                <p>Armed with experience from three startups, I am confident in my ability to thrive in smaller, agile environments where I can make a substantial impact on product development. Furthermore, my proficiency in HTML, CSS, SaSS, Vanilla JS, React, and React Native positions me to contribute to the front-end development, offering a valuable asset to your team.</p>
                <Divider />
                <div className="project-info">
                    <h3 className="section-description" style= { { textTransform: "uppercase" }}>Based In</h3>
                    <div className="list-container">
                       <CurrentDate />
                    </div>
                </div>
                <Divider />
            </div>


        </div>
    </section>
  )
}