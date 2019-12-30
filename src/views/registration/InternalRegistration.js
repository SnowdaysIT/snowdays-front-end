import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';

const InternalRegistration = (props) => {
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
                                    <Input type="select" name="participationType" id="participationType">
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

                <Card className="p-2 mt-1">
                    <CardBody className="p-1">
                        <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" placeholder="Piazza Università 1" />
                        </FormGroup>
                    
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input type="text" name="city" id="city" placeholder="Bolzano"/>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="zip">Zip</Label>
                                    <Input type="number" name="zip" id="zip" placeholder="39100"/>
                                </FormGroup>
                            </Col>
                        </Row>
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
                        <span className="details">Be aware that you won’t be able to modify the information given here after the enrolment closes.</span>
                        <br/>
                        <span className="details">Rental material will be prepared before the event based on the given information.</span>
                    </CardBody>
                </Card>

                <Button className="btn btn-primary">REGISTER</Button>
            </Form>
        </Container>
    );
}

export default InternalRegistration;
