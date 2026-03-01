import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
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
        <Layout>
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
        </Layout>
    );
};

export default Pricing;
