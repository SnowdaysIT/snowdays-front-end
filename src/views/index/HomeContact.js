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
    UncontrolledTooltip
} from "reactstrap";


function HomeContact(params) {
    const areaFocus = React.useState(false);
    const emailFocus = React.useState(false);

    return (
        <>
            <CardHeader className="text-center" style={{ backgroundColor: "#404040" }} >
                <CardTitle className="title-up mt-2" tag="h2" style={{ color: "white" }} >
                    Contact Us
                </CardTitle>
            </CardHeader>
            <CardBody data-background-color="black">
                <Row className="justify-content-center text-center mb-4 mt-2">
                    <Form action="" className="form" method="" style={{ width: "80%" }}>
                        <InputGroup className={"no-border" + (emailFocus ? " input-group-focus" : "")}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="now-ui-icons ui-1_email-85 pr-5 pl-3"></i>
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
                    </Form>
                </Row>
                <h3 className="text-center mt-2">Follow us on social media!</h3>
                <Row className="justify-content-center text-center">
                    <Button
                        className="btn-neutral btn-icon btn-round mr-3"
                        color="twitter"
                        href="https://twitter.com/bolzanosnowdays"
                        id="tooltip86114138"
                        size="lg"
                        target="_blank"
                    >
                        <i className="fab fa-twitter"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip86114138">
                        Follow us
                        </UncontrolledTooltip>

                    <Button
                        className="btn-neutral btn-icon btn-round"
                        color="facebook"
                        href="https://www.facebook.com/Snowdays.Bolzano/"
                        id="tooltip735272548"
                        size="lg"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-square"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip735272548">
                        Like us
                        </UncontrolledTooltip>

                    <Button
                        className="btn-neutral btn-icon btn-round ml-3"
                        color="instagram"
                        href="https://www.instagram.com/snowdays.bolzano/"
                        id="tooltip647117716"
                        size="lg"
                        target="_blank"
                    >
                        <i className="fab fa-instagram"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip647117716">
                        Follow us
                        </UncontrolledTooltip>
                </Row>

            </CardBody>
        </>
    )
}

export default HomeContact