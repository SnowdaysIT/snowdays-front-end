/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Made by the great guys at the IT team
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
