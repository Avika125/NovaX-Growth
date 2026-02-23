import { motion } from 'framer-motion';

const brands = [
    { name: "LOGO", icon: "©️" },
    { name: "EGGS", icon: "🥚" },
    { name: "THE PAAK", icon: "📦" },
    { name: "IDEA", icon: "🔲" },
    { name: "IDEA", icon: "🔲" },
    { name: "ECHOES", icon: "〰️" }
];

const TrustedBy = () => {
    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-6xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1] mb-8">
                            Powering outbound excellence
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
                            Relied on by top-performing enterprises worldwide.
                        </p>
                    </motion.div>

                    {/* Right: Brand Grid */}
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {brands.map((brand, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="h-32 rounded-2xl bg-slate-50 dark:bg-zinc-900/40 border border-slate-100 dark:border-white/5 flex items-center justify-center gap-3 p-6 group transition-all duration-300"
                                >
                                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                                        {brand.icon}
                                    </span>
                                    <span className="font-bold text-slate-900 dark:text-white tracking-widest text-sm md:text-base">
                                        {brand.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
