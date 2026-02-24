import { motion } from 'framer-motion';

const AIAgents = () => {
    const agents = [
        {
            id: "1️⃣",
            name: "Lead Analyst Agent",
            tasks: [
                "Scans company website",
                "Detects missing opportunities",
                "Assigns HOT / WARM / COLD priority",
                "Suggests services to pitch"
            ],
            color: "slate"
        },
        {
            id: "2️⃣",
            name: "Email Copywriter Agent",
            tasks: [
                "Writes hyper-personalized emails",
                "Creates follow-ups automatically",
                "Adjusts tone based on industry"
            ],
            color: "zinc"
        },
        {
            id: "3️⃣",
            name: "Reply Intelligence Agent",
            tasks: [
                "Detects intent (Meeting, Pricing, Objection)",
                "Sentiment analysis",
                "Extracts key points",
                "Updates lead status automatically"
            ],
            color: "neutral"
        },
        {
            id: "4️⃣",
            name: "Response Agent",
            tasks: [
                "Drafts contextual replies",
                "Suggests meeting slots",
                "Handles objections smartly"
            ],
            color: "gray"
        },
        {
            id: "5️⃣",
            name: "Automation Controller",
            tasks: [
                "Runs in background",
                "Sends follow-ups if no reply",
                "Manages lifecycle automatically"
            ],
            color: "stone"
        }
    ];

    return (
        <section className="py-24 bg-palette-100 dark:bg-palette-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-palette-600 dark:text-palette-200 uppercase tracking-widest mb-4"
                    >
                        🤖 SECTION 4 — AI Agents Working for You
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-black text-palette-900 dark:text-palette-100 mb-6">
                        A Specialized Team of AI Agents
                    </h3>
                    <p className="text-xl text-palette-800 dark:text-palette-200 max-w-2xl mx-auto">
                        Each agent has a specific job, collaborating to transform your outreach into a predictable growth machine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-palette-200 dark:bg-palette-800/60 border border-palette-700/5 dark:border-palette-700 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                        >
                            {/* Subtle background color overlay on hover */}
                            <div className={`absolute inset-0 bg-${agent.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="flex items-center gap-4 mb-6 relative">
                                <span className="text-3xl">{agent.id}</span>
                                <h4 className="text-2xl font-black text-slate-950 dark:text-dark-100">
                                    {agent.name}
                                </h4>
                            </div>

                            <ul className="space-y-4 relative">
                                {agent.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-palette-800 dark:text-palette-200">
                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-palette-600 dark:bg-palette-600`} />
                                        <span className="text-sm font-medium leading-relaxed">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIAgents;
