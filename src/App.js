import React, { useState, useEffect } from 'react'
import './style.css'
import './responsive.css'
import Intro from './intro.js'
import getInTouch from './pages/getInTouch.js'
import Footer from './footer.js'
import Copyright from './copyright.js'
import BackGroundShapes from './backGroundShapes.js'
import ProjectBannerOne from './projectBannerOne'
import ProjectBannerTwo from './projectBannerTwo'
import ProjectBannerThree from './projectBannerThree'
import ProjectBannerFour from './projectBannerFour'

const App = () => {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <div className="App">
         <header className="nav"></header>
         <Intro />
         <layout className="background" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
            <BackGroundShapes />
         </layout>
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
         <Copyright />
      </div>
   )
}

export default App
