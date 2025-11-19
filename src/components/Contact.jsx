import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        codename: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setStatus('success');
        setFormData({ codename: '', email: '', subject: '', message: '' });

        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="section">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">INITIATE UPLINK</span>
                    </h2>
                    <p className="text-text-muted text-xl max-w-2xl mx-auto">
                        Send your signal. We are listening.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="codename" className="text-sm font-mono text-primary uppercase tracking-wider">Codename</label>
                                <input
                                    type="text"
                                    id="codename"
                                    name="codename"
                                    value={formData.codename}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Neo"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-mono text-secondary uppercase tracking-wider">Signal Frequency</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                                    placeholder="neo@matrix.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-mono text-white uppercase tracking-wider">Vibe Check</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all appearance-none"
                            >
                                <option value="" disabled>Select Protocol</option>
                                <option value="consulting">Business Consulting</option>
                                <option value="development">App Development</option>
                                <option value="vibecoding">Vibecoding Audit</option>
                                <option value="other">Other Inquiries</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-mono text-text-muted uppercase tracking-wider">Payload</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Describe your reality distortion requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full btn btn-primary flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500 border-green-500' : ''}`}
                        >
                            {status === 'loading' ? (
                                <Loader2 className="animate-spin" />
                            ) : status === 'success' ? (
                                "TRANSMISSION COMPLETE"
                            ) : (
                                <>
                                    TRANSMIT DATA <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
