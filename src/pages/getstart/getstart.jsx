import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phoneNumber: '',
    workEmail: '',
    projectDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or business inquiries, feel free to get in touch with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Subh"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Startup Inc."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 857 9009 245"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Work Email</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="subh@startup.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  rows="5"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Information & Team */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:contact@mithilastack.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contact@mithilastack.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a href="tel:+918579009245" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91 857 9009 245
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-blue-400">Darbhanga, Mithila, Bihar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Our Team</h2>
              
              <p className="text-gray-400 mb-6">
                We have a team of computer science graduates, interns, startup founders, led by Mr. Arvind Jha.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">Arvind Jha</span>
                    <span className="text-gray-400"> - Founder & Tech Veteran</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">Kartik Jha</span>
                    <span className="text-gray-400"> - Operations Head & Team Leader</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">Prince Raj</span>
                    <span className="text-gray-400"> - Lead Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}