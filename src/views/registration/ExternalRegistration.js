// Core and functional imports
import React from 'react';
import { Link } from "react-router-dom";
import { Mutation, Query } from 'react-apollo';
import Composer from 'react-composer';

// GraphQL queries
import {GET_ACTIVITIES, GET_MERCH_ITEMS, 
    GET_RENTAL_MATERIALS, GET_CURRENT_ACCOUNT_ID} from './RegistrationQueries.js'

// GraphQL mutations
import { CREATE_PROFILE, ADD_ACTIVITY, 
    CREATE_RENTAL, ADD_MATERIALS_TO_RENTAL, ADD_RENTAL, 
    CREATE_PURCHASE, ADD_ITEM_TO_PURCHASE, ADD_PURCHASE,
    LINK_PROFILE_TO_ACCOUNT } from './RegistrationQueries.js'

import { Col, Row, Button, 
    FormGroup, Label, Input, 
    Card, CardBody, CardTitle, Container } from 'reactstrap'

import { AvForm, AvGroup, AvInput, 
    AvFeedback, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';

import PreRegistration from "./PreRegistration.js"
import "../../assets/css/signup.css"


// Constants for more elegant jsx building
const SHOE_SIZES = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

// Constant with list of prices for price calculation
const PRICES = {
    external: 120,
    alumni: 90
}

// Constants that will be filled with IDs from DB data
const ACTIVITY_IDS = {}

const RENTAL_MATERIALS = {}

const MERCH_ITEMS = {}

class ExternalRegistration extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            phoneNumber: "",
            participationType: "External",
            gender: "male",
            universityName: "un1",
            enrollmentNumber: 12345,
            personalId: "ci",
            personalIdNr: 0,
            isAlumni: false,
            needsAccomodation: true,
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
            wantsHoodie: false,
            hoodieSize: "S",
            doesBeerPong: false,
            doesLineDrag: false,
            doesTwister: false,
            doesSlackline: false,
            doesFlunkyBall: false,
            skipassAgree: true,
            rentalAgree: true,
            propertyAgree: true,
            riskAgree: true,
            busAgree: true,
            allergiesAgree: true,
            paymentAgree: true,
            userProfileId: "",
            accountId: "",
            mutationFunctions: []
        }

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);

    }

    handleValidSubmit(event) {
        let mutationFunctions = this.state.mutationFunctions
        console.log("Mutation functions from state");
        console.log(mutationFunctions);
        
        let agreesToAll = (this.state.skipassAgree && this.state.rentalAgree && this.state.propertyAgree && this.state.riskAgree && this.state.busAgree && this.state.allergiesAgree && this.state.paymentAgree)
        if (agreesToAll) {
            // Part 0: First create a profile only with the required data
            // Then we will update based on our state (form data)
            mutationFunctions[0]().then(data => {
                let userid = data.data.createProfile.profile.id

                // Part 1: What activities will the person do?

                // DAY 2
                mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Second day lunch"], profileId: this.state.userProfileId } })
                mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Second day dinner"], profileId: this.state.userProfileId } })

                if (this.state.secondDaySkiOrSnow) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Second day ski"], profileId: this.state.userProfileId } })

                if (this.state.secondCourseType === "Ski") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Second day ski course"], profileId: this.state.userProfileId } })
                } else if (this.state.secondCourseType === "Snowboard") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Second day snow course"], profileId: this.state.userProfileId } })
                }

                if (this.state.doesSnowWalking) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Snowwalking"], profileId: this.state.userProfileId } })


                if (this.state.doesSnowVolley) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Snowvolley"], profileId: this.state.userProfileId } })


                if (this.state.doesHTF) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Human table football"], profileId: this.state.userProfileId } })


                // DAY 3
                mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Third day lunch"], profileId: this.state.userProfileId } })
                mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Third day dinner"], profileId: this.state.userProfileId } })

                if (this.state.thirdCourseType === "Ski") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Third day ski course"], profileId: this.state.userProfileId } })
                } else if (this.state.thirdCourseType === "Snowboard") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Third day snow course"], profileId: this.state.userProfileId } })
                }

                if (this.state.raceType === "Ski") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Ski race"], profileId: this.state.userProfileId } })
                } else if (this.state.secondCourseType === "Snowboard") {
                    mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Snowboard race"], profileId: this.state.userProfileId } })
                }

                // Extra activities happening during both days
                if (this.state.doesBeerPong) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Beer pong"], profileId: this.state.userProfileId } })
                if (this.state.doesLineDrag) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Line dragging"], profileId: this.state.userProfileId } })
                if (this.state.doesTwister) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Twister"], profileId: this.state.userProfileId } })
                if (this.state.doesSlackline) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Slackline"], profileId: this.state.userProfileId } })
                if (this.state.doesFlunkyBall) mutationFunctions[5]({ variables: { activityId: ACTIVITY_IDS["Flunkyball"], profileId: this.state.userProfileId } })

                // Part 2: Rental
                if (this.state.secondRentalType !== "None") {
                    mutationFunctions[6]().then(newRental => {
                        const rental_id = newRental.data.createRental.rental.id
                        
                        let rental_item = ""
                        if (this.state.secondRentalType === "ski") {
                            rental_item = "Second ski and skiboots"
                        } else if (this.state.secondRentalType === "premiumski") {
                            rental_item = "Second premium ski and skiboots"   
                        } else if (this.state.secondRentalType === "snow") {
                            rental_item = "Second snowboard and snowboots"  
                        }

                        mutationFunctions[7]({variables: {rentalId: rental_id, materialId: RENTAL_MATERIALS[rental_item]}}).then(()=> {
                            mutationFunctions[8]({variables: {rentalId: rental_id, id: userid}})
                        })

                        console.log("added rental connection to the user")
                    })
                }

                if(this.state.thirdRentalType !== "None") {
                    mutationFunctions[6]().then(newRental => {
                        const rental_id = newRental.data.createRental.rental.id
                        
                        let rental_item = ""
                    
                        if (this.state.thirdRentalType === "ski") {
                            rental_item = "Third ski and skiboots"
                        } else if (this.state.thirdRentalType === "premiumski") {
                            rental_item = "Third premium ski and skiboots"   
                        } else if (this.state.thirdRentalType === "snow") {
                            rental_item = "Third snowboard and snowboots"    
                        }

                        mutationFunctions[7]({variables: {rentalId: rental_id, materialId: RENTAL_MATERIALS[rental_item]}}).then( updateRental => {
                            mutationFunctions[8]({variables: {rentalId: rental_id, id: userid}})
                        })

                        console.log("added rental connection to the user")
                    })
                }

                // Part 3: Merch (T-Shirt and Hoodie)
                mutationFunctions[9]().then(purchaseData => {
                    
                    const purchaseid = purchaseData.data.createPurchase.purchase.id

                    // 3.1 T-Shirt (All participants have it)
                    console.log(MERCH_ITEMS["T-Shirt"+this.state.teeSize]);
                    console.log(MERCH_ITEMS["Hoodie"+this.state.teeSize]);

                    
                    mutationFunctions[10]({variables: {purchaseId: purchaseid, itemId: MERCH_ITEMS["T-Shirt"+this.state.teeSize], availableNo: 1}}).then(addTee => {
                        mutationFunctions[11]({variables: {purchaseId: purchaseid, id: userid}})
                    })
                    
                    // 3.2 Hoodie (Participants need to choose if they want it or not)
                    if (this.state.wantsHoodie) {
                        mutationFunctions[10]({variables: {purchaseId: purchaseid, itemId: MERCH_ITEMS["Hoodie"+this.state.hoodieSize], availableNo: 1}})
                    }

                })

                mutationFunctions[12]({variables: {profileId: userid, id: this.state.accountId}}).then(data => {
                    alert("Congratulations, " + this.state.firstName +"! Welcome to Snowdays 2020: ");
                })
                
            });
        } else {
            alert("You must accept all the terms of participation to complete your registration");
        }

        event.preventDefault();
    }

    
    handleInvalidSubmit(event) {
        alert("The input you have entered is not valid or incorrect.\nPlease check your data and try again!")
        event.preventDefault();
    }

    calculateFinalPrice() {
        let rentalPrice = 0
        let finalPrice = 0

        if (this.state.isAlumni === true) {
            finalPrice = PRICES["alumni"]
        } else {
            finalPrice = PRICES["external"]
        }

        if (this.state.secondRentalType === "ski" || this.state.secondRentalType === "snow") {
            rentalPrice += 25
        } else if (this.state.secondRentalType === "premiumski") {
            rentalPrice += 30
        } else {
            rentalPrice += 0
        }

        if (this.state.thirdRentalType === "ski" || this.state.thirdRentalType === "snow") {
            rentalPrice += 25
        } else if (this.state.thirdRentalType === "premiumski") {
            rentalPrice += 30
        } else {
            rentalPrice += 0
        }

        if (this.state.wantsHoodie === true) {
            finalPrice += 20
        }

        return [finalPrice, rentalPrice]
    }

    render() {
        const token = sessionStorage.getItem('token');
        console.log(token);
        
        return (
            <Container>
                
                {/* {token &&
                    <>
                    <PreRegistration props={true} /> */}

                    <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                        <Card className="p-2 mt-4">
                            <CardBody className="p-1">
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
                                <Row form className="mt-1">
                                    <Col>
                                        <AvGroup>
                                            <Label for="firstName">Name</Label>
                                            <AvInput type="text" name="firstName" id="firstName" placeholder="Mario"
                                                onChange={
                                                    (e) => {
                                                        this.setState({ name: e.target.value })
                                                    }
                                                }
                                                validate ={{
                                                    required: {value: true},
                                                    pattern: {value: '^[^0-9]+$'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid name!</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <AvGroup>
                                            <Label for="lastName">Surname</Label>
                                            <AvInput type="text" name="lastName" id="lastName" placeholder="Pizza" 
                                                onChange={
                                                    (e) => {
                                                        this.setState({ surname: e.target.value })
                                                    }
                                                }
                                                validate ={{
                                                    required: {value: true},
                                                    pattern: {value: '^[^0-9]+$'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid surname</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="participationType">Participation Type</Label>
                                            <Input type="select" name="participationType" id="participationType" value={this.state.participationType}
                                                onChange={
                                                    (e) => {
                                                        let participationInput = e.target.value

                                                        this.setState({ participationType: e.target.value })
                                                        if (participationInput === "External") {
                                                            this.setState({isAlumni: false})
                                                        } else {
                                                            this.setState({isAlumni: true})
                                                        }
                                                    }
                                                }
                                            >
                                                <option value="External">External</option>
                                                <option value="Alumni">UniBZ Alumni</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form className="mt-2">
                                    <Col>
                                        <AvGroup>
                                            <Label for="phone">Phone Number</Label>
                                            <AvInput type="text" name="phone" id="phone" placeholder="+39 111 22 33 456"
                                                onChange={(e) => { this.setState({ phoneNumber: e.target.value }) } } 
                                                validate ={{
                                                    required: {value: true},
                                                    pattern: {value: '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid phone number!</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="gender">Gender</Label>
                                            <Input type="select" name="gender" id="gender" value={this.state.gender}
                                                onChange={
                                                    (e) => {
                                                        this.setState({ gender: e.target.value })
                                                    }
                                                }
                                            >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="participationType">Do you need accomodation?</Label>
                                            <Input type="select" name="participationType" id="participationType" 
                                                value={this.state.needsAccomodation ? "yes":"no"}
                                                onChange={
                                                    (e) => {
                                                        let userInput = e.target.value

                                                        if (userInput === "no") {
                                                            this.setState({needsAccomodation: false})
                                                        } else {
                                                            this.setState({needsAccomodation: true})
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

                                <Row form className="mt-2">
                                <Col>
                                        <FormGroup>
                                            <Label for="universityName">University Name</Label>
                                            <Input type="select" name="universityName" id="universityName" value={this.state.universityName}
                                                onChange={ (e) => { this.setState({ universityName: e.target.value }) } }
                                            >
                                                <option value="uni1">External uni 1</option>
                                                <option value="uni2">External uni 2</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <AvGroup>
                                            <Label for="enrollmentNumber">Enrollment Number</Label>
                                            <AvInput type="number" name="enrollmentNumber" id="enrollmentNumber" placeholder="123456"
                                                onChange={ (e) => { this.setState({ enrollmentNumber: e.target.value }) } }
                                                validate ={{
                                                    required: {value: true},
                                                    pattern: {value: '^[0-9]+$'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid enrollment number!</AvFeedback>
                                        </AvGroup>
                                    </Col>

                                    <Col>
                                        <FormGroup>
                                            <Label for="personalDoc">Personal document type</Label>
                                            <Input type="select" name="personalDoc" id="personalDoc" value={this.state.personalId}
                                                onChange={ (e) => { this.setState({ personalId: e.target.value }) } }
                                            >
                                                <option value="ci">ID Card</option>
                                                <option value="passport">Passport</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <AvGroup>
                                            <Label for="phone">Personal document number</Label>
                                            <AvInput type="text" name="phone" id="phone" placeholder="111222333444"
                                                onChange={ (e) => { this.setState({ personalIdNr: e.target.value }) } } 
                                                validate = {{
                                                    required: {value: true},
                                                    pattern: {value: '^[A-Za-z0-9]+$'}
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid document number number</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>

                        <Card className="p-2 mt-1">
                            {/* Load activity and rental data from DB */}
                            <Query query={GET_ACTIVITIES}>
                                {({ loading, error, data }) => {
                                    if (loading) return <div>Fetching data...</div>
                                    if (error) return <div>Error!</div>

                                    const results = data.activities.edges

                                    for (let index = 0; index < results.length; index++) {
                                        let activity_name = results[index].node.name;
                                        let activity_id = results[index].node.id;
                                        ACTIVITY_IDS[activity_name] = activity_id
                                    }

                                    return (
                                        <div>
                                        </div>
                                    )
                                }}
                            </Query>

                            <CardBody className="p-1">
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Event and Sports Data</CardTitle>

                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label for="tSize">T-Shirt size</Label>
                                            <Input type="select" name="tSize" id="tSize" value={this.state.teeSize}
                                                onChange={(e) => { this.setState({ teeSize: e.target.value }) }}
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
                                            <Label for="lunchTime">Preferred lunch timeslot</Label>
                                            <Input type="select" name="lunchTime" id="lunchTime" value={this.state.lunchTime}
                                                onChange={(e) => { this.setState({ lunchTime: e.target.value }) }}
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
                                                onChange={(e) => { this.setState({ dinnerTime: e.target.value }) }}
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
                                            <Input type="select" name="vegetarian" id="vegetarian" value={this.state.isVeg ? "yes" : "no"}
                                                onChange={(e) => {
                                                    const userInput = e.target.value

                                                    if (userInput === "yes") {
                                                        this.setState({ isVeg: true })
                                                    } else {
                                                        this.setState({ isVeg: false })
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

                                <h5 className="title category">First day activities</h5>
                                <Row>
                                    <Col>
                                        <p>We'll take care of it all, it'll be fun! 😎</p>
                                    </Col>
                                </Row>
                                <h5 className="title category">Second day activities</h5>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="secondskiorsnow">Will you ski/snowboard?</Label>
                                            <Input type="select" name="secondskiorsnow" id="secondskiorsnow" value={this.state.secondDaySkiOrSnow ? "yes" : "no"}
                                                disabled={this.state.thirdDaySkiOrSnow}
                                                onChange={(e) => {
                                                    const userInput = e.target.value

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
                                                        this.setState({ secondCourseType: e.target.value })
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
                                                        const userInput = e.target.value
                                                        console.log(userInput);
                                                        if (userInput === "yes") {
                                                            this.setState({ doesSnowVolley: true })
                                                        } else {
                                                            this.setState({ doesSnowVolley: false })
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
                                                        const userInput = e.target.value
                                                        console.log(userInput);
                                                        if (userInput === "yes") {
                                                            this.setState({ doesSnowVolley: true })
                                                        } else {
                                                            this.setState({ doesSnowVolley: false })
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
                                                        const userInput = e.target.value
                                                        if (userInput === "yes") {
                                                            this.setState({ doesSnowWalking: true })
                                                        } else {
                                                            this.setState({ doesSnowWalking: false })
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

                                <h5 className="title category">Third day activities</h5>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="thirdskiorsnow">Will you ski/snowboard?</Label>
                                            <Input type="select" name="thirdskiorsnow" id="thirdskiorsnow" value={this.state.thirdDaySkiOrSnow ? "yes" : "no"}
                                                disabled={this.state.secondDaySkiOrSnow}
                                                onChange={(e) => {
                                                    const userInput = e.target.value

                                                    if (userInput === "yes") {
                                                        this.setState({
                                                            thirdDaySkiOrSnow: true,
                                                            secondDaySkiOrSnow: false
                                                        })
                                                    } else {
                                                        this.setState({ thirdDaySkiOrSnow: false })
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
                                            <Label for="thirdSkiCourse">Ski/Snowboard course</Label>
                                            <Input type="select" name="thirdSkiCourse" id="thirdSkiCourse" value={this.state.thirdCourseType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({ thirdCourseType: e.target.value })
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
                                                        this.setState({ raceType: e.target.value })
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



                                <h5 className="title category">Extra basecamp activities</h5>
                                <span>These are the activities you can do at the basecamp <b>during both days</b> (Check all that apply)</span>
                                <Row form>
                                    <div className="mt-2 container">
                                        <span className="check-separator">
                                            <label htmlFor="beerpong">Beer pong</label>
                                            <input className="rental-checkbox" type="checkbox" id="beerpong" name="beerpong" onChange={(e) => { this.setState({ doesBeerPong: e.target.checked }) }} />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="linedrag">Line dragging</label>
                                            <input className="rental-checkbox" type="checkbox" id="linedrag" name="linedrag" onChange={(e) => { this.setState({ doesLineDrag: e.target.checked }) }} />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="twister">Twister</label>
                                            <input className="rental-checkbox" type="checkbox" id="twister" name="twister" onChange={(e) => { this.setState({ doesTwister: e.target.checked }) }} />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="slackline">Slackline</label>
                                            <input className="rental-checkbox" type="checkbox" id="slackline" name="slackline" onChange={(e) => { this.setState({ doesSlackline: e.target.checked }) }} />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="flunkyball">Flunky ball</label>
                                            <input className="rental-checkbox" type="checkbox" id="flunkyball" name="flunkyball" onChange={(e) => { this.setState({ doesFlunkyBall: e.target.checked }) }} />
                                        </span>

                                    </div>
                                </Row>
                                
                                {/* Load rental material from DB */}
                                <Query query={GET_MERCH_ITEMS}>
                                    {({ loading, error, data }) => {
                                        if (loading) return <div></div>
                                        if (error) return <div></div>

                                        const results = data.items.edges

                                        for (let index = 0; index < results.length; index++) {
                                            let item_name = results[index].node.name
                                            let item_id = results[index].node.id
                                            let item_size = results[index].node.description
                                            MERCH_ITEMS[item_name+item_size] = item_id
                                        }
                                        
                                        return (
                                            <div>
                                            </div>
                                        )
                                    }}
                                </Query>

                                <h5 className="title category">Rental information</h5>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label for="height">Height (cm)</Label>
                                            <Input type="number" name="height" id="height" placeholder="180"
                                                onChange={(e) => { this.setState({ height: e.target.value }) }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="zip">Weight (kg)</Label>
                                            <Input type="number" name="weight" id="weight" placeholder="80"
                                                onChange={(e) => { this.setState({ weight: e.target.value }) }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="shoeSize">Shoe size</Label>
                                            <Input type="select" name="shoeSize" id="shoeSize" value={this.state.shoeSize}
                                                onChange={(e) => { this.setState({ shoeSize: e.target.value }) }}
                                            >

                                                {SHOE_SIZES.map((shoe_size, key) => (
                                                    <option key={key} value={shoe_size}>{shoe_size}</option>
                                                ))}

                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="xpLvl">Ski experience level</Label>
                                            <Input type="select" name="xpLvl" id="xpLvl" value={this.state.xpLvl}
                                                onChange={(e) => { this.setState({ xpLvl: e.target.value }) }}
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
                                        <h6 className="title category">Second day rental requests</h6>
                                        <FormGroup>
                                            <Input type="select" name="secondRental" id="secondRental" value={this.state.secondRentalType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({ secondRentalType: e.target.value })
                                                    }
                                                }
                                            >
                                                <option value="ski">Ski + Skiboots (€25)</option>
                                                <option value="premiumski">Premium - Ski + Skiboots (€30)</option>
                                                <option value="snow">Snowboard + Snowboots (€25)</option>
                                                <option value="none">None</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <h6 className="title category">Third day rental requests</h6>
                                        <FormGroup>
                                            <Input type="select" name="thirdRental" id="thirdRental" value={this.state.thirdRentalType}
                                                onChange={
                                                    (e) => {
                                                        this.setState({ thirdRentalType: e.target.value })
                                                    }
                                                }
                                            >
                                                <option value="ski">Ski + Skiboots (€25)</option>
                                                <option value="premiumski">Premium - Ski + Skiboots (€30)</option>
                                                <option value="snow">Snowboard + Snowboots (€25)</option>
                                                <option value="none">None</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <span className="details">
                                    *Rental material will be prepared before the event based on the requests.
                                    We will collect the cash at the check-in (DAY 1).
                                    If you choose one of the rental options and, during the event, decide not to ski, you will have to pay for it anyway, otherwise you will not be able to check-in and enjoy the event. (you will not receive a refund).
                                    If you do not need the rental equipment, choose "None".*
                                </span>
                            </CardBody>
                        </Card>

                        <Card className="p-2 mt-1">
                            <CardBody className="p-1">
                            {/* QUERY TO GET HOODIES AND T SHIRTS PLUS SIZE IDS */}
                            <Query query={GET_RENTAL_MATERIALS}>
                                    {({ loading, error, data }) => {
                                        if (loading) return <div></div>
                                        if (error) return <div></div>

                                        const results = data.materials.edges

                                        for (let index = 0; index < results.length; index++) {
                                            let material_name = results[index].node.name;
                                            let material_id = results[index].node.id;
                                            RENTAL_MATERIALS[material_name] = material_id
                                        }

                                        return (
                                            <div>
                                            </div>
                                        )
                                    }}
                                </Query>
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Official Merchandise</CardTitle>
                                <Row>
                                    <Col sm={4}>
                                        <img src={require("assets/img/hoodie_front.png")} alt="snowdays hoodie front" />
                                    </Col>
                                    <Col sm={4}>
                                        <img src={require("assets/img/hoodie_back.png")} alt="snowdays hoodie back" />
                                    </Col>
                                    <Col>
                                        <h5>SURPRISE!</h5>
                                        <span>Would you like to live the Snowdays’ spirit to its fullest?
                                        For the first time this year you will be able to purchase the first Snowdays official merchandise.

                                        If you pre-order the merch now, you will get a special discount and pay <span style={{ color: "#4BB5FF" }}>just 20€</span></span>

                                        <FormGroup className="mt-3">
                                            <Label for="orderHoodie">Do you want your own Snowdays hoodie?</Label>
                                            <Input type="select" name="orderHoodie" id="orderHoodie" value={this.state.wantsHoodie ? "yes" : "no"}
                                                onChange={(e) => {
                                                    const userInput = e.target.value

                                                    if (userInput === "yes") {
                                                        this.setState({ wantsHoodie: true })
                                                    } else {
                                                        this.setState({ wantsHoodie: false })
                                                    }
                                                }}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className={this.state.wantsHoodie ? "" : "collapsed"}>
                                            <Label for="hoodieSize">Pick a size</Label>
                                            <Input type="select" name="hoodieSize" id="hoodieSize" value={this.state.hoodieSize}
                                                onChange={(e) => { this.setState({ hoodieSize: e.target.value }) }}
                                            >
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                            </Input>
                                        </FormGroup>


                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card className="p-2 mt-1">
                            <CardBody className="p-1">
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Payment Information</CardTitle>
                                <p>Based on your information, you will have to pay a total of €{this.calculateFinalPrice()[0]} to attend Snowdays 2020 plus a total of €{this.calculateFinalPrice()[1]} that you will pay at the check-in (in cash) for rental material.</p>
                                <span>For payment details please contact your university's contact person.</span>
                            </CardBody>
                        </Card>

                        <Card className="p-2 mt-1">
                            <CardBody className="p-1">
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>Terms of partecipation</CardTitle>
                                <Row form>
                                    <Col>
                                        <label htmlFor="skipassAgree">
                                            <h5>SKIPASSES</h5>
                                            <p>When you arrive in Bolzano and do the check-in you will receive the skipasses for
                                            the following days.
                                            Non-skiers will also receive a skipass for the second day in order to reach the
                                            basecamp.
                                            From the moment you receive the skipass/es you are fully responsible for them. In
                                        case of loss you will have to buy a new one on your own.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="skipassAgree" name="skipassAgree" defaultChecked={this.state.skipassAgree} onChange={(e) => { this.setState({ skipassAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="rentalAgree">
                                            <h5>RENTAL MATERIAL</h5>
                                            <p>If you are renting any material or equipment, you agree to return all
                                            equipment in the same condition as received, reasonable wear and tear excepted. If the
                                            equipment is not returned in good condition at the end of the event or if repairs or replacements
                                            are   required,   you  agree  to   pay   all   labor,   material   and   shipping   charges   to  replace   any
                                            equipment which is lost, stolen or damaged beyond repair.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="rentalAgree" name="rentalAgree" defaultChecked={this.state.rentalAgree} onChange={(e) => { this.setState({ rentalAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="propertyAgree">
                                            <h5>LOSS OR DAMAGE TO PROPERTY</h5>
                                            <p>Snowdays does not accept responsibility and expressly
                                            excludes liability to the fullest extent permitted by law for any loss, theft, damage or destruction to
                                            any personal property in whole or in part for any reason whatsoever, even if left in the care of the
                                            staff and/or helpers of the event.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="propertyAgree" name="propertyAgree" defaultChecked={this.state.propertyAgree} onChange={(e) => { this.setState({ propertyAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="riskAgree">
                                            <h5>ASSUMPTION OF RISKS</h5>
                                            <p>In consideration of your participation at Snowdays, you acknowledge
                                            that you are aware of the possible risks, dangers and hazards associated with your participation
                                            in the event, including the possible risk of severe or fatal injury to yourself or others. These risks
                                            include but are not limited to the following: the risks associated with travel to and from locations to
                                            be visited during the event, including transportation provided by commercial, private and/or public
                                            motor vehicles; intoxication and/or alcohol poisoning from the alcohol you consume whether
                                            voluntarily or through coercion. You acknowledge that your participation to Snowdays entail
                                            known and unknown risks that could result in physical or emotional injury, pregnancy, paralysis,
                                            death, or damage to yourself, to property or to third parties. You expressly agree and promise to
                                            accept and assume all of the risks existing the event. Your participation to the event is purely
                                            voluntary, and you elect to participate despite the risks.
                                            You expressly renounce any future claim
                                            or legal action against Snowdays and its staff.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="riskAgree" name="riskAgree" defaultChecked={this.state.riskAgree} onChange={(e) => { this.setState({ riskAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="busAgree">
                                            <h5>BUS DAMAGES</h5>
                                            <p>For every damage (including vomit) that occurs to the buses caused by yourself,
                                            you will pay a fee of 100€ or the amount necessary to cover the damages caused, as agreed with
                                            the bus company.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="busAgree" name="busAgree" defaultChecked={this.state.busAgree} onChange={(e) => { this.setState({ busAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="allergiesAgree">
                                            <h5>ALLERGIES</h5>
                                            <p>Snowdays makes every effort to accommodate the various dietary requirements of
                                            the participants and handles food allergies seriously. Every effort is made to instruct our staff
                                            regarding the potential severity of food allergies and to minimize allergic reactions. Please be
                                            advised that every effort will be made to have no allergic reactions, food may come in contact
                                            with   items   containing   allergens,   and   there   is   always   a   risk   of   contamination   or   cross
                                            contamination. Participants with concerns need to be aware of these risks. Snowdays will
                                            assume no liability for any adverse reactions that may occur during the event.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="allergiesAgree" name="allergiesAgree" defaultChecked={this.state.allergiesAgree} onChange={(e) => { this.setState({ allergiesAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <label htmlFor="paymentAgree">
                                            <h5>PAYMENT</h5>
                                            <p>You will receive a confirmation email after the enrolment. The participation fee is payable within 5 days.</p>
                                        </label>
                                    </Col>
                                    <Col className="col-1 col-md-1 mt-5">
                                        <input required className="rental-checkbox" type="checkbox" id="paymentAgree" name="paymentAgree" defaultChecked={this.state.paymentAgree} onChange={(e) => { this.setState({ paymentAgree: e.target.checked }) }} />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Query query={GET_CURRENT_ACCOUNT_ID} onCompleted={data => this.setState({accountId: data.currentAccountId})} >
                            {({ loading, error, data }) => {
                                if (loading) return <div></div>
                                if (error) return <div></div>
                                return (
                                    <div>
                                    </div>
                                )
                            }}
                        </Query>

                        <Composer components={[
                            <Mutation mutation={CREATE_PROFILE}
                                variables={{ firstName: this.state.name, lastName: this.state.surname, mobilePhone: this.state.phoneNumber, badgeNumber: this.state.enrollmentNumber, gender: (this.state.gender === "male" ? "MALE" : "FEMALE"), isVegetarian: this.state.isVeg, idNumber: this.state.personalIdNr, universityId: '0ba4238b-e490-47a2-be84-cae47f4ea5cb' }}
                                onCompleted={(data) => {
                                    this.setState({ userProfileId: data.createProfile.profile.id })
                                    console.log("Created user profile");

                                }}
                                onError={(createError) => {
                                    console.log(createError);
                                    alert("There was a problem with the profile creation!\nMake sure you fill out all the fields!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_ACTIVITY}
                                onCompleted={(data) => {
                                    console.log("Added activity for this user");
                                    console.log(data)
                                }}
                                onError={(createError) => {
                                    console.log(createError);
                                    alert("There was a problem with your activity selection")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={CREATE_RENTAL}
                                variables={{experience: (this.state.xpLvl==="Beginner" ? "BEGINNER" : "INTERMEDIATE"), height: this.state.height, shoeSize: this.state.shoeSize, weight: this.state.weight}}
                                onCompleted={(data) => {
                                    console.log("Created a rental entry for this user");
                                    console.log(data)
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with the rental creation!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_MATERIALS_TO_RENTAL}
                                onCompleted={(data) => {
                                    console.log("Adding materials to rentals entry for this user");
                                    console.log(data)
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with adding the request materials in the rental!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_RENTAL}
                                onCompleted={(data) => {
                                    console.log("Added rental entry to the user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with linking the rental to  your user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={CREATE_PURCHASE}
                                onCompleted={(data) => {
                                    console.log("Created purchase entry for the user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with linking the rental to  your user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_ITEM_TO_PURCHASE}
                                onCompleted={(data) => {
                                    console.log("Adding items to purchase entry for this user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with adding the requested items in the purchase!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_PURCHASE}
                                onCompleted={(data) => {
                                    console.log("Linked purchase entry to the user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with linking the rental to  your user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={LINK_PROFILE_TO_ACCOUNT}
                            onCompleted={(data) => {
                                    console.log("Linked profile to user, finished registration");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    alert("There was a problem with linking the rental to  your user data!")
                                    window.location.reload()
                                }}
                            />,
                        ]}>
                            {(mutationFunctions) => (
                                <Button type="submit" className="btn btn-primary pull-right"
                                    onClick={() => {
                                            this.setState({mutationFunctions: mutationFunctions})
                                            console.log("Form submitted:");
                                            // console.log(ACTIVITY_IDS);
                                            // console.log(RENTAL_MATERIALS);
                                            // console.log(MERCH_ITEMS);
                                            // console.log(this.state.accountId);
                                            // console.log(mutationFunctions);                                        
                                        }
                                    }
                                    >REGISTER</Button>
                            )}
                        </Composer>

                    </AvForm>
                    {/* </> */}
                {/* } */}

                {/* {!token &&
                    <Card className="p-2 mt-4">
                        <CardBody className="p-1 pull-center text-center">
                            <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>You are not registered yet!</CardTitle>
                            <Link to="/signup" className="mt-2 h2" tag="h3">Please do that first!</Link>
                        </CardBody>
                    </Card>
                } */}

            </Container> 
        );
    }

}
export default ExternalRegistration;