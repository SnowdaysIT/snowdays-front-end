import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require("assets/img/staff/all.jpg"),
    header: 'Our big family',
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
    src: require("assets/img/staff/team1.jpg"),
    header: 'Team 1',
    caption: '',
    key: '3'
  },
  {
    src: require("assets/img/staff/team2.jpg"),
    header: 'Team 2',
    caption: '',
    key: '4'
  },
  {
    src: require("assets/img/staff/team3.jpg"),
    header: 'Team 4',
    caption: '',
    key: '5'
  },
  {
    src: require("assets/img/staff/team4.jpg"),
    header: 'Team 4',
    caption: '',
    key: '6'
  },
  {
    src: require("assets/img/staff/team5.jpg"),
    header: 'Team 5',
    caption: '',
    key: '7'
  },
  {
    src: require("assets/img/staff/team6.jpg"),
    header: 'Team 6',
    key: '8'
  },
  {
    src: require("assets/img/staff/team7.jpg"),
    header: 'Team 7',
    caption: '',
    key: '9'
  },
  {
    src: require("assets/img/staff/team8.jpg"),
    header: 'Team 8',
    caption: '',
    key: '10'
  },
];

const StaffCarousel = () => {
  return (
    <>
      <h3 className="title-up category">The ones who make it possible</h3>
      <UncontrolledCarousel items={items} autoPlay={false}/>
    </>
  );
}

export default StaffCarousel;
