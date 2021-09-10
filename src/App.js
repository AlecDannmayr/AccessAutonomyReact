import './style.css'
import BackGroundShapes from './backGroundShapes.js'
import IntroMDX from './intro.mdx'

const App = () => {
   return (
      <div className="App">
         <layout className="background">
            <BackGroundShapes />
            <IntroMDX />
         </layout>

         <header className="nav"></header>
         <body className="body"></body>
         <footer className="footer"></footer>
      </div>
   )
}

export default App
