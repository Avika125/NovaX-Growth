import React from 'react';
import { motion } from 'framer-motion';

const ContactSupport = () => {
    const contactMethods = [
        {
            title: "Email assistance",
            desc: "Direct, expert automation support.",
            value: "support@novaxgrowth.com"
        },
        {
            title: "Phone support",
            desc: "Mon–Fri, 8am–5pm PST",
            value: "+1 (555) 123-4567"
        },
        {
            title: "Office visit",
            desc: "Schedule an in-person meeting.",
            value: "101 Web Lane, SF, CA"
        },
        {
            title: "Retail location",
            desc: "See automation demos onsite.",
            value: "101 Web Lane, SF, CA"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-6"
                        >
                            Connect. Automate. <br /> Accelerate.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 dark:text-dark-200 text-sm font-bold tracking-tight"
                        >
                            Request a workflow consultation or support.
                        </motion.p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-3"
                            >
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-dark-100 mb-1">
                                        {method.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-dark-200">
                                        {method.desc}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-slate-900 dark:text-dark-100">
                                    {method.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subscription Section */}
                <div className="pt-20 border-t border-slate-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-md">
                        <h4 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-3">
                            Accelerate outbound. <br /> Automate results.
                        </h4>
                        <p className="text-[13px] text-slate-500 dark:text-dark-200 leading-relaxed">
                            Get expert insights on sales automation. Subscribe for actionable outbound strategies.
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="px-5 py-2.5 bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-dark-100 w-full sm:w-72"
                            />
                            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSupport;
