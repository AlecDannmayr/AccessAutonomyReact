import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import ProjectCards from './projects/projectCards'

const projects = () => {
   return (
      <div className={'intro-div'}>
         <h1 id={'intro-title'}>
            <div>Projects</div>
         </h1>
         <p id={'intro-body'}>We Solve Projects</p>
         <ProjectCards />
      </div>
   )
}

export default projects
