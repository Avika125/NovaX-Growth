import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        question: "How does the AI ensure it doesn't send broken messaging?",
        answer: "Our engine uses a multi-layer verification process. The AI Copywriter drafts the message, the 'Controller' agent checks for logical errors and tone, and if any 'hallucination' is detected, it flags it for human review. You have full control over the 'Human-in-the-loop' threshold."
    },
    {
        question: "Is this just another generic wrapper for GPT-4?",
        answer: "Absolutely not. novaxgrowth is a custom-built infrastructure that combines multiple specialized AI models with a proprietary 'Deep Search' engine that scrapes live intent data from over 20+ sources. We don't just prompt; we research."
    },
    {
        question: "Does it integrate with my existing CRM?",
        answer: "Yes. We offer native two-way sync with Salesforce, HubSpot, Pipedrive, and Apollo. Leads found by novaxgrowth are automatically enriched and pushed to your CRM sequences with all context included."
    },
    {
        question: "Will my domain get blacklisted?",
        answer: "We use sophisticated inbox rotation, warm-up schedules, and 'Natural Language Variance' to ensure every email is unique. We treat your deliverability as our highest priority, strictly adhering to ESP guidelines."
    },
    {
        question: "How long does it take to see results?",
        answer: "Most clients see their first booked meeting within 14 days of launch. Our agents work 24/7, meaning your pipeline starts growing the moment the 'Run' button is pressed."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-slate-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6"
                    >
                        Questions? <span className="text-slate-950 dark:text-white">Answered.</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center group"
                            >
                                <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-slate-950 dark:group-hover:text-slate-200 transition-colors">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    className="text-slate-900 dark:text-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
