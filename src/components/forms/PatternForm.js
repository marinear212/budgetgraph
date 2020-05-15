import React, { Fragment } from 'react';
import ToggleButton from './ToggleButton';
import DateRange from '././DateRange';
import DateSelector from './DateSelector';
import DaySelector from './DaySelector';

const PatternForm = (props) => {
  const monthButtons = () => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ]

    return months.map((m) => {
      return <ToggleButton key={m} buttonType="months" buttonDisplay={m} buttonValue={m} />
    });
  }

  const weekdayButtons = () => {
    const weekdays = [ 
      { value: 'Sun', display: 'S' },
      { value: 'Mon', display: 'M' },
      { value: 'Tue', display: 'T' },
      { value: 'Wed', display: 'W' },
      { value: 'Thu', display: 'T' },
      { value: 'Fri', display: 'F' },
      { value: 'Sat', display: 'S' },
    ]

    return weekdays.map((w) => {
      return <ToggleButton key={w.value} buttonType="weekdays" buttonDisplay={w.display} buttonValue={w.value} initialValue={true} />
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