import React from "react"

import {
    Button,
    CardHeader,
    CardBody,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
  } from "reactstrap";


function HomeContact(params) {
    const areaFocus = React.useState(false);
    const emailFocus = React.useState(false);

    return(
            <Form action="" className="form" method="">
            <CardHeader className="text-center">
                <CardTitle className="title-up category" tag="h2">
                    Contact Us
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className="ml-auto mr-auto">
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
                        <Button className="btn btn-round" color="info" href="#pablo" 
                        onClick={e => e.preventDefault()} size="lg">
                        Send
                        </Button>
                    </Col>
                    <Col className="ml-auto mr-auto"> Demo text to fill up other half</Col>
                </Row>
            </CardBody>
            </Form>
            
    )
}

export default HomeContact