function Options({ currQuestion, handleOptionClick }) {
    return (
        <ul className="mt-3 space-y-2">
            {currQuestion.options.map((option, i) => (
                <li
                    key={i}
                    onClick={() => handleOptionClick(option)}
                    className={`flex items-center gap-2 p-2 border rounded-md cursor-pointer hover:bg-gray-100 ${
                        currQuestion.chosen === option ? "bg-blue-100 border-blue-500" : ""
                    }`}
                >
                    <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            currQuestion.chosen === option
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-400 bg-white"
                        }`}
                    ></span>
                    {option}
                </li>
            ))}
        </ul>
    );
}

export default Options;
