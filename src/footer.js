import React from 'react'
import './style.css'

const footer = () => {
   return (
      <>
         <div className={'footer-div'}>
            <h1 id={'footer-title'}>
               <a href="./pages/getInTouch.js">Get in touch</a>
            </h1>
            <p id={'footer-body'}>
               Say <a href="_blank">Hi</a> and find us on LinkedIn
            </p>
         </div>
      </>
   )
}

export default footer
