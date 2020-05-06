import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import EntryForm from './EntryForm';
import { editEntry } from '../actions';

const EntryEdit = (props) => {
    let history = useHistory();

    const handleSubmit = (amount, recurringDate) => {
        props.editEntry(parseInt(props.match.params.id), amount, recurringDate);
        history.push("/");
    }

    return (
        <div>
            <EntryForm handleSubmit={handleSubmit} initialValues={props.entry} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        entry: state.entries[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    { editEntry }
)(EntryEdit);