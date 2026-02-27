import { motion } from 'framer-motion';

const Lifecycle = () => {
    const steps = [
        {
            title: "Import leads",
            icon: "📥",
            desc: "Upload your lead lists via CSV or sync directly from your CRM settings.",
            color: "bg-blue-500"
        },
        {
            title: "AI analyzes business gaps",
            icon: "🔎",
            desc: "Our AI scans the prospect's tech stack and identifies specific growth opportunities.",
            color: "bg-purple-500"
        },
        {
            title: "Email drafted automatically",
            icon: "✍️",
            desc: "Hyper-personalized emails are generated based on the AI's gap analysis findings.",
            color: "bg-indigo-500"
        },
        {
            title: "You approve (or auto-approve)",
            icon: "✅",
            desc: "Review the drafts in seconds or set auto-approval rules for trusted campaigns.",
            color: "bg-emerald-500"
        },
        {
            title: "Email sent with tracking",
            icon: "✉️",
            desc: "Emails are delivered via optimized warm-up pools with full tracking capability.",
            color: "bg-cyan-500"
        },
        {
            title: "Replies analyzed",
            icon: "🧠",
            desc: "AI classifies replies by sentiment and detects positive intent automatically.",
            color: "bg-amber-500"
        },
        {
            title: "Meeting auto-suggested",
            icon: "📅",
            desc: "AI handles the back-and-forth to find the perfect time for both parties.",
            color: "bg-orange-500"
        },
        {
            title: "Calendar scheduled",
            icon: "🗓️",
            desc: "Meetings appear on your calendar with all lead context synchronized.",
            color: "bg-rose-500"
        },
        {
            title: "Deal tracked",
            icon: "📈",
            desc: "Monitor your pipeline velocity and ROI from initial contact to final signature.",
            color: "bg-blue-600"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-400 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-700 dark:text-dark-300 uppercase tracking-widest">
                            SECTION 5 — Full Lead Lifecycle Automation
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-950 dark:text-dark-100 mb-6 tracking-tight"
                    >
                        From CSV <span className="text-blue-600">Upload</span> to <span className="text-purple-600">Closed Deal</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-dark-300 max-w-2xl mx-auto font-medium"
                    >
                        Everything connected. Everything automated. Nothing manual.
                    </motion.p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* The Path Illustration for Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-10 right-10 bottom-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 50 L 250 50 Q 300 50 300 100 L 300 200 Q 300 250 350 250 L 650 250 Q 700 250 700 300 L 700 400 Q 700 450 750 450 L 1000 450"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                className="text-slate-200 dark:text-dark-700"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="flex flex-col h-full bg-white dark:bg-dark-800/50 p-8 rounded-3xl border border-slate-100 dark:border-dark-700/50 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 backdrop-blur-sm">
                                    <div className={`w-14 h-14 rounded-2xl ${step.color} shadow-lg flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-white`}>
                                        {step.icon}
                                    </div>

                                    <div className="absolute top-6 right-8 text-6xl font-black text-slate-50 dark:text-dark-900 leading-none select-none pointer-events-none">
                                        0{index + 1}
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 dark:text-dark-100 mb-3 relative z-10 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {step.title}
                                    </h4>

                                    <p className="text-slate-600 dark:text-dark-300 text-sm leading-relaxed font-medium">
                                        {step.desc}
                                    </p>

                                    {/* Step number disc for desktop flow indicator */}
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="h-0.5 flex-1 bg-slate-100 dark:bg-dark-700 overflow-hidden">
                                            <motion.div
                                                className={`h-full ${step.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Result Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 max-w-4xl mx-auto p-12 rounded-[40px] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-dark-800 dark:to-dark-950 text-white text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                        The End Result? A predictable revenue engine.
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        NovaX transforms outbound from a guessing game into a scientific process, allowing you to focus on closing while we handle the prospecting.
                    </p>
                    <button className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl relative z-10">
                        Get Your Custom Strategy
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Lifecycle;
