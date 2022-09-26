import React from 'react';
import img from "../../Images/success.png";
import "../../styles/Answer.css";

const Answerbaner = () => {
    return (
        <>
            <div className="answer_banner">
                <div className="answer_cntBox">
                    <div className="ans_cnt">
                        <h4>Your Answer is</h4>
                        <h4>5 out of 10</h4>
                    </div>
                </div>
                <div className="answer_imgbox">
                    <div className="ans_img">
                        <img src={img} alt="answerBanner" />
                    </div>
                </div>
            </div>
            <div className="quiz_heading">
                <h1>Question Analysis</h1>
                <p>You answerd 5 out of 10 questions correctly</p>
            </div>
        </>
    );
};

export default Answerbaner;