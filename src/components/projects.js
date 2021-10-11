import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import ProjectCards from './projects/projectCards'

const projects = () => {
   return (
      <div className={'project-div'}>
         <h1 id={'project-title'}>
            <div>Projects</div>
         </h1>
         <ProjectCards />
      </div>
   )
}

export default projects
