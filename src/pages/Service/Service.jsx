import React, { useEffect, useRef } from 'react';
import { Smartphone, Globe, Cloud, Code, Palette, Database, Shield, Zap, Users } from 'lucide-react';

export default function ServicesSection() {
  const headerRef = useRef(null);
  const mainServicesRef = useRef(null);
  const additionalServicesRef = useRef(null);
  const ctaRef = useRef(null);

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
        
        // Header animations
        gsap.fromTo('.services-header', 
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }
        );
        
        gsap.fromTo('.services-description', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
        );

        // Main services animation
        gsap.fromTo('.main-service-card', 
          { opacity: 0, y: 80, scale: 0.8, rotationY: 45 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: mainServicesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Service card icon animations
        gsap.fromTo('.service-icon', 
          { scale: 0, rotation: 180 },
          { 
            scale: 1, 
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(2.7)",
            scrollTrigger: {
              trigger: mainServicesRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Service features animation
        gsap.fromTo('.service-feature', 
          { opacity: 0, x: -20 },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: mainServicesRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Additional services animation
        gsap.fromTo('.additional-services-header', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: additionalServicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo('.additional-service-item', 
          { opacity: 0, scale: 0.8, x: -30 },
          { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: additionalServicesRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // CTA animation
        gsap.fromTo('.cta-section', 
          { opacity: 0, scale: 0.9, y: 50 },
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

        // Continuous floating animations
        gsap.to('.floating-icon', {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.3
        });

        // Pulse animation for service dots
        gsap.to('.service-dot', {
          scale: 1.2,
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.2
        });

        // Hover animations for main service cards
        const mainCards = document.querySelectorAll('.main-service-card');
        mainCards.forEach(card => {
          const tl = gsap.timeline({ paused: true });
          
          tl.to(card, { 
            scale: 1.05,
            y: -10,
            rotationY: 5,
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
            duration: 0.3,
            ease: "power2.out"
          });
          
          tl.to(card.querySelector('.service-icon'), {
            scale: 1.1,
            rotation: 360,
            duration: 0.5,
            ease: "power2.out"
          }, 0);
          
          tl.to(card.querySelector('.service-bg-gradient'), {
            opacity: 0.4,
            duration: 0.3
          }, 0);
          
          card.addEventListener('mouseenter', () => tl.play());
          card.addEventListener('mouseleave', () => tl.reverse());
        });

        // Hover animations for additional service items
        const additionalItems = document.querySelectorAll('.additional-service-item');
        additionalItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, { 
              scale: 1.03,
              x: 10,
              backgroundColor: 'rgba(75, 85, 99, 0.3)',
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(item.querySelector('.additional-service-icon'), {
              scale: 1.2,
              rotation: 15,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          item.addEventListener('mouseleave', () => {
            gsap.to(item, { 
              scale: 1,
              x: 0,
              backgroundColor: 'transparent',
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(item.querySelector('.additional-service-icon'), {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });

        // Button animations
        const buttons = document.querySelectorAll('.animated-button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              duration: 0.2,
              ease: "power2.out"
            });
          });
          
          button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
              scale: 1,
              boxShadow: '0 0 0 rgba(0,0,0,0)',
              duration: 0.2,
              ease: "power2.out"
            });
          });
        });

        // Parallax effect for background gradients
        gsap.to('.parallax-bg', {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-bg",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Text reveal animation
        gsap.from('.reveal-text', {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.reveal-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
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

  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native & cross-platform mobile applications built with cutting-edge technology for iOS and Android.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive, fast, and SEO-optimized websites that convert visitors into customers.",
      features: ["React/Next.js", "E-commerce", "CMS Integration", "SEO Optimization"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["AWS/Azure", "DevOps", "CI/CD Pipeline", "Server Management"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-900/20 to-teal-900/20",
      iconBg: "bg-gradient-to-br from-green-500 to-teal-500"
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions for your specific business needs.",
      color: "text-gray-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      color: "text-gray-600"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for better performance.",
      color: "text-gray-600"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security measures to protect your digital assets.",
      color: "text-gray-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve overall performance.",
      color: "text-gray-600"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert technical consulting to guide your digital transformation.",
      color: "text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="services-header text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="services-description text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end digital solutions to help your business thrive in the modern world. 
            From mobile apps to cloud infrastructure, we've got you covered.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20" ref={mainServicesRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="main-service-card group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 shadow-xl transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`service-bg-gradient absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 transition-opacity duration-500 parallax-bg`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`service-icon w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 floating-icon`}>
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>

                {/* Content */}
                <h3 className=" text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="reveal-text text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature flex items-center gap-3">
                      <div className={`service-dot w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm font-medium text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`animated-button mt-8 w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-gray-700 font-semibold transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12" ref={additionalServicesRef}>
          <div className="text-center mb-12">
            <h3 className="additional-services-header text-3xl font-bold text-white mb-4">
              Additional Services
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of services to support your digital journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="additional-service-item group p-6 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <service.icon className={`additional-service-icon w-8 h-8 ${service.color} floating-icon transition-transform duration-300`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" ref={ctaRef}>
          <div className="cta-section bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="getstart">
              <button className="animated-button bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </button>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}