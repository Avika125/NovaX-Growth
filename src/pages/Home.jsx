import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import OutboundIntelligence from '../components/OutboundIntelligence';
import Stats from '../components/Stats';
import Results from '../components/Results';
import Lifecycle from '../components/Lifecycle';
import WallOfLove from '../components/WallOfLove';
import Integrations from '../components/Integrations';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

import TrustedBy from '../components/TrustedBy';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <TrustedBy />
            <OutboundIntelligence />
            <Stats />
            <Results />
            <Integrations />
            <Lifecycle />
            <WallOfLove />
            <FAQ />
            <FinalCTA />
        </Layout>
    );
};

export default Home;
