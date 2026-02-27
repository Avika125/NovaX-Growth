import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TiltCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseSpringX = useSpring(x);
    const mouseSpringY = useSpring(y);

    const rotateX = useTransform(mouseSpringY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseSpringX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
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
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0] // Floating motion
            }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                y: {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                }
            }}
            className="relative bg-white/70 dark:bg-palette-800/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-palette-700/5 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all duration-500 perspective-1000 group overflow-hidden"
        >
            <div style={{ transform: "translateZ(80px)" }} className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-2xl bg-palette-100 dark:bg-palette-700 object-cover border border-palette-700/10 dark:border-white/10"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-palette-600 rounded-full border-2 border-white dark:border-palette-800" />
                    </div>
                    <div>
                        <h4 className="font-bold text-palette-900 dark:text-white text-base tracking-tight">
                            {item.name}
                        </h4>
                        <p className="text-palette-600 dark:text-palette-200/60 text-xs font-semibold uppercase tracking-wider">
                            {item.role}
                        </p>
                    </div>
                </div>

                <p className="text-xl text-palette-800 dark:text-palette-100/90 leading-relaxed font-medium">
                    "{item.quote}"
                </p>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-palette-600/10 to-transparent rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-palette-200/20 to-transparent rounded-full -ml-16 -mb-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

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
        <section className="relative py-32 bg-palette-100 dark:bg-palette-900 transition-colors duration-500 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-palette-600/5 dark:bg-palette-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-palette-200/10 dark:bg-palette-200/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-palette-600/10 dark:bg-palette-600/20 text-palette-600 dark:text-palette-200 text-[9px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        RELIED ON BY TOP PERFORMERS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-palette-900 dark:text-white mb-6 leading-[1.1] tracking-tighter"
                    >
                        Automation that <br />
                        <span className="italic font-light text-palette-600 dark:text-palette-200">drives real results</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-palette-800/70 dark:text-palette-100/60 max-w-xl mx-auto font-medium leading-relaxed"
                    >
                        Discover how leading teams accelerate pipeline and close more deals with intelligent outbound automation.
                    </motion.p>
                </div>

                {/* Diagonal Grid Container */}
                <div className="relative perspective-2000 py-20">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, rotateY: -10, skewX: -5 }}
                        whileInView={{ opacity: 1, rotateX: 25, rotateY: -15, skewX: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto origin-center"
                    >
                        {testimonials.map((item, index) => (
                            <TiltCard key={index} item={item} index={index} />
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-24"
                >
                    <button className="group relative px-12 py-5 bg-palette-900 dark:bg-white text-white dark:text-palette-900 rounded-2xl font-bold text-lg transition-all overflow-hidden shadow-2xl hover:scale-105 active:scale-95">
                        <span className="relative z-10">View More Success Stories</span>
                        <div className="absolute inset-0 bg-palette-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Results;

