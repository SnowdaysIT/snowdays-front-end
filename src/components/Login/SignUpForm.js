// Core and functional imports
import React from "react";
import Composer from 'react-composer';
import { Link } from "react-router-dom";
import { Mutation } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Import GraphQL queries from the query constants file
import { SIGNUP, USER_AUTH } from './SignInSignUpQueries.js';

// Styling imports
import {
  Alert, Button, CardHeader, CardBody,
  CardFooter, CardTitle, Col, Input, 
  FormGroup, Label, Modal, ModalHeader,
  ModalBody, Row
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


class SignUpForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailFocus: true,
      passwordFocus: false,
      userEmail: "",
      userPassword: "",
      registrationType: "External",
      acceptedPolicy: false,
      showPrivacyModal: false,
      mutationFunctions: [],
      formError: false
    }

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
    this.handlePrivacyToggle = this.handlePrivacyToggle.bind(this);
  }

  handleValidSubmit(event) {
    let mutationFunctions = this.state.mutationFunctions

    if (!this.state.acceptedPolicy) {
      this.setState(
        {
          formError: "You must first agree to the privacy policy in order to register"
        }
      )
    } else {      
      mutationFunctions[0]().then( sdata => {
        mutationFunctions[1]().then( adata => {
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
            this.props.history.push("/auth_redirect")
          }
        }).catch((gqlError) => {
          console.error(gqlError)
          localStorage.removeItem('token')
          this.setState(
            {
              formError: "There was a problem with the authentication! Please check back later. If it's a server error, Yetis be working they magic."
            }
          )
        })
      }).catch((gqlError) => {
        console.error(gqlError)
        localStorage.removeItem('token')
        this.setState(
          {
            formError: "The email you inserted is already registered, you might need to head to the Login Yeti."
          }
        )
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
          {formErrorMessage}
        </CardBody>
        <CardFooter className="text-center" style={{ marginTop: "-5%" }}>

          <Composer components={[
            <Mutation mutation={SIGNUP} variables={{ email: this.state.userEmail, password: this.state.userPassword }} client={client}
              // onError={(error) => {
              //   console.log(error)
              //   localStorage.removeItem('token')
              //   this.setState(
              //     {
              //       formError: "The email you inserted is already registered, you might need to head to the Login Yeti."
              //     }
              //   )
              // }}
            />,

            <Mutation mutation={USER_AUTH} variables={{ email: this.state.userEmail, password: this.state.userPassword }} client={client}
              onError={(error) => {
                console.log(error);
                localStorage.removeItem('token')
                this.setState(
                  {
                    formError: "There was a problem with the authentication! Please check back later. If it's a server error, Yetis be working they magic."
                  }
                )
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
          <Row>
            <Col xs='12'>
              Already have an account and need to complete your registration? <Link to="#" onClick={(event) => {this.switchOut(event)}}>Login here</Link>
            </Col>
          </Row>
        </CardFooter>
      </AvForm>
    );
  }

}

export default SignUpForm;