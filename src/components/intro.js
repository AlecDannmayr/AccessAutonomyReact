import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const Toggle = styled.button`
   background-color: ${(props) => props.theme.titleColor};
`

const Page = styled.div`
   background-color: ${(props) => props.theme.titleColor};
`
const Container = styled.div`
   dipslay: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled.h1`
   color: ${(props) => props.theme.titleColor};
`

const TagLine = styled.span`
   display: flex;
   flex-direction: column;
   align-items: center;
`

function Splash(props) {
   function changeTheme() {
      if (props.theme === 'light') {
         props.setTheme('dark')
      } else {
         props.setTheme('light')
      }
   }

   const icon = props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />
}
const intro = () => {
   return (
      <>
         <div className={'intro-div'}>
            <h1 id={'intro-title'}>
               <div>Access</div>
               <div>Autonomy</div>
            </h1>
            <p id={'intro-body'}>Solving complex design problems using a finesse for technology.</p>
         </div>
         <div>
            <Toggle onClick={changeTheme}>{icon}</Toggle>
         </div>
      </>
   )
}

export default intro
