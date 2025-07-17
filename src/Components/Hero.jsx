import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef([]);
  const cardBoxRef = useRef(null);
  const logoRef = useRef(null);
  const boxesRef = useRef([]);
  const movingTextRef = useRef(null); // 👈 for animated text

  const cardData = [
    {
      title: "IT Job Creation",
      desc: "Creating local jobs in Mithila and building capacity/capability for world class software development.",
    },
    {
      title: "Skill development",
      desc: "Working with local engineering colleges and training students on latest technologies and tools.",
    },
    {
      title: "Hands-on Internship",
      desc: "Live, real-world projects for student interns to help develop practical skills and employability.",
    },
    {
      title: "Reversing Migration",
      desc: "Inspiring talented engineers to come back to their native place and work from Darbhanga.",
    },
  ];

  useEffect(() => {
    const el = logoRef.current;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(tagRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 });
    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    tl.fromTo(paraRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    tl.fromTo(logoRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    tl.fromTo(cardBoxRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

    buttonsRef.current.forEach((btn, i) => {
      gsap.fromTo(
        btn,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.1 * i,
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const handleMouseEnter = () => {
      boxesRef.current.forEach((box) => {
        gsap.to(box, {
          x: gsap.utils.random(-10, 10),
          y: gsap.utils.random(-10, 10),
          rotate: gsap.utils.random(-15, 15),
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const handleMouseLeave = () => {
      gsap.to(boxesRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
      });
    };

    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // 👉 Hover Animation for "New Mithila"
  useEffect(() => {
    const el = movingTextRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 50;
      const rotateY = ((x - centerX) / centerX) * 50;

      gsap.to(el, {
        rotateX,
        rotateY,
        transformPerspective: 500,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  // Card box rotation on mouse movement
  useEffect(() => {
    const el = cardBoxRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * 20;
    const rotateY = ((x - rect.width / 2) / rect.width) * 20;
    el.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

    const handleMouseLeave = () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const addToButtonsRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return (
    <section
      ref={heroRef}
      className="max-w-7xl mx-auto h-auto pt-24 px-6 md:px-12 py-16 text-white font-sans gap-8 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-center min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative z-10">
          <span
            ref={tagRef}
            className="inline-flex items-center gap-2 bg-[#1e293b] border border-[#334155] text-[#10b981] px-4 py-2 rounded-full text-sm mb-8"
          >
            <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
            Trusted by Microsoft Azure
          </span>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Scripting{" "}
            <span
              ref={movingTextRef}
              className="inline-block bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
            >
              New Mithila
            </span>
          </h1>

          <p
            ref={paraRef}
            className="text-[#94a3b8] text-lg max-w-2xl mb-8 leading-relaxed"
          >
            Delivering secure digital solutions and scalable cloud
            infrastructure tailored to power innovation and startup success.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              ref={addToButtonsRef}
              className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg hover:bg-[#2563eb] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Consultation →
            </button>
            <button
              ref={addToButtonsRef}
              className="border border-[#475569] text-[#cbd5e1] px-8 py-3 rounded-lg hover:bg-[#1e293b] hover:border-[#64748b] transition-all duration-300 font-semibold"
            >
              View Success Stories
            </button>
          </div>

          {/* Logo with animation */}
          <div ref={logoRef} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {["M", "J", "D", "P", "S"].map((char, i) => (
                <div
                  key={i}
                  ref={(el) => (boxesRef.current[i] = el)}
                  className={`w-8 h-8 ${
                    i % 2 === 0 ? "rounded-lg" : "rounded-full"
                  } flex items-center justify-center`}
                  style={{
                    backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"][i],
                  }}
                >
                  <span className="text-white font-bold text-sm">{char}</span>
                </div>
              ))}
            </div>
            <div className="text-[#94a3b8]">
              <div className="text-xl font-bold text-white">10+</div>
              <div className="text-sm">Startup Clients Worldwide</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative z-10">
          <div
            ref={cardBoxRef}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl shadow-2xl border border-[#334155] backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-6">
              {cardData.map((card, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 border border-[#334155] hover:border-[#475569] hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#1e40af] hover:to-[#1e293b] group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-[#06b6d4] rounded-full group-hover:bg-white transition-colors"></div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
