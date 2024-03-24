import React from 'react'
import Icon from './Icon'

export default function ToTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
      <div className="to-top" style = { { position: 'fixed', zIndex: 10 }} onClick={scrollToTop}>
          <Icon icon="Top" size={20} />
      </div>
  )
}
