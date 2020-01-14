import React, { Component } from 'react';
import { HashRouter, Route ,Switch} from 'react-router-dom'

import  Nav from "./pages/Nav/Nav.js";
import  Login from "A/pages/Login/Login.js";
// import  Login from "../src/pages/Login/Login.js";
import  Reg from "../src/pages/Reg/Reg.js";
import  Errer from "./pages/Errer";

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/reg' component={Reg}></Route>
            <Route exact path='/' component={Nav}></Route>
            <Route component={Errer}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}