import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-400/20 blur-[160px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-8 leading-tight"
                        >
                            Build Your <br />
                            <span className="text-slate-950 dark:text-white">AI Sales Force.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg"
                        >
                            Stop wasting time on manual outreach. Hire a team of AI agents that never sleep, never miss a lead, and always stay on brand.
                        </motion.p>

                        <div className="space-y-6">
                            {['Free Strategy Call', 'Custom AI Sales Audit', 'Zero Implementation Fee'].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-center space-x-3 text-slate-900 dark:text-white font-bold"
                                >
                                    <svg className="w-6 h-6 text-slate-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 dark:text-slate-300">Full Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-slate-950 dark:focus:border-white outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900 dark:text-slate-300">Work Email</label>
                                    <input type="email" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-slate-950 dark:focus:border-white outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 dark:text-slate-300">Company Website</label>
                                <input type="text" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-slate-950 dark:focus:border-white outline-none transition-all" placeholder="https://company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 dark:text-slate-300">What's your biggest outbound challenge?</label>
                                <textarea rows="3" className="w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-slate-950 dark:focus:border-white outline-none transition-all" placeholder="Tell us about your current funnel..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-xl shadow-xl shadow-black/20 transition-all uppercase tracking-widest"
                            >
                                Get Started Free
                            </motion.button>
                            <p className="text-center text-xs text-slate-500 dark:text-slate-500">
                                No credit card required. Cancel anytime.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
