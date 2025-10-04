function ProgressBar({ progress }) {
    return (
        <div className="flex-1 mx-4 bg-gray-200 rounded h-3">
            <div
                className="bg-blue-500 h-3 rounded"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;
