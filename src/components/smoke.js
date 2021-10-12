import React from 'react'
import '../css/style.css'
import Video from '../video/smoke.mp4'
import Logo from '../images/accessautonomy.svg'

const smoke = () => {
   return (
      <section class="open">
         <div class="open-animation">
            <video src={Video} autoplay muted></video>
            <h1>
               <span>A</span>
               <span>C</span>
               <span>C</span>
               <span>E</span>
               <span>S</span>
               <span>S</span>
               <span>A</span>
               <span>U</span>
               <span>T</span>
               <span>O</span>
               <span>N</span>
               <span>O</span>
               <span>M</span>
               <span>Y</span>
            </h1>
            <figure class="logo-animate">
               <img src={Logo} alt="Access Autonomy Logo"></img>
            </figure>
         </div>
      </section>
   )
}

export default smoke
