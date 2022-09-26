import React from "react";
import CheckboxInput from "./CheckboxInput";
import "../../styles/Quize.css";

const Checkbox = ({type, id,text, ...rest}) => {
  return (
    <div className="quiz_wraper">
      <CheckboxInput type={type} id={id} text={text} {...rest}/>
    </div>
  );
};

export default Checkbox;
