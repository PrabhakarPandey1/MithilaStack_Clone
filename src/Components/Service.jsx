import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "DevOps as a Service",
        desc: "End-to-end DevOps implementation with CI/CD pipelines, automation, and infrastructure as code.",
        points: ["CI/CD Implementation", "Infrastructure as Code", "Microservices", "Container Orchestration"],
        icon: "💻"
    },
    {
        title: "Full Stack Development",
        desc: "End-to-end development solutions that seamlessly integrate engaging front-end interfaces with robust back-end systems.",
        points: ["Responsive Web Design", "API Integration", "Robust Back-end Architecture", "Continuous Deployment"],
        icon: "🖥️"
    },
    {
        title: "Mobile Application Development",
        desc: "Custom iOS and Android mobile applications with intuitive interfaces, robust functionality, and seamless integration.",
        points: ["Native and Cross-platform", "UX-focused Design", "Offline Functionality", "Startup Integration"],
        icon: "📱"
    }
];

const ServicesSlider = () => {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            const el = cardsRef.current[currentSlide];
            if (!el) return;

            gsap.fromTo(
                el,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [currentSlide]);

    // GSAP Scroll Trigger for entire section
    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            section,
            { autoAlpha: 0, y: 50 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#0f172a] text-white py-16 px-4 opacity-0"
        >
            <div className="text-center mb-10">
                <p className="uppercase text-sm tracking-widest text-gray-400">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Startup Solutions Portfolio</h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Comprehensive technology solutions designed to drive Startup growth, efficiency, and innovation.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* --- Mobile Version (Slider) --- */}
                <div className="flex justify-center items-center gap-6 md:hidden">
                    <button onClick={handlePrev} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                        <FaArrowLeft />
                    </button>

                    <div className="w-full">
                        {services.map((service, index) => {
                            if (index !== currentSlide) return null;

                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="p-6 bg-[#1e293b] rounded-xl shadow-md transition-all duration-300 ease-in-out border border-transparent hover:border-cyan-400 hover:scale-105"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
                                        {service.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <a href="#" className="text-blue-400 hover:underline text-sm flex items-center gap-1">
                                        Learn More <FaArrowRight />
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    <button onClick={handleNext} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                        <FaArrowRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2 md:hidden">
                    {services.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === i ? 'bg-blue-500' : 'bg-gray-500'}`}
                        ></span>
                    ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#1e293b] rounded-xl shadow-md transition-all duration-300 ease-in-out border border-transparent hover:border-cyan-400 hover:scale-105"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
                                {service.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href="#" className="text-blue-400 hover:underline text-sm flex items-center gap-1">
                                Learn More <FaArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;
