import './App.css';
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route,  } from "react-router-dom";



import Fruits from './components/Fruits';


const TYPE_NAMES = {
  fruits: "fruit",
  vegetables: "vegetable",
};

function App(props) {

  return (
    <Router>
    
      <div className="App">
        <h1>Grocery 2.0</h1>
      </div>
      <Switch >
        <Route Path="/">
          <Fruits />
        </Route>
        <Route path="/fruits">
          <Fruits />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
