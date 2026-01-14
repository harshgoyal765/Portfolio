import { Mail, Phone, Linkedin, MapPin, Send, Sparkles } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "18harsh.goyal@gmail.com",
    href: "mailto:18harsh.goyal@gmail.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6397199843",
    href: "tel:6397199843",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "harshgoyal20",
    href: "https://www.linkedin.com/in/harshgoyal20",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pilibhit, Uttar Pradesh",
    href: null,
    color: "from-orange-500 to-red-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question or just want to say hi, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={index}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 bg-glass rounded-2xl hover-glow transition-all duration-500 hover:bg-white/10 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form className="bg-glass rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-purple-400" size={20} />
                <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted-foreground text-sm mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-muted-foreground text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-muted-foreground text-sm mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.02] glow-box"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
