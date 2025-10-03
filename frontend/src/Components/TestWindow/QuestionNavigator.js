function QuestionNavigator({ quizData, jumpTo }) {
    return (
        <div className="mt-6 flex justify-center flex-wrap gap-2">
            {quizData.map((q, i) => {
                const color = q.chosen ? "bg-green-500" : "bg-yellow-500";
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
    );
}

export default QuestionNavigator;
