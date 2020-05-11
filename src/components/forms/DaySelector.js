import React from 'react';

const DaySelector = () => {
    
    const renderDays = () => {
        const days = Array.from(Array(31).keys(), x => x + 1);

        return days.map((d) => {
            return <option>{d}</option>
        })
    }
    
    return (
        <div className="field">
            <label className="label">Occuring Dates</label>
            <div className="control">
                <div className="select is-multiple">
                    <select multiple size="4">
                        {renderDays()}
                    </select>
                </div>
            </div>            
        </div>
    )
}

export default DaySelector;