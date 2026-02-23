import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutHero = () => {
    const [activeTab, setActiveTab] = useState('Mission');

    const coreCapabilities = [
        "LEAD ANALYSIS",
        "WORKFLOW AUTOMATION",
        "REPLY INTELLIGENCE"
    ];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-zinc-900/10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left Side: Headline & Description */}
                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1] mb-8">
                                <span className="block dark:hidden">
                                    Outbound intelligence.<br />
                                    Automated.<br />
                                    Precise.<br />
                                    Human-led.
                                </span>
                                <span className="hidden dark:block">
                                    Outbound intelligence,<br />
                                    engineered for results
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
                                <span className="block dark:hidden">
                                    We engineer every workflow for accuracy, speed, and measurable growth. See how our automation keeps you in control.
                                </span>
                                <span className="hidden dark:block">
                                    We automate, analyze, and optimize outbound workflows. Our mission: deliver actionable insights, streamline engagement, and empower teams to drive measurable growth—always with human oversight.
                                </span>
                            </p>

                            {/* Mobile/Light Mode Style Tabs/Buttons */}
                            <div className="flex items-center gap-3 dark:hidden">
                                {['Mission', 'Values'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${activeTab === tab
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Capabilities/Decorative */}
                    <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-3 text-left lg:text-right"
                        >
                            <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] block mb-6">
                                CORE CAPABILITIES
                            </span>

                            {coreCapabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/5 rounded-lg inline-block lg:block"
                                >
                                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 tracking-[0.1em]">
                                        {capability}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Cards Section (Light Mode only shown in Image 2) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 dark:hidden">
                    {[
                        {
                            title: "Accelerate pipeline velocity",
                            desc: "Pinpoint gaps, prioritize leads, and drive action with automated analysis and scoring.",
                            icon: "💬"
                        },
                        {
                            title: "Enable data-driven action",
                            desc: "Score, segment, and prioritize leads for maximum conversion and efficiency.",
                            icon: "✨"
                        },
                        {
                            title: "Automate outreach, keep control",
                            desc: "Trigger personalized engagement and follow-ups—always with human oversight.",
                            icon: "✔️"
                        }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="bg-slate-50/80 p-8 rounded-2xl border border-slate-100 flex flex-col gap-5"
                        >
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-lg">
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 mb-2">{card.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-xs">{card.desc}</p>
                            </div>
                            <button className="text-slate-900 text-[11px] font-bold flex items-center gap-2 mt-auto group">
                                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
