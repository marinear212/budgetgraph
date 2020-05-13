import React from 'react';
import { connect } from 'react-redux';

import { setPatternValue } from '../../actions'

const DaySelector = (props) => {
    
    const renderDays = () => {
        const days = Array.from(Array(31).keys(), x => x + 1);

        return days.map((d) => {
            return <option key={d}>{d}</option>
        })
    }

    const handleChange = (e) => {
        const selected = Array.from(e.target.options).filter(o => o.selected).map(o => o.value);
        props.setPatternValue(e.target.name, selected);
    }
    
    return (
        <div className="field">
            <label className="label">Occuring Dates</label>
            <div className="control">
                <div className="select is-multiple">
                    <select name="dates" multiple size="4" onChange={handleChange}>
                        {renderDays()}
                    </select>
                </div>
            </div>            
        </div>
    )
}

export default connect(null, {
    setPatternValue
})(DaySelector);