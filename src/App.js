import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './components/pages/Acceuil';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import OmbelineDurey from './components/pages/OmbelineDurey';
import CoachMe from './components/pages/CoachMe';
import AcStudio from './components/pages/AcStudio';
import APropos from './components/pages/APropos';
import Contact from './components/pages/Contact';
import MentionsLegales from './components/pages/MentionsLegales';
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
        <Route path='/acstudio' component={AcStudio} />
        <Route path='/coachme' component={CoachMe} />
        <Route path='/apropos' component={APropos} />
        <Route path='/contact' component={Contact} />
        <Route path='/mentionslegales' component={MentionsLegales} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
