import React from 'react';
import { motion } from 'framer-motion';

const ProcessHero = () => {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.05),transparent_50%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-8"
                        >
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                THE WORKFLOW ENGINE
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-9xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.05] tracking-tight mb-8"
                        >
                            Outbound <br />
                            <span className="italic text-blue-600 dark:text-blue-400">intelligence.</span> <br />
                            Automated.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-dark-300 max-w-xl leading-relaxed font-light mb-12"
                        >
                            Precise, fast, and scalable. Our AI-driven workflow manages every stage of your sales funnel with surgical precision.
                        </motion.p>
                    </div>

                    <div className="lg:w-2/5 w-full">
                        <motion.div
                            initial={{ opacity: 0, perspective: 1000, rotateY: 20 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-4 bg-blue-600/10 dark:bg-blue-400/5 blur-3xl rounded-[48px] group-hover:bg-blue-600/20 transition-all duration-700" />
                            <div className="relative p-10 md:p-12 rounded-[48px] bg-white/40 dark:bg-dark-900/40 backdrop-blur-2xl border border-slate-200 dark:border-dark-700/50 shadow-2xl shadow-slate-900/5">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <h3 className="text-3xl font-['Playfair_Display'] text-slate-900 dark:text-dark-100 mb-6 font-medium italic">Workflow Engine</h3>
                                <p className="text-sm md:text-base leading-relaxed text-slate-500 dark:text-dark-300 mb-10 font-light">
                                    Leads are analyzed, gaps identified, and outreach triggered. Every step is scored, prioritized, and controlled by you. Automation drives results, with clarity at every stage.
                                </p>
                                <button className="w-full py-4 bg-slate-900 dark:bg-dark-100 text-white dark:text-dark-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-800 dark:hover:bg-white transition-all shadow-xl shadow-slate-900/10 dark:shadow-none">
                                    Explore Process
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Seamless Background Image Transition */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none opacity-20 dark:opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Process context"
                    className="w-full h-full object-cover grayscale brightness-125 dark:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-950 to-transparent" />
            </div>
        </section>
    );
};

export default ProcessHero;
