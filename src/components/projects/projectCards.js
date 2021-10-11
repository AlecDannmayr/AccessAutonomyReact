import React from 'react'
import '../../css/style.css'
import ProjectImgOne from '../../Accesss-Autonomy-Logo.ico'

const projectCards = () => {
   return (
      <div className="col s2">
         <div className="card">
            <div className="">
               <img src={ProjectImgOne} alt={'Access Autonomy Logo'} />
            </div>
            <div className="">
               <p></p>
            </div>
            <div className=""></div>
         </div>
      </div>
   )
}

export default projectCards
