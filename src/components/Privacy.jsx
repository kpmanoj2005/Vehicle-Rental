// src/components/Privacy.jsx
import React from 'react';
import './Privacy.css';

const Privacy = () => {
  const privacyData = {
    effectiveDate: "March 21, 2025",
    lastUpdated: "March 21, 2025",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We collect personal information when you use our services, including:",
        items: [
          "Contact details (name, email, phone number)",
          "Payment information",
          "Driver's license details",
          "Vehicle rental history",
          "Location data for service delivery"
        ]
      },
      {
        title: "2. How We Use Your Data",
        items: [
          "Process transactions and rentals",
          "Provide customer support",
          "Improve our services",
          "Prevent fraud and ensure safety",
          "Communicate important updates"
        ]
      },
      {
        title: "3. Data Sharing",
        content: "We may share information with:",
        items: [
          "Vehicle owners for rental coordination",
          "Payment processors for transactions",
          "Legal authorities when required",
          "Service providers who assist our operations"
        ]
      },
      {
        title: "4. Your Rights",
        items: [
          "Access your personal data",
          "Request corrections",
          "Delete your account data",
          "Opt-out of marketing",
          "Withdraw consent"
        ]
      }
    ]
  };

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>FAMGO Privacy Policy</h1>
        <p className="effective-date">
          Effective: {privacyData.effectiveDate} | Last Updated: {privacyData.lastUpdated}
        </p>
      </header>
      
      <div className="privacy-content">
        {privacyData.sections.map((section, index) => (
          <section key={index} className="policy-section">
            <h2>{section.title}</h2>
            {section.content && <p>{section.content}</p>}
            {section.items && (
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      
      <footer className="privacy-footer">
        <p>For questions, contact us at <a href="mailto:privacy@famgo.com">privacy@famgo.com</a></p>
      </footer>
    </div>
  );
};

export default Privacy;