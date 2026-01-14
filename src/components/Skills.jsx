const skills = [
  { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 85, color: "from-green-400 to-emerald-500" },
  { name: "MongoDB", level: 80, color: "from-green-500 to-lime-500" },
  { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
  { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "Java", level: 75, color: "from-red-400 to-orange-500" },
];

const tags = ["MERN Stack", "REST APIs", "Git & GitHub", "DevOps", "Problem Solving", "100 Days LeetCode", "Responsive Design", "UI/UX"];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Bars */}
          <div className="bg-glass rounded-3xl p-8 space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-foreground font-medium group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags Cloud */}
          <div className="bg-glass rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Competencies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 text-sm font-medium border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-muted-foreground text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100+</div>
                <div className="text-muted-foreground text-sm">LeetCode Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">7+</div>
                <div className="text-muted-foreground text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
