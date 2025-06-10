import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import Button from "@components/ui/Button";
import InputField from "@components/ui/InputField";
import Checkbox from "@components/ui/Checkbox";
import Dropdown from "@components/ui/Dropdown";
import Card from "@components/ui/Card";
import './CarRentalBookingForm.css';

const CarRentalBookingForm = ({
  // Default props that can be overridden
  initialBillingInfo = {
    name: '',
    phoneNumber: '',
    address: '',
    townCity: ''
  },
  initialRentalInfo = {
    deliveryLocation: '',
    deliveryDate: '',
    deliveryTime: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: ''
  },
  initialPaymentMethod = 'credit-card',
  initialCardInfo = {
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvc: ''
  },
  initialConfirmation = {
    marketingEmails: false,
    termsAndConditions: false
  },
  initialPromoCode = '',
  cityOptions = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
  timeOptions = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'],
  paymentLogos = {
    rupay: '/images/img_image_14.png',
    visa: '/images/img_visa.svg',
    mastercard: '/images/img_logo_mc.svg',
    paypal: '/images/img_paypal.svg',
    upi: '/images/img_image_13.png'
  },
  onRentNow = (formData) => {
    alert('Booking confirmed! Thank you for choosing our service.');
    console.log('Form data:', formData);
  },
  onApplyPromo = (promoCode) => {
    alert('Promo code applied successfully!');
    console.log('Promo code:', promoCode);
  }
}) => {
  const location = useLocation();
  const [carDetails, setCarDetails] = useState({
    name: 'Nissan GT-R',
    image: '/images/img_car.png',
    backgroundImage: '/images/img_bg.png',
    rating: 4,
    reviewCount: 440,
    price: 2000,
    tax: 0,
    currency: '₹',
    type: 'Sport',
    specs: {
      engine: '3.8L V6 Twin-Turbo',
      horsepower: '565 HP',
      topSpeed: '315 km/h',
      acceleration: '0-100 km/h in 2.9s'
    }
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
    }
);

  // Form states
  const [billingInfo, setBillingInfo] = useState(initialBillingInfo);
  const [rentalInfo, setRentalInfo] = useState(initialRentalInfo);
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [confirmation, setConfirmation] = useState(initialConfirmation);
  const [promoCode, setPromoCode] = useState(initialPromoCode);

  // Get car details from navigation state
  useEffect(() => {
    if (location.state?.carDetails) {
      setCarDetails({
        ...location.state.carDetails,
        // Ensure we have all required fields with defaults
        backgroundImage: location.state.carDetails.backgroundImage || '/images/img_bg.png',
        tax: location.state.carDetails.tax || 0,
        currency: location.state.carDetails.currency || '₹'
      });
    }
  }, [location.state]);

  const handleBillingChange = (field, value) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleRentalChange = (field, value) => {
    setRentalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (field, value) => {
    setCardInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleConfirmationChange = (field, value) => {
    setConfirmation(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyPromo = () => {
    onApplyPromo(promoCode);
  };

  const handleRentNow = () => {
    if (!confirmation.termsAndConditions) {
      alert('Please agree to terms and conditions to proceed.');
      return;
    }
    
    const formData = {
      carDetails,
      billingInfo,
      rentalInfo,
      paymentMethod,
      cardInfo,
      confirmation,
      promoCode
    };
    
    onRentNow(formData);
  };

  // Calculate total price
  const totalPrice = carDetails.price + carDetails.tax;

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img 
          key={`full-${i}`}
          src="/images/img_icactionsstar.svg" 
          alt="star" 
          className="star-icon"
        />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <img 
          key="half"
          src="/images/img_icactionsstar_half.svg" 
          alt="half star" 
          className="star-icon"
        />
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img 
          key={`empty-${i}`}
          src="/images/img_icactionsstar_blue_gray_300.svg" 
          alt="empty star" 
          className="star-icon"
        />
      );
    }
    
    return stars;
  };

  return (
    <div className="car-rental-booking-container">
      <Header />
      
      <main className="booking-main-content">
        <div className="booking-grid">
          {/* Left Column - Forms */}
          <div className="booking-forms-column">
            {/* Billing Info */}
            <Card>
              <div className="billing-info-header">
                <div>
                  <h2 className="section-title">Billing Info</h2>
                  <p className="section-subtitle">Please enter your billing info</p>
                </div>
                <span className="step-indicator">Step 1 of 4</span>
              </div>
              
              <div className="billing-form-grid">
                <InputField
                  label="Name"
                  placeholder="Your name"
                  value={billingInfo.name}
                  onChange={(e) => handleBillingChange('name', e.target.value)}
                />
                <InputField
                  label="Phone Number"
                  placeholder="Phone number"
                  value={billingInfo.phoneNumber}
                  onChange={(e) => handleBillingChange('phoneNumber', e.target.value)}
                />
                <InputField
                  label="Address"
                  placeholder="Address"
                  value={billingInfo.address}
                  onChange={(e) => handleBillingChange('address', e.target.value)}
                />
                <InputField
                  label="Town / City"
                  placeholder="Town or city"
                  value={billingInfo.townCity}
                  onChange={(e) => handleBillingChange('townCity', e.target.value)}
                />
              </div>
            </Card>

            {/* Rental Info */}
            <Card>
              <div className="rental-info-header">
                <div>
                  <h2 className="section-title">Rental Info</h2>
                  <p className="section-subtitle">Please select your rental date</p>
                </div>
                <span className="step-indicator">Step 2 of 4</span>
              </div>

              {/* Delivery Point */}
              <div className="delivery-section">
                <div className="section-title-container">
                  <div className="delivery-icon"></div>
                  <h3 className="subsection-title">Delivery-point</h3>
                </div>
                
                <div className="rental-form-grid">
                  <Dropdown
                    label="Locations"
                    placeholder="Select your city"
                    options={cityOptions}
                    value={rentalInfo.deliveryLocation}
                    onChange={(value) => handleRentalChange('deliveryLocation', value)}
                  />
                  <InputField
                    label="Date"
                    placeholder="Select your date"
                    type="date"
                    value={rentalInfo.deliveryDate}
                    onChange={(e) => handleRentalChange('deliveryDate', e.target.value)}
                  />
                </div>
                
                <div className="time-dropdown-container">
                  <Dropdown
                    label="Time"
                    placeholder="Select your time"
                    options={timeOptions}
                    value={rentalInfo.deliveryTime}
                    onChange={(value) => handleRentalChange('deliveryTime', value)}
                    className="time-dropdown"
                  />
                </div>
              </div>

              {/* Pick-up */}
              <div className="pickup-section">
                <div className="section-title-container">
                  <div className="pickup-icon"></div>
                  <h3 className="subsection-title">Pick-up</h3>
                </div>
                
                <div className="rental-form-grid">
                  <Dropdown
                    label="Locations"
                    placeholder="Select your city"
                    options={cityOptions}
                    value={rentalInfo.pickupLocation}
                    onChange={(value) => handleRentalChange('pickupLocation', value)}
                  />
                  <InputField
                    label="Date"
                    placeholder="Select your date"
                    type="date"
                    value={rentalInfo.pickupDate}
                    onChange={(e) => handleRentalChange('pickupDate', e.target.value)}
                  />
                </div>
                
                <div className="time-dropdown-container">
                  <Dropdown
                    label="Time"
                    placeholder="Select your time"
                    options={timeOptions}
                    value={rentalInfo.pickupTime}
                    onChange={(value) => handleRentalChange('pickupTime', value)}
                    className="time-dropdown"
                  />
                </div>
              </div>
            </Card>

            {/* Payment Method and Confirmation sections remain the same */}
            {/* ... */}

          </div>

          {/* Right Column - Rental Summary */}
          <div className="booking-summary-column">
            <Card>
              <h2 className="summary-title">Rental Summary</h2>
              <p className="summary-subtitle">
                Prices may change depending on the length of the rental and the price of your rental car.
              </p>

              {/* Car Details */}
              <div className="car-details">
                <div className="car-image-container">
                  <img 
                    src={carDetails.backgroundImage} 
                    alt="background" 
                    className="car-bg-image"
                  />
                  <img 
                    src={carDetails.image} 
                    alt={carDetails.name} 
                    className="car-image"
                  />
                </div>
                <div className="car-info">
                  <h3 className="car-name">{carDetails.name}</h3>
                  <div className="car-type-badge">{carDetails.type}</div>
                  <div className="car-rating">
                    <div className="stars">
                      {renderStars(carDetails.rating)}
                    </div>
                    <span className="review-count">{carDetails.reviewCount}+ Reviews</span>
                  </div>
                </div>
              </div>

              {/* Car Specifications */}
              <div className="car-specs-summary">
                <div className="spec-row">
                  <span className="spec-label">Engine:</span>
                  <span className="spec-value">{carDetails.specs.engine}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Horsepower:</span>
                  <span className="spec-value">{carDetails.specs.horsepower}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Top Speed:</span>
                  <span className="spec-value">{carDetails.specs.topSpeed}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Acceleration:</span>
                  <span className="spec-value">{carDetails.specs.acceleration}</span>
                </div>
              </div>

              <div className="price-breakdown">
                <div className="price-row">
                  <span className="price-label">Subtotal</span>
                  <span className="price-value">{carDetails.currency}{carDetails.price.toFixed(2)}</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Tax</span>
                  <span className="price-value">{carDetails.currency}{carDetails.tax.toFixed(2)}</span>
                </div>

                {/* Promo Code */}
                <div className="promo-code-container">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="promo-code-input"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="promo-code-button"
                  >
                    Apply now
                  </button>
                </div>
              </div>

              <div className="total-price-section">
                <h3 className="total-price-title">Total Rental Price</h3>
                <p className="total-price-subtitle">
                  Overall price and includes rental discount
                </p>
                <div className="total-price-value-container">
                  <span className="total-price-value">{carDetails.currency}{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarRentalBookingForm;
