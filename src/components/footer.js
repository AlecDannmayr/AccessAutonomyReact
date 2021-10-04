import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

const footer = () => {
   return (
      <div className={'footer'}>
         <Link to="./getintouch">
            <h1 id={''}>Get in touch</h1>
         </Link>
         <p id={''}>Say Hi, and find us on LinkedIn</p>
      </div>
   )
}

export default footer
