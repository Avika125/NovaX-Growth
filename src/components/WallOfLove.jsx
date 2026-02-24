import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Founder, SaaSFlow",
        content: "novaxgrowth didn't just automate our emails; they revolutionized our entire go-to-market. We went from scraping leads to qualified calls on autopilot.",
        avatar: "AR"
    },
    {
        name: "Sarah Chen",
        role: "VP Marketing, SecureNet",
        content: "The level of personalization the AI Copywriter achieves is scary. Our prospects actually thank us for the outreach now.",
        avatar: "SC"
    },
    {
        name: "Marcus Thorne",
        role: "Head of Sales, LogiCore",
        content: "We replaced our entire SDR outbound budget with novaxgrowth. The ROI was immediate and the tech is lightyears ahead of the competition.",
        avatar: "MT"
    },
    {
        name: "Elena Vance",
        role: "CMO, CloudScale",
        content: "It behaves like a senior human researcher with a photographic memory. The AI Lead Analyst is the MVP of our stack.",
        avatar: "EV"
    },
    {
        name: "David Park",
        role: "Growth Lead, FinNext",
        content: "Scalability used to be our bottleneck. With novaxgrowth, we can hyper-personalize 10,000 emails as easily as one.",
        avatar: "DP"
    },
    {
        name: "Jessica Wu",
        role: "Founder, Cre8ive Agency",
        content: "The integration was seamless. HubSpot was populated with intent data before I even finished the first cup of coffee.",
        avatar: "JW"
    }
];

const WallOfLove = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-dark-100 mb-6"
                    >
                        The Wall of <span className="text-slate-950 dark:text-dark-200">Love.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-dark-200"
                    >
                        Join 200+ high-growth companies scaling their revenue with AI Lead Automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-2xl bg-white dark:bg-dark-800/60 border border-slate-200 dark:border-dark-700 shadow-sm"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-dark-700 dark:bg-dark-600 flex items-center justify-center text-dark-100 font-bold">
                                    {item.avatar}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-dark-100">{item.name}</h3>
                                    <p className="text-sm text-slate-500 dark:text-dark-600">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-dark-200 italic leading-relaxed">
                                "{item.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WallOfLove;
