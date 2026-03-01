import React from 'react';
import { motion } from 'framer-motion';

const PricingContact = () => {
    return (
        <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                            CUSTOM SOLUTIONS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6 leading-tight"
                    >
                        Connect for <span className="italic text-blue-600 dark:text-blue-400">bespoke</span> <br />
                        automation setups.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Submit your details for a precise quote. Our team will review and respond with tailored pricing.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto items-center">
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[48px] bg-white/40 dark:bg-dark-800/40 backdrop-blur-2xl border border-slate-200 dark:border-dark-700/50 shadow-2xl shadow-slate-900/5"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-dark-600 uppercase tracking-[0.3em] ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-dark-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:text-dark-100 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-dark-600 uppercase tracking-[0.3em] ml-2">Business Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-6 py-4 bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-dark-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:text-dark-100 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 dark:text-dark-600 uppercase tracking-[0.3em] ml-2">Project Overview</label>
                                    <textarea
                                        placeholder="Tell us about your sales volume and goals..."
                                        rows="4"
                                        className="w-full px-6 py-4 bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-dark-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:text-dark-100 transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-blue-600 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/40 transition-all duration-300 transform active:scale-[0.98]"
                                >
                                    Review Request
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl rounded-full" />
                            <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-dark-700/50 group">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                    alt="Team Meeting"
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-20" />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-12 px-8">
                            <div className="space-y-4">
                                <h4 className="text-[11px] font-black text-slate-900 dark:text-dark-100 uppercase tracking-[0.3em]">Direct Line</h4>
                                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <span className="text-sm">+1 (555) NOVA-GROW</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[11px] font-black text-slate-900 dark:text-dark-100 uppercase tracking-[0.3em]">Social Net</h4>
                                <div className="flex items-center gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-xl border border-slate-200 dark:border-dark-700 flex items-center justify-center text-slate-400 dark:text-dark-600 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all cursor-pointer">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                {i === 1 && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                                                {i === 2 && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                                                {i === 3 && (
                                                    <>
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                    </>
                                                )}
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingContact;
