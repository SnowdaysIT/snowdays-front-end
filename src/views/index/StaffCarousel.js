import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require("assets/img/staff/all.jpg"),
    header: '',
    caption: '',
    key: '1'
  },
  {
    src: require("assets/img/staff/mainco.jpg"),
    header: 'Main Coordinators',
    caption: '',
    key: '2'
  },
  {
    src: require("assets/img/staff/ca.jpg"),
    header: 'Contacts and Accomodation',
    caption: '',
    key: '3'
  },
  {
    src: require("assets/img/staff/catering.jpg"),
    header: 'Catering',
    caption: '',
    key: '4'
  },
  {
    src: require("assets/img/staff/graphics.jpg"),
    header: 'Graphics',
    caption: '',
    key: '5'
  },
  {
    src: require("assets/img/staff/it.jpg"),
    header: 'IT',
    caption: '',
    key: '6'
  },
  {
    src: require("assets/img/staff/logistics.jpg"),
    header: 'Logistics',
    caption: '',
    key: '7'
  },
  {
    src: require("assets/img/staff/party.jpg"),
    header: 'Party',
    key: '8'
  },
  {
    src: require("assets/img/staff/pr.jpg"),
    header: 'Public Relations',
    caption: '',
    key: '9'
  },
  {
    src: require("assets/img/staff/sponsors.jpg"),
    header: 'Sponsors',
    caption: '',
    key: '10'
  },
];

const StaffCarousel = () => {
  return (
    <>
      <h3 className="title-up category">The ones who make it possible</h3>
      <UncontrolledCarousel className="staff-carousel" items={items} autoPlay={false}/>
    </>
  );
}

export default StaffCarousel;
