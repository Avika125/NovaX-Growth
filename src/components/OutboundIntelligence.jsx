import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const SpotlightCard = ({ feature, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, var(--color-600), transparent 80%)`
    );

    // Subtle overlay background for light mode
    const spotlightOpacity = useTransform(
        [mouseX, mouseY],
        () => 0.15
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative group p-8 rounded-3xl bg-slate-50 dark:bg-dark-800/40 border border-slate-100 dark:border-dark-700 transition-all duration-500 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition duration-300"
                style={{ background }}
            />

            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl`} />

            <div className="relative z-10">
                <div className="text-4xl mb-6 bg-white dark:bg-dark-800/20 w-16 h-16 flex items-center justify-center rounded-2xl shadow-md border border-slate-100 dark:border-dark-700 group-hover:scale-110 transition-transform duration-500">
                    {feature.emoji}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-dark-100 mb-4">
                    {feature.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-dark-200 leading-relaxed font-medium">
                    {feature.description}
                </p>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-6 right-8 w-12 h-1 bg-slate-200 dark:bg-dark-700 rounded-full group-hover:w-20 group-hover:bg-slate-900 dark:group-hover:bg-dark-100 transition-all duration-500" />
        </motion.div>
    );
};

const OutboundIntelligence = () => {
    const features = [
        {
            title: "Lead analysis engine",
            description: "Analyze digital presence, identify gaps, and score opportunities. Instantly prioritize and recommend next steps.",
            emoji: "🔍",
            color: "from-blue-500/20 to-blue-600/5 dark:from-blue-500/10 dark:to-transparent"
        },
        {
            title: "Personalized outreach automation",
            description: "Generate targeted emails and follow-ups using real-time insights. Increase engagement with tailored messaging.",
            emoji: "✉️",
            color: "from-indigo-500/20 to-indigo-600/5 dark:from-indigo-500/10 dark:to-transparent"
        },
        {
            title: "Reply intelligence",
            description: "Detect intent and sentiment in every reply. Extract key points and automate lead routing with accuracy.",
            emoji: "🧠",
            color: "from-purple-500/20 to-purple-600/5 dark:from-purple-500/10 dark:to-transparent"
        },
        {
            title: "Meeting scheduling flow",
            description: "Identify meeting requests, propose times, and automate scheduling. Maintain full control at every stage.",
            emoji: "📅",
            color: "from-slate-500/20 to-slate-600/5 dark:from-slate-500/10 dark:to-transparent"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-block"
                    >
                        <span className="text-sm font-bold text-slate-800 dark:text-dark-200 uppercase tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-800 shadow-sm">
                            ⚡ SECTION 2 — The System
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-slate-900 dark:text-dark-100 mb-6 leading-tight tracking-tighter"
                    >
                        Outbound intelligence. <br className="hidden md:block" />
                        <span className="text-slate-400 opacity-50">Automated. Precise.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-dark-200 max-w-2xl mx-auto font-medium"
                    >
                        AI-driven workflows for lead analysis, outreach, and engagement. <br className="hidden md:block" />
                        Built for high-performing sales teams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <SpotlightCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutboundIntelligence;
