import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Project";
import "./page.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-container">

        {/* Hero Section */}

        <Hero />

        
        <About />

        {/* Project Section */}
        <Projects />

       {/* Contact Section */}
       <section id="contact" className="contact-section">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-text">
            Feel free to reach out! I'm always open to new opportunities and collaborations.
          </p>
        </section>


        <Contact />

        <Footer />
      </main>

      
    </>
  );
}
