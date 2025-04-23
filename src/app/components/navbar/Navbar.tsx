"use client";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        Olusola Adebayo 
      </Link>
      <div className="nav-links">
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
