import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
            </Routes>
        </Router>
    );
}

export default App;
