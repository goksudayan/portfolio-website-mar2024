import React from 'react'

export default function IntroductionBento( { title, text, onlyDesktop=false }) {
  return (
    <div className={`bento-introduction ${onlyDesktop ? 'only-desktop' : ''}`} id="title">
        <h3 className="section-description" style= { { textTransform: "uppercase" }}>{title}</h3>
        {text}
    </div>
  )
}
