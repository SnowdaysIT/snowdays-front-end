import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"

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
                                <Col>
                                    <FormGroup>
                                        <Label for="hostingType">Helper Preference</Label>
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
                                <Col md={4} className={this.state.showAddressFields ? "collapsed" : ""}>
                                <FormGroup>
                                    <Label for="hostHall">Student Hall Selection</Label>
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
                                        <Label for="dinnerTime">Dinner Timeslot</Label>
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

                                <Col md={2}>
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
                                <Col sm={3}>
                                    <FormGroup>
                                        <Label for="secondskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="secondskiorsnow" id="secondskiorsnow">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={3}>
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

                                <Col sm={3}>
                                    <FormGroup>
                                        <Label for="skirace">Ski/Snowboard Race</Label>
                                        <Input type="select" name="skirace" id="skirace">
                                        <option>Ski</option>
                                        <option>Snowboard</option>
                                        <option>None</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={3}>
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
                                <label className="ml-1 mt-3">Other activities(Check all that apply)</label>
                                <div className="mt-1 container">
                                    <span className="check-separator">
                                        <label htmlFor="secondbeerpong">Beer pong</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondbeerpong" name="secondbeerpong" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="snowwalking">Snowshoes walking</label>
                                        <input className="rental-checkbox" type="checkbox" id="snowwalking" name="snowwalking" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondlinedrag">Line dragging</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondlinedrag" name="secondlinedrag" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondtwister">Twister</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondtwister" name="secondtwister" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondslackline">Slackline</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondslackline" name="secondslackline" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondflunkyball">Flunky ball</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondflunkyball" name="secondflunkyball" />
                                    </span>
                                </div>                                
                            </Row>

                            <Row form>
                                <h6 tag="h5" className="ml-1 mt-3">Second day rental material (check all that apply)</h6>
                                <div className="mt-1 container-fluid">
                                    <span className="check-separator">
                                        <label htmlFor="secondski">Skiis</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondski" name="secondski" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondskiboots">Ski boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondskiboots" name="secondskiboots" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondskisticks">Ski sticks</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondskisticks" name="secondskisticks" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondsnowboard">Snowboard</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondsnowboard" name="secondsnowboard" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondsnowboots">Snowboard Boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondsnowboots" name="secondsnowboots" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="secondhelmet">Helmet</label>
                                        <input className="rental-checkbox" type="checkbox" id="secondhelmet" name="secondhelmet" />
                                    </span>
                                </div>
                                <span className="details">*Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information</span>                             
                            </Row>

                            <h5 className="title category">Third day activities</h5>
                            <Row>
                                <Col sm={4}>
                                    <FormGroup>
                                        <Label for="thirdskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="thirdskiorsnow" id="thirdskiorsnow">
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={4}>
                                    <FormGroup>
                                        <Label for="snowvolley">Snowvolley tournament</Label>
                                        <Input type="select" name="snowvolley" id="snowvolley" disabled>
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={4}>
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
                                <label className="ml-1 mt-3">Other activities(Check all that apply)</label>
                                <div className="mt-1 container">
                                    <span className="check-separator">
                                        <label htmlFor="thirdbeerpong">Beer pong</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdbeerpong" name="thirdbeerpong" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="tableboulder">Table boulder contest</label>
                                        <input className="rental-checkbox" type="checkbox" id="tableboulder" name="tableboulder" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdlinedrag">Line dragging</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdlinedrag" name="thirdlinedrag" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdtwister">Twister</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdtwister" name="thirdtwister" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdslackline">Slackline</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdslackline" name="thirdslackline" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdflunkyball">Flunky ball</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdflunkyball" name="thirdflunkyball" />
                                    </span>
                                </div>                                
                            </Row>

                            <Row form>
                                <h6 tag="h5" className="ml-1 mt-3">Third day rental needs (check all that apply)</h6>
                                <div className="mt-1 container-fluid">
                                    <span className="check-separator">
                                        <label htmlFor="thirdski">Skiis</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdski" name="thirdski" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdskiboots">Ski boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdskiboots" name="thirdskiboots" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdskisticks">Ski sticks</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdskisticks" name="thirdskisticks" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdsnowboard">Snowboard</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdsnowboard" name="thirdsnowboard" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdsnowboots">Snowboard Boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdsnowboots" name="thirdsnowboots" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="thirdhelmet">Helmet</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdhelmet" name="thirdhelmet" />
                                    </span>
                                </div>                                
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
