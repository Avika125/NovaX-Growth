import React from 'react';
import './GlowGrid.css';

const GlowGrid = () => {
    return (
        <div className="glow-grid-container">
            <div className="glow-grid"></div>
            {/* Soft bloom effect that adapts to theme colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-900/10 pointer-events-none"></div>
        </div>
    );
};

export default GlowGrid;
