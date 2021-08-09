import React from 'react';
import './Alert.css';

const Alert = (props) => (
    <div
        className={props.type + " " + "Alert"}
        style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
        }}
    >
        <div>
            <span className="alert-close">X</span>
        </div>
        <div className="alert-text">
            {props.children}
        </div>
    </div>
);

export default Alert;