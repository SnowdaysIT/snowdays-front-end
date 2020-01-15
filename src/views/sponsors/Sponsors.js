import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/sponsors.css"

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";

function Sponsors() {
  
  return (
    <>
      <Container className="sponsors-container">
          Sponsors
      </Container>
      <DarkFooter/>
    </>
  );
}

export default Sponsors;
