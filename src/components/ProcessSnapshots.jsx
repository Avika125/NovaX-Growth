import React from 'react';
import { motion } from 'framer-motion';

const ProcessSnapshots = () => {
    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_60%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 dark:bg-dark-800/50 border border-slate-200 dark:border-dark-700 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-slate-500 dark:text-dark-400 uppercase tracking-[0.3em]">
                            WORKFLOW INTELLIGENCE VISUALIZED
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1]"
                    >
                        Automation snapshots: <br />
                        <span className="italic text-blue-600 dark:text-blue-400">visualize</span> the process.
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Left Snapshot */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 20 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.05, rotateZ: -2, zIndex: 20 }}
                        className="w-full md:w-1/4 aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-dark-700 bg-white dark:bg-dark-800 p-3 group"
                    >
                        <div className="w-full h-full rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600"
                                alt="Process Step 1"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>

                    {/* Center Snapshot (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                        whileHover={{ scale: 1.02, y: -10 }}
                        className="w-full md:w-2/3 aspect-video md:aspect-[16/10] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] ring-1 ring-slate-200 dark:ring-dark-700 z-10 bg-white dark:bg-dark-800 p-4 group"
                    >
                        <div className="w-full h-full rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                                alt="Main Dashboard"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </motion.div>

                    {/* Right Snapshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -20 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.05, rotateZ: 2, zIndex: 20 }}
                        className="w-full md:w-1/4 aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-dark-700 bg-white dark:bg-dark-800 p-3 group"
                    >
                        <div className="w-full h-full rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                                alt="Process Step 3"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSnapshots;
