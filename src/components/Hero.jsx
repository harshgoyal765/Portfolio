import { Mail, Phone, Linkedin, MapPin, ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-950/10 to-background" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-8 animate-fade-in">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm text-purple-300">Available for opportunities</span>
        </div>
        
        {/* Avatar */}
        <div className="relative w-80 h-80 mx-auto mb-8 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-800 to-blue-100 blur-xl opacity-50" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-800 via-blue-100 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
  <img 
    src="./img_.jpeg" 
    alt="HG Logo" 
    className="object-cover w-full h-full"
  />
</div>
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse" />
        </div>

        {/* Name & Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Harsh </span>
          <span className="text-gradient text-shadow-glow">Goyal</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Full Stack Developer • MERN Stack Enthusiast
        </p>
        
        <p className="text-lg text-purple-300/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          MCA Student at MMMUT Gorakhpur | Innovation & Strategy Head at CSSE Society
        </p>

        {/* Contact Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="mailto:18harsh.goyal@gmail.com"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-glass hover-glow transition-all duration-300 hover:bg-white/10"
          >
            <Mail size={18} className="text-purple-400 group-hover:text-purple-300" />
            <span className="text-foreground/80 group-hover:text-foreground text-sm">18harsh.goyal@gmail.com</span>
          </a>
          <a
            href="tel:6397199843"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-glass hover-glow transition-all duration-300 hover:bg-white/10"
          >
            <Phone size={18} className="text-purple-400 group-hover:text-purple-300" />
            <span className="text-foreground/80 group-hover:text-foreground text-sm">+91 6397199843</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harshgoyal20"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-glass hover-glow transition-all duration-300 hover:bg-white/10"
          >
            <Linkedin size={18} className="text-purple-400 group-hover:text-purple-300" />
            <span className="text-foreground/80 group-hover:text-foreground text-sm">LinkedIn</span>
          </a>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-glass">
            <MapPin size={18} className="text-purple-400" />
            <span className="text-foreground/80 text-sm">Pilibhit, UP</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#about"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 glow-box"
        >
          Explore My Work
          <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-purple-400/50" />
      </div>
    </section>
  );
};

export default Hero;
