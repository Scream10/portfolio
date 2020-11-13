import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './components/pages/Acceuil';
import Services from './components/pages/Services';
import Grid from './components/Grid';
import Hamburger from './components/Hamburger';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Grid />
      <Hamburger />
      <Switch>
        <Route path='/' exact component={Accueil} />
        <Route path='/services' component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
