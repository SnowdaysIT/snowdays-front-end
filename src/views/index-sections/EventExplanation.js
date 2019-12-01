import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import Carousel from "./Carousel.js"

function Event() {
    const [iconPills, setIconPills] = React.useState("1");
    return (
        <>
            <div className="section">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <h3 className="h3-seo category">THERE ARE NO DAYS LIKE SNOWDAYS</h3>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i class="far fa-snowflake info-icon"></i>
                                                General
                      </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i class="fas fa-skiing info-icon"></i>
                                                Sports
                      </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i class="fas fa-glass-cheers info-icon"></i>
                                                Parties
                      </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-left"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1">
                                            <h4>Snowdays is the biggest winter sports event organised for students by students in Europe.</h4>
                                            <p>
                                                From the 7th until the 9th of March SCUB organises sporting competitions, entertainment and parties in Bozen and surroundings.
                                                The organising committee consists solely of volunteers, enthusiastic about sports, snow and mountains.
                                                Involved are students from the varying faculties of the UniBz, which is supporting the event.
                                            </p>
                                            <p>
                                                <b>Included in our package are:</b>
                                                <ul className="explanationList">
                                                    <li className="explanationListItem">all meals (breakfast, lunch, snacks, dinner)</li>
                                                    <li className="explanationListItem">accommodation in student dorm or apartment</li>
                                                    <li className="explanationListItem">2 ski passes</li>
                                                    <li className="explanationListItem">transport to the ski areas</li>
                                                    <li className="explanationListItem">3 parties</li>
                                                    <li className="explanationListItem">Welcome pack containing the official t-shirt and many sponsor gadgets</li>
                                                </ul>
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <h4>What would Snowdays be without it's sports activities?</h4>
                                            <p>
                                                Still a fantastic event in our opinion, but not quite the same.
                                                Here are the sport activities that you can try out and also compete in throughout the event:
                                                <ul className="explanationList">
                                                    <li className="explanationListItem">Ski</li>
                                                    <li className="explanationListItem">Snowboard</li>
                                                    <li className="explanationListItem">Ski Touring</li>
                                                    <li className="explanationListItem">Snowvolley</li>
                                                    <li className="explanationListItem">Sledging</li>
                                                    <li className="explanationListItem">Snowfootball</li>
                                                </ul>
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <h4>3 Parties. 3 Locations. 3 Themes.</h4>
                                            <h6>The time of your life</h6>
                                            <p>Check out our <a href="www.google.com">Gallery</a> to see how we party over here</p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <Carousel className="index-carousel" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Event;
