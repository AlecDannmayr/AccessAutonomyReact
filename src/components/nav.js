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
            <img src={Logo} alt="AccessAutonomy Logo"></img>
         </div>
         <div id={'nav-main-list'}>
            <Link to="/">
               <p>Home</p>
            </Link>
            <Link to="/about">
               <p>about</p>
            </Link>
            <Link to="/projects">
               <p>Projeects</p>
            </Link>
            <Link to="/blog">
               <p>Blog</p>
            </Link>
            <Link to="/contacts">
               <p>contact</p>
            </Link>
            <a href="https://github.com/AlecDannmayr" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/company/12601742/admin/" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
         </div>
      </div>
   )
}

export default nav
