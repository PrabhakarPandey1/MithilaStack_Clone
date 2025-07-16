import React, { useEffect, useRef } from 'react';
import { Users, Rocket, Zap, Settings, BarChart3, Clock, GraduationCap, BookOpen, Trophy, Lightbulb, ArrowRight } from 'lucide-react';

const TrainingOpportunities = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Load GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const { gsap } = window;
      
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, sectionTitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });
      
      // Animation timeline
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .to(sectionTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.4")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
      
      // Continuous animations
      gsap.to(".floating-icon", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });
      
      // Card hover animations
      cardsRef.current.forEach(card => {
        if (card) {
          const icon = card.querySelector('.card-icon');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotation: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const trainingPrograms = [
    {
      id: 1,
      title: "Frontend Development Training",
      price: "₹4999",
      description: "Learn and work with modern web technologies including React, Next.js, and Node.js.",
      icon: Rocket,
      features: [
        { icon: Clock, text: "Duration: 1 months" },
        { icon: GraduationCap, text: "Hours: 25" },
        { icon: BookOpen, text: "Mentors: 5" },
        { icon: Trophy, text: "Certificate: Industry Level Certificate" },
        { icon: Lightbulb, text: "Hybrid: One online session per week for flexibility" }
      ],
      tags: [
        { name: "JavaScript", highlight: true },
        { name: "React", highlight: false },
        { name: "Node.js", highlight: false },
        { name: "UI", highlight: false }
      ]
    },
    {
      id: 2,
      title: "Backend Development Training",
      price: "₹4999",
      description: "Learn and work with modern web technologies including React, Next.js, and Node.js.",
      icon: Zap,
      features: [
        { icon: Clock, text: "Duration: 1 months" },
        { icon: GraduationCap, text: "Hours: 25" },
        { icon: BookOpen, text: "Mentors: 5" },
        { icon: Trophy, text: "Certificate: Industry Level Certificate" },
        { icon: Lightbulb, text: "Hybrid: One online session per week for flexibility" }
      ],
      tags: [
        { name: "Node.js", highlight: false },
        { name: "Express", highlight: false },
        { name: "MongoDB", highlight: true },
        { name: "API", highlight: false }
      ]
    },
    {
      id: 3,
      title: "DevOps Training",
      price: "₹4999",
      description: "Work with CI/CD pipelines, Docker, Kubernetes, and modern DevOps practices.",
      icon: Settings,
      features: [
        { icon: Clock, text: "Duration: 1 months" },
        { icon: GraduationCap, text: "Hours: 25" },
        { icon: BookOpen, text: "Mentors: 2" },
        { icon: Trophy, text: "Certificate: Industry Level Certificate" },
        { icon: Lightbulb, text: "Hybrid: One online session per week for flexibility" }
      ],
      tags: [
        { name: "Docker", highlight: false },
        { name: "Kubernetes", highlight: false },
        { name: "AWS", highlight: true }
      ]
    },
    {
      id: 4,
      title: "Data Science Training",
      price: "₹4999",
      description: "Analyze data, build models, and extract insights using Python and ML frameworks.",
      icon: BarChart3,
      features: [
        { icon: Clock, text: "Duration: 1 months" },
        { icon: GraduationCap, text: "Hours: 25" },
        { icon: BookOpen, text: "Mentors: 3" },
        { icon: Trophy, text: "Certificate: Industry Level Certificate" },
        { icon: Lightbulb, text: "Hybrid: One online session per week for flexibility" }
      ],
      tags: [
        { name: "Python", highlight: true },
        { name: "ML", highlight: false },
        { name: "Data Analysis", highlight: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center mb-8">
          <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
            <Users className="w-4 h-4 mr-2" />
            Join Our Team
          </a>
        </div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
        >
          Training <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Opportunities</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-slate-600 text-lg leading-relaxed mb-12 max-w-4xl"
        >
          Gain hands-on experience with cutting-edge technologies and kickstart your career with our comprehensive internship & training programs.
        </p>

        {/* Section Title */}
        <div 
          ref={sectionTitleRef}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
            Our Summer Training Programs
          </h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <div
              key={program.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent hover:border-indigo-200 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              
              {/* Card Header */}
              <div className="flex items-center mb-6">
                <div className="card-icon floating-icon w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Price - {program.price}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 text-sm">
                    <feature.icon className="w-4 h-4 mr-3 text-indigo-500" />
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tag.highlight
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* View Details */}
              <a
                href="#"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-all duration-300 hover:translate-x-1"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">
            Ready to Start Your Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
              Apply for Training
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white border-2 border-indigo-600 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
              Apply for Campus Ambassador
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingOpportunities;