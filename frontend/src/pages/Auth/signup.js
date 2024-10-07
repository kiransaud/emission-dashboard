import React, { useState } from 'react';
import './auth.css';

const Signup = ({ darkMode }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      username,
      first_name: firstName,
      last_name: lastName,
      password,
      password2: confirmPassword,
      email,
    };

    try {
      const response = await fetch('https://ec2-54-226-167-211.compute-1.amazonaws.com/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Registration successful!");
        console.log(data);
        window.location.href = "/home"; 
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={`auth-container ${darkMode ? 'dark' : ''}`}>
      <form className={`auth-form signup ${darkMode ? 'dark' : ''}`} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <p className="input-explanation">Enter your username.</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <p className="input-explanation">Enter your first name.</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <p className="input-explanation">Enter your last name.</p>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="input-explanation">Enter your email address.</p>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="input-explanation">Enter a strong password.</p>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <p className="input-explanation">Re-enter your password.</p>
        </div>
        <button type="submit">Sign Up</button>
        <div className="third-party-login">
          <button type="button" className="third-party-button">Sign Up with Google</button>
          <button type="button" className="third-party-button">Sign Up with Facebook</button>
          <button type="button" className="third-party-button">Sign Up with GitHub</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
