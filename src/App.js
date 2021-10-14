import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import { ThemeProvider } from 'styled-components'
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
import styled from 'styled-components'
import { CgMoon } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

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

function Splash(props) {
   function changeTime() {
      if (props.theme === 'light') {
         props.setTheme('dark')
      } else {
         props.setTheme('light')
      }
   }
}

const icon = props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />

const App = () => {
   const [theme, setTheme] = useState('light')
   return (
      <div className="App">
         <ThemeProvider theme={themes[theme]}>
            <Router>
               <Nav />
               <Switch>
                  <Route path="/" exact component={Intro} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/contacts" component={Contacts} />
               </Switch>
            </Router>
            <BackGroundShapes maxWidth="lg" />
            <Copyright />
         </ThemeProvider>
      </div>
   )
}

export default App
