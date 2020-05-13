import React, { Fragment } from 'react';
import ToggleButton from './ToggleButton';
import DateRange from '././DateRange';
import DateSelector from './DateSelector';
import DaySelector from './DaySelector';

import { connect } from 'react-redux';

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
                <ToggleButton buttonType="weekdays" buttonDisplay="S" buttonValue="Sun" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="M" buttonValue="Mon" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="T" buttonValue="Tue" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="W" buttonValue="Wed" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="T" buttonValue="Thu" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="F" buttonValue="Fri" initialValue={true} />
                <ToggleButton buttonType="weekdays" buttonDisplay="S" buttonValue="Sat" initialValue={true} />
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

const mapStateToProps = (state) => {
  return {
    patternType: state.formValues.patternType
  }
}

export default connect(mapStateToProps)(PatternForm);