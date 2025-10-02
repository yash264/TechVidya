export default function ProgressBar({ percent, score, maxScore }) {
    const progressWidth = `${Math.min(100, Math.max(0, percent))}%`;
    return (
      <div className="flex-1 min-w-0">
        <div className="text-sm text-gray-600 mb-2">Progress</div>
        <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
          <div className="h-full rounded" style={{ width: progressWidth, background: "linear-gradient(90deg,#34D399,#10B981)" }} />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {percent}% of max score ({score}/{maxScore})
        </div>
      </div>
    );
  }
  