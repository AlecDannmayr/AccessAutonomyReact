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

const intro = (props) => {
    console.log(props)
    if (props.authorised) {
        return <SecretComponent />
    } else {
        return (
            <div className={'intro-div'}>
                <div>
                    <h1 id={'intro-title'}>Access Autonomy</h1>
                    <p id={'intro-body'}>Solving complex design problems using a finesse for technology.</p>
                </div>
            </div>
        )
    }
}

export default intro
