import React from "react";

function Question({ data, selected, onAnswer }) {
    return (
        <div className="question">
            <h3>{data.question}</h3>
            {data.options.map((opt, i) => (
                <button
                    key={i}
                    className={selected === opt ? "selected" : ""}
                    onClick={() => onAnswer(opt)}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default Question;
