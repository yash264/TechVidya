export default function ScoreCard({ score, correct, wrong, unattempted }) {
  return (
    <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-center">
      <div className="text-3xl font-bold text-green-700">
        {score}
      </div>
      <div className="text-sm text-gray-600">
        Total Score
      </div>
      <div className="text-xs text-gray-500 mt-1">
        ({correct} correct • {wrong} wrong • {unattempted} unattempted)
      </div>
    </div>
  );
}
