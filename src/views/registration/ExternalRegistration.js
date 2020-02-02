// Core and functional imports
import React from 'react';
import { Link } from "react-router-dom";
import { Mutation, Query } from 'react-apollo';
import Composer from 'react-composer';

// GraphQL queries
import {GET_ACTIVITIES, GET_MERCH_ITEMS,  GET_UNIVERSITIES,
    GET_RENTAL_MATERIALS, GET_CURRENT_ACCOUNT_ID} from './RegistrationQueries.js'

// GraphQL mutations
import { CREATE_PROFILE, ADD_ACTIVITY, 
    CREATE_RENTAL, ADD_MATERIALS_TO_RENTAL, ADD_RENTAL, 
    CREATE_PURCHASE, ADD_ITEM_TO_PURCHASE, ADD_PURCHASE,
    LINK_PROFILE_TO_ACCOUNT, DELETE_PROFILE } from './RegistrationQueries.js'

import { Col, Row, Button, 
    FormGroup, Label, Input, 
    Card, CardBody, CardTitle, Container } from 'reactstrap'

import { AvForm, AvGroup, AvInput, AvFeedback} from 'availity-reactstrap-validation';

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

const UNIVERSITIES = {}

// Auth token for API calls
const token = sessionStorage.getItem('token');

class ExternalRegistration extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            phoneNumber: "",
            participationType: "External",
            gender: "male",
            universityName: "Alumni Free University of Bolzano",
            enrollmentNumber: 12345,
            personalId: "ci",
            personalIdNr: 0,
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
            doesSnowWalking: false,
            doesSnowVolley: false,
            doesHTF: false,
            secondRentalType: "none",
            thirdDaySkiOrSnow: true,
            thirdCourseType: "Ski",
            raceType: "Ski",
            doesBull: false,
            thirdRentalType: "none",
            wantsHoodie: false,
            hoodieSize: "S",
            doesBeerPong: false,
            doesLineDrag: false,
            doesTwister: false,
            doesSlackline: false,
            doesFlunkyBall: false,
            doesSponsorActivities: false,
            skipassAgree: true,
            rentalAgree: true,
            propertyAgree: true,
            riskAgree: true,
            busAgree: true,
            allergiesAgree: true,
            paymentAgree: true,
            userProfileId: "",
            accountId: "",
            mutationFunctions: [],
            mutationError: false,
        }

        this.handleValidSubmit = this.handleValidSubmit.bind(this)
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleYesNoSelectInput = this.handleYesNoSelectInput.bind(this)
        this.handleCheckboxCheck = this.handleCheckboxCheck.bind(this)
    }


    // Functions which handle the form submission 

    handleValidSubmit(event) {
        let mutationFunctions = this.state.mutationFunctions
        console.log(this.state)
        console.log(UNIVERSITIES)
        console.log(UNIVERSITIES[this.state.universityName]);
        
        let agreesToAll = (this.state.skipassAgree && this.state.rentalAgree && this.state.propertyAgree && this.state.riskAgree && this.state.busAgree && this.state.allergiesAgree && this.state.paymentAgree)
        if (agreesToAll) {
            // Part 0: First create a profile only with the required data
            // Then we will update based on our state (form data)
            mutationFunctions[0]().then(data => {
                let userid = data.data.createProfile.profile.id

                // Part 1: What activities will the person do?                

                // DAY 2
                mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Second day lunch"], profileId: this.state.userProfileId } })
                mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Second day dinner"], profileId: this.state.userProfileId } })

                if (this.state.secondDaySkiOrSnow) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Second day ski"], profileId: this.state.userProfileId } })

                if (this.state.secondCourseType === "Ski") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Second day ski course"], profileId: this.state.userProfileId } })
                } else if (this.state.secondCourseType === "Snowboard") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Second day snow course"], profileId: this.state.userProfileId } })
                }

                if (this.state.doesSnowWalking) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Snowwalking"], profileId: this.state.userProfileId } })


                if (this.state.doesSnowVolley) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Snowvolley"], profileId: this.state.userProfileId } })


                if (this.state.doesHTF) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Human table football"], profileId: this.state.userProfileId } })


                // DAY 3
                mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Third day lunch"], profileId: this.state.userProfileId } })
                mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Third day dinner"], profileId: this.state.userProfileId } })

                if (this.state.thirdCourseType === "Ski") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Third day ski course"], profileId: this.state.userProfileId } })
                } else if (this.state.thirdCourseType === "Snowboard") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Third day snow course"], profileId: this.state.userProfileId } })
                }

                if (this.state.raceType === "Ski") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Ski race"], profileId: this.state.userProfileId } })
                } else if (this.state.secondCourseType === "Snowboard") {
                    mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Snowboard race"], profileId: this.state.userProfileId } })
                }

                if (this.state.doesBull) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Mechanical bull"], profileId: this.state.userProfileId } })


                // Basecamp activities
                if (this.state.doesBeerPong) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Beer pong"], profileId: this.state.userProfileId } })
                if (this.state.doesLineDrag) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Line dragging"], profileId: this.state.userProfileId } })
                if (this.state.doesTwister) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Twister"], profileId: this.state.userProfileId } })
                if (this.state.doesSlackline) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Slackline"], profileId: this.state.userProfileId } })
                if (this.state.doesFlunkyBall) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Flunkyball"], profileId: this.state.userProfileId } })
                if (this.state.doesSponsorActivities) mutationFunctions[1]({ variables: { activityId: ACTIVITY_IDS["Sponsor activities"], profileId: this.state.userProfileId } })


                // Part 2: Rental
                if (this.state.secondRentalType !== "none") {
                    mutationFunctions[2]().then(newRental => {
                        const rental_id = newRental.data.createRental.rental.id
                        
                        let rental_item = ""
                        if (this.state.secondRentalType === "ski") {
                            rental_item = "Second ski and skiboots"
                        } else if (this.state.secondRentalType === "premiumski") {
                            rental_item = "Second premium ski and skiboots"   
                        } else if (this.state.secondRentalType === "snow") {
                            rental_item = "Second snowboard and snowboots"  
                        }

                        mutationFunctions[3]({variables: {rentalId: rental_id, materialId: RENTAL_MATERIALS[rental_item]}}).then(()=> {
                            mutationFunctions[4]({variables: {rentalId: rental_id, id: userid}})
                            console.log("added rental connection to the user")

                        })

                    })
                }

                if(this.state.thirdRentalType !== "none") {
                    mutationFunctions[2]().then(newRental => {
                        const rental_id = newRental.data.createRental.rental.id
                        
                        let rental_item = ""
                    
                        if (this.state.thirdRentalType === "ski") {
                            rental_item = "Third ski and skiboots"
                        } else if (this.state.thirdRentalType === "premiumski") {
                            rental_item = "Third premium ski and skiboots"   
                        } else if (this.state.thirdRentalType === "snow") {
                            rental_item = "Third snowboard and snowboots"    
                        }

                        mutationFunctions[3]({variables: {rentalId: rental_id, materialId: RENTAL_MATERIALS[rental_item]}}).then( updateRental => {
                            mutationFunctions[4]({variables: {rentalId: rental_id, id: userid}})
                            console.log("added rental connection to the user")
                        })

                    })
                }

                // Part 3: Merch (T-Shirt and Hoodie)
                mutationFunctions[5]().then(purchaseData => {
                    
                    const purchaseid = purchaseData.data.createPurchase.purchase.id

                    // 3.1 T-Shirt (All participants have it)
                    console.log(MERCH_ITEMS["T-Shirt"+this.state.teeSize]);
                    console.log(MERCH_ITEMS["Hoodie"+this.state.teeSize]);

                    
                    mutationFunctions[6]({variables: {purchaseId: purchaseid, itemId: MERCH_ITEMS["T-Shirt"+this.state.teeSize], availableNo: 1}}).then(addTee => {
                        mutationFunctions[7]({variables: {purchaseId: purchaseid, id: userid}})
                    })
                    
                    // 3.2 Hoodie (Participants need to choose if they want it or not)
                    if (this.state.wantsHoodie) {
                        mutationFunctions[6]({variables: {purchaseId: purchaseid, itemId: MERCH_ITEMS["Hoodie"+this.state.hoodieSize], availableNo: 1}})
                    }

                })

                if (this.state.mutationError == true) {
                    mutationFunctions[9]({variables: {id: userid}}).then(
                        setTimeout(data => {
                            console.log("Deleted faulty profile on submission");
                            
                        }, 3000)
                    )
                } else {
                    mutationFunctions[8]({variables: {profileId: userid, id: this.state.accountId}}).then(
                        setTimeout(data => {                    
                            alert("Congratulations, " + this.state.name +"! Welcome to Snowdays 2020.\nYou will receive a confirmation e-mail in the address you used to sign up.\nNow get ready, because there are no days like SNOWDAYS!")
                            sessionStorage.removeItem('token')
                            this.props.history.push("/index")
                        }, 3500)
                    )
                }

            });
        } else {
            alert("You must accept all the terms of participation to continue!");
        }

        event.preventDefault();
    }

    
    handleInvalidSubmit(event) {
        event.preventDefault();
    }
    // ----------------------------------------------
    // Functions which handle changes in the user input

    handleInputChange(event) {
        let stateName = event.target.name
        let eventVal = event.target.value
        this.setState({[stateName]: eventVal})
    }

    handleCheckboxCheck(event) {
        let stateName = event.target.name
        let eventVal = event.target.checked
        this.setState({[stateName]: eventVal})
    }

    handleYesNoSelectInput(event) {
        let stateName = event.target.name
        let eventVal = event.target.value
        if (eventVal === "yes") {
            this.setState({[stateName]: true })
        } else {
            this.setState({[stateName]: false })
        }
    }

    // ----------------------------------------------
    // Auxilliary/util functions

    calculateFinalPrice() {
        let rentalPrice = 0
        let finalPrice = 0

        if (this.state.universityName === "Alumni Free University of Bolzano") {
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

    doesBasecampActivityOnSecondDay() {
        return (
            this.state.doesBeerPong || this.state.doesLineDrag || this.state.doesTwister ||
            this.state.doesSlackline || this.state.doesFlunkyBall || this.state.doesBull ||
            this.state.doesSnowWalking || this.state.doesSnowVolley
        )
    }

    doesBasecampActivityOnThirdDay() {
        return (
            this.state.doesBeerPong || this.state.doesLineDrag || this.state.doesTwister ||
            this.state.doesSlackline || this.state.doesFlunkyBall || this.state.doesBull || this.state.doesHTF
        )
    }

    doesSkiOnSecondDay() {
        return (
            (this.state.secondCourseType !== "None") || this.state.secondDaySkiOrSnow
        )
    }

    doesSkiOnThirdDay() {
        return (
            (this.state.thirdCourseType !== "None") || this.state.thirdDaySkiOrSnow || (this.state.raceType !== "None")
        )
    }

    doesSkiOnBothDays() {
        return this.doesSkiOnSecondDay() && this.doesSkiOnThirdDay()
    }

    rentsMaterial() {
        return ( 
            (this.state.secondRentalType !== "none") && (this.state.secondRentalType !== "none") 
        )
    }
    // ----------------------------------------------

    render() {
        console.log(token);
        return (
            <Container>
                {token &&
                    <>
                    <PreRegistration showModal={true} helpHostInfo={false}/>
                    <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>

                        {/* Load universities from DB */}
                        <Query query={GET_UNIVERSITIES}>
                                {({ loading, error, data }) => {
                                    if (loading) return <div></div>
                                    if (error) return <div></div>

                                    const results = data.universities.edges

                                    for (let index = 0; index < results.length; index++) {
                                        let uni_name = results[index].node.name;
                                        let uni_id = results[index].node.id;
                                        UNIVERSITIES[uni_name] = uni_id
                                    }

                                    return (
                                        <div>
                                        </div>
                                    )
                                }}
                            </Query>
                        <Card className="p-2 mt-4">
                            <CardBody className="p-1">
                                <CardTitle className="mb-2" tag="h2" style={{ color: "#4BB5FF" }}>General Data</CardTitle>
                                <Row form className="mt-1">
                                    <Col>
                                        <AvGroup>
                                            <Label for="name">Name</Label>
                                            <AvInput type="text" name="name" id="name" placeholder="Mario" onChange={this.handleInputChange}
                                                validate = {{
                                                    required: {value: true},
                                                    pattern: {value: '^[^0-9]+$'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid name!</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <AvGroup>
                                            <Label for="surname">Surname</Label>
                                            <AvInput type="text" name="surname" id="surname" placeholder="Pizza" onChange={this.handleInputChange}
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
                                            <Label for="universityName">University Name</Label>
                                            <Input type="select" name="universityName" id="universityName" value={this.state.universityName} onChange={this.handleInputChange}>
                                                {Object.keys(UNIVERSITIES).sort().map(
                                                        (uni, key) => (
                                                            <option key={key} value={uni}>{uni}</option>
                                                        )
                                                    )
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <AvGroup>
                                            <Label for="phoneNumber">Phone Number</Label>
                                            <AvInput type="text" name="phoneNumber" id="phoneNumber" placeholder="+39 111 22 33 456" onChange={this.handleInputChange} 
                                                validate ={{
                                                    required: {value: true},
                                                    pattern: {value: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'},
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid phone number!</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                </Row>

                                <Row form className="mt-2">
                                    
                                    <Col sm={2}>
                                        <FormGroup>
                                            <Label for="gender">Gender</Label>
                                            <Input type="select" name="gender" id="gender" value={this.state.gender} onChange={this.handleInputChange}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup>
                                            <Label for="needsAccomodation">Do you need accomodation?</Label>
                                            <Input type="select" name="needsAccomodation" id="needsAccomodation" value={this.state.needsAccomodation ? "yes":"no"}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={2}>
                                        <AvGroup>
                                            <Label for="enrollmentNumber">Enrollment Number</Label>
                                            <AvInput type="number" name="enrollmentNumber" id="enrollmentNumber" placeholder="123456" onChange={this.handleInputChange}
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
                                            <Label for="personalId">Personal document type</Label>
                                            <Input type="select" name="personalId" id="personalId" value={this.state.personalId} onChange={this.handleInputChange}>
                                                <option value="ci">ID Card</option>
                                                <option value="passport">Passport</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <AvGroup>
                                            <Label for="personalIdNr">Personal document number</Label>
                                            <AvInput type="text" name="personalIdNr" id="personalIdNr" placeholder="111222333444" onChange={this.handleInputChange} 
                                                validate = {{
                                                    required: {value: true},
                                                    pattern: {value: '^[A-Za-z0-9]+$'}
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid document number number</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                </Row>

                                <Row form className="mt-2">
                                    
                                </Row>

                            </CardBody>
                        </Card>

                        <Card className="p-2 mt-1">
                            {/* Load activity and rental data from DB */}
                            <Query query={GET_ACTIVITIES}>
                                {({ loading, error, data }) => {
                                    if (loading) return <div></div>
                                    if (error) return <div></div>

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
                                            <Label for="lunchTime">Lunch timeslot</Label>
                                            <Input type="select" name="lunchTime" id="lunchTime" value={this.state.lunchTime} onChange={this.handleInputChange}>
                                                <option value="12-13">12-13</option>
                                                <option value="13-14">13-14</option>
                                                <option value="14-15">14-15</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="dinnerTime">Dinner timeslot</Label>
                                            <Input type="select" name="dinnerTime" id="dinnerTime" value={this.state.dinnerTime} onChange={this.handleInputChange}>
                                                <option value="18-19">18-19</option>
                                                <option value="19-20">19-20</option>
                                                <option value="20-21">20-21</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="isVeg">Are you vegetarian?</Label>
                                            <Input type="select" name="isVeg" id="isVeg" value={this.state.isVeg ? "yes" : "no"} onChange={this.handleYesNoSelectInput}>
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="teeSize">T-Shirt size</Label>
                                            <Input type="select" name="teeSize" id="teeSize" value={this.state.teeSize} onChange={this.handleInputChange}>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <span className="details">*The lunch and dinner timeslots are simply preferences and it is not guaranteed that you will get assigned on the selected option*</span>

                                <h5 className="title category">First day activities</h5>
                                <Row>
                                    <Col>
                                        <p>We'll take care of it all, it'll be fun! <span role="img" aria-label="bossmode">😎</span></p>
                                    </Col>
                                </Row>
                                <h5 className="title category">Second day activities</h5>
                                <span className="details mb-2">*Insert message about activities and skiing exclusion here*</span>
                                <Row className="mt-3">
                                    <Col>
                                        <FormGroup>
                                            <Label for="secondDaySkiOrSnow">Will you ski/snowboard?</Label>
                                            <Input type="select" name="secondDaySkiOrSnow" id="secondDaySkiOrSnow" value={this.state.secondDaySkiOrSnow ? "yes" : "no"}
                                                disabled={this.doesBasecampActivityOnSecondDay()}
                                                onChange={
                                                    (event) => {
                                                        let eventVal = event.target.value
                                                        if (eventVal === "yes") {
                                                            this.setState({
                                                                secondDaySkiOrSnow: true,
                                                                doesSnowWalking: false,
                                                                doesSnowVolley: false,
                                                                doesHTF: false,
                                                                doesBeerPong: false,
                                                                doesLineDrag: false,
                                                                doesTwister: false,
                                                                doesSlackline: false,
                                                                doesFlunkyBall: false,
                                                                doesBull: false,
                                                                doesSponsorActivities: false
                                                            })
                                                        } else {
                                                            this.setState({
                                                                secondDaySkiOrSnow: false,
                                                                secondCourseType: "None",
                                                            })
                                                        }
                                                    }
                                                }
                                            >
                                                <option value="yes" >Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <FormGroup>
                                            <Label for="secondCourseType">Ski/Snowboard course</Label>
                                            <Input type="select" name="secondCourseType" id="secondCourseType" value={this.state.secondCourseType}
                                                disabled={this.doesBasecampActivityOnSecondDay()}
                                                onChange={
                                                    (event) => {
                                                        let eventVal = event.target.value
                                                        this.setState({secondCourseType: eventVal})
                                                        if (eventVal !== "None") {
                                                            this.setState({secondDaySkiOrSnow: true})
                                                        } else {
                                                            this.setState({secondDaySkiOrSnow: false})
                                                        }
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
                                            <Label for="doesSnowVolley">Snowvolley tournament</Label>
                                            <Input type="select" name="doesSnowVolley" id="doesSnowVolley" value={this.state.doesSnowVolley ? "yes" : "no"}
                                                disabled={this.doesSkiOnSecondDay()}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <FormGroup>
                                            <Label for="doesSnowWalking">Snowshoes walking</Label>
                                            <Input type="select" name="doesSnowWalking" id="doesSnowWalking" value={this.state.doesSnowWalking ? "yes" : "no"}
                                                disabled={this.doesSkiOnSecondDay()}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <h5 className="title category">Third day activities</h5>
                                <span className="details">*Insert message about activities and skiing exclusion here*</span>
                                <Row className="mt-3">
                                    <Col>
                                        <FormGroup>
                                            <Label for="thirdDaySkiOrSnow">Will you ski/snowboard?</Label>
                                            <Input type="select" name="thirdDaySkiOrSnow" id="thirdDaySkiOrSnow" value={this.state.thirdDaySkiOrSnow ? "yes" : "no"}
                                                disabled={this.doesBasecampActivityOnThirdDay()}
                                                onChange={
                                                    (event) => {
                                                        let eventVal = event.target.value
                                                        if (eventVal === "yes") {
                                                            this.setState({
                                                                thirdDaySkiOrSnow: true,
                                                                doesSnowWalking: false,
                                                                doesSnowVolley: false,
                                                                doesHTF: false,
                                                                doesBeerPong: false,
                                                                doesLineDrag: false,
                                                                doesTwister: false,
                                                                doesSlackline: false,
                                                                doesFlunkyBall: false,
                                                                doesBull: false,
                                                                doesSponsorActivities: false
                                                            })
                                                        } else {
                                                            this.setState({
                                                                thirdDaySkiOrSnow: false,
                                                                thirdCourseType: "None",
                                                                raceType: "None"
                                                            })
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
                                            <Label for="thirdCourseType">Ski/Snowboard course</Label>
                                            <Input type="select" name="thirdCourseType" id="thirdCourseType" value={this.state.thirdCourseType} 
                                                disabled={this.doesBasecampActivityOnThirdDay()}
                                                onChange={
                                                    (event) => {
                                                        let eventVal = event.target.value
                                                        this.setState({thirdCourseType: eventVal})
                                                        if (eventVal !== "None") {
                                                            this.setState({thirdDaySkiOrSnow: true})
                                                        } else {
                                                            this.setState({thirdDaySkiOrSnow: false})
                                                        }
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
                                            <Label for="raceType">Ski/Snowboard race</Label>
                                            <Input type="select" name="raceType" id="raceType" value={this.state.raceType} 
                                                disabled={this.doesBasecampActivityOnThirdDay()}                                               
                                                onChange={
                                                    (event) => {
                                                        let eventVal = event.target.value
                                                        this.setState({thirdCourseType: eventVal})
                                                        if (eventVal !== "None") {
                                                            this.setState({thirdDaySkiOrSnow: true})
                                                        } else {
                                                            this.setState({thirdDaySkiOrSnow: false})
                                                        }
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
                                            <Label for="doesHTF">Human table football</Label>
                                            <Input type="select" name="doesHTF" id="doesHTF" value={this.state.doesHTF ? "yes" : "no"}
                                                disabled={this.doesSkiOnThirdDay()}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="doesBull">Mechanical bull</Label>
                                            <Input type="select" name="doesBull" id="doesBull" value={this.state.doesBull ? "yes" : "no"}
                                                disabled={this.doesSkiOnThirdDay()}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>


                                </Row>

                                <h5 className="title category">Basecamp activities</h5>
                                <span>These are the activities you can do at the basecamp <b>during both days</b> (Check all that apply)</span>
                                <Row form>
                                    <div className="mt-2 container">
                                        <span className="check-separator">
                                            <label htmlFor="doesBeerPong" className={this.doesSkiOnBothDays() ? "text-muted" : ""} >Beer pong</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesBeerPong" name="doesBeerPong" 
                                                defaultChecked={this.state.doesBeerPong} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck} 
                                            />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="doesLineDrag" className={this.doesSkiOnBothDays() ? "text-muted" : ""}>Line dragging</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesLineDrag" name="doesLineDrag" 
                                                defaultChecked={this.state.doesLineDrag} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck} 
                                            />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="doesTwister" className={this.doesSkiOnBothDays() ? "text-muted" : ""}>Twister</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesTwister" name="doesTwister"
                                                defaultChecked={this.state.doesTwister} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck} 
                                            />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="doesSlackline" className={this.doesSkiOnBothDays() ? "text-muted" : ""}>Slackline</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesSlackline" name="doesSlackline"
                                                defaultChecked={this.state.doesSlackline} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck} 
                                            />
                                        </span>

                                        <span className="check-separator">
                                            <label htmlFor="doesFlunkyBall" className={this.doesSkiOnBothDays() ? "text-muted" : ""}>Flunky ball</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesFlunkyBall" name="doesFlunkyBall"
                                                defaultChecked={this.state.doesFlunkyBall} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck}
                                            />
                                        </span>
                                        <span className="check-separator">
                                            <label htmlFor="doesSponsorActivities" className={this.doesSkiOnBothDays() ? "text-muted" : ""}>Sponsor activities</label>
                                            <input className="rental-checkbox" type="checkbox" id="doesSponsorActivities" name="doesSponsorActivities"
                                                defaultChecked={this.state.doesSponsorActivities} disabled={this.doesSkiOnBothDays()}
                                                onChange={this.handleCheckboxCheck}
                                            />
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
                                        <AvGroup>
                                            <Label for="height">Height (cm)</Label>
                                            <AvInput type="number" name="height" id="height" placeholder="180" onChange={this.handleInputChange} disabled={!this.rentsMaterial()}
                                                validate ={{
                                                    pattern: {value: '^[0-9]+$'},
                                                    minLength: {value: 3},
                                                    maxLength: {value: 3}
                                                }}
                                            />
                                            <AvFeedback>Please insert a valid height!</AvFeedback>
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <AvGroup>
                                            <Label for="zip">Weight (kg)</Label>
                                            <AvInput type="number" name="weight" id="weight" placeholder="80" onChange={this.handleInputChange} disabled={!this.rentsMaterial()}
                                                validate ={{
                                                    pattern: {value: '^[0-9]+$'},
                                                    minLength: {value: 2},
                                                    maxLength: {value: 3}
                                                }}
                                            />
                                                <AvFeedback>Please insert a valid weight!</AvFeedback>                                        
                                        </AvGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="shoeSize">Shoe size</Label>
                                            <Input type="select" name="shoeSize" id="shoeSize" value={this.state.shoeSize} onChange={this.handleInputChange} disabled={!this.rentsMaterial()}>
                                                {SHOE_SIZES.map(
                                                        (shoe_size, key) => (
                                                            <option key={key} value={shoe_size}>{shoe_size}</option>
                                                        )
                                                    )
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="xpLvl">Ski experience level</Label>
                                            <Input type="select" name="xpLvl" id="xpLvl" value={this.state.xpLvl} onChange={this.handleInputChange} disabled={!this.rentsMaterial()}>
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
                                            <Input type="select" name="secondRentalType" id="secondRentalType" value={this.state.secondRentalType}
                                                onChange={this.handleInputChange}
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
                                            <Input type="select" name="thirdRentalType" id="thirdRentalType" value={this.state.thirdRentalType}
                                                onChange={this.handleInputChange}
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
                                            <Label for="wantsHoodie">Do you want your own Snowdays hoodie?</Label>
                                            <Input type="select" name="wantsHoodie" id="wantsHoodie" value={this.state.wantsHoodie ? "yes" : "no"}
                                                onChange={this.handleYesNoSelectInput}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className={this.state.wantsHoodie ? "" : "collapsed"}>
                                            <Label for="hoodieSize">Pick a size</Label>
                                            <Input type="select" name="hoodieSize" id="hoodieSize" value={this.state.hoodieSize}
                                                onChange={this.handleInputChange}
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
                                        <input required className="rental-checkbox" type="checkbox" id="skipassAgree" name="skipassAgree" defaultChecked={this.state.skipassAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="rentalAgree" name="rentalAgree" defaultChecked={this.state.rentalAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="propertyAgree" name="propertyAgree" defaultChecked={this.state.propertyAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="riskAgree" name="riskAgree" defaultChecked={this.state.riskAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="busAgree" name="busAgree" defaultChecked={this.state.busAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="allergiesAgree" name="allergiesAgree" defaultChecked={this.state.allergiesAgree} onChange={this.handleCheckboxCheck} />
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
                                        <input required className="rental-checkbox" type="checkbox" id="paymentAgree" name="paymentAgree" defaultChecked={this.state.paymentAgree} onChange={this.handleCheckboxCheck} />
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
                        
                        {/* TODO: If there is an error with mutations add the error to the state and then delete the profile */}
                        <Composer components={[
                            <Mutation mutation={CREATE_PROFILE}
                                variables={{ firstName: this.state.name, lastName: this.state.surname, mobilePhone: this.state.phoneNumber, badgeNumber: this.state.enrollmentNumber, gender: (this.state.gender === "male" ? "MALE" : "FEMALE"), isVegetarian: this.state.isVeg, idNumber: this.state.personalIdNr, universityId: UNIVERSITIES[this.state.universityName] }}
                                onCompleted={(data) => {
                                    this.setState({ userProfileId: data.createProfile.profile.id })
                                    console.log("Created user profile");

                                }}
                                onError={(createError) => {
                                    console.log(createError);
                                    this.setState({mutationError: true})
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
                                    this.setState({mutationError: true})
                                    alert("There was a problem with your activity selection")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={CREATE_RENTAL}
                                variables={{experience: (this.state.xpLvl==="Beginner" ? "BEGINNER" : "INTERMEDIATE"), height: parseInt(this.state.height), shoeSize: parseInt(this.state.shoeSize), weight: parseInt(this.state.weight)}}
                                onCompleted={(data) => {
                                    console.log("Created a rental entry for this user");
                                    console.log(data)
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    this.setState({mutationError: true})
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
                                    this.setState({mutationError: true})
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
                                    this.setState({mutationError: true})
                                    alert("There was a problem with linking the rental to your user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={CREATE_PURCHASE}
                                onCompleted={(data) => {
                                    console.log("Created purchase entry for the user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    this.setState({mutationError: true})
                                    alert("There was a problem with linking the purchase to your user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={ADD_ITEM_TO_PURCHASE}
                                onCompleted={(data) => {
                                    console.log("Adding items to purchase entry for this user");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    this.setState({mutationError: true})
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
                                    this.setState({mutationError: true})
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
                                    this.setState({mutationError: true})
                                    alert("There was a problem with linking this profile to the signed up user data!")
                                    window.location.reload()
                                }}
                            />,
                            <Mutation mutation={DELETE_PROFILE}
                            onCompleted={(data) => {
                                    console.log("Deleted the profile which was created for its faults");
                                }}
                                onError={(error) => {
                                    console.log(error);
                                    this.setState({mutationError: true})
                                    alert("There was a problem with deleting this user profile!")
                                    window.location.reload()
                                }}
                            />,
                        ]}>
                            {(mutationFunctions) => (
                                <Button type="submit" className="btn btn-primary pull-right"
                                    onClick={() => {
                                            this.setState({mutationFunctions: mutationFunctions})                                
                                        }
                                    }
                                    >REGISTER</Button>
                            )}
                        </Composer>

                    </AvForm>
                    </>
                }

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
export default ExternalRegistration;