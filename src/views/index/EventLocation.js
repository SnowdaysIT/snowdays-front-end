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

// custom background animation
import Background from "../../assets/img/event-bg_reversed.jpg";
import {BackgroundSizeHelper, BackgroundOffsetHelper} from '../../components/helpers/helpers.js'

function EventLocation() {

  let eventBg = React.createRef();

  const [bgImage] = React.useState(
    // eslint-disable-next-line import/no-webpack-loader-syntax
    require(
      "sizeof-loader!../../assets/img/event-bg_reversed.jpg"
    )
  )

  React.useEffect(() => {
    const updateBgPlacing = () => {
      eventBg.current.style.backgroundSize = BackgroundSizeHelper(bgImage)
    }
    window.addEventListener("resize", updateBgPlacing)
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        eventBg.current.style.backgroundPositionY = BackgroundOffsetHelper('top');
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  
  return (
    <>
      <div
          className="section clear-filter" filter-color="blue"
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: "top center",
            backgroundSize: BackgroundSizeHelper(bgImage),
            backgroundRepeat: 'no-repeat'
          }} ref={eventBg}
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
                  <h3 className="category">Hosted in the province of South-Tyrol in Italy</h3>
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
