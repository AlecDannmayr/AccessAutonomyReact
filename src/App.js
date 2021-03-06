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

function App() {
    return (
        <div className="App">
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

export default App
