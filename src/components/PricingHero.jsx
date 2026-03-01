import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
    const plans = [
        {
            name: "STARTER",
            price: "$10",
            period: "/mo",
            description: "Single user access",
            features: ["5 Workflows", "Basic Research", "Email Support", "Manual Approval"],
            cta: "Start Free",
            notes: "No credit card required.",
            highlight: false
        },
        {
            name: "GROWTH",
            price: "$24",
            period: "/mo",
            description: "Ideal for growing teams",
            features: ["Unlimited Workflows", "Advanced Lead Scoring", "Priority Support", "AI Auto-Pilot"],
            cta: "Go Pro",
            notes: "Our most popular choice.",
            highlight: true
        },
        {
            name: "ENTERPRISE",
            price: "Custom",
            period: "",
            description: "For elite sales ops",
            features: ["Dedicated Infrastructure", "Custom Integrations", "24/7 Concierge", "SLA Guarantee"],
            cta: "Contact Sales",
            notes: "Scalable volume discount.",
            highlight: false
        }
    ];

    return (
        <section className="relative pt-32 pb-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden" style={{ perspective: "2000px" }}>
            {/* Unique Background: Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]" />
                <div
                    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                            CHOOSE YOUR INTELLIGENCE
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                    >
                        Precision <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 italic">
                            pricing.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Flexible plans designed to scale with your outbound performance. <br className="hidden md:block" />
                        No hidden fees, just pure automation results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -12,
                                rotateY: index === 0 ? 5 : index === 2 ? -5 : 0,
                                rotateX: 2,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className={`relative p-12 rounded-[48px] flex flex-col transition-all duration-300 backdrop-blur-2xl border ${plan.highlight
                                    ? 'bg-white dark:bg-dark-800 border-blue-200 dark:border-blue-900/50 shadow-[0_40px_100px_rgba(37,99,235,0.12)] md:py-16'
                                    : 'bg-white/40 dark:bg-dark-900/40 border-slate-200 dark:border-dark-700/50 py-12'
                                }`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] py-2 px-6 rounded-full shadow-xl shadow-blue-500/40">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-10" style={{ transform: "translateZ(20px)" }}>
                                <span className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] block mb-4">
                                    {plan.name}
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100">
                                        {plan.price}
                                    </span>
                                    <span className="text-slate-400 dark:text-dark-500 font-medium">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-12 flex-1" style={{ transform: "translateZ(10px)" }}>
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-500 dark:text-dark-300">
                                        <svg className={`w-4 h-4 ${plan.highlight ? 'text-blue-600' : 'text-slate-300 dark:text-dark-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ transform: "translateZ(30px)" }}>
                                <button className={`w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 mb-6 ${plan.highlight
                                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50'
                                        : 'bg-slate-900 dark:bg-dark-100 text-white dark:text-dark-900 hover:bg-slate-800 dark:hover:bg-white'
                                    }`}>
                                    {plan.cta}
                                </button>
                                <p className="text-[10px] text-slate-400 dark:text-dark-500 text-center font-medium italic">
                                    {plan.notes}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingHero;
