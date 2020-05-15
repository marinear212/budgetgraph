import React, { useState } from 'react';
import PatternForm from './forms/PatternForm';
import { connect } from 'react-redux';

import { setInputValue, resetPattern } from '../actions'

const EntryForm = (props) => {
  const [description, setDescription] = useState('');
  const [patternFrequency, setPatternFrequency] = useState('1');
  const [amount, setAmount] = useState('');
  const [patternType, setPatternType] = useState('Never');


  const patternFrequencySelector = () => {
    const frequency = Array.from(Array(12).keys(), x => x + 1);

    const patternFrequencyItems = frequency.map((d) => {
      return <option key={d}>{d}</option>
    })

    return (
      <div className="control">
        <div className="select">
          <select name="patternFrequency" value={patternFrequency}
            onChange={(e) => {
              setPatternFrequency(e.target.value);
              handleInputChange(e);
            }} >
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
                <input name="description" className="input" type="text" value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    handleInputChange(e);
                  }} />
              </div>

            </div>

            <div className="field">
              <label className="label">Amount</label>

              <div className="control">
                <input name="amount" className="input" type="text" value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    handleInputChange(e);
                  }} />
              </div>

            </div>

            <div className="field">
              <label className="label">{`Recurring${
                patternType !== 'Never' && patternType !== 'Daily'
                  ? ' every'
                  : ''
                }`}</label>
              <div className="field is-grouped">
                {patternType !== 'Never' && patternType !== 'Daily'
                  ? patternFrequencySelector()
                  : null}

                <div className="contorl">
                  <div className="select">
                    <select name="patternType" value={patternType}
                      onChange={(e) => {
                        setPatternType(e.target.value);
                        handleInputChange(e);
                        props.resetPattern();
                      }}>
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

            <PatternForm patternType={patternType} />

            <div className="field is-grouped">
              <div className="control">
                <input className="button is-link" type="submit" onClick={props.handleSubmit}></input>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  setInputValue, resetPattern
})(EntryForm);