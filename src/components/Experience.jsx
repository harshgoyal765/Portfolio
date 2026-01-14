import { Briefcase, Award, Calendar, ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-glass rounded-3xl p-8 h-full hover-glow transition-all duration-500 hover:bg-white/10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Briefcase className="text-white" size={28} />
                </div>
                <ArrowUpRight className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                <span>June 2025 - August 2025 (3 months)</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Web Developer</h3>
              <p className="text-purple-400 font-semibold text-lg mb-4">Zidio Development</p>
              
              <p className="text-muted-foreground leading-relaxed">
                Working on full stack web development projects, building end-to-end solutions 
                using modern technologies and best practices. Collaborating with teams to deliver 
                high-quality applications.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "Node.js", "MongoDB"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-glass rounded-3xl p-8 h-full hover-glow transition-all duration-500 hover:bg-white/10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Award className="text-white" size={28} />
                </div>
                <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">
                  Certified
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Java Programming</h3>
              <p className="text-yellow-400 font-semibold text-lg mb-4">Internship Certificate</p>
              
              <p className="text-muted-foreground leading-relaxed">
                Completed comprehensive Java programming internship with hands-on experience 
                in object-oriented programming, data structures, and application development.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {["Java", "OOP", "Data Structures"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
