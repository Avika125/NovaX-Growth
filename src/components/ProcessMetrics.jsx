import React from 'react';
import { motion } from 'framer-motion';

const ProcessMetrics = () => {
    const metrics = [
        {
            value: "72%",
            label: "Leads analyzed for insights"
        },
        {
            value: "42%",
            label: "High-priority leads scored"
        },
        {
            value: "+31",
            label: "Workflows automated"
        }
    ];

    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-16"
                        >
                            Metrics that <br />
                            power growth
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${index === 0 ? 'md:col-span-2' : ''}`}
                                >
                                    <span className={`font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 block ${index === 0 ? 'text-7xl md:text-8xl mb-2' : 'text-5xl md:text-6xl mb-1'}`}>
                                        {metric.value}
                                    </span>
                                    <p className="text-[10px] text-slate-500 dark:text-dark-600 uppercase tracking-widest font-bold">
                                        {metric.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-dark-700"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=800"
                                alt="Growth Metrics Chart"
                                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessMetrics;
