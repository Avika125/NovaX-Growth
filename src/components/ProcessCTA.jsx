import React from 'react';
import { motion } from 'framer-motion';

const ProcessCTA = () => {
    return (
        <section className="py-32 bg-slate-50 dark:bg-zinc-900/10 transition-colors duration-500 overflow-hidden relative">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.05] mb-12"
                >
                    Accelerate <br className="hidden md:block" />
                    outbound. <br />
                    Automate <br className="hidden md:block" />
                    every step.
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="px-10 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300">
                            Start trial
                        </button>
                        <button className="px-10 py-3.5 bg-zinc-200 dark:bg-zinc-800 text-slate-900 dark:text-white rounded-xl text-sm font-bold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300">
                            Book demo
                        </button>
                    </motion.div>

                    <div className="hidden lg:block lg:w-96 ml-12">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed text-left"
                        >
                            AI analyzes, scores, and personalizes outreach. Prioritize leads, trigger follow-ups, and convert faster—always with human oversight.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Subtle background circles for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px] -z-0" />
        </section>
    );
};

export default ProcessCTA;
