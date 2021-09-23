import React from 'react'
import Logo from '../images/Accesss-Autonomy-Logo.ico'

const nav = () => {
   return (
      <div className="nav-main">
         <div id={'nav-main-logo'}>
            <img src={Logo}></img>
         </div>
         <ul id={'nav-main-list'}>
            <li>
               <i className="fas fa-lg fa-trash-alt"></i>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   )
}

export default nav
