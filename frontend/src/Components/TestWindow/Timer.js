function Timer({ timeLeft }) {
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return m < 1 ? `${s} sec` : `${m} min : ${s.toString().padStart(2, "0")} sec`;
    };

    return <p className="font-semibold text-red-600">⏳ {formatTime(timeLeft)}</p>;
}

export default Timer;