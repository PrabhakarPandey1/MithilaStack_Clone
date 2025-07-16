import React, { useState, useEffect, useRef } from 'react';
import { Upload, Send } from 'lucide-react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    position: '',
    experience: '',
    graduationYear: '',
    address: '',
    collegeName: '',
    portfolioUrl: '',
    resume: null,
    coverLetter: ''
  });

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const fieldsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const gsap = window.gsap;
    if (!gsap) return;

    // Timeline for entrance animations
    const tl = gsap.timeline();

    // Animate title and subtitle
    tl.from(titleRef.current, {
      duration: 0.8,
      y: -50,
      opacity: 0,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      duration: 0.6,
      y: -30,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.3")
    .from(fieldsRef.current, {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2")
    .from(buttonRef.current, {
      duration: 0.5,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Hover animations for form fields
    fieldsRef.current.forEach(field => {
      if (field) {
        field.addEventListener('mouseenter', () => {
          gsap.to(field, {
            duration: 0.3,
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(139, 69, 255, 0.2)",
            ease: "power2.out"
          });
        });

        field.addEventListener('mouseleave', () => {
          gsap.to(field, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 4px 15px rgba(139, 69, 255, 0.1)",
            ease: "power2.out"
          });
        });
      }
    });

    // Button hover animation
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(139, 69, 255, 0.4)",
          ease: "power2.out"
        });
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          scale: 1,
          boxShadow: "0 5px 20px rgba(139, 69, 255, 0.3)",
          ease: "power2.out"
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // GSAP submit animation
    const gsap = window.gsap;
    if (gsap) {
      gsap.to(buttonRef.current, {
        duration: 0.2,
        scale: 0.95,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(buttonRef.current, {
            duration: 0.3,
            scale: 1,
            ease: "back.out(1.7)"
          });
        }
      });
    }

    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const addToRefs = (el) => {
    if (el && !fieldsRef.current.includes(el)) {
      fieldsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <p ref={titleRef} className="text-sm text-slate-400 mb-2 tracking-wider uppercase">
            CAREERS
          </p>
          <h1 ref={subtitleRef} className="text-3xl md:text-4xl font-bold text-white mb-2">
            Join Our Team
          </h1>
          <p className="text-slate-300 max-w-md mx-auto">
            Be part of our mission to build innovative solutions and transform the tech landscape in Mithila
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className="space-y-6">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="subhash@exmaple.com"
                required
              />
            </div>
          </div>

          {/* Phone & Service Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select service type</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
            </div>
          </div>

          {/* Position & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select a position</option>
                <option value="junior">Junior Developer</option>
                <option value="senior">Senior Developer</option>
                <option value="lead">Team Lead</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          {/* Graduation Year & Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Graduation Year</label>
              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select graduation year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Your address"
                required
              />
            </div>
          </div>

          {/* College Name & Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">College Name</label>
              <select
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Select a College & University</option>
                <option value="iit">IIT Delhi</option>
                <option value="nit">NIT Patna</option>
                <option value="bits">BITS Pilani</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div ref={addToRefs} className="space-y-2">
              <label className="text-sm text-slate-300 font-medium">Portfolio/Social URL</label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="https://github.com/username OR https://..."
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div ref={addToRefs} className="space-y-2">
            <label className="text-sm text-slate-300 font-medium">Upload Your Resume</label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="flex items-center justify-center w-full px-4 py-12 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-purple-500 transition-all duration-300 bg-slate-800/30"
              >
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                  <p className="text-slate-400">
                    {formData.resume ? formData.resume.name : 'Upload files or drag and drop'}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">PDF, DOC up to 10MB</p>
                </div>
              </label>
            </div>
          </div>

          {/* Cover Letter */}
          <div ref={addToRefs} className="space-y-2">
            <label className="text-sm text-slate-300 font-medium">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us why you'd be a great fit..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            <span>Submit Application</span>
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* GSAP CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    </div>
  );
};

export default JobApplicationForm;