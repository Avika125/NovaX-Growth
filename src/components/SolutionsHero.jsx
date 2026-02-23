import React from 'react';
import { motion } from 'framer-motion';

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
        <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.4em] block mb-4">
                                AI-POWERED OUTBOUND INTELLIGENCE
                            </span>
                            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1] mb-6">
                                Automate, analyze, <br />
                                accelerate growth
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mb-8">
                                Streamline lead analysis, outreach, and follow-up. Detect gaps, score opportunities, and drive conversions—always with human oversight.
                            </p>

                            <div className="flex items-center gap-3">
                                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300">
                                    Demo
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 dark:bg-zinc-900 text-slate-900 dark:text-white rounded-xl text-sm font-bold border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all duration-300">
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
                                <img src={images[4]} alt="Team Meeting" className="w-full h-full object-cover" />
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
