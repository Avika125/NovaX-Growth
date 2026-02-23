import { motion } from 'framer-motion';

const IdealFor = () => {
    const audiences = [
        { title: "Lead generation agencies", icon: "🏢" },
        { title: "B2B SaaS companies", icon: "💻" },
        { title: "Digital marketing agencies", icon: "🚀" },
        { title: "SDR teams", icon: "📞" },
        { title: "Founders doing outbound", icon: "👤" },
        { title: "Growth teams", icon: "📈" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-4"
                    >
                        💰 SECTION 9 — Ideal For
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white">
                        Built for Growth-Obsessed Teams
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                            className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col items-center text-center transition-all"
                        >
                            <span className="text-4xl mb-4">{item.icon}</span>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                {item.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IdealFor;
