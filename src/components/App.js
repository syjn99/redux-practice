import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Details from '../routes/Detail';
import Home from '../routes/Home';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" exact component={Details}></Route>
    </Router>
  );
}

export default App;