import { getSelectedText, getCorrectText } from "./CalculateScore";

export default function QuestionCard({ question: q, index }) {
    const selected = getSelectedText(q);
    const correct = getCorrectText(q);

    const isUnattempted = !selected;
    const perQuestionScore = isUnattempted || !correct ? 0 : selected === correct ? 4 : -1;

    return (
        <div className="p-4 rounded-xl border border-gray-100 shadow-sm bg-white transition hover:shadow-md">
            <div className="flex items-start justify-between">

                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {index + 1}. {q.question}
                </h3>
                <span className={`text-sm font-medium px-2 py-1 rounded ${perQuestionScore > 0 ? "bg-green-100 text-green-700 border border-green-200" : perQuestionScore < 0 ? "bg-red-100 text-red-700 border border-red-200" : "bg-gray-100 text-gray-700 border border-gray-200"}`}>
                    {perQuestionScore > 0 ? "+4" : perQuestionScore < 0 ? "-1" : "0"}
                </span>

            </div>

            <ul className="mt-3 space-y-2">
                {Array.isArray(q.options) && q.options.length ? q.options.map((opt, i) => {
                    const isCorrectOpt = opt === correct;
                    const isUserChoice = opt === selected;
                    const base = "px-3 py-2 rounded-lg border flex items-center justify-between";
                    const className = isCorrectOpt ? `${base} bg-green-50 border-green-300 text-green-800 font-semibold` : isUserChoice && !isCorrectOpt ? `${base} bg-red-50 border-red-300 text-red-700` : `${base} bg-gray-50 border-gray-200 text-gray-700`;

                    return (
                        <li key={i} className={className}>
                            <span className="truncate">
                                {opt}
                            </span>
                            <span className="ml-4 text-sm">
                                {isCorrectOpt ? "✔️" : isUserChoice ? "✖️" : ""}
                            </span>
                        </li>
                    );
                }) : <li className="text-sm text-gray-500">No options available.</li>}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                {isUnattempted ?
                    <span className="text-gray-600">
                        You did not attempt this question.
                    </span>
                    : (
                        <span className="text-gray-700">
                            Your answer:
                            <span className={selected === correct ? "font-semibold text-green-700" : "font-semibold text-red-700"}>
                                {selected}
                            </span>
                        </span>
                    )}
                {correct &&
                    <span className="text-gray-600">
                        • Correct answer:
                        <span className="font-medium text-green-800">
                            {correct}
                        </span>
                    </span>
                }
            </div>
        </div>
    );
}
