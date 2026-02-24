import React from 'react';
import { motion } from 'framer-motion';

const PricingLogos = () => {
    const logos = [
        "LOGO", "EGGS", "THE PAAK", "IDEA",
        "360LAB", "ECHOES", "LOGO", "ECHOES",
        "EGGS", "THE PAAK", "IDEA", "360LAB"
    ];

    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-4"
                    >
                        TRUSTED BY 2.5M+ PROFESSIONALS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100"
                    >
                        Chosen by <br /> leading enterprises
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 max-w-4xl mx-auto mt-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                        >
                            <span className="text-lg font-bold tracking-tighter text-slate-900 dark:text-dark-100">
                                {logo === "THE PAAK" ? (
                                    <span className="border-2 border-slate-900 dark:border-dark-200 px-2 py-0.5">THE PAAK</span>
                                ) : (
                                    <span>{logo}</span>
                                )}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingLogos;
