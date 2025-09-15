import React from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "B.Tech in Information Technology",
    institution: "National Institute of Technology (NIT) Bhopal",
    year: "2011",
    grade: "7.17/10",
    description: "Specialized in Information Technology with strong foundation in computer science, software engineering, and systems design."
  };

  const certifications = [
    {
      title: "Professional Scrum Product Owner (PSPO)",
      issuer: "Scrum.org",
      year: "2020",
      description: "Certified in agile product ownership, scrum methodologies, and cross-functional team collaboration."
    },
    {
      title: "iOS Development Specialization",
      issuer: "Apple Developer Program",
      year: "2018",
      description: "Advanced certification in iOS development best practices, App Store guidelines, and mobile UX design."
    }
  ];

  const continuousLearning = [
    "SwiftUI and iOS Latest Features",
    "Flutter Cross-Platform Development",
    "Cloud-Native Mobile Architectures",
    "AI/ML Integration in Mobile Apps",
    "DevOps and CI/CD for Mobile",
    "Leadership and Team Management"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Learning</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development have been the cornerstone 
            of my career growth in the rapidly evolving mobile technology landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Formal Education */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Formal Education</h3>
                  <p className="text-gray-600">Foundation in Technology</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{education.degree}</h4>
                <p className="text-blue-600 font-semibold mb-2">{education.institution}</p>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Graduated {education.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>CGPA: {education.grade}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{education.description}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">13+</div>
              <div className="text-gray-700 font-medium">Years of Learning</div>
              <div className="text-sm text-gray-600 mt-1">Continuous Growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Certifications</div>
              <div className="text-sm text-gray-600 mt-1">Professional Growth</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Focus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Staying current with the latest technologies and methodologies in mobile development 
              and engineering leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {continuousLearning.map((topic, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow cursor-default"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;