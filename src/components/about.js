import React, { useState, useEffect } from 'react'
import '../css/style.css'
import Development from '../images/develop.svg'
import Design from '../images/design.svg'
import Maintain from '../images/maintain.svg'
import Teach from '../images/teach.svg'
import Consult from '../images/consult.svg'

function About() {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <>
         <div className="about-backGround"></div>
         <div>
            <div className="services" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
               <img src={Consult}></img>
               <img src={Design}></img>
               <img src={Development}></img>
               <img src={Teach}></img>
               <img src={Maintain}></img>
            </div>
         </div>
      </>
   )
}

export default About
