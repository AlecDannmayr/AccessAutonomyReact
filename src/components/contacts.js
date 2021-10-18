import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

const contacts = () => {
   return (
      <div className={'footer'}>
         <Link to="./getintouch">
            <h1 id={''}>Get in touch</h1>
         </Link>
         <p id={''}>Say Hi, and find us on LinkedIn</p>
         <div className="split">
            <div></div>
<div class="mapouter"><div class="gmap_canvas"><iframe width="718" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=20%20liberty%20bridge%20road%20&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:718px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:718px;}</style></div></div>
   
   )
}

export default contacts
