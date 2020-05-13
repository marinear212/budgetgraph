import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createEntry, resetForm } from '../actions';
import Modal from './Modal';


const EntryCreate = (props) => {
    const [showModal, setShowModal] = useState(false);

    // eslint-disable-next-line
    const handleSubmit = (amount, recurringDate) => {
        props.createEntry(amount, recurringDate);
    };

    const handleModal = () => {
        setShowModal(!showModal);
        if (showModal) {
            props.resetForm();
        }
    }

    return (
        <div>
            <button className="button is-light" onClick={handleModal}>Add Entry</button>
            <Modal showModal={showModal} handleClose={handleModal}  />
        </div>        
    );
};

export default connect(null, {
    createEntry, resetForm
}
)(EntryCreate)