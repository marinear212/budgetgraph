import React, { Fragment } from 'react';
import DateSelector from './DateSelector';

const DateRange = () => {
    return (
        <Fragment>
            <div className="field">
                <label className="label">From</label>
                <DateSelector dateType="startDate" />
            </div>
            <div className="field">
                <label className="label">To</label>
                <DateSelector dateType="endDate" />
            </div>
        </Fragment>
    )
}

export default DateRange