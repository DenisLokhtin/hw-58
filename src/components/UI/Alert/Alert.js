import React from 'react';
import './Alert.css';

const dismiss = (dismiss) => {
    if (dismiss !== undefined) {
        return <span onClick={dismiss} className="alert-close">X</span>
    } else {
        return null
    }
}

const Alert = (props) => (
    <div
        className={props.type + " " + "Alert"}
        style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
        }}
    >
        <div>
            {dismiss(props.dismiss)}
        </div>
        <div className="alert-text">
            {props.children}
        </div>
    </div>
);

export default Alert;