import React, { useState, useEffect } from 'react';
import '../assets/portfolio.scss';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Modern Web App",
      category: "Frontend",
      image: "https://source.unsplash.com/random/600x400?web",
      description: "React-based responsive web application with modern UI/UX",
      tech: ["React", "SCSS", "JavaScript"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Fullstack",
      image: "https://source.unsplash.com/random/600x400?ecommerce",
      description: "Complete online shopping solution with payment integration",
      tech: ["Node.js", "React", "MongoDB"]
    },
    {
      id: 3,
      title: "Portfolio Site",
      category: "Design",
      image: "https://source.unsplash.com/random/600x400?portfolio",
      description: "Creative portfolio website with animations and interactions",
      tech: ["HTML", "SCSS", "JavaScript"]
    }
  ];

  // Skills data
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "Git", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Laravel", level: 75 },
    { name: "Rest API", level: 75 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="logo">
          <span>DEV</span>FOLIO
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">Thomas PY</span>
            <span className="title">Full Stack Developer</span>
          </h1>
          <p className="tagline">Creating digital experiences that inspire</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="https://source.unsplash.com/random/400x600?portrait" alt="Profile" />
            </div>
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>I'm a passionate Full Stack Developer with 2+ years of experience creating modern web applications. I specialize in building responsive, user-friendly interfaces and robust backend systems.</p>
            <p>My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.</p>
            <div className="personal-info">
              <div className="info-item">
                <span className="label">Name:</span>
                <span className="value">Thomas P Y</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">thomaspy3630@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Kerala, India</span>
              </div>
              <div className="info-item">
                <span className="label">Availability:</span>
                <span className="value"> Full-time</span>
              </div>
            </div>
            <a href="#contact" className="btn primary">Download Resume</a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                  <a href="https://thomas-folio.netlify.app/" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">📍</div>
              <div className="text">
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">📧</div>
              <div className="text">
                <h3>Email</h3>
                <p>alex@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">📱</div>
              <div className="text">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="logo">
            <span>DEV</span>FOLIO
          </div>
          <div className="social-links">
            {/* <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Dribbble</a> */}
          </div>
          <p className="copyright">© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;