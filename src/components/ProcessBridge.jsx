import React from 'react';
import { motion } from 'framer-motion';

const ProcessBridge = () => {
    const agents = [
        {
            title: "Lead analysis agent",
            description: "Assess digital presence, pinpoint gaps, and score lead priority for targeted outreach.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9" />
                    <path d="M12 12h.01" />
                </svg>
            )
        },
        {
            title: "Personalized outreach engine",
            description: "Draft tailored emails and follow-ups based on real-time lead data and opportunity signals.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            title: "Reply intelligence agent",
            description: "Analyze replies, detect intent, and recommend next actions to maximize conversions.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9" />
                    <polyline points="9 11 12 14 22 4" />
                </svg>
            )
        },
        {
            title: "Lifecycle control",
            description: "Track lead status, automate meetings, and maintain human oversight at every step.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
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
        <section className="py-24 bg-[#FDFCF9] dark:bg-dark-900/40 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                    >
                        Outbound intelligence. <br />
                        Automated. Precise. Fast.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 text-[13px] leading-relaxed max-w-xl mx-auto"
                    >
                        Streamline every sales stage with AI-driven automation and actionable insights.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="p-10 rounded-[32px] bg-white dark:bg-dark-800/40 border border-slate-100 dark:border-dark-700 hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-800/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                {agent.icon}
                            </div>
                            <h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-4">
                                {agent.title}
                            </h3>
                            <p className="text-[13px] text-slate-500 dark:text-dark-200 leading-relaxed">
                                {agent.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessBridge;
