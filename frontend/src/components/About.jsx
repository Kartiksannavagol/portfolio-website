import React, { useEffect, useState, useRef } from 'react';
import { Brain, Database, BarChart3, Award, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Brain className="h-6 w-6" />, label: 'Projects Completed', value: '6+' },
    { icon: <Database className="h-6 w-6" />, label: 'Technologies Learned', value: '12+' },
    { icon: <BarChart3 className="h-6 w-6" />, label: 'Current CGPA', value: '7.8' },
    { icon: <Award className="h-6 w-6" />, label: 'Certifications', value: '7' }
  ];

  const skillCategories = [
    {
      icon: '⚛️',
      iconBg: 'bg-blue-50 dark:bg-gray-700',
      label: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      icon: '🔧',
      iconBg: 'bg-emerald-50 dark:bg-gray-700',
      label: 'Backend & APIs',
      skills: ['FastAPI', 'REST API Integration']
    },
    {
      icon: '🗄️',
      iconBg: 'bg-violet-50 dark:bg-gray-700',
      label: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      icon: '🛠️',
      iconBg: 'bg-amber-50 dark:bg-gray-700',
      label: 'Tools',
      skills: ['Git & GitHub']
    },
    {
      icon: '💻',
      iconBg: 'bg-red-50 dark:bg-gray-700',
      label: 'Languages',
      skills: ['Python', 'C++']
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {mockData.about.introduction}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {mockData.about.mission}
            </p>

            {/* Experience Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {mockData.about.expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 text-white rounded-full mb-4">
                      {stat.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-emerald-500 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 ${cat.iconBg} rounded-lg flex items-center justify-center text-base`}>
                    {cat.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-blue-900 dark:text-gray-200 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className={`mt-20 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education & Certifications
          </h3>
          <div className="space-y-8">
            {mockData.experience.map((exp, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  {index === 0 ? <Users className="h-6 w-6 text-white" /> : <Award className="h-6 w-6 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h4>
                    <p className="text-emerald-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.duration}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;