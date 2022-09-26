import React from 'react';
import "../../styles/SignUp.css";

const LoginForm = ({children, className, ...rest}) => {
    return (
        <div className="login_formBox">
            <div className="login_cnt login_Subcnt">
                <form action="#" {...rest}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;