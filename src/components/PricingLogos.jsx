import React from 'react';
import { motion } from 'framer-motion';

const PricingLogos = () => {
    const logos = [
        "LOGO", "EGGS", "THE PAAK", "IDEA",
        "360LAB", "ECHOES", "LOGO", "ECHOES",
        "EGGS", "THE PAAK", "IDEA", "360LAB"
    ];

    return (
        <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 dark:bg-dark-100/10 border border-slate-500/20 dark:border-dark-100/10 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-slate-500 dark:text-dark-400 uppercase tracking-[0.3em]">
                            TRUSTED BY 2.5M+ PROFESSIONALS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6 leading-tight"
                    >
                        Chosen by <br />
                        leading <span className="italic text-blue-600 dark:text-blue-400">enterprises.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 max-w-6xl mx-auto mt-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                            className="flex items-center justify-center p-4"
                        >
                            <span className="text-sm md:text-base font-black tracking-widest text-slate-900/40 dark:text-dark-100/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 cursor-default transform hover:scale-110">
                                {logo === "THE PAAK" ? (
                                    <span className="border border-current px-2 py-0.5">THE PAAK</span>
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
