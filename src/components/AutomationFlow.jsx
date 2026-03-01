import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import solution2 from '../assets/solution2.png';

const FeatureCard = ({ feature, index, total }) => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Stacking effect: scale down as we scroll past
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

    // Adaptive top offset for mobile vs desktop
    const topOffset = 80 + index * 32;

    return (
        <div
            ref={containerRef}
            className="sticky top-0 h-[90vh] md:h-screen flex items-start justify-center pt-[4vh] md:pt-[10vh]"
            style={{ top: `${topOffset}px`, zIndex: index }}
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.02,
                    rotateX: -2,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="w-full max-w-5xl bg-slate-50/90 dark:bg-dark-800/90 backdrop-blur-2xl border border-slate-200/50 dark:border-dark-700/50 rounded-[32px] md:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden group transition-all duration-500 mx-4 md:mx-0"
            >
                <div className="flex flex-col lg:flex-row h-full">
                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div
                            className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 dark:bg-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-6 md:mb-8"
                            style={{ transform: "translateZ(30px)" }}
                        >
                            <span className="text-xl md:text-3xl">{feature.icon}</span>
                        </div>
                        <div style={{ transform: "translateZ(20px)" }}>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-4 md:mb-6 leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 dark:text-dark-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                {feature.desc}
                            </p>
                            <div className="flex items-center gap-4 text-[10px] md:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                <span className="w-6 md:w-8 h-[1px] bg-blue-600 dark:bg-blue-400" />
                                Feature 0{index + 1}
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative bg-slate-200 dark:bg-dark-900 min-h-[200px] md:min-h-[300px]">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-50/90 dark:from-dark-800/90 via-transparent to-transparent" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const AutomationFlow = () => {
    const features = [
        {
            title: "Lead analysis engine",
            desc: "Pinpoint digital gaps, score leads, and prioritize actions for maximum impact.",
            icon: "💬",
            image: solution2
        },
        {
            title: "Personalized outreach",
            desc: "Generate tailored emails and follow-ups using real-time insights and engagement data.",
            icon: "👤",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Reply intelligence",
            desc: "Assess responses, detect intent, and automate next steps to drive pipeline progress.",
            icon: "✔️",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Lifecycle automation",
            desc: "Automate state changes, approvals, and scheduling with human oversight at every step.",
            icon: "❄️",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="relative bg-white dark:bg-dark-950 transition-colors duration-500" style={{ perspective: "2000px" }}>
            {/* Background Architecture */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6 md:mb-8"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                            SMART WORKFLOWS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6 md:mb-8 leading-tight"
                    >
                        Outbound <span className="italic text-blue-600 dark:text-blue-400">automation.</span> <br />
                        Intelligent sales flow.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4 md:px-0"
                    >
                        Unlock advanced automation for lead analysis, outreach, and reply management.
                        Streamline your sales process with precision.
                    </motion.p>
                </div>

                <div className="relative pb-[10vh] md:pb-[20vh]">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            index={index}
                            total={features.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationFlow;
