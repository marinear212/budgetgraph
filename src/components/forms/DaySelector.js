import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { setPatternValue } from '../../actions'

const DaySelector = (props) => {
    

    const renderDays = () => {
        const days = Array.from(Array(31).keys(), x => x + 1);

        return days.map((d) => {
            return { value: d, label: d}
        })
    }

    const handleChange = (selected, {name}) => {
        if (selected !== null)
        {
            const value = selected.map(o => o.value)
            props.setPatternValue(name, value);
        }
    }
    
    return (
        <div className="field">
            <label className="label">Occuring Dates</label>
            <div className="control">
                <div>
                    <Select
                        name='dates' 
                        styles={{
                            // Fixes the overlapping problem of the component
                            menu: provided => ({ ...provided, zIndex: 9999 })
                        }}
                        options={renderDays()}
                        onChange={(selected, name) => handleChange(selected, name)}
                        isMulti
                        isSearchable={false}
                    />
                </div>
            </div>            
        </div>
    )
}

export default connect(null, {
    setPatternValue
})(DaySelector);