import React from 'react';
import { motion } from 'framer-motion';

const SolutionsFAQ = () => {
    const faqs = [
        {
            question: "How does your automation operate?",
            answer: "Our system analyzes leads, scores priority, and automates outreach with human approval for accuracy."
        },
        {
            question: "Which sectors are supported?",
            answer: "We support B2B tech, SaaS, consulting, and professional services."
        },
        {
            question: "Is manual review required before sending?",
            answer: "Yes. All emails require approval unless auto-approve is enabled."
        },
        {
            question: "How is data security managed?",
            answer: "We enforce strict protocols and never share your data."
        }
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-zinc-900/10 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white mb-4"
                    >
                        FAQ: outbound <br /> automation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-tight mb-16"
                    >
                        Essential answers for sales automation.
                    </motion.p>

                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row gap-6 md:gap-12"
                            >
                                <h3 className="text-base font-medium text-slate-900 dark:text-white md:w-1/3">
                                    {faq.question}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed md:w-2/3">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 space-y-1.5"
                    >
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Have a specific question not listed?</p>
                        <a href="#" className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold group">
                            Contact us <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsFAQ;
