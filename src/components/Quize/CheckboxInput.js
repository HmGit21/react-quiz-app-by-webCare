import React from "react";
import "../../styles/Quize.css";

const CheckboxInput = () => {
  return (
    <>
      <label for="option1" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 1</span>
      </label>
      <label for="option2" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 2</span>
      </label>
      <label for="option3" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 3</span>
      </label>
      <label for="option4" class="quiz_item wrong">
        <input type="checkbox" id="option1" />
        <span>A new answer 4</span>
      </label>
      <label for="option5" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 5</span>
      </label>
      <label for="option6" class="quiz_item correct">
        <input type="checkbox" id="option1" />
        <span>A new answer 6</span>
      </label>
      <label for="option7" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 7</span>
      </label>
      <label for="option8" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 8</span>
      </label>
      <label for="option9" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 9</span>
      </label>
      <label for="option10" class="quiz_item">
        <input type="checkbox" id="option1" />
        <span>A new answer 10</span>
      </label>
    </>
  );
};

export default CheckboxInput;
