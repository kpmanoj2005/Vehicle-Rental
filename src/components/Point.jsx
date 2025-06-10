import React, { useState } from "react";
import "./Point.css";

export const Point = () => {
  // Data for the dropdowns
  const locations = [
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
  ];

  const dates = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "next-week", label: "Next Week" },
  ];

  const times = [
    { value: "morning", label: "Morning (8am-12pm)" },
    { value: "afternoon", label: "Afternoon (12pm-5pm)" },
    { value: "evening", label: "Evening (5pm-10pm)" },
  ];

  const [pickUp, setPickUp] = useState({
    city: "",
    date: "",
    time: "",
  });

  const [dropOff, setDropOff] = useState({
    city: "",
    date: "",
    time: "",
  });

  const handlePickUpChange = (field, value) => {
    setPickUp((prev) => ({ ...prev, [field]: value }));
  };

  const handleDropOffChange = (field, value) => {
    setDropOff((prev) => ({ ...prev, [field]: value }));
  };

  const handleSwitch = () => {
    const temp = { ...pickUp };
    setPickUp(dropOff);
    setDropOff(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pick-Up Details:", pickUp);
    console.log("Drop-Off Details:", dropOff);
    alert("Ride booked successfully!");
  };

  return (
    <div className="app">
      <h1 className="app-title">Pick-Up and Drop-Off Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          {/* Pick-Up Section */}
          <div className="card pickup-card">
            <div className="card-content">
              <div className="card-header">
                <div className="location-icon">
                  <div className="icon-circle">
                    <div className="icon-dot" />
                  </div>
                </div>
                <div className="location-title">Pickup point</div>
              </div>

              <div className="selection-fields">
                <div className="selection-group">
                  <label className="selection-label">Location</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handlePickUpChange("city", e.target.value)}
                      value={pickUp.city}
                      className="selection-input"
                    >
                      <option value="">Select your city</option>
                      {locations.map((location) => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="separator" />

                <div className="selection-group">
                  <label className="selection-label">Date</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handlePickUpChange("date", e.target.value)}
                      value={pickUp.date}
                      className="selection-input"
                    >
                      <option value="">Select date</option>
                      {dates.map((date) => (
                        <option key={date.value} value={date.value}>
                          {date.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="separator" />

                <div className="selection-group">
                  <label className="selection-label">Time</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handlePickUpChange("time", e.target.value)}
                      value={pickUp.time}
                      className="selection-input"
                    >
                      <option value="">Select time</option>
                      {times.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Switch Button */}
          <button 
            type="button" 
            className="switch-button"
            onClick={handleSwitch}
            aria-label="Switch pickup and dropoff locations"
          >
            ⇄
          </button>

          {/* Drop-Off Section */}
          <div className="card dropoff-card">
            <div className="card-content">
              <div className="card-header">
                <div className="location-icon">
                  <div className="icon-circle">
                    <div className="icon-dot" />
                  </div>
                </div>
                <div className="location-title">Drop-off point</div>
              </div>

              <div className="selection-fields">
                <div className="selection-group">
                  <label className="selection-label">Location</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handleDropOffChange("city", e.target.value)}
                      value={dropOff.city}
                      className="selection-input"
                    >
                      <option value="">Select your city</option>
                      {locations.map((location) => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="separator" />

                <div className="selection-group">
                  <label className="selection-label">Date</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handleDropOffChange("date", e.target.value)}
                      value={dropOff.date}
                      className="selection-input"
                    >
                      <option value="">Select date</option>
                      {dates.map((date) => (
                        <option key={date.value} value={date.value}>
                          {date.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="separator" />

                <div className="selection-group">
                  <label className="selection-label">Time</label>
                  <div className="select-wrapper">
                    <select
                      onChange={(e) => handleDropOffChange("time", e.target.value)}
                      value={dropOff.time}
                      className="selection-input"
                    >
                      <option value="">Select time</option>
                      {times.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="book-ride-button"
          disabled={!pickUp.city || !pickUp.date || !pickUp.time || !dropOff.city || !dropOff.date || !dropOff.time}
        >
          Book Ride
        </button>
      </form>
    </div>
  );
};

export default Point;