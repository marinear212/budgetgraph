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
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <p className="subtitle is-6">
                            Initial Amount
                        </p>
                    </div>
                    <div className="level-item">
                        <div className="field">
                            <div className="control">
                                <input name="initialAmount" className="input is-small" type="text" width="100px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <div>
                            <button className="button is-white" onClick={handleModal}>+ Add Entry</button>
                        </div>
                    </div>
                </div>
            </nav>
            
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