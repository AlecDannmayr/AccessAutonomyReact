import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import BackGroundShapes from './components/backGroundShapes.js'
import Nav from './components/nav.js'
import Intro from './components/intro.js'
import Services from './components/services.js'
import Projects from './components/projects.js'
import Contacts from './components/contacts.js'
import Copyright from './components/copyright.js'
import Smoke from './components/smoke'
import News from './components/news/news'

const App = () => {
   return (
      <div className="App">
         <Smoke />
         <Router>
            <Nav />
            <Switch>
               <Route path="/" exact component={Intro} />
               <Route path="/services" component={Services} />
               <Route path="/projects" component={Projects} />
               <Route path="/contacts" component={Contacts} />
            </Switch>
         </Router>
         <BackGroundShapes />
         <Copyright />
      </div>
   )
}

export default App
