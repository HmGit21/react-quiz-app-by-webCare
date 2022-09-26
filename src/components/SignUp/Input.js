import React from 'react';
import "../../styles/SignUp.css";
import "../../styles/Layout.css";

const Input = ({...rest}) => {
    return (
        <>
            <div className="form_item">
                <input {...rest} />
            </div>
        </>
    );
};

export default Input;