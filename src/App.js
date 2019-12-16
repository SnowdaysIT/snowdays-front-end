import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";

// pages for this kit
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LoginPage from "./views/examples/LoginPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import RegisterPage from "./views/index-sections/SignUp";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route
            path="/nucleo-icons"
            render={props => <NucleoIcons {...props} />}
          />
          <Route
            path="/profile-page"
            render={props => <ProfilePage {...props} />}
          />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/sign-up" render={props => <RegisterPage {...props} />} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />

        </Switch>
      </Switch>
    </BrowserRouter>
  );
}

export default App;