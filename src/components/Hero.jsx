import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 pt-20">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/50 dark:bg-white/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-100/30 dark:bg-white/[0.02] rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Animated Brand Header */}
                    <div className="mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30, letterSpacing: "0.2em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, letterSpacing: "-0.05em", filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="titanium-text text-[8vw] md:text-[5vw] leading-none select-none block whitespace-nowrap"
                            style={{
                                backgroundImage: `linear-gradient(
                                    135deg, 
                                    #191919ff 0%, 
                                    #918f8fff 25%, 
                                    #b9b8b8ff 50%, 
                                    #918f8fff 75%, 
                                    #252424ff 100%
                                )`,
                            }}
                        >
                            novax growth
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 tracking-tight max-w-2xl mx-auto"
                        >
                            Precision outbound infrastructure. <br className="hidden md:block" /> Powered by advanced AI intelligence.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Pilled Vertical Scroller - Moved to section level to avoid overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
            >
                <div className="w-6 h-10 border-2 border-slate-900/10 dark:border-white/20 rounded-full relative flex justify-center p-1 bg-white/5 backdrop-blur-sm">
                    <motion.div
                        animate={{
                            y: [0, 16, 0],
                            opacity: [1, 0.4, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full shadow-sm"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
