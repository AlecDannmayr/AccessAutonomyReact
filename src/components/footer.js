import React from 'react'
import '../css/style.css'
import GetInTouch from '../pages/getInTouch.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const footer = () => {
   return (
      <Router>
         <>
            <div className={'footer-div'}>
               <Switch>
                  <Route exact path="/getInTouch">
                     <GetInTouch />

                     <h1 id={'footer-title'}>Get in touch</h1>
                  </Route>
               </Switch>
               <p id={'footer-body'}>
                  Say <a href="_blank">Hi</a> and find us on LinkedIn
               </p>
            </div>
         </>
      </Router>
   )
}

export default footer
