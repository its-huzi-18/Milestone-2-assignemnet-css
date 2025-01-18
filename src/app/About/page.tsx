import React from 'react';

function Page() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <div className="about-card">
            <div className="profile-section">
              <div className="profile-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="profile-svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="profile-details">
                <h2 className="profile-name">Huzaifa Wahab</h2>
                <div className="profile-divider"></div>
                <p className="profile-description">
                  ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ɪᴛ ᴇɴᴛʜᴜꜱɪᴀꜱᴛ | ᴍᴀꜱᴛᴇʀɪɴɢ ɴᴇxᴛ.ᴊꜱ, ᴛʏᴘᴇꜱᴄʀɪᴘᴛ, ʜᴛᴍʟ, ᴀɴᴅ ᴄꜱꜱ | ᴇᴀɢᴇʀ ᴛᴏ ᴇxᴘʟᴏʀᴇ ᴀɪ ᴀɴᴅ ᴘʏᴛʜᴏɴ.
                </p>
              </div>
            </div>
            <div className="about-description-section">
              <p className="about-description">
                Passionate IT student at Governor House, proficient in HTML, CSS,
                JavaScript, Next.js, and TypeScript. Dedicated to honing my
                skills in web development and embracing emerging technologies.
                Experienced in project development, including currency converter
                and e-commerce websites. Currently exploring AI and building
                innovative projects like ATM simulations. Notable projects
                include "TrendSphere E-Commerce," "PixelCraft Figma Clone," and
                "Devfolio Portfolio Website." Eager to contribute to the tech
                industry and make a positive impact.
              </p>
              <a className="learn-more" href="#">Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="learn-more-svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;