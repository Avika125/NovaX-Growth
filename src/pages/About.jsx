import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutMetrics from '../components/AboutMetrics';
import AboutTeam from '../components/AboutTeam';
import TrustedBy from '../components/TrustedBy';
import { motion } from 'framer-motion';

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            <main>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <AboutHero />
                    <AboutMetrics />
                    <AboutTeam />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
