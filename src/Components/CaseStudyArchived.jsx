import React from 'react'

export default function CaseStudyArchived( { projectName, projectDescription, link = "#", newWindow, showImage=false, imageLink}) {
  return (
    <a href={link} rel="noreferrer" className="case-study-archived" id={projectName} target={newWindow ? "_blank" : null}>
        <h1 className="archived-title">{projectName}</h1>
        <p className="only-desktop">{projectDescription}</p>
    </a>
    )
}
