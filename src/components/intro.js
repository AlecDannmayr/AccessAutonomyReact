/** @format */

import React from 'react'
import '../css/style.css'
import '../css/responsive.css'

function SecretComponent() {
    return <h1>Secret Information Component</h1>
}

function RegularComponent() {
    return <h1>Everyone can see this component</h1>
}

function intro(props) {
    if (props.authorised) {
        return <SecretComponent />
    } else {
        return <RegularComponent />
    }
}

export default intro
