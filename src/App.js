import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Mappage from './pages/Mappage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mappage} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


