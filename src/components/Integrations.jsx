import { motion } from 'framer-motion';

const integrations = [
    { name: "Salesforce", color: "bg-slate-800" },
    { name: "HubSpot", color: "bg-zinc-800" },
    { name: "Pipedrive", color: "bg-slate-700" },
    { name: "Slack", color: "bg-zinc-700" },
    { name: "Zapier", color: "bg-slate-600" },
    { name: "LinkedIn", color: "bg-zinc-900" },
    { name: "Apollo", color: "bg-slate-900" },
    { name: "Outlook", color: "bg-zinc-600" },
    { name: "Gmail", color: "bg-red-500" },
    { name: "Clay", color: "bg-slate-900" }
];

const Integrations = () => {
    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl font-display font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-12"
                    >
                        Plays well with <span className="text-slate-900 dark:text-white">Everything.</span>
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {integrations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                                    {item.name[0]}
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-slate-400">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-slate-950 dark:bg-white/5 border border-slate-900 dark:border-white/10 text-center">
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "novaxgrowth seamlessly embedded into our existing tech stack. Within 24 hours, our CRM was populated with enriched leads and personalized sequence drafts ready to go."
                    </p>
                    <div className="mt-6 font-bold text-slate-900 dark:text-white">— CTO, Series B Fintech</div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
