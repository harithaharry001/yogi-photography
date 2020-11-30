import React, { Component } from 'react'
import Aux from './hoc/AuxHoc/Aux'
import Home from './components/Home/Home'
import About from './components/AboutUs/About'
import Toolbar from './components/Navigation/Toolbar/Toolbars'
import Wedding from './components/Wedding/Wedding'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './hoc/Layout/Layout'
import Toolbars from './components/Navigation/Toolbar/Toolbars'
import AuthComponent from './components/auth/AuthComponent'

 class App extends Component {
  render() {
    return (
      <Aux>       
      
      <Router>
      
      <Toolbars />
      
      <Switch>
 
     
      <Route path="/" exact component={Layout} />
      <Route path="/wedding" component={Wedding} />
      <Route path="/auth" component={AuthComponent} />
   
      </Switch>
      </Router>
    
   
     
      </Aux>
    )
  }
}

export default App
