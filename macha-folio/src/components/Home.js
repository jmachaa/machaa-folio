import React from 'react';
import '../assets/home.scss'; // Assuming you have a CSS file for styling
const Home = () => {
    const skills = [
        "React",
        "JavaScript",
        "Laravel",
        "PHP",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Git & GitHub",
      ];
    return (
      <div className="min-h-screen">
      <header>
      <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Thomas P Y" className="profile-image" />
        <h1>Thomas P Y</h1>
        <p className='react-p'>React & Laravel Developer</p>
        <p className='header-p'>I’m a Full-Stack Developer with 2.5 years of experience building responsive, scalable web applications using React and Laravel. I focus on clean code, performance, and delivering real value through intuitive user experiences. I’ve worked on dynamic projects like loanclaims.unfairfees, streamlining user data flow and backend operations. Always curious, always improving.</p>
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
          {/* <h3>Loan Claims Platform</h3>
          <p>React + Laravel app to collect user data and assist clients with claims.</p>
          <a href="https://loanclaims.unfairfees.com" target="_blank" rel="noopener noreferrer">View Project →</a> */}
          Yet to be added...
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>I’m open to freelance, full-time opportunities, or collaborations.</p>
        <a href="mailto:thomaspy98@gmail.com">Contact Me</a>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Thomas P Y. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Home;