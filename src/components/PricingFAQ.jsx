import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I update my plan?",
            answer: "You can upgrade or downgrade your plan at any time through your account settings or by contacting our support team."
        },
        {
            question: "Which payment options are available?",
            answer: "We accept all major credit cards, wire transfers, and localized payment methods depending on your region."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts for the Starter and Growth plans."
        },
        {
            question: "How are user seats managed?",
            answer: "User seats are managed through your team dashboard. You can add or remove users as your needs evolve."
        },
        {
            question: "Will downgrading affect my data?",
            answer: "No, your data remains secure. However, some advanced features may become unavailable depending on the new plan."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
                    <div className="lg:w-1/3">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-6"
                        >
                            PRICING FAQ
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8"
                        >
                            Billing questions, <br /> answered fast
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 dark:text-dark-200 text-[13px] leading-relaxed mb-10"
                        >
                            Clear, direct answers to your pricing and billing questions.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
                        >
                            Contact
                        </motion.button>
                    </div>

                    <div className="lg:w-2/3 space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#FDFCF9] dark:bg-dark-800/40 border border-slate-100 dark:border-dark-700 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between group"
                                >
                                    <span className="text-sm font-medium text-slate-900 dark:text-dark-100 group-hover:text-blue-600 transition-colors">
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
                                            <div className="px-8 pb-6 text-xs text-slate-500 dark:text-dark-200 leading-relaxed border-t border-slate-100/50 dark:border-dark-700 pt-4">
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

export default PricingFAQ;
