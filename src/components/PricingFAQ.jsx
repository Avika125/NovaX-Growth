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
        <section className="relative py-24 md:py-32 bg-white dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
            {/* Unique Background: Radial Mesh + Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 max-w-7xl mx-auto">
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] block mb-6">
                                SUPPORT & BILLING
                            </span>
                            <h2 className="text-4xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-8">
                                Questions? <br />
                                We have <span className="italic text-blue-600 dark:text-blue-400">answers.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-dark-300 text-lg leading-relaxed mb-10">
                                Clear, direct answers to your pricing and billing questions.
                                Our team is here to help you scale.
                            </p>
                            <button className="px-8 py-4 bg-slate-900 dark:bg-dark-100 text-white dark:text-dark-900 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 shadow-xl shadow-slate-900/10 dark:shadow-none">
                                Contact Support
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group rounded-[32px] transition-all duration-500 border ${activeIndex === index
                                        ? 'bg-white dark:bg-dark-800 border-blue-200 dark:border-blue-900/50 shadow-2xl shadow-blue-500/5'
                                        : 'bg-white/40 dark:bg-dark-900/40 border-slate-200 dark:border-dark-700/50 hover:border-slate-300 dark:hover:border-dark-600'
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-8 md:px-12 py-8 text-left flex items-start justify-between gap-6"
                                >
                                    <div className="flex gap-6 md:gap-10">
                                        <span className="text-xs font-black text-blue-600 dark:text-blue-400 opacity-40 mt-1">
                                            0{index + 1}
                                        </span>
                                        <span className="text-lg md:text-xl font-medium text-slate-900 dark:text-dark-100 leading-tight">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`mt-1 h-6 w-6 rounded-full border border-slate-200 dark:border-dark-700 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-blue-600 border-blue-600 rotate-180' : 'group-hover:border-blue-600'}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={activeIndex === index ? 'text-white' : 'text-slate-400'}>
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 md:px-12 pb-10 ml-0 md:ml-16 text-slate-500 dark:text-dark-300 text-base leading-relaxed">
                                                <div className="h-px w-12 bg-blue-600/20 mb-6" />
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
