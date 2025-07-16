import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto my-10 p-6  rounded-xl border border-gray-700 bg-gradient-to-r from-slate-900 to-slate-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Text Area */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-gray-300 mb-6">
            Be part of a transformative movement that's putting Mithila on the global tech map.
            Together, we can build something extraordinary.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r align-center hoverfrom-purple-500 to-teal-400 text-white hover:from-teal-400  hover:to-purple-500 hover:text-black  font-semibold rounded-md shadow-md hover:scale-105 transition duration-300">
            Start Your Journey 🚀
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: '5+ Countries', subtitle: 'Global Reach' },
            { title: '20+ Jobs', subtitle: 'Local Impact' },
            { title: '50+ Projects', subtitle: 'Innovation' },
            { title: '95% Success', subtitle: 'Excellence' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#131B2A] rounded-lg hover-border-white transform transition-all hover:scale-105 border-gray-700 p-4 text-white"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
