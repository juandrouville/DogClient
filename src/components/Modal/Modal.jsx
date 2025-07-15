import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Portal = document.getElementById('portal');

function Modal(props){
    const { open, onClickClose, children } = props;

    const overlayClick = (e) => { if(e.target === e.currentTarget)( onClickClose())};

    const dismount = () => onClickClose(); 

    if (!open){ return null };
    return ReactDOM.createPortal(
        <div className='overlay' onClick={overlayClick}>
            <div className='modal'>
                <div className='toClose' onClick={() => dismount() }><h1>X</h1></div>
                <div className='containerChildren'>
                    {children}
                </div>
            </div>
        </div>,
        Portal,
    );
};

export default Modal;