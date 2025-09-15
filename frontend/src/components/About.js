import React from "react";
import { Users, Code, Award, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Technical Excellence",
      description: "13+ years of expertise in iOS development, Swift, Flutter, and modern architectures like MVVM, VIP, and Clean Architecture."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Leadership Impact",
      description: "Successfully mentored 8+ iOS engineers, built diverse engineering teams, and drove best practices across organizations."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Scale & Impact",
      description: "Architected enterprise-scale applications serving 500K+ users in banking, e-commerce, and insurance domains."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Innovation Focus",
      description: "Introduced Flutter/iOS hybrid modules, implemented CI/CD pipelines, and reduced production crash rates through monitoring."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate iOS Architect and Engineering Leader who thrives on building 
            exceptional mobile experiences while fostering team growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Bridging Technical Excellence with Leadership
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 13 years in mobile development, I've evolved from a passionate iOS developer 
              to an engineering leader who shapes technical strategy while nurturing talent. My journey 
              spans from building individual features to architecting enterprise-scale applications 
              that serve hundreds of thousands of users.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in the power of combining deep technical expertise with effective leadership. 
              Whether I'm designing scalable architectures, implementing CI/CD pipelines, or mentoring 
              junior engineers, my focus remains on delivering excellence while building strong, 
              collaborative teams.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My experience across diverse domains - from social apps featured in AppAdvice to 
              enterprise banking solutions - has taught me the importance of adaptability, 
              continuous learning, and putting user experience at the center of everything we build.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Led teams of 6-8 engineers across multiple organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Architected apps serving 500K+ active users</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Reduced production crash rates through monitoring pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Successfully delivered hybrid Flutter/iOS solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Built Kander social app with 10K+ US downloads</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{highlight.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;