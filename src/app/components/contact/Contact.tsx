"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

// Type definition for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>(""); // Feedback message
  const [loading, setLoading] = useState<boolean>(false); // Submission state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again. ❌");
      }
    } catch (_error) {
      setStatus("An error occurred. Please try again later. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className={styles.text}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just to say hi!
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className={styles.socialLinks}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a href="https://facebook.com/profile.php?id=61573798280662" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={`${styles.icon} ${styles.facebook}`} />
          </a>
          <a href="https://instagram.com/mynatblog/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
          </a>
          <a href="https://twitter.com/MNBlog25" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={`${styles.icon} ${styles.twitter}`} />
          </a>
          <a href="https://linkedin.com/in/olusola-oguntuase-779069353/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
          </a>
          <a href="https://github.com/Nationsound" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`${styles.icon} ${styles.github}`} />
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          />
          <motion.button
            type="submit"
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Submission Status */}
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
