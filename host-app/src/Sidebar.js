import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', position: 'absolute', left:0 }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/menu">Menu</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
