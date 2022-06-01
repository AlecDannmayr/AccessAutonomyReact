/** @format */

import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Contacts() {
    const initialValue = {firstName: "", secondName: "", subject: "", message: "", company: "", contactNumber: "", email: "" };
    const [ formValue, setFormValue ] = useState(initialValue);
    const [ formErrors, setFormErrors ] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false); 

    const handleChange = (e) => {
const { name, value } = e.target; 
setFormValue({ ...formValue, [name]: value })
console.log(formValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }
useEffect(() => {

},[formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "First Name required";
        }
        if (!values.secondName) {
            errors.firstName = "Second Name required";
        }
        if (!values.subject) {
            errors.firstName = "Subject required";
        }
        if (!values.message) {
            errors.firstName = "Message required";
        }
        if (!values.company) {
            errors.firstName = "Company Name required";
        }
        if (!values.contactNumber) {
            errors.firstName = "Contact Number required";
        }
        if (!values.email) {
            errors.firstName = "Email Address required";
        }
        return errors
    }

    console.log(JSON.stringify(formValue, undefined, 2))
    return (
        <div className={'footer'}>
            <Link to="./getintouch">
                <h1 id={''}>Get in touch</h1>
            </Link>
            <p id={''}>Say Hi, and find us on LinkedIn</p>
            <div className="contact-type">
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=e20%201as&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div class="class-form">
                    <form id="submit-form" action="form.php" method="post" name="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label for="firstName" class="firstName">
                                First Name
                            </label>
                            <br />
                            <input required id="firstName" name="firstName" type="text" value={formValue.firstName} onChange={handleChange}></input>
                            <label for="secondName" class="secondName">
                                Second Name
                            </label>
                            <br />
                            <input required type="text" id="secondName" name="secondName" value={formValue.secondName} onChange={handleChange}></input>
                            <label for="subject" class="subject">
                                Subject
                            </label>
                            <br />
                            <input required type="text" id="subject" name="subject" value={formValue.subject} onChange={handleChange}></input>
                            <label for="textArea" class="textArea">
                                Let us know how we can help?
                            </label>
                            <br />
                            <textarea required id="textArea" name="textArea" type="text" value={formValue.message} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <label for="company" class="company">
                                Company
                            </label>
                            <input required id="company" type="text" id="company" name="company" value={formValue.company} onChange={handleChange}></input>
                            <label required for="number" class="number">
                                Contact Number
                            </label>
                            <br />
                            <input id="email" type="text" id="number" name="number" value={formValue.contactNumber} onChange={handleChange}></input>
                            <label for="email" class="email">
                                Email
                            </label>
                            <br />
                            <input required id="email" type="text" id="email" name="email" value={formValue.email} onChange={handleChange}></input>

                            <label for="submit" class="submit">
                                Submit
                            </label>
                            <input required type="submit" id="submit" name="submit" value="Submit"></input>
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

export default Contacts
