/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// core components
import Countdown from 'react-countdown-now';
// custom css
import '../../assets/css/index.css';

// custom background animation
import Background from "../../assets/img/header-min_short.jpg";
import {BackgroundSizeHelper, BackgroundOffsetHelper} from '../../components/helpers/helpers.js'

function IndexHeader() {

  let pageHeader = React.createRef();

  const [bgImage] = React.useState(require("sizeof-loader!../../assets/img/header-min_short.jpg"))

  React.useEffect(() => {
    const updateBgPlacing = () => {
      pageHeader.current.style.backgroundSize = BackgroundSizeHelper(bgImage)
    }
    window.addEventListener("resize", updateBgPlacing)
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        pageHeader.current.style.backgroundPositionY = BackgroundOffsetHelper('bottom')
      }
      window.addEventListener("scroll", updateScroll)
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll)
        window.removeEventListener("resize", updateBgPlacing)
      }
    }
    return function cleanup() {
      window.removeEventListener("resize", updateBgPlacing)
    }
  })

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
            backgroundImage: 'url(' + Background + ')',
            backgroundSize: BackgroundSizeHelper(bgImage)
          }}
          ref={pageHeader}
        ></div>
        <div>
          <div className="content-center brand main-header-div">
            <h1 className="main-header-text">SNOWDAYS</h1>
            <h3 className="h3-seo">Europe's biggest student winter sports event</h3>
            <div className="dates-container">
              <h3 className="h3-seo">5<sup>th</sup> - 7<sup>th</sup> March 2020</h3>
              <Countdown
                date={Date.parse("03/05/2020")}
                renderer={renderer}
              />
            </div>
            {/*<Link to="https://forms.gle/Ez6n1ByWfrzfQGKXA">*/}
            <a href="https://forms.gle/RF279RAuMyvf94Wx5">
            <button type="button" className="btn btn-lg register-button">
              Register
              <i className="fas fa-sign-in-alt ml-2 mt-1"></i>
            </button>
            </a>
            {/*</Link>*/}

          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
