import { Code2, Rocket, Target, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "MERN Stack", desc: "Full-stack expertise" },
  { icon: Rocket, label: "3+ Projects", desc: "End-to-end solutions" },
  { icon: Target, label: "Problem Solver", desc: "100 Days LeetCode" },
  { icon: Zap, label: "Fast Learner", desc: "Constantly growing" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Passionate about <span className="text-gradient">building</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="bg-glass rounded-3xl p-8 hover-glow transition-all duration-500">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing my MCA and passionate about becoming a strong Full Stack Developer. 
                I've built practical, end-to-end web applications like{" "}
                <span className="text-purple-400 font-semibold">Excel Analytics</span>,{" "}
                <span className="text-purple-400 font-semibold">NeoLearn</span>, and a{" "}
                <span className="text-purple-400 font-semibold">Blog Platform</span> using the MERN stack.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I enjoy solving real-world problems through clean UI design and robust backend logic. 
                I'm constantly improving my skills in JavaScript, modern frameworks, and backend APIs, 
                while also exploring DevOps and deployment tools.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities — internships or full-time — where I can apply my knowledge, 
                grow with real-world experience, and contribute meaningfully to impactful projects.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-glass rounded-2xl p-6 hover-glow transition-all duration-500 hover:bg-white/10 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
