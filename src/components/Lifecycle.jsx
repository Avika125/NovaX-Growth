import { motion } from 'framer-motion';

const Lifecycle = () => {
    const steps = [
        { title: "Import leads", icon: "📥" },
        { title: "AI analyzes business gaps", icon: "🔎" },
        { title: "Email drafted automatically", icon: "✍️" },
        { title: "You approve (or auto-approve)", icon: "✅" },
        { title: "Email sent with tracking", icon: "✉️" },
        { title: "Replies analyzed", icon: "🧠" },
        { title: "Meeting auto-suggested", icon: "📅" },
        { title: "Calendar scheduled", icon: "🗓️" },
        { title: "Deal tracked", icon: "📈" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-4"
                    >
                        📊 SECTION 5 — Full Lead Lifecycle Automation
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-6">
                        From CSV Upload to Closed Deal
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Everything connected. Nothing manual.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-slate-500/0 via-slate-500/30 to-slate-500/0 -translate-y-1/2" />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950 transition-all shadow-sm">
                                    {step.icon}
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 px-2 leading-tight">
                                    {step.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lifecycle;
