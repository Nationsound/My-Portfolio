"use client";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing React Icons
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>© 2025 Olusola Oguntuase Adebayo. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className={styles.icon} />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className={styles.icon} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
