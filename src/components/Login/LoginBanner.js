import React from "react";
import loginImg from "../../Images/login.svg";
import "../../styles/SignUp.css";

const LoginBanner = () => {
  return (
    <div className="login_banner logImg">
      <h1>Login to your account</h1>
      <img src={loginImg} alt="login" />
    </div>
  );
};

export default LoginBanner;
