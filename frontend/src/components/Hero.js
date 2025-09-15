import React from "react";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              PS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pushpendra Singh
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            iOS Architect & Engineering Leader
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            13+ years of expertise in designing, developing, and delivering large-scale mobile 
            applications. Proven leader with experience mentoring teams and driving 
            engineering excellence across iOS and cross-platform development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <span>pushp.2224@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <span>+91-7838765600</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>Delhi, India</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;