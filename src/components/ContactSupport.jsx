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
        <section className="relative py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden" style={{ perspective: "1500px" }}>
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
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
                    <div className="lg:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-600/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-sm mb-6"
                            >
                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                    GET IN TOUCH
                                </span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-8 leading-[1.1]">
                                Connect. <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 italic">
                                    Automate.
                                </span> <br />
                                Accelerate.
                            </h2>
                            <p className="text-slate-500 dark:text-dark-300 text-[15px] leading-relaxed tracking-tight max-w-sm">
                                Ready to transform your sales flow? Request a custom workflow consultation or reach out for technical support.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -8,
                                    rotateY: index % 2 === 0 ? 5 : -5,
                                    rotateX: 2,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/60 dark:bg-dark-800/40 backdrop-blur-md border border-slate-100 dark:border-dark-700/50 p-8 rounded-[32px] hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-300"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-widest">
                                            {method.title}
                                        </h3>
                                        <p className="text-[13px] text-slate-400 dark:text-dark-500">
                                            {method.desc}
                                        </p>
                                    </div>
                                    <p className="text-lg font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {method.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subscription Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-20 border-t border-slate-200 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center gap-12 bg-gradient-to-r from-blue-50/20 via-transparent to-transparent dark:from-blue-900/5 p-12 rounded-[40px]"
                >
                    <div className="max-w-md text-center md:text-left">
                        <h4 className="text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-4">
                            Accelerate outbound. <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 italic">
                                Automate results.
                            </span>
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-dark-300 leading-relaxed">
                            Get expert insights on AI-driven sales. Subscribe for exclusive outbound strategies and growth hacks.
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white dark:bg-dark-800 shadow-2xl shadow-blue-500/10 rounded-2xl border border-slate-100 dark:border-dark-700">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 bg-transparent text-sm focus:outline-none dark:text-dark-100 w-full sm:w-72"
                            />
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-300 whitespace-nowrap">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSupport;
