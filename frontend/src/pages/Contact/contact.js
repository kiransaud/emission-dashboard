import React, { useState } from 'react';
import './contact.css'; 
import image from '../../assets/sami.jpg';
import vidya from '../../assets/vidya.jpg';
import salsabeel from '../../assets/Salsabeeljpeg.jpeg'
import kiran from '../../assets/kiran.jpg';
import anusha from '../../assets/anusha.jpg';
import collab from '../../assets/collaboration.png';
import emailjs from 'emailjs-com'; // Import the emailjs-com library


const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init('zhbpjQlUJ5WXR0aTV');
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    emailjs.sendForm('service_attyjog', 'template_d5f33jc', e.target)
      .then(() => {
        console.log('SUCCESS!');
        setShowSuccessMessage(true); // Show success message
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className={`contact-container ${darkMode ? 'dark' : ''}`}>
      <div className="about-us">
        <h2>About Our Project</h2>
        <div className='company-info'> 
          <h3>This project is part of the collaboration between Lappeenranta University of Technology and AskKauko Oy</h3>
          <img src={collab} alt='collaboration logo' />
          <h3>Project Genesis and Background</h3>
          <p>Inaccurate emission factors often result in significant errors such as over- or under-reporting emissions, potentially impacting business continuity.</p>
          <p>Currently, there is no centralized global repository, making it hard to locate factors across various databases.</p>
          <br></br> <br></br>
          <h3>Our Solution</h3>
          <p>To address these issues, we have developed a crowd-sourced open-access database, providing emission factors for users, for combustion and energy consumption in EU and beyond. All free of charge.</p>
            <p>Users can also contribute to our database.</p>
            </div>
        <h2>Development Team</h2>
        <br></br>
        <div className="team-members">
          <div className="team-member">
            <img src={salsabeel} alt="Team Member 1" className="profile-picture" />
            <h3>Salsabeel T.</h3>
            <p>Frontend Developer</p>
            <a href='https://www.linkedin.com/in/salsabeel-tantoush/'>
            <img className = 'linkedin' src ="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png" />
            </a>
          </div>
          <div className="team-member">
            <img src={anusha} alt="Team Member 2" className="profile-picture" />
            <h3>Anusha Annengala</h3>
            <p>Backend Developer</p>
            <a href='https://www.linkedin.com/in/anusha-a20/'>
            <img className = 'linkedin' src ="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png" />
            </a>
          </div>
          <div className="team-member">
            <img src={kiran} alt="Team Member 3" className="profile-picture" />
            <h3>Kiran Saud</h3>
            <p>Backend Developer</p>
            <a href='https://www.linkedin.com/in/kiran-singh-saud-a5826b18a/'>
            <img className = 'linkedin' src ="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png" />
            </a>
          </div>
          <div className="team-member">
            <img src={vidya} alt="Team Member 4" className="profile-picture" />
            <h3>Vidya Dhopate</h3>
            <p>Frontend Developer</p> 
            <a href='https://www.linkedin.com/in/vidya-dhopate/'>
            <img className = 'linkedin' src ="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png" />
            </a>
          </div>
        
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
          {showSuccessMessage && (
            <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>
          )}
        </div>

        <div className="contact-profile">
          <img
            src={image}
            alt="Sami"
            className="profile-picture"
          />
          <h3>Sami Tornikoski</h3>
          <p>Head of Sustainability</p>
          <p>+358 40 533 4399</p>
          <p>sami@askkauko.com</p>
        </div>
      </div>

      <div className="company-info">
        <h2>AskKauko Oy</h2>
        <p>HQ in Helsinki - Innovation Home</p>
        <p>Kansakoulukatu 3, 00100, Helsinki, Finland</p>
      </div>
    </div>
  );
};

export default Contact;
