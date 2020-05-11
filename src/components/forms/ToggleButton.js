import React, { useState } from 'react';

const ToggleButton = ({ buttonDisplay, buttonValue, initialValue = false }) => {
    const [toggleButton, setToggleButton] = useState(initialValue);

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

export default ToggleButton;