import { useSearchParams } from "react-router-dom";
import { questionService } from "../service/question.service";
import { useState } from "react";
import Question from "../components/Question";

const Interview = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const value = searchParams.get("value");
  const [data] = useState(questionService.getQuestions(type, value));
  return (
    <div>
      <p className="text-center my-2">
        Interview for <span className="font-bold">{data.topic}</span>{" "}
      </p>
      {data.questions
        ?.filter(({ question }) => question.length)
        ?.map((question, index) => {
          return (
              <Question question={question} sn={index + 1}  key={question.id}/>
          );
        })}
    </div>
  );
};

export default Interview;
