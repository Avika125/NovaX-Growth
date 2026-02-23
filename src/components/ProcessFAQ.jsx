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
        <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.4em] block mb-6"
                        >
                            FAQ
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white leading-[1.1] mb-8"
                        >
                            Automation workflow: <br />
                            your questions answered
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed mb-12 max-w-md"
                        >
                            Get clear, direct answers on onboarding, deliverables, customization, and human oversight for your automation process.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-8 py-3 bg-blue-600 text-white rounded-xl text-[11px] font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
                        >
                            View all
                        </motion.button>
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#FDFCF9] dark:bg-zinc-900/40 border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-8 py-5 text-left flex items-center justify-between group"
                                >
                                    <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className={`text-slate-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100/50 dark:border-white/5 pt-3">
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
