import React from 'react'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

export default function Contact( {no="01"}) {
  return (
    <section className="section-container" id="contact">
        <SectionHeader description={`${no} / ${no} | CONTACT`} title="Get in Touch" />

        <div className="bento-card-container">
            <a href="mailto:hello@goksudayan.com" style = { { width: '100%' }}>
                <div className="bento-card" id="Email" style = { { width: '100%' }}>
                    <div className="contact-animation">
                        <Icon icon="Email" size={300} />
                    </div>
                    <h1>Email</h1>
                    <p className="only-desktop">My preferred method of communication</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/goksudayan" rel="noreferrer" target="_blank" style = { { width: '100%' }}>
                <div className="bento-card" id="LinkedIn" style = { { width: '100%' }}>
                    <div className="contact-animation">
                        <Icon icon="LinkedIn" size={300} />
                    </div>
                    <h1>LinkedIn</h1>
                    <p className="only-desktop">The world's largest network for professionals</p>
                </div>
            </a>
        </div>

        <div className="bento-card-container contacts">
            
            <a href="https://goksudayan.medium.com" rel="noreferrer" target="_blank" style = { { width: '100%' }}>
                <div className="bento-card bento-card-contact" id="Medium">
                    <div className="contact-animation">
                        <Icon icon="Medium" size={100} />
                    </div>
                    <h2>Medium</h2>
                </div>
            </a>

            <a href="https://calendly.com/goksudayan/meeting-with-goksu-dayan" rel="noreferrer" target="_blank" style = { { width: '100%' }}>
                <div className="bento-card bento-card-contact" id="Calendly">
                    <div className="contact-animation">
                        <Icon icon="Calendly" size={70}/>
                    </div>
                    <h2>Calendly</h2>
                </div>
            </a>

            <a href="https://github.com/goksudayan" rel="noreferrer" target="_blank" style = { { width: '100%' }}>
                <div className="bento-card bento-card-contact" id="Github">
                    <div className="contact-animation">
                        <Icon icon="Github" size={85}/>
                    </div>
                    <h2>Github</h2>
                </div>
            </a>

            <a href="https://dribbble.com/goksudayan" rel="noreferrer" target="_blank" style = { { width: '100%' }}>
                <div className="bento-card bento-card-contact" id="Dribbble">
                    <div className="contact-animation">
                        <Icon icon="Dribbble" size={85}/>
                    </div>
                    <h2>Dribbble</h2>
                </div>
            </a>
        </div>

    </section>

  )
}
