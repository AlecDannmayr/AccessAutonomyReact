import React from 'react'
import './style.css'

const copyright = () => {
   return (
      <>
         <div className={'copyright-div'}>
            <p>Copyright© {new Date().getFullYear()} All rights reserved.</p>
         </div>
      </>
   )
}

export default copyright
