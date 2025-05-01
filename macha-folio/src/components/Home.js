import React from 'react';

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
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-900 font-sans">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-6 text-center shadow-md">
        <h1 className="text-5xl font-extrabold mb-2">Thomas P Y</h1>
        <p className="text-xl">React & Laravel Developer</p>
      </header>

      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-white border border-gray-200 px-5 py-3 rounded-full text-sm shadow hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold text-blue-700">Loan Claims Platform</h3>
            <p className="mt-2 text-gray-700">React + Laravel app to collect user data and assist clients with claims.</p>
            <a
              href="https://loanclaims.unfairfees.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">I’m open to freelance, full-time opportunities, or collaborations.</p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

      <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Thomas P Y. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Home;