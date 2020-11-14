import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './components/pages/Acceuil';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import OmbelineDurey from './components/pages/OmbelineDurey';
import Grid from './components/Grid';
import Hamburger from './components/Hamburger';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Grid />
      <Hamburger />
      <Switch>
        <Route path='/' exact component={Accueil} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/ombelinedurey' component={OmbelineDurey} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
