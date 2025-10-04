function Navigation({ index, length, prev, next }) {
    return (
        <div className="mt-4 flex justify-between">
            <button
                onClick={prev}
                disabled={index === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
                Previous
            </button>
            <button
                onClick={next}
                disabled={index === length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}

export default Navigation;
