import React from 'react'
import '../../css/style.css'
import ProjectImgOne from '../../images/Accesss-Autonomy-Logo.ico'

const projectCards = () => {
   return (
      <div className="col s2">
         <div className="card">
            <div className="card-image">
               <img src={ProjectImgOne} alt={'Access Autonomy Logo'} />
            </div>
            <div className="card-content">
               <p></p>
            </div>
            <div className="card-action"></div>
         </div>
      </div>
   )
}

export default projectCards
