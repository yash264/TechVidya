import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ScoreCard from "./ScoreCard";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import calculateScore from "./CalculateScore";
import { fetchFeedback } from "../../ExternalAPI/AiService";


function Result() {
    const [questions, setQuestions] = useState([]);
    const [feedback, setFeedback] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("techVidya");

        if (!stored) return setQuestions([]);

        try {
            const parsed = JSON.parse(stored);
            setQuestions(Array.isArray(parsed) ? parsed : []);
        }
        catch (error) {
            console.error(error);
            setQuestions([]);
        }
    }, []);

    const { score, correctCount, wrongCount, unattempted, maxScore, percent } = calculateScore(questions);

    useEffect(() => {
        if (questions.length === 0) return;

        const getFeedback = async () => {
            const msg = await fetchFeedback(score, maxScore);
            setFeedback(msg);
        };

        getFeedback();
    }, [score, maxScore, questions.length]);


    const handleClear = () => {
        localStorage.removeItem("techVidya");
        setQuestions([]);
        setFeedback("");

        navigate("../");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <ScoreCard
                    score={score}
                    correct={correctCount}
                    wrong={wrongCount}
                    unattempted={unattempted}
                />
                <ProgressBar
                    percent={percent}
                    score={score}
                    maxScore={maxScore}
                />
                <div className="flex gap-2">
                    <button
                        onClick={handleClear}
                        className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700"
                    >
                        Retake the Quiz
                    </button>
                </div>
            </header>

            {feedback && (
                <div
                    className="p-4 mb-6 rounded-lg bg-yellow-50 border border-blue-200 text-yellow-700 text-center font-medium"
                >
                    {feedback}
                </div>
            )}

            <main className="space-y-6">
                {questions.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                        No quiz data found in Database.
                    </div>
                ) : (
                    questions.map((q, idx) =>
                        <QuestionCard
                            key={idx}
                            question={q}
                            index={idx}
                        />
                    )
                )}
            </main>
        </div>
    );
}

export default Result;


