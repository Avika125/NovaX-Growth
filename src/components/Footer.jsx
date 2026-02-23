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
        <footer className="pt-24 pb-12 bg-white dark:bg-black border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-slate-950 dark:bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                                <svg className="w-6 h-6 text-white dark:text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                                novaxgrowth
                            </span>
                        </Link>

                        <div className="flex items-center gap-5">
                            {socialIcons.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.path}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <span className="capitalize text-lg">
                                        {/* Using generic icons/initials as placeholders for standard social SVGs */}
                                        {social.icon === 'facebook' && <i className="fab fa-facebook-f">f</i>}
                                        {social.icon === 'instagram' && <i className="fab fa-instagram">ig</i>}
                                        {social.icon === 'twitter' && <i className="fab fa-twitter">𝕏</i>}
                                        {social.icon === 'linkedin' && <i className="fab fa-linkedin-in">in</i>}
                                        {social.icon === 'youtube' && <i className="fab fa-youtube">yt</i>}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            to="#"
                                            className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
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
                <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                        © {new Date().getFullYear()} novaxgrowth. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        {["Terms", "Privacy", "Cookies"].map((legal, idx) => (
                            <Link
                                key={idx}
                                to="#"
                                className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors font-medium"
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
