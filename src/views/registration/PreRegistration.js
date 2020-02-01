import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const PreRegistration = (props) => {
  const showModal = props.showModal;
  const helpHostInfo = props.helpHostInfo;
  const [modal, setModal] = useState(showModal);
  
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal className="info-modal" isOpen={modal} toggle={toggle} size="lg">
        <ModalBody>
            <div>
                <h2 style={{color: "#4BB5FF"}}>Hey there Snowlover</h2>
                <p>We are happy to welcome you to the enrolment for Snowdays 2020. We hope you are already excited to join us on this adventure. Just follow the enrolment steps, put in all the required data and become a part of the Snowdays’ family. 

                Please keep your student ID near since you will be needing it to register. 

                Organizing a unique event like Snowdays needs a lot of passionate hosts and helpers. If you want to contribute to this you can choose to become a helper and/or to host some of the external students who are coming. Please notice that for the enrolment we will give preference to those people who are going to host or help during the event. 
                First year’s students must help or host in order to register to the event.</p>

                <h4>General Data</h4>
                <p>This part is about your general information. Tell us who you are and put in your contact dates so that you can receive all the important information regarding the event. We will also send a confirmation of your enrolment to your e-mail address.</p>

                {helpHostInfo && 
                <>
                  <h4>Hosting Data</h4>
                  <div>
                      <p>Hosting is one of the most essential parts of the Snowdays’ spirit since we will welcome lots of international students from all over Europe for the event. For the first time, this year, we are proud to host <b>overseas’ students</b>. Take the opportunity to get to meet new friends from other countries by letting them stay at your place. 
                      Students living in one of the following student dorms will be allowed to host:</p>
                      <ul>
                          <li>Peter-Rigler (one external student per room)</li>
                          <li>Dante appartements (up to 4 external students per room)</li>
                          <li>Univercity (in single apartments two external students, in double apartments up to three external students)</li>

                      </ul>
                  </div>

                  <h4>Helpers</h4>
                  <div>
                      <p>You can also contribute by becoming one of our helpers. There are the following fields you can get involved in:</p>
                      <ul>
                          <li>Logistics: you will have to control the exit of the basecamps</li>
                          <li>Catering: you will help us organizing amazing food for the participants (either breakfast, lunch or dinner)</li>
                          <li>Sports: you will contribute to the on-site organisation of the basecamp’ activities</li>
                          <li>Party: you will help by setting up, setting off, checking the wardrobe and at the bar</li>
                          <li>Spirit: you will help to create a nice environment for participants where the participants are free to show their spirit and enjoy their time</li>
                          <li>Contacts & Accommodation: you will have to help the first day during the check-in, guard our Lost & Found desk or wake up students in the gyms</li>
                      </ul>
                      <p>If you are a helper, you will receive the discount money back at the end of the event. Helpers who don’t show to their shifts during the event, won't receive the refund. Don’t worry, shifts last up to 2 hours and are scheduled so that you can enjoy all the activities!</p>
                  </div>
                </>
                }

                <h4>Event and Sports Data</h4>
                <p>You are almost there, there’s only one step left for you before becoming a part of Snowdays 2020!
                During the days different sport activities will be provided which you can choose from here. If you want to rent equipment for skiing, please put in your data. 
                Moreover, you will receive a (aggettivo) T-Shirt at the beginning of the event, so just enter your preferred size. 
                Please notice: if you choose to rent equipment you will be asked to pay the fee in advance at the same time as you pay the participation fee!</p>

                <h4 style={{color: "#4BB5FF"}}>*PARTY ANIMAL*</h4>
                <p>If you want to host but cannot participate to all of the three days don’t worry: you will have free entry and free drinks at the second party! 
                Min. number of hosted students: 4 </p>
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>I read everything, let me register</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PreRegistration;
