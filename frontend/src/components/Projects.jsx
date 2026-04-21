import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, Filter, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(mockData.projects);
  const sectionRef = useRef(null);

  const categories = ['All', ...new Set(mockData.projects.map(project => project.category))];

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

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(mockData.projects);
    } else {
      setFilteredProjects(mockData.projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const ProjectCard = ({ project, index }) => (
    <Card className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-3">
              {project.github && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              )}
              {project.demo && (
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              )}
            </div>
          </div>
        </div>
        <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
          {project.category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Here are some of my recent full-stack and frontend projects showcasing my ability to build responsive web applications, interactive dashboards, and seamless user experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More Projects CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://github.com/kartiksannavagol', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;