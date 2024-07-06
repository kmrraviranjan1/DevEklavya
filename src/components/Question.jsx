import React from "react";

const Question = ({ question, sn }) => {
  return (
    <div className="shadow-inner my-4 p-4 bg-red-50">
      <p className="italic">Question: {sn}</p>
      <p className="py-2 font-semibold text-xl" >{question?.question}</p>
    </div>
  );
};

export default Question;
