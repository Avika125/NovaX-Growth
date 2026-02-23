import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SolutionsHero from '../components/SolutionsHero';
import AutomationFlow from '../components/AutomationFlow';
import IntelligenceAction from '../components/IntelligenceAction';
import SolutionsFAQ from '../components/SolutionsFAQ';
import ContactSupport from '../components/ContactSupport';

const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <SolutionsHero />
                <AutomationFlow />
                <IntelligenceAction />
                <SolutionsFAQ />
                <ContactSupport />
            </motion.div>
            <Footer />
        </main>
    );
};

export default Solutions;
