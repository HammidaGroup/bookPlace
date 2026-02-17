import React from "react";
import "./About.css";
import HeaderHome from "../components/HeaderComp/HeaderHome";
import Menu from "../components/Menu";

const About = () => {
  return (
    <>
    <HeaderHome/>
    <div className="about-container">
        <Menu/>
      
      <div className="about-hero">
        <h1>About BookPlace</h1>
        <p>Your Trusted Platform for Class 9th, 10th, 11th & 12th Books</p>
      </div>

      <div className="about-section">
        <h2>📚 Who We Are</h2>
        <p>
          BookPlace is an online platform dedicated to providing academic books 
          for students of classes 9th, 10th, 11th, and 12th. 
          Our goal is to make quality education material easily accessible and affordable.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to help students find the right books at the right price 
          without any hassle. We believe that education should be simple, 
          accessible, and student-friendly.
        </p>
      </div>

      <div className="about-section">
        <h2>🚀 Why Choose BookPlace?</h2>
        <ul>
          <li>✔ Books for 9th to 12th classes</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Easy browsing & ordering</li>
          <li>✔ Fast & reliable service</li>
        </ul>
      </div>

      <div className="about-section founder-section">
        <h2>👨‍💼 Founder</h2>
        <p>
          Founded by <strong>Md Hamid</strong> and <strong>Shiva Chauhan</strong>, 
          BookPlace is proudly <strong>based in Azamgarh</strong>.  
          Our vision is to build a trusted educational platform for students.
        </p>
      </div>

      <div className="about-section social-section">
        <h2>🌐 Connect With Us</h2>
        <p>
          Follow us on Instagram:  
          <a 
            href="https://instagram.com/bookplace.hs" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @bookplace.hs
          </a>
        </p>
        <p>
          Follow us on Instagram:  
          <a 
            href="https://instagram.com/hamid_88x" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @mdHamid
          </a>
        </p>
        <p>
          Follow us on Instagram:  
          <a 
            href="https://instagram.com/_shiva_10.5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @Shiva Chauhan
          </a>
        </p>
      </div>

      <div className="about-footer">
        <p>© 2026 BookPlace. All Rights Reserved.</p>
      </div>

    </div>
    </>
  );
};

export default About;
