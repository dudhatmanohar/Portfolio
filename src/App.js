import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Navbar toggleDark={() => setDark(!dark)} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

function Navbar({ toggleDark }) {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">Manohar Dudhat</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleDark} className="ml-4">🌙</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="text-center py-20">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        src="/profile.jpg"
        alt="profile"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mt-4"
      >
        Manohar Dudhat
      </motion.h1>
      <p className="text-gray-500 mt-2">
        Backend Developer | Java | Spring Boot | AWS | Microservices
      </p>

      <div className="mt-6 space-x-4">
        <a href="/resume.pdf" className="bg-blue-500 px-5 py-2 rounded text-white">
          Download Resume
        </a>
        <a href="https://github.com/dudhatmanohar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/manohar-dudhat-5397b9209/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-10 py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
        I am a passionate backend developer with strong expertise in Java, Spring Boot, and microservices architecture. I have hands-on experience building scalable systems, REST APIs, and cloud-ready applications. I enjoy solving real-world problems and optimizing system performance.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {["Java","Spring Boot","Microservices","SQL","AWS","Docker","Kafka","React"].map((skill, i) => (
          <span key={i} className="bg-blue-200 dark:bg-blue-600 px-3 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      name: "Microservices Order Management System",
      desc: "Built cloud-ready microservices using Spring Boot, Eureka, API Gateway, and MySQL.",
      link: "https://github.com/dudhatmanohar",
    },
    {
      name: "AI Product Design Platform",
      desc: "Node.js backend using Gemini API to generate images from text prompts.",
      link: "https://github.com/dudhatmanohar",
    },
    {
      name: "Finance Application",
      desc: "React + Flask app for stock analysis, valuation, and prediction tools.",
      link: "https://github.com/dudhatmanohar",
    },
  ];

  return (
    <section id="projects" className="px-10 py-16">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projectList.map((proj, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index} className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-700">
            <h3 className="font-bold text-lg">{proj.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-3 inline-block">
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-10 py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Web Development Intern - Cascode</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Developed responsive web applications using React.js and improved backend performance using Node.js scripts, reducing response time from 5s to under 2s.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-10 py-16">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4">📧 dudhatmanohar06@gmail.com</p>
      <p>📱 +91-8767186611</p>
      <p>
        🔗 <a href="https://github.com/dudhatmanohar" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p>
        🔗 <a href="https://www.linkedin.com/in/manohar-dudhat-5397b9209/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}
