import React, { Fragment } from 'react';
import ToggleButton from './ToggleButton';
import DateRange from '././DateRange';
import DateSelector from './DateSelector';
import DaySelector from './DaySelector';

const PatternForm = (props) => {
  const monthButtons = () => {
    const months = [
      { value: 0, display: 'Jan' }, 
      { value: 1, display: 'Feb' }, 
      { value: 2, display: 'Mar' }, 
      { value: 3, display: 'Apr' },
      { value: 4, display: 'May' }, 
      { value: 5, display: 'Jun' }, 
      { value: 6, display: 'Jul' }, 
      { value: 7, display: 'Aug' },
      { value: 8, display: 'Sep' }, 
      { value: 9, display: 'Oct' }, 
      { value: 10, display: 'Nov' }, 
      { value: 11, display: 'Dec' }
    ]

    return months.map((m) => {
      return <ToggleButton key={m.value} buttonType="months" buttonDisplay={m.display} buttonValue={m.value} />
    });
  }

  const weekdayButtons = () => {
    const weekdays = [ 
      { value: 0, display: 'S' },
      { value: 1, display: 'M' },
      { value: 2, display: 'T' },
      { value: 3, display: 'W' },
      { value: 4, display: 'T' },
      { value: 5, display: 'F' },
      { value: 6, display: 'S' },
    ]

    return weekdays.map((w) => {
      return <ToggleButton key={w.value} buttonType="weekdays" buttonDisplay={w.display} buttonValue={w.value} />
    });
  }

  const renderPatternForm = () => {
    switch (props.patternType) {
      case 'Daily':
        return (
          <DateRange />
        )
      case 'Week':
        return (
          <Fragment>
            <div className="field">
            <label className="label">Occuring Days</label>
              <div className="control">
                {weekdayButtons()}
              </div>
            </div>
            <DateRange />
          </Fragment>
        )
      case 'Month':
        return (
          <Fragment>
            <DaySelector />
            <DateRange />
          </Fragment>
        )
      case 'Year':
        return (
          <Fragment>
            <div className="field">
              <label className="label">Occuring months</label>
              {monthButtons()}
            </div>
            <DaySelector />
            <DateRange />
          </Fragment>
        )
      default:
        return (
          <div className="field">
            <label className="label">Date</label>
            <DateSelector dateType="endDate" />
          </div>
        )
    }
  }

  return renderPatternForm();
}

export default PatternForm;