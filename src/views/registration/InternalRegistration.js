import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"

class InternalRegistration extends React.Component {

    // constants for more elegant solutions of jsx building
    helper_types = ["Catering", "Sports", "C&A", "Logistics", "Party", "Spirit"]
    shoe_sizes = [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            enrollmentNumber: 0,
            participationType: "host",
            gender: "male",
            phoneNumber: "",
            isHost: true,
            hostType: "studentHall",
            hostHall: "",
            wgAddress: "",
            wgZip: 0,
            wgCity: "",
            nrHosting: 0,
            isHelper: false,
            helperType: "",
            height: 0,
            weight: 0,
            shoeSize: 35,
            teeSize: "S",
            xpLvl: "Beginner",
            lunchTime: "12-13",
            dinnerTime: "18-19",
            vegSelection: "no",
            isVeg: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Welcome to snowdays 2020: ' + this.state.name);        
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Card className="p-2 mt-4">
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
                            <Row form className="mt-1">
                                <Col>
                                    <FormGroup>
                                        <Label for="firstName">Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Mario" 
                                            onChange={ (e) => {
                                                this.setState({name: e.target.value})
                                            }
                                        }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="lastName">Surname</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Pizza" 
                                            onChange={ (e) => {
                                                this.setState({surname: e.target.value})
                                            }
                                        }/>
                                    </FormGroup>
                                </Col>
                            </Row>
    
                            <Row form className="mt-2">
                                <Col>
                                    <FormGroup>
                                        <Label for="enrollmentNumber">Enrollment Number</Label>
                                        <Input type="number" name="enrollmentNumber" id="enrollmentNumber" placeholder="123456"
                                            onChange={ (e) => {
                                                this.setState({enrollmentNumber: e.target.value}, () => {
                                                    if (this.state.enrollmentNumber >= 17573) {
                                                        document.getElementById('normalParticipationOption').disabled = true;
                                                        document.getElementById('participationType').selectedIndex = "0"
                                                        this.setState({
                                                            participationType: "host",
                                                            isHost: true,
                                                            isHelper: false
                                                        })
                                                    } else {
                                                        document.getElementById('normalParticipationOption').disabled = false;
                                                    }
                                                });
                                            }
                                        }/>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="phone">Phone Number</Label>
                                        <Input type="text" name="phone" id="phone" placeholder="+39 111 22 33 456" 
                                            onChange = { (e) => {
                                                this.setState({phoneNumber: e.target.value})
                                            }
                                        }/>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="participationType">Participation Type</Label>
                                        <Input type="select" name="participationType" id="participationType" value={this.state.participationType}
                                                onChange={
                                                    (e) => {
                                                        let participationInput = e.target.value
                                                        
                                                        this.setState({participationType: e.target.value})
                                                        if (participationInput === "host") {
                                                            this.setState({
                                                                isHost: true,
                                                                isHelper: false,
                                                            })
                                                        } else if (participationInput === "helper") {
                                                            this.setState({
                                                                isHost: false,
                                                                isHelper: true
                                                            })
                                                        } else if (participationInput === "hosthelper") {
                                                            this.setState({
                                                                isHost: true,
                                                                isHelper: true
                                                            })
                                                        } else {
                                                            this.setState({
                                                                isHost: false,
                                                                isHelper: false
                                                            })
                                                        }
                                                    }
                                                }
                                        >
                                            <option id="hostParticipationOption" value="host">Host</option>
                                            <option id="helperParticipationOption" value="helper">Helper</option>
                                            <option id="helperhostParticipationOption" value="hosthelper">Host and Helper</option>
                                            <option id="normalParticipationOption" value="normal" disabled>Normal</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
    
                                <Col>
                                    <FormGroup>
                                        <Label for="gender">Gender</Label>
                                        <Input type="select" name="gender" id="gender" value={this.state.gender} 
                                                onChange={
                                                    (e) => { 
                                                        this.setState({gender: e.target.value})
                                                    }
                                                }
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
    
                            <Row form className="mt-2">
                                IMG upload of docs
                            </Row>

                        </CardBody>
                    </Card>
    
                    <Card className={(this.state.isHelper === true) ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Helper Data</CardTitle>
                            
                            <FormGroup>
                                <Label for="helperPreference">Helper Preference</Label>
                                <Input type="select" name="helperPreference" id="helperPreference" value={this.state.helperType}
                                        onChange={
                                            (e) => {
                                                this.setState({
                                                    helperType: e.target.value
                                                })
                                            }
                                        }
                                >
                                    {this.helper_types.map((helper_type, key) => (
                                        <option key={key} value={helper_type.toLowerCase()}>{helper_type}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </CardBody>
                    </Card>

                    <Card className={(this.state.isHost === true) ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle tag="h3" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="hostingType">Helper Preference</Label>
                                        <Input type="select" name="hostingType" id="hostingType" value={this.state.hostType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({hostType: e.target.value})
                                                    }
                                                }
                                        >
                                            <option value="studentHall">Student hall</option>
                                            <option value="wg">WG</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4} className={!(this.state.hostType==="studentHall") ? "collapsed" : ""}>
                                <FormGroup>
                                    <Label for="hostHall">Student Hall Selection</Label>
                                    {/* TODO:  Add hosting number limits and autofill number of people field*/}
                                    <Input type="select" name="hostHall" id="hostHall" value={this.hostHall}
                                            onChange={
                                                (e) => {
                                                    this.setState({hostHall: e.target.value})
                                                }
                                            }
                                    >
                                        <option value="rigler">Peter-Rigler</option>
                                        <option value="univercity">University</option>
                                        <option value="rainerum">Rainerum</option>
                                        <option value="dante">Dante appartments</option>
                                    </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                        
                            <Row form className={(this.state.hostType==="wg") ? "" : "collapsed"}>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="text" name="address" id="address" placeholder="Piazza Università 1" 
                                                onChange={(e) => {this.setState({wgAddress: e.target.value})}} />
                                    </FormGroup>
                                </Col>
                               
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="zip">Zip</Label>
                                        <Input type="number" name="zip" id="zip" placeholder="39100"
                                                onChange={(e) => {this.setState({wgZip: e.target.value})}} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input type="text" name="city" id="city" placeholder="Bolzano"
                                                onChange={(e) => {this.setState({wgCity: e.target.value})}} />
                                    </FormGroup>
                                </Col>
                                
                            </Row>
                            <FormGroup row>
                                <Label className="ml-3" for="nrHosted" style={{marginTop: "0.6%"}}>Number of people you plan on hosting</Label> 
                                <Col sm={2}>
                                <Input type="number" name="nrHosted" id="nrHosted" placeholder="2" 
                                    onChange={(e) => {this.setState({nrHosting: e.target.value})}}
                                />
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
                                        <Label for="height">Height (cm)</Label>
                                        <Input type="number" name="height" id="height" placeholder="180"
                                                onChange={(e) => {this.setState({height: e.target.value})}}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="zip">Weight (kg)</Label>
                                        <Input type="number" name="weight" id="weight" placeholder="80"
                                                onChange={(e) => {this.setState({weight: e.target.value})}}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="shoeSize">Shoe size (EU)</Label>
                                        <Input type="select" name="shoeSize" id="shoeSize" value={this.state.shoeSize}
                                            onChange={(e) => {this.setState({shoeSize: e.target.value})}}
                                        >

                                                {this.shoe_sizes.map((shoe_size, key) => (
                                                <option key={key} value={shoe_size}>{shoe_size}</option>
                                            ))}
                                           
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="tSize">T-Shirt size</Label>
                                        <Input type="select" name="tSize" id="tSize" value={this.state.teeSize}
                                                onChange={(e) => {this.setState({teeSize: e.target.value})}}
                                        >
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="xpLvl">Ski experience level</Label>
                                        <Input type="select" name="xpLvl" id="xpLvl" value={this.state.xpLvl}
                                                onChange={(e) => {this.setState({xpLvl: e.target.value})}}
                                        >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="lunchTime">Preferred lunch timeslot</Label>
                                        <Input type="select" name="lunchTime" id="lunchTime" value={this.state.lunchTime}
                                                onChange={(e) => {this.setState({lunchTime: e.target.value})}}
                                        >
                                            <option value="12-13">12-13</option>
                                            <option value="13-14">13-14</option>
                                            <option value="14-15">14-15</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="dinnerTime">Preferred dinner timeslot</Label>
                                        <Input type="select" name="dinnerTime" id="dinnerTime" value={this.state.dinnerTime}
                                                onChange={(e) => {this.setState({dinnerTime: e.target.value})}}
                                        >
                                            <option value="18-19">18-19</option>
                                            <option value="19-20">19-20</option>
                                            <option value="20-21">20-21</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="vegetarian">Are you vegetarian?</Label>
                                        <Input type="select" name="vegetarian" id="vegetarian" value={this.state.vegSelection}
                                                onChange={(e) => {
                                                    let userVegInput = e.target.value
                                                    this.setState({vegSelection: userVegInput})
                                                    console.log(userVegInput)
                                                    if (userVegInput === "yes") {
                                                        this.setState({isVeg: true})
                                                    } else {
                                                        this.setState({isVeg: false})
                                                    }
                                                }}
                                        >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <h5 className="title category">Second day activities</h5>
                            <Row>
                                {/* TODO: add experience level and shoe size fields, remove xp level from course selection */}
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
                                            <option>Ski</option>
                                            <option>Snowboard</option>
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

                                    {/* <span className="check-separator">
                                        <label htmlFor="tableboulder">Table boulder contest</label>
                                        <input className="rental-checkbox" type="checkbox" id="tableboulder" name="tableboulder" />
                                    </span> */}

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
