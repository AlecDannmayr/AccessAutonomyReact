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
         <div className="contact-type">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=e20%201as&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div class="class-form">
               <form action="submit-form" id="submit-form">
                  <label for="fName" class="firstName">
                     First Name
                  </label>
                  <br />
                  <input id="firstName" type="text" id="fName" name="firstName"></input>
                  <label for="sName" class="secondName">
                     Second Name
                  </label>
                  <br />
                  <input type="text" id="sName" name="secondName"></input>

                  <label for="labelCountries">Countries</label>
                  <select id="country" name="country">
                     <option value="">- select -</option>
                     <option value="Australia">Australia</option>
                     <option value="Canada">Canada</option>
                     <option value="Singapore">Singapore</option>
                     <option value="Hong Kong">Hong Kong</option>
                     <option value="New Zealand">New Zealand</option>
                  </select>

                  <label for="submit" class="submit">
                     Submit
                  </label>
                  <input type="submit" id="submit" name="submit" value="Submit"></input>
               </form>
            </div>
         </div>
      </div>
   )
}

export default contacts
