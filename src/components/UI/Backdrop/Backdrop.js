import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => (
    <div
        className="overlay"
        style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
        }}
    />
);

export default Backdrop;