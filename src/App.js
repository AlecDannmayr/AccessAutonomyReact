import React, { useState } from 'react'
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
import Smoke from './components/smoke'
import News from './components/news/news'

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

const themes = {
   light: LightTheme,
   dark: DarkTheme,
}

function App() {
   const [theme, setTheme] = useState('light')

   return (
      <div className="App">
         <Router>
            <Nav />
            <Switch>
               <Route path="/" component={Intro} />
               <Route path="/about" component={About} />
               <Route path="/projects" component={Projects} />
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
