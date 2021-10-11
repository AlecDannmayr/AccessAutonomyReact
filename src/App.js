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

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         news1: {
            type: 'everything',
            query: 'domains=techcrunch.com&language=en',
         },
         news2: {
            type: 'top-headlines',
            query: 'sources=bbc-news',
         },
         news3: {
            type: 'everything',
            query: 'domains=tesla.com&language=en',
         },
      }

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
}

export default App
