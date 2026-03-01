import React from 'react';
import { motion } from 'framer-motion';

const ProcessMetrics = () => {
    const metrics = [
        {
            value: "72",
            suffix: "%",
            label: "Leads analyzed for insights"
        },
        {
            value: "42",
            suffix: "%",
            label: "High-priority leads scored"
        },
        {
            value: "31",
            suffix: "+",
            label: "Workflows automated"
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
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
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-8"
                        >
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                PERFORMANCE DATA
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-16 md:mb-20"
                        >
                            Metrics that <br />
                            power <span className="italic text-blue-600 dark:text-blue-400">growth.</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className={`${index === 0 ? 'md:col-span-2' : ''} group`}
                                >
                                    <div className="flex items-baseline gap-1">
                                        <span className={`font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 block transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 ${index === 0 ? 'text-7xl md:text-9xl' : 'text-5xl md:text-7xl'}`}>
                                            {metric.value}
                                        </span>
                                        <span className="text-2xl md:text-4xl text-blue-600/40 dark:text-blue-400/40 font-light translate-y-[-0.2em]">
                                            {metric.suffix}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-dark-400 uppercase tracking-[0.3em] font-black mt-2">
                                        {metric.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 dark:ring-dark-700 bg-white dark:bg-dark-900 p-4"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=800"
                                alt="Growth Metrics Chart"
                                className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessMetrics;
