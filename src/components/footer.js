import React from 'react'
import '../css/style.css'

const footer = () => {
   return (
      <>
         <div className={'footer-div'}>
            <h1 id={'footer-title'}>
               <a href="/getInTouch">Get in touch</a>
            </h1>
            <p id={'footer-body'}>
               Say <a href="_blank">Hi</a> and find us on LinkedIn
            </p>
         </div>
      </>
   )
}

export default footer
