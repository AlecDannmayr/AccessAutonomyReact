import './style.css'
import Circle from './svgs/circle'
import Square from './svgs/square'
import ArrowUp from './svgs/arrowUp'
import ArrowDown from './svgs/arrowDown'
import Cross from './svgs/cross'
import Hexagon from './svgs/hexagon'
import DoubleTriangle from './svgs/doubleTriangle'
import DoubleArrow from './svgs/doubleArrow'

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
         <DoubleTriangle />
         <DoubleArrow />
      </div>
   )
}

export default App
