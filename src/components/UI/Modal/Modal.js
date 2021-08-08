import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop.js';

const Modal = (props) => (
    <>
        <div className="modal">
            <div>
                <span>Title</span>
                <span>X</span>
            </div>
            <div>
                text
            </div>
            <div>
                <button>Okay</button>
                <button>Close</button>
            </div>
        </div>
        <Backdrop/>
    </>
);

export default Modal;