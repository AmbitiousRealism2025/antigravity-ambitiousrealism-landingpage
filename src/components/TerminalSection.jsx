import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Minimize2, Maximize2, X } from 'lucide-react';

const TerminalSection = () => {
    const [lines, setLines] = useState([
        "> INITIALIZING VIBE_SEQUENCE...",
        "> LOADING ASSETS...",
        "> OPTIMIZING REALITY MATRIX...",
        "> ESTABLISHING SECURE CONNECTION...",
        "> ACCESS GRANTED."
    ]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView || !isTyping) return;

        if (currentLineIndex < lines.length) {
            const line = lines[currentLineIndex];
            if (currentText.length < line.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(line.slice(0, currentText.length + 1));
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentText('');
                }, 500);
                return () => clearTimeout(timeout);
            }
        } else {
            setIsTyping(false);
        }
    }, [currentText, currentLineIndex, lines, isInView, isTyping]);

    // Use setLines to add dynamic content if needed in future
    useEffect(() => {
        const timer = setTimeout(() => {
            setLines(prev => [...prev, "> SYSTEM READY."]);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-32 relative flex justify-center items-center min-h-[80vh]">
            <div className="container max-w-4xl" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="bg-black/90 border border-white/20 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)] font-mono"
                >
                    {/* Terminal Header */}
                    <div className="bg-white/10 p-3 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-xs text-text-muted flex items-center gap-2">
                            <Terminal size={14} />
                            <span>ambitious-realism-cli — v1.0.0</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                            <Minimize2 size={14} />
                            <Maximize2 size={14} />
                            <X size={14} />
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 h-96 overflow-y-auto text-sm md:text-base font-mono">
                        {lines.slice(0, currentLineIndex).map((line, i) => (
                            <div key={i} className="mb-2 text-green-400">
                                {line}
                            </div>
                        ))}
                        <div className="mb-2 text-green-400">
                            {currentText}
                            <span className="animate-pulse inline-block w-2 h-4 bg-green-400 ml-1 align-middle"></span>
                        </div>

                        {!isTyping && (
                            <div className="mt-4 text-white">
                                <span className="text-primary">user@ambitious</span>:<span className="text-secondary">~</span>$ <span className="animate-pulse">_</span>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TerminalSection;
