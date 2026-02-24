import { motion } from 'framer-motion';

const Differentiation = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-slate-800 dark:text-dark-200 uppercase tracking-widest mb-4"
                    >
                        📈 SECTION 6 — Why We’re Different
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-dark-100 mb-6">
                        Compare The Difference
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* The Others */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white dark:bg-dark-800/40 border border-slate-200 dark:border-dark-700 shadow-sm"
                    >
                        <h4 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
                            Most tools are:
                        </h4>
                        <ul className="space-y-6">
                            {[
                                "Email blasters",
                                "No intelligence",
                                "No reply understanding",
                                "No automation brain"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-500">
                                    <span className="text-red-500 font-bold">❌</span>
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-slate-100 dark:bg-dark-800 border-2 border-slate-950 dark:border-dark-100 shadow-xl shadow-black/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-slate-950 dark:bg-dark-100 text-white dark:text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-tighter">Recommended</span>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-dark-100 mb-8 flex items-center gap-3">
                            We are:
                        </h4>
                        <ul className="space-y-6">
                            {[
                                "AI-first",
                                "Intent-aware",
                                "State-machine driven",
                                "Fully automated",
                                "Human-in-the-loop controlled"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-900 dark:text-dark-100">
                                    <span className="text-green-500 font-bold">✅</span>
                                    <span className="text-lg font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
