import React from 'react'
import { FaEnvelope, FaReact, FaLinkedin, FaMedium, FaCalendar, FaGithub, FaDribbble, FaQuoteLeft, FaExclamation, FaSlack, FaPalette, FaPeopleArrows, FaPeopleGroup, FaRegCircleRight, FaRegCompass, FaRegCircleUp, FaCodeMerge, FaCirclePlay, FaDisplay, FaIdBadge, FaRegFaceRollingEyes, FaRegFaceGrimace, FaRegFaceMeh, FaArrowUp, FaApple } from 'react-icons/fa6'


export default function Icon({icon, size=30 }) {
    let IconComponent;
    
    switch(icon) {
        case 'Apple':
            IconComponent = FaApple
            break
        case 'Top':
            IconComponent = FaArrowUp
            break
        case 'Confused':
            IconComponent = FaRegFaceRollingEyes
            break
        case 'Bored':
            IconComponent = FaRegFaceGrimace
            break
        case 'Robot':
            IconComponent = FaRegFaceMeh
            break
        case 'Merge':
            IconComponent = FaCodeMerge
            break
        case 'Playful':
            IconComponent = FaCirclePlay
            break
        case 'Display':
            IconComponent = FaDisplay
            break
        case 'Badge':
            IconComponent = FaIdBadge
            break
        case 'Continuity':
            IconComponent = FaRegCircleRight
            break
        case 'MultiDirection':
            IconComponent = FaRegCompass
            break
        case 'DesignScalability':
            IconComponent = FaRegCircleUp
            break
        case 'LocalAvailability':
            IconComponent = FaPeopleArrows
            break
        case 'GlobalAvailability':
            IconComponent = FaPeopleGroup
            break
        case 'Slack':
            IconComponent = FaSlack
            break
        case 'Design':
            IconComponent = FaPalette
            break
        case 'Email':
            IconComponent = FaEnvelope
            break
        case 'LinkedIn':
            IconComponent = FaLinkedin
            break
        case 'Medium':
            IconComponent = FaMedium
            break
        case 'Calendly':
            IconComponent = FaCalendar
            break
        case 'Github':
            IconComponent = FaGithub
            break
        case 'Dribbble':
            IconComponent = FaDribbble
            break
        case 'Testimonial':
            IconComponent = FaQuoteLeft
            break
        case 'Disclaimer':
            IconComponent = FaExclamation
            break
        default:
            IconComponent = FaReact
    }
    return <IconComponent size={size} />
}
