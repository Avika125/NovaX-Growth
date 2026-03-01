import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import AboutHero from '../components/AboutHero';
import AboutMetrics from '../components/AboutMetrics';
import AboutTeam from '../components/AboutTeam';
import { motion } from 'framer-motion';

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <AboutHero />
                <AboutMetrics />
                <AboutTeam />
            </motion.div>
        </Layout>
    );
};

export default About;
