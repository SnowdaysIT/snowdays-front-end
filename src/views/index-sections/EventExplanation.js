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
    Col,
    Carousel,
    CarouselItem
} from "reactstrap";

const carousel_images = [
    {
        src: require("assets/img/sport1.jpg"),
    },
    {
        src: require("assets/img/sport2.jpg"),
    },
    {
        src: require("assets/img/sport3.jpg"),
    },
    {
        src: require("assets/img/sport4.jpg"),
    },
    {
        src: require("assets/img/sport5.jpg"),
    },
    {
        src: require("assets/img/sport6.jpg"),
    },
    {
        src: require("assets/img/party1.jpg"),
    },
    {
        src: require("assets/img/party2.jpg"),
    },
    {
        src: require("assets/img/party3.jpg"),
    },
    {
        src: require("assets/img/party4.jpg"),
    },
    {
        src: require("assets/img/party5.jpg"),
    },
    {
        src: require("assets/img/party6.jpg"),
    }
];


function Event() {

    const [iconPills, setIconPills] = React.useState("1");
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === carousel_images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? carousel_images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const changeIndex = (index) => {
      setActiveIndex(index);
    }

    return (
        <>
            <div className="section">
                <Container>
                    <Row> 
                        <h3 className="h3-seo category ml-3">THERE ARE NO DAYS LIKE SNOWDAYS</h3>
                        <Col className="ml-auto mr-auto" md="11" xl="7">
                            <Card>
                                <CardHeader>
                                    <Nav
                                        className="nav-tabs-neutral justify-content-center"
                                        data-background-color="blue"
                                        role="tablist"
                                        tabs>
                                        
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : "" }
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                    changeIndex(0);
                                                }}
                                                style={{marginTop: "7%"}}
                                            >
                                                <i className="fas fa-skiing info-icon"></i>
                                                Sports
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink className="disabled" style={{marginTop: "12%"}}>
                                                <i className="fas fa-plus info-icon"></i>
                                            </NavLink>
                                        </NavItem>
                            
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                    changeIndex(6);
                                                }}
                                                style={{marginTop: "7%"}}
                                            >
                                                <i className="fas fa-glass-cheers info-icon"></i>
                                                Parties
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink className="disabled" style={{marginTop: "12%"}}>
                                                <i className="fas fa-equals info-icon"></i>
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
                                                <i className="far fa-snowflake info-icon" style={{fontSize: 40}}></i>
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
                                            <div>
                                                <h4>What would Snowdays be without it's sports activities?</h4>
                                                <p>
                                                    Still a fantastic event in our opinion, but not quite the same. 
                                                    Here are the sport activities that you can try out and also compete in throughout the event:
                                                </p>
                                                <ul className="explanationList">
                                                    <li className="explanationListItem">Ski</li>
                                                    <li className="explanationListItem">Snowboard</li>
                                                    <li className="explanationListItem">Ski Touring</li>
                                                    <li className="explanationListItem">Snowvolley</li>
                                                    <li className="explanationListItem">Sledging</li>
                                                    <li className="explanationListItem">Snowfootball</li>
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <h4>3 Parties. 3 Locations. 3 Themes.</h4>
                                            <h5>The time of your life</h5>
                                            <h6>Get ready for some serious fun</h6>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                              
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            >
                            {carousel_images.map(item => {
                                return (
                                <CarouselItem
                                    onExiting={onExiting}
                                    onExited={onExited}
                                    key={item.src}
                                    style={{width:"100%", height: "500px"}}
                                >
                                    <img src={item.src} alt={item.altText} />
                                    <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.caption}</h5>
                                    </div>
                                </CarouselItem>
                                );
                            })}
                            <a
                                className="carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={e => {
                                e.preventDefault();
                                previous();
                                }}
                                role="button"
                            >
                                <i className="now-ui-icons arrows-1_minimal-left"></i>
                            </a>
                            <a
                                className="carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={e => {
                                e.preventDefault();
                                next();
                                }}
                                role="button"
                            >
                                <i className="now-ui-icons arrows-1_minimal-right"></i>
                            </a>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Event;
