import React from 'react'
import '../css/style.css'

const widget = () => {
   return (
      <div className="diagonal-box-one">
         <div className="content-one">
            <p style={{ opacity: 1 }}></p>
         </div>
         <iframe src="../../WidgetSubBasic" title="Item" />
      </div>
   )
}

export default widget