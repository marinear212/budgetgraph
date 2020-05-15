import React from 'react';
import ReactDOM from 'react-dom';
import EntryForm from './EntryForm';

const Modal = ({ showModal, handleClose, handleSubmit, initialFormValue }) => {
    console.log(initialFormValue)

    return (
        ReactDOM.createPortal(
            <div className={`modal${showModal ? ' is-active' : ''}`}>
                <div className="modal-background" onClick={handleClose}></div>
                <div className="modal-content">
                    <EntryForm handleClose={handleClose} handleSubmit={handleSubmit} />
                </div>
            </div>,
            document.querySelector('#modal')
        )
    );
};

export default Modal;