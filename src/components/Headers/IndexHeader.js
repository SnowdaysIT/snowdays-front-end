/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// core components
import Countdown from 'react-countdown-now';
// custom css
import '../../assets/css/index.css';

function IndexHeader() {

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  // Renderer of the timer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="timer-box">
        <h5><strong>{days}d {hours}h {minutes}m {seconds}s</strong></h5>
      </div>
    );
  };

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header-min.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div>
          <div className="content-center brand main-header-div">
            <h1 className="main-header-text">SNOWDAYS</h1>
            <h3 className="h3-seo">Europe's biggest student winter sports event</h3>
            <div className="dates-container">
              <h3 className="h3-seo">5 6 7 March 2020</h3>
              <Countdown
                date={Date.parse("03/05/2020")}
                renderer={renderer}
              />
            </div>
            <Link to="/signup">
              <button type="button" className="btn btn-lg register-button">
                Register
                <i className="fas fa-sign-in-alt ml-2 mt-1"></i>            
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
