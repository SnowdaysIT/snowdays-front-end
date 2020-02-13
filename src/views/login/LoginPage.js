// core components
import React from "react";
// reactstrap components
import {
  Card, Container, Row
} from "reactstrap";
// snowdays components
import Yeti from '../../components/Login/Yeti.js'
import SignInForm from '../../components/Login/SignInForm.js'
import SignUpForm from '../../components/Login/SignUpForm.js'

// stylesheets
import '../../assets/css/signup.css'

class LoginPage extends React.Component {

  static defaultProps = {
    login: true
  }

  constructor(props) {
    if (localStorage.token){
      props.history.push('/auth_redirect')
    }
    super(props)
    this.state = {
      /*
      * 0 = login
      * 1 = signup
      */
      page: props.login ? 0 : 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  switchPage(){
    this.setState({
      page: (this.state.page === 0) ? 1 : 0
    })
  }
  
  render() {
    let cardContent

    if (this.state.page === 0) 
      cardContent = (
        <SignInForm switchTrigger={this.switchPage.bind(this)} {...this.props}></SignInForm>
      )
    else if (this.state.page === 1)
      cardContent = (
        <SignUpForm switchTrigger={this.switchPage.bind(this)} {...this.props}></SignUpForm>
      )

    return (
      <Container className="mt-3 mb-5">
        <h2 className="login-title text-center">SNOWDAYS 2020</h2>
        <Yeti></Yeti>
        <Row>
          <Card className="card-signup mt-4" data-background-color="" style={{ backgroundColor: "#4bb5ff" }}>
            {cardContent}
          </Card>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
