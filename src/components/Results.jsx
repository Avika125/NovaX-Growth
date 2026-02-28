import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const TiltCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseSpringX = useSpring(x);
    const mouseSpringY = useSpring(y);

    const rotateX = useTransform(mouseSpringY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseSpringX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setMousePos({ x: mouseX, y: mouseY });
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0]
            }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                y: {
                    duration: 5 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="relative bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-black/[0.05] dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-2xl transition-all duration-500 perspective-1000 group overflow-hidden"
        >
            {/* Interactive Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(94, 234, 212, 0.15), transparent 40%)`
                }}
            />

            <div style={{ transform: "translateZ(60px)" }} className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-100 dark:bg-white/5 object-cover border border-black/5 dark:border-white/10"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-teal-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                                <Check size={8} className="text-white font-bold" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base tracking-tight leading-none mb-1.5">
                                {item.name}
                            </h4>
                            <p className="text-slate-500 dark:text-white/40 text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.15em]">
                                {item.role}
                            </p>
                        </div>
                    </div>
                    <div className="opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13V10C14.017 8.89543 14.9124 8 16.017 8H19.017C20.1216 8 21.017 8.89543 21.017 10V13C21.017 14.1046 20.1216 15 19.017 15H16.017C14.9124 15 14.017 14.1046 14.017 13ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 13V10C3 8.89543 3.89543 8 5 8H8C9.10457 8 10 8.89543 10 10V13C10 14.1046 9.10457 15 8 15H5C3.89543 15 3 14.1046 3 13ZM3 5V2C3 0.89543 3.89543 0 5 0H8C9.10457 0 10 0.89543 10 2V5C10 6.10457 9.10457 7 8 7H5C3.89543 7 3 6.10457 3 5ZM14.017 5V2C14.017 0.89543 14.9124 0 16.017 0H19.017C20.1216 0 21.017 0.89543 21.017 2V5C21.017 6.10457 20.1216 7 19.017 7H16.017C14.9124 7 14.017 6.10457 14.017 5Z" /></svg>
                    </div>
                </div>

                <p className="text-lg md:text-[1.35rem] text-slate-800 dark:text-white/90 leading-snug font-semibold tracking-tight">
                    {item.quote}
                </p>

                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                    <span className="text-[10px] font-bold text-teal-600/80 dark:text-teal-400/60 uppercase tracking-widest">Verified Automation Result</span>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full -mr-24 -mt-24 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full -ml-24 -mb-24 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
        <section className="relative py-16 md:py-32 bg-palette-100 dark:bg-palette-900 transition-colors duration-500 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-palette-600/5 dark:bg-palette-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-palette-200/10 dark:bg-palette-200/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
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
                        className="text-3xl md:text-5xl lg:text-6xl font-serif text-palette-900 dark:text-white mb-6 leading-[1.1] tracking-tighter"
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

                <div className="relative py-10 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto"
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

