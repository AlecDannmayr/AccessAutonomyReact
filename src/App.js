import React, { useState, useEffect } from 'react'
import './css/style.css'
import './css/responsive.css'
import Intro from './components/intro.js'
import Footer from './components/footer.js'
import Copyright from './components/copyright.js'
import GetInTouch from './pages/getInTouch.js'
import BackGroundShapes from './components/backGroundShapes.js'
import ProjectBannerOne from './components/projectBannerOne'
import ProjectBannerTwo from './components/projectBannerTwo'
import ProjectBannerThree from './components/projectBannerThree'
import ProjectBannerFour from './components/projectBannerFour'
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
            <layout className="background" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
               <BackGroundShapes />
            </layout>
            <Route path="/" component={App} />
            <Route path="/getintouch" component={GetInTouch} />

            <Copyright />
         </div>
      </Router>
   )
}

const Home = () => {
    const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   <div>
      <Intro />
      <section style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
         <ProjectBannerOne />
      </section>
      <section style={{ transform: `translateY(${offsetY * 0}px)` }}>
         <ProjectBannerFour />
      </section>
      <section style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
         <ProjectBannerTwo />
      </section>
      <section style={{ transform: `translateY(${offsetY * -0.2}px)` }}>
         <ProjectBannerThree />
      </section>
      <Footer />
   </div>
)

export default App
