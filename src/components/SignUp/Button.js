import React from "react";
import "../../styles/SignUp.css";
import "../../styles/Layout.css"
import { Link } from "react-router-dom";

const Button = ({children}) => {
  return (
    <div>
      <div className="form_item">
      <Link to="/"><button type="submit">{children}</button></Link>
      </div>
    </div>
  );
};

export default Button;
