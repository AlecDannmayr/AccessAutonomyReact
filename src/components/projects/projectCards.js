import React from 'react'
import '../../css/style.css'

const projectCards = () => {
   return (
      <div className="col s2">
         <div className="">
            <div className="">
               <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="">
               <p ref={this.cardText}>{item.title}</p>
            </div>
            <div className="">
               <a href={item.url} target="_blank">
                  Full article
               </a>
            </div>
         </div>
      </div>
   )
}

export default projectCards
