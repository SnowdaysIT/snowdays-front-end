import React from "react"

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


function HomeContact(params) {
    const areaFocus = React.useState(false);
    const emailFocus = React.useState(false);

    return(
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
                <i className="now-ui-icons ui-1_email-85" style={{paddingRight: "2vw"}}></i>
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
    )
}

export default HomeContact