import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IntlProvider } from 'react-intl';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'



export default function App() {
  return (
    <>
    <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}


ReactDOM.render(<App/>, document.querySelector('#root'))