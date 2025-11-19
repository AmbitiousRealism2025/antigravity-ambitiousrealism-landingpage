import React from 'react';
import { Code, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Code className="text-primary" size={32} />
                            <span className="font-bold text-xl tracking-wider">AMBITIOUS<span className="text-primary">REALISM</span></span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                            Redefining the digital landscape through chaos engineering and aesthetic perfection.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:hello@ambitiousrealism.com" className="text-text-muted hover:text-white transition-colors" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">COMPANY</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#ethos" className="hover:text-primary transition-colors">Manifesto</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">LEGAL</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">SLA</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">SOCIALS</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter / X</a></li>
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © 2025 Ambitious Realism. All rights reserved.
                    </p>
                    <p className="text-text-muted text-xs font-mono">
                        VIBE_CHECK: <span className="text-green-500">PASSED</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
