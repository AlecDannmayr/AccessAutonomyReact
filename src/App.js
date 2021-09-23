import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route /*Switch*/ } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import Intro from './components/intro.js'
//import Footer from './components/footer.js'
import GetInTouch from './pages/getInTouch.js'
import BackGroundShapes from './components/backGroundShapes.js'
// import Widget from './components/widget.js'

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
            <BackGroundShapes />
            <Route path="/getintouch" component={GetInTouch}>
               <GetInTouch />
            </Route>
            {/*<Widget />*/}
            {/*<Footer />*/}
         </div>
      </Router>
   )
}

export default App
