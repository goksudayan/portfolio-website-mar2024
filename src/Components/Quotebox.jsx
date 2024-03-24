import React from 'react'
import Icon from './Icon'

export default function Quotebox( {type, quote, person }) {
  return (
    <div className={type === "testimonial" ? "testimonial" : "quotebox"}>
        { type === "testimonial" ? <h1 className="archived-title">Testimonial</h1> : <h1 className="archived-title">Quote</h1>}
        <div className="quote-sign">
            <Icon icon="Testimonial" size={100} />
        </div>
        <blockquote>
          {quote}
        </blockquote>
        {person ? <p>— {person}</p> : null }
    </div>
  )
}
