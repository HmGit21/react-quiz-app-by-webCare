import React from 'react';
import "../../styles/SignUp.css"
import "../../styles/Layout.css"

const CheckBox = ({text, ...rest}) => {
    return (
        <div className="label">
            <input type="checkbox" className="checkbox" {...rest} /><label for="value">{text}</label>
        </div>
    );
};

export default CheckBox;