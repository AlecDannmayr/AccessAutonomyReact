import React from 'react'
import '../css/style.css'
import Development from '../images/development.svg'
import Design from '../images/design.svg'
import Maintain from '../images/maintain.svg'
import Teach from '../images/teach.svg'
import Consult from '../images/consult.svg'

const about = () => {
   return (
      <div className="services">
         <img src={Development}></img>
         <img src={Design}></img>
         <img src={Maintain}></img>
         <img src={Teach}></img>
         <img src={Consult}></img>
      </div>
   )
}

export default about
