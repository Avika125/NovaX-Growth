import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './CardStack.css';

const StackedCard = ({ feature, index, scrollYProgress }) => {
    const targetScale = 1 - ((4 - index) * 0.05);
    const range = [index * 0.25, 1];
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div className="card-container">
            <motion.div
                style={{
                    scale,
                    top: `calc(10% + ${index * 40}px)`
                }}
                className={`stacked-card bg-gradient-to-br ${feature.color}`}
            >
                <div className="card-content">
                    <div className="card-emoji">{feature.emoji}</div>
                    <div className="card-text">
                        <h3 className="text-3xl md:text-5xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-lg md:text-xl font-medium opacity-90 max-w-xl">
                            {feature.description}
                        </p>
                        <a href="#" className="card-link inline-block mt-8 text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-white transition-colors">
                            Learn More —
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const OutboundIntelligence = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const features = [
        {
            title: "Lead analysis engine",
            description: "Analyze digital presence, identify gaps, and score opportunities. Instantly prioritize and recommend next steps.",
            emoji: "🔍",
            color: "from-blue-600 to-blue-900"
        },
        {
            title: "Personalized outreach",
            description: "Generate targeted emails and follow-ups using real-time insights. Increase engagement with tailored messaging.",
            emoji: "✉️",
            color: "from-indigo-600 to-indigo-900"
        },
        {
            title: "Reply intelligence",
            description: "Detect intent and sentiment in every reply. Extract key points and automate lead routing with accuracy.",
            emoji: "🧠",
            color: "from-purple-600 to-purple-900"
        },
        {
            title: "Meeting scheduling",
            description: "Identify meeting requests, propose times, and automate scheduling. Maintain full control at every stage.",
            emoji: "📅",
            color: "from-slate-600 to-slate-900"
        }
    ];

    return (
        <main ref={container} className="stack-main bg-white dark:bg-dark-900 transition-colors duration-300">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-0">
                <div className="text-center px-6">
                    <span className="text-sm font-bold text-slate-800 dark:text-dark-200 uppercase tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-800 shadow-sm mb-6 inline-block">
                        ⚡ SECTION 2 — The System
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-dark-100 mb-6 leading-tight tracking-tighter">
                        Outbound intelligence. <br className="hidden md:block" />
                        <span className="text-slate-400 opacity-50">Automated. Precise.</span>
                    </h2>
                </div>
            </div>

            <div className="cards-wrapper">
                {features.map((feature, index) => {
                    return <StackedCard key={index} feature={feature} index={index} scrollYProgress={scrollYProgress} />
                })}
            </div>
        </main>
    );
};

export default OutboundIntelligence;
