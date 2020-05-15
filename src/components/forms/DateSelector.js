import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setPatternValue } from '../../actions/FormActions'

const DateSelector = (props) => {
    const dateNow = new Date(); 
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const [day, setDay] = useState(dateNow.getDate().toString());
    const [month, setMonth] = useState(months[dateNow.getMonth()]);
    const [year, setYear] = useState(dateNow.getFullYear().toString());

    

    useEffect(() => {
        handleChange(`${year}-${('0' + (months.indexOf(month) + 1).toString()).slice(-2)}-${('0' + day).slice(-2)}`)
    })    

    const handleChange = (date) => {
        props.setPatternValue(props.dateType, date)
    }

    const renderMonths = () => {
        return months.map((m) => {
            return <option key={m}>{m}</option>
        });
    }

    const renderDays = () => {
        const lastDayOfMonth = month === 'Feb' ? 28
            :  ['Apr', 'Jun', 'Sep', 'Nov'].includes(month) ? 30
            : 31

        const days = Array.from(Array(lastDayOfMonth).keys(), x => x + 1);

        return days.map((d) => {
            return <option key={d}>{d}</option>
        })
    }
    
    const renderYears = () => {
        const years = Array.from(Array(20).keys(), x => x + dateNow.getFullYear());

        return years.map((y) => {
            return <option key={y}>{y}</option>
        });
    }

    return (
        
        <div className="field is-grouped">
            <div className="control">
                <div className="select">
                    <select value={month} onChange={(e) => {
                        setMonth(e.target.value);                  
                    }} >
                        {renderMonths()}
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select value={day} onChange={(e) => {
                        setDay(e.target.value);   
                    }} >
                        {renderDays()}
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select value={year} onChange={(e) => {
                        setYear(e.target.value);
                    }} >
                        {renderYears()}
                    </select>
                </div>
            </div>
        </div>
    )
}


export default connect(
    null, {
    setPatternValue
})(DateSelector)