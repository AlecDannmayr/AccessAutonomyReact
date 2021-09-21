import React from 'react'
import '../css/style.css'

const iframe = '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>'
const projectBannerOne = () => {
   return (
      <div className="diagonal-box-one">
         <div className="content-one">
            <p style={{ opacity: 1 }}></p>
         </div>
         <iframe iframe={iframe} title="Item" />
      </div>
   )
}

export default projectBannerOne
