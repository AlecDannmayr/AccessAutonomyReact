/** @format */

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import BackGroundShapes from './components/backGroundShapes.js'
import Nav from './components/nav.js'
import Intro from './components/intro.js'
import About from './components/about.js'
import Blog from './components/blog.js'
import Projects from './components/projects.js'
import Contacts from './components/contacts.js'
import Copyright from './components/copyright.js'
import BeKind from './blogs/beKind'
// import Smoke from './components/smoke'
import News from './news/news'
import Splash from './components/SplashScreen'
import Loader from './components/loader.js'

const LightTheme = {
    pageBackground: 'white',
    titleColor: '#dc658b',
    tagLineColor: 'black',
}

const DarkTheme = {
    pageBackground: 'white',
    titleColor: 'lightpink',
    tagLineColor: 'lavender',
}

function SecretComponent() {
    return <h1>Secret Information Component</h1>
}

function RegularComponent() {
    const [emotion, setEmotion] = useState('Happy')

    useEffect(() => {
        console.log(`Its ${emotion} around here`)
    })
    console.log(emotion)
    return (
        <div className="App">
            <h1>Current Emotion is {emotion}</h1>
            <button onClick={() => setEmotion('More Happy')}>More Happy</button>
            <button onClick={() => setEmotion('Happy')}>More Happy</button>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Intro} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/be-kind" component={BeKind} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
            </Router>
            <BackGroundShapes maxWidth="lg" />
            <Copyright />
        </div>
    )
}

const themes = { light: LightTheme, dark: DarkTheme }
function App(props) {
    return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>
}

export default App
