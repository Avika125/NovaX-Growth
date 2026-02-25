import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const brands = [
    { name: "LOGO", icon: "©️" },
    { name: "EGGS", icon: "🥚" },
    { name: "THE PAAK", icon: "📦" },
    { name: "IDEA", icon: "🔲" },
    { name: "ECHOES", icon: "〰️" },
    { name: "CORE", icon: "⭕" },
    { name: "FLUX", icon: "🏹" },
];

const TrustedBy = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 30 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax Transforms
    const headlineX = useTransform(springX, [-0.5, 0.5], ["-15px", "15px"]);
    const headlineY = useTransform(springY, [-0.5, 0.5], ["-10px", "10px"]);
    const dashboardX = useTransform(springX, [-0.5, 0.5], ["20px", "-20px"]);
    const dashboardY = useTransform(springY, [-0.5, 0.5], ["15px", "-15px"]);
    const backgroundX = useTransform(springX, [-0.5, 0.5], ["-5px", "5px"]);
    const backgroundY = useTransform(springY, [-0.5, 0.5], ["-5px", "5px"]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Staggered entrance variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const headlineLines = ["Powering", "outbound", "excellence"];

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-20 bg-white dark:bg-palette-900 transition-colors duration-500 overflow-hidden cursor-default"
        >
            {/* Texture Overlay (Noise) */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0"
                style={{ backgroundImage: 'url("https://grains-res.cloudinary.com/image/upload/v1612456485/grains/noise.png")' }} />

            {/* Background Motion Elements */}
            <motion.div
                style={{ x: backgroundX, y: backgroundY }}
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            >
                {/* Soft Glow Behind Headline */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-palette-200/40 dark:bg-palette-700/10 rounded-full blur-[140px] animate-pulse" />

                {/* Spotlight effect */}
                <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-soft-light"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent 40%)`
                    }}
                />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Side: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ x: headlineX, y: headlineY }}
                    >
                        <div className="flex flex-col gap-1">
                            {headlineLines.map((line, i) => (
                                <motion.h2
                                    key={i}
                                    variants={lineVariants}
                                    className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-palette-900 dark:text-palette-100 leading-tight"
                                >
                                    {line}
                                </motion.h2>
                            ))}
                        </div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-palette-600 dark:text-palette-300 font-medium mt-6 max-w-xl"
                        >
                            Relied on by top-performing enterprises worldwide.
                        </motion.p>
                    </motion.div>

                    {/* Right Side: Abstract Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        style={{ x: dashboardX, y: dashboardY }}
                        className="hidden lg:block relative"
                    >
                        <div className="glass-morphism rounded-3xl p-8 aspect-video border-palette-200/50 dark:border-palette-700/30 overflow-hidden relative shadow-2xl">
                            {/* Ambient light sweep animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 dark:via-white/10 to-transparent -translate-x-full animate-sweep" />

                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="h-4 w-32 bg-palette-100/50 dark:bg-palette-800/50 rounded-full" />
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-24 rounded-xl bg-palette-100/30 dark:bg-palette-800/30 border border-palette-200/30 dark:border-palette-700/30 flex flex-col items-center justify-center gap-2">
                                        <div className="w-12 h-2 bg-palette-600/30 rounded-full" />
                                        <div className="w-8 h-4 bg-palette-900/40 dark:bg-palette-100/40 rounded" />
                                    </div>
                                ))}
                            </div>

                            <div className="h-[120px] rounded-xl bg-palette-100/20 dark:bg-palette-800/20 border border-palette-200/20 dark:border-palette-700/20 relative overflow-hidden p-4">
                                <div className="flex items-end gap-1 h-full">
                                    {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 1 + i * 0.1, duration: 1 }}
                                            className="flex-1 bg-palette-600/50 rounded-t-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating elements for extra depth */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-32 h-32 glass-morphism rounded-2xl flex items-center justify-center p-4 shadow-xl z-20"
                        >
                            <div className="w-full h-full rounded-full border-4 border-palette-600/30 border-t-palette-600 animate-spin" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Logo Cards Section */}
                <div className="relative">
                    {/* Lighting Effects behind cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-palette-600/10 dark:bg-palette-400/5 blur-[80px] pointer-events-none" />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
                    >
                        {brands.map((brand, index) => (
                            <LogoCard key={index} brand={brand} theme={theme} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Smooth Scroll Indicator Enhancement */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-palette-900/20 to-transparent dark:from-palette-100/20 relative">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-[-1px] w-[3px] h-4 bg-palette-600 rounded-full shadow-[0_0_10px_rgba(133,79,108,0.5)]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

const LogoCard = ({ brand, theme }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{
                y: -6,
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            className="group relative"
        >
            {/* Soft Glow Shadow on Hover */}
            <div className="absolute inset-0 bg-palette-600/0 group-hover:bg-palette-600/20 blur-2xl transition-all duration-500 rounded-2xl" />

            <div className="relative flex items-center gap-4 p-6 rounded-2xl bg-palette-100/50 dark:bg-palette-800/40 border border-palette-200/50 dark:border-palette-700/50 glass-morphism backdrop-blur-sm group-hover:border-palette-600/50 transition-all duration-300 z-10 overflow-hidden">
                {/* Reflective shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0 group-hover:via-white/5 dark:group-hover:via-white/10 transition-all duration-700" />

                <motion.span
                    whileHover={{ rotate: 12 }}
                    className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300"
                >
                    {brand.icon}
                </motion.span>
                <span className="font-bold text-palette-900 dark:text-palette-100 tracking-widest text-lg">
                    {brand.name}
                </span>

                {/* Cursor glow effect container */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(133,79,108,0.1)'}, transparent 70%)`
                    }}
                />
            </div>
        </motion.div>
    );
};

export default TrustedBy;
