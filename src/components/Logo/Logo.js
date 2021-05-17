import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
    <Tilt className="Tilt br2 shadow-2" 
          options={{ max : 50 }} 
          style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner">
            <img src={brain} alt= 'logo'/>
            </div>
    </Tilt>
    );
}

export default Logo;