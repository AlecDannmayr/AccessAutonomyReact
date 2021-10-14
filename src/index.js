import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@material-ui/styles'
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


ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
)

reportWebVitals()
