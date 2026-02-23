import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'How it works', path: '/how-it-works' }
    ];

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`flex items-center justify-between rounded-full px-8 py-3 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-500/10'
                    : 'bg-transparent'
                    }`}>
                    <Link to="/" className="text-3xl font-black text-slate-900 dark:text-white lowercase tracking-tighter">
                        Novax
                    </Link>

                    {/* Global Actions */}
                    <div className="flex items-center gap-6">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-[70] group"
                        >
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 8 : 0,
                                }}
                                className={`h-0.5 w-6 block transition-all rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
                            />
                            <motion.span
                                animate={{
                                    opacity: isMenuOpen ? 0 : 1,
                                }}
                                className={`h-0.5 w-6 block transition-all rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
                            />
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? -8 : 0,
                                }}
                                className={`h-0.5 w-6 block transition-all rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* MUGEN Style Side Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-md z-[60] flex items-center justify-start overflow-hidden"
                        >
                            {/* Brand Name on Left Side (Middle) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="hidden md:flex flex-col items-center justify-center p-20 select-none pointer-events-none"
                                style={{ width: 'calc(100% - 500px)' }}
                            >
                                <span className="text-slate-900 dark:text-white text-[100px] font-black lowercase tracking-[-0.05em] leading-none opacity-30 dark:opacity-60 whitespace-nowrap transition-opacity duration-300">
                                    novax
                                </span>
                                <span className="text-slate-600 dark:text-white/60 text-base font-bold uppercase tracking-[0.4em] mt-6 transition-colors duration-300">
                                    A design studio, built different.
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                            className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white dark:bg-black text-slate-900 dark:text-white z-[65] shadow-2xl overflow-hidden flex flex-col border-l border-slate-200 dark:border-white/5"
                        >


                            <div className="flex-1 flex flex-col p-12 md:p-20 overflow-hidden">
                                <div className="flex-1 flex flex-col justify-center space-y-16">
                                    {/* Menu Section */}
                                    <div className="space-y-6">
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase tracking-[0.2em] block">
                                            Menu
                                        </span>
                                        <nav className="flex flex-col space-y-2">
                                            {navLinks.map((link, idx) => (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ x: 40, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1], duration: 1 }}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-white/60 transition-all duration-300 leading-tight block tracking-tight"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Divider Line */}
                                    <div className="w-full h-px bg-slate-200 dark:bg-white/10" />

                                    {/* Contact Section */}
                                    <div className="space-y-12">
                                        <div className="space-y-6">
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase tracking-[0.2em] block">
                                                Let's Talk
                                            </span>
                                            <div className="space-y-6">
                                                <a
                                                    href="mailto:hello@novaxgrowth.com"
                                                    className="text-sm md:text-base font-bold text-slate-900 dark:text-white group relative inline-block pb-1"
                                                >
                                                    <span className="relative z-10">hello@novaxgrowth.com +</span>
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/20 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300" />
                                                </a>
                                                <div className="text-[11px] font-bold tracking-tight">
                                                    <span className="text-slate-900 dark:text-white">India</span>
                                                    <span className="text-slate-400 dark:text-white/40 ml-3">{formatTime(currentTime)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Socials Section */}
                                        <div className="space-y-4 pt-2">
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase tracking-[0.2em] block">
                                                Socials
                                            </span>
                                            <div className="flex gap-8">
                                                {[
                                                    { id: 'x', label: 'X' },
                                                    { id: 'ig', label: 'Instagram' },
                                                    { id: 'dr', label: 'Dribbble' },
                                                    { id: 'li', label: 'LinkedIn' }
                                                ].map((social, idx) => (
                                                    <motion.a
                                                        key={social.id}
                                                        href="#"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                                        className="text-slate-900 dark:text-white hover:text-slate-400 dark:hover:text-white/40 transition-colors"
                                                    >
                                                        <span className="text-sm">
                                                            {social.id === 'x' && '𝕏'}
                                                            {social.id === 'ig' && ''}
                                                            {social.id === 'dr' && ''}
                                                            {social.id === 'li' && ''}
                                                        </span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Credits / Footer of Drawer */}
                            <div className="p-10 md:p-20 pt-0 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[9px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-[0.3em]">
                                <div className="flex flex-col gap-1">
                                    <span>© 2025 novaxgrowth</span>
                                    <span>All rights reserved</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    <span>Built with NovaX AI Engine</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence >

            <style sx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </motion.nav >
    );
};

export default Navbar;
