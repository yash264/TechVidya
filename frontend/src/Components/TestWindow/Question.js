function Question({ question, index }) {
    return (
        <div className="mt-2">
            <p className="mt-1 text-sm text-gray-700">Question: {index + 1}</p>
            <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
        </div>
    );
}

export default Question;
