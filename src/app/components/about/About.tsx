"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import "../cssModules/About.module.css";
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/profile.JPG"
            width={300}
            height={300}
            alt="My Profile"
            className="profile-image"
            priority
          />

          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <p className="about-description">
              Hi, I am{" "}
              <span style={{ fontWeight: "bold", color: "#2563EB" }}>
              Olusola Adebayo Oguntuase
              </span>
               , a passionate web developer with expertise in{" "}
              <strong>React, Next.js, Node.js, MongoDB and SQL</strong>. I love crafting
              seamless user experiences and solving complex problems through code.
             </p>


            <p className="about-description">
              My journey started with curiosity about how websites work, and now
              I specialize in modern frameworks like Next.js, React, HTML, CSS,
              and Node.js. When I am not coding, I love exploring new tech,
              contributing to open-source, and sharing knowledge.
            </p>

            <p className="about-description">
              I do not just move pixels; I architect digital experiences that are 
              technically feasible and user-centered. With certifications in both 
              UX/UI Design and Full-Stack Web Development, I speak the language of 
              both users and compilers.
            </p>

            <p className="about-description">
              My approach is rooted in Design Research and Innovation. 
              Whether I am collaborating with DYB Africa on high-impact contract projects or 
              building scalable platforms like Olatinn Limited, I prioritize the why {" "} before the how {" "}. 
              For Olatinn Limited, I transformed a vision for tech innovation into a high-performance 
              digital presence with a core focus on conversion-centered design and clean visual identity.
            </p>

            <p className="about-description">
              Beyond coding, I am a music producer, mixing, and mastering
              engineer. I merge tech and sound design to deliver high-quality
              projects across web and music domains.
            </p>

            <p className="about-description">
              With a unique blend of tech and music production skills, I am
              always exploring innovative solutions and ideas to push
              boundaries in both industries.
            </p>

            <p className="about-description">
           {"My foundation in English and Literature fuels my songwriting and design intuition, adding a unique edge to the digital experiences I create."}
            </p>

            {/* 🎓 Education Background */}
            <h2 className="about-heading">🎓 Education Background</h2>
            <div className="education-timeline">
              {[
                {
                  icon: <FaSchool className="timeline-icon" />,
                  school: "St. Luke Anglican Primary School, Ikere-Ekiti",
                  year: "Primary School – Graduated in 2001",
                },
                {
                  icon: <FaSchool className="timeline-icon" />,
                  school:
                    "Annunciation Boys Secondary School, Ikere-Ekiti",
                  year: "Secondary School – Graduated in 2007",
                },
                {
                  icon: <FaUniversity className="timeline-icon" />,
                  school: "Kogi State University, Anyigba",
                  year:
                    "B.A. in English and Literature – Graduated in 2015",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.icon}
                  <div>
                    <h4 className="school-name">{edu.school}</h4>
                    <p className="timeline-text">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="about-heading">Work Experience</h2>
            <h4 className="about-heading-a">Full-Stack Developer</h4>
            <ul className="about-description">
              <li>Built scalable full-stack applications using React and Node.js.</li>
              <li>Integrated MongoDB databases and user authentication systems.</li>
              <li>Created responsive admin dashboards and UI components.</li>
              <li>I also have experienced in maintaining a clean project history through interactive rebasing and 
                efficiently resolving complex merge conflicts in multi-contributor environments</li>
              <li>I Implemented a Feature Branch workflow using Pull Requests for code reviews, which reduced 
                merge conflicts by [X]% and improved overall code quality.</li>
              <li>User Research & Strategy: Leveraging data and behavioral psychology to inform interface architecture.</li>
              <li>End-to-End Development: Proficient in building responsive, secure websites (like https://www.mynationblog.fun) 
                using modern tech stacks (React, Node.js).</li>
            </ul>

            <h4 className="about-heading-a">Notable Projects</h4>
            <ul className="about-description">
              <li>🔹 Portfolio Website with smooth animations and responsive layout.</li>
              <li>🔹 Song Streaming Platform with admin uploads and user interactions.</li>
              <li>🔹 Comment and Rating System integrated with backend APIs.</li>
              <li>🔹 Logistics websites as a collaborator with e-commerce functionality</li>
              <li>🔹 A digital storefront that drives business results</li>
              <li>🔹 Backend Integration</li>
              <li>🔹 DevOps services</li>
            </ul>

            <h4 className="about-heading-a">Certifications & Skills</h4>
            <ul className="about-description">
              <li>✅ Full-Stack Development – Next.js, Node.js, React, HTML, CSS, MongoDB</li>
              <li>✅ Music Production & Sound Engineering – Mixing, Mastering</li>
              <li>✅ Authentication & Security – Access token, Role-based systems</li>
              <li>✅ UI/UX Design – Front-end aesthetics and animations</li>
              <li>
                ✅{" "}
                <GiBookshelf className="inline text-lg" /> English & Literature – Academic training and analytical writing skills
              </li>
            </ul>

            <div>
              <h3 className="links-title">Find Me Online</h3>
              <ul className="links-list">
                <li>
                  <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Nationsound" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/phonkey_n/" target="_blank" rel="noopener noreferrer">
                    Music Work
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="about-heading">My Skills</h3>
            <motion.ul
              className="skills-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item">
                <SiNextdotjs /> Next.js
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item">
                <FaReact /> React
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item">
                <SiTailwindcss /> Tailwind CSS
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item">
                <FaNodeJs /> Node.js
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
