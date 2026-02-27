import React from 'react';
import './GlowGrid.css';

const GlowGrid = () => {
    return (
        <div className="glow-grid-container">
            <div className="glow-grid"></div>
            {/* Inner bloom effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default GlowGrid;
