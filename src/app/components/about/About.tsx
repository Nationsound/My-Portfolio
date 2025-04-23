"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaSchool, FaUniversity } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
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
          />

          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <p className="about-description">
              Hi, I'm <span style={{ fontWeight: "bold", color: "#2563EB" }}>Olusola Adebayo Oguntuase</span>, a passionate 
              web developer with expertise in <strong>React, Next.js, Node.js, and MongoDB</strong>. 
              I love crafting seamless user experiences and solving complex problems through code.
            </p>
            <p className="about-description">
              My journey started with curiosity about how websites work, and now I specialize in modern frameworks like Next.js, React, HTML, CSS, and Node.js.
              When I'm not coding, I love exploring new tech, contributing to open-source, and sharing knowledge. With a keen eye for detail and a strong 
              foundation in front-end and back-end technologies, I build dynamic and scalable web applications that enhance user experience and functionality.
            </p>
            <p className="about-description">
              Beyond coding, I’m a music producer, mixing, and mastering engineer. I merge tech and sound design 
              to deliver high-quality projects across web and music domains.
            </p>
            <p className="about-description">
              With a unique blend of tech and music production skills, I am always exploring innovative ways to merge the two fields, 
              pushing boundaries in both industries.
            </p>
            <p className="about-description">
            "My foundation in English and Literature fuels my songwriting and design intuition, adding a unique edge to the digital experiences I create."
            </p>

            {/* 🎓 Education Background - Timeline Style */}
            <h2 className="about-heading">🎓 Education Background</h2>
            <div className="education-timeline">
              <motion.div
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              >
              <FaSchool className="timeline-icon" />
              <div>
                <h4 className="school-name">St. Luke Anglican Primary School, Ikere-Ekiti</h4>
                 <p className="timeline-text">Primary School – Graduated in 2001</p>
              </div>
             </motion.div>

             <motion.div
             className="timeline-item"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.3 }}
             >
             <FaSchool className="timeline-icon" />
             <div>
             <h4 className="school-name">Annunciation Boys Secondary School, Ikere-Ekiti</h4>
             <p className="timeline-text">Secondary School – Graduated in 2007</p>
             </div>
             </motion.div>

             <motion.div
             className="timeline-item"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.3 }}
             >
             <FaUniversity className="timeline-icon" />
             <div>
             <h4 className="school-name">Kogi State University, Anyigba</h4>
             <p className="timeline-text">B.A. in English and Literature – Graduated in 2015</p>
             </div>
             </motion.div>
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
            {/* 🎶 Songwriter Section */}
            <h2 className="about-heading">🎶 Songwriter</h2>
            <div className="song-list">
              <p className="song-description">
               I have written and published numerous songs. Among them, my first single, titled <strong>"Recognition"</strong>, was released on <em>January 15, 
                2022</em>. Below are a few of my notable songs:
              </p>

               {/* List of Published Songs */}
               <div className="song-item">
                  <h4 className="song-title">Recognition</h4>
                  <p className="song-date">Released on January 15, 2023</p>
                   <a href="https://heylink.me/olusola4/music/23902/" className="song-link" target="_blank" rel="noopener noreferrer">
                   Listen to Recognition
                   </a>
                   </div>

              <div className="song-item">
                  <h4 className="song-title">Gratitude</h4>
                  <p className="song-date">Released on December 18, 2023</p>
                  <a href="https://open.spotify.com/track/5hCXrOG5birb6N9I7OmvgJ?si=vMHY8fxBSLWApCmkZbJaWA" className="song-link" target="_blank" rel="noopener noreferrer">
                   Listen to Gratitude
                  </a>
              </div>

              <div className="song-item">
                <h4 className="song-title">Ambition</h4>
                <p className="song-date">Released August 26, 2024</p>
                  <a href="https://open.spotify.com/track/6I7iGjqqHLU8qRscYYAsgz?si=EputvM1TQFCjg70eMD0XmA" className="song-link" target="_blank" rel="noopener noreferrer">
                  Listen to Ambition
                  </a>
              </div>
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
              <li>✅ <GiBookshelf className="inline text-lg" /> English & Literature – Academic training and analytical writing skills</li>
            </ul>

            <div>
              <h3 className="links-title">Find Me Online</h3>
              <ul className="links-list">
                <li><a href="https://yourportfolio.com" target="_blank">Portfolio</a></li>
                <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
                <li><a href="https://yourmusicplatform.com" target="_blank">Music Work</a></li>
              </ul>
            </div>

            <h3 className="about-heading">My Skills</h3>
            <motion.ul
              className="skills-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item"><SiNextdotjs /> Next.js</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item"><FaReact /> React</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item"><SiTailwindcss /> Tailwind CSS</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="skill-item"><FaNodeJs /> Node.js</motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
