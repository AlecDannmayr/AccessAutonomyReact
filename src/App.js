import React, { useState, useEffect } from 'react'
import './style.css'
import BackGroundShapes from './backGroundShapes.js'
import Intro from './intro.js'

const App = () => {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   console.log(handleScroll)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <div className="App">
         <Intro />
         <div Style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
            <layout className="background">
               <BackGroundShapes />
            </layout>
         </div>
         <header className="nav"></header>
         <body className="body"></body>
         <footer className="footer"></footer>
      </div>
   )
}

export default App
