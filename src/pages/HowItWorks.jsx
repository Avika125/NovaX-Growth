import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
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
        <Layout>
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
        </Layout>
    );
};

export default HowItWorks;
