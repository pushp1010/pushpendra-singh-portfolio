import React from "react";
import { Building, Calendar, MapPin, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Nagarro",
      position: "Associate Principal Engineer (iOS)",
      duration: "Mar 2021 - Present",
      location: "Delhi, India",
      type: "Current Role",
      achievements: [
        "Architected and delivered enterprise-scale iOS apps (banking, e-commerce, insurance) with 500K+ users",
        "Integrated backend services and APIs (REST, SOAP, Salesforce, etc.)",
        "Introduced Flutter/iOS hybrid modules, improving feature delivery cycles",
        "Implemented monitoring and alerting pipelines, reducing production crash rates",
        "Mentored and coached 8 iOS engineers across multiple projects",
        "Contributed to hiring and onboarding processes for engineering teams"
      ]
    },
    {
      company: "Omniwyse",
      position: "Principal Engineer (iOS)",
      duration: "Aug 2019 - Mar 2021",
      location: "Delhi, India",
      type: "Previous Role",
      achievements: [
        "Defined mobile app architecture and development strategy for the organization",
        "Automated release cycles using Fastlane and CI/CD pipelines",
        "Implemented Test-Driven Development (TDD) & snapshot testing frameworks",
        "Participated in product strategy sessions with product owners and architects",
        "Supported recruitment efforts and technical interviews for iOS positions"
      ]
    },
    {
      company: "Agile Cockpit",
      position: "Associate Architect (iOS)",
      duration: "Apr 2017 - Aug 2019",
      location: "Delhi, India",
      type: "Previous Role",
      achievements: [
        "Designed and delivered iOS applications with seamless backend service integrations",
        "Championed CI/CD pipelines implementation, reducing manual release efforts by 70%",
        "Collaborated with product owners to align architecture with agile development practices",
        "Established coding standards and best practices for the mobile development team"
      ]
    },
    {
      company: "Algoworks Pvt Ltd",
      position: "Team Lead (iOS)",
      duration: "Mar 2015 - Apr 2017",
      location: "Delhi, India",
      type: "Previous Role",
      achievements: [
        "Led a cross-functional team of 6 engineers in delivering multiple iOS applications",
        "Oversaw third-party SDK integrations and ensured optimal app performance",
        "Partnered with UX teams to create detailed wireframes and PRDs",
        "Managed project timelines and deliverables across multiple client engagements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey showcasing growth from individual contributor 
            to engineering leadership across diverse organizations and domains.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Current Role' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">{exp.position}</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;