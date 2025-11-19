import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VibeSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    return (
        <section ref={ref} id="ethos" className="py-40 relative overflow-hidden bg-black flex flex-col justify-center min-h-screen">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />

            <motion.div style={{ x: x1 }} className="whitespace-nowrap mb-8 opacity-50">
                <h2 className="text-8xl md:text-[12rem] font-black text-white/5 font-mono leading-none">
                    VIBECODING VIBECODING VIBECODING VIBECODING
                </h2>
            </motion.div>

            <motion.div style={{ x: x2 }} className="whitespace-nowrap opacity-50">
                <h2 className="text-8xl md:text-[12rem] font-black text-transparent font-mono leading-none [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
                    REALISM REALISM REALISM REALISM
                </h2>
            </motion.div>

            <div className="container relative z-10 mt-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-4xl md:text-7xl font-bold mb-12 glow-text">
                        CODE IS POETRY
                    </h3>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-16">
                        We don't just write functions; we compose digital symphonies.
                        Every line of code is a brushstroke on the canvas of the internet.
                        Embrace the chaos. Compile the dream.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="glass-panel bg-white/5 hover:bg-white/10">
                            <h4 className="text-primary text-xl font-bold mb-4">CHAOS ENGINEERING</h4>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Systems are inherently chaotic. We don't fight entropy; we surf it. Building resilience through controlled failure.
                            </p>
                        </div>
                        <div className="glass-panel bg-white/5 hover:bg-white/10">
                            <h4 className="text-secondary text-xl font-bold mb-4">AESTHETIC DRIVEN</h4>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Functionality without form is a soul without a body. We prioritize the "vibe" as a core architectural component.
                            </p>
                        </div>
                        <div className="glass-panel bg-white/5 hover:bg-white/10">
                            <h4 className="text-white text-xl font-bold mb-4">REALITY PATCHING</h4>
                            <p className="text-text-muted text-sm leading-relaxed">
                                The digital world is the new real. We patch the fabric of reality to upgrade the user experience.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VibeSection;
