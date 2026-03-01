import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessCaseStudies = () => {
    const [activeTab, setActiveTab] = useState(0);

    const studies = [
        {
            logo: "360LAB",
            quote: "Our outreach is now targeted, efficient, and always prioritized. The workflow keeps us focused on high-value leads and measurable results.",
            author: "Taylor Brooks",
            role: "Sales Operations Lead",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        },
        {
            logo: "EGGS",
            quote: "The personalized outreach engine has transformed how we connect with prospects. Engagement rates have doubled since implementation.",
            author: "Jordan Ellis",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
        },
        {
            logo: "THE PAAK",
            quote: "Clarity at every stage of our sales pipeline. The workflow engine overview gives us the insights we need to close deals faster.",
            author: "Morgan Shaw",
            role: "CEO",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
        },
        {
            logo: "ECHOES",
            quote: "Human oversight plus AI precision is the perfect match. Our sales team is more productive than ever.",
            author: "Riley Quinn",
            role: "Team Lead",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
        }
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
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                            PROVEN RESULTS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1]"
                    >
                        Automation that <br />
                        <span className="italic text-blue-600 dark:text-blue-400">closes</span> more deals.
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto rounded-[48px] overflow-hidden shadow-2xl bg-white/40 dark:bg-dark-800/40 backdrop-blur-2xl border border-slate-200/50 dark:border-dark-700/50">
                    <div className="flex flex-wrap border-b border-slate-200/50 dark:border-dark-700/50 bg-slate-50/50 dark:bg-dark-800/50">
                        {studies.map((study, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 min-w-[120px] py-8 flex flex-col items-center gap-4 transition-all duration-500 relative ${activeTab === index ? 'opacity-100 bg-white/50 dark:bg-white/5' : 'opacity-30 hover:opacity-100 grayscale hover:grayscale-0'}`}
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-600/20">
                                    <img src={study.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 dark:text-dark-100 uppercase">{study.logo}</span>
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabProcessDetails"
                                        className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 shadow-[0_-4px_10px_rgba(37,99,235,0.3)]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-10 md:p-20 relative min-h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col md:flex-row gap-16 md:gap-24 items-center w-full"
                            >
                                <div className="md:w-1/2 space-y-10">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 2.5 0 5-2 5zm11 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 2.5 0 5-2 5z"></path></svg>
                                    </div>
                                    <p className="text-2xl md:text-4xl font-['Playfair_Display'] text-slate-900 dark:text-dark-100 leading-tight italic font-medium">
                                        "{studies[activeTab].quote}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                                            <img src={studies[activeTab].image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-900 dark:text-dark-100 mb-1 tracking-tight">
                                                {studies[activeTab].author}
                                            </h4>
                                            <p className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] font-black">
                                                {studies[activeTab].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-dark-700 bg-white dark:bg-dark-900 p-3"
                                    >
                                        <img
                                            src={studies[activeTab].image}
                                            alt={studies[activeTab].author}
                                            className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessCaseStudies;
