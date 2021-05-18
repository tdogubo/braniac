import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
    <Tilt className="Tilt br2 shadow-2 fix" 
          options={{ max : 50 }}>
        <div className="Tilt-inner">
            <img src={brain} alt= 'logo'/>
            </div>
    </Tilt>
    );
}

export default Logo;