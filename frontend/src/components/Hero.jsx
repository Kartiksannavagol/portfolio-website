import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "CS Engineering Student",
    "Aspiring Data Scientist", 
    "AI/ML Enthusiast",
    "Web Developer"
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-emerald-900/20 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={mockData.personal.profileImage} 
                  alt={mockData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-900 via-emerald-600 to-orange-600 bg-clip-text text-transparent">
              {mockData.personal.name}
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className={`mb-6 h-16 flex items-center justify-center transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
              <span className="inline-block transition-all duration-500 transform">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          {/* Tagline */}
          <p className={`text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {mockData.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
            <a
  href="/Kartik_Sannavagol_Resume.pdf"
  download="Kartik_Sannavagol_Resume.pdf"
  className="inline-block"
>
  <Button
    variant="outline"
    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {mockData.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-200"
              >
                {social.name === 'GitHub' && <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
                {social.name === 'LinkedIn' && <Linkedin className="h-6 w-6 text-blue-600" />}
                {social.name === 'Email' && <Mail className="h-6 w-6 text-emerald-600" />}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={`transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;