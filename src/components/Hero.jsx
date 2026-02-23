import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero.mp4';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 pt-20 md:pt-0">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 dark:bg-black/70 dark:backdrop-blur-[1px]" style={{ background: 'linear-gradient(160deg, rgba(15,15,25,0.72) 0%, rgba(10,10,20,0.55) 50%, rgba(20,15,35,0.68) 100%)' }} />
            </div>

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-white/5 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-white/[0.02] rounded-full blur-[140px]" />
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
                            className="text-lg md:text-xl font-medium text-white/80 dark:text-slate-300 mt-8 tracking-tight max-w-2xl mx-auto drop-shadow-sm"
                        >
                            Precision outbound infrastructure. <br className="hidden md:block" /> Powered by advanced AI intelligence.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Pilled Vertical Scroller */}
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
