import React, { useState, useEffect } from 'react'
import './style.css'
import BackGroundShapes from './backGroundShapes.js'
import Intro from './intro.js'

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
         <layout className="background" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
            <BackGroundShapes />
         </layout>
         <header className="nav"></header>
         <body className="body"></body>
         <footer className="footer"></footer>
      </div>
   )
}

export default App
