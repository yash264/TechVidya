// import React from "react";
// import { useEffect, useState } from "react";


// function Result() {
//     const [questions, setQuestions] = useState([]);

//     useEffect(() => {
//         const stored = localStorage.getItem("quizQuestions");
//         if (!stored) return setQuestions([]);
//         try {
//             const parsed = JSON.parse(stored);
//             setQuestions(Array.isArray(parsed) ? parsed : []);
//         } catch (e) {
//             console.error("Failed to parse quizQuestions from localStorage", e);
//             setQuestions([]);
//         }
//     }, []);

//     // Helper: try to obtain the user's selected answer (as the option TEXT)
//     const getSelectedText = (q) => {
//         // If selection is stored as index
//         const indexKeys = ["selectedIndex", "selectedIdx", "chosenIndex", "userAnswerIndex"];
//         for (const k of indexKeys) {
//             if (typeof q[k] === "number" && Array.isArray(q.options)) {
//                 return q.options[q[k]];
//             }
//         }

//         // If selection is stored as text/value
//         const textKeys = ["selected", "userAnswer", "givenAnswer", "chosen", "choice", "answerGiven"];
//         for (const k of textKeys) {
//             if (q[k] !== undefined && q[k] !== null) {
//                 // If it's a number that corresponds to an options index, try to map
//                 if (typeof q[k] === "number" && Array.isArray(q.options)) {
//                     return q.options[q[k]];
//                 }
//                 return String(q[k]);
//             }
//         }

//         // No selection found
//         return undefined;
//     };

//     // Helper: get correct answer as text (handles index or text)
//     const getCorrectText = (q) => {
//         if (typeof q.answer === "number" && Array.isArray(q.options)) {
//             return q.options[q.answer];
//         }
//         return q.answer !== undefined && q.answer !== null ? String(q.answer) : undefined;
//     };

//     // Score calculation
//     let score = 0;
//     let correctCount = 0;
//     let wrongCount = 0;
//     let unattempted = 0;
//     questions.forEach((q) => {
//         const selected = getSelectedText(q);
//         const correct = getCorrectText(q);

//         if (selected === undefined || selected === null || selected === "") {
//             unattempted++;
//             // no change
//         } else if (correct !== undefined && selected === correct) {
//             correctCount++;
//             score += 4;
//         } else {
//             wrongCount++;
//             score -= 1;
//         }
//     });

//     const maxScore = questions.length * 4;
//     const percent = maxScore > 0 ? Math.round((Math.max(score, 0) / maxScore) * 100) : 0;
//     const progressWidth = `${Math.min(100, Math.max(0, percent))}%`;

//     const handleClear = () => {
//         localStorage.removeItem("quizQuestions");
//         setQuestions([]);
//     };

//     const handleRetake = () => {
//         // Usually you'd redirect to quiz route; simple reload works as a fallback:
//         window.location.reload();
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
//             <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
//                 <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-center">
//                     <div className="text-3xl font-bold text-green-700">{score}</div>
//                     <div className="text-sm text-gray-600">Total Score</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                         ({correctCount} correct • {wrongCount} wrong • {unattempted} unattempted)
//                     </div>
//                 </div>

//                 <div className="flex-1 min-w-0">
//                     <div className="text-sm text-gray-600 mb-2">Progress</div>
//                     <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
//                         <div
//                             className="h-full rounded"
//                             style={{ width: progressWidth, background: "linear-gradient(90deg,#34D399,#10B981)" }}
//                         />
//                     </div>
//                     <div className="mt-2 text-sm text-gray-600">
//                         {percent}% of max score ({score}/{maxScore})
//                     </div>
//                 </div>

//                 <div className="flex gap-2">
//                     <button
//                         onClick={handleRetake}
//                         className="px-3 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
//                     >
//                         Retake / Reload
//                     </button>
//                     <button
//                         onClick={handleClear}
//                         className="px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-50"
//                     >
//                         Clear Results
//                     </button>
//                 </div>
//             </header>

//             <main className="space-y-6">
//                 {questions.length === 0 ? (
//                     <div className="p-6 text-center text-gray-500">No quiz data found in localStorage ("quizQuestions").</div>
//                 ) : (
//                     questions.map((q, idx) => {
//                         const correct = getCorrectText(q);
//                         const selected = getSelectedText(q);
//                         const isUnattempted = selected === undefined || selected === null || selected === "";
//                         const perQuestionScore =
//                             isUnattempted || correct === undefined
//                                 ? 0
//                                 : selected === correct
//                                     ? +4
//                                     : -1;

//                         return (
//                             <div
//                                 key={idx}
//                                 className="p-4 rounded-xl border border-gray-100 shadow-sm bg-white transition hover:shadow-md"
//                             >
//                                 <div className="flex items-start justify-between">
//                                     <h3 className="text-base md:text-lg font-semibold text-gray-800">
//                                         {idx + 1}. {q.question}
//                                     </h3>
//                                     <span
//                                         className={`text-sm font-medium px-2 py-1 rounded ${perQuestionScore > 0
//                                                 ? "bg-green-100 text-green-700 border border-green-200"
//                                                 : perQuestionScore < 0
//                                                     ? "bg-red-100 text-red-700 border border-red-200"
//                                                     : "bg-gray-100 text-gray-700 border border-gray-200"
//                                             }`}
//                                     >
//                                         {perQuestionScore > 0 ? `+4` : perQuestionScore < 0 ? `-1` : `0`}
//                                     </span>
//                                 </div>

//                                 <ul className="mt-3 space-y-2">
//                                     {Array.isArray(q.options) && q.options.length > 0 ? (
//                                         q.options.map((opt, i) => {
//                                             const isCorrectOpt = correct !== undefined && opt === correct;
//                                             const isUserChoice = selected !== undefined && opt === selected;

//                                             const base = "px-3 py-2 rounded-lg border flex items-center justify-between";
//                                             const className = isCorrectOpt
//                                                 ? `${base} bg-green-50 border-green-300 text-green-800 font-semibold`
//                                                 : isUserChoice && !isCorrectOpt
//                                                     ? `${base} bg-red-50 border-red-300 text-red-700`
//                                                     : `${base} bg-gray-50 border-gray-200 text-gray-700`;

//                                             return (
//                                                 <li key={i} className={className}>
//                                                     <span className="truncate">{opt}</span>
//                                                     <span className="ml-4 text-sm">
//                                                         {isCorrectOpt ? "✔️" : isUserChoice ? "✖️" : ""}
//                                                     </span>
//                                                 </li>
//                                             );
//                                         })
//                                     ) : (
//                                         <li className="text-sm text-gray-500">No options available for this question.</li>
//                                     )}
//                                 </ul>

//                                 <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
//                                     {isUnattempted ? (
//                                         <span className="text-gray-600">You did not attempt this question.</span>
//                                     ) : (
//                                         <span className="text-gray-700">
//                                             Your answer:{" "}
//                                             <span className={selected === correct ? "font-semibold text-green-700" : "font-semibold text-red-700"}>
//                                                 {selected}
//                                             </span>
//                                         </span>
//                                     )}

//                                     {correct !== undefined && (
//                                         <span className="text-gray-600"> • Correct answer: <span className="font-medium text-green-800">{correct}</span></span>
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })
//                 )}
//             </main>
//         </div>
//     );
// }

// export default Result;


import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScoreCard from "./ScoreCard";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import { calculateScore } from "./CalculateScore";
import { fetchFeedback } from "../../ExternalAPI/AiService";

function Result() {
    const [questions, setQuestions] = useState([]);
    const [feedback, setFeedback] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("quizQuestions");
        if (!stored) return setQuestions([]);
        try {
            const parsed = JSON.parse(stored);
            setQuestions(Array.isArray(parsed) ? parsed : []);
        } catch (e) {
            console.error("Failed to parse quizQuestions from localStorage", e);
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
        localStorage.removeItem("quizQuestions");
        setQuestions([]);
        navigate("../");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <ScoreCard score={score} correct={correctCount} wrong={wrongCount} unattempted={unattempted} />
                <ProgressBar percent={percent} score={score} maxScore={maxScore} />
                <div className="flex gap-2">
                    <button onClick={handleClear} className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700">
                        Retake the Quiz
                    </button>
                </div>
            </header>

            {/* Show feedback message */}
      {feedback && (
        <div className="p-4 mb-6 rounded-lg bg-yellow-50 border border-blue-200 text-yellow-700 text-center font-medium">
          {feedback}
        </div>
      )}

            <main className="space-y-6">
                {questions.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">No quiz data found in localStorage ("quizQuestions").</div>
                ) : (
                    questions.map((q, idx) => <QuestionCard key={idx} question={q} index={idx} />)
                )}
            </main>
        </div>
    );
}

export default Result;


