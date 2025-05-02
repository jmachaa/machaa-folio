import React from 'react';
import '../assets/home.scss'; // Assuming you have a CSS file for styling
const Home = () => {
    const skills = [
        "React",
        "JavaScript",
        "Laravel",
        "PHP",
        "Tailwind CSS",
        "MySQL",
        "REST APIs",
        "Git & GitHub",
      ];
    return (
      <div className="min-h-screen">
      <header>
        <h1>Thomas P Y</h1>
        <p>React & Laravel Developer</p>
      </header>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Loan Claims Platform</h3>
          <p>React + Laravel app to collect user data and assist clients with claims.</p>
          <a href="https://loanclaims.unfairfees.com" target="_blank" rel="noopener noreferrer">View Project →</a>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>I’m open to freelance, full-time opportunities, or collaborations.</p>
        <a href="mailto:your-email@example.com">Contact Me</a>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Thomas P Y. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Home;