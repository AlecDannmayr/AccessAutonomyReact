/** @format */

import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Contacts() {
    const initialValues = {firstName: "", secondName: "", subject: "", message: "", company: "", contactNumber: "", email: "" };
    const [ formValues, setFormValues ] = useState(initialValues);
    const [ formErrors, setFormErrors ] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false); 

    const handleChange = (e) => {
const { name, value } = e.target; 
setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
useEffect(() => {
    console.log(formErrors)
if(Object.keys(formErrors).length === 0 && isSubmit) {
console.log(formValues)
}
},[formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "First Name required";
        }
        if (!values.secondName) {
            errors.secondName = "Second Name required";
        }
        if (!values.subject) {
            errors.subject = "Subject required";
        }
        if (!values.company) {
            errors.company = "Company Name required";
        }
        if (!values.contactNumber) {
            errors.contactNumber = "Contact Number required";
        }
        if (!values.email) {
            errors.email = "Email Address required";
        }
        return errors
        console.log(errors)
    }

    return (
        <div className={'footer'}>
            <Link to="./getintouch">
                <h1 id={''}>Get in touch</h1>
            </Link>
            <p id={''}>Say Hi, and find us on LinkedIn</p>
            <div className="contact-type">
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=e20%201as&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div class="class-form">
                    <form id="submit-form" action="form.php" method="post" name="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label for="firstName" class="firstName">
                                First Name
                            </label>
                            <br />
                            <input id="firstName" name="firstName" type="text" value={formValues.firstName} onChange={handleChange}></input>
                            <label for="secondName" class="secondName">
                                Second Name
                            </label>
                            <br />
                            <input type="text" id="secondName" name="secondName" value={formValues.secondName} onChange={handleChange}></input>
                            <label for="subject" class="subject">
                                Subject
                            </label>
                            <br />
                            <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange}></input>
                            <label for="textArea" class="textArea">
                                Let us know how we can help?
                            </label>
                            <br />
                        </div>
                        <div>
                            <label for="company" class="company">
                                Company
                            </label>
                            <input id="company" type="text" name="company" value={formValues.company} onChange={handleChange}></input>
                            <label for="number" class="number">
                                Contact Number
                            </label>
                            <br />
                            <input type="number" id="number" name="number" value={formValues.contactNumber} onChange={handleChange}></input>
                            <label for="email" class="email">
                                Email
                            </label>
                            <br />
                            <input id="email" type="text" name="email" value={formValues.email} onChange={handleChange}></input>
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

export default Contacts
