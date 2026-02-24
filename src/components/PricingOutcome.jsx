import React from 'react';
import { motion } from 'framer-motion';

const PricingOutcome = () => {
    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-6"
                    >
                        READY TO SCALE?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-6"
                    >
                        Automate outbound. <br />
                        Close faster.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 text-[11px] max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Select your plan to unlock AI-driven lead analysis, scoring, and outreach. Streamline your sales pipeline with precision automation.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-8 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
                    >
                        Start now
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[16/8] md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-dark-700/50"
                >
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                        alt="Success Outcome"
                        className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default PricingOutcome;
