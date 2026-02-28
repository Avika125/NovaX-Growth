import React from 'react';
import { motion } from 'framer-motion';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

const AboutMetrics = () => {
    const stats = [
        {
            value: "40%",
            label: "Increase in lead conversion"
        },
        {
            value: "10K",
            label: "Leads analyzed to date"
        },
        {
            value: "23+",
            label: "Industries supported worldwide"
        },
        {
            value: "100%",
            label: "Verified human oversight"
        }
    ];

    return (
        <section className="relative py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-500 overflow-hidden" style={{ perspective: "1500px" }}>
            {/* Background Image Overlay */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.8, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src={about3}
                    alt=""
                    className="w-full h-full object-cover opacity-30 dark:opacity-20"
                />
            </motion.div>
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 text-center mb-16"
                >
                    Metrics that <br /> drive real results
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-dark-900/50 border border-slate-100 dark:border-dark-700">
                            <img
                                src={about2}
                                alt="Analytics and Performance"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlapping Stats Card 1 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ translateZ: 50, scale: 1.05 }}
                            className="absolute -bottom-8 -right-8 hidden md:block w-56 p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-dark-700 transition-colors duration-500 z-20 cursor-default"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span className="block text-3xl font-light text-slate-900 dark:text-dark-100 mb-2 tracking-tight" style={{ transform: "translateZ(10px)" }}>40%</span>
                            <span className="text-[10px] text-slate-500 dark:text-dark-200 uppercase tracking-widest font-bold block" style={{ transform: "translateZ(5px)" }}>Inc. conversion</span>
                        </motion.div>

                        {/* Overlapping Stats Card 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            whileHover={{ translateZ: 50, scale: 1.05 }}
                            className="absolute -top-8 -left-8 hidden md:block w-56 p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-dark-700 transition-colors duration-500 z-20 cursor-default"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span className="block text-3xl font-light text-slate-900 dark:text-dark-100 mb-2 tracking-tight" style={{ transform: "translateZ(10px)" }}>100%</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold block" style={{ transform: "translateZ(5px)" }}>Human Oversight</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <span
                                    className="text-5xl md:text-7xl font-light text-slate-900 dark:text-dark-100 mb-3 tracking-tighter transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    {stat.value}
                                </span>
                                <p
                                    className="text-[11px] text-slate-500 dark:text-dark-200 uppercase tracking-[0.2em] font-bold leading-relaxed max-w-[180px] transition-all duration-300"
                                    style={{ transform: "translateZ(10px)" }}
                                >
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMetrics;
