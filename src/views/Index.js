import React from "react";
import '../assets/css/index.css'

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


// sections for this page
// import Images from "./index-sections/Images.js";
import Socials from "./index-sections/Socials.js";
import EventExplanation from "./index-sections/EventExplanation.js"
import HomeContact from "./index-sections/HomeContact.js"
import Tabs from "./index-sections/Tabs";
import EventLocation from "./index-sections/EventLocation.js"


// Useless comment just to make a commit in the new dev branch

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
          <section id="staffSection">
            {/* <Tabs /> */}
          </section>
          <section id="contactSection">
            <HomeContact />
            <Socials />
          </section>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
