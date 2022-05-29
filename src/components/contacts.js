/** @format */

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
                    <form id="submit-form" action="form.php" method="post" name="contact-form">
                        <div>
                            <label for="firstName" class="firstName">
                                First Name
                            </label>
                            <br />
                            <input required id="firstName" name="firstName" type="text"></input>
                            <label for="secondName" class="secondName">
                                Second Name
                            </label>
                            <br />
                            <input required type="text" id="secondName" name="secondName"></input>
                            <label for="subject" class="subject">
                                Subject
                            </label>
                            <br />
                            <input required type="text" id="subject" name="subject"></input>
                            <label for="textArea" class="textArea">
                                Let us know how we can help?
                            </label>
                            <br />
                            <textarea required id="textArea" name="textArea" type="text"></textarea>
                        </div>
                        <div>
                            <label for="company" class="company">
                                Company
                            </label>
                            <input required id="company" type="text" id="company" name="company"></input>
                            <label required for="number" class="number">
                                Contact Number
                            </label>
                            <br />
                            <input id="email" type="text" id="number" name="number"></input>
                            <label for="email" class="email">
                                Email
                            </label>
                            <br />
                            <input required id="email" type="text" id="email" name="email"></input>

                            <label for="submit" class="submit">
                                Submit
                            </label>
                            <input required type="submit" id="submit" name="submit" value="Submit" disabled></input>
                        </div>
                    </form>
                    <div class="form-check">
                                                  <div class="g-recaptcha" data-sitekey="6LfxmAQcAAAAALDqxji7624BTfMpLe1biF-GMk6_" data-callback="recaptcha_callback_cnt">

                                                  </div>
                                        </div>
                </div>
            </div>
        </div>
    )
}

export default contacts
