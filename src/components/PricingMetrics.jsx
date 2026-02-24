import React from 'react';
import { motion } from 'framer-motion';

const PricingMetrics = () => {
    const metrics = [
        {
            value: "32,250",
            label: "Leads analyzed per month"
        },
        {
            value: "18,400",
            label: "Outreach sequences automated"
        },
        {
            value: "2,150",
            label: "Meetings scheduled automatically"
        }
    ];

    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-dark-900/40 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-4"
                    >
                        Metrics that prove <br /> performance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 text-[10px] font-bold uppercase tracking-widest"
                    >
                        Track automation impact with real results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-20">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="text-center space-y-4"
                        >
                            <span className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 block">
                                {metric.value}
                            </span>
                            <p className="text-[10px] text-slate-500 dark:text-dark-200 font-bold uppercase tracking-wider max-w-[160px] mx-auto leading-relaxed">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingMetrics;
