import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

const contacts = () => {
   return (
      <div className={'footer'}>
         <Link to="./getintouch">
            <h1 id={''}>Get in touch</h1>
         </Link>
         <p id={''}>Say Hi, and find us on LinkedIn</p>
         <iframe width="718" height="500" src="https://maps.google.com/maps?q=20%20liberty%20bridge%20road%20&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
   )
}

export default contacts
