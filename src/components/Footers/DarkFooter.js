/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by the <a href="https://github.com/orgs/SnowdaysIT/teams/it">great guys of the IT team</a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
