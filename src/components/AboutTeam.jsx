import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "Evan Brooks", role: "Lead Automation Analyst", image: "https://i.pravatar.cc/150?u=evan" },
    { name: "Skylar Monroe", role: "Outbound Strategy Lead", image: "https://i.pravatar.cc/150?u=skylar" },
    { name: "Jordan Avery", role: "Workflow Systems Architect", image: "https://i.pravatar.cc/150?u=jordan" },
    { name: "Morgan Ellis", role: "Growth Data Analyst", image: "https://i.pravatar.cc/150?u=morgan" },
    { name: "Riley Chen", role: "Data Operations Lead", image: "https://i.pravatar.cc/150?u=riley" },
    { name: "Taylor Reed", role: "Sales Automation Engineer", image: "https://i.pravatar.cc/150?u=taylor" },
    { name: "Casey Morgan", role: "Client Success Director", image: "https://i.pravatar.cc/150?u=casey" },
    { name: "Drew Harper", role: "AI Solutions Specialist", image: "https://i.pravatar.cc/150?u=drew" },
    { name: "Alex Rowan", role: "Business Insights Lead", image: "https://i.pravatar.cc/150?u=alex" },
];

const AboutTeam = () => {
    return (
        <section className="relative py-24 bg-white dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Crisp CSS Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] dark:opacity-[0.3]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-4"
                    >
                        OUR AUTOMATION EXPERTS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6"
                    >
                        Precision-driven <br /> outbound intelligence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 max-w-xl mx-auto text-[13px] leading-relaxed"
                    >
                        Meet the specialists behind our advanced workflow automation. Each team member brings deep expertise in lead analysis, data operations, and strategic outreach—delivering measurable results for your business.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-10 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
                    >
                        Connect
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="p-8 bg-slate-50 dark:bg-dark-800 border border-slate-100 dark:border-dark-700 rounded-[32px] text-center group transition-all duration-300"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-opacity duration-300 ring-4 ring-white dark:ring-dark-700 shadow-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-1.5">
                                {member.name}
                            </h3>
                            <p className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-widest mb-5">
                                {member.role}
                            </p>

                            <div className="flex justify-center">
                                <a href="#" className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                                    <span className="text-[10px] font-bold">in</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
