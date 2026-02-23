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
        <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1]"
                    >
                        Automation that <br />
                        closes more deals
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto border border-slate-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900/50">
                    <div className="flex border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-zinc-900/50">
                        {studies.map((study, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 py-6 flex flex-col items-center gap-3 transition-all duration-300 relative ${activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-100 grayscale'}`}
                            >
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 dark:bg-zinc-800">
                                    <img src={study.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-slate-900 dark:text-white uppercase">{study.logo}</span>
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabProcess"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-12 md:p-16 relative min-h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/2 space-y-8">
                                    <p className="text-xl md:text-2xl font-['Playfair_Display'] text-slate-900 dark:text-white leading-relaxed italic">
                                        "{studies[activeTab].quote}"
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                            {studies[activeTab].author}
                                        </h4>
                                        <p className="text-[11px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest font-bold">
                                            {studies[activeTab].role}
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                                        <img
                                            src={studies[activeTab].image}
                                            alt={studies[activeTab].author}
                                            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                                        />
                                    </div>
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
