import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import './App.css';
import {BrowserRouter,Routes,Route} from"react-router";
import App from './App.jsx'
import Dashboard  from './components/Dashboard.jsx';
import Privacy from './components/Privacy';
import Terms from './components/Terms.jsx'; 
import CarRentalBookingForm from './components/pages/CarRentalBookingForm/index.jsx';



const root=document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/booking" element={<CarRentalBookingForm />}/>

    </Routes>
  </BrowserRouter>
);