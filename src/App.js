import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './components/pages/Acceuil';
import Grid from './components/Grid';
import Hamburger from './components/Hamburger';

function App() {
  return (
    <Router>
      <Grid />
      <Hamburger />
      <Switch>
        <Route path='/' exact component={Accueil} />
      </Switch>
    </Router>
  );
}

export default App;
