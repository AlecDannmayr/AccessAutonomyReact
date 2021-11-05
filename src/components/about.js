import React, { useState } from 'react'
import '../css/style.css'
import Development from '../images/develop.svg'
import Design from '../images/design.svg'
import Maintain from '../images/maintain.svg'
import Teach from '../images/teach.svg'
import Consult from '../images/consult.svg'

function About() {
   const [offsetY, setOffsetY] = useState(0)

   return (
      <div>
         <div className="services">
            <img src={Consult}></img>
            <img src={Design}></img>
            <img src={Development}></img>
            <img src={Teach}></img>
            <img src={Maintain}></img>
         </div>
      </div>
   )
}

export default About
