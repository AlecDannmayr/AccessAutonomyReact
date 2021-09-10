import './style.css'
import BackGroundShapes from './backGroundShapes.js'
import Intro from './intro.js'

const App = () => {
   return (
      <div className="App">
         <Intro />
         <layout className="background">
            <BackGroundShapes />
         </layout>
         <header className="nav"></header>
         <body className="body"></body>
         <footer className="footer"></footer>
      </div>
   )
}

export default App
