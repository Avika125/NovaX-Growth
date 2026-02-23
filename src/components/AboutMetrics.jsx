import React from 'react';
import { motion } from 'framer-motion';

const AboutMetrics = () => {
    const stats = [
        {
            value: "40%",
            label: "Increase in lead conversion"
        },
        {
            value: "10K",
            label: "Leads analyzed to date"
        },
        {
            value: "23+",
            label: "Industries supported worldwide"
        },
        {
            value: "100%",
            label: "Verified human oversight"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-zinc-900/10 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white text-center mb-16"
                >
                    Metrics that <br /> drive real results
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/50">
                            {/* Placeholder for the team/meeting image from Image 3 */}
                            <div className="w-full h-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center">
                                <span className="text-slate-400 dark:text-zinc-700 text-6xl italic">NovaX Team</span>
                            </div>
                        </div>

                        {/* Overlapping Stats Card (Visual Flair) */}
                        <div className="absolute -bottom-8 -right-8 hidden md:block w-56 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 transition-colors duration-500">
                            <span className="block text-3xl font-light text-slate-900 dark:text-white mb-2 tracking-tight">40%</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">Inc. conversion</span>
                        </div>
                        <div className="absolute -top-8 -left-8 hidden md:block w-56 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 transition-colors duration-500">
                            <span className="block text-3xl font-light text-slate-900 dark:text-white mb-2 tracking-tight">100%</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">Human Oversight</span>
                        </div>
                    </motion.div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                <span className="text-5xl md:text-7xl font-light text-slate-900 dark:text-white mb-3 tracking-tighter">
                                    {stat.value}
                                </span>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] font-bold leading-relaxed max-w-[180px]">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMetrics;
