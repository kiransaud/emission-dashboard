// src/components/JoinDiscord.js
import React from 'react';
import './community.css'; // Create this CSS file for styling

const community = () => {
  return (
    <div className="join-discord-container">
      <div className="join-discord-content">
        <h1>Join Our Discord Community!</h1>
        <a href="https://discord.gg/2qrHcgTM6Z" target="_blank" rel="noopener noreferrer" className="discord-button">
          Join Our Server
        </a>
        <div className="discord-description">
          <h2>Connect with Us</h2>
          <p>We are passionate about connecting with our community. Join us on Discord to discuss our open-access database, ask questions, and share your feedback.</p>
          <h3>Key Takeaways</h3>
          <ul>
            <li>- Engage with like-minded individuals.</li>
            <li>- Share your insights and feedback.</li>
            <li>- Stay updated with our latest developments.</li>
          </ul>
          <p>We look forward to seeing you there and hearing your thoughts on how we can improve our solution. Your feedback is invaluable to us!</p>
        </div>
      </div>
    </div>
  );
};

export default community;
