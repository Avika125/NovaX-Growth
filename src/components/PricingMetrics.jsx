import React from 'react';
import { motion } from 'framer-motion';

const PricingMetrics = () => {
    const metrics = [
        {
            value: "32,250",
            label: "Leads analyzed per month",
            suffix: "+"
        },
        {
            value: "18,400",
            label: "Outreach sequences automated",
            suffix: "+"
        },
        {
            value: "2,150",
            label: "Meetings scheduled automatically",
            suffix: ""
        }
    ];

    return (
        <section className="relative py-32 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 dark:bg-indigo-600/10 border border-indigo-100/50 dark:border-indigo-400/20 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em]">
                            PROVEN IMPACT
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6 leading-tight"
                    >
                        Metrics that <span className="italic text-blue-600 dark:text-blue-400">scale</span> <br className="hidden md:block" />
                        with your growth.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="relative group text-center"
                        >
                            <div className="mb-4">
                                <span className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 block group-hover:scale-110 transition-transform duration-500">
                                    {metric.value}{metric.suffix}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-[2px] w-12 bg-blue-600 dark:bg-blue-400 mb-6 group-hover:w-20 transition-all duration-500" />
                                <p className="text-[11px] text-slate-500 dark:text-dark-400 font-black uppercase tracking-[0.3em] max-w-[200px] leading-relaxed">
                                    {metric.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingMetrics;
