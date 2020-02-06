import React from "react";

// reactstrap components
import {
  Card,
  CardText,
  CardHeader,
  Container,
  Row,
  Col,
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
            <Col sm="12" md="12" lg="6" xl="6">
              <Card body outline color="#4BB5FF" className="type1-card">
                <CardHeader>
                  <h3 className="category">Snowdays is the biggest winter sports event organised by students for students</h3>
                </CardHeader>
                <CardText>
                  Every year hundreds of people gather from all over Europe for three gorgeous days full of sports, parties and friendly atmospheres.
                  The organising committee consists solely of volunteers, enthusiastic about sports, snow and mountains.
                  Involved are students from the varying faculties of the UniBz, which is supporting the event.
                </CardText>
              </Card>
            </Col>
            <Col sm="12" md="12" lg="6" xl="6">
              <Card body outline color="#4BB5FF" className="type1-card">
                <CardHeader>
                  <h3 className="category">Hosted in the province of Trentino-South Tyrol in Italy</h3>
                </CardHeader>
                <CardText>
                  Snowdays is set on the best ski slopes of the Italian Dolomites; 
                  breathtaking landscapes and soft snowfalls will make your Snowdays experience unforgettable. 
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default EventLocation;
