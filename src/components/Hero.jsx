import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import HeroBackground from './HeroBackground';

const Hero = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseSpringX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseSpringY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseSpringY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseSpringX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-palette-100 dark:bg-palette-900 transition-colors duration-500 pt-20"
        >
            {/* 3D Background */}
            <HeroBackground theme={theme} />

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-palette-200/50 dark:bg-palette-700/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-palette-100/30 dark:bg-palette-800/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Animated Brand Header */}
                    <motion.div
                        className="mb-12 perspective-1000"
                        style={{ rotateX, rotateY }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30, letterSpacing: "0.2em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, letterSpacing: "-0.05em", filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="titanium-text text-[8vw] md:text-[7vw] lg:text-[6vw] leading-none select-none block whitespace-nowrap drop-shadow-2xl"
                            style={{
                                backgroundImage: theme === 'dark'
                                    ? `linear-gradient(135deg, #191919ff 0%, #918f8fff 25%, #b9b8b8ff 50%, #918f8fff 75%, #252424ff 100%)`
                                    : `linear-gradient(135deg, #522B5B 0%, #854F6C 25%, #DFB6B2 50%, #854F6C 75%, #522B5B 100%)`,
                            }}
                        >
                            novax growth
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-lg md:text-2xl font-medium text-palette-800 dark:text-palette-200 mt-10 tracking-tight max-w-2xl mx-auto"
                        >
                            Precision outbound infrastructure. <br className="hidden md:block" />
                            <span className="opacity-70">Powered by advanced AI intelligence.</span>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <button className="px-10 py-4 bg-palette-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-palette-600/20">
                            Get Started
                        </button>
                        <button className="px-10 py-4 glass-morphism text-palette-900 dark:text-palette-100 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Pilled Vertical Scroller - Moved to section level to avoid overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
            >
                <div className="w-6 h-10 border-2 border-slate-900/10 dark:border-dark-600/40 rounded-full relative flex justify-center p-1 bg-white/5 backdrop-blur-sm">
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
                        className="w-1.5 h-1.5 bg-palette-900 dark:bg-palette-200 rounded-full shadow-sm"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
