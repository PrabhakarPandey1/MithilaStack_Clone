// src/components/Footer.jsx

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Logo from "../images/mithilaLogo.svg"


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true, // Uncomment for debug
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert(); // Clean-up
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0d1224] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo + Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-lg font-semibold">MithilaStack</h1>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Where innovation meets expertise! We are your digital partners on a journey to redefine possibilities.
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> contact@mithilastack.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone For Business:</span> +91 8579009245
          </p>
          <p className="text-sm">
            <span className="font-semibold">Address:</span> Darbhanga, Mithila, Bihar
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Application Development</li>
            <li>Web Development</li>
            <li>Cloud Optimization</li>
            <li>DevOps Solution</li>
            <li>Project Consultation</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>Community</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Shipping and Delivery</li>
            <li>Cancellation and Refund</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 MithilaStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
