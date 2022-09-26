import React from 'react';
import "../../styles/SignUp.css";
import "../../styles/Layout.css"

const SignUpForm = ({children, className, ...rest}) => {
    return (
        <div className="login_formBox">
            <div className="login_cnt">
                <form action="Method" {...rest}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;