import { motion } from 'framer-motion';

const Teams = () => {
    const features = [
        { title: "Role-based access", description: "Admin / Agent / Viewer permissions", icon: "👨💼" },
        { title: "Timezone-aware scheduling", description: "Smart delivery based on lead location", icon: "📅" },
        { title: "Email open & click tracking", description: "Real-time engagement analytics", icon: "📊" },
        { title: "Smart automation rules", description: "Custom triggers for every scenario", icon: "🔁" },
        { title: "Notes & AI insights", description: "Collaborative lead management", icon: "📌" },
        { title: "Campaign management", description: "Organize and scale your outreach", icon: "📁" },
        { title: "Calendar integration", description: "Seamless sync with Google/Outlook", icon: "📆" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-4">
                            🛠 SECTION 7 — Built for Teams
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Collaborative <br /> Efficiency
                        </h3>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Designed for agencies and high-growth SDR teams who need visibility and coordination.
                        </p>
                    </motion.div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-slate-400 dark:hover:border-slate-500 transition-all flex gap-4"
                            >
                                <span className="text-2xl mt-1">{feature.icon}</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teams;
