import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Madan Mohan Malaviya University of Technology",
    location: "Gorakhpur, UP",
    period: "July 2024 - June 2026",
    current: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "Mahatma Jyotiba Phule Rohilkhand University",
    location: "Bareilly, UP",
    field: "Mathematics",
    period: "July 2021 - June 2023",
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Mahatma Jyotiba Phule Rohilkhand University",
    location: "Bareilly, UP",
    period: "July 2018",
    color: "from-green-500 to-emerald-500",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className="ml-16 md:ml-0 w-full md:w-1/2 group">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="relative bg-glass rounded-3xl p-6 md:p-8 hover-glow transition-all duration-500 hover:bg-white/10">
                      {edu.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-4">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Currently Pursuing
                        </span>
                      )}
                      
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-4`}>
                        <GraduationCap className="text-white" size={28} />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium mb-3">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      {edu.field && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <span className="text-muted-foreground text-sm">Specialization: </span>
                          <span className="text-foreground font-medium">{edu.field}</span>
                        </div>
                      )}
                    </div>
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

export default Education;
