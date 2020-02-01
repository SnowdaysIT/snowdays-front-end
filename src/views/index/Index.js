import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


// sections for this page
import HomeContact from "./HomeContact.js"
import EventLocation from "./EventLocation.js"
import EventExplanation from "./EventExplanation.js"
import Videos from "./Videos.js"
import StaffCarousel from "./StaffCarousel.js"

import '../../assets/css/index.css'


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

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Clear token for API calls when user browses to this page
  sessionStorage.removeItem('token');

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
              <StaffCarousel />
            </div>  
          </section>
          <section id="contactSection">
            <HomeContact />
          </section>
        </div>
        <DarkFooter />
        <CookieConsent acceptOnScroll={true} location="bottom" buttonStyle={{ backgroundColor: "#4BB5FF", color: "white", fontSize: "16px" }}>
          This website uses <span onClick={toggle} style={{color: "#4BB5FF"}}>cookies</span> to enhance the user experience
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Cookie Policy</ModalHeader>
            <ModalBody>
            <b>What are cookies?</b><br/>
            Cookies are small text files sent from the site to the computer of the interested party, where they are stored before being sent back to the site at the next visit by the same user. In this document, the term 'cookie' refers to both cookies, properly so-called, and to all similar technologies.
            <br/>
            <br/>
            <b>First or third-party cookies</b><br/>
            The so-called "first-party" cookies refer to cookies developed by the owner of the site, while "third-party" cookies are cookies developed by third parties, that is, different from the owner of the site. This is because on each site there may be elements (images, maps, sounds, specific links to web pages of other domains, etc.) that reside on servers other than the site visited.
            <br/>
            <br/>
            <b>1.	Technical cookies</b><br/>
            Technical cookies are cookies that are used to browse or provide a service requested by the user. They are not used for other purposes and are normally installed directly by the owner of the website. Without the use of these cookies, some operations could not be performed or would be more complex and / or less secure. These cookies can be divided into:
            <br/>
            -	navigation or session: they are used for the normal navigation and use of the website and are necessary for the proper functioning of the site;<br/>
            -	analytics: if used directly by the site operator, they are counted on the technical ones to collect information, in aggregate form, on the number of users and how they visit the site, in order to improve site performance;<br/>
            -	functionality: make navigation possible based on selected criteria (for example, the language, the products selected for purchase) and improving the service.<br/>
            <br/>
            <b>2.	Profiling cookies</b><br/>
            Profiling cookies are aimed at creating real user profiles for sending advertising messages according to the preferences found during browsing. According to the provision of the Privacy Guarantor n. 229 of 8 May 2014, the consent of the interested party is requested for the use of this type of cookie.
            <br/>
            <b>Cookies installed on this site</b><br/>
            On our site there are technical and analytical cookies exclusively of first and third part. These cookies allow the modification of the website, such as the preferred language or the geographical area in which the user is located. By storing the geographical area, for example, a website may be able to offer you local weather forecasts or local traffic news. The loss of information stored in a cookie of preferences could make the experience on the website less functional but should not compromise its functioning.
            To prevent the storage of the aforementioned cookies, the user can download the appropriate additional component available at the following link: https://tools.google.com/dlpage/gaoptout

            On our site there are NO profiling cookies.
            <br/>
            <br/>
            <b>Duration of cookies</b><br/>
            Cookies have a duration that can be defined by an expiration date (or by a specific action such as closing the browser) set at the time of installation. Cookies can be:

            ¥	temporary or session (session cookies): they are destroyed every time the browser is closed;
            ¥	permanent (persistent cookies): once the browser is closed they are not cancelled but remain up to a preset expiration date;
            <br/>
            <br/>
            <b>Cookie management</b><br/>
            You can disable / delete cookies by accessing the configuration panel of your browser. Here is the link to the configuration panels of some known browsers:

            Chrome 
            For more information visit the following website.
            Mozilla Firefox 
            For more information visit the following website.
            Internet Explorer
            For more information visit the following website.
            Microsoft Edge
            For more information visit the following website.
            Safari 6
            For more information visit the following website.
            IOS Safari (mobile devices)
            For more information visit the following website.
            Opera
            For more information visit the following website.
            <br/>
            <br/>
            <b>Acceptance and waiver of cookies</b><br/>
            Continuing with browsing and closing the newsletter (banner) you accept the Cookie Policy and cookies will be set and collected. Through the aforementioned methods, the user will have the option to disable the collection of cookies at any time.

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </CookieConsent>
      </div>
    </>
  );
}

export default Index;
