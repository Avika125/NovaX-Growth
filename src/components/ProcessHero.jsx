import React from 'react';
import { motion } from 'framer-motion';

const ProcessHero = () => {
    return (
        <section className="pt-32 pb-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-20 dark:opacity-10"
                    style={{
                        background: 'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)',
                        filter: 'blur(100px)'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-[50%] -right-[50%] w-[200%] h-[200%] opacity-20 dark:opacity-10"
                    style={{
                        background: 'radial-gradient(circle at center, #60a5fa 0%, transparent 70%)',
                        filter: 'blur(100px)'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.05] mb-8"
                        >
                            Outbound <br />
                            intelligence. <br />
                            Automated. <br />
                            Precise. Fast.
                        </motion.h1>
                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full max-w-md p-10 rounded-[40px] bg-slate-900 dark:bg-zinc-800 text-white shadow-2xl relative group"
                        >
                            <div className="absolute inset-0 bg-blue-600/10 rounded-[32px] blur-3xl group-hover:bg-blue-600/20 transition-all duration-700 -z-10" />
                            <h3 className="text-3xl font-['Playfair_Display'] mb-6">Workflow engine overview</h3>
                            <p className="text-[13px] leading-relaxed text-slate-400 mb-10">
                                Leads are analyzed, gaps identified, and outreach triggered—every step is scored, prioritized, and controlled by you. Automation drives results, with clarity at every stage.
                            </p>
                            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition-all duration-300 backdrop-blur-sm">
                                View process
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Team Meeting Background Image for 2nd Image feel */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none opacity-10 dark:opacity-5 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Team Background"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent" />
            </div>
        </section>
    );
};

export default ProcessHero;
