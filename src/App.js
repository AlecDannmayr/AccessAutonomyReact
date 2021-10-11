import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter as Router, Route /*Switch*/ } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import BackGroundShapes from './components/backGroundShapes.js'
import Nav from './components/nav.js'
import Intro from './components/intro.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contacts from './components/contacts.js'
import Copyright from './components/copyright.js'
import News from './components/news/news'
import Sidenews from './components/news'

const App = () => {
   const [setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <div className="App">
         <News />
         <Router>
            <Nav />
            <Route path="/intro" component={Intro} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
         </Router>
         <BackGroundShapes />
         <Copyright />
      </div>
   )
}

export default App
