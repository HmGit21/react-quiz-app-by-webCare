import React from "react";
import Answerbox from "./Answerbox";
import Answerbaner from "./Answerbaner";

const Answer = () => {
  return (
    <main className="quiz">
      <div className="container">
        <Answerbaner />
        {/* ans box 1 */}
        <div className="answer_box">
          <div className="help_title">
            <span class="material-icons-outlined">help_outline</span>
            Here goes the question from Learn with IQBAL?
          </div>
          <Answerbox />
        </div>
        {/* ans box 2 */}
        <div className="answer_box">
          <div className="help_title">
            <span class="material-icons-outlined">help_outline</span>
            Here goes the question from Learn with IQBAL?
          </div>
          <Answerbox />
        </div>
      </div>
    </main>
  );
};

export default Answer;
