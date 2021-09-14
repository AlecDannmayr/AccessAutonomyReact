import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

const footer = () => {
   return (
      <>
         <div className={'footer-div'}>
            <Link to="./getintouch">
               <h1 id={'footer-title'}>Get in touch</h1>
            </Link>
            <p id={'footer-body'}>Say Hi, and find us on LinkedIn</p>
         </div>
      </>
   )
}

export default footer
