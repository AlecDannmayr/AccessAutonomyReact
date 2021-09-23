import React from 'react'
import Logo from '../images/Accesss-Autonomy-Logo.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const nav = () => {
   return (
      <div className="nav-main">
         <div id={'nav-main-logo'}>
            <img src={Logo}></img>
         </div>
         <ul id={'nav-main-list'}>
            <FontAwesomeIcon icon={['far', 'coffee']} />
         </ul>
      </div>
   )
}

export default nav
