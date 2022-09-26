import React from "react";
import "../../styles/Quize.css";
import { Link } from 'react-router-dom';

const ProgressBar = () => {
  return (
    <div class="progressBar">
      <div class="backButton">
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class="rangeArea">
        <div class="tooltip">24% Cimplete!</div>
        <div class="rangeBody">
          <div class="progress Pwidth"></div>
        </div>
      </div>
      <Link to="/answer">
        <button class="button next">
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
};

export default ProgressBar;
