import React from "react";
// import "./NewHome.css";

const skills = [
    { name: "JavaScript", description: "Experienced in building dynamic web applications." },
    { name: "React", description: "Proficient in creating reusable components and managing state." },
    { name: "Node.js", description: "Skilled in building scalable backend services." },
    { name: "CSS", description: "Adept at crafting responsive and visually appealing designs." },
];

const NewHome = () => {
    return (
        <div className="portfolio-container">
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my skills and expertise in web development.</p>
            </header>
            <section className="skills-section">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewHome;