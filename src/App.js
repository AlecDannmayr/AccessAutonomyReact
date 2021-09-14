import React, { useState, useEffect } from 'react'
import './css/style.css'
import './css/responsive.css'
import Intro from './components/intro.js'
import Footer from './components/footer.js'
import Copyright from './components/copyright.js'
import GetInTouch from './pages/getInTouch.js'
import BackGroundShapes from './components/backGroundShapes.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <Router>
         <div className="App">
            <Intro />
            <layout className="background" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
               <BackGroundShapes />
            </layout>
            <Route path="/" component={App} />
            <Route path="/getintouch" component={GetInTouch} />
            <Footer />
            <Copyright />
         </div>
      </Router>
   )
}

export default App
