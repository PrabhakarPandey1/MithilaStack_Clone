import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../images/mithilaLogo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lettersRef = useRef([]);
  const brandRef = useRef(null); // wrapper for hover event
  const text = "MithilaStack";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Initial animation on load
  useEffect(() => {
    animateLetters();
  }, []);

  // Animate function
  const animateLetters = () => {
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power3.inOut",
      }
    );
  };

  // Re-animate on hover
  useEffect(() => {
    const el = brandRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      animateLetters();
    };

    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <header className="bg-[#0c0e20] text-white px-6 md:px-12 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo + Animated Brand */}
        <div
          ref={brandRef}
          className="flex items-center gap-2 text-2xl font-bold text-cyan-400 cursor-pointer"
        >
          <img className="w-[60px]" src={Logo} alt="MithilaStack Logo" />
          <span className="flex">
            {text.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) lettersRef.current[index] = el;
                }}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/services" className="hover:text-cyan-400 transition">Service</a>
          <a href="#" className="hover:text-cyan-400 transition">Product</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
          <a href="/Comunity" className="hover:text-cyan-400 transition">Community</a>
          <a href="/career" className="hover:text-cyan-400 transition">Career</a>
          <a
            href="/program"
            className="border border-dashed border-yellow-400 px-3 py-1 rounded text-yellow-300"
          >
            Program
          </a>
          <a
            href="/getstart"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-start">
          <a href="/" className="hover:text-cyan-400">Home</a>
          <a href="/services" className="hover:text-cyan-400">Service</a>
          <a href="#" className="hover:text-cyan-400">Product</a>
          <a href="/about" className="hover:text-cyan-400">About</a>
          <a href="#" className="hover:text-cyan-400">Community</a>
          <a href="/career" className="hover:text-cyan-400">Career</a>
          <a
            href="/program"
            className="border border-dashed border-yellow-400 px-3 py-1 rounded text-yellow-300"
          >
            Program
          </a>
          <a
            href="/getstart"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
