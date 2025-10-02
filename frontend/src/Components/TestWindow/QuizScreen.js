import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function QuizScreen({ questions = [] }) {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes

    // ✅ Load quiz data from localStorage if available
    const [quizData, setQuizData] = useState(() => {
        const stored = localStorage.getItem("quizQuestions");
        return stored ? JSON.parse(stored) : questions;
    });

    // ✅ Timer countdown
    useEffect(() => {
        if (timeLeft <= 0) {
            handleSubmit(); // auto-submit when time runs out
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    if (!quizData || quizData.length === 0) {
        return <p className="text-center text-gray-500">Loading questions...</p>;
    }

    const currQuestion = quizData[index];

    const next = () =>
        setIndex((i) => Math.min(i + 1, quizData.length - 1));

    const prev = () =>
        setIndex((i) => Math.max(i - 1, 0));

    const jumpTo = (i) => setIndex(i);

    // ✅ Toggle answer with single click
    const handleOptionClick = (option) => {
        const updatedData = [...quizData];

        if (updatedData[index].chosen === option) {
            // Already selected → unselect
            delete updatedData[index].chosen;
        } else {
            // Save new option
            updatedData[index] = { ...updatedData[index], chosen: option };
        }

        setQuizData(updatedData);
        localStorage.setItem("quizQuestions", JSON.stringify(updatedData));
    };

    const handleSubmit = () => {
        localStorage.setItem("quizQuestions", JSON.stringify(quizData));
        navigate("../analysis"); // redirect to result page
    };

    // ✅ Timer format
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        if (m < 1) {
            return `${s} sec`; // show only seconds
        }
        return `${m} min : ${s.toString().padStart(2, "0")} sec`;
    };

    const progress = ((index + 1) / quizData.length) * 100;

    return (
        <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
            {/* Timer & Progress */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-red-600">⏳ {formatTime(timeLeft)}</p>
                <div className="flex-1 mx-4 bg-gray-200 rounded h-3">
                    <div
                        className="bg-blue-500 h-3 rounded"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p>
                    {index + 1}/{quizData.length}
                </p>
            </div>

            {/* Question */}
            <p className="mt-1 text-sm text-gray-700">
                Question: {index + 1}
            </p>

            <h3 className="text-lg font-medium text-pretty text-gray-900">
                {currQuestion.question}
            </h3>

            {/* Options */}
            <ul className="mt-3 space-y-2">
                {currQuestion.options.map((option, i) => (
                    <li
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className={`flex items-center gap-2 p-2 border rounded-md cursor-pointer hover:bg-gray-100 ${currQuestion.chosen === option
                            ? "bg-blue-100 border-blue-500"
                            : ""
                            }`}
                    >
                        {/* Radio-like dot */}
                        <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${currQuestion.chosen === option
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-400 bg-white"
                                }`}
                        ></span>
                        {option}
                    </li>
                ))}
            </ul>

            {/* Navigation buttons */}
            <div className="mt-4 flex justify-between">
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={next}
                    disabled={index === quizData.length - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                >
                    Submit Test
                </button>
            </div>

            {/* Question Navigator */}
            <div className="mt-6 flex justify-center flex-wrap gap-2">
                {quizData.map((q, i) => {
                    let color = "bg-yellow-500"; // unanswered
                    if (q.chosen) color = "bg-green-500"; // answered

                    return (
                        <button
                            key={i}
                            onClick={() => jumpTo(i)}
                            title={q.chosen ? `Chosen: ${q.chosen}` : "Not answered"}
                            className={`${color} w-8 h-8 rounded-full text-white flex items-center justify-center hover:opacity-80`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuizScreen;


