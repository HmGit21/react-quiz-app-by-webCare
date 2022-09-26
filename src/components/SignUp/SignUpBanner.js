import React from 'react';
import signUp from "../../Images/signup.svg";
import "../../styles/SignUp.css";
import "../../styles/Layout.css";

const SignUpBanner = () => {
    return (
        <div className="login_banner">
            <h1>SignUp to your account</h1>
            <img src={signUp} alt="login" />
        </div>
    );
};

export default SignUpBanner;