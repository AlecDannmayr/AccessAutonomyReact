import './style.css'
import Circle from './svgs/circle'
import Square from './svgs/square'
import ArrowUp from './svgs/arrowUp'
import ArrowDown from './svgs/arrowDown'
import Cross from './svgs/cross'
import Hexagon from './svgs/hexagon'
import Triangle from './svgs/triangle'

const App = () => {
   return (
      <div className="App">
         <header className="App-header"></header>
         <Circle />
         <Square />
         <ArrowUp />
         <ArrowDown />
         <Cross />
         <Hexagon />
         <Triangle />
      </div>
   )
}

export default App
