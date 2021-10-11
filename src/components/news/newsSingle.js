import React from 'react'
import '../../css/style.css'

const contentText = document.getElementById('card-text')
console.log(contentText)

const NewsSingle = ({ item }) => (
   <div className="col s1 card-div">
      <div className="card">
         <div className="card-image">
            <img src={item.urlToImage} alt={item.title} />
         </div>
         <div className="card-content">
            <p id="card-text" ref={this.cardText}>
               {item.title}
            </p>
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
