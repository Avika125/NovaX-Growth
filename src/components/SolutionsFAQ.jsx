import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SolutionsFAQ = () => {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const faqs = [
        {
            question: "How does your automation operate?",
            answer: "Our system analyzes leads, scores priority, and automates outreach with human approval for accuracy. We combine AI-driven cold outreach with manual verification to ensure high conversion rates."
        },
        {
            question: "Which sectors are supported?",
            answer: "We support B2B tech, SaaS, consulting, and professional services. Our models are pre-trained on high-value outbound sequences across these specific industries."
        },
        {
            question: "Is manual review required before sending?",
            answer: "Yes. By default, all emails require approval. This ensures that the AI's natural language generation perfectly aligns with your brand voice before ever reaching a lead."
        },
        {
            question: "How is data security managed?",
            answer: "We enforce strict protocols and never share your data. All lead data is encrypted at rest and in transit, and we are fully compliant with GDPR and SOC2 standards."
        }
    ];

    return (
        <section className="relative py-24 bg-white dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
            {/* Crisp CSS Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] dark:opacity-[0.25]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Heading */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-dark-800/60 border border-slate-200 dark:border-dark-700 backdrop-blur-sm mb-6"
                            >
                                <span className="text-[10px] font-bold text-slate-500 dark:text-dark-400 uppercase tracking-[0.2em]">
                                    KNOWLEDGE BASE
                                </span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium leading-none mb-6">
                                <span className="text-slate-900 dark:text-dark-100">FAQ:</span> <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 italic">
                                    outbound
                                </span>
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-dark-300 max-w-xs leading-relaxed tracking-tight">
                                Essential answers for sales automation and lead intelligence.
                            </p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 pt-8 border-t border-slate-200 dark:border-dark-800"
                            >
                                <p className="text-xs font-bold text-slate-900 dark:text-dark-100 mb-2">Have a specific question?</p>
                                <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold group">
                                    Contact Support <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-[24px] border transition-all duration-300 ${activeIndex === index
                                    ? 'bg-slate-50/80 dark:bg-dark-800/40 border-blue-200 dark:border-blue-900/50 shadow-lg shadow-blue-500/5'
                                    : 'bg-white/50 dark:bg-dark-800/20 border-slate-100 dark:border-dark-700/50 hover:border-slate-200 dark:hover:border-dark-600'
                                    } backdrop-blur-sm overflow-hidden`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-8 py-8 flex items-start gap-6 text-left group"
                                >
                                    <span className="text-xs font-mono text-slate-400 dark:text-dark-600 mt-1.5 transition-colors group-hover:text-blue-500">
                                        0{index + 1}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className={`text-lg md:text-xl font-['Playfair_Display'] font-medium transition-colors duration-300 ${activeIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-dark-100'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <p className="mt-4 text-sm text-slate-500 dark:text-dark-300 leading-relaxed max-w-xl">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className={`w-6 h-6 rounded-full border border-slate-200 dark:border-dark-700 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'rotate-180 bg-blue-600 border-blue-600 text-white' : 'text-slate-400'
                                        }`}>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsFAQ;
