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
    UncontrolledTooltip,
} from "reactstrap";

class HomeContact extends React.Component {
    
    constructor() {
        super()
        this.state = {
            emailFocus: false,
            areaFocus: false,
            userEmail: "",
            userMessage: "",
        }

    }
   

    render() {
        return (
            <>
                <CardHeader className="text-center" style={{ backgroundColor: "#404040" }} >
                    <CardTitle className="title-up mt-2" tag="h2" style={{ color: "white" }} >
                        Stay in touch
                    </CardTitle>
                </CardHeader>
                <CardBody data-background-color="black">
                    <Row className="justify-content-center text-center social-icons">
                        <Button
                            className="btn-neutral btn-icon btn-round"
                            color="instagram"
                            href="https://www.instagram.com/snowdays.bolzano/"
                            id="instagram-button"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="instagram-button">
                            Follow
                        </UncontrolledTooltip>
    
                        <Button
                            className="btn-neutral btn-icon btn-round ml-3"
                            color="facebook"
                            href="https://www.facebook.com/Snowdays.Bolzano/"
                            id="facebook-button"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="facebook-button">
                            Like
                        </UncontrolledTooltip>
    
                        <Button
                            className="btn-neutral btn-icon btn-round ml-3"
                            color="youtube"
                            href="https://www.youtube.com/channel/UCthdDzE2fTo47z26YIDDf-g"
                            id="youtube-button"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fab fa-youtube"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="youtube-button">
                           Subscribe
                        </UncontrolledTooltip>

                        <Button
                            className="btn-neutral btn-icon btn-round ml-3"
                            color="facebook"
                            href="mailto:info@snowdays.it?subject=Snowdays%202020%20info"
                            id="mail-button"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fas fa-at"></i>                        
                        </Button>
                        <UncontrolledTooltip delay={0} target="mail-button">
                           Mail
                        </UncontrolledTooltip>
                    </Row>
                </CardBody>
            </>
        )
    }
    
}

export default HomeContact