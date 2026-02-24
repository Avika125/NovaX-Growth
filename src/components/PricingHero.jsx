import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
    const plans = [
        {
            name: "STARTER",
            price: "$10/mo",
            description: "Single user access",
            cta: "Start",
            notes: "No contract. Cancel anytime.",
            highlight: false
        },
        {
            name: "GROWTH",
            price: "$20/mo",
            description: "Up to 5 users",
            cta: "Upgrade",
            notes: "No contract. Cancel anytime.",
            highlight: true
        },
        {
            name: "ENTERPRISE",
            price: "$30/mo",
            description: "Custom team size",
            cta: "Contact",
            notes: "Tailored solutions. Flexible terms.",
            highlight: false
        }
    ];

    return (
        <section className="pt-32 pb-20 overflow-hidden bg-white dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[9px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-[0.4em] block mb-6"
                    >
                        PLANS & PRICING
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 leading-[1.1] mb-6"
                    >
                        Automate sales. <br />
                        Accelerate growth.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 max-w-2xl mx-auto text-[13px] leading-relaxed"
                    >
                        Flexible automation plans for every sales team. Choose the right fit and scale your outbound intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`p-10 rounded-[32px] flex flex-col items-center text-center transition-all duration-500 ${plan.highlight
                                ? 'bg-[#FDFCF9] dark:bg-dark-100 text-slate-900 ring-1 ring-slate-200 dark:ring-dark-700 shadow-2xl'
                                : 'bg-slate-50 dark:bg-dark-800 text-slate-900 dark:text-dark-100 border border-slate-100 dark:border-dark-700'
                                }`}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-400 dark:text-dark-600">
                                {plan.name}
                            </span>
                            <div className="mb-2">
                                <span className="text-4xl md:text-5xl font-['Playfair_Display'] font-medium">
                                    {plan.price}
                                </span>
                            </div>
                            <p className={`text-[11px] mb-12 ${plan.highlight ? 'text-slate-500' : 'text-slate-500 dark:text-dark-200'}`}>
                                {plan.description}
                            </p>

                            <button className={`w-32 py-3 rounded-xl text-sm font-bold mb-8 transition-all duration-300 ${plan.highlight
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700'
                                : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700'
                                }`}>
                                {plan.cta}
                            </button>

                            <p className="text-[10px] text-slate-400 dark:text-dark-600">
                                {plan.notes}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingHero;
