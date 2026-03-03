export const mockData = {
  personal: {
    name: "Kartik Sannavagol",
    profileImage: "/profile2.jpg",
    tagline: "Final-year Computer Science Engineering student with a growing interest in Artificial Intelligence, Machine Learning, and Data Science."
  },

  about: {
    introduction: "I'm a final-year Computer Science Engineering student at Maretha Mandal Engineering College, Belagavi, with a passion for Artificial Intelligence, Machine Learning, and Data Science. Currently maintaining a CGPA of 7.8/10 and actively building knowledge through globally recognized certifications and hands-on projects.",
    mission: "As an enthusiastic learner, I'm seeking opportunities to apply and strengthen my AI/ML skills through real-world projects and internships. I have experience working on academic and personal projects including web applications, predictive models, and interactive dashboards, with a strong problem-solving mindset and the ability to adapt quickly to new technologies.",
    expertise: [
      "Python Programming",
      "Web Development",
      "Database Management",
      "Cloud Computing (Basics)",
      "Problem Solving",
      "AI/ML (Introductory)",
      "Data Analysis",
      "Collaborative Learning"
    ]
  },

  social: [
    { name: "GitHub", url: "https://github.com/Kartiksannavagol", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/kartik-sannavagol", icon: "linkedin" },
    { name: "Email", url: "mailto:kartiksannavagol@gmail.com", icon: "mail" }
  ],

  skills: [
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "JavaScript", level: 68 },
    { name: "C++", level: 65 },
    { name: "PHP", level: 60 },
    { name: "HTML/CSS", level: 80 },
    { name: "React.js", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 68 },
    { name: "Google Cloud", level: 45 },
    { name: "AI/ML Basics", level: 50 },
    { name: "Data Analysis", level: 55 }
  ],

  projects: [
    {
      id: 0,
      title: "DPI Engine – Deep Packet Inspection System",
      description: "A high-performance Deep Packet Inspection (DPI) engine built in C++ for analyzing and filtering network traffic from PCAP files. The system parses network layers, extracts TLS SNI and HTTP host headers, classifies applications (YouTube, Facebook, etc.), applies rule-based blocking, and generates detailed traffic analytics reports. Includes both single-threaded and multi-threaded architectures for scalable packet processing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: [
        "C++17",
        "Multi-threading",
        "PCAP Processing",
        "TCP/IP Protocols",
        "TLS Handshake Analysis",
        "SNI Extraction",
        "Hash Maps",
        "Thread-Safe Queues"
      ],
     github: "https://github.com/Kartiksannavagol/Deep-Packet-Inspection-System",
     demo: "", 
     category: "Systems Programming",
     details: [
    "Built a complete packet processing pipeline to parse Ethernet, IP, TCP/UDP headers from raw PCAP captures",
    "Implemented TLS Client Hello inspection to extract Server Name Indication (SNI) for HTTPS domain identification",
    "Designed rule-based blocking system supporting IP, domain, and application-level filtering",
    "Developed multi-threaded architecture with Load Balancer and Fast Path worker threads using thread-safe queues",
    "Implemented flow tracking using Five-Tuple hashing to ensure consistent packet routing and state management",
    "Generated detailed traffic analytics reports including protocol breakdown and application statistics"
     ]
    },
    {
  id: 1,
  title: "Visually Impaired Assistance System",
  description: "An AI-powered real-time assistance system designed to help visually impaired individuals navigate safely. The system uses YOLOv8-based object detection with OpenCV and provides real-time voice alerts to inform users about nearby obstacles, enhancing independence and situational awareness.",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
  technologies: [
    "Python",
    "YOLOv8",
    "OpenCV",
    "PyTorch",
    "Flask",
    "SpeechRecognition",
    "pyttsx3",
    "Computer Vision"
  ],
  github: "https://github.com/Kartiksannavagol/Visually-Impaired-Assistance-System-",
  demo: "",
  category: "Artificial Intelligence",
  details: [
    "Implemented real-time object detection using YOLOv8 and OpenCV for obstacle identification",
    "Integrated voice feedback system using pyttsx3 and SpeechRecognition for spoken alerts",
    "Designed modular architecture allowing future expansion with GPS navigation and emergency alerts",
    "Optimized detection pipeline for real-time webcam processing",
    "Built backend-ready structure using Flask/FastAPI for future mobile or web integration"
  ]
},
    
    {
      id: 2,
      title: "Loan Collector Record Maintenance Application",
      description: "A web-based tool designed to streamline financial record management for loan collectors by enabling real-time tracking of expected and collected payments, PDF report generation, and persistent local data storage.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "MongoDB", "jsPDF"],
      github: "https://github.com/Kartiksannavagol/BrokeRecordManagement?tab=readme-ov-file",
      demo: "https://prathameshanand.github.io/BrokeRecordManagementApp/",
      category: "Web Development",
      details: [
        "Developed responsive frontend using HTML, CSS, and JavaScript",
        "Built backend with Node.js and integrated MongoDB for data management",
        "Implemented real-time calculations and PDF report generation using jsPDF",
        "Conducted testing and deployment ensuring usability and performance"
      ]
    },
    {
      id: 3,
      title: "Real-Time Multimodal Social Media Analytics Platform",
      description: "A real-time, cross-platform social media analytics platform supporting multimodal analysis (text, images, metadata) with scalable and ethical design for brand monitoring, crisis detection, and sentiment insights.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["React.js", "TailwindCSS", "Chart.js", "Python", "FastAPI", "MongoDB", "Docker", "HuggingFace", "Microsoft PHI-3"],
      github: "https://github.com/Kartiksannavagol/social-media-analytics",
      demo: "https://social-analytics-demo.vercel.app",
      category: "AI/ML",
      details: [
        "Developed real-time data scrapers for YouTube and Reddit to process comments and engagement metrics",
        "Implemented multimodal analysis (text + metadata) using NLP models like PHI-3 Mini and HuggingFace Transformers",
        "Designed interactive dashboard with React.js, TailwindCSS, and Chart.js for dynamic visual insights",
        "Ensured ethical, privacy-focused data handling with scalable deployment using Docker and AWS"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and achievements. Built with modern web technologies and responsive design principles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React.js", "TailwindCSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Kartiksannavagol/portfolio",
      demo: "https://kartiksannavagol.netlify.app",
      category: "Web Development"
    },
   
  ],

  experience: [
    {
      position: "B.E. in Computer Science Engineering",
      company: "Maratha Mandal Engineering College, Belagavi",
      duration: "2022 - 2026 (Expected)",
      description: "Currently pursuing Bachelor's degree in Computer Science Engineering with a CGPA of 7.8/10. Comprehensive coursework in programming, data structures, algorithms, database management, and emerging technologies like AI/ML."
    },
    {
      position: "AI for Beginners Certification",
      company: "HP LIFE",
      duration: "August 2025",
      description: "Completed foundational certification in Artificial Intelligence, covering basic concepts, applications, and introductory machine learning principles. Gained understanding of AI's role in various industries."
    },
    {
      position: "Python Essentials 1 Certification",
      company: "Cisco Networking Academy",
      duration: "August 2025",
      description: "Achieved certification in Python programming fundamentals, covering syntax, data types, control structures, functions, and basic object-oriented programming concepts."
    },
    {
      position: "Web Development Workshop",
      company: "upGrad & Maretha Mandal Engineering College",
      duration: "August 2023",
      description: "Participated in comprehensive workshop covering HTML, CSS, JavaScript, and modern web development practices. Gained hands-on experience in creating responsive web applications."
    },
    {
      position: "Technology Job Simulation",
      company: "Deloitte (Forage Virtual Internship)",
      duration: "August 2025",
      description: "Completed virtual internship simulation focusing on technology consulting, project management, and problem-solving in corporate technology environments."
    },
    {
      position: "Linux & Network Administration Workshop",
      company: "Cybersena & Maretha Mandal Engineering College",
      duration: "July 2024",
      description: "Completed workshop on Linux system administration and networking fundamentals, gaining practical experience in system configuration and network management."
    }
  ],

  testimonials: [
    {
      name: "Dr. Rajesh Kumar",
      position: "Professor & HOD",
      company: "Computer Science Department, MMEC",
      content: "Kartik has shown exceptional dedication to learning and consistently demonstrates strong problem-solving skills. His projects reflect a deep understanding of both theoretical concepts and practical implementation.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Workshop Instructor",
      company: "upGrad Web Development Program",
      content: "During the web development workshop, Kartik stood out for his quick grasp of concepts and ability to help fellow students. His final project demonstrated creativity and technical proficiency.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arjun Patil",
      position: "Final Year Student",
      company: "Maretha Mandal Engineering College",
      content: "Kartik is a collaborative team member who brings innovative ideas to group projects. His ability to break down complex problems and find efficient solutions is impressive.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ],

  contact: {
    email: "kartiksannavagol@gmail.com",
    phone: "+91 8088397054",
    location: "Belagavi, Karnataka, India",
    availability: "Available for internships, freelance projects, and full-time opportunities after graduation"
  }
};