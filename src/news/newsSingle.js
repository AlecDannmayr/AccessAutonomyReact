import React from 'react'
import '../css/style.css'

const NewsSingle = ({ item }) => (
   <div className="col s6">
      <div className="card">
         <div className="card-image">
            <img src={item.urlToImage} alt={item.title} />
         </div>
         <div className="card-content">
            <p ref={this.cardText}>{item.title}</p>
         </div>
         <div className="card-action">
            <a href={item.url} target="_blank">
               Full article
            </a>
         </div>
      </div>
   </div>
)

export default NewsSingle
