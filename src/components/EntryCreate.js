import React from 'react';
import { connect } from 'react-redux';

import EntryForm from './EntryForm';
import { createEntry } from '../actions';


const EntryCreate = (props) => {

    const handleSubmit = (amount, recurringDate) => {
        props.createEntry(amount, recurringDate);
    };

    return (
        <EntryForm handleSubmit={handleSubmit} />
    );
};

export default connect(
    null,
    { createEntry }
)(EntryCreate)