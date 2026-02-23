import React from 'react';
import { motion } from 'framer-motion';

const PricingTestimonials = () => {
    const testimonials = [
        {
            quote: "Lead scoring is precise—our pipeline is always prioritized.",
            author: "Taylor Brooks",
            role: "Vertex Analytics",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        },
        {
            quote: "Meeting rates improved immediately after onboarding.",
            author: "Jordan Ellis",
            role: "BluePeak Solutions",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
        },
        {
            quote: "Workflow logic is seamless and keeps us efficient.",
            author: "Morgan Shaw",
            role: "Summit Growth",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
        },
        {
            quote: "Follow-up triggers helped us close deals faster.",
            author: "Alex Harper",
            role: "NextGen Insights",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        },
        {
            quote: "Intent detection filters out cold leads instantly.",
            author: "Casey Lin",
            role: "Pulse Metrics",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
        },
        {
            quote: "Human oversight ensures every campaign is on track.",
            author: "Riley Quinn",
            role: "Signal Bridge",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-white mb-12"
                    >
                        Automation that <br /> drives real outcomes
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="p-10 rounded-[32px] bg-[#FDFCF9] dark:bg-zinc-900/40 border border-slate-100 dark:border-white/5 text-left flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
                            >
                                <p className="text-lg text-slate-900 dark:text-white font-['Playfair_Display'] italic mb-10 leading-snug">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                                            {item.author}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider font-bold">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300">
                            Start now
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingTestimonials;
