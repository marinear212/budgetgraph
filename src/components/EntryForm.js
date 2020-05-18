import React, { useState } from 'react';
import PatternForm from './forms/PatternForm';
import { connect } from 'react-redux';

import { setInputValue, resetPattern } from '../actions'

const EntryForm = (props) => {
  const [description, setDescription] = useState(props.formValues.description);
  const [patternFrequency, setPatternFrequency] = useState(props.formValues.patternFrequency);
  const [amount, setAmount] = useState(props.formValues.amount);
  const [patternType, setPatternType] = useState(props.formValues.patternType);


  const patternFrequencySelector = () => {
    const frequency = Array.from(Array(12).keys(), x => x + 1);

    const patternFrequencyItems = frequency.map((d) => {
      return <option key={d}>{d}</option>
    })

    return (
      <div className="control">
        <div className="select">
          <select name="patternFrequency" value={props.formValues.patternFrequency}
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

  const handleType = (type) => {
    props.setInputValue('type', type);
  }

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="card-header-title is-size-4">
          Add Entry
        </p>
        <div className="delete is-large" onClick={props.handleClose}></div>
      </header>

      <section className="modal-card-body">
        <div className="content">
          <form onSubmit={(e) => e.preventDefault()}>

            <div className="field is-grouped">
              <div className="control">
                <button 
                  className={`button is-small 
                    ${props.formValues.type === 'Income' ? 'is-dark' : 'is-light'}`}
                  onClick={() => handleType('Income')}
                  style={{margin: "1px"}}>
                  Income
                </button>
              </div>
              <div className="control">
                <button 
                  className={`button is-small 
                    ${props.formValues.type === 'Expense' ? 'is-dark' : 'is-light'}`}
                  onClick={() => handleType('Expense')}
                  style={{margin: "1px"}}>
                  Expense
                </button>
              </div>

            </div>

            <div className="field">
              <label className="label">Description</label>

              <div className="contorl">
                <input name="description" className="input" type="text" value={props.formValues.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    handleInputChange(e);
                  }} />
              </div>

            </div>

            <div className="field">
              <label className="label">Amount</label>

              <div className="control">
                <input name="amount" className="input" type="text" value={props.formValues.amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    handleInputChange(e);
                  }} />
              </div>

            </div>

            <div className="field">
              <label className="label">{`Recurring${
                props.formValues.patternType !== 'Never' && props.formValues.patternType !== 'Daily'
                  ? ' every'
                  : ''
                }`}</label>
              <div className="field is-grouped">
                {props.formValues.patternType !== 'Never' && props.formValues.patternType !== 'Daily'
                  ? patternFrequencySelector()
                  : null}

                <div className="contorl">
                  <div className="select">
                    <select name="patternType" value={props.formValues.patternType}
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

            <PatternForm patternType={props.formValues.patternType} />

            

          </form>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div className="field is-grouped">
          <div className="control">
            <input className="button is-link" type="submit" onClick={props.handleSubmit}></input>
          </div>
          <div className="control">
            <button className="button" onClick={props.handleClose}>Cancel</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: state.formValues
  }
}

export default connect(mapStateToProps, {
  setInputValue, resetPattern
})(EntryForm);