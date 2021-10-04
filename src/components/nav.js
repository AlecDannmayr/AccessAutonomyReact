import React from 'react'
import Logo from '../images/Accesss-Autonomy-Logo.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faAddressCard, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const nav = () => {
   return (
      <div className="nav-main">
         <div id={'nav-main-logo'}>
            <img src={Logo}></img>
         </div>
         <ul id={'nav-main-list'}>
            <Link to="/intro">
               <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon>
            </Link>
            <Link to="/about">
               <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            </Link>
            <Link to="/projects">
               <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            </Link>
            <Link to="/contacts">
               <FontAwesomeIcon id={'list-fourth-item'} icon={faEnvelope}></FontAwesomeIcon>
            </Link>
         </ul>
         <ul id={'nav-main-social'}>
            <a href="https://github.com/AlecDannmayr" target="_blank">
               <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/company/12601742/admin/" target="_blank">
               <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
         </ul>
      </div>
   )
}

export default nav
