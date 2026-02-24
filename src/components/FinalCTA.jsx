import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-palette-100 dark:bg-palette-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-palette-700/30 blur-[160px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-display font-black text-palette-900 dark:text-palette-100 mb-8 leading-tight"
                        >
                            Build Your <br />
                            <span className="text-palette-700 dark:text-palette-200">AI Sales Force.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-palette-800 dark:text-palette-200 mb-12 max-w-lg"
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
                                    className="flex items-center space-x-3 text-palette-900 dark:text-palette-100 font-bold"
                                >
                                    <svg className="w-6 h-6 text-palette-700 dark:text-palette-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="p-10 rounded-3xl bg-palette-200 dark:bg-palette-800 border border-palette-700/10 dark:border-palette-700 shadow-2xl relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-palette-900 dark:text-palette-200">Full Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl bg-palette-100 dark:bg-palette-700/50 border border-palette-700/10 dark:border-palette-700 text-palette-900 dark:text-palette-100 placeholder-palette-600/50 dark:placeholder-palette-600 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-palette-900 dark:text-palette-200">Work Email</label>
                                    <input type="email" className="w-full p-4 rounded-xl bg-palette-100 dark:bg-palette-700/50 border border-palette-700/10 dark:border-palette-700 text-palette-900 dark:text-palette-100 placeholder-palette-600/50 dark:placeholder-palette-600 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-palette-900 dark:text-palette-200">Company Website</label>
                                <input type="text" className="w-full p-4 rounded-xl bg-palette-100 dark:bg-palette-700/50 border border-palette-700/10 dark:border-palette-700 text-palette-900 dark:text-palette-100 placeholder-palette-600/50 dark:placeholder-palette-600 outline-none transition-all" placeholder="https://company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-palette-900 dark:text-palette-200">What's your biggest outbound challenge?</label>
                                <textarea rows="3" className="w-full p-4 rounded-xl bg-palette-100 dark:bg-palette-700/50 border border-palette-700/10 dark:border-palette-700 text-palette-900 dark:text-palette-100 placeholder-palette-600/50 dark:placeholder-palette-600 outline-none transition-all" placeholder="Tell us about your current funnel..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 rounded-xl bg-palette-600 text-white font-black text-xl shadow-xl shadow-palette-800/20 transition-all uppercase tracking-widest hover:bg-palette-700"
                            >
                                Get Started Free
                            </motion.button>
                            <p className="text-center text-xs text-slate-500 dark:text-dark-600">
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
