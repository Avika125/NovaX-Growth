import { motion, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CountUp = ({ to, suffix = "", duration = 2 }) => {
    const nodeRef = useRef(null);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration, ease: "easeOut" });
        }
    }, [isInView, count, to, duration]);

    useMotionValueEvent(rounded, "change", (latest) => {
        if (nodeRef.current) {
            nodeRef.current.textContent = latest.toLocaleString() + suffix;
        }
    });

    return <span ref={nodeRef}>0{suffix}</span>;
};

const Stats = () => {
    const stats = [
        {
            value: 200,
            suffix: "K",
            label: "Leads analyzed for opportunity gaps"
        },
        {
            value: 100,
            suffix: "%",
            label: "Outreach precision rate"
        },
        {
            value: 1600,
            suffix: "",
            label: "Custom responses sent"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 w-full flex flex-col md:flex-row items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="text-center px-8 w-full group"
                            >
                                <span className="block text-6xl md:text-8xl font-black text-slate-900 dark:text-dark-100 mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </span>
                                <span className="block text-sm text-slate-500 dark:text-dark-200 uppercase tracking-widest font-bold max-w-[200px] mx-auto leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    {stat.label}
                                </span>
                            </motion.div>

                            {/* Vertical Divider (Desktop) */}
                            {index < stats.length - 1 && (
                                <div className="hidden md:block h-32 w-[1px] bg-palette-700/10 dark:bg-dark-700 opacity-50" />
                            )}

                            {/* Horizontal Divider (Mobile) */}
                            {index < stats.length - 1 && (
                                <div className="md:hidden w-24 h-[1px] bg-palette-700/10 dark:bg-dark-700 mt-12 opacity-50" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
