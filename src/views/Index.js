import React from "react";
import '../assets/css/index.css'

// reactstrap components
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


// sections for this page
// import Images from "./index-sections/Images.js";
import ContactAndSocials from "./index-sections/ContactAndSocials.js";
// import Tabs from "./index-sections/Tabs.js";
import EventExplanation from "./index-sections/EventExplanation.js"

// Useless comment just to make a commit in the new dev branch

function Index() {
  const areaFocus = React.useState(false);
  const emailFocus = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <section id="eventSection">
            <EventExplanation />
          </section>
          <section id="contactSection">
          <Form action="" className="form" method="">
            <CardHeader className="text-center">
              <CardTitle className="title-up" tag="h3">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardBody>
              <InputGroup className={"no-border" + (emailFocus ? " input-group-focus" : "")}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Your Email" type="email"></Input>
              </InputGroup>
              <InputGroup className={"no-border" + (areaFocus ? " input-group-focus" : "")}>
                <Input placeholder="Your questions" type="textarea"></Input>
              </InputGroup>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn btn-round" color="info" href="#pablo" 
                onClick={e => e.preventDefault()} size="lg">
                Send
              </Button>
            </CardFooter>
          </Form>
          </section>
          <ContactAndSocials />
        </div>
        {/* <DarkFooter /> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
