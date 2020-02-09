// Core and functional imports
import React from "react";
import Composer from 'react-composer';
import { Mutation } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Import GraphQL queries from the query constants file
import { SIGNUP, USER_AUTH } from './RegistrationQueries.js';

// Styling imports
import {
  Button, Card, CardHeader, CardBody,
  CardFooter, CardTitle, Input, Container, 
  Row, FormGroup, Label, Modal, ModalHeader, ModalBody
} from "reactstrap";

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import '../../assets/css/signup.css'

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


class SignUp extends React.Component {

  constructor() {
    super()
    this.state = {
      emailFocus: true,
      passwordFocus: false,
      userEmail: "",
      userPassword: "",
      registrationType: "External",
      acceptedPolicy: false,
      showPrivacyModal: false,
      mutationFunctions: []
    }

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
    this.handlePrivacyToggle = this.handlePrivacyToggle.bind(this);
  }

  handleValidSubmit(event) {
    event.preventDefault()
    let mutationFunctions = this.state.mutationFunctions

    if (!this.state.acceptedPolicy) {
      alert("You must first agree to the privacy policy in order to register")
    } else {
      mutationFunctions[0]().then( sdata => {
        console.log("Signed up user!");
        mutationFunctions[1]().then( adata => {
          let token = adata.data.authenticate.jwtToken;
          localStorage.setItem('token', token)
          console.log("token set, now proceeding to nav");
          this.props.history.push("/external-registration")
        });
      })
    }
  }

  handleInvalidSubmit(event) {

  }

  handlePrivacyToggle() {
    this.setState(prevState => ({
      showPrivacyModal: !prevState.showPrivacyModal
    }))
  }

  render() {
    return (
      <Container className="mt-3 mb-5">
        <h2 className="login-title text-center">SNOWDAYS 2020</h2>
        <div className="svgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="mySVG"
            viewBox="0 0 200 200"
          >
            <defs>
              <circle id="a" cx="100" cy="100" r="100"></circle>
            </defs>
            <clipPath id="d">
              <use overflow="visible" xlinkHref="#a"></use>
            </clipPath>
            <circle cx="100" cy="100" r="100" fill="#a9ddf3"></circle>
            <g className="body">
              <path
                fill="#FFF"
                d="M200 122h-49.9V72c0-27.6-22.4-50-50-50s-50 22.4-50 50v50H0v91h200v-91z"
                className="bodyBGchanged"
                display="none"
              ></path>
              <path
                fill="#FFF"
                stroke="#3A5E77"
                strokeLinecap="round"
                strokeWidth="2.5"
                d="M200 158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8-28-.5-50.9 22.1-50.9 50v50H35.8C16 122 0 138 0 157.8V213h200v-54.5z"
                className="bodyBGnormal"
              ></path>
              <path
                fill="#DDF1FA"
                d="M100 156.4c-22.9 0-43 11.1-54.1 27.7 15.6 10 34.2 15.9 54.1 15.9s38.5-5.8 54.1-15.9c-11.1-16.6-31.2-27.7-54.1-27.7z"
              ></path>
            </g>
            <g className="earL">
              <g
                fill="#ddf1fa"
                stroke="#3a5e77"
                strokeWidth="2.5"
                className="outerEar"
              >
                <circle cx="47" cy="83" r="11.5"></circle>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1"
                ></path>
              </g>
              <g className="earHair">
                <path fill="#FFF" d="M51 64H66V99H51z"></path>
                <path
                  fill="#fff"
                  stroke="#3a5e77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9"
                ></path>
              </g>
            </g>
            <g className="earR">
              <g
                fill="#DDF1FA"
                stroke="#3A5E77"
                strokeWidth="2.5"
                className="outerEar"
              >
                <circle cx="153" cy="83" r="11.5"></circle>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M153.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1"
                ></path>
              </g>
              <g fill="#FFF" className="earHair">
                <path d="M134 64H149V99H134z"></path>
                <path
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M146.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9"
                ></path>
              </g>
            </g>
            <path
              fill="none"
              stroke="#3a5e77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1"
              className="chin"
            ></path>
            <path
              fill="#DDF1FA"
              d="M134.5 46v35.5c0 21.815-15.446 39.5-34.5 39.5s-34.5-17.685-34.5-39.5V46"
              className="face"
            ></path>
            <path
              fill="#FFF"
              stroke="#3A5E77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M81.457 27.929c1.755-4.084 5.51-8.262 11.253-11.77.979 2.565 1.883 5.14 2.712 7.723 3.162-4.265 8.626-8.27 16.272-11.235a150.43 150.43 0 01-2.554 9.837c4.857-2.116 11.049-3.64 18.428-4.156a119.288 119.288 0 01-7.852 9.474"
              className="hair"
            ></path>
            <g fill="#FFF" className="eyebrow">
              <path d="M138.142 55.064a98.573 98.573 0 01-14.787 2.599 164.847 164.847 0 01-1.322 10.037 96.303 96.303 0 01-12.996-5.226 146.87 146.87 0 01-3.267 9.179 97.781 97.781 0 01-15.097-10.329 127.781 127.781 0 01-5.816 8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475v11.731z"></path>
              <path
                stroke="#3A5E77"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M63.56 55.102c6.243 5.624 13.38 10.614 21.296 14.738a127.781 127.781 0 005.816-8.515 97.593 97.593 0 0015.097 10.329 147.099 147.099 0 003.267-9.179 96.303 96.303 0 0012.996 5.226 165.64 165.64 0 001.322-10.037 98.573 98.573 0 0014.787-2.599"
              ></path>
            </g>
            <g className="eyeL">
              <circle cx="85.5" cy="78.5" r="3.5" fill="#3a5e77"></circle>
              <circle cx="84" cy="76" r="1" fill="#fff"></circle>
            </g>
            <g className="eyeR">
              <circle cx="114.5" cy="78.5" r="3.5" fill="#3a5e77"></circle>
              <circle cx="113" cy="76" r="1" fill="#fff"></circle>
            </g>
            <g className="mouth">
              <path
                fill="#617E92"
                d="M100.2 101h-1.8c-2.7-.3-5.3-1.1-8-2.5-.7-.3-.9-1.2-.6-1.8.2-.5.7-.7 1.2-.7.2 0 .5.1.6.2 3 1.5 5.8 2.3 8.6 2.3s5.7-.7 8.6-2.3c.2-.1.4-.2.6-.2.5 0 1 .3 1.2.7.4.7.1 1.5-.6 1.9a22 22 0 01-7.9 2.5c-.4-.1-1.6-.1-1.9-.1z"
                className="mouthBG"
              ></path>
              <path
                fill="#617E92"
                d="M100.2 101h-1.8c-2.7-.3-5.3-1.1-8-2.5-.7-.3-.9-1.2-.6-1.8.2-.5.7-.7 1.2-.7.2 0 .5.1.6.2 3 1.5 5.8 2.3 8.6 2.3s5.7-.7 8.6-2.3c.2-.1.4-.2.6-.2.5 0 1 .3 1.2.7.4.7.1 1.5-.6 1.9a22 22 0 01-7.9 2.5c-.4-.1-1.6-.1-1.9-.1z"
                className="mouthSmallBG"
                display="none"
              ></path>
              <path
                d="M95 104.2c-4.5 0-8.2-3.7-8.2-8.2v-2c0-1.2 1-2.2 2.2-2.2h22c1.2 0 2.2 1 2.2 2.2v2c0 4.5-3.7 8.2-8.2 8.2H95z"
                className="mouthMediumBG"
                display="none"
              ></path>
              <path
                fill="#617e92"
                stroke="#3a5e77"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z"
                className="mouthLargeBG"
                display="none"
              ></path>
              <defs>
                <path
                  id="b"
                  d="M100.2 101h-1.8c-2.7-.3-5.3-1.1-8-2.5-.7-.3-.9-1.2-.6-1.8.2-.5.7-.7 1.2-.7.2 0 .5.1.6.2 3 1.5 5.8 2.3 8.6 2.3s5.7-.7 8.6-2.3c.2-.1.4-.2.6-.2.5 0 1 .3 1.2.7.4.7.1 1.5-.6 1.9a22 22 0 01-7.9 2.5c-.4-.1-1.6-.1-1.9-.1z"
                ></path>
              </defs>
              <clipPath id="c">
                <use overflow="visible" xlinkHref="#b"></use>
              </clipPath>
              <g className="tongue" clipPath="url(#c)">
                <circle cx="100" cy="107" r="8" fill="#cc4a6c"></circle>
                <ellipse
                  cx="100"
                  cy="100.5"
                  fill="#fff"
                  className="tongueHighlight"
                  opacity="0.1"
                  rx="3"
                  ry="1.5"
                ></ellipse>
              </g>
              <path
                fill="#FFF"
                d="M106 97h-4c-1.1 0-2-.9-2-2v-2h8v2c0 1.1-.9 2-2 2z"
                className="tooth"
                clipPath="url(#c)"
              ></path>
              <path
                fill="none"
                stroke="#3A5E77"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M100.2 101h-1.8c-2.7-.3-5.3-1.1-8-2.5-.7-.3-.9-1.2-.6-1.8.2-.5.7-.7 1.2-.7.2 0 .5.1.6.2 3 1.5 5.8 2.3 8.6 2.3s5.7-.7 8.6-2.3c.2-.1.4-.2.6-.2.5 0 1 .3 1.2.7.4.7.1 1.5-.6 1.9a22 22 0 01-7.9 2.5c-.4-.1-1.6-.1-1.9-.1z"
                className="mouthOutline"
              ></path>
            </g>
            <path
              fill="#3a5e77"
              d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z"
              className="nose"
            ></path>
            <g className="arms" clipPath="url(#d)">
              <g className="armL" visibility="hidden">
                <path
                  fill="#DDF1FA"
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M121.3 98.4L111 59.7 149.8 49.3 169.8 85.4z"
                ></path>
                <path
                  fill="#DDF1FA"
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M134.4 53.5l19.3-5.2c2.7-.7 5.4.9 6.1 3.5v0c.7 2.7-.9 5.4-3.5 6.1L146 60.7M150.9 59.4l26-7c2.7-.7 5.4.9 6.1 3.5v0c.7 2.7-.9 5.4-3.5 6.1l-21.3 5.7"
                ></path>
                <g className="twoFingers">
                  <path
                    fill="#DDF1FA"
                    stroke="#3A5E77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M158.3 67.8l23.1-6.2c2.7-.7 5.4.9 6.1 3.5v0c.7 2.7-.9 5.4-3.5 6.1l-23.1 6.2"
                  ></path>
                  <path
                    fill="#A9DDF3"
                    d="M180.1 65l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z"
                  ></path>
                  <path
                    fill="#DDF1FA"
                    stroke="#3A5E77"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.5"
                    d="M160.8 77.5l19.4-5.2c2.7-.7 5.4.9 6.1 3.5v0c.7 2.7-.9 5.4-3.5 6.1l-18.3 4.9"
                  ></path>
                  <path
                    fill="#A9DDF3"
                    d="M178.8 75.7l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z"
                  ></path>
                </g>
                <path
                  fill="#A9DDF3"
                  d="M175.5 55.9l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM152.1 50.4l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z"
                ></path>
                <path
                  fill="#FFF"
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M123.5 97.8c-41.4 14.9-84.1 30.7-108.2 35.5L1.2 81c33.5-9.9 71.9-16.5 111.9-21.8"
                ></path>
                <path
                  fill="#FFF"
                  stroke="#3A5E77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M108.5 60.4c7.7-5.3 14.3-8.4 22.8-13.2-2.4 5.3-4.7 10.3-6.7 15.1 4.3.3 8.4.7 12.3 1.3-4.2 5-8.1 9.6-11.5 13.9 3.1 1.1 6 2.4 8.7 3.8-1.4 2.9-2.7 5.8-3.9 8.5 2.5 3.5 4.6 7.2 6.3 11-4.9-.8-9-.7-16.2-2.7M94.5 103.8c-.6 4-3.8 8.9-9.4 14.7-2.6-1.8-5-3.7-7.2-5.7-2.5 4.1-6.6 8.8-12.2 14-1.9-2.2-3.4-4.5-4.5-6.9-4.4 3.3-9.5 6.9-15.4 10.8-.2-3.4.1-7.1 1.1-10.9M97.5 63.9c-1.7-2.4-5.9-4.1-12.4-5.2-.9 2.2-1.8 4.3-2.5 6.5-3.8-1.8-9.4-3.1-17-3.8.5 2.3 1.2 4.5 1.9 6.8-5-.6-11.2-.9-18.4-1 2 2.9.9 3.5 3.9 6.2"
                ></path>
              </g>
              <g className="armR" visibility="hidden">
                <path
                  fill="#ddf1fa"
                  stroke="#3a5e77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z"
                ></path>
                <path
                  fill="#ddf1fa"
                  stroke="#3a5e77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                  d="M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9m6.1-19l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2m10-18l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7"
                ></path>
                <path
                  fill="#a9ddf3"
                  d="M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zm4.5-9.2l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zm23.4-5.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#3a5e77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1"
                ></path>
                <path
                  fill="#fff"
                  stroke="#3a5e77"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9m18.1 3.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <Row>
          <Card className="card-signup mt-4" data-background-color="" style={{ backgroundColor: "#4bb5ff" }}>
            <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
              <CardHeader className="text-center">
                <CardTitle className="title-up" tag="h3">
                  Sign Up
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
                        minLength: {value: 8},
                      }}
                      onFocus={() => { this.setState({ passwordFocus: true }) }}
                      onBlur={() => { this.setState({ passwordFocus: true }) }}
                      onChange={(e) => { this.setState({ userPassword: e.target.value }) }}
                    ></AvInput>
                      <AvFeedback className="mt-1">Please insert a password that is at least 8 characters long!</AvFeedback>
                </AvGroup>
                <FormGroup>
                  <Label for="registrationType">Registration type</Label>
                  <Input type="select" name="registrationType" id="registrationType" value={this.state.registrationType}
                    onChange={(e) => { this.setState({registrationType: e.target.value}) }}
                  >
                    {/* <option value="Internal" disabled>Internal</option> */}
                    <option value="External">External</option>
                  </Input>
                </FormGroup>
                <FormGroup inline className="mt-3 ml-1">
                  I have read and agreed to the <b style={{cursor: "pointer"}} onClick={this.handlePrivacyToggle}>privacy policy </b>
                  <input className="rental-checkbox" type="checkbox" id="privacy" name="privacy" onChange={(e) => { this.setState({ acceptedPolicy: e.target.checked }) }} />
                  <Modal isOpen={this.state.showPrivacyModal} toggle={this.handlePrivacyToggle} size="lg">
                    <ModalHeader toggle={this.handlePrivacyToggle}>Privacy Policy</ModalHeader>
                    <ModalBody>
                      <div>
                        <h4>INFORMATION ON THE PROCESSING OF PERSONAL DATA
                      Pursuant to Art. 13 of EU Regulation 679/2016 of 2016/04/27</h4>


                        <p>Dear interested person we would like to inform you that the "European Regulation 2016/679 Relating to the Protection of Individuals with regard to the Processing of Personal Data, as well as the free Circulation of Such Data" (hereafter "GDPR") provides for the protection of data of natural persons  and other subjects Compared to Personal Data Processing.</p>

                        <p>S.C.U.B. (Sports Club University of Bolzano) in C5.06, Piazza Università 1, 39100 (BZ), P. I.V.A./ Cod. Fisc. 94075450216, which you can contact by e-mail at the e-mail address scub@unibz.it, as the "Data Controller" of the Treatment, Pursuant to Art. 13 GDPR, therefore, provides the following information:</p>

                        <ul>
                          <li>
                            <h5>DATA CATEGORIES:</h5>
                            <p>S.C.U.B. will process the Personal Data that will be included in the form.
                            Among this data you will be asked to provide data belonging to particular categories of data (i.e. philosophical beliefs such as vegetarianism). This data cannot be treated without your previous consent. However, we inform you that the provision of these data is mandatory in order to fulfill the purposes of the treatment and it affects the participation at the event.
                          During the event authorized photographers will take pictures and record videos. You can recognize them through their clothes, since they will wear the staff uniform and they will carry a camera. The voluntary participation to the event is considered a consent to the processing of the images collected during Snowdays. </p>
                          </li>

                          <li>
                            <h5>SOURCE OF PERSONAL DATA:</h5>
                            <p>The personal data in possession are collected directly from the person concerned at the compilation of the present form.</p>
                          </li>

                          <li>
                            <h5>PURPOSE OF DATA PROCESSING AND LEGAL BASIS:</h5>
                            <p>The processing of your data, collected and filed in the form Present form, is based on Legal Consent and is made for the following Purpose: to respond to requests for information, provide support services and for the enrolment to the event.</p>
                          </li>

                          <li>
                            <h5>RECIPIENTS OF THE DATA:</h5>
                            <p>In the relevant limits all Purpose of Processing indicate, the Data may be communicated to a partner, private companies, appointed as persons in charge by the Data Controller. Your data will not be in any way of Ohm Diffusion. The Data Processors and Data Processors in charge The Privacy document is updated on a timely basis.</p>
                          </li>

                          <li>
                            <h5>TRANSFER OF DATA ABROAD:</h5>
                            <p>Collected Data will not be transferred to extra EU countries.</p>
                          </li>

                          <li>
                            <h5>CONSERVATION PERIOD:</h5>
                            <p>The collected data will be kept for a period of time not exceeding the achievement of the purposes for which they are treated ("conservation limitation principle" art.5, GDPR) or in the basis of all the deadlines required by the law. The verification of the obsolescence of the data retained is made periodically.</p>
                          </li>

                          <li>
                            <h5>RIGHTS OF THE INTERESTED PARTY:</h5>
                            <p>The interested party has always the right to request more information from the owner, accessing your data, rectification or cancellation of the same, limitation of treatment or the possibility of opposing the processing, requesting more data portability, revoking the consent to treatment by making use of these and the other rights expected by the GDPR through a simple communication to the Data Controller. The interested party may also propose a control authority claim.</p>
                          </li>

                          <li>
                            <h5>CONSERVATION PERIOD:</h5>
                            <p>The collected data will be kept for a period of time not exceeding the achievement of the purposes for which they are treated ("conservation limitation principle" art.5, GDPR) or in the basis of all the deadlines required by the law. The verification of the obsolescence of the data retained is made periodically.</p>
                          </li>

                          <li>
                            <h5>OBLIGATORY OR LESS OF THE CONFERMENT OF DATA:</h5>
                            <p>We inform you that the provision of data is mandatory and the failure to provide the data involves the non-submission of the form.</p>
                          </li>

                          <li>
                            <h5>DATA PROCESSING MODE:</h5>
                            <p>The Personal Data provided by you, will be proceeded in compliance with the aforementioned law and the obligations of e-privacy. The data will be treated with informatic tools and paper-based tools and on any other kind of suitable support, in compliance with the appropriate technical measures and security framework provided by the GDPR.</p>
                          </li>

                          <p>By proceeding to the registration form you declare to have read and understood the “Information on the processing of personal data” above.</p>

                        </ul>
                      </div>
                    </ModalBody>
                  </Modal>
                </FormGroup>
              </CardBody>
              <CardFooter className="text-center" style={{ marginTop: "-5%" }}>

                <Composer components={[
                  <Mutation mutation={SIGNUP} variables={{ email: this.state.userEmail, password: this.state.userPassword }} client={client}
                    onError={(error) => {
                      console.log(error)
                      alert("There was a problem with the registration!\nPlease make sure you fill out all the fields.\n\nYou might also have inserted an email that is already registered.")
                      window.location.reload(true);
                    }}
                  />,

                  <Mutation mutation={USER_AUTH} variables={{ email: this.state.userEmail, password: this.state.userPassword }} client={client}
                    onError={(error) => {
                      console.log(error);
                      alert("There was a problem with the authentication!\nThis is likely to be a server error, please check back later.")
                      window.location.reload(true);
                    }}
                  />
                ]}>
                  {(mutationFunctions) => (
                    <Button type="submit" className="btn btn-round mr-3" size="lg" style={{ backgroundColor: "white", color: "#4BB5FF" }}
                        onClick={() => {
                          this.setState({ mutationFunctions: mutationFunctions })
                        }
                      }
                    >
                      Get started
                  </Button>
                  )}
                </Composer>
              </CardFooter>
            </AvForm>
          </Card>
        </Row>
      </Container>
    );
  }

}

export default SignUp;