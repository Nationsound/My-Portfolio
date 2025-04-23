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
import "./About.css";

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
              Hi, I'm{" "}
              <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                Olusola Adebayo Oguntuase
              </span>
              , a passionate web developer with expertise in{" "}
              <strong>React, Next.js, Node.js, and MongoDB</strong>. I love
              crafting seamless user experiences and solving complex problems
              through code.
            </p>

            <p className="about-description">
              My journey started with curiosity about how websites work, and now
              I specialize in modern frameworks like Next.js, React, HTML, CSS,
              and Node.js. When I'm not coding, I love exploring new tech,
              contributing to open-source, and sharing knowledge.
            </p>

            <p className="about-description">
              Beyond coding, I’m a music producer, mixing, and mastering
              engineer. I merge tech and sound design to deliver high-quality
              projects across web and music domains.
            </p>

            <p className="about-description">
              With a unique blend of tech and music production skills, I am
              always exploring innovative ways to merge the two fields, pushing
              boundaries in both industries.
            </p>

            <p className="about-description">
              "My foundation in English and Literature fuels my songwriting and
              design intuition, adding a unique edge to the digital experiences
              I create."
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
            </ul>

            <h4 className="about-heading-a">Music Producer & Mixing Engineer</h4>
            <ul className="about-description">
              <li>Produced and engineered high-quality tracks for independent artists and record labels.</li>
              <li>Provided mixing and mastering services to enhance sound clarity and industry-standard quality.</li>
              <li>Worked with various genres, ensuring creative and technical precision in music production.</li>
            </ul>

            <h2 className="about-heading">🎶 Songwriter</h2>
            <div className="song-list">
              <p className="song-description">
                I have written and published numerous songs. Among them, my first
                single, titled <strong>"Recognition"</strong>, was released on{" "}
                <em>January 15, 2022</em>. Below are a few of my notable songs:
              </p>

              {[
                {
                  title: "Recognition",
                  date: "Released on January 15, 2023",
                  link: "https://heylink.me/olusola4/music/23902/",
                },
                {
                  title: "Gratitude",
                  date: "Released on December 18, 2023",
                  link: "https://open.spotify.com/track/5hCXrOG5birb6N9I7OmvgJ?si=vMHY8fxBSLWApCmkZbJaWA",
                },
                {
                  title: "Ambition",
                  date: "Released August 26, 2024",
                  link: "https://open.spotify.com/track/6I7iGjqqHLU8qRscYYAsgz?si=EputvM1TQFCjg70eMD0XmA",
                },
              ].map((song, index) => (
                <div className="song-item" key={index}>
                  <h4 className="song-title">{song.title}</h4>
                  <p className="song-date">{song.date}</p>
                  <a
                    href={song.link}
                    className="song-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to {song.title}
                  </a>
                </div>
              ))}
            </div>

            <h4 className="about-heading-a">Notable Projects</h4>
            <ul className="about-description">
              <li>🔹 Portfolio Website with smooth animations and responsive layout.</li>
              <li>🔹 Song Streaming Platform with admin uploads and user interactions.</li>
              <li>🔹 Comment and Rating System integrated with backend APIs.</li>
            </ul>

            <h4 className="about-heading-a">Certifications & Skills</h4>
            <ul className="about-description">
              <li>✅ Full-Stack Development – Next.js, React, HTML, CSS, MongoDB</li>
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
