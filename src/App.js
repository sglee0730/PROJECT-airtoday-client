import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Mappage from './pages/Mappage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mappage" component={Mappage} />

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;


