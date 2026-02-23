import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingHero from '../components/PricingHero';
import PricingTestimonials from '../components/PricingTestimonials';
import PricingLogos from '../components/PricingLogos';
import PricingFAQ from '../components/PricingFAQ';
import PricingContact from '../components/PricingContact';
import PricingOutcome from '../components/PricingOutcome';
import PricingMetrics from '../components/PricingMetrics';

const Pricing = () => {
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
                <PricingHero />
                <PricingTestimonials />
                <PricingLogos />
                <PricingFAQ />
                <PricingContact />
                <PricingOutcome />
                <PricingMetrics />
            </motion.div>
            <Footer />
        </main>
    );
};

export default Pricing;
