import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        {
            title: "Platform",
            links: ["Overview", "Features", "Pricing", "Demo", "Support"]
        },
        {
            title: "Solutions",
            links: ["Sales", "Marketing", "Automation", "Analytics", "Security"]
        },
        {
            title: "Resources",
            links: ["Blog", "Guides", "Docs", "API", "Status"]
        }
    ];

    const socialIcons = [
        { icon: "facebook", path: "#" },
        { icon: "instagram", path: "#" },
        { icon: "twitter", path: "#" },
        { icon: "linkedin", path: "#" },
        { icon: "youtube", path: "#" }
    ];

    return (
        <footer className="pt-24 pb-12 bg-white dark:bg-dark-900 border-t border-slate-100 dark:border-dark-800 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-[0.1em] text-slate-900 dark:text-dark-100 uppercase">
                                novaxgrowth
                            </span>
                        </Link>

                        <p className="text-slate-500 dark:text-dark-400 text-sm leading-relaxed max-w-xs">
                            Architecting the future of outbound intelligence with AI-driven precision and human oversight.
                        </p>

                        <div className="flex items-center gap-5">
                            {socialIcons.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.path}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-800 flex items-center justify-center text-slate-600 dark:text-dark-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                                >
                                    <span className="capitalize text-xs font-bold">
                                        {social.icon.charAt(0)}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-[10px] font-bold text-slate-900 dark:text-dark-100 uppercase tracking-[0.3em]">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            to="#"
                                            className="text-[13px] text-slate-500 dark:text-dark-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-tight"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-slate-100 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500 dark:text-dark-400 font-medium">
                        © {new Date().getFullYear()} novaxgrowth. All rights reserved. Made for elite outbound teams.
                    </p>

                    <div className="flex items-center gap-8">
                        {["Terms", "Privacy", "Cookies"].map((legal, idx) => (
                            <Link
                                key={idx}
                                to="#"
                                className="text-xs text-slate-500 dark:text-dark-400 hover:text-slate-900 dark:hover:text-dark-100 transition-colors font-medium tracking-wide"
                            >
                                {legal}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
