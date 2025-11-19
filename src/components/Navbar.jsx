import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Code className="text-primary" size={32} />
                    <span className="font-bold text-xl tracking-wider">AMBITIOUS<span className="text-primary">REALISM</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-sm font-bold hover:text-primary transition-colors">SERVICES</a>
                    <a href="#ethos" className="text-sm font-bold hover:text-primary transition-colors">ETHOS</a>
                    <a href="#pricing" className="text-sm font-bold hover:text-primary transition-colors">PRICING</a>
                    <a href="#contact" className="btn-primary px-6 py-2 rounded-full text-sm font-bold">INITIATE</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden">
                        <a href="#services" className="text-lg font-bold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
                        <a href="#ethos" className="text-lg font-bold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>ETHOS</a>
                        <a href="#pricing" className="text-lg font-bold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>PRICING</a>
                        <a href="#contact" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>INITIATE</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
