import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import ProjectImgOne from '../images/image-one.png'
import ProjectImgTwo from '../images/image-two.png'

import ProjectImgThree from '../images/image-three.png'
import ProjectImgFour from '../images/image-four.png'
import ProjectImgFive from '../images/image-five.png'
//import ProjectImgSix from '../images/image-six.png'
import ProjectImgSeven from '../images/image-seven.png'

const projects = () => {
   return (
      <div className={'project-div'}>
         <h1 id={'project-title'}>
            <div>Projects</div>
         </h1>
         <div className="row project-cards">
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgTwo}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgThree}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgFour}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
         </div>
         <div className="row project-cards">
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgFive}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgSeven}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
            <div className="card z-depth-5 transparent">
               <div className="card-image">
                  <img src={ProjectImgOne}></img>
               </div>
               <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default projects
