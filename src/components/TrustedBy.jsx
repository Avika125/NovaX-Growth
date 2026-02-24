import { motion } from 'framer-motion';

const brands = [
    { name: "LOGO", icon: "©️" },
    { name: "EGGS", icon: "🥚" },
    { name: "THE PAAK", icon: "📦" },
    { name: "IDEA", icon: "🔲" },
    { name: "IDEA", icon: "🔲" },
    { name: "ECHOES", icon: "〰️" },
    { name: "CORE", icon: "⭕" },
    { name: "FLUX", icon: "🏹" },
];

const TrustedBy = () => {
    // Duplicate brands to create seamless loop
    const doubledBrands = [...brands, ...brands];

    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-6"
                    >
                        Powering outbound excellence
                    </motion.h2>
                    <p className="text-xl text-slate-500 dark:text-dark-200 font-medium">
                        Relied on by top-performing enterprises worldwide.
                    </p>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {doubledBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 px-12 py-8 mx-4 rounded-2xl bg-slate-50 dark:bg-dark-800/40 border border-slate-100 dark:border-dark-700 group hover:bg-white dark:hover:bg-dark-800 transition-all duration-300 min-w-[250px] justify-center"
                        >
                            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                                {brand.icon}
                            </span>
                            <span className="font-bold text-slate-900 dark:text-dark-100 tracking-widest text-lg">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBE4D8] dark:from-dark-900 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBE4D8] dark:from-dark-900 to-transparent z-10" />
            </div>
        </section>
    );
};

export default TrustedBy;
