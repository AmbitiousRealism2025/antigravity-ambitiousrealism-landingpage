import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Script Kiddie",
        price: "$999",
        features: ["Basic Vibe Audit", "1 Reality Patch", "Standard Support"],
        highlight: false
    },
    {
        name: "Full Stack",
        price: "$2,499",
        features: ["Deep Chaos Engineering", "5 Reality Patches", "24/7 Vibe Monitoring", "Aesthetic Consultation"],
        highlight: true
    },
    {
        name: "10x Engineer",
        price: "$9,999",
        features: ["Total Reality Overhaul", "Unlimited Patches", "Direct Neural Link", "CTO-as-a-Service"],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">INVEST IN REALITY</span>
                    </h2>
                    <p className="text-text-muted text-xl max-w-2xl mx-auto">
                        Choose your level of engagement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`glass-panel relative p-8 ${plan.highlight ? 'border-primary/50 bg-primary/5 scale-105 z-10 shadow-[0_0_40px_rgba(176,38,255,0.2)]' : 'bg-white/5'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-8 font-mono">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-muted">
                                        <Check size={18} className="text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full btn ${plan.highlight ? 'btn-primary' : 'hover:bg-white/10'}`}
                            >
                                SELECT PLAN
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
