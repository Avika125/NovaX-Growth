import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Mail, Brain, Calendar } from 'lucide-react';
import GlowGrid from './GlowGrid';
import './CardStack.css';

const StackedCard = ({ feature, index, scrollYProgress }) => {
    const targetScale = 1 - ((4 - index) * 0.05);
    const range = [index * 0.25, 1];
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);
    const Icon = feature.icon;

    return (
        <div className="card-container">
            <motion.div
                style={{
                    scale,
                    top: `calc(10% + ${index * 40}px)`
                }}
                className={`stacked-card bg-gradient-to-br ${feature.color}`}
            >
                <div className="card-glass-overlay"></div>
                <div className="card-content">
                    <div className="card-header">
                        <div className="icon-box">
                            <Icon size={32} className="text-white" />
                        </div>
                        <span className="step-pill">Phase 0{index + 1}</span>
                    </div>
                    <div className="card-text">
                        <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{feature.title}</h3>
                        <p className="text-lg md:text-xl font-medium text-white/80 max-w-xl leading-relaxed">
                            {feature.description}
                        </p>
                        <a href="#" className="card-link-new group inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.2em] font-bold">
                            Explore Module
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
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
            icon: Search,
            color: "from-blue-600/80 via-blue-700/60 to-blue-900/90"
        },
        {
            title: "Personalized outreach",
            description: "Generate targeted emails and follow-ups using real-time insights. Increase engagement with tailored messaging.",
            icon: Mail,
            color: "from-indigo-600/80 via-indigo-700/60 to-indigo-900/90"
        },
        {
            title: "Reply intelligence",
            description: "Detect intent and sentiment in every reply. Extract key points and automate lead routing with accuracy.",
            icon: Brain,
            color: "from-purple-600/80 via-purple-700/60 to-purple-900/90"
        },
        {
            title: "Meeting scheduling",
            description: "Identify meeting requests, propose times, and automate scheduling. Maintain full control at every stage.",
            icon: Calendar,
            color: "from-slate-600/80 via-slate-700/60 to-slate-900/90"
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
                <GlowGrid />
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
