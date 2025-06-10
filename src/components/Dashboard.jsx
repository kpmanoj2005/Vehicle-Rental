import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastr
import 'react-toastify/dist/ReactToastify.css'; // Import Toastr CSS
import './Dashboard.css'; // Import the CSS file
import CarCatalog from './CarCatalog'; // Import the CarCatalog component
import Footer from './Footer'; // Import the Footer component
import Point from './Point';
  


const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search Query:', searchQuery);

    // Show Toastr alert
    toast.info(`You searched for: ${searchQuery}`, {
      position: 'top-right',
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleKeyDown = (e) => {
    // Trigger search when Enter key is pressed
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1 className="head">FAMGO</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search something here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
        />
      </div>

      <Point/>
      {/* Car Catalog */}
      <CarCatalog />
      {/* Footer */}
      <Footer />
      

      {/* Toastr Container */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;