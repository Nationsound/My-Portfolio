"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Project.module.css";

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    imgSrc: "/images/project1.jpeg",
    demoLink: "https://example.com",
    githubLink: "https://github.com/Nationsound/project-one"
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    imgSrc: "/images/project2.jpeg",
    demoLink: "https://example.com",
    githubLink: "https://github.com/Nationsound/project-two"
  },
  {
    title: "Project Three",
    description: "A brief description of project three.",
    imgSrc: "/images/project3.jpeg",
    demoLink: "https://example.com",
    githubLink: "https://github.com/Nationsound/project-three"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className={styles.projectCard}
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  className={styles.projectImage}
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectLinks}>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
