import React from 'react'
import './style.css'

const copyright = () => {
   return (
      <>
         <div className={'copyright-div'}>
            <div class="ocean">
               <div class="wave"></div>
               <div class="wave"></div>
            </div>
            <p>Copyright© {new Date().getFullYear()} All rights reserved.</p>
         </div>
      </>
   )
}

export default copyright
