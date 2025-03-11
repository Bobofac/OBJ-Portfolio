
import { useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Typewriter from 'typewriter-effect';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('animate-fade-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('.section-fade').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <Typewriter
                options={{
                  strings: ['Développeur Frontend', 'Créateur Web', 'Concepteur UI/UX'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <p className="text-xl text-foreground/80 mb-8">Création d'expériences web magnifiques et responsives</p>
            <a href="https://www.linkedin.com/in/oumar-bobo-diallo-3b6b92340/" className="inline-flex items-center px-6 py-3 rounded-full bg-violet-500 text-white hover:bg-violet-600 transition-colors">
              Me contacter
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/lovable-uploads/1ea884da-bca4-413a-b5a5-4177be2d0856.png"
                alt="Portrait du développeur"
                className="rounded-full w-full h-full object-cover shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-violet-500/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-violet-50 section-fade">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">À Propos de Moi</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Je suis un développeur frontend passionné avec un oeil aiguisé pour le design et l'expérience utilisateur. 
            Je me spécialise dans la création d'applications web réactives et intuitives en utilisant les technologies modernes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 section-fade">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-violet-50 section-fade">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets Récents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="glass rounded-lg overflow-hidden group hover:scale-105 transition-transform">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2">
                    <a href={project.github} className="p-2 hover:text-violet-500" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="p-2 hover:text-violet-500" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 section-fade">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Me Contacter</h2>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/Bobofac" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-violet-500">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oumar-bobo-diallo-3b6b92340/" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-violet-500">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/boboface__omar/" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-violet-500">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/omar.diallo.792740/" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-violet-500">
              <Facebook size={24} />
            </a>
            <a href="mailto:juice.omar1@gmail.com" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:text-violet-500">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const skills = [
  "React", "TypeScript", "Tailwind CSS", "Next.js",
  "JavaScript", "HTML5", "CSS3", "Git",
  "Node.js", "REST APIs", "Design Responsive", "UI/UX"
];

const projects = [
  {
    title: "Plateforme E-commerce",
    description: "Une plateforme e-commerce moderne construite avec React et Node.js",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Application de Gestion",
    description: "Une application collaborative de gestion des tâches",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Tableau de Bord Météo",
    description: "Application de suivi météorologique en temps réel",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
  }
];

export default Index;
