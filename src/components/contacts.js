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

               <form action="submit-form" id="submit-form">
                    <div>
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
                  <label for="company" class="company">
                     Ccmpany
                  </label>
                  <br />
                  <input id="company" type="text" id="company" name="company"></input>
                  </div>
                  <div>
                  <label for="number" class="number">
                     Contact Number
                  </label>
                  <br />
                  <input id="number" type="text" id="number" name="number"></input>
                  <label for="email" class="email">
                     Email
                  </label>
                  <br />
                  <input id="email" type="text" id="email" name="email"></input>
                   <label for="submit" class="submit">
                     Submit
                  </label>
                  <input type="submit" id="submit" name="submit" value="Submit"></input>
</div>
                 
               </form>
            </div>
         </div>
      </div>
   )
}

export default contacts
