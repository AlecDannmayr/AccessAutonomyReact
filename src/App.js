import React, { useState, useEffect } from 'react'
import './style.css'
import BackGroundShapes from './backGroundShapes.js'
import Intro from './intro.js'
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
         <Intro />
         <layout className="background" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
            <BackGroundShapes />
         </layout>
         <section style={{ transform: `translateY(${offsetY * 0.9}px)` }}>
            <ProjectBannerOne />

            <ProjectBannerFour />

            <ProjectBannerTwo />

            <ProjectBannerThree />
         </section>
         <header className="nav"></header>
         <body className="body"></body>
         <footer className="footer"></footer>
      </div>
   )
}

export default App
