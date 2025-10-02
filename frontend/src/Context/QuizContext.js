import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);

    console.log("ques",questions);

    return (
        <QuizContext.Provider
            value={{
                questions, setQuestions,
                answers, setAnswers,
                topic, setTopic,
                loading, setLoading
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

