import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarCatalog.css';

const CarCatalog = () => {
  const navigate = useNavigate();
  const cars = [
    {
      id: 1,
      name: 'Nissan GT-R',
      type: 'Sport',
      specs: {
        fuel: '90L',
        transmission: 'Manual',
        capacity: '2 People',
        rating: 4.4,
        reviews: 440,
        engine: '3.8L V6 Twin-Turbo',
        horsepower: '565 HP',
        topSpeed: '315 km/h',
        acceleration: '0-100 km/h in 2.9s'
      },
      price: 9900,
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/2018_Nissan_GT-R_Premium_in_Super_Silver%2C_Front_Right%2C_10-11-2022.jpg',
    },
      {
      id: 2,
      name: 'Rolls-Royce Ghost',
      type: 'Luxury',
      specs: {
        fuel: '82L',
        transmission: 'Automatic',
        capacity: '4 People',
        rating: 4.8,
        reviews: 320,
        engine: '6.75L V12',
        horsepower: '563 HP',
        topSpeed: '250 km/h',
        acceleration: '0-100 km/h in 4.8s'
      },
      price: '₹8000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rolls-Royce_Blue_Convertible_Palm_Beach_FL-1.jpg/1920px-Rolls-Royce_Blue_Convertible_Palm_Beach_FL-1.jpg',
    },
    {
      id: 3,
      name: 'Tesla Model S',
      type: 'Electric',
      specs: {
        fuel: 'Electric',
        transmission: 'Automatic',
        capacity: '5 People',
        rating: 4.7,
        reviews: 580,
        engine: 'Dual Motor AWD',
        horsepower: '670 HP',
        topSpeed: '322 km/h',
        acceleration: '0-100 km/h in 2.1s'
      },
      price: '₹12000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/2018_Tesla_Model_S_75D.jpg',
    },
    {
      id: 4,
      name: 'BMW M5 Competition',
      type: 'Sedan',
      specs: {
        fuel: '68L',
        transmission: 'Automatic',
        capacity: '5 People',
        rating: 4.6,
        reviews: 390,
        engine: '4.4L V8 Twin-Turbo',
        horsepower: '617 HP',
        topSpeed: '305 km/h',
        acceleration: '0-100 km/h in 3.3s'
      },
      price: '₹11000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/1920px-2018_BMW_M5_Automatic_4.4.jpg',
    },
    {
      id: 5,
      name: 'Audi R8 V10',
      type: 'Supercar',
      specs: {
        fuel: '83L',
        transmission: 'Automatic',
        capacity: '2 People',
        rating: 4.5,
        reviews: 410,
        engine: '5.2L V10',
        horsepower: '602 HP',
        topSpeed: '331 km/h',
        acceleration: '0-100 km/h in 3.2s'
      },
      price: '₹15000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Audi_R8_V10_RWS_IMG_0669.jpg/360px-Audi_R8_V10_RWS_IMG_0669.jpg',
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      type: 'Sport',
      specs: {
        fuel: '67L',
        transmission: 'Automatic',
        capacity: '2 People',
        rating: 4.9,
        reviews: 520,
        engine: '3.8L Flat-6 Twin-Turbo',
        horsepower: '640 HP',
        topSpeed: '330 km/h',
        acceleration: '0-100 km/h in 2.7s'
      },
      price: '₹14000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Porsche_991_GT3_MkII_%2837601199836%29_%28cropped%29.jpg/420px-Porsche_991_GT3_MkII_%2837601199836%29_%28cropped%29.jpg',
    },
    {
      id: 7,
      name: 'Lamborghini Aventador',
      type: 'Supercar',
      specs: {
        fuel: '90L',
        transmission: 'Automatic',
        capacity: '2 People',
        rating: 4.8,
        reviews: 380,
        engine: '6.5L V12',
        horsepower: '730 HP',
        topSpeed: '350 km/h',
        acceleration: '0-100 km/h in 2.9s'
      },
      price: '₹30000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/2013_Lamborghini_Aventador_LP700-4_BS_O24.jpg/1920px-2013_Lamborghini_Aventador_LP700-4_BS_O24.jpg',
    },
    {
      id: 8,
      name: 'Ferrari 488 Pista',
      type: 'Supercar',
      specs: {
        fuel: '78L',
        transmission: 'Automatic',
        capacity: '2 People',
        rating: 4.9,
        reviews: 450,
        engine: '3.9L V8 Twin-Turbo',
        horsepower: '710 HP',
        topSpeed: '340 km/h',
        acceleration: '0-100 km/h in 2.85s'
      },
      price: '₹28000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ferrari_488_Pista_Genf_2018.jpg/1920px-Ferrari_488_Pista_Genf_2018.jpg',
    },
    {
      id: 9,
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury',
      specs: {
        fuel: '76L',
        transmission: 'Automatic',
        capacity: '5 People',
        rating: 4.7,
        reviews: 420,
        engine: '4.0L V8 Biturbo',
        horsepower: '496 HP',
        topSpeed: '250 km/h',
        acceleration: '0-100 km/h in 4.6s'
      },
      price: '₹13000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/2014_Mercedes-Benz_S_350_BlueTEC_%28W_222%29_sedan_%282016-01-04%29_01.jpg/1920px-2014_Mercedes-Benz_S_350_BlueTEC_%28W_222%29_sedan_%282016-01-04%29_01.jpg',
    },
    {
      id: 10,
      name: 'Toyota Supra MK5',
      type: 'Sport',
      specs: {
        fuel: '52L',
        transmission: 'Automatic',
        capacity: '2 People',
        rating: 4.3,
        reviews: 360,
        engine: '3.0L Inline-6 Turbo',
        horsepower: '382 HP',
        topSpeed: '250 km/h',
        acceleration: '0-100 km/h in 4.3s'
      },
      price: '₹10000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2023_Toyota_Supra_%282%29.jpg/500px-2023_Toyota_Supra_%282%29.jpg',
    },
    {
      id: 11,
      name: 'Ford Mustang Shelby GT500',
      type: 'Muscle',
      specs: {
        fuel: '70L',
        transmission: 'Automatic',
        capacity: '4 People',
        rating: 4.5,
        reviews: 340,
        engine: '5.2L Supercharged V8',
        horsepower: '760 HP',
        topSpeed: '290 km/h',
        acceleration: '0-100 km/h in 3.5s'
      },
      price: '₹9000/day',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2018_Ford_Mustang_GT_5.0.jpg/420px-2018_Ford_Mustang_GT_5.0.jpg',
    },
  ];

  const [likedCar, setLikedCar] = useState(null);

  const handleLike = (carName) => {
    setLikedCar(likedCar === carName ? null : carName);
  };

  const handleRentNow = (car) => {
    navigate('/booking', { 
      state: { 
        carDetails: {
          id: car.id,
          name: car.name,
          image: car.image,
          price: car.price,
          rating: car.specs.rating,
          reviews: car.specs.reviews,
          type: car.type,
          specs: car.specs
        }
      }
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="star-icon" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="star-icon" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700">
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="star-icon" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="car-catalog">
      <h1 className="catalog-title">Premium Car Collection</h1>
      {Object.entries(
        cars.reduce((acc, car) => {
          if (!acc[car.type]) {
            acc[car.type] = [];
          }
          acc[car.type].push(car);
          return acc;
        }, {})
      ).map(([type, cars]) => (
        <div key={type} className="car-type-section">
          <h2 className="type-heading">{type}</h2>
          <div className="cars-container">
            {cars.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-header">
                  <div className="car-info">
                    <h3 className="car-name">{car.name}</h3>
                    <div className="car-rating">
                      <div className="stars">
                        {renderStars(car.specs.rating)}
                      </div>
                      <span className="review-count">{car.specs.reviews}+ Reviews</span>
                    </div>
                  </div>
                  <button
                    className={`like-button ${likedCar === car.name ? 'liked' : ''}`}
                    onClick={() => handleLike(car.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={likedCar === car.name ? '#ed3f3f' : 'none'}
                      stroke={likedCar === car.name ? '#ed3f3f' : 'currentColor'}
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-specs">
                  <div className="spec">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="M9 22V12h6v10" />
                    </svg>
                    <span>{car.specs.fuel}</span>
                  </div>
                  <div className="spec">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                    <span>{car.specs.transmission}</span>
                  </div>
                  <div className="spec">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <span>{car.specs.capacity}</span>
                  </div>
                </div>
                <div className="car-details">
                  <div className="detail-row">
                    <span className="detail-label">Engine:</span>
                    <span className="detail-value">{car.specs.engine}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Horsepower:</span>
                    <span className="detail-value">{car.specs.horsepower}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Top Speed:</span>
                    <span className="detail-value">{car.specs.topSpeed}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Acceleration:</span>
                    <span className="detail-value">{car.specs.acceleration}</span>
                  </div>
                </div>
                <div className="car-footer">
                  <div className="price-section">
                    <div className="price-row">
                      <span className="price-label">Base Price:</span>
                      <span className="price-value">₹{car.price}/day</span>
                    </div>
                    <div className="price-row">
                      <span className="price-label">Tax & Fees:</span>
                      <span className="price-value">₹0</span>
                    </div>
                  </div>
                  <button 
                    className="rent-button" 
                    onClick={() => handleRentNow(car)}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCatalog;