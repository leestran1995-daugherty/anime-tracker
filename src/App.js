import React from "react";
import Main from "./Main";
import Login from "./Login";
import AuthCallback from "./AuthCallback"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthedRoute from "./Routes/AuthedRoute";
import bulma from "bulma"

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthedRoute path="/main">
          <Main />
        </AuthedRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/authcallback">
          <AuthCallback />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
