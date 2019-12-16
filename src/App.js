import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

import NucleoIcons from "./views/NucleoIcons.js";
import Index from "./views/Index.js";
import LoginPage from "./views/examples/LoginPage.js";
import RegisterPage from "./views/index-sections/SignUp";
import ProfilePage from "./views/Profile.js";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <Switch>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route
            path="/nucleo-icons"
            render={props => <NucleoIcons {...props} />}
          />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/sign-up" render={props => <RegisterPage {...props} />} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;