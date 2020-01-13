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
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/login/LoginPage.js";
import ProfilePage from "views/profile/ProfilePage.js";
import InternalRegistration from "views/registration/InternalRegistration.js";
import SignUp from "views/registration/SignUp.js";
// import PageFetchingData from 'views/examples/PageFetchingData';
// import Sponsors from "views/sponsors/Sponsors.js"

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from wherever you store it
  const token = localStorage.getItem('token')  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: !(token==='undefined') ? `Bearer ${token}` : "",    },
  };
});

const client = new ApolloClient({
  link: httpLink,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
      <Switch>
        <Switch>
          {/* <Route path="/eg" render={props => <PageFetchingData {...props} />} /> */}
          <Route path="/index" render={props => <Index {...props} />} />
          <Route path="/nucleo-icons" render={props => <NucleoIcons {...props} />}/>
          <Route path="/profile-page" render={props => <ProfilePage {...props} />}/>
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/internal-registration" render={props => <InternalRegistration {...props} />} />
          <Route path="/signup" render={props => <SignUp {...props} />} />
          {/* <Route path="/sponsors" render={props => <Sponsors {...props} />} /> */}

          <Redirect to="/index" />
          <Redirect from="/" to="/index" />

        </Switch>
      </Switch>
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById("root")
);
