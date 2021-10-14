import React from 'react'
import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

function Splash(props) {
   function changeTheme() {
      if (props.theme === 'light') {
         props.setTheme('dark')
      } else {
         props.setTheme('light')
      }
   }

   const icon = props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />

   return (
      <page>
         <button onClick={changeTheme}>{icon}</button>
         <h1>Coding with Chaim</h1>
         <p>Level up your web development skills</p>
      </page>
   )
}

export default Splash
