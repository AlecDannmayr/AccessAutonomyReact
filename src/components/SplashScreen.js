import React from 'react'
import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const Page = styled.div`
   background-color: ${(props) => props.theme.pageBackground};
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

   return (
      <Page>
         <Container>
         <Toggle onClick={changeTheme}>{icon}</Toggle>
         <Title>Coding with Chaim</Title>
         <TagLine>Level up your web development skills</TagLine>
         <Container />
      </Page>
   )
}

export default Splash
