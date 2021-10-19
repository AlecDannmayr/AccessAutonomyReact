import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/style.css'
import './css/responsive.css'
import BackGroundShapes from './components/backGroundShapes.js'
import Nav from './components/nav.js'
import Intro from './components/intro.js'
import About from './components/about.js'
import Blog from './components/blog.js'
import Projects from './components/projects.js'
import Contacts from './components/contacts.js'
import Copyright from './components/copyright.js'
import Smoke from './components/smoke'
import News from './components/news/news'
import Splash from './components/SplashScreen'
import Loader from './components/loader.js'

const LightTheme = {
   pageBackground: 'white',
   titleColor: '#dc658b',
   tagLineColor: 'black',
}

const DarkTheme = {
   pageBackground: 'white',
   titleColor: 'lightpink',
   tagLineColor: 'lavender',
}

const themes = {
   light: LightTheme,
   dark: DarkTheme,
}

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

   return (
      <div className="App">
         <Router>
            <Nav />
            <Loader />
            <Switch>
               <Route path="/" exact component={Intro} />
               <Route path="/about" component={About} />
               <Route path="/projects" component={Projects} />
               <Route path="/blog" component={Blog} />
               <Route path="/contacts" component={Contacts} />
            </Switch>
         </Router>
         <BackGroundShapes maxWidth="lg" />
         <Copyright />
      </div>
   )


export default App
