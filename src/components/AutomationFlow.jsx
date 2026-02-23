import React from 'react';
import { motion } from 'framer-motion';

const AutomationFlow = () => {
    const features = [
        {
            title: "Lead analysis engine",
            desc: "Pinpoint digital gaps, score leads, and prioritize actions for maximum impact.",
            icon: "💬",
            image: "https://images.unsplash.com/photo-1551288049-bb848a55a110?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Personalized outreach",
            desc: "Generate tailored emails and follow-ups using real-time insights and engagement data.",
            icon: "👤",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Reply intelligence",
            desc: "Assess responses, detect intent, and automate next steps to drive pipeline progress.",
            icon: "✔️",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Lifecycle automation",
            desc: "Automate state changes, approvals, and scheduling with human oversight at every step.",
            icon: "❄️",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-zinc-900/10 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white mb-6"
                    >
                        Outbound automation. <br />
                        Intelligent sales flow.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-[13px] leading-relaxed"
                    >
                        Unlock advanced automation for lead analysis, outreach, and reply management. Streamline every stage of your sales process.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-white dark:bg-zinc-900/40 border border-slate-100 dark:border-white/5 rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-8 pb-0 flex items-start gap-4">
                                <div className="p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    {feature.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-xs">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 px-8 pb-8">
                                <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200/50 dark:ring-white/5">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationFlow;
