import React from "react";
import Dashboard from "./components/pages/Dashboard";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
