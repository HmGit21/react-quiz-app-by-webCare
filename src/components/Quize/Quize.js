import React from "react";
import Checkbox from './Checkbox';
import "../../styles/Layout.css";
import "../../styles/Quize.css";
import ProgressBar from "./ProgressBar";
import Miniplayer from "./Miniplayer";

const Quize = () => {
  return (
    <main className="quiz">
      <div className="container">
        <div class="quiz_heading">
          <h1>Pick three of your favorite Star Wars Flims</h1>
          <p>Question can have multiple answers</p>
        </div> 
            <Checkbox />
            <ProgressBar />
            <Miniplayer />
      </div>
    </main>
  );
};

export default Quize;
