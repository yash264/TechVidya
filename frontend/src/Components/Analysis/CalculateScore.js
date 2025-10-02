
// Get the selected answer text from a question object
export const getSelectedText = (q) => {
    const indexKeys = ["selectedIndex", "selectedIdx", "chosenIndex", "userAnswerIndex"];
    for (const k of indexKeys) {
        if (typeof q[k] === "number" && Array.isArray(q.options)) return q.options[q[k]];
    }

    const textKeys = ["selected", "userAnswer", "givenAnswer", "chosen", "choice", "answerGiven"];
    for (const k of textKeys) {
        if (q[k] !== undefined && q[k] !== null) {
            return typeof q[k] === "number" && Array.isArray(q.options) ? q.options[q[k]] : String(q[k]);
        }
    }

    return undefined;
};

// Get the correct answer text from a question object
export const getCorrectText = (q) => {
    if (typeof q.answer === "number" && Array.isArray(q.options)) return q.options[q.answer];
    return q.answer !== undefined && q.answer !== null ? String(q.answer) : undefined;
};

// Calculate overall score and stats
export const calculateScore = (questions) => {
    let score = 0, correctCount = 0, wrongCount = 0, unattempted = 0;

    questions.forEach((q) => {
        const selected = getSelectedText(q);
        const correct = getCorrectText(q);

        if (!selected) {
            unattempted++;
        } else if (correct && selected === correct) {
            correctCount++;
            score += 4;
        } else {
            wrongCount++;
            score -= 1;
        }
    });

    const maxScore = questions.length * 4;
    const percent = maxScore > 0 ? Math.round((Math.max(score, 0) / maxScore) * 100) : 0;

    return { score, correctCount, wrongCount, unattempted, maxScore, percent };
};
