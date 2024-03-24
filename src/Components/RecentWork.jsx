import React from 'react'
import SectionHeader from './SectionHeader'
import TomoImage from '../Assets/tomo-card.webp'
import KatchImage from '../Assets/katch-card.webp'
import SismoImage from '../Assets/sismo-card.webp'
import ParoImage from '../Assets/paro-card.webp'
import CaseStudyArchived from './CaseStudyArchived'
import Quotebox from './Quotebox'
import { Link } from 'react-router-dom'


export default function RecentWork() {
    return (
        <section className="section-container" id="work">

            <SectionHeader description="02 / 04 | RECENT WORK" title="What I've been up to recently" />

            <CaseStudyArchived
                projectName = "Kairos"
                projectDescription = "Coming soon"
                link = "https://www.trykairos.com"
                newWindow={true}
            />

            <Quotebox
                type = "testimonial"
                quote = {<p><span className="highlighted-text">Goksu demonstrated strong analytical skills</span> and could easily grasp the whole user journey from the first day of his work, which really impressed me. Thanks to his user empathy skills he helped us redesign the navigation of the app and worked on a slack app which is still to be implemented. <span className="highlighted-text">Goksu can challenge ideas that make him a great team member and I can envision he is going to have a great career in user experience design.</span></p>}
                person = "Anna Blasiak, Head of Product at Katch"
            />

            <div className="case-study-cards">

                <Link to="/katch">
                    <div className="case-study-header in-home-page" id="katch">
                        <img src={KatchImage} />
                    </div>
                </Link>

                <Link to="/sismo">
                    <div className="case-study-header in-home-page" id="sismo">
                        <img src={SismoImage} />
                    </div>
                </Link>

                <Link to="/tomo">
                    <div className="case-study-header in-home-page" id="tomo">
                        <img src={TomoImage} />
                    </div>
                </Link>

                <Link to="/paro">
                    <div className="case-study-header in-home-page" id="paro">
                        <img src={ParoImage} />
                    </div>
                </Link>

            </div>




            <CaseStudyArchived
                projectName="Focusmate"
                projectDescription= "Virtual coworking for getting anything done"
                link = "/focusmate"
            />

            <CaseStudyArchived
                projectName = "Vybe Together"
                projectDescription = "Find your moment"
                link = "https://www.figma.com/proto/Tdkq39fkgiwzd1AMadnsTC/Vybe-Together-Take-home-Exercise?node-id=0%3A1&viewport=510%2C631%2C0.38&scaling=scale-down&starting-point-node-id=5%3A14"
                newWindow = {true}
            />

            <CaseStudyArchived
                projectName = "Vidbib"
                projectDescription = "A new hiring economy"
                link = "/vidbib"
            />

            <CaseStudyArchived
                projectName = "Nyala"
                projectDescription = "Your gateway for digital assets"
                link = "/nyala"
            />

            <CaseStudyArchived
                projectName = "3D Predict"
                projectDescription = "Design test"
                link = "https://www.figma.com/proto/pTbkF94XBHngUVG9IiebPO/G%C3%B6ksu-Dayan-3D-Predict-Design-test?type=design&node-id=0-1&viewport=154%2C499%2C0.08&t=WtgMZSP8vf4ycGda-0&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                newWindow = {true}
            />



        </section>
    )
}
