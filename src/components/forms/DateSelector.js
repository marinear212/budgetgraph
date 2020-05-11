import React, { useState } from 'react';

const DateSelector = () => {
    const dateNow = new Date();    
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const [day, setDay] = useState(dateNow.getDate());
    const [month, setMonth] = useState(months[dateNow.getMonth()]);
    const [year, setYear] = useState(dateNow.getFullYear());

    const renderMonths = () => {
        return months.map((m) => {
            return <option>{m}</option>
        });
    }

    const renderDays = () => {
        const lastDayOfMonth = month === 'Feb' ? 28
            :  ['Apr', 'Jun', 'Sep', 'Nov'].includes(month) ? 30
            : 31

        const days = Array.from(Array(lastDayOfMonth).keys(), x => x + 1);

        return days.map((d) => {
            return <option>{d}</option>
        })
    }
    
    const renderYears = () => {
        const years = Array.from(Array(20).keys(), x => x + dateNow.getFullYear());

        return years.map((y) => {
            return <option>{y}</option>
        });
    }

    return (
        
        <div className="field is-grouped">
            <div className="control">
                <div className="select">
                    <select value={month} onChange={(e) => setMonth(e.target.value)} >
                        {renderMonths()}
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select value={day} onChange={(e) => setDay(e.target.value)} >
                        {renderDays()}
                    </select>
                </div>
            </div>
            <div className="control">
                <div className="select">
                    <select value={year} onChange={(e) => setYear(e.target.value)} >
                        {renderYears()}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default DateSelector