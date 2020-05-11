import React, { useState, Fragment } from 'react';
import ToggleButton from './ToggleButton';
import DateSelector from './DateSelector';
import DaySelector from './DaySelector';

import { connect } from 'react-redux';

const PatternForm = (props) => {
  const [recurringDate, setRecurringDate] = useState(!props.initialValues
    ? '' : props.initialValues.recurringDate);

  

  const monthButtons = () => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ]

    return months.map((m) => {
      return <ToggleButton buttonDisplay={m} buttonValue={m} />
    });
  }

  const renderPatternForm = () => {

    switch (props.patternType) {
      case 'Daily':
        return (
          <Fragment>
            <div className="field">
              <label className="label">From</label>
              <DateSelector />
            </div>
            <div className="field">
              <label className="label">To</label>
              <DateSelector />
            </div>
          </Fragment>

        )
      case 'Week':
        return (
          <Fragment>
            <div className="field">
            <label className="label">Occuring Days</label>
              <div className="control">
                <ToggleButton buttonDisplay="S" buttonValue="Sun" initialValue={true} />
                <ToggleButton buttonDisplay="M" buttonValue="Mon" initialValue={true} />
                <ToggleButton buttonDisplay="T" buttonValue="Tue" initialValue={true} />
                <ToggleButton buttonDisplay="W" buttonValue="Wed" initialValue={true} />
                <ToggleButton buttonDisplay="T" buttonValue="Thu" initialValue={true} />
                <ToggleButton buttonDisplay="F" buttonValue="Fri" initialValue={true} />
                <ToggleButton buttonDisplay="S" buttonValue="Sat" initialValue={true} />
              </div>
            </div>
            <div className="field">
              <label className="label">From</label>
              <DateSelector />
            </div>
            <div className="field">
              <label className="label">To</label>
              <DateSelector />
            </div>
          </Fragment>
        )
      case 'Month':
        return (
          <Fragment>
            <DaySelector />
            <div className="field">
              <label className="label">From</label>
              <DateSelector />
            </div>
            <div className="field">
              <label className="label">To</label>
              <DateSelector />
            </div>
          </Fragment>
        )
      case 'Year':
        return (
          <Fragment>
            <div className="field">
              <lable className="label">Occuring months</lable>
              {monthButtons()}
            </div>
            <DaySelector />
            <div className="field">
              <label className="label">From</label>
              <DateSelector />
            </div>
            <div className="field">
              <label className="label">To</label>
              <DateSelector />
            </div>
          </Fragment>
        )
      default:
        return (
          <div className="field">
            <label className="label">Date</label>
            <DateSelector />
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