import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Home from "./components/Home/Home";
import Add from './components/Coin/Add';
import Edit from './components/Coin/Edit';

const App = () => {
  return (
    <div className="container">
      <Router>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/add"><Add /></Route>
              <Route exact path="/edit/:id"><Edit /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
