import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How fast is onboarding?",
            answer: "Onboarding is designed to be seamless. Most teams can get their first automation live within 48 hours of setup."
        },
        {
            question: "What do I receive?",
            answer: "You receive full access to our AI agent suite, real-time analytics, and a dedicated success manager to guide your strategy."
        },
        {
            question: "What's next after setup?",
            answer: "After setup, the AI begins analyzing your leads immediately. You'll start seeing prioritized outreach triggers within the first day."
        },
        {
            question: "Can I adjust automation rules?",
            answer: "Yes, you have full control over the automation rules and can adjust them at any time through your dashboard."
        },
        {
            question: "Is human review included?",
            answer: "Absolutely. We believe in human-in-the-loop automation to ensure every interaction maintains your brand's voice and quality."
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Shifted Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                        >
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                FAQ
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                        >
                            Automation <br />
                            workflow: <br />
                            <span className="italic text-blue-600 dark:text-blue-400">answers.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-sm md:text-base text-slate-500 dark:text-dark-300 leading-relaxed max-w-md font-light mb-12"
                        >
                            Get clear, direct answers on onboarding, deliverables, customization, and human oversight for your automation process.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-slate-900 dark:bg-dark-100 text-white dark:text-dark-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-xl shadow-slate-900/10 dark:shadow-none"
                        >
                            Support Center
                        </motion.button>
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className={`rounded-[24px] transition-all duration-500 border ${activeIndex === index ? 'bg-white dark:bg-dark-800 border-blue-600/30 shadow-2xl shadow-blue-500/10' : 'bg-white/40 dark:bg-dark-800/40 border-slate-200/50 dark:border-dark-700/50 backdrop-blur-md'}`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-8 py-6 text-left flex items-center gap-6 group"
                                >
                                    <span className={`text-2xl font-['Playfair_Display'] font-medium transition-colors duration-500 ${activeIndex === index ? 'text-blue-600' : 'text-slate-300 dark:text-dark-600 group-hover:text-blue-600/50'}`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className={`text-sm md:text-base font-medium transition-colors duration-500 flex-1 ${activeIndex === index ? 'text-slate-900 dark:text-dark-50' : 'text-slate-600 dark:text-dark-300 group-hover:text-slate-900 dark:group-hover:text-dark-100'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-dark-700 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-blue-600 border-blue-600 rotate-180' : 'group-hover:border-blue-600/50'}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={activeIndex === index ? 'text-white' : 'text-slate-400'}>
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 ml-14 text-sm md:text-base text-slate-500 dark:text-dark-400 leading-relaxed font-light border-t border-slate-100 dark:border-dark-700/50 pt-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFAQ;
