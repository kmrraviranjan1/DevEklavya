import { useSearchParams } from "react-router-dom";
import { questionService } from "../service/question.service";
import { useState } from "react";

const Interview = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const value = searchParams.get("value");
  const [data] = useState(questionService.getQuestions(type, value));
  return (
    <div>
      Interview for {data.topic}
      {data.questions?.map((question) => {
        return <div key={question.id}>Question: {question.question}</div>;
      })}
    </div>
  );
};

export default Interview;
