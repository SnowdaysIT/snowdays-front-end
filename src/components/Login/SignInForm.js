// Core and functional imports
import React from "react";
import Composer from 'react-composer';
import { Link } from "react-router-dom";
import { Mutation } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Import GraphQL queries from the query constants file
import { USER_AUTH } from './SignInSignUpQueries.js';

// Styling imports
import {
  Alert, Button, CardHeader, CardBody,
  CardFooter, CardTitle, Col,
  Label, Row
} from "reactstrap";

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import {API_ENDPOINT} from "../../assets/js/runtime-config.js";

// Apollo Client set-up for sign-up since the person visiting this page should not have a token
const httpLink = createHttpLink({
  uri: API_ENDPOINT
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// Clear token for API calls when user browses to this page
// localStorage.removeItem('token')


class SignInForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailFocus: true,
      passwordFocus: false,
      userEmail: "",
      userPassword: "",
      mutationFunctions: [],
      formError: false
    }

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
  }

  handleValidSubmit(event) {
    let mutationFunctions = this.state.mutationFunctions
    mutationFunctions[0]().then( adata => {
      if (adata.data.authenticate.jwtToken == null){
        localStorage.removeItem('token')
        this.setState(
          {
            formError: 'The Yeti is not so sure of the credentials you just entered, care to retry?'
          }
        )
      } else {
        localStorage.setItem('token', adata.data.authenticate.jwtToken)
        //TODO: send to signed-in router
        this.props.history.push("/external-registration")
      }
    }).catch((error) => {
      console.log(error);
      this.setState(
        {
          formError: "There was a problem with the authentication! Please check back later. If it's a server error, Yetis be working they magic."
        }
      )
      localStorage.removeItem('token')
    })
  }

  handleInvalidSubmit(event) {

  }

  switchOut(event){
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    this.props.switchTrigger()
  }

  render() {
    let formErrorMessage
    
    if (this.state.formError)
      formErrorMessage = (
        <Row style={
          {
            marginTop: '2rem'
          }
        }>
          <Col xs='12'>
            <Alert color="warning">
              {this.state.formError}
            </Alert>
          </Col>
        </Row>
      )
    else
      formErrorMessage = ''
    
    return (
      <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
        <CardHeader className="text-center">
          <CardTitle className="title-up" tag="h3">
            Login
          </CardTitle>
        </CardHeader>
        <CardBody style={{ marginTop: "-8%" }}>
          <AvGroup>
            <Label for="userEmail">Email</Label>
              <AvInput
                className={
                  "no-border" + (this.state.emailFocus ? " input-group-focus" : "")
                }
                placeholder="Mario.Pizza@unibz.it"
                id="userEmail"
                name="userEmail"
                type="text"
                validate={{
                  required: {value: true},
                  // eslint-disable-next-line
                  pattern: {value: `${/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/}`},
                }}
                onFocus={() => { this.setState({ emailFocus: true }) }}
                onBlur={() => { this.setState({ emailFocus: false }) }}
                onChange={(e) => { this.setState({ userEmail: e.target.value }) }}
              ></AvInput>
                <AvFeedback className="mt-1">Please insert a valid email!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="userPassword">Password</Label>
              <AvInput
                className={
                  "no-border" + (this.state.passwordFocus ? " input-group-focus" : "")
                }
                placeholder="********"
                id="userPassword"
                name="userPassword"
                type="password"
                validate={{
                  required: {value: true},
                }}
                onFocus={() => { this.setState({ passwordFocus: true }) }}
                onBlur={() => { this.setState({ passwordFocus: true }) }}
                onChange={(e) => { this.setState({ userPassword: e.target.value }) }}
              ></AvInput>
          </AvGroup>
          {formErrorMessage}
        </CardBody>
        <CardFooter className="text-center" style={{ marginTop: "-5%" }}>
          <Composer components={[
            <Mutation mutation={USER_AUTH} variables={{ email: this.state.userEmail, password: this.state.userPassword }} client={client}
            />
          ]}>
            {(mutationFunctions) => (
              <Button type="submit" className="btn btn-round mr-3" size="lg" style={{ backgroundColor: "white", color: "#4BB5FF" }}
                  onClick={() => {
                    this.setState({ mutationFunctions: mutationFunctions })
                  }
                }
              >
                Sign In
            </Button>
            )}
          </Composer>
          <Row>
            <Col xs='12'>
              Don't have an account yet? <Link to="#" onClick={(event) => {this.switchOut(event)}}>Sign up here</Link>
            </Col>
          </Row>
        </CardFooter>
      </AvForm>
    );
  }
}

export default SignInForm;