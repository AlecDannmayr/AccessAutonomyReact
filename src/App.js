import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route /*Switch*/ } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import BackGroundShapes from './components/backGroundShapes.js'
import Nav from './components/nav.js'
import Intro from './components/intro.js'
import Widget from './components/widget.js'
import Footer from './components/footer.js'
import Copyright from './components/copyright.js'

const App = () => {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <div className="App">
         <Router>
            <Nav />
            <Route path="/intro" component={Intro} />
            <Route path="/widget" component={Widget} />
            <Route path="/footer" component={Footer} />
         </Router>
         <BackGroundShapes />
         <Copyright />
      </div>
   )
}

export default App
