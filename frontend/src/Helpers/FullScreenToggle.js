import React from "react";
import useFullscreen from "./FullScreen";

export default function FullScreenToggle() {
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  return (

    <button
      className="bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-500"
      onClick={isFullscreen ? exitFullscreen : enterFullscreen}
    >
      {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
    </button>

  );
}
