import React from "react";
import { ExternalLink, Github, Star, Download, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Kander Social App",
      description: "A social networking application that gained significant traction in the US market, featuring real-time messaging, content sharing, and community building features.",
      technologies: ["Swift", "UIKit", "Core Data", "Firebase", "RESTful APIs"],
      achievements: [
        "Featured in AppAdvice tech publication",
        "Achieved 10K+ downloads in the US market",
        "Built engaging user experience with real-time features",
        "Implemented scalable architecture for future growth"
      ],
      type: "Mobile App",
      status: "Released",
      highlights: "Featured App"
    },
    {
      title: "Freegal Music Streaming App",
      description: "A comprehensive music streaming platform providing free and legal access to over 9 million songs, used by millions of users globally.",
      technologies: ["Swift", "AVFoundation", "Core Audio", "Offline Caching", "REST APIs"],
      achievements: [
        "Serves 9M+ songs to global user base",
        "Implemented offline music caching and playback",
        "Built robust audio streaming infrastructure",
        "Optimized for performance across various network conditions"
      ],
      type: "Entertainment",
      status: "Live Production",
      highlights: "9M+ Songs"
    },
    {
      title: "Video Editing & Processing Suite",
      description: "Advanced video editing features with real-time rendering, live filters, and professional-grade playback controls for mobile video editing applications.",
      technologies: ["AVFoundation", "VisionOS", "Core Graphics", "Metal", "Core Image"],
      achievements: [
        "Built live video filters with real-time processing",
        "Implemented advanced playback controls and timeline editing",
        "Developed real-time rendering engine for mobile devices",
        "Integrated VisionOS capabilities for enhanced video processing"
      ],
      type: "Media & Entertainment",
      status: "Enterprise Solution",
      highlights: "Real-time Processing"
    },
    {
      title: "Hybrid Flutter-iOS Platform",
      description: "Innovative cross-platform solution combining Flutter and native iOS modules to deliver streaming features with optimal performance and development efficiency.",
      technologies: ["Flutter", "Swift", "Platform Channels", "Native Integration", "Streaming APIs"],
      achievements: [
        "Successfully delivered cross-platform streaming features",
        "Improved development velocity through hybrid approach",
        "Maintained native performance for critical components",
        "Established reusable architecture for future projects"
      ],
      type: "Cross-Platform",
      status: "Production Ready",
      highlights: "Hybrid Architecture"
    },
    {
      title: "Enterprise Banking Solutions",
      description: "Large-scale iOS applications for banking and financial services, serving 500K+ users with enterprise-grade security and performance requirements.",
      technologies: ["Swift", "SwiftUI", "Security Frameworks", "Biometric Auth", "Core Data"],
      achievements: [
        "Architected apps serving 500K+ active users",
        "Implemented enterprise-grade security measures",
        "Integrated with multiple banking backend systems",
        "Delivered high-performance financial transaction processing"
      ],
      type: "Enterprise",
      status: "Production",
      highlights: "500K+ Users"
    },
    {
      title: "E-commerce & Insurance Platforms",
      description: "Comprehensive mobile solutions for e-commerce and insurance domains, featuring complex workflows, payment integrations, and user management systems.",
      technologies: ["Swift", "UIKit", "Payment SDKs", "RESTful APIs", "Push Notifications"],
      achievements: [
        "Built complex e-commerce checkout flows",
        "Integrated multiple payment gateway solutions",
        "Implemented insurance policy management features",
        "Delivered seamless user onboarding experiences"
      ],
      type: "Enterprise",
      status: "Multiple Productions",
      highlights: "Multi-domain"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      "Released": "bg-green-100 text-green-800",
      "Live Production": "bg-blue-100 text-blue-800",
      "Enterprise Solution": "bg-purple-100 text-purple-800",
      "Production Ready": "bg-orange-100 text-orange-800",
      "Production": "bg-indigo-100 text-indigo-800",
      "Multiple Productions": "bg-pink-100 text-pink-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful mobile applications and solutions that demonstrate 
            technical excellence and real-world impact across various domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-blue-600 font-medium">{project.type}</span>
                  {project.highlights && (
                    <div className="flex items-center gap-1 text-orange-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{project.highlights}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </Button>
                  {project.title.includes("Kander") && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 text-green-600 border-green-200 hover:bg-green-50"
                    >
                      <Download className="w-4 h-4" />
                      App Store
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in learning more about any of these projects or discussing potential collaborations?
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;