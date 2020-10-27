import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { IntlProvider } from 'react-intl';
import TranslationContext from './context/Translation';
import translationFr from './translation/fr';
import translationEn from './translation/en';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import StudyCase from './pages/Works/StudyCase'
import Button from './components/Button'

const translations = {
  fr: translationFr,
  en: translationEn,
};

const getInitialLanguage = () => {
  if ((localStorage.getItem('currentLanguage') === 'null') || (localStorage.getItem('currentLanguage') === 'undefined')) {
    return 'fr'
  } else {
    return localStorage.getItem('currentLanguage')
  }
  // localStorage.getItem('currentLanguage') || 'fr'
}

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState(() => getInitialLanguage())

  useEffect(() => {
    localStorage.setItem('currentLanguage', currentLanguage);
  }, [currentLanguage])

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      fr: () => setCurrentLanguage("fr"),
      en: () => setCurrentLanguage("en"),
    }}>
      <IntlProvider locale={currentLanguage} messages={translations[currentLanguage]}>
        <Router>
              <Navbar />
              <Button/>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/works" exact>
                  <Works />
                </Route>
                <Route path="/works/:studyID">
                  <StudyCase />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
          </Router>
        </IntlProvider>
    </TranslationContext.Provider>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))