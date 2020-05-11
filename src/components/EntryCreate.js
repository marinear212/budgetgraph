import React, { useState } from 'react';
import { connect } from 'react-redux';

import EntryForm from './EntryForm';
import { createEntry } from '../actions';
import Modal from './Modal';


const EntryCreate = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (amount, recurringDate) => {
        props.createEntry(amount, recurringDate);
    };

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <button className="button is-light" onClick={handleModal}>Add Entry</button>
            <Modal showModal={showModal} handleClose={handleModal}  />
            {/*<EntryForm handleSubmit={handleSubmit} formToggle={formToggle} />/*/}
        </div>        
    );
};

export default connect(
    null,
    { createEntry }
)(EntryCreate)