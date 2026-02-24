import { motion } from 'framer-motion';

const Control = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-dark-800 border border-slate-800 dark:border-dark-700 p-12 md:p-20 relative">

                    <div className="relative z-10 text-center">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-slate-400 dark:text-dark-600 uppercase tracking-widest mb-6"
                        >
                            🔐 SECTION 8 — You Stay in Control
                        </motion.h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white dark:text-dark-100 mb-8 leading-tight">
                            Unlike fully automated risky AI tools
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
                            {[
                                { text: "Emails require approval (unless you choose auto-approve)", icon: "👁️" },
                                { text: "Full audit trail for every action", icon: "📑" },
                                { text: "Track AI prompt usage and performance", icon: "🎯" },
                                { text: "Monitor token cost in real-time", icon: "💰" },
                                { text: "See every state transition of your leads", icon: "🔄" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 text-slate-300 dark:text-dark-200"
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <p className="font-medium">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block p-6 rounded-2xl bg-white/5 dark:bg-dark-900/40 border border-white/10 dark:border-dark-700 text-xl md:text-2xl font-bold text-slate-400 dark:text-dark-200 italic"
                        >
                            "You’re always in control."
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Control;
