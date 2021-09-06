import React from 'react'
import './shapeStyle.css'

function circle() {
   return (
      <svg id={'circle'}>
         <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
      </svg>
   )
}
export default circle
