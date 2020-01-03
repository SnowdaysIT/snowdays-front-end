import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"

class InternalRegistration extends React.Component {

    constructor() {
        super()
        this.state = {
            showHostCard: true,
            showHelperCard: false,
            showAddressFields: false
        }
    }

    toggleHostHelper = (e) => {
        let selected_value = e.target.value
        selected_value = selected_value.toLowerCase();

        if (selected_value === "host") {
            this.setState({
                showHostCard: true,
                showHelperCard: false,
            });
        } else if(selected_value === "helper") {
            this.setState({
                showHostCard: false,
                showHelperCard: true,
            });
        } else {
            this.setState({
                showHostCard: false,
                showHelperCard: false,
            });
        }
    }

    toggleAddressHalls = (e) => {
        let selected_value = e.target.value
        selected_value = selected_value.toLowerCase();

        if (selected_value === "student hall") {
            this.setState({
                showAddressFields: false
            });
        } else {
            this.setState({
                showAddressFields: true
            });
        }
    }

    render() {
        return (
            <Container>
                <Form>
                    <Card className="p-2 mt-4">
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
                            <Row form className="mt-1">
                                <Col>
                                    <FormGroup>
                                        <Label for="firstName">Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Mario" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="lastName">Surname</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Pizza" />
                                    </FormGroup>
                                </Col>
                            </Row>
    
                            <Row form className="mt-2">
                                <Col>
                                    <FormGroup>
                                        <Label for="userEmail">Email</Label>
                                        <Input type="email" name="email" id="userEmail" placeholder="mario@unibz.it" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="phone">Phone Number</Label>
                                        <Input type="text" name="phone" id="phone" placeholder="+39 111 22 33 456" />
                                    </FormGroup>
                                </Col>
                            </Row>
    
    
                            <Row form className="mt-2">
                                <Col>
                                    <FormGroup>
                                        <Label for="enrollmentNumber">Enrollment Number (Matrikelnummer)</Label>
                                        <Input type="text" name="enrollmentNumber" id="enrollmentNumber" placeholder="123456" />
                                    </FormGroup>
                                </Col>
    
                                <Col>
                                    <FormGroup>
                                        <Label for="participationType">Participation Type</Label>
                                        <Input type="select" name="participationType" id="participationType" onChange={this.toggleHostHelper}>
                                            <option>Host</option>
                                            <option>Helper</option>
                                            <option>Normal</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
    
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="gender">Gender</Label>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="gender" />{' '}
                                                Male
                                    </Label>
                                            <Label check>
                                                <Input type="radio" name="gender" />{' '}
                                                Female
                                    </Label>
                                            <Label check >
                                                <Input type="radio" name="gender" />{' '}
                                                Other
                                    </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
    
                            </Row>
                        </CardBody>
                    </Card>
    
                    <Card className={this.state.showHelperCard ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Helper Data</CardTitle>
                            <FormGroup>
                                <Label for="helperPreference">Helper Preference</Label>
                                <Input type="select" name="helperPreference" id="helperPreference">
                                    <option>Catering</option>
                                    <option>Sports</option>
                                    <option>Logistics</option>
                                    <option>Party</option>
                                    <option>C&A</option>
                                    <option>Spirit</option>
                                </Input>
                            </FormGroup>
                        </CardBody>
                    </Card>

                    <Card className={this.state.showHostCard ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="hostingType">Helper Preference</Label>
                                        <Input type="select" name="hostingType" id="hostingType" onChange={this.toggleAddressHalls}>
                                            <option>Student hall</option>
                                            <option>WG</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4} className={this.state.showAddressFields ? "collapsed" : ""}>
                                <FormGroup>
                                    <Label for="hostHall">Student Hall</Label>
                                    <Input type="select" name="hostHall" id="hostHall">
                                        <option>Peter-Rigler</option>
                                        <option>University</option>
                                        <option>Rainerum</option>
                                        <option>Dante appartments</option>
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                        
                            <Row form className={this.state.showAddressFields ? "" : "collapsed"}>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="text" name="address" id="address" placeholder="Piazza Università 1" />
                                    </FormGroup>
                                </Col>
                               
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="zip">Zip</Label>
                                        <Input type="number" name="zip" id="zip" placeholder="39100"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input type="text" name="city" id="city" placeholder="Bolzano"/>
                                    </FormGroup>
                                </Col>
                                
                            </Row>
                            <br/>
                            <FormGroup row>
                                <Label className="ml-3 mt-1" for="nrHosted">Number of people you plan on hosting</Label> 
                                <Col sm={2}>
                                <Input type="number" name="nrHosted" id="nrHosted" placeholder="3"/>
                                </Col>
                            </FormGroup>

                        </CardBody>
                    </Card>
    
                    <Card className="p-2 mt-1">
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Event and Sports Data</CardTitle>
                            
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="city">Height (cm)</Label>
                                        <Input type="number" name="height" id="height" placeholder="180"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="zip">Weight (kg)</Label>
                                        <Input type="number" name="weight" id="weight" placeholder="80"/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="lunchTime">Lunch Timeslot</Label>
                                        <Input type="select" name="lunchTime" id="lunchTime">
                                        <option>12-13</option>
                                        <option>13-14</option>
                                        <option>14-15</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="dinnerTime">Lunch Timeslot</Label>
                                        <Input type="select" name="dinnerTime" id="dinnerTime">
                                        <option>18-19</option>
                                        <option>19-20</option>
                                        <option>20-21</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="vegetarian">Are you vegetarian?</Label>
                                        <Input type="select" name="vegetarian" id="vegetarian">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>


                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="tSize">T-Shirt Size</Label>
                                        <Input type="select" name="tSize" id="tSize">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="zip">Chosing sports here</Label>
                                        <Input type="number" name="weight" id="weight" placeholder="80"/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <span className="details">Be aware that you won’t be able to modify the information given here after the enrolment closes.</span>
                            <br/>
                            <span className="details">Rental material will be prepared before the event based on the given information.</span>
                        </CardBody>
                    </Card>
    
                    <Button className="btn btn-primary pull-right">REGISTER</Button>
                </Form>
            </Container>
        );
    }
    
}

export default InternalRegistration;
