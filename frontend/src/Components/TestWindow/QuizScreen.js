import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Options from "./Options";
import Navigation from "./Navigation";
import QuestionNavigator from "./QuestionNavigator";


function QuizScreen({ questions = [] }) {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5 * 60);
    const [quizData, setQuizData] = useState(() => {
        const stored = localStorage.getItem("techVidya");
        return stored ? JSON.parse(stored) : questions;
    });

    useEffect(() => {
        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    if (!quizData || quizData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center w-full space-y-3">
                <div
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    role="status"
                />
                <p className="font-bold text-gray-500">Loading questions...</p>
            </div>
        );
    }

    const currQuestion = quizData[index];
    const progress = ((index + 1) / quizData.length) * 100;

    const next = () => setIndex((i) => Math.min(i + 1, quizData.length - 1));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));
    const jumpTo = (i) => setIndex(i);

    const handleOptionClick = (option) => {
        const updatedData = [...quizData];
        if (updatedData[index].chosen === option) delete updatedData[index].chosen;
        else updatedData[index] = { ...updatedData[index], chosen: option };

        setQuizData(updatedData);
        localStorage.setItem("techVidya", JSON.stringify(updatedData));
    };

    const handleSubmit = () => {
        localStorage.setItem("techVidya", JSON.stringify(quizData));
        navigate("../analysis");
    };

    return (
        <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">

            <div className="flex justify-between items-center mb-4">
                <Timer
                    timeLeft={timeLeft}
                />
                <ProgressBar
                    progress={progress}
                />
                <p>{index + 1}/{quizData.length}</p>
            </div>

            <Question
                question={currQuestion}
                index={index}
            />
            <Options
                currQuestion={currQuestion}
                handleOptionClick={handleOptionClick}
            />

            <Navigation
                index={index}
                length={quizData.length}
                prev={prev}
                next={next}
            />

            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                >
                    Submit Test
                </button>
            </div>

            <QuestionNavigator
                quizData={quizData}
                jumpTo={jumpTo}
            />
        </div>
    );
}

export default QuizScreen;



