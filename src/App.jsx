import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Linkedin, Github, Mail, Instagram, Phone, Sparkles, Code, Palette, Layers } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Sparkles, color: 'from-purple-400 to-pink-400' },
    { id: 'about', label: 'About Me', icon: Code, color: 'from-violet-400 to-purple-400' },
    { id: 'services', label: 'My Services', icon: Palette, color: 'from-fuchsia-400 to-purple-400' },
    { id: 'projects', label: 'My Projects', icon: Layers, color: 'from-pink-400 to-purple-400' },
    { id: 'contact', label: 'Contact Me', icon: Mail, color: 'from-purple-400 to-violet-400' }
  ];

  const projects = [
    {
      title: "Restaurant App UI",
      description: "A modern food delivery app focused on user experience and minimalism.",
      figmaLink: "https://www.figma.com/design/5F6ZUfcR0PuKM88YIp7erG/Untitled?node-id=0-1&t=lCvzG8teG8qwa3c7-1",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const services = [
    {
      title: "UX/UI Design",
      description: "User-centered design solutions that prioritize accessibility and usability",
      icon: Palette
    },
    {
      title: "Web Development",
      description: "Bringing designs to life with clean, efficient code",
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white font-sans overflow-x-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Cursor follower effect */}
      <div 
        className="hidden md:block fixed w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)'
        }}
      />

      {/* Floating Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform group"
        aria-label="Open menu"
      >
        <div className="space-y-1.5">
          <div className="w-6 h-0.5 bg-white transition-all group-hover:w-7"></div>
          <div className="w-6 h-0.5 bg-white transition-all group-hover:w-5"></div>
          <div className="w-6 h-0.5 bg-white transition-all group-hover:w-7"></div>
        </div>
      </button>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl animate-fade-in">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <div className="h-full flex items-center justify-center px-6">
            <nav className="max-w-2xl w-full">
              <div className="grid gap-4">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className="group relative overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="relative flex items-center justify-between p-6 border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm rounded-lg group-hover:border-purple-400 transition-all">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon size={20} />
                          </div>
                          <span className="text-xl md:text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight size={24} className="text-purple-400 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl relative z-10 text-center">
            <div className="overflow-hidden mb-6">
              <h1 className="text-6xl md:text-9xl font-bold animate-fade-in bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Jamal Hriche
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <p className="text-2xl md:text-4xl text-purple-200 animate-fade-in-delay">
                UX/UI Designer crafting accessible,
                <br />
                minimal, and innovative experiences
              </p>
            </div>
            <div className="flex gap-4 justify-center animate-fade-in-delay-2">
              <button 
                onClick={() => setActiveSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center gap-2 rounded-full"
              >
                View Projects <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-500/20 transition-all rounded-full"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="relative min-h-screen px-6 py-32">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
            <div className="space-y-8 text-xl leading-relaxed">
              <p className="text-purple-100 text-2xl">
                I'm a UX/UI designer who believes that great design should be accessible to everyone, 
                elegantly simple, and push the boundaries of what's possible.
              </p>
              <p className="text-purple-100 text-xl">
                I began my journey as a web developer, which gave me a solid technical foundation and 
                understanding of how digital products are built. This experience now informs my design 
                decisions, allowing me to create experiences that are not only beautiful but also 
                technically feasible and performant.
              </p>
              <p className="text-purple-100 text-xl">
                Today, I focus on designing user interfaces that prioritize accessibility, embrace 
                minimalism for clarity, and constantly push creative boundaries to deliver innovative, 
                engaging experiences.
              </p>
              
              <div className="pt-12">
                <h3 className="text-3xl font-bold mb-8 text-purple-300">Core Values</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all rounded-2xl">
                    <h4 className="font-bold text-2xl mb-3 text-purple-300">Accessibility</h4>
                    <p className="text-gray-300 text-base">Design for everyone, regardless of ability</p>
                  </div>
                  <div className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all rounded-2xl">
                    <h4 className="font-bold text-2xl mb-3 text-purple-300">Minimalism</h4>
                    <p className="text-gray-300 text-base">Less is more, clarity over clutter</p>
                  </div>
                  <div className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all rounded-2xl">
                    <h4 className="font-bold text-2xl mb-3 text-purple-300">Innovation</h4>
                    <p className="text-gray-300 text-base">Push boundaries, explore new possibilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="relative min-h-screen px-6 py-32">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">My Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="group relative overflow-hidden border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 transition-all rounded-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={36} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-300">{service.title}</h3>
                      <p className="text-gray-300 text-lg">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="relative min-h-screen px-6 py-32 flex items-center justify-center">
          <div className={`${projects.length === 1 ? 'max-w-4xl' : 'max-w-6xl'} mx-auto relative z-10`}>
            <h2 className="text-5xl md:text-8xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">My Projects</h2>
            <div className={projects.length === 1 ? 'flex justify-center' : 'grid md:grid-cols-2 gap-8'}>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm p-16 rounded-3xl text-center hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-purple-300">{project.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{project.description}</p>
                  {project.figmaLink && (
                    <a 
                      href={project.figmaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl text-purple-300 hover:text-purple-400 transition-colors group"
                    >
                      🔗 View on Figma
                      <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="relative min-h-screen px-6 py-32 flex items-center">
          <div className="max-w-4xl mx-auto w-full relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-3xl text-purple-100 mb-16 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:jamalhriche111@gmail.com" className="flex items-center gap-6 text-2xl hover:text-purple-400 transition-colors group p-6 border-2 border-purple-500/30 rounded-2xl hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 bg-slate-900/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <span className="text-lg md:text-xl">jamalhriche111@gmail.com</span>
              </a>

              <a href="tel:+212681368582" className="flex items-center gap-6 text-2xl hover:text-purple-400 transition-colors group p-6 border-2 border-purple-500/30 rounded-2xl hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 bg-slate-900/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <span className="text-lg md:text-xl">+212 681368582</span>
              </a>
              
              <div className="pt-8">
                <p className="text-purple-300 mb-6 text-xl">Find me on</p>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/jamalhriche" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-2 border-purple-500/30 rounded-full flex items-center justify-center hover:border-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all" aria-label="LinkedIn">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://www.instagram.com/hriche._.jamal?igsh=MTJrMXlqbnhtczI3eQ==" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-2 border-purple-500/30 rounded-full flex items-center justify-center hover:border-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all" aria-label="Instagram">
                    <Instagram size={28} />
                  </a>
                  <a href="https://github.com/HRICHE1" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-2 border-purple-500/30 rounded-full flex items-center justify-center hover:border-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all" aria-label="GitHub">
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}