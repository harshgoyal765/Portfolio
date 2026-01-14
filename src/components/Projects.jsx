import { ExternalLink, Github, Layers, BarChart3, BookOpen, PenLine } from "lucide-react";

const projects = [
  {
    title: "Excel Analytics",
    description: "A powerful analytics platform for processing and visualizing Excel data with interactive dashboards, charts, and real-time insights.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    gradient: "from-blue-500 to-cyan-500",
    icon: BarChart3,
  },
  {
    title: "NeoLearn",
    description: "An e-learning platform with course management, progress tracking, video streaming, and interactive learning modules for students.",
    tags: ["MERN Stack", "Tailwind", "REST API", "JWT"],
    gradient: "from-purple-500 to-pink-500",
    icon: BookOpen,
  },
  {
    title: "Blog Platform",
    description: "A full-featured blogging platform with user authentication, rich text editing, comments, likes, and social sharing features.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Editor.js"],
    gradient: "from-orange-500 to-red-500",
    icon: PenLine,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-glass rounded-3xl overflow-hidden hover-glow transition-all duration-500 h-full flex flex-col">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-white/5 text-foreground/70 text-xs border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-foreground text-sm font-medium transition-all duration-300 border border-white/10 hover:border-purple-500/50">
                      <Github size={18} />
                      Code
                    </button>
                    <button className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium transition-all duration-300 hover:opacity-90`}>
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
