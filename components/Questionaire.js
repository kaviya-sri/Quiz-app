import React from "react";

const Questionaire=({ showAnswers, handleNextQuestion,  handleAnswer, data:{question,correct_answer, answers},})=>
{
    return(
    <div>
    <div className="ques">
    <h4 className="inques" dangerouslySetInnerHTML={{__html:question}} /> 
    </div>
    <div className="optali">
      {answers.map((answer,idx)=> {
        const changeColor = showAnswers ? answer===correct_answer ? "correct" : "incorrect" : "normal" ;
        return (
        <button key={idx} className={` opt ${changeColor} `} 
        onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}} />
      );
      })}
    </div>
    <div className="next">
    { showAnswers && (
    <button className="nextb" onClick={handleNextQuestion}> Next Question

      </button> )} </div>
  </div>);};
  export default Questionaire ;

