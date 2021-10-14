import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

function Splash(props) {
   function changeTime() {
      if (props.theme === 'light') {
         props.setTheme('dark')
      } else {
         props.setTheme('light')
      }
   }
}

const icon = this.props.theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />

return (
   <page>
      <Container>
         <Toggle onClick={changeTheme}>{icon}</Toggle>
         <Title>Coding with Chaim</Title>
         <TagLine>Level up your web development skills</TagLine>
      </Container>
   </page>
)
