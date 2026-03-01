import React from 'react';
import { motion } from 'framer-motion';

const PricingOutcome = () => {
    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-8"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                            YOUR FUTURE FLOW
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                    >
                        Automate <span className="italic text-blue-600 dark:text-blue-400">outbound.</span> <br />
                        Scale revenue.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        Select your plan to unlock AI-driven lead analysis, scoring, and outreach.
                        Streamline your sales pipeline with precision automation.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:shadow-[0_20px_60px_rgba(37,99,235,0.5)] transition-all duration-300"
                    >
                        Start Scaling Now
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/5 blur-[100px] rounded-full translate-y-12" />
                    <div className="relative aspect-[16/8] md:aspect-[21/9] rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-dark-700/50 group">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                            alt="Success Outcome"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingOutcome;
