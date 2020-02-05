import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col } from 'reactstrap';

const ExternalTermsOfAgreementModal = (props) => {
  const isOpen = props.isOpen;
  const toggle = props.toggle

  return (
    <div>
      <Modal className="info-modal" isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader tag="h2" style={{ color: "#4BB5FF" }}>SNOWDAYS 2020 TERMS OF PARTECIPATION</ModalHeader>
        <ModalBody>
            <Row>
                <Col>
                    <h4><b>Skipasses</b></h4>
                    <p>
                        When you arrive in Bolzano and do the check-in you will receive the skipasses for the following days. 
                        Non-skiers will also receive a skipass for the second day in order to reach the basecamp. 
                        From the moment you receive the skipass/es you are fully responsible for them. 
                        In case of loss you will have to buy a new one on your own.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Rental material</b></h4>
                    <p>
                        If you are renting any material or equipment, you agree to return all equipment in the same condition as received, 
                        reasonable wear and tear excepted. 
                        If the equipment is not returned in good condition at the end of the event or if repairs or replacements are required, 
                        you agree to pay all labor, material and shipping charges to replace any equipment which is lost, 
                        stolen or damaged beyond repair.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Loss or damage to property</b></h4>
                    <p>
                        Snowdays does not accept responsibility and expressly excludes liability to the fullest extent permitted by law 
                        for any loss, theft, damage or destruction to any personal property in whole or in part for any reason whatsoever, 
                        even if left in the care of the staff and/or helpers of the event. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Assumption of risks</b></h4>
                    <p>
                        In consideration of your participation at Snowdays, you acknowledge that you are aware of the possible risks, 
                        dangers and hazards associated with your participation in the event, including the possible risk of severe or 
                        fatal injury to yourself or others. These risks include but are not limited to the following: 
                        the risks associated with travel to and from locations to be visited during the event, 
                        including transportation provided by commercial, private and/or public motor vehicles; 
                        intoxication and/or alcohol poisoning from the alcohol you consume whether voluntarily or through coercion. 
                        You acknowledge that your participation to Snowdays entail known and unknown risks that could result in physical 
                        or emotional injury, pregnancy, paralysis, death, or damage to yourself, to property or to third parties. 
                        You expressly agree and promise to accept and assume all of the risks existing the event. 
                        Your participation in the event is purely voluntary, and you elect to participate despite the risks. 
                        You expressly renounce any future claim or legal action against Snowdays and its staff.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Damages</b></h4>
                    <p>
                        We do not take any responsibility and we are not liable for any damage caused by you 
                        (be it indirect, special, incidental or consequential damages) in any venue where the event is held, 
                        i.e. slopes, ski resorts, the city of Bolzano-Bozen, party venues, University structure  etc. 
                        In particular, we inform you that for every damage (including vomit) that occurs to the buses 
                        caused by yourself, you will pay a fee of 100€ or the amount necessary to cover the damages caused, 
                        as agreed with the bus company. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Allergies</b></h4>
                    <p>
                        Snowdays makes every effort to accommodate the various dietary requirements of the participants and handles food 
                        allergies seriously. Every effort is made to instruct our staff regarding the potential severity of food allergies 
                        and to minimize allergic reactions. Please be advised that every effort will be made to have no allergic reactions, 
                        food may come in contact with items containing allergens, and there is always a risk of contamination or 
                        cross contamination. Participants with concerns need to be aware of these risks. Snowdays will assume no liability 
                        for any adverse reactions that may occur during the event.
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h3><b>Student dorms and gyms</b></h3>
                    <div className="ml-3">
                        <h5><b>Damage</b></h5>
                        <p>
                            You are liable for any damage caused to the student dorm/gym building or property caused by you or any persons 
                            in your party (whether or not staying at the student dorm/gym during your stay). Snowdays reserves the right to 
                            debit such amounts as it shall in its sole discretion to compensate or make good the loss, damage, costs or 
                            expenses incurred or suffered by Snowdays as a result of the aforesaid. Regardless, Snowdays further reserves 
                            the right to commence legal proceedings against you without notice. Snowdays has a strict NO SMOKING policy in 
                            all the student dorms and the gyms. Smoking is prohibited in any part of the school area. Failure to comply with 
                            these policies shall entitles us to terminate your stay at the student dorm/gym at our sole discretion and you 
                            must leave the building immediately without compensation or reimbursement. You shall be liable for any costs, 
                            loss or damage to the student dorm/gym arising from your failure to comply with these policies and Snowdays 
                            reserves the right to charge you for any such costs, loss or damage incurred by the student dorm/gym, and 
                            therefore retain the deposit of €50 for each participant or a part of it to cover any reasonable losses and 
                            expenses. The €50 deposit must be transferred together with your participation fee.
                        </p>
                        <h5><b>Restrictions and rules</b></h5>
                        <div>
                            <p>You may not bring the following into the student dorms or into the gym:</p>
                            <ul>
                                <li>Pets or livestock</li>
                                <li>Weapons</li>
                                <li>Any electrical appliances and/or equipment for heating and/or cooking purposes</li>
                                <li>Alcohol and drugs</li>
                                <li>Glass bottles</li>
                                <li>Fireworks</li>
                                <li>Smoke bombs</li>
                            </ul>
                            <p>
                                Snowdays reserves the right to remove and/or confiscate any of the above items found 
                                in any student dorm/gym immediately without notice to you and to charge you for any 
                                costs incurred for taking such action or for any loss or damage caused to the student 
                                dorm/gym, premises or property or to any participant or third party as a result of your 
                                failure to comply with this policy. Snowdays further reserves the right to ask you to 
                                leave the student dorm/gym and remove your belongings from the room immediately if we 
                                shall, in our sole opinion, deem that you have used your place of accommodation in an 
                                irresponsible manner or in a manner that will compromise the safety of, or cause damage 
                                and/or harm to the student dorm/gym, the other guests, our staff or any other persons, 
                                without any compensation and/or any reimbursement to you. 
                            </p>
                        </div>
                        <h5><b>Student dorms keys</b></h5>
                        <p>
                            You are fully responsible of the student dorm keys you will be given during the event.
                            Should you break and/or lose them, you will have to pay the full amount in order to have a new one. 
                        </p>
                    </div>                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Alcoholic beverages</b></h4>
                    <p>
                        It is strictly forbidden to bring with you any kind of alcoholic beverages within the whole event.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><b>Payment</b></h4>
                    <p>
                        Paid registration fees are non-refundable.
                    </p>
                </Col>
            </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>I agree</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ExternalTermsOfAgreementModal;
                                