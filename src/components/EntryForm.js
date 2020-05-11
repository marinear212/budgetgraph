import React, { useState } from 'react';
import PatternForm from './forms/PatternForm';
import { connect } from 'react-redux';

import { setInputValue } from '../actions/index'

const EntryForm = (props) => {
  const patternFrequencySelector = () => {
    const frequency = Array.from(Array(12).keys(), x => x + 1);

    const patternFrequencyItems = frequency.map((d) => {
      return <option>{d}</option>
    })

    return (
      <div className="control">
        <div className="select">
          <select name="patternFrequency" value={props.patternFrequency}
            onChange={handleInputChange} >
            {patternFrequencyItems}
          </select>
        </div>
      </div>
    )
  }

  const handleInputChange = (e) => {
    props.setInputValue(e.target.name, e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="card">
      <header className="message-header">
        <p className="card-header-title has-text-white">
          Add Entry
        </p>
        <div className="delete is-large" onClick={props.handleClose}></div>
      </header>

      <div className="card-content">
        <div className="content">
          <form onSubmit={onSubmit}>

            <div className="field">
              <label className="label">Description</label>

              <div className="contorl">
                <input name="description" className="input" type="text" value={props.description}
                  onChange={handleInputChange} />
              </div>

            </div>

            <div className="field">
              <label className="label">Amount</label>

              <div className="control">
                <input name="amount" className="input" type="text" value={props.amount}
                  onChange={handleInputChange} />
              </div>

            </div>

            <div className="field">
              <label className="label">{`Recurring${
                props.patternType !== 'Never' && props.patternType !== 'Daily'
                  ? ' every'
                  : ''
                }`}</label>
              <div className="field is-grouped">
                {props.patternType !== 'Never' && props.patternType !== 'Daily'
                  ? patternFrequencySelector()
                  : null}

                <div className="contorl">
                  <div className="select">
                    <select name="patternType" value={props.patternType}
                      onChange={handleInputChange}>
                      <option>Never</option>
                      <option>Daily</option>
                      <option>Week</option>
                      <option>Month</option>
                      <option>Year</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <PatternForm patternType={props.patternType} />

            <div className="field is-grouped">
              <div className="control">
                <input className="button is-link" type="submit"></input>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    description: state.formValues.description,
    amount: state.formValues.amount,
    patternFrequency: state.formValues.patternFrequency,
    patternType: state.formValues.patternType
  }
}

export default connect(mapStateToProps, {
  setInputValue
})(EntryForm);