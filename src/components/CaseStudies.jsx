import { motion } from 'framer-motion';

const cases = [
    {
        client: "FinTech ScaleUp",
        target: "Series A B2B SaaS",
        result: "+340%",
        metric: "Meeting Volume",
        timeline: "3 Months",
        description: "Automated hyper-personalized outreach at scale, replacing a team of 4 SDRs."
    },
    {
        client: "Growth Logistics",
        target: "Mid-Market Enterprise",
        result: "12.4%",
        metric: "Reply Rate",
        timeline: "2 Months",
        description: "Leveraged AI Lead Analyst to identify high-intent signals across 12 data points."
    },
    {
        client: "CyberGuard AI",
        target: "Fortune 500 CISO",
        result: "$1.2M",
        metric: "Pipeline Generated",
        timeline: "45 Days",
        description: "Deeply researched persona-based messaging powered by our AI Copywriter."
    }
];

const CaseStudies = () => {
    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-dark-100 mb-6"
                    >
                        Real Results, <span className="text-slate-900 dark:text-dark-200">Zero Fluff.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-dark-200"
                    >
                        Our AI Agents don't just send emails; they build massive pipelines for high-growth teams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-slate-50 dark:bg-dark-800/60 border border-slate-200 dark:border-dark-700 relative group transition-all"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-display font-black text-slate-900 dark:text-dark-200 italic">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-dark-100 mb-1">{item.client}</h3>
                                <p className="text-sm text-slate-500 dark:text-dark-600 mb-6">{item.target}</p>

                                <div className="mb-6">
                                    <div className="text-5xl font-display font-black text-slate-950 dark:text-dark-100 mb-1">
                                        {item.result}
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-dark-200">
                                        {item.metric}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-dark-600 mt-1">
                                        Achieved in {item.timeline}
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-dark-200 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
