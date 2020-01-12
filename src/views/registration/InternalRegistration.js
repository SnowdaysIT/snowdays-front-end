import React from 'react';
import { Link } from "react-router-dom";

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"
 

class InternalRegistration extends React.Component {

    // constants for more elegant solutions of jsx building
    helper_types = ["Catering", "Sports", "C&A", "Logistics", "Party", "Spirit"]
    shoe_sizes = [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
    dorm_data_dict = {

    }

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            enrollmentNumber: 0,
            gender: "male",
            phoneNumber: "",
            participationType: "host",
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
            isVeg: false,
            secondDaySkiOrSnow: true,
            thirdDaySkiOrSnow: true,
            courseType: "Ski",
            raceType: "Ski",
            doesJIB: true,
            doesSnowVolley: true,
            doesHTF: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Welcome to snowdays 2020: ' + this.state.name);        
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        const token = localStorage.getItem('token');  
        return (
            <Container>
                {token && 
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Card className="p-2 mt-4">
                        <CardBody className="p-1">
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
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
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Helper Data</CardTitle>
                            
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
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
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
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Event and Sports Data</CardTitle>
                            
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
                                        <Input type="select" name="vegetarian" id="vegetarian" value={this.state.isVeg ? "yes": "no"}
                                                onChange={(e) => {
                                                    let userInput = e.target.value

                                                    if (userInput === "yes") {
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
                                <Col>
                                    <FormGroup>
                                        <Label for="secondskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="secondskiorsnow" id="secondskiorsnow" value={this.state.secondDaySkiOrSnow ? "yes": "no"}
                                                onChange={(e) => {
                                                    let userInput = e.target.value
                                                    
                                                    if (userInput === "yes") {
                                                        this.setState({secondDaySkiOrSnow: true})
                                                    } else {
                                                        this.setState({secondDaySkiOrSnow: false})
                                                    }
                                                }}
                                        >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="skicourse">Ski/Snowboard Course</Label>
                                        <Input type="select" name="skicourse" id="skicourse" value={this.state.courseType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({courseType: e.target.value})
                                                    }
                                                }
                                        >
                                            <option value="Ski">Ski</option>
                                            <option value="Snowboard">Snowboard</option>
                                            <option value="None">None</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="skirace">Ski/Snowboard Race</Label>
                                        <Input type="select" name="skirace" id="skirace" value={this.state.raceType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({raceType: e.target.value})
                                                    }
                                                }
                                        >
                                        <option value="Ski">Ski</option>
                                        <option value="Snowboard">Snowboard</option>
                                        <option value="None">None</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="jib">JIB Session</Label>
                                        <Input type="select" name="jib" id="jib" value={this.state.doesJIB ? "yes": "no"}
                                                onChange={(e) => {
                                                    let userInput = e.target.value
                                                    
                                                    if (userInput === "yes") {
                                                        this.setState({doesJIB: true})
                                                    } else {
                                                        this.setState({doesJIB: false})
                                                    }
                                                }}
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>
                            </Row>

                            <h5 className="title category">Third day activities</h5>
                            <Row>
                                <Col sm={4}>
                                    <FormGroup>
                                        <Label for="thirdskiorsnow">Will you be skiing or snowboarding?</Label>
                                        <Input type="select" name="thirdskiorsnow" id="thirdskiorsnow" value={this.state.thirdDaySkiOrSnow ? "yes": "no"}
                                                onChange={(e) => {
                                                    let userInput = e.target.value
                                                    
                                                    if (userInput === "yes") {
                                                        this.setState({secondDaySkiOrSnow: true})
                                                    } else {
                                                        this.setState({secondDaySkiOrSnow: false})
                                                    }
                                                }}
                                        >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={4}>
                                    <FormGroup>
                                        <Label for="snowvolley">Snowvolley tournament</Label>
                                        <Input type="select" name="snowvolley" id="snowvolley" value={this.state.doesSnowVolley ? "yes" : "no"}
                                                onChange={
                                                    (e) => {
                                                        let userInput = e.target.value
                                                        console.log(userInput);
                                                        if (userInput === "yes") {
                                                            this.setState({doesSnowVolley: true})
                                                        } else {
                                                            this.setState({doesSnowVolley: false})
                                                        }
                                                    }
                                                }
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col sm={4}>
                                    <FormGroup>
                                        <Label for="htftournament">Human table football tournament</Label>
                                        <Input type="select" name="htftournament" id="htftournament" value={this.state.doesHTF ? "yes" : "no"}
                                                onChange={
                                                    (e) => {
                                                        let userInput = e.target.value
                                                        console.log(userInput);
                                                        if (userInput === "yes") {
                                                            this.setState({doesSnowVolley: true})
                                                        } else {
                                                            this.setState({doesSnowVolley: false})
                                                        }
                                                    }
                                                }
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>
                            </Row>

                            <h5 className="title category">Rental needs</h5>
                            <Row form>
                                <div className="mt-1 container-fluid">
                                    <span className="check-separator">
                                        <label htmlFor="skiRental">Skiis</label>
                                        <input className="rental-checkbox" type="checkbox" id="skiRental" name="skiRental" value="" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="skiBootRental">Ski boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="skiBootRental" name="skiBootRental" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="skiStickRental">Ski sticks</label>
                                        <input className="rental-checkbox" type="checkbox" id="skiStickRental" name="skiStickRental" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="snowRental">Snowboard</label>
                                        <input className="rental-checkbox" type="checkbox" id="snowRental" name="snowRental" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="snowBootsRental">Snowboard Boots</label>
                                        <input className="rental-checkbox" type="checkbox" id="snowBootsRental" name="snowBootsRental" />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="helmetRental">Helmet</label>
                                        <input className="rental-checkbox" type="checkbox" id="helmetRental" name="helmetRental" />
                                    </span>
                                </div>
                                <span className="details">*Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information.*</span>                                                         
                            </Row>

                            <h5 className="title category">Extra basecamp activities</h5>
                            <span>These are the activities you can do at the basecamp <b>during both days</b> with some exceptions (Check all that apply)</span>
                            <Row form>
                                <div className="mt-2 container">
                                    <span className="check-separator">
                                        <label htmlFor="thirdbeerpong">Beer pong</label>
                                        <input className="rental-checkbox" type="checkbox" id="thirdbeerpong" name="thirdbeerpong" />
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

                                    <span className="check-separator">
                                        <label htmlFor="snowwalking">Snowshoes walking <b>(second day only)</b></label>
                                        <input className="rental-checkbox" type="checkbox" id="snowwalking" name="snowwalking" />
                                    </span>

                                    {/* <span className="check-separator">
                                        <label htmlFor="tableboulder">Table boulder contest</label>
                                        <input className="rental-checkbox" type="checkbox" id="tableboulder" name="tableboulder" />
                                    </span> */}

                                </div>                                
                            </Row>
                        
                        </CardBody>
                    </Card>
                   
                    <Button className="btn btn-primary pull-right">REGISTER</Button>
                </Form>}
                {!token && 
                    <Card className="p-2 mt-4">
                    <CardBody className="p-1 pull-center text-center">
                        <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>You are not registered yet!</CardTitle>
                        <Link to="/signup" className="mt-2 h2" tag="h3">Please do that first!</Link>
                    </CardBody>
                </Card>
                }
            </Container>
        );
    }
    
}

export default InternalRegistration;
