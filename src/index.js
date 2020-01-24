/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";

// pages
import Index from "views/index/Index.js";
import InternalRegistration from "views/registration/InternalRegistration.js";
import ExternalRegistration from "views/registration/ExternalRegistration.js";
import SignUp from "views/registration/SignUp.js";
// Pages we are not using for now
// import LoginPage from "views/login/LoginPage.js";
// import ProfilePage from "views/profile/ProfilePage.js";
// import Sponsors from "views/sponsors/Sponsors.js"

const httpLink = createHttpLink({
  // TODO: Add process.env variable reference
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
          <Switch>
            <Route path="/index" render={props => <Index {...props} />} />
            <Route path="/internal-registration" render={props => <InternalRegistration {...props} client={client} />} />
            <Route path="/external-registration" render={props => <ExternalRegistration {...props} client={client} />} />
            <Route path="/signup" render={props => <SignUp {...props} />} />
            {/* <Route path="/profile-page" render={props => <ProfilePage {...props} />}/> */}
            {/* <Route path="/login" render={props => <LoginPage {...props} />} /> */}
            {/* <Route path="/sponsors" render={props => <Sponsors {...props} />} /> */}
            {/* <Route path="/eg" render={props => <PageFetchingData {...props} />} /> */}

            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
          </Switch>
      </Switch>
    </BrowserRouter>
    </ApolloProvider>,

  document.getElementById("root")
);
