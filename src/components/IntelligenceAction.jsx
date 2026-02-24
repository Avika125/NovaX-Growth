import React from 'react';
import { motion } from 'framer-motion';

const IntelligenceAction = () => {
    const roles = [
        {
            title: "Sales intelligence",
            desc: "Prioritize leads. Automate outreach.",
            image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Marketing analytics",
            desc: "Identify gaps. Optimize performance.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-6"
                    >
                        CURATED INSIGHTS FOR EVERY ROLE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6"
                    >
                        Intelligence that <br /> drives action
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-dark-700">
                                <img
                                    src={role.image}
                                    alt={role.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2 px-2">
                                <h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100">
                                    {role.title}
                                </h3>
                                <p className="text-slate-500 dark:text-dark-200 text-xs tracking-tight">
                                    {role.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntelligenceAction;
