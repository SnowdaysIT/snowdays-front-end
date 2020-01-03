import React from "react";
import '../../assets/css/index.css'

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


// sections for this page
// import Images from "./index-sections/Images.js";
import HomeContact from "./HomeContact.js"
import EventLocation from "./EventLocation.js"
import EventExplanation from "./EventExplanation.js"
import Videos from "./Videos.js"
import StaffCarousel from "./StaffCarousel.js"

function Index() {

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <section id="eventSection">
            <EventLocation />
          </section>
          <section id="sportPartySection">
            <EventExplanation />
          </section>
          <section id="videoSection" className="mb-5">
            <Videos />
          </section>
          <section id="staffSection">
            <div className="container mt-5 mb-5"> 
              <StaffCarousel className="staff-carousel"/>
            </div>  
          </section>
          <section id="contactSection">
            <HomeContact />
          </section>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
