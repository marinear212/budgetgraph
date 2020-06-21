import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { deleteEntry, editEntry, resetForm } from '../actions';
import Modal from './Modal';

const EntryList = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [entry, setEntry] = useState({});

    const handleSubmit = () => {
        props.editEntry(props.formValues);
        handleModal();
    }

    const handleModal = (entryDetail) => {
        setEntry(entryDetail);
        setShowModal(!showModal);
        if (showModal) {
            props.resetForm();
        }
    }
    
    const recurrencyText = (pattern, frequency) => {
        switch (pattern) {
            case 'Week':
                return frequency === '1' ? 'Weekly' : `Every ${frequency} week`
            case 'Month':
                return frequency === '1' ? 'Monthly' : `Every ${frequency} month`
            case 'Year':
                return frequency === '1' ? 'Yearly' : `Every ${frequency} year`
            default:
                return pattern
        }
    }

    const renderList = () => {
        return props.entries.map(entry => {
            return (
                <tr key={entry.id}>
                    <td>{entry.detail.description}</td>
                    <td>{entry.detail.amount}</td>
                    <td>{recurrencyText(entry.detail.patternType, entry.detail.patternFrequency)}</td>
                    <td>
                        <div className="field is-grouped" style={{ float: 'right' }}>
                            <div className="control">
                                <button className="button is-white is-small" 
                                    onClick={() => handleModal(entry.detail)}>
                                    <i className="far fa-edit"></i>
                                </button>
                            </div>
                            <div className="control">
                                <button className="button is-white is-small" 
                                    onClick={() => props.deleteEntry(entry.id)}>
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        
                    </td>                    
                </tr>                    
            )
        })
    }

    if (props.entries.length === 0)
        return null;
    else {
        return (
            <Fragment>
                <Modal 
                    showModal={showModal} 
                    handleClose={handleModal} 
                    handleSubmit={handleSubmit} 
                    initialFormValue={entry} 
                />
                <div className="table-container">
                    <table className="table is-fullwidth"
                        style={{ whiteSpace: 'nowrap'}}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Recurrency</th>
                                <th></th>   
                            </tr>           
                        </thead>
                        <tbody>
                            {renderList()}
                        </tbody>
                    </table>  
                </div>                          
            </Fragment>
        )
    }     
};

const mapStateToProps = (state) => {
    return {
        entries: state.entries,
        formValues: state.formValues
    }
}

export default connect(
    mapStateToProps,
    { deleteEntry, editEntry, resetForm }
)(EntryList);