import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Code, Brain, Database, Globe, Award, BookOpen, User, Briefcase, FolderOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const experiences = [
    {
      company: "Panasonic",
      role: "AI/ML Intern",
      period: "June 2025 – August 2025",
      achievements: [
        "Developed an intelligent self-help chatbot to replace Panasonic's outdated FAQ system, boosting customer engagement",
        "Implemented local inference using Ollama to embed product manuals and customer reviews for offline understanding",
        "Built a robust RAG pipeline with intelligent fallback logic, keyword-based dynamic suggestions, and query matching",
        "Integrated real-time summarization and context-aware response generation to enhance support interactions"
      ]
    },
    {
      company: "Exceldes Interiors",
      role: "Technology Development Intern",
      period: "June 2024 – August 2024",
      achievements: [
        "Built a full-stack AI-powered interior design website that converts real room photos into personalized design makeovers",
        "Enabled seamless user journey with side-by-side comparisons, intuitive uploads, and style-driven design previews",
        "Implemented a vector-based recommendation engine to suggest layout ideas aligned with user intent and room type",
        "Integrated a responsive chatbot offering contextual interior tips, pricing in INR, and India-first sourcing suggestions"
      ]
    },
    {
      company: "Vedanta IAS Academy",
      role: "Full-Stack Developer",
      period: "January 2024 – February 2024",
      achievements: [
        "Built a full-stack web app to help UPSC students analyze geopolitical topics through interactive, model-driven insights",
        "Developed custom prompt pipelines to generate SWOT, PEST, key entities and historical timelines from user input",
        "Implemented dynamic tab-based views with smooth transitions, data fallback states, and responsive content handling",
        "Enabled downloadable PDF notes using jsPDF and html2canvas to support offline revision and interview preparation"
      ]
    }
  ];

  const projects = [
    {
      title: "Panasonic Self-Help Chatbot",
      tech: "Ollama, ChromaDB, React, Node.js",
      github: "https://github.com/pratyushcodes-source/PANASONIC",
      live: "https://panasonic-chatbot.vercel.app/",
      description: [
        "An AI chatbot that answers product queries by extracting data from 50+ Panasonic manuals and 1000+ user reviews",
        "Reduced dependency on static FAQ pages by 80% through vector search using ChromaDB and Ollama LLMs",
        "Implemented dynamic follow-up suggestions in React, improving user engagement and session duration by 2x"
      ]
    },
    {
      title: "Exceldes Interior AI Tool",
      tech: "React, Node.js, MongoDB, OpenAI, Pinecone, Clerk",
      github: "https://github.com/pratyushcodes-source/ExcelDes-Interior-Design",
      live: "https://excel-des-interior-design-t6ps.vercel.app/",
      description: [
        "Built a full-stack AI tool that generates GPT-4 Vision-based makeover suggestions for uploaded room images",
        "Used OpenAI embeddings + Pinecone for storing searchable design ideas; stored user data in MongoDB",
        "Integrated Clerk auth, RESTful APIs (Node.js), and Multer for secure image handling and login flow"
      ]
    },
    {
      title: "Toxic Comments Classifier",
      tech: "Python, NLP, Scikit-learn, NLTK",
      github: "https://github.com/pratyushcodes-source/ToxicCommentsClassifier",
      description: [
        "Built a deployed multi-label NLP model to classify toxic, obscene, and hateful comments",
        "Achieved 91.8% accuracy and 0.97 ROC-AUC on the Kaggle dataset of 7,000+ comments",
        "Improved moderation with 0.91 toxic and 0.81 insult precision; visualized ROC and classification metrics"
      ]
    },
    {
      title: "ShopSage: Multi-Agent AI Shopping Assistant",
      tech: "LangGraph, LangChain, Streamlit, Python",
      github: "https://github.com/pratyushcodes-source/ShopSage",
      description: [
        "Built a multimodal AI app to recognize products from images and retrieve Flipkart/Amazon shopping links",
        "Deployed a 3-agent system (vision, search, LLM) via LangGraph for fully automated product assistance",
        "Achieved 85%+ product recognition accuracy on 100+ test images using CLIP-based models",
        "Enabled natural-language Q&A with real-time search and Wikipedia-based context retrieval"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Python", "SQL"],
    "Libraries / Frameworks": ["Pandas", "Numpy", "Matplotlib", "Seaborn", "MoviePy", "BeautifulSoup", "Tensorflow"],
    "Machine Learning": ["Regression", "Classification", "Clustering", "Neural Networks", "Deep Learning"],
    "AI Tools": ["GPT-4 Vision", "Whisper", "Ollama", "LangChain", "LangGraph", "scikit-learn", "NLP"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Databases & Tools": ["MongoDB", "PostgreSQL", "Pinecone", "ChromaDB", "Git", "VS Code", "Jupyter"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PK
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className={`max-w-4xl mx-auto text-center px-6 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            PRATYUSH KUMAR
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8 font-light">
            AI/ML Engineer • Full-Stack Developer • Tech Innovator
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems. 
            Specialized in AI/ML, full-stack development, and creating impactful digital experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:pratyushkr1002@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/pratyushcodes-source" className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pratyush-kumar-7b844a216/" className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="tel:+919560388849" className="p-3 bg-white/10 rounded-full hover:bg-purple-500/20 transition-colors">
              <Phone size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <User className="text-purple-400" size={36} />
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer and Electronics Engineering student at <strong className="text-purple-400">Thapar Institute of Engineering and Technology</strong> 
                . I'm passionate about leveraging AI and machine learning to create innovative solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from developing intelligent chatbots for major corporations like Panasonic to creating 
                full-stack AI applications that transform how users interact with technology. I specialize in building 
                end-to-end solutions that combine cutting-edge AI with intuitive user experiences.
              </p>

              <div className="flex items-center space-x-4 text-purple-300">
                <MapPin size={20} />
                <span>New Delhi, India</span>
              </div>

              <div className="flex items-center space-x-4 text-purple-300">
                <BookOpen size={20} />
                <span>B.E. Computer & Electronics Engineering • 2022-Present</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <Brain className="text-purple-400 mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">AI/ML Focus</h3>
                <p className="text-sm text-gray-400">Specialized in NLP, computer vision, and intelligent systems</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                <Globe className="text-blue-400 mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Full-Stack</h3>
                <p className="text-sm text-gray-400">React, Node.js, MongoDB, and modern web technologies</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                <Database className="text-green-400 mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Data Science</h3>
                <p className="text-sm text-gray-400">Advanced analytics, ML pipelines, and data visualization</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                <Code className="text-orange-400 mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Problem Solver</h3>
                <p className="text-sm text-gray-400">350+ DSA problems solved across multiple platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <Briefcase className="text-purple-400" size={36} />
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.company}</h3>
                    <h4 className="text-xl text-white mb-2">{exp.role}</h4>
                  </div>
                  <span className="text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <FolderOpen className="text-purple-400" size={36} />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a href={project.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-purple-300 text-sm mb-4 font-medium">{project.tech}</p>
                
                <ul className="space-y-2">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <Brain className="text-purple-400" size={36} />
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-lg font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center gap-3">
              <Award className="text-yellow-400" size={28} />
              Achievements & Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-bold text-yellow-400 mb-3">Notable Achievements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>350+ DSA Problems Solved</strong> across LeetCode, GeeksforGeeks, and Codeforces</li>
                  <li>• <strong>Silver Medalist, Mathematics Olympiad</strong> – Delhi regional round</li>
                  <li>• <strong>Runner-up, Table Tennis</strong> – Thaparlympics 2025</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="font-bold text-blue-400 mb-3">Professional Certifications</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>AI & Machine Learning Bootcamp</strong> (Udemy)</li>
                  <li>• <strong>LLM Engineering: Master AI, LLMs & Agents</strong> (Udemy)</li>
                  <li>• Multiple internship completion certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <Mail className="text-purple-400" size={36} />
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology. 
              Let's connect and build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-500/20">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:pratyushkr1002@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                pratyushkr1002@gmail.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-xl border border-blue-500/20">
              <Phone className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+919560388849" className="text-blue-400 hover:text-blue-300 transition-colors">
                +91 9560388849
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/pratyushcodes-source" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/pratyush-kumar-7b844a216/" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2025 Pratyush Kumar. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
