import React from 'react';
import { motion } from 'framer-motion';

const ProcessSnapshots = () => {
    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.4em] block mb-6"
                    >
                        WORKFLOW INTELLIGENCE VISUALIZED
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1]"
                    >
                        Automation snapshots: <br />
                        see the process
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 max-w-7xl mx-auto">
                    {/* Left Snapshot */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/4 aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-white/5"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600"
                            alt="Process Step 1"
                            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                        />
                    </motion.div>

                    {/* Center Snapshot (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/4 aspect-square rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50 dark:ring-white/5 z-10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                            alt="Main Dashboard"
                            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                        />
                    </motion.div>

                    {/* Right Snapshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/4 aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-white/5"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                            alt="Process Step 3"
                            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSnapshots;
