import React from 'react'
import Logo from '../images/Accesss-Autonomy-Logo.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faAddressCard, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const nav = () => {
   return (
      <div className="nav-main">
         <div id={'nav-main-logo'}>
            <img src={Logo}></img>
         </div>
         <ul id={'nav-main-list'}>
            <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
         </ul>
         <ul id={'nav-main-social'}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
         </ul>
      </div>
   )
}

export default nav
