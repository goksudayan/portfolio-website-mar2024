import React from 'react'
import Divider from './Divider'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function CaseStudyCard( {type, page="Case study", id, projectName, projectDescription, projectScope, projectPlatforms, projectTimeline, link, projectImage, bgDirection, children, showCTA=true}) {


    if ( type === "Secondary") {
        return (
            <Link to={link} style = { { width: '100%'}}>
                <div
                    className="bento-card case-study-bento-card"
                    style = {{
                        background: `url(${projectImage}) ${bgDirection} center`,
                        backgroundSize: 'cover',
                        width: '100%'
                    }}
                >
                </div>
            </Link>
        )
    }
    
    else if (page === "Homepage") {
        return (
            <Link to={link} style = { { flex: 1, padding: 0 }} id={id} className="case-study-card no-before-after">
                <img
                    src={projectImage}
                    className="case-study-image"
                    alt={projectName}
                    style = { { width: '100%', height: 'none' }}
                />
            </Link>
        )
    }

    else {
        return (
        <div className="case-study-card no-animation">

            <div className="case-study-card-left">
                <div className="project-header">
                    <h1 className="project-title">{projectName}</h1>
                    <Divider />
                    <p>{projectDescription}</p>
                </div>

                <div className="project-info">
                    <Divider />
                    {<p>Scope | {projectScope}</p>}
                    {<p>Platforms | {projectPlatforms}</p>}
                    {<p>Timeline | {projectTimeline}</p>}
                    <Divider />
                </div>

                { showCTA ? <Button text="View case study" link={link} /> : null }

            </div>

            
            
            {projectImage !== null ? (<div className="case-study-card-right">
                <img
                src={projectImage}
                className="case-study-image in-page"
                alt={projectName}
                style = { { height:'100%' } }/>

            </div>) : null}

        </div>
        )
    }
}
