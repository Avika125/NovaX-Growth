import { motion } from 'framer-motion';

const integrations = [
    { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Pipedrive", logo: "https://cdn.simpleicons.org/pipedrive/3747A6" },
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
    { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF6600" },
    { name: "LinkedIn", logo: "https://cdn.simpleicons.org/linkedin/0A66C2" },
    { name: "Apollo", logo: "https://logo.clearbit.com/apollo.io" },
    { name: "Outlook", logo: "https://cdn.simpleicons.org/microsoftoutlook/0078D4" },
    { name: "Gmail", logo: "https://cdn.simpleicons.org/gmail/EA4335" },
    { name: "Clay", logo: "https://logo.clearbit.com/clay.com" }
];

const Integrations = () => {
    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-display font-bold text-slate-500 dark:text-dark-600 uppercase tracking-[0.2em] mb-12"
                    >
                        Plays well with <span className="text-slate-900 dark:text-dark-100">Everything.</span>
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {integrations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 dark:bg-dark-800/80 border border-slate-200 dark:border-dark-700 flex items-center justify-center p-4 shadow-sm group-hover:shadow-xl group-hover:border-slate-300 dark:group-hover:border-dark-600 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=random&color=fff&size=128&bold=true`;
                                        }}
                                    />
                                </div>
                                <span className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-dark-600 group-hover:text-slate-900 dark:group-hover:text-dark-200 transition-colors">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-slate-50 dark:bg-dark-800/40 border border-slate-200 dark:border-dark-700/50 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-dark-600 to-transparent opacity-50" />

                    <p className="text-xl md:text-2xl text-slate-700 dark:text-dark-200 leading-relaxed font-medium italic">
                        "novaxgrowth seamlessly embedded into our existing tech stack. Within 24 hours, our CRM was populated with enriched leads and personalized sequence drafts ready to go."
                    </p>
                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <div className="h-px w-8 bg-slate-300 dark:bg-dark-600" />
                        <div className="font-display font-bold text-sm tracking-widest text-slate-900 dark:text-dark-100 uppercase">
                            CTO, Series B Fintech
                        </div>
                        <div className="h-px w-8 bg-slate-300 dark:bg-dark-600" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default Integrations;
