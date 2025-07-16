import { useEffect, useRef, useState } from "react";
import { ChevronRight, Clock, Users, Award, Monitor } from "lucide-react";

const trainings = [
  {
    title: "Frontend Development Training",
    price: "₹4999",
    duration: "1 months",
    hours: "25",
    mentors: "5",
    certificate: "Industry Level Certificate",
    hybrid: "One online session per week for flexibility",
    description: "Learn and work with modern web technologies including React, Next.js, and Node.js.",
    skills: {
      gaining: ["JavaScript", "React", "Next.js", "API"],
      additional: ["Tailwind CSS", "HTML", "CSS"]
    },
    tag: "Popular",
    tagColor: "bg-blue-500"
  },
  {
    title: "Backend Development Training",
    price: "₹4999",
    duration: "1 months",
    hours: "25",
    mentors: "5",
    certificate: "Industry Level Certificate",
    hybrid: "One online session per week for flexibility",
    description: "Learn and work with modern web technologies including React, Next.js, and Node.js.",
    skills: {
      gaining: ["Node.js", "Express", "MongoDB", "API"],
      additional: ["Authentication", "Authorization"]
    },
    tag: "Popular",
    tagColor: "bg-blue-500"
  },
  {
    title: "DevOps Training",
    price: "₹4999",
    duration: "1 months",
    hours: "25",
    mentors: "2",
    certificate: "Industry Level Certificate",
    hybrid: "One online session per week for flexibility",
    description: "Work with CI/CD pipelines, Docker, Kubernetes, and cloud platforms.",
    skills: {
      gaining: ["Docker", "Kubernetes", "AWS"],
      additional: []
    },
    tag: "Popular",
    tagColor: "bg-blue-500"
  },
  {
    title: "Data Science Training",
    price: "₹4999",
    duration: "1 months",
    hours: "25",
    mentors: "3",
    certificate: "Industry Level Certificate",
    hybrid: "One online session per week for flexibility",
    description: "Master data analysis, machine learning, and statistical modeling with Python.",
    skills: {
      gaining: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
      additional: ["Pandas", "NumPy", "Scikit-learn"]
    },
    tag: "Popular",
    tagColor: "bg-blue-500"
  }
];

export default function TrainingCardSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const sliderRef = useRef(null);

  // Responsive cards count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = trainings.length - cardsToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  const maxIndex = trainings.length - cardsToShow;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-900">Summer Training </span>
            <span className="text-purple-600">Opportunities</span>
          </h1>
          
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(trainings.length / cardsToShow) * 100}%`
            }}
          >
            {trainings.map((training, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / trainings.length}%` }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden h-full">
                  {/* Tag */}
                  <div className="relative">
                    <div className={`absolute top-4 right-4 ${training.tagColor} text-white px-3 py-1 rounded-full text-xs font-medium transform rotate-12`}>
                      {training.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title and Price */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Price - <span className="font-semibold text-purple-600">{training.price}</span>
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {training.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Duration: {training.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Hours: {training.hours}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Mentors: {training.mentors}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Certificate: {training.certificate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Monitor className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Hybrid: {training.hybrid}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Gaining Skills:</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {training.skills.gaining.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {training.skills.additional.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {training.skills.additional.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}