import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"
import MultipleChoiceDropdown from '../../components/form/MultipleChoiceDropdown';

class InternalRegistration extends React.Component {

    constructor() {
        super()
        this.state = {
            willHost: true,
            willHelp: false,
            showAddressFields: false
        }
    }

    render() {
        return (
            <Container>
                <Form inline>
                    <Card className="p-2 mt-4">
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
                            <Row form className="mt-1">
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="firstName">Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Mario" />
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="lastName">Surname</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Pizza" />
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="gender">Gender</Label>
                                        <Input type="select" name="gender" id="gender">
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    gender: 'm',
                                                });
                                            }
                                            }>Male</option>
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    gender: 'f',
                                                });
                                            }
                                            }>Female</option>
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    gender: 'o',
                                                });
                                            }
                                            }>Other</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="userEmail">Email</Label>
                                        <Input type="email" name="email" id="userEmail" placeholder="mario@unibz.it" />
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="phone">Phone Number</Label>
                                        <Input type="text" name="phone" id="phone" placeholder="+39 111 22 33 456" />
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="enrollmentNumber">Student number</Label>
                                        <Input type="text" name="enrollmentNumber" id="enrollmentNumber" placeholder="123456" />
                                    </FormGroup>
                                </Col>
    
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="participationType">Participation type</Label>
                                        <Input type="select" name="participationType" id="participationType">
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    willHost: true,
                                                    willHelp: false,
                                                });
                                            }
                                            }>Host</option>
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    willHost: false,
                                                    willHelp: true,
                                                });
                                            }
                                            }>Helper</option>
                                            <option onClick={ (e) => {
                                                this.setState({
                                                    willHost: false,
                                                    willHelp: false,
                                                });
                                            }
                                            }>Normal</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
    
                    <Card className={this.state.willHelp ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
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

                    <Card className={this.state.willHost ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="nrHosted">Guests</Label> 
                                        <Input type="number" name="nrHosted" id="nrHosted" placeholder="3"/>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="hostingType">Accommodation</Label>
                                        <Input type="select" name="hostingType" id="hostingType">
                                            <option onClick={ (e) => {
                                                this.setState({showAddressFields: false});
                                            }
                                            }>Student hall</option>
                                            <option onClick={ (e) => {
                                                this.setState({showAddressFields: true});
                                            }
                                            }>WG</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <h5 className="title category">Details</h5>
                            <Row form>
                                <Col xs="auto" className={this.state.showAddressFields ? "collapsed" : ""}>
                                <FormGroup>
                                    <Label for="hostHall">Student Hall</Label>
                                    <Input type="select" name="hostHall" id="hostHall">
                                        <option>Peter-Rigler</option>
                                        <option>Univercity</option>
                                        <option>Rainerum</option>
                                        <option>Dante appartments</option>
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                        
                            <Row form className={this.state.showAddressFields ? "" : "collapsed"}>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="text" name="address" id="address" placeholder="Piazza Università 1" />
                                    </FormGroup>
                                </Col>
                               
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="zip">Zip</Label>
                                        <Input type="number" name="zip" id="zip" placeholder="39100"/>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input type="text" name="city" id="city" placeholder="Bolzano"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
    
                    <Card className="p-2 mt-1">
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Event and Sports Data</CardTitle>
                            
                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="city">Height (cm)</Label>
                                        <Input type="number" name="height" id="height" placeholder="180" min="120" max="230"/>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="zip">Weight (kg)</Label>
                                        <Input type="number" name="weight" id="weight" placeholder="80" min="40" max="400"/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="lunchTime">Lunch Timeslot</Label>
                                        <Input type="select" name="lunchTime" id="lunchTime">
                                        <option>12-13</option>
                                        <option>13-14</option>
                                        <option>14-15</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="dinnerTime">Dinner Timeslot</Label>
                                        <Input type="select" name="dinnerTime" id="dinnerTime">
                                        <option>18-19</option>
                                        <option>19-20</option>
                                        <option>20-21</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="vegetarian">Are you vegetarian?</Label>
                                        <Input type="select" name="vegetarian" id="vegetarian">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col xs="auto">
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
                            </Row>

                            <h5 className="title category">Second day activities</h5>
                            <Row>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="secondskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="secondskiorsnow" id="secondskiorsnow">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="skicourse">Ski/Snowboard Course</Label>
                                        <Input type="select" name="skicourse" id="skicourse">
                                        <option>Ski (beginner)</option>
                                        <option>Ski (intermediate)</option>
                                        <option>Snowboard (beginner)</option>
                                        <option>Snowboard (intermediate)</option>
                                        <option>None</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="skirace">Ski/Snowboard Race</Label>
                                        <Input type="select" name="skirace" id="skirace">
                                        <option>Ski</option>
                                        <option>Snowboard</option>
                                        <option>None</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="jib">JIB Session</Label>
                                        <Input type="select" name="jib" id="jib">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>
                            </Row>
                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="secondDayActivities">Other activities</Label>
                                        <MultipleChoiceDropdown
                                            inputName="secondDayActivities"
                                            elements={
                                                [
                                                    "Beer pong",
                                                    "Snowshoes walking",
                                                    "Line dragging",
                                                    "Twister",
                                                    "Slackline",
                                                    "Flunky ball"
                                                ]
                                            }/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="secondDayRental">Rental material *</Label>
                                        <MultipleChoiceDropdown
                                            inputName="secondDayRental"
                                            elements={
                                                [
                                                    "Skiis",
                                                    "Ski boots",
                                                    "Ski sticks",
                                                    "Snowboard",
                                                    "Snowboard Boots",
                                                    "Helmet"
                                                ]
                                            }/>
                                        <span className="details">* Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information</span>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <h5 className="title category">Third day activities</h5>
                            <Row>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="thirdskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="thirdskiorsnow" id="thirdskiorsnow">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="snowvolley">Snowvolley tournament</Label>
                                        <Input type="select" name="snowvolley" id="snowvolley" disabled>
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="htftournament">Human table football tournament</Label>
                                        <Input type="select" name="htftournament" id="htftournament" disabled>
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>
                            </Row>
                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="secondDayRental">Other activities</Label>
                                        <MultipleChoiceDropdown
                                            inputName="thirdDayActivities"
                                            elements={
                                                [
                                                    "Beer pong",
                                                    "Table boulder contest",
                                                    "Line dragging",
                                                    "Twister",
                                                    "Slackline",
                                                    "Flunky ball"
                                                ]
                                            }/>
                                    </FormGroup>
                                </Col>                              
                            </Row>

                            <Row form>
                                <Col xs="auto">
                                    <FormGroup>
                                        <Label for="secondDayRental">Rental material *</Label>
                                        <MultipleChoiceDropdown
                                            inputName="thirdDayRental"
                                            elements={
                                                [
                                                    "Skiis",
                                                    "Ski boots",
                                                    "Ski sticks",
                                                    "Snowboard",
                                                    "Snowboard Boots",
                                                    "Helmet"
                                                ]
                                            }/>
                                            <span className="details">* Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information</span>
                                    </FormGroup>
                                </Col>                                                             
                            </Row>
                        
                        </CardBody>
                    </Card>
                   
                    <Button className="btn btn-primary pull-right">REGISTER</Button>
                </Form>
            </Container>
        );
    }
    
}

export default InternalRegistration;
