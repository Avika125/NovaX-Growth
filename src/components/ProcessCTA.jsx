import React from 'react';
import { motion } from 'framer-motion';

const ProcessCTA = () => {
    return (
        <section className="relative py-32 md:py-48 bg-slate-900 dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-10"
                >
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">
                        READY TO SCALE?
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-['Playfair_Display'] font-medium text-white leading-[1.05] mb-12"
                >
                    Accelerate <br className="hidden md:block" />
                    <span className="italic text-blue-400">outbound.</span> <br />
                    Automate <br className="hidden md:block" />
                    every step.
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                            Start free trial
                        </button>
                        <button className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                            Book a demo
                        </button>
                    </motion.div>

                    <div className="hidden lg:block w-[1px] h-20 bg-white/10 mx-8" />

                    <div className="hidden lg:block lg:w-80">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm text-slate-400 leading-relaxed text-left font-light"
                        >
                            AI analyzes, scores, and personalizes outreach. Prioritize leads, trigger follow-ups, and convert faster—always with human oversight.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-0 pointer-events-none" />
        </section>
    );
};

export default ProcessCTA;
