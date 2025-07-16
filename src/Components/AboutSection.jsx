import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiOnTarget } from "react-icons/gi";

import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamImages = [team1, team2, team3, team4];

  // ✅ Fade in/out on scroll using GSAP
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        } else {
          gsap.to(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          });
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // ✅ Auto-slide logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, teamImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamImages.length) % teamImages.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d1224] text-white px-4 md:px-20 py-20 opacity-0 translate-y-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-300 mb-2">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The MithilaStack Story
          </h2>
          <p className="text-gray-400 mt-2">
            Building a vibrant tech ecosystem in the heart of Mithila
          </p>
          <button className="mt-6 bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300">
            Explore More About Us <FaArrowRight />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl h-full bg-gray-800">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {teamImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Team ${i + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
              >
                <FaChevronRight />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {teamImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === currentSlide
                        ? "bg-white shadow-lg"
                        : "bg-white bg-opacity-50 hover:bg-opacity-70"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isAutoPlaying ? "bg-green-400" : "bg-gray-400"
                  }`}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {teamImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    i === currentSlide
                      ? "border-cyan-400 shadow-lg"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-[-60px] left-10 bg-[#1e293b] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 w-max">
              <MdOutlineVerifiedUser className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-lg font-semibold">5+</p>
                <p className="text-sm text-gray-400">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right: Vision */}
          <div className="bg-gradient-to-br text-amber-100 hover:border-white from-[#1e293b] to-[#0f172a] rounded-xl p-6 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-6">
              To create a world-class tech hub in Mithila, combining traditional
              values with modern innovation. We're building more than just a
              company – we're nurturing a tech ecosystem that empowers local
              talent and serves global clients.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <FaPeopleGroup className="text-xl mb-1 text-cyan-400" />
                <p className="text-xl font-bold">20+</p>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
              <div>
                <GiOnTarget className="text-xl mb-1 text-cyan-400" />
                <p className="text-xl font-bold">95%</p>
                <p className="text-sm text-gray-400">Client Retention</p>
              </div>
            </div>
            <div className="flex gap-4 text-xl text-gray-400 border-t pt-4 border-gray-700">
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
