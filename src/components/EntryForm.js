import React, { useState } from 'react';

const EntryForm = (props) => {
    const [amount, setAmount] = useState(!props.initialValues ? '' : props.initialValues.amount);
    const [recurringDate, setRecurringDate] = useState(!props.initialValues ? '' : props.initialValues.recurringDate);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.handleSubmit(parseInt(amount), recurringDate);

        setAmount('');
        setRecurringDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Amount: </label><input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <label>Recurring Date: </label><input type="text" value={recurringDate} onChange={(e) => setRecurringDate(e.target.value)} />
            <input type="submit"></input> 
        </form>
    );
};

export default EntryForm;