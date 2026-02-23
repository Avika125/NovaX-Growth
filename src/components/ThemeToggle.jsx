import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 transition-colors"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {theme === 'dark' ? (
                    <motion.svg
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        key="sun"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.364 17.657l.707.707M7.636 5.636l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </motion.svg>
                ) : (
                    <motion.svg
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        key="moon"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </motion.svg>
                )}
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
