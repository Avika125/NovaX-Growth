import React from 'react';
import { motion } from 'framer-motion';

const ProcessBridge = () => {
    const agents = [
        {
            title: "Lead analysis agent",
            description: "Assess digital presence, pinpoint gaps, and score lead priority for targeted outreach.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9" />
                    <path d="M12 12h.01" />
                </svg>
            )
        },
        {
            title: "Personalized outreach engine",
            description: "Draft tailored emails and follow-ups based on real-time lead data and opportunity signals.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            title: "Reply intelligence agent",
            description: "Analyze replies, detect intent, and recommend next actions to maximize conversions.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9" />
                    <polyline points="9 11 12 14 22 4" />
                </svg>
            )
        },
        {
            title: "Lifecycle control",
            description: "Track lead status, automate meetings, and maintain human oversight at every step.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_40%)]" />
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
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                            MODULAR INTELLIGENCE
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                    >
                        Specialized agents <br />
                        for <span className="italic text-blue-600 dark:text-blue-400">every</span> stage.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="p-10 md:p-12 rounded-[48px] bg-white/40 dark:bg-dark-800/40 backdrop-blur-2xl border border-slate-200/50 dark:border-dark-700/50 shadow-2xl shadow-slate-900/5 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                                {agent.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {agent.title}
                            </h3>
                            <p className="text-sm md:text-base text-slate-500 dark:text-dark-300 leading-relaxed font-light">
                                {agent.description}
                            </p>
                            <div className="mt-10 h-[1px] w-12 bg-blue-600/30 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessBridge;
