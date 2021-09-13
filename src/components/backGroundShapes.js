import React from 'react'
import Circle from '../svgs/circle'
import Square from '../svgs/square'
import Cross from '../svgs/cross'
import Hexagon from '../svgs/hexagon'
import DoubleTriangle from '../svgs/doubleTriangle'
import DoubleArrow from '../svgs/doubleArrow'
import Triangle from '../svgs/triangle'
import StaticShapes from '../svgs/staticShapes'
import '../style.css'

const backGroundShapes = () => {
   return (
      <div className={'backGroundShapes'}>
         <Circle />
         <Square />
         <Cross />
         <Hexagon />
         <DoubleTriangle />
         <DoubleArrow />
         <Triangle />
         <StaticShapes />
      </div>
   )
}

export default backGroundShapes
