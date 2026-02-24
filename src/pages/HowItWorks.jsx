import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProcessHero from '../components/ProcessHero';
import ProcessBridge from '../components/ProcessBridge';
import ProcessSnapshots from '../components/ProcessSnapshots';
import ProcessCaseStudies from '../components/ProcessCaseStudies';
import ProcessMetrics from '../components/ProcessMetrics';
import ProcessFAQ from '../components/ProcessFAQ';
import ProcessCTA from '../components/ProcessCTA';

const HowItWorks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-500">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ProcessHero />
                <ProcessBridge />
                <ProcessSnapshots />
                <ProcessCaseStudies />
                <ProcessMetrics />
                <ProcessFAQ />
                <ProcessCTA />
            </motion.div>
            <Footer />
        </main>
    );
};

export default HowItWorks;
