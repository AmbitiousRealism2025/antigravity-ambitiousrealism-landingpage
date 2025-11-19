import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Cpu, Globe } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const [floatingIcons, setFloatingIcons] = useState([]);

    useEffect(() => {
        // Generate icons only on client-side to avoid SSR mismatches
        const icons = [Code, Terminal, Cpu, Globe];
        const newIcons = [...Array(15)].map((_, i) => ({
            Icon: icons[i % icons.length],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 30 + 20,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 2
        }));
        setFloatingIcons(newIcons);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-bg">
            {/* Parallax Background */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-color)_0%,_transparent_70%)] opacity-20 blur-[100px]" />
                {floatingIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-primary"
                        style={{ top: item.top, left: item.left }}
                        animate={{ y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                    >
                        <item.Icon size={item.size} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">AMBITIOUS</span>

                        <div className="relative inline-block">
                            <span className="block relative z-20 text-white drop-shadow-[0_0_15px_rgba(176,38,255,0.8)]">REALISM</span>
                            <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-80 z-10 glitch-1 mix-blend-screen">REALISM</span>
                            <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-80 z-10 glitch-2 mix-blend-screen">REALISM</span>
                        </div>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-xl md:text-2xl text-text-muted mb-10 font-light tracking-wide">
                        We bridge the gap between <span className="text-primary font-mono">chaos</span> and <span className="text-secondary font-mono">structure</span>.
                        <br />
                        Vibecoding for the post-ironic web.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href="#pricing" className="btn-primary px-8 py-4 rounded-full text-lg font-bold tracking-wider">
                            DEPLOY REALITY
                        </a>
                        <a href="#ethos" className="text-text-muted hover:text-white transition-colors font-mono text-sm tracking-widest border-b border-transparent hover:border-white pb-1">
                            READ MANIFESTO
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        className="w-1 h-2 bg-primary rounded-full"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
