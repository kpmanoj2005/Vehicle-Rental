import React from 'react';
import logo from '../Images/mercedes.svg';
import car from '../Images/car.png';
import bike from '../Images/bikes1.jpg';

//import 'Homepage.css';
const HomePage = () => {
  return (
    <>
    <div className='col'>
    <img src={logo} className='logo'alt="My Description" />
    <h2 className="head">FAMGO</h2>
    <h1 className='main'>Car And Bike  Rental</h1>
    <img src={car} className='car'alt="CAR"/>
    <img src={bike} className='bike' alt='bike'/>
    </div>
    <div className='row'>
      <h1 className='left'>Unforgettable journeys start here</h1>
      <h2 className='log'>LOGIN</h2>
      
    </div>
    </>
    
  );
};

export default HomePage;
