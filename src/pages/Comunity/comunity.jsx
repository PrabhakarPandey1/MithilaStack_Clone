import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Monitor, Award, Sparkles } from 'lucide-react';
import gsap from 'gsap';

// Image imports (make sure these are valid paths)
import comunity1 from "../../assets/ComunityImg/comunity1.jpg";
import comunity2 from "../../assets/ComunityImg/comunity2.jpg";
import comunity3 from "../../assets/ComunityImg/comunity3.jpg";
import comunity4 from "../../assets/ComunityImg/comunity4.jpg";

const Community = () => {
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Mithila Stack & Sandip University Team",
      image: comunity1,
    },
    {
      title: "Tech Workshop & Innovation Lab",
      image: comunity2,
    },
    {
      title: "Community Learning Sessions",
      image: comunity3,
    },
    {
      title: "Community Networking Event",
      image: comunity4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (gsap) {
      gsap.fromTo(headerRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1 });

      gsap.fromTo(carouselRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2 });

      gsap.fromTo(cardsRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.5
      });

      gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

      gsap.to(".floating-icon", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div ref={headerRef} className="text-center pt-16 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">Join Our Community</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join a thriving community of learners and professionals. Together, we create, learn, and grow.
        </p>
      </div>

      {/* Carousel */}
      <div ref={carouselRef} className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-80 md:h-96 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Events
                  </div>
                  <div className="absolute bottom-4 left-24 text-white font-semibold text-lg">
                    {slide.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div ref={(el) => (cardsRef.current[0] = el)} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="floating-icon mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Learning Environment</h3>
            <p className="text-gray-600">Access curated resources, workshops, and mentorship programs to accelerate your growth.</p>
          </div>

          {/* Card 2 */}
          <div ref={(el) => (cardsRef.current[1] = el)} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="floating-icon mb-6">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Collaborative Projects</h3>
            <p className="text-gray-600">Work on exciting real-world projects with team members from around the globe.</p>
          </div>

          {/* Card 3 */}
          <div ref={(el) => (cardsRef.current[2] = el)} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="floating-icon mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Professional Network</h3>
            <p className="text-gray-600">Connect with industry experts, join discussions and build valuable relationships.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Sparkle Background */}
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="absolute top-4 left-4 w-8 h-8" />
            <Sparkles className="absolute top-8 right-8 w-6 h-6" />
            <Sparkles className="absolute bottom-4 left-8 w-10 h-10" />
            <Sparkles className="absolute bottom-8 right-4 w-7 h-7" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore our community.</h2>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:scale-105 shadow-lg">
              ✨ Explore Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
