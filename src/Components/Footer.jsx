import React from 'react'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer>
        <p>Designed & coded by Göksu Dayan</p>
        <div className="footer-contact">
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
    </footer>
  )
}
