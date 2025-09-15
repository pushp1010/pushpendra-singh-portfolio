import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Expertise",
      links: [
        { name: "iOS Development", href: "#skills" },
        { name: "Team Leadership", href: "#experience" },
        { name: "Mobile Architecture", href: "#projects" },
        { name: "Cross-Platform", href: "#projects" },
        { name: "Mentoring", href: "#about" }
      ]
    },
    {
      title: "Get In Touch",
      links: [
        { name: "pushp.2224@gmail.com", href: "mailto:pushp.2224@gmail.com" },
        { name: "+91-7838765600", href: "tel:+917838765600" },
        { name: "Delhi, India", href: null },
        { name: "LinkedIn", href: "#" },
        { name: "GitHub", href: "#" }
      ]
    }
  ];

  const scrollToSection = (href) => {
    if (!href || href === "#") return;
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Pushpendra Singh</h3>
              <p className="text-blue-400 font-medium">iOS Architect & Engineering Leader</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Building exceptional mobile experiences and leading high-performing engineering teams 
              for over 13 years.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Delhi, India</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Pushpendra Singh. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Available for consulting and leadership roles</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-blue-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;