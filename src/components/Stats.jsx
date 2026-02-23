import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            value: "200K",
            label: "Leads analyzed for opportunity gaps"
        },
        {
            value: "100%",
            label: "Outreach precision rate"
        },
        {
            value: "1,600",
            label: "Custom responses sent"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 w-full flex flex-col md:flex-row items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="text-center px-8 w-full"
                            >
                                <span className="block text-6xl md:text-7xl font-light text-slate-900 dark:text-white mb-4 tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="block text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium max-w-[200px] mx-auto leading-relaxed">
                                    {stat.label}
                                </span>
                            </motion.div>

                            {/* Vertical Divider (Desktop) */}
                            {index < stats.length - 1 && (
                                <div className="hidden md:block h-32 w-[1px] bg-slate-200 dark:bg-white/10" />
                            )}

                            {/* Horizontal Divider (Mobile) */}
                            {index < stats.length - 1 && (
                                <div className="md:hidden w-24 h-[1px] bg-slate-200 dark:bg-white/10 mt-12" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
