import React from 'react'
import './shapeStyle.css'

function triangle() {
   return (
      <svg id={'triangle'}>
         <polygon stroke-width="1px" stroke-linejoin="round" stroke-miterlimit="10" points="14.921,2.27 28.667,25.5 1.175,25.5 "></polygon>
      </svg>
   )
}
export default triangle
