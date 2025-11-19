import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Terminal,
    title: "Business Consulting",
    desc: "Strategic chaos management for enterprise systems.",
    color: "from-primary to-purple-600"
  },
  {
    icon: Zap,
    title: "Vibecoding Content",
    desc: "High-frequency aesthetic injection for your brand.",
    color: "from-secondary to-blue-600"
  },
  {
    icon: Globe,
    title: "App Development",
    desc: "Full-stack reality distortion fields.",
    color: "from-pink-500 to-rose-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-black/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">OUR SERVICES</span>
          </h2>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Deploying cutting-edge solutions for problems you didn't know you had.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text-muted mb-8 leading-relaxed">{service.desc}</p>

                <a href="#contact" className="text-sm font-bold tracking-widest uppercase border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-all">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
