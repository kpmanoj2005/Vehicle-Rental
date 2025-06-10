// src/components/Terms.jsx
import React from 'react';
import './Terms.css';

const Terms = () => {
  const termsData = {
    effectiveDate: "March 21, 2025",
    lastUpdated: "March 21, 2025",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing or using FAMGO services, you agree to these Terms."
      },
      {
        title: "2. Service Overview",
        content: "FAMGO provides a peer-to-peer vehicle rental platform connecting owners with renters."
      },
      {
        title: "3. User Requirements",
        items: [
          "Minimum age: 21 years for renters, 18 years for owners",
          "Valid driver's license required",
          "Approved payment method on file",
          "Compliance with all applicable laws"
        ]
      },
      {
        title: "4. Booking & Payments",
        subSections: [
          {
            title: "4.1 Reservations",
            content: "Bookings are confirmed upon payment authorization."
          },
          {
            title: "4.2 Pricing",
            content: "All prices include applicable taxes and fees unless noted."
          },
          {
            title: "4.3 Cancellations",
            items: [
              "Owner cancellations may result in penalties",
              "Renter cancellations follow our refund policy",
              "Extenuating circumstances reviewed case-by-case"
            ]
          }
        ]
      },
      {
        title: "5. Vehicle Use",
        items: [
          "Only authorized drivers may operate vehicles",
          "No smoking in any vehicles",
          "Mileage limits may apply",
          "Fuel must be returned at same level",
          "Prohibited uses include ridesharing, racing, or illegal activities"
        ]
      },
      {
        title: "6. Damage & Incidents",
        content: "Users must report any damage or incidents immediately to FAMGO and the owner."
      },
      {
        title: "7. Dispute Resolution",
        content: "Any disputes will be resolved through binding arbitration in San Francisco, CA."
      },
      {
        title: "8. Modifications",
        content: "FAMGO may update these Terms periodically. Continued use constitutes acceptance."
      }
    ]
  };

  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>FAMGO Terms of Service</h1>
        <div className="terms-meta">
          <span>Effective: {termsData.effectiveDate}</span>
          <span>Last Updated: {termsData.lastUpdated}</span>
        </div>
      </header>

      <main className="terms-content">
        {termsData.sections.map((section, index) => (
          <section key={index} className="terms-section">
            <h2>{section.title}</h2>
            {section.content && <p>{section.content}</p>}
            {section.items && (
              <ul className="terms-list">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <span className="list-icon">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.subSections && section.subSections.map((sub, subIndex) => (
              <div key={subIndex} className="terms-subsection">
                <h3>{sub.title}</h3>
                {sub.content && <p>{sub.content}</p>}
                {sub.items && (
                  <ul className="terms-sublist">
                    {sub.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer className="terms-footer">
        <p>Need help? Contact <a href="mailto:support@famgo.com">support@famgo.com</a></p>
      </footer>
    </div>
  );
};

export default Terms;