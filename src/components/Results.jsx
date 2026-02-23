import { motion } from 'framer-motion';

const Results = () => {
    const testimonials = [
        {
            quote: "Pipeline growth was immediate. Automation is precise and dependable.",
            name: "Jordan Avery",
            role: "Vertex Insights",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
        },
        {
            quote: "Deal volume increased. Manual work dropped significantly.",
            name: "Morgan Ellis",
            role: "Summit Axis",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan"
        },
        {
            quote: "Lead scoring is accurate. Our team focuses on high-value prospects only.",
            name: "Taylor Brooks",
            role: "BluePeak Analytics",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor"
        },
        {
            quote: "Follow-ups are automatic. No missed leads.",
            name: "Casey Lin",
            role: "NextGen Strategy",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey"
        },
        {
            quote: "Intent signals are clear. Faster responses, more meetings booked.",
            name: "Riley Shaw",
            role: "CoreBridge Group",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley"
        },
        {
            quote: "Adaptive replies make outreach feel tailored and effective.",
            name: "Alex Kim",
            role: "Optima Partners",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
        }
    ];

    return (
        <section className="py-24 bg-[#F9F8F3] dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 block"
                    >
                        RELIED ON BY TOP PERFORMERS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white mb-6 leading-tight"
                    >
                        Automation that <br /> drives real results
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Discover how leading teams accelerate pipeline and close more deals with intelligent outbound automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-10 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <p className="text-2xl text-slate-800 dark:text-slate-200 mb-8 leading-snug font-medium">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/10"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-950 dark:text-white text-sm">
                                        {item.name}
                                    </h4>
                                    <p className="text-slate-400 dark:text-slate-500 text-xs">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <button className="px-8 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20">
                        View proof
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Results;
