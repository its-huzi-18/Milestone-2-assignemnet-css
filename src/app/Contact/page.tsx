import React from 'react';
import './Page.css'; // Import external CSS file

function Page() {
  return (
    <section className="section-container">
      <div className="main-container">
        <div className="map-container">
          <iframe
            width="100%"
            height="100%"
            className="map-iframe"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="address-container">
            <div className="address-section">
              <h2 className="address-title">ADDRESS</h2>
              <p className="address-description">
                Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
              </p>
            </div>
            <div className="contact-section">
              <h2 className="contact-title">EMAIL</h2>
              <a href="mailto:example@email.com" className="contact-email">example@email.com</a>
              <h2 className="contact-title">PHONE</h2>
              <p className="contact-phone">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="feedback-container">
          <h2 className="feedback-title">Feedback</h2>
          <p className="feedback-description">
            Please feel free to share any suggestions, concerns, or compliments that will help us better serve you.
          </p>
          <div className="input-container">
            <label htmlFor="name" className="input-label">Name</label>
            <input type="text" id="name" name="name" className="input-field" />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="email" id="email" name="email" className="input-field" />
          </div>
          <div className="input-container">
            <label htmlFor="message" className="input-label">Message</label>
            <textarea id="message" name="message" className="textarea-field"></textarea>
          </div>
          <button className="submit-button">Submit</button>
          <p className="privacy-policy">
            Our Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
