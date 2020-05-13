import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setToggleValue } from '../../actions/FormActions'

const ToggleButton = ({ setToggleValue, buttonType, buttonDisplay, buttonValue, initialValue = false }) => {
    const [toggleButton, setToggleButton] = useState(initialValue);

    useEffect(() => {
        setToggleValue(buttonType, buttonValue, toggleButton);
    })

    return (
        <button 
            className={`button is-small ${toggleButton 
                ? 'is-dark' : 'is-light'}`}
            onClick={() => setToggleButton(!toggleButton)}
            style={{margin: "1px"}}>
            {buttonDisplay}
        </button>
    );
};

export default connect(null, {
    setToggleValue
})(ToggleButton);