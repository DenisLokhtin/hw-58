import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop.js';

const Modal = (props) => (
    <>
        <div
            className="modal"
            style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
            }}
        >
            <div className="modal-header">
                <span>{props.title}</span>
                <span className="modal-close">X</span>
            </div>
            <div className="modal-text">
                {props.children}
            </div>
            <div className='modal-footer'>
                <button className="modal-btn close-btn">Close</button>
                <button className="modal-btn okay-btn">Okay</button>
            </div>
        </div>
        <Backdrop show={props.show}/>
    </>
);

export default Modal;