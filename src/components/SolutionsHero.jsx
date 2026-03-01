import React from 'react';
import { motion } from 'framer-motion';
import solution1 from '../assets/solution1.jpg';
import solution3 from '../assets/solution3.jpg';

const SolutionsHero = () => {
    const images = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1531403001884-245470fb90f2?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-dark-900 transition-colors duration-500">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={solution3}
                    alt=""
                    className="w-full h-full object-cover opacity-20 dark:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-transparent dark:from-blue-900/10" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                    AI-POWERED OUTBOUND INTELLIGENCE
                                </span>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-medium leading-[1.1] mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-dark-100 dark:to-white">
                                    Automate, analyze,
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                                    accelerate growth
                                </span>
                            </h1>
                            <p className="text-sm md:text-lg text-slate-600 dark:text-dark-200 max-w-lg leading-relaxed mb-10 tracking-tight">
                                Streamline lead analysis, outreach, and follow-up. Detect gaps, score opportunities, and drive conversions—always with human oversight.
                            </p>

                            <div className="flex items-center gap-3">
                                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300">
                                    Demo
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 dark:bg-dark-800 text-slate-900 dark:text-dark-100 rounded-xl text-sm font-bold border border-slate-200 dark:border-dark-700 hover:bg-slate-200 dark:hover:bg-dark-700 transition-all duration-300">
                                    Process
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-3">
                        <div className="space-y-3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={images[0]} alt="Workplace" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={images[1]} alt="Modern Building" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={images[2]} alt="Office Interior" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <div className="space-y-3 pt-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={images[3]} alt="Data Analytics" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={solution1} alt="Team Meeting" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img src={images[5]} alt="Tech Solutions" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;
