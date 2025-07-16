import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
    const sliderRef = useRef(null);
    const cardRefs = useRef([]);
    const sectionRef = useRef(null);

    const cardData = [
        {
            title: "Cloud Infrastructure",
            desc: "Multi-cloud solutions with AWS, Azure, and GCP integration",
            bullets: ["Auto-scaling", "Load Balancing", "Serverless Computing", "Hybrid Cloud Solutions"],
        },
        {
            title: "Mobile App Development",
            desc: "Cross-platform and native mobile solutions for all devices",
            bullets: [
                "React Native & Flutter",
                "iOS/Swift & Android/Kotlin",
                "Progressive Web Apps",
                "Mobile-first UX/UI Design",
            ],
        },
        {
            title: "Full Stack Development",
            desc: "End-to-end web application development solutions",
            bullets: [
                "Frontend (React, Next.js, Angular)",
                "Backend (Node.js, Django, Laravel)",
                "Database Design & Integration",
                "RESTful & GraphQL APIs",
            ],
        },
    ];

    const techLogos = [
        "nextjs", "nodejs", "mongodb", "amazonwebservices", "docker", "graphql", "redis"
    ];

    const duplicatedLogos = [...techLogos, ...techLogos];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards
            cardRefs.current.forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Animate heading
            gsap.from(".tech-heading", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".tech-heading",
                    start: "top 90%",
                },
            });

            // Animate logos on load
            gsap.from(".tech-logo", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // Horizontal smooth infinite loop
            const totalWidth = sliderRef.current.scrollWidth / 2;

            gsap.to(sliderRef.current, {
                x: `-=${totalWidth}`,
                duration: 20,
                ease: "linear",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 text-center font-sans">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Cutting–Edge Technologies</h2>
            <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                Leveraging the latest innovations to drive your digital transformation
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
                {cardData.map((card, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="relative group overflow-hidden bg-white text-left rounded-xl shadow-lg p-6 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 to-blue-400 opacity-0 translate-y-full group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0" />
                        <div className="relative z-10 flex flex-col justify-center h-full gap-2">
                            <h3 className="text-black group-hover:text-white/90 transition-colors duration-300 text-xl font-semibold">
                                {card.title}
                            </h3>
                            <p className="text-black group-hover:text-white/90 transition-colors duration-300 text-sm">
                                {card.desc}
                            </p>
                            <ul className="text-black group-hover:text-white/90 transition-colors duration-300 text-sm list-disc pl-5">
                                {card.bullets.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tech Logos */}
            <h3 className="text-blue-500 text-lg font-semibold mb-6 max-w-7xl mx-auto tech-heading">
                Technologies We Work With
            </h3>
            <div className="overflow-hidden">
                <div ref={sliderRef} className="flex gap-10 w-max">
                    {duplicatedLogos.map((logo, i) => {
                        let imgSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-original.svg`;

                        // Handle custom URLs for non-devicon logos
                        if (logo === "amazonwebservices") {
                            imgSrc = "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws.svg";
                        } else if (logo === "graphql") {
                            imgSrc = "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/graphql.svg";
                        }

                        return (
                            <div
                                key={i}
                                className="w-14 h-14 mb-1 bg-white shadow-md rounded-full flex items-center justify-center shrink-0 tech-logo"
                            >
                                <img
                                    src={imgSrc}
                                    alt={logo}
                                    className="w-6 h-6"
                                    onError={(e) => (e.target.style.display = "none")}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
