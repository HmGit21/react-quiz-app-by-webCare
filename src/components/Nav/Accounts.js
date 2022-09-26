import React from "react";
import "../../styles/Nav.Module.css"
import { Link } from 'react-router-dom';

const Accounts = () => {
  return (
    <div className="account">
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Accounts;
