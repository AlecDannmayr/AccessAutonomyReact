import React from 'react'
import '../../css/style.css'
import ProjectImgOne from '../../images/image-one.png'

const projectCards = () => {
   return (
      <div className="col s1">
         <div className="card">
            <div className="card-image">
               <img src={ProjectImgOne} alt={'Access Autonomy Logo'} />
            </div>
            <div className="card-content">
               <p></p>
            </div>
            <div className="card-action"></div>
         </div>
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
