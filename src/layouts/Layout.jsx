import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-slate-500/30 transition-colors duration-300">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
