import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TiltCard = ({ item, index }) => {
    const cardRef = useRef(null);
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 p-10 rounded-2xl border border-palette-700/10 dark:border-dark-700 shadow-sm hover:shadow-xl transition-shadow duration-500 perspective-1000 group"
        >
            <div style={{ transform: "translateZ(50px)" }}>
                <p className="text-2xl text-slate-800 dark:text-dark-100 mb-8 leading-snug font-medium italic">
                    "{item.quote}"
                </p>

                <div className="flex items-center gap-4">
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full bg-slate-100 dark:bg-dark-700 border-2 border-palette-200 dark:border-palette-700"
                    />
                    <div>
                        <h4 className="font-bold text-slate-950 dark:text-dark-100 text-base">
                            {item.name}
                        </h4>
                        <p className="text-palette-600 dark:text-palette-400 text-sm font-semibold">
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>

            {/* Background highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-palette-700/5 to-transparent dark:from-palette-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
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
        <section className="py-24 bg-[#F9F8F3] dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-black text-palette-600 dark:text-palette-400 uppercase tracking-[0.4em] mb-4 block"
                    >
                        RELIED ON BY TOP PERFORMERS
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-serif text-slate-900 dark:text-dark-100 mb-8 leading-[1.1] tracking-tighter"
                    >
                        Automation that <br /> <span className="text-palette-600">drives real results</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-dark-200 max-w-3xl mx-auto font-medium"
                    >
                        Discover how leading teams accelerate pipeline and close more deals with intelligent outbound automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((item, index) => (
                        <TiltCard key={index} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <button className="px-12 py-5 bg-palette-600 hover:bg-palette-700 text-white rounded-full font-bold text-lg transition-all shadow-2xl shadow-palette-600/30 hover:scale-105 active:scale-95">
                        View More Success Stories
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Results;
