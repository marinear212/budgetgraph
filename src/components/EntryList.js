import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteEntry } from '../actions';


const EntryList = (props) => {
    return props.entries.map(entry => {
        return (
            <div key={entry.id}>
                {entry.amount}, {entry.recurringDate}
                <Link to={`/edit/${entry.id}`}><button>Edit</button></Link>
                <button onClick={() => props.deleteEntry(entry.id)}>Delete</button>
            </div>            
        )
    })
};

const mapStateToProps = (state) => {
    return {
        entries: state.entries
    }
}

export default connect(
    mapStateToProps,
    { deleteEntry }
)(EntryList);