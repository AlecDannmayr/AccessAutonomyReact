import React from 'react'
import './shapeStyle.css'

function hexagon() {
   return (
      <svg width="200" height="250" id={'hexagon'}>
         <polygon stroke-linejoin="round" stroke-miterlimit="10" points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "></polygon>
      </svg>
   )
}
export default hexagon
