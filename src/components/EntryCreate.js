import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createEntry, resetForm } from '../actions';
import Modal from './Modal';


const EntryCreate = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        props.createEntry(props.formValues);
        handleModal();
    };

    const handleModal = () => {
        setShowModal(!showModal);
        if (showModal) {
            props.resetForm();
        }
    }

    return (
        <div>
            <button className="button is-white" onClick={handleModal}>+ Add Entry</button>
            <Modal showModal={showModal} handleClose={handleModal} handleSubmit={handleSubmit} />
        </div>        
    );
};

const mapStateToProps = ({ formValues }) => {
    return {
        formValues
    }
}

export default connect(mapStateToProps, {
    createEntry, resetForm
}
)(EntryCreate)