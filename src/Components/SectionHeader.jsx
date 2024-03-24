import React from 'react'
import Divider from './Divider'

export default function SectionHeader( { title, description }) {
  return (

    <div className="case-study-body-header">
        <h2 className="section-description">{description}</h2>
        {title ? <h1 className="section-title">{title}</h1> : null}
    </div>

  )
}
