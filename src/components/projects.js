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
         <div class="row project-cards">
            <div class="col s12 m7">
               <div class="card">
                  <div class="card-image">
                     <img src={ProjectImgOne}></img>
                     <span class="card-title">Card Title</span>
                  </div>
                  <div class="card-content">
                     <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div class="card-action">
                     <a href="#">This is a link</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default projects
