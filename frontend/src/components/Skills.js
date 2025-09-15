import React from "react";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: ["Swift", "SwiftUI", "Objective-C", "Flutter", "Combine", "UIKit", "VisionOS"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Mobile Development & Architecture",
      skills: ["iOS Development", "MVC", "MVVM", "VIP", "Clean Architecture", "Singleton", "Factory"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Development Tools & Technologies",
      skills: ["Xcode", "GitHub", "GitLab", "Jenkins", "Travis", "Fastlane", "CI/CD"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Backend & Integration",
      skills: ["Rest/JSON", "SOAP", "Core Data", "AVFoundation", "Core Media", "Salesforce"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Monitoring & Quality Assurance",
      skills: ["Firebase Crashlytics", "Fabric", "App Flyers", "Sentry", "TDD", "Snapshot Testing"],
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Leadership & Methodology",
      skills: ["Team Leadership", "Agile/Scrum", "PSPO Certified", "Mentoring", "Code Review", "Hiring"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive blend of technical proficiency and leadership capabilities 
            built over 13+ years of mobile development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600">App Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
              <div className="text-gray-600">Engineers Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">Enterprise Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;