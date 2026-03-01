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
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
        }
    ];
    return (
        <section className="relative py-20 bg-white dark:bg-dark-900 transition-colors duration-500 overflow-hidden" style={{ perspective: "1500px" }}>
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] dark:opacity-[0.35]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/5 to-transparent dark:via-blue-900/5 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-dark-800/60 border border-slate-200 dark:border-dark-700 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-slate-500 dark:text-dark-400 uppercase tracking-[0.2em]">
                            CURATED INSIGHTS FOR EVERY ROLE
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium leading-[1.2]"
                    >
                        <span className="text-slate-900 dark:text-dark-100">Intelligence that</span> <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 italic">
                            drives action
                        </span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                y: -12,
                                rotateY: index % 2 === 0 ? 8 : -8,
                                rotateX: 5,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative bg-slate-50/80 dark:bg-dark-800/40 backdrop-blur-sm p-6 rounded-[32px] border border-slate-100 dark:border-dark-700/50 hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-dark-700/50 mb-6" style={{ transform: "translateZ(20px)" }}>
                                <img
                                    src={role.image}
                                    alt={role.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                {/* Glass overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="space-y-2 px-2" style={{ transform: "translateZ(10px)" }}>
                                <h3 className="text-2xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100">
                                    {role.title}
                                </h3>
                                <p className="text-slate-500 dark:text-dark-300 text-sm leading-relaxed">
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
