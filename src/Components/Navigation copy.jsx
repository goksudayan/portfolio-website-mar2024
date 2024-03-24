import React from 'react'
import '../styles/style.css'
import Logo from '../Assets/gd-profile.png'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navigation() {
    
  return (
    <nav id="nav">
        <div className="nav-brand">
            <img src={Logo} alt="Göksu Dayan" style = { { height: '2em', backgroundColor: '#F2A60D', borderRadius: '50%' }}/>
            <Link to="/" className="brand-name">
                <p>Göksu Dayan</p>
            </Link>
        </div>
        <div className="nav-menu">
            
            <Link smooth to="/#work"><p>Work</p></Link>
            <Link smooth to="/#about"><p>About</p></Link>
            <a href="https://www.goksudayan.com/goksu-dayan-resume.pdf"><p>Resume</p></a>
            <Link smooth to="#contact"><p>Contact</p></Link>
        </div>
    </nav>
  )
}
