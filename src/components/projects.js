import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import ProjectImgOne from '../images/image-one.png'

const projects = () => {
   return (
      <div className={'project-div'}>
         <h1 id={'project-title'}>
            <div>Projects</div>
         </h1>
         <div className="row project-cards">
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
         <div className="row project-cards">
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
