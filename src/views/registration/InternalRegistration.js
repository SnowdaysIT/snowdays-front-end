import React from 'react';
import { Link } from "react-router-dom";

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Container } from 'reactstrap';
import "../../assets/css/signup.css"

// Constants for more elegant jsx building and price calculation
const helper_types = ["Catering", "Sports", "C&A", "Logistics", "Party", "Spirit"]
const shoe_sizes = [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
const animal_host = [4,5,6,7,8,9,10,11,12,13,14,15]
const wg_host = [2,3,4,5,6,7,8,9,10]
const prices = {
    base: 120,
    helper: 90,
    host: 90,
    hosthelper: 75,
    hostMany: 50,
    partyAnimal: 0
}


class InternalRegistration extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            enrollmentNumber: 0,
            phoneNumber: "",
            participationType: "host",
            gender: "male",
            personalId: "ci",
            personalIdNr: 0,
            isHost: true,
            hostType: "studentHall",
            hostHall: "rigler",
            aptType: "single", 
            roomNr: "",
            wgAddress: "",
            wgZip: 0,
            wgCity: "",
            nrHosting: 1,
            isHelper: false,
            helperType: "",
            height: 0,
            weight: 0,
            shoeSize: 35,
            teeSize: "S",
            xpLvl: "Beginner",
            lunchTime: "12-13",
            dinnerTime: "18-19",
            isVeg: false,
            secondDaySkiOrSnow: true,
            secondCourseType: "Ski",
            doesSnowWalking: true,
            doesSnowVolley: true,
            doesHTF: true,
            secondRentalType: "ski",
            thirdDaySkiOrSnow: false,
            thirdCourseType: "Ski",
            raceType: "Ski",
            thirdRentalType: "ski",
            doesBeerPong: false,
            doesLineDrag: false,
            doesTwister: false,
            doesSlackline: false,
            doesFlunkyBall: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Welcome to snowdays 2020: ' + this.state.name);        
        console.log(this.state)
        event.preventDefault();
    }

    calculateFinalPrice() {
        let finalPrice = prices["base"]

        if (this.state.participationType === "party") {
            finalPrice = prices["partyAnimal"]
        } else if (this.state.participationType === "hosthelper") {
            finalPrice = prices["hosthelper"]
        } else if (this.state.participationType === "host") {
            finalPrice = prices["host"]
        } else {
            finalPrice += 0
        }

        if (this.state.nrHosting >= 5) {
            finalPrice = prices["hostMany"]
        }

        if (this.state.secondRentalType==="ski" || this.state.secondRentalType==="snow") {
            finalPrice += 25
        } else if (this.state.secondRentalType==="premiumski") {
            finalPrice += 30
        } else {
            finalPrice += 0
        }

        if (this.state.thirdRentalType==="ski" || this.state.thirdRentalType==="snow") {
            finalPrice += 25
        } else if (this.state.thirdRentalType==="premiumski") {
            finalPrice += 30
        } else {
            finalPrice += 0
        }

        return finalPrice
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
                                                        } else if (participationInput === "party") {
                                                            this.setState({
                                                                isHost: true,
                                                                isHelper: false,
                                                                hostType: "wg",
                                                                nrHosting: 4
                                                            })
                                                        }else {
                                                            this.setState({
                                                                isHost: false,
                                                                isHelper: false
                                                            })
                                                        }
                                                    }
                                                }
                                        >
                                            <option value="host">Host</option>
                                            <option value="helper">Helper</option>
                                            <option value="hosthelper">Host and Helper</option>
                                            <option value="party">Party Animal</option>
                                            <option value="normal" disabled>Normal</option>
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
                                <Col>
                                    <FormGroup>
                                        <Label for="personalDoc">Personal document</Label>
                                        <Input type="select" name="personalDoc" id="personalDoc" value={this.state.personalId}
                                           onChange={
                                            (e) => { 
                                                this.setState({personalId: e.target.value})
                                            }
                                        }
                                        >
                                            <option value="ci">ID Card</option>
                                            <option value="passport">Passport</option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="phone">Personal document number</Label>
                                        <Input type="text" name="phone" id="phone" placeholder="111222333444" 
                                            onChange = { (e) => {
                                                this.setState({personalIdNr: e.target.value})
                                            }
                                        }/>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="uploadCard">Student card picture (front)</Label>
                                        {/* TODO: ADD UPLOAD BUTTON */}
                                        <Input type="file" id="uploadCard" name="uploadCard" accept="image/png, image/jpeg"></Input>
                                    </FormGroup>
                                </Col>
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
                                    {helper_types.map((helper_type, key) => (
                                        <option key={key} value={helper_type.toLowerCase()}>{helper_type}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <span className="details">*Remember that as a helper you will at first have to pay the full price and you will get a refund for your discount at the end of the event.*</span>                                                         
                        </CardBody>
                    </Card>

                    <Card className={(this.state.isHost === true) ? "p-2 mt-1" : "p-2 mt-1 collapsed"}>
                        <CardBody className="p-1">
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Hosting Data</CardTitle>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="hostingType">Hosting type</Label>
                                        <Input type="select" name="hostingType" id="hostingType" value={this.state.hostType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({hostType: e.target.value})
                                                    }
                                                }
                                        >
                                            <option value="studentHall" disabled={this.state.participationType==="party" ? true:false}>Student hall</option>
                                            <option value="wg">WG</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col className={!(this.state.hostType==="studentHall") ? "collapsed" : ""}>
                                    <FormGroup>
                                        <Label for="hostHall">Student hall selection</Label>
                                        <Input type="select" name="hostHall" id="hostHall" value={this.state.hostHall}
                                                onChange={
                                                    (e) => {
                                                        // TODO: Update state of host nr of selection
                                                        this.setState({hostHall: e.target.value})
                                                        if(e.target.value === "rigler") {
                                                            this.setState({nrHosting: 1})
                                                        } else {
                                                            this.setState({
                                                                nrHosting: 2,
                                                                aptType: "single"
                                                            })
                                                        }

                                                    }
                                                }
                                        >
                                            <option value="rigler">Peter-Rigler</option>
                                            <option value="univercity">Univercity</option>
                                            <option value="dante">Dante appartments</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col className={this.state.hostHall==="univercity" && this.state.hostType==="studentHall" ? "" : "collapsed"}>
                                    <FormGroup>
                                        <Label for="aptType">Appartment type</Label>
                                        <Input type="select" name="aptType" id="aptType" value={this.state.aptType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({aptType: e.target.value})
                                                        if(e.target.value === "single") {
                                                            this.setState({nrHosting: 2})
                                                        } else {
                                                            this.setState({nrHosting: 1})
                                                        }
                                                    }
                                                }
                                        >
                                            <option value="single">Single</option>
                                            <option value="double">Double</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={2} className={!(this.state.hostType==="studentHall") ? "collapsed" : ""}>
                                    <FormGroup>
                                        <Label for="roomNumber">Room Number</Label>
                                        <Input type={(this.state.hostHall === "univercity") ? "text" : "number"} name="roomNumber" id="roomNumber" placeholder="123"
                                            onChange={(e)=> {this.setState({roomNr: e.target.value})}}
                                        >
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
                                <Label className="ml-3" for="nrHosting" style={{marginTop: "0.7%"}}>Number of people you will host</Label> 
                                <Col sm={2}>
                                <Input type="select" name="nrHosting" id="nrHosting" value={this.state.nrHosting}
                                    onChange={
                                        (e) => {
                                            this.setState({nrHosting: e.target.value})
                                        }
                                    }
                                >
                                    {this.state.participationType==="party" && 
                                        animal_host.map((host_nr, key) => (<option key={key} value={host_nr}>{host_nr}</option>))
                                    }
                                    
                                    {this.state.hostType==="studentHall" &&
                                        <>
                                        <option className={this.state.hostHall==="rigler" || this.state.aptType==="double" ? "" : "collapsed"} value="1">1</option>
                                        <option className={this.state.hostHall==="rigler" ? "collapsed" : ""} value="2">2</option>
                                        </>
                                    }

                                    {(this.state.hostType==="wg" && !(this.state.participationType==="party")) &&
                                        wg_host.map((host_nr, key) => (<option key={key} value={host_nr}>{host_nr}</option>))
                                    }
                                </Input>                                
                                </Col>
                            </FormGroup>

                        </CardBody>
                    </Card>
    
                    <Card className={this.state.participationType==="party" ? "collapsed" : "p-2 mt-1"}>
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

                                                {shoe_sizes.map((shoe_size, key) => (
                                                <option key={key} value={shoe_size}>{shoe_size}</option>
                                            ))}
                                           
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
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
                            <span className="details">*The lunch and dinner timeslots are simply preferences and it is not guaranteed that you will get assigned on the selected option*</span>                                                         


                            <h5 className="title category">Second day activities</h5>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="secondskiorsnow">Will you ski/snowboard?</Label>
                                        <Input type="select" name="secondskiorsnow" id="secondskiorsnow" value={this.state.secondDaySkiOrSnow ? "yes": "no"} 
                                                disabled={this.state.thirdDaySkiOrSnow}
                                                onChange={(e) => {
                                                    let userInput = e.target.value
                                                    
                                                    if (userInput === "yes") {
                                                        this.setState({
                                                            secondDaySkiOrSnow: true,
                                                            thirdDaySkiOrSnow: false
                                                        })
                                                        
                                                    } else {
                                                        this.setState({
                                                            secondDaySkiOrSnow: false
                                                        })
                                                    }
                                                }}
                                        >
                                        <option value="yes" >Yes</option>
                                        <option value="no">No</option>
                                        </Input>
                                    </FormGroup>                                
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="secondSkiCourse">Ski/Snowboard course</Label>
                                        <Input type="select" name="secondSkiCourse" id="secondSkiCourse" value={this.state.secondCourseType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({secondCourseType: e.target.value})
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

                                <Col>
                                    <FormGroup>
                                        <Label for="htftournament">Human table football</Label>
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

                                <Col>
                                <FormGroup>
                                        <Label for="snowwalking">Snowshoes walking</Label>
                                        <Input type="select" name="snowwalking" id="snowwalking" value={this.state.doesSnowWalking ? "yes" : "no"}
                                                onChange={
                                                    (e) => {
                                                        let userInput = e.target.value
                                                        if (userInput === "yes") {
                                                            this.setState({doesSnowWalking: true})
                                                        } else {
                                                            this.setState({doesSnowWalking: false})
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
                            <h6 className="title category">Rental requests</h6>
                                <Row form>
                                <div className="mt-1 container-fluid">
                                    <FormGroup>
                                        <Input type="select" name="thirdRental" id="thirdRental" value={this.state.secondRentalType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({secondRentalType: e.target.value})
                                                    }
                                                }
                                        >
                                        <option value="ski">Ski + Skiboots (€25)</option>
                                        <option value="premiumski">Premium - Ski + Skiboots (€30)</option>
                                        <option value="snow">Snowboard + Snowboots (€25)</option>
                                        <option value="none">None</option>
                                        </Input>
                                    </FormGroup>        
                                </div>
                                <span className="details">*Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information.*</span>                                                         
                            </Row>

                            <h5 className="title category">Third day activities</h5>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="thirdskiorsnow">Will you ski/snowboard?</Label>
                                        <Input type="select" name="thirdskiorsnow" id="thirdskiorsnow" value={this.state.thirdDaySkiOrSnow ? "yes": "no"}
                                                disabled={this.state.secondDaySkiOrSnow}
                                                onChange={(e) => {
                                                    let userInput = e.target.value
                                                    
                                                    if (userInput === "yes") {
                                                        this.setState({
                                                            thirdDaySkiOrSnow: true,
                                                            secondDaySkiOrSnow: false
                                                        })
                                                    } else {
                                                        this.setState({thirdDaySkiOrSnow: false})
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
                                        <Label for="secondSkiCourse">Ski/Snowboard course</Label>
                                        <Input type="select" name="secondSkiCourse" id="secondSkiCourse" value={this.state.secondCourseType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({secondCourseType: e.target.value})
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
                                        <Label for="skirace">Ski/Snowboard race</Label>
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
                            </Row>

                            <h6 className="title category">Rental requests</h6>
                            <Row form>
                                <div className="mt-1 container-fluid">
                                    <FormGroup>
                                        <Input type="select" name="thirdRental" id="thirdRental" value={this.state.thidRentalType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({thidRentalType: e.target.value})
                                                    }
                                                }
                                        >
                                        <option value="ski">Ski + Skiboots (€25)</option>
                                        <option value="premiumski">Premium - Ski + Skiboots (€30)</option>
                                        <option value="snow">Snowboard + Snowboots (€25)</option>
                                        <option value="none">None</option>
                                        </Input>
                                    </FormGroup>        
                                </div>
                                <span className="details">*Beware that you won't be able to modify the information given here after the enrolment closes. Rental material will be prepared before the event based on the given information.*</span>                                                         
                            </Row>

                            <h5 className="title category">Extra basecamp activities</h5>
                            <span>These are the activities you can do at the basecamp <b>during both days</b> (Check all that apply)</span>
                            <Row form>
                                <div className="mt-2 container">
                                    <span className="check-separator">
                                        <label htmlFor="beerpong">Beer pong</label>
                                        <input className="rental-checkbox" type="checkbox" id="beerpong" name="beerpong" onChange={(e)=>{this.setState({doesBeerPong: e.target.checked})}} />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="linedrag">Line dragging</label>
                                        <input className="rental-checkbox" type="checkbox" id="linedrag" name="linedrag" onChange={(e)=>{this.setState({doesLineDrag: e.target.checked})}} />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="twister">Twister</label>
                                        <input className="rental-checkbox" type="checkbox" id="twister" name="twister" onChange={(e)=>{this.setState({doesTwister: e.target.checked})}} />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="slackline">Slackline</label>
                                        <input className="rental-checkbox" type="checkbox" id="slackline" name="slackline" onChange={(e)=>{this.setState({doesSlackline: e.target.checked})}} />
                                    </span>

                                    <span className="check-separator">
                                        <label htmlFor="flunkyball">Flunky ball</label>
                                        <input className="rental-checkbox" type="checkbox" id="flunkyball" name="flunkyball" onChange={(e)=>{this.setState({doesFlunkyBall: e.target.checked})}} />
                                    </span>

                                </div>                                
                            </Row>
                        
                        </CardBody>
                    </Card>

                    <Card className="p-2 mt-1">
                        <CardBody className="p-1">
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Payment Information</CardTitle>
                            <p>Based on your information, you will have to pay a total of €{this.calculateFinalPrice()} to attend Snowdays 2020</p>
                            <span>Please make the payment to SCUB by bank transfer:</span>
                            <br />
                            <br />
                            <span>IBAN: IT32Q 08081 11610 000306004547</span>
                            <br />
                            <span>Directed to: SPORTS CLUB UNIVERSITY BOLZANO</span>
                            <br />
                            <span>Bank: Cassa Rurale Bolzano</span>
                            <br />
                            <span>Payment description: Snowdays fee - Surname - Name</span>                                 
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