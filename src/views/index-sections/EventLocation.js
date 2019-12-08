import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function EventLocation() {
  
  return (
    <>
      <div
          className="section clear-filter" filter-color="blue"
          style={{
            backgroundImage: "url(" + require("assets/img/event-bg.jpg") + ")"
          }}
        >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardBody>
                  <TabContent
                    className="text-left"
                    activeTab="iconPills1"
                  >
                    <TabPane tabId="iconPills1">
                        <h4 className="category">Snowdays is the biggest winter sports event organised for students by students in Europe.</h4>
                        <p>
                            From the 7th until the 9th of March SCUB organises sporting competitions, entertainment and parties in Bozen and surroundings.
                            The organising committee consists solely of volunteers, enthusiastic about sports, snow and mountains.
                            Involved are students from the varying faculties of the UniBz, which is supporting the event.
                        </p>
                        <b>Included in our package are:</b>
                        <ul className="explanationList">
                            <li className="explanationListItem">all meals (breakfast, lunch, snacks, dinner)</li>
                            <li className="explanationListItem">accommodation in student dorm or apartment</li>
                            <li className="explanationListItem">2 ski passes</li>
                            <li className="explanationListItem">transport to the ski areas</li>
                            <li className="explanationListItem">3 parties</li>
                            <li className="explanationListItem">Welcome pack containing the official t-shirt and many sponsor gadgets</li>
                        </ul>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardBody>
                  <TabContent
                    className="text-left"
                    activeTab={"pills1"}
                  >
                    <TabPane tabId="pills1">
                    <h4 className="category">Location description goes here</h4>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default EventLocation;
