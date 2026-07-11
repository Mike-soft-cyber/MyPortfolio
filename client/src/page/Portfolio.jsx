import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
// import dbsl from '@/photo/dbsl.png' // temporarily unused — DBSL project commented out below
import moran from '@/photo/moran.png'
import kcggra from '@/photo/kcggra.png'
import me from '@/photo/me.jpeg'
import { Layers } from 'lucide-react'
import { Server } from 'lucide-react'
import { Database } from 'lucide-react'
import { Cpu } from 'lucide-react'
import { Download } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import { ExternalLink, Code, FileText, CheckCircle } from 'lucide-react'
import { motion } from "framer-motion";

export default function PortFolio(){

  const projects = [
    // Temporarily removed — DBSL project still in progress. Uncomment when ready.
    // {
    //   id: 1,
    //   title: "Digital Blueprint For Smart Learning",
    //   shortDesc: "A high-performance automated CBC/CBE document generator built with MERN Stack",
    //   longDesc: "The Digital Blueprint for Smart Learning (DBSL) is an online platform designed to automate the preparation of essential classroom documents for teachers under the Competency-Based Curriculum (CBC). By generating professional, CBC-aligned PDFs (Lesson Concept Breakdowns, Schemes of Work, Lesson Plans, Lesson Notes, and Exercises), DBSL saves teachers significant preparation time, allowing them to focus on direct teaching and student engagement.",
    //   stack: ["MongoDB", "Express", "React", "Node.js", "ShadCN", "Tailwind"],
    //   image: dbsl,
    //   demo: "https://dbsl-liart.vercel.app/",
    //   github: "https://github.com/Mike-soft-cyber/dbsl.git",
    //   problem: "Kenyan teachers spend excessive time manually creating CBC (Competency-Based Curriculum) documents like lesson plans, schemes of work, and teaching notes - a repetitive, time-consuming process that takes away from actual teaching.",
    //   solution: "Automatically creates CBC-compliant educational documents that allows teachers to generate professional documents in minutes instead of hours",
    //   features: ["Smart Document Generation", "Content Processing", "CBC Curriculum Integration", "School Management"],
    //   category: "FULL STACK"
    // },
    {
      id: 2,
      title: "Dhahabu Themanini Initiate Database Management",
      shortDesc: "A comprehensive database system to store and access information on the families who come through our programs.",
      longDesc: "Dhahabu Themanini enrolls different Cohorts every year for their initiation Program for boys in their adolescent period transitioning to high school. Parent's want to be aware of how Dhahabu Themanini is beneficial for their child in his academic and wellness as they are mentored throughout their high school period and whether or not it has a positive impact.",
      stack: ["MongoDB", "Express", "React", "Node.js", "ShadCN", "Tailwind"],
      image: moran,
      demo: "https://dhahabuthemanini.org",
      github: "https://github.com/Dmwangi9/MORAN-PROJECT.git",
      problem: "Dhahabu Themanini currently lacks a centralized system to manage family and mentee information across its various programs",
      solution: "A comprehensive database system that serves as a single source of truth for all participant data, enabling staff to efficiently store, access, and analyze information about the families and mentees in your programs. This system would grow with participants as they move through different program stages and provide actionable insights to improve mentoring outcomes.",
      features: ["Centralized Data Management", "Progress Tracking", "Analytics and Reporting"],
      category: "FULL STACK"
    },
    {
      id: 3,
      title: "KCGGRA",
      shortDesc: "A unified community platform for security, subscriptions, and civic engagement, built for a Nairobi neighborhood association.",
      longDesc: "KCGGRA is a digital neighborhood headquarters for a residents' association in Nairobi. It replaces scattered phone calls, cash collections, and word-of-mouth reporting with a single portal: a panic button that alerts guards and neighbors at once, QR visitor passes so residents no longer have to call the gate, M-Pesa-based subscription payments with a live fundraising tracker, street-level community groups, USSD access for residents without smartphones, and automatic alerts when Nairobi County posts zoning or public participation notices that affect the area.",
      stack: ["MongoDB", "Express", "React", "Node.js", "CSS"],
      image: kcggra,
      demo: "#",
      github: "https://github.com/Mike-soft-cyber/kcggra.git",
      problem: "The neighborhood association struggled with disorganized security reporting, inconsistent subscription collection that stalled major projects like gates and solar, and communication gaps between elderly residents, absentee property owners, caretakers, and neighbors.",
      solution: "A single portal residents access from any phone: a panic button with GPS alerts, QR-code visitor passes, photo-evidence incident reports, automatic M-Pesa subscription reminders with a public progress tracker, street-level groups, proxy accounts for residents who can't use smartphones, USSD shortcode access, and automatic SMS alerts when Nairobi County posts notices affecting the area.",
      features: ["Panic Button & Guard Tracking", "M-Pesa Subscription Payments", "Street-Level Community Groups", "County Zoning Alerts"],
      category: "FULL STACK"
    }
  ];

  const skills = [
    {
      id: 1,
      category: "Frontend", 
      items: ["HTML", "CSS", "React", "Tailwind", "ShadCN"], 
      icon: <Layers />
    },
    {
      id: 2,
      category: "Backend", 
      items: ["REST APIs", "Express", "Node.js", "Python"], 
      icon: <Server />
    },
    {
      id: 3,
      category: "Database", 
      items: ["MongoDB", "Mongoose", "MySQL"], 
      icon: <Database />
    },
    {
      id: 4,
      category: "DevOps/Tools", 
      items: ["Git", "Vercel", "Render"], 
      icon: <Cpu />
    }
  ];

  const contacts = [
    {
      id: 1,
      site: "Email", 
      place: "kariukimichaelw@gmail.com", 
      icon: <Mail />,
      link: "mailto:kariukimichaelw@gmail.com"
    },
    {
      id: 2,
      site: "Linkedin", 
      place: "www.linkedin.com/in/michael-kariuki-4070022b3", 
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/michael-kariuki-4070022b3"
    },
    {
      id: 3,
      site: "GitHub", 
      place: "Mike-soft-cyber", 
      icon: <Github />,
      link: "https://github.com/Mike-soft-cyber"
    }
  ];

  return(
    <div className="min-h-screen bg-[#020C0F] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Bricolage Grotesque', sans-serif; }
        .font-body { font-family: 'Instrument Sans', sans-serif; }
        .font-mono-label { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <h1 className="font-display text-2xl font-bold tracking-tight">MICHAEL KARIUKI WACHIRA</h1>
        </div>
        <div>
          <ul className="flex gap-6 font-mono-label text-sm tracking-wide">
            <li><a href="#home" className="hover:text-[#15E81D] transition font-medium" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>Home</a></li>
            <li><a href="#projects" className="hover:text-[#15E81D] transition font-medium" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>Projects</a></li>
            <li><a href="#skills" className="hover:text-[#15E81D] transition font-medium" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>Skills</a></li>
            <li><a href="#about" className="hover:text-[#15E81D] transition font-medium" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>About</a></li>
            <li><a href="#contact" className="hover:text-[#15E81D] transition font-medium" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-16">
        <Badge variant="secondary" className="mb-4 bg-[#15E81D] text-black font-mono-label text-xs tracking-wide">Available for Hire</Badge>
        <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
          Building Scalable <span className="text-[#15E81D]">Full Stack</span> Applications.
        </h1>
        <p className="font-body text-lg text-gray-400 mb-8 max-w-2xl">
          I'm a MERN Stack Developer specializing in crafting robust backend architectures and highly interactive frontend experiences.
        </p>
        <div className="flex gap-4">
          <Button
            className="bg-[#378740] hover:bg-[#15E81D] text-white p-6"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="bg-[#08262E] border-[#08262E] hover:border-[#15E81D] hover:text-[#15E81D] p-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Contact Me
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-[#08262E]">
        <h3 className="font-mono-label text-sm uppercase tracking-wider text-gray-400 mb-2">PORTFOLIO</h3>
        <h2 className="font-display text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(p => (
            <Dialog key={p.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden bg-[#0f3743] border-gray-700 hover:border-[#15E81D] transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#15E81D]/20">
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        width={640}
                        height={256}
                        className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-[#15E81D] hover:bg-[#378740] text-black">
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-[#08262E] text-[#15E81D] font-mono-label text-xs tracking-wide px-3 py-1">{p.category}</Badge>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-gray-400 hover:text-[#15E81D]"
                            aria-label={`View live demo of ${p.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(p.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-gray-400 hover:text-[#15E81D]"
                            aria-label={`View source code for ${p.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(p.github, '_blank');
                            }}
                          >
                            <Code className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <CardTitle className="font-display text-xl font-semibold tracking-tight mb-2">{p.title}</CardTitle>
                      <p className="font-body text-gray-400 text-sm mb-4">{p.shortDesc}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {p.stack.slice(0, 3).map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="font-mono-label text-xs border-gray-600 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {p.stack.length > 3 && (
                          <Badge variant="outline" className="font-mono-label text-xs border-gray-600 text-gray-300">
                            +{p.stack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto overscroll-contain bg-[#0a2029] text-white border-[#15E81D] p-0">
                <div className="relative">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    width={800}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2029] to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-[#15E81D] text-black font-mono-label text-xs tracking-wide mb-2">
                      {p.category}
                    </Badge>
                    <DialogTitle asChild>
                      <h1 className="font-display text-3xl font-bold tracking-tight text-white">{p.title}</h1>
                    </DialogTitle>
                    <DialogDescription asChild>
                      <p className="font-body text-gray-300 mt-2">{p.shortDesc}</p>
                    </DialogDescription>
                  </div>
                </div>
                
                <div className="p-8 space-y-8">
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-6 bg-[#15E81D] rounded-full"></div>
                      <h2 className="font-display text-xl font-bold tracking-tight text-white">Overview</h2>
                    </div>
                    <p className="font-body text-gray-300 leading-relaxed">
                      {p.longDesc}
                    </p>
                  </section>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#08262E] p-6 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-4 bg-red-500 rounded-full"></div>
                        <h3 className="font-display font-bold text-white">The Problem</h3>
                      </div>
                      <p className="font-body text-gray-300 text-sm leading-relaxed">
                        {p.problem}
                      </p>
                    </div>
                    
                    <div className="bg-[#08262E] p-6 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-4 bg-[#15E81D] rounded-full"></div>
                        <h3 className="font-display font-bold text-white">The Solution</h3>
                      </div>
                      <p className="font-body text-gray-300 text-sm leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>
                  
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-6 bg-[#15E81D] rounded-full"></div>
                      <h2 className="font-display text-xl font-bold tracking-tight text-white">Key Features</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {p.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 bg-[#08262E] p-4 rounded-lg border border-gray-700"
                        >
                          <CheckCircle className="h-5 w-5 text-[#15E81D] flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-body font-medium text-white mb-1">{feature}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-6 bg-[#15E81D] rounded-full"></div>
                      <h2 className="font-display text-xl font-bold tracking-tight text-white">Tech Stack</h2>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {p.stack.map((tech, index) => (
                        <Badge 
                          key={index} 
                          className="font-mono-label bg-[#15E81D]/20 text-[#15E81D] border-none py-2 px-4"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </section>
                </div>
                
                <DialogFooter className="p-6 border-t border-gray-800 bg-[#08262E] sticky bottom-0">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Button 
                      asChild 
                      className="bg-[#15E81D] hover:bg-[#378740] text-black flex-1"
                    >
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="border-[#15E81D] text-[#15E81D] hover:bg-[#15E81D] hover:text-black flex-1"
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 bg-[#020C0F]">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-mono-label text-sm uppercase tracking-wider text-gray-400 mb-2 text-center">EXPERTISE</h3>
          <h1 className="font-display text-3xl font-bold tracking-tight mb-12 text-center">Technical Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(s => (
              <Card key={s.id} className="h-full bg-[#08262E] border-gray-700 hover:border-[#15E81D] transition-colors">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="p-3 bg-[#15E81D]/20 rounded-full mb-4">
                    <div className="text-[#15E81D]">{s.icon}</div>
                  </div>
                  <CardTitle className="font-display text-lg font-semibold text-white">{s.category}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <ul className="flex flex-wrap justify-center gap-2">
                    {s.items.map((item, index) => (
                      <li key={index}>
                        <Badge 
                          variant="outline" 
                          className="font-mono-label border-gray-600 text-gray-300 hover:border-[#15E81D] hover:text-[#15E81D] transition-colors"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-[#08262E]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#15E81D] to-transparent opacity-20 blur-lg rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={me} 
                  alt="Michael Kariuki"
                  width={448}
                  height={448}
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto relative z-10"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-mono-label text-sm uppercase tracking-wider text-gray-400">About Me</h2>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Passionate FullStack Engineer</h1>
                <p className="font-body text-gray-300">
                  I specialize in solving complex problems with the MERN stack. My journey began with a curiosity about how the web works, which evolved into a professional career focused on performance, accessibility, and user-centric design.
                </p>
                <p className="font-body text-gray-300">
                  I thrive in collaborative environments and enjoy taking ownership of features from architectural planning to production deployment. Whether it's optimizing database queries or crafting fluid UI transitions, I'm dedicated to code quality.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <Card className="w-fit bg-[#0f3743] border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-center text-[#15E81D]">{projects.length}</p>
                  </CardContent>
                  <CardFooter className="justify-center border-t border-gray-700 px-6 py-3">
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </CardFooter>
                </Card>

                <Button asChild className="bg-[#15E81D] hover:bg-[#378740] text-black">
                  <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Michael_Kariuki_Resume.pdf">
                    <Download className="mr-2" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-[#020C0F]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-mono-label text-sm uppercase tracking-wider text-gray-400 mb-2">CONTACT</h2>
            <h1 className="font-display text-3xl font-bold tracking-tight mb-4 text-white">Let's Build Something Great</h1>
            <p className="font-body text-gray-300 mb-8 max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, reach out directly below — I'll get back to you as soon as I can!
            </p>

            <div className="space-y-6">
              {contacts.map(c => (
                <div key={c.id} className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#15E81D]/20 rounded-full group-hover:bg-[#15E81D]/30 transition-colors">
                    <div className="text-[#15E81D]">{c.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{c.site}</h3>
                    <a 
                      href={c.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#15E81D] transition-colors"
                    >
                      {c.place}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800 bg-[#020C0F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-[#15E81D]">MK</h1>
              <h3 className="text-lg font-semibold text-white">DevPortfolio</h3>
            </div>
            
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} MERN Developer. Built with React & Tailwind.
            </p>
            
            <div className="flex gap-4">
              {contacts.map(c => (
                <a 
                  key={c.id}
                  href={c.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#15E81D] transition-colors p-2 hover:bg-[#15E81D]/10 rounded-full"
                  aria-label={c.site}
                >
                  {c.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}