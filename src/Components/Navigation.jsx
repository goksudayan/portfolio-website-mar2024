import React, { useState } from 'react'
import '../styles/style.css'
import Logo from '../Assets/gd-profile.webp'
import { HashLink as Link } from 'react-router-hash-link'
import Divider from './Divider'
import { FaPlus, FaBars } from "react-icons/fa";
import Icon from './Icon'

export default function Navigation() {

  const [navShown, setNavShown] = useState(false)

  const toggleNavigation = () => {
    setNavShown(!navShown)
  }
    
  return (
    <nav id="nav">

      <div className="nav-top">
        <Link to="/" className="nav-top-brand">
          <img src={Logo} alt="Göksu Dayan"/>
        </Link>
        <div className="nav-icon" onClick={toggleNavigation}>
          <FaBars />
        </div>
        
      </div>

      <div className={`shown ${navShown ? 'open' : ''}`}>
        <div className="nav-brand">
            <img src={Logo} alt="Göksu Dayan"/>
            <Link to="/" className="nav-brand">
                <h1>Göksu Dayan</h1>
            </Link>
        </div>
        <div className="nav-menu">
            <Divider color="white"/>
            <Link smooth to="/" onClick={toggleNavigation}><p>Home</p></Link>
            <Divider color="white"/>
            <Link smooth to="/#work" onClick={toggleNavigation}><p>Work</p></Link>
            <Divider color="white" />
            <Link smooth to="/#about" onClick={toggleNavigation}><p>About</p></Link>
            <Divider color="white" />
            <a href="https://www.goksudayan.com/goksu-dayan-resume.pdf"><p>Resume</p></a>
            <Divider color="white" />
            <div className="nav-contact">
              <a href="mailto:hello@goksudayan.com">
                    <Icon icon="Email" />
              </a>

              <a href="https://www.linkedin.com/in/goksudayan" rel="noreferrer" target="_blank">
                <Icon icon="LinkedIn" />
              </a>
            
              <a href="https://goksudayan.medium.com" rel="noreferrer" target="_blank">
               <Icon icon="Medium" />
              </a>

              <a href="https://github.com/goksudayan" rel="noreferrer" target="_blank">
               <Icon icon="Github" />
              </a>

            </div>
        </div>
        <div className="close-nav" onClick={toggleNavigation}>
          <FaPlus />
        </div>
      </div>
    </nav>
  )
}
