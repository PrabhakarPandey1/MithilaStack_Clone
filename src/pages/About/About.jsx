import React, { useEffect, useRef } from 'react';
import { MapPin, Users, Award, Target, Globe, Briefcase, TrendingUp, Star, Heart, Code, Zap, Shield } from 'lucide-react';

export default function AboutPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const journeyRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);
  const impactRef = useRef(null);

  useEffect(() => {
    // Import GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      script2.onload = () => {
        const { gsap } = window;
        gsap.registerPlugin(window.ScrollTrigger);
        
        // Hero animations
        gsap.fromTo('.hero-location', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        
        gsap.fromTo('.hero-title', 
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.3, ease: "power2.out" }
        );
        
        gsap.fromTo('.hero-description', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" }
        );

        // Stats animation
        gsap.fromTo('.stat-card', 
          { opacity: 0, y: 50, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Journey section animations
        gsap.fromTo('.journey-title', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: journeyRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo('.vision-mission', 
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: journeyRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo('.value-card', 
          { opacity: 0, scale: 0.8, rotation: 5 },
          { 
            opacity: 1, 
            scale: 1, 
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: journeyRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Team section animations
        gsap.fromTo('.team-title', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo('.team-member', 
          { opacity: 0, y: 50, rotation: 5 },
          { 
            opacity: 1, 
            y: 0, 
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // CTA section animations
        gsap.fromTo('.cta-content', 
          { opacity: 0, scale: 0.9, y: 30 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Impact section animations
        gsap.fromTo('.impact-title', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: impactRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo('.impact-metric', 
          { opacity: 0, y: 50, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: impactRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Floating animation for icons
        gsap.to('.floating-icon', {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.2
        });

        // Hover animations
        const cards = document.querySelectorAll('.hover-card');
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              duration: 0.3, 
              ease: "power2.out" 
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
              scale: 1, 
              y: 0,
              boxShadow: '0 0 0 rgba(0,0,0,0)',
              duration: 0.3, 
              ease: "power2.out" 
            });
          });
        });

        // Button hover animations
        const buttons = document.querySelectorAll('.animated-button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
              scale: 1.05,
              duration: 0.2, 
              ease: "power2.out" 
            });
          });
          
          button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
              scale: 1,
              duration: 0.2, 
              ease: "power2.out" 
            });
          });
        });
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const stats = [
    {
      number: "5+",
      label: "Years of Excellence",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "20+",
      label: "Team Members",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "95%",
      label: "Client Retention",
      icon: Star,
      gradient: "from-green-500 to-teal-500"
    },
    {
      number: "5+",
      label: "Countries Global Reach",
      icon: Globe,
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "20+",
      label: "Jobs Local Impact",
      icon: Briefcase,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      number: "50+",
      label: "Projects Innovation",
      icon: TrendingUp,
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const teamMembers = [
    {
      name: "Arvind Jha",
      role: "Founder & Tech Veteran",
      image: "/api/placeholder/150/150",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    {
      name: "Kartik Jha",
      role: "Operations Head & Team Leader",
      image: "/api/placeholder/150/150",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Operations", "Management", "Team Building"]
    },
    {
      name: "Prince Raj",
      role: "Lead Engineer",
      image: "/api/placeholder/150/150",
      gradient: "from-green-500 to-teal-500",
      skills: ["Full Stack", "Architecture", "DevOps"]
    },
    {
      name: "Tech Team",
      role: "Developers & Designers",
      image: "/api/placeholder/150/150",
      gradient: "from-orange-500 to-red-500",
      skills: ["Development", "Design", "Quality"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Traditional Values",
      description: "Rooted in Mithila's rich cultural heritage while embracing modern technology",
      color: "text-gray-600"
    },
    {
      icon: Code,
      title: "Innovation First",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions",
      color: "text-gray-600"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a strong tech ecosystem that empowers local talent",
      color: "text-gray-600"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class quality that serves clients across the globe",
      color: "text-gray-600"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Committed to delivering exceptional results in every project",
      color: "text-gray-600"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through transparency and reliability",
      color: "text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="hero-location flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-8 h-8 text-purple-400 floating-icon" />
              <span className="text-purple-300 text-lg font-medium">Building in the Heart of Mithila</span>
            </div>
            <h1 className="hero-title text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The MithilaStack Story
            </h1>
            <p className="hero-description text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building a vibrant tech ecosystem in the heart of Mithila, combining traditional values with modern innovation
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={statsRef}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card hover-card group bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center transition-all duration-500"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center floating-icon`}>
                <stat.icon className="w-6 h-6 text-gray-700" />
              </div>
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={journeyRef}>
        <div className="text-center mb-16">
          <h2 className="journey-title text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="vision-mission hover-card bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-gray-600 floating-icon" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create a world-class tech hub in Mithila, combining traditional values with modern innovation. 
                We're building more than just a company - we're nurturing a tech ecosystem that empowers local talent and serves global clients.
              </p>
            </div>
            
            <div className="vision-mission hover-card bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-gray-600 floating-icon" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering businesses through innovative technology solutions while fostering local talent development 
                and contributing to the growth of Mithila's tech ecosystem.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card hover-card bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300"
              >
                <value.icon className={`w-8 h-8 ${value.color} mb-4 floating-icon`} />
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={teamRef}>
        <div className="text-center mb-16">
          <h2 className="team-title text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Amazing Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals who make digital transformation possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member hover-card group bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center transition-all duration-500"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-gray-700 text-2xl font-bold floating-icon`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${member.gradient} text-gray-700`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={ctaRef}>
        <div className="cta-content bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join Our Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Be part of a transformative movement that's putting Mithila on the global tech map. 
            Together, we can build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="animated-button bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
              Start Your Journey
            </button>
            <button className="animated-button border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={impactRef}>
        <div className="text-center mb-12">
          <h2 className="impact-title text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Impact
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="impact-metric text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-gray-300 font-medium">Success Rate</div>
            <div className="text-sm text-gray-400">Project Excellence</div>
          </div>
          <div className="impact-metric text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-300 font-medium">Projects</div>
            <div className="text-sm text-gray-400">Innovation Delivered</div>
          </div>
          <div className="impact-metric text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-300 font-medium">Jobs Created</div>
            <div className="text-sm text-gray-400">Local Impact</div>
          </div>
          <div className="impact-metric text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-300 font-medium">Countries</div>
            <div className="text-sm text-gray-400">Global Reach</div>
          </div>
        </div>
      </div>
    </div>
  );
}