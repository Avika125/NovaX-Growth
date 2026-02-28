import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import about1 from '../assets/about1.jpg';

const AboutHero = () => {
    const [activeTab, setActiveTab] = useState('Mission');

    const coreCapabilities = [
        "LEAD ANALYSIS",
        "WORKFLOW AUTOMATION",
        "REPLY INTELLIGENCE"
    ];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-dark-900 transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-dark-800/20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Side: Headline & Description */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-6 lg:mb-8">
                                Outbound intelligence.<br />
                                Automated.<br />
                                Precise.<br />
                                Human-led.
                            </h1>

                            <p className="text-sm md:text-base text-slate-600 dark:text-dark-200 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                                We engineer every workflow for accuracy, speed, and measurable growth. See how our automation keeps you in control.
                            </p>

                            {/* Tabs/Buttons */}
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                {['Mission', 'Values'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${activeTab === tab
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-dark-200 hover:bg-slate-200 dark:hover:bg-dark-700'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Capabilities/Decorative */}
                    <div
                        className="w-full lg:w-5/12 flex flex-col items-center lg:items-end mt-12 lg:mt-0"
                        style={{ perspective: "1200px" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 text-center lg:text-right w-full"
                        >
                            <div className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        rotateY: -10,
                                        rotateX: 5,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative z-10 rounded-[32px] overflow-hidden border-2 border-blue-500/30 dark:border-blue-400/20 shadow-2xl"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <img
                                        src={about1}
                                        alt="Outbound Intelligence"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Glassmorphism overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>

                                {/* Decorative background glow */}
                                <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-400/5 rounded-[40px] blur-2xl -z-10 group-hover:bg-blue-500/20 transition-colors duration-500" />
                            </div>

                            <div className="space-y-3">
                                <span className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.3em] block mb-4 lg:mb-6">
                                    CORE CAPABILITIES
                                </span>

                                <div className="flex flex-wrap justify-center lg:justify-end gap-3 lg:gap-0 lg:space-y-3">
                                    {coreCapabilities.map((capability, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-1.5 bg-slate-100 dark:bg-dark-800/60 border border-slate-200 dark:border-dark-700 rounded-lg lg:block"
                                        >
                                            <span className="text-[10px] font-bold text-slate-700 dark:text-dark-200 tracking-[0.1em]">
                                                {capability}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Cards Section */}
                <div
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5"
                    style={{ perspective: "1000px" }}
                >
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
                            whileHover={{
                                y: -12,
                                rotateX: -5,
                                rotateY: 8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="group relative bg-slate-50/80 dark:bg-dark-800/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-dark-700/50 flex flex-col gap-5 hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-300 overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Dynamic Glare/Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/[0.03] dark:to-blue-400/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div
                                className="w-10 h-10 bg-blue-50 dark:bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-lg shadow-sm"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                {card.icon}
                            </div>
                            <div style={{ transform: "translateZ(10px)" }}>
                                <h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-2">{card.title}</h3>
                                <p className="text-slate-500 dark:text-dark-300 leading-relaxed text-xs">{card.desc}</p>
                            </div>
                            <button
                                className="text-slate-900 dark:text-dark-100 text-[11px] font-bold flex items-center gap-2 mt-auto group/btn"
                                style={{ transform: "translateZ(15px)" }}
                            >
                                Explore <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
