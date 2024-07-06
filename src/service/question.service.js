import {
  backend,
  behavioral,
  css,
  database,
  hr,
  html,
  javascript,
  node,
  react,
  redux,
} from "../data/topic";

const questions = {
  backend: {
    topic: "Backend",
    questions: backend,
  },
  behavioral: {
    topic: "HR",
    questions: behavioral,
  },
  css: {
    topic: "CSS",
    questions: css,
  },
  database: {
    topic: "Database",
    questions: database,
  },
  hr: {
    topic: "HR",
    questions: hr,
  },
  html: {
    topic: "HTML",
    questions: html,
  },
  javascript: {
    topic: "Javascript",
    questions: javascript,
  },
  node: {
    topic: "Node",
    questions: node,
  },
  react: {
    topic: "React",
    questions: react,
  },
  redux: {
    topic: "Redux",
    questions: redux,
  },
};

const getQuestions = (type, value) => {
  const data = questions[value];
  return data ?? [];
};

export const questionService = {
  getQuestions,
};
