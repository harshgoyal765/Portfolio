import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient mb-2 inline-block">
              Harsh Goyal
            </a>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="text-pink-500" size={14} fill="currentColor" /> in India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:18harsh.goyal@gmail.com"
              className="w-10 h-10 rounded-xl bg-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={18} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshgoyal20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={18} className="text-muted-foreground" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={18} className="text-muted-foreground" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-glass hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-muted-foreground text-sm">Back to top</span>
            <ArrowUp size={16} className="text-purple-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Harsh Goyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
